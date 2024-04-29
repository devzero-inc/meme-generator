import Meme from "~/models/Meme";

const saveMemeInDB = async (memeUrl: string) => {
  try {
    const newMeme = new Meme({ imageUrl: memeUrl });
    await newMeme.save();
  } catch (error) {
    console.log("Error:", error);
  }
}

const getMemesFromDB = async () => {
  try {
    const memes = await Meme.find();
    const memeUrls = memes.map((meme) => meme.imageUrl);
    return memeUrls;
  } catch (error) {
    console.log("Error:", error);
  }
}

export { saveMemeInDB, getMemesFromDB };