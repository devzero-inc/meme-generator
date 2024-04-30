import { ActionFunctionArgs } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { saveMemeInDB } from "~/services/dbService";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const data = await request.json();
    const memeUrl = data.memeUrl;
    await saveMemeInDB(memeUrl);

    return new Response(JSON.stringify({ memeUrl }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
    });
  }
}

const MemeResult = () => {
  const [searchParams] = useSearchParams();
  const memeUrl = searchParams.get("memeUrl");

  return (
    <div className=" bg-secondary h-screen flex flex-col items-center justify-center gap-8 overflow-auto">
      <h1 className=" bg-clip-text text-transparent bg-text-gradient font-bold text-4xl">
        Your Generated Meme
      </h1>
      {memeUrl ? (
        <img
          src={memeUrl}
          alt="Generated Meme"
          className=" max-w-[70%] max-h-[70%] rounded-md border-8 border-primary "
        />
      ) : (
        <p>No meme generated yet.</p>
      )}
    </div>
  );
};

export default MemeResult;
