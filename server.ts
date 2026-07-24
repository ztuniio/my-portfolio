import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for CV Check
  app.post("/api/cv-check", async (req, res) => {
    try {
      const { cvText, jobDescription } = req.body;
      if (!cvText) {
        return res.status(400).json({ error: "CV text is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured on the server." });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are an expert ATS (Applicant Tracking System) analyst and professional CV reviewer for HireSignal, a CV writing service serving Pakistan and the Gulf region. Given a candidate's CV text and, if provided, a target job description, do the following: (1) Calculate an ATS match score from 0-100 based on keyword alignment, formatting compatibility, and relevant experience match. (2) List 3-5 specific strengths of the CV. (3) List 3-5 specific, actionable improvements the candidate should make. (4) If a job description was provided, list important keywords from the job description missing from the CV. Be direct, specific, and practical — avoid generic advice. Respond ONLY in strict JSON format: {"score": number, "strengths": string[], "improvements": string[], "missingKeywords": string[]}. Do not include any text outside the JSON object.`;

      const prompt = `
=== CANDIDATE CV ===
${cvText}

=== TARGET JOB DESCRIPTION (IF PROVIDED) ===
${jobDescription || "Not provided"}
      `;

      const modelsToTry = ["gemini-3.6-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
      let responseText: string | undefined;
      let lastError: any = null;

      for (const modelName of modelsToTry) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              systemInstruction: systemInstruction,
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  score: {
                    type: Type.NUMBER,
                    description: "ATS Match Score from 0 to 100",
                  },
                  strengths: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "List of 3 to 5 specific strengths of the CV",
                  },
                  improvements: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "List of 3 to 5 specific, actionable improvements",
                  },
                  missingKeywords: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "Important keywords missing from the CV vs the job description (if provided)",
                  }
                },
                required: ["score", "strengths", "improvements", "missingKeywords"]
              }
            }
          });

          if (response.text) {
            responseText = response.text;
            break;
          }
        } catch (err: any) {
          console.warn(`Model ${modelName} failed, trying fallback if available...`, err?.message || err);
          lastError = err;
        }
      }

      if (!responseText) {
        throw lastError || new Error("The AI service is currently experiencing high demand. Please try again in a few moments.");
      }

      // Parse and send the clean JSON response
      const result = JSON.parse(responseText.trim());
      res.json(result);

    } catch (error: any) {
      console.error("Error in /api/cv-check:", error);
      res.status(500).json({ error: error?.message || "Failed to analyze CV. Please try again." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
