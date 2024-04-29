const saveMeme = async (memeUrl: string) => {
  try {
    const response = await fetch("/meme-result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ memeUrl }),
    });
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

export {saveMeme}