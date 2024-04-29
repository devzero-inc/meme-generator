import type { MetaFunction } from "@remix-run/node";
import Memes from "~/components/HomePage";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MemeTemplate } from "~/types/MemeTemplate";
import { getMemeTemplates } from "~/services/memeGenService";
import { connectDB } from "~/lib/db";
import { getMemesFromDB } from "~/services/dbService";


export const meta: MetaFunction = () => {
  return [
    { title: "Meme Generator" },
    { name: "description", content: "Welcome to Meme Generator!" },
  ];
};

export const loader: LoaderFunction = async (): Promise<Response> => {
  try {
    await connectDB();
    const memeTemplates = await getMemeTemplates();
    const generatedMemes = await getMemesFromDB();
    return json({ memeTemplates, generatedMemes });
  } catch (error) {
    throw new Error("Failed to load meme templates");
  }
};


export default function Index() {
  const { memeTemplates, generatedMemes } = useLoaderData<{ memeTemplates: MemeTemplate[], generatedMemes: string[] }>();
  return (
    <div>
      <Memes templates={memeTemplates} generatedMemes={generatedMemes} />
    </div>
  );
}
