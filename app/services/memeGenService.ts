import type { MemeTemplate } from "~/types/MemeTemplate";

export const getMemeTemplates = async () => {
  try {
    const response = await fetch("https://api.memegen.link/templates");
    if (!response.ok) {
      throw new Response("Failed to load meme templates", {
        status: response.status,
      });
    }
    const templates: MemeTemplate[] = await response.json();
    return templates;
  } catch (error) {
    console.error(error)
  }
};

export const generateMemeUrl = async (selectedTemplate: string, text: string) => {
  try {
    const memeUrl = `https://api.memegen.link/images/${selectedTemplate}/${encodeURIComponent(text)}.png`;
    return memeUrl;
  } catch (error) {
    console.log(error);
  }
}