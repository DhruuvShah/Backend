const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});


async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction:`
      You are an expert in generating captions for an images.
      You generate single line caption for image.
      Your caption should be short and concise.
      You use hashtags and emojis in caption.
      Generate caption in tapori language.
      Create aesthetic caption.
      The Caption should be in dark humor.
      `
    },
  });

  return response.text;
}

module.exports = generateCaption;