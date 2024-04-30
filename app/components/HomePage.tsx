/* eslint-disable react/prop-types */
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import type { MemeTemplate } from "~/types/MemeTemplate";
import { generateMemeUrl } from "~/services/memeGenService";
import { saveMeme } from "~/http/api";

interface Props {
  templates: MemeTemplate[];
  generatedMemes: string[];
}

const Memes: React.FC<Props> = ({ templates, generatedMemes }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplate | null>(
    null
  );
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const generateMeme = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selectedTemplate === null && !text) return;
      if (selectedTemplate) {
        const memeUrl = await generateMemeUrl(selectedTemplate.id, text);
        if (memeUrl){
          await saveMeme(memeUrl);
          navigate(`/meme-result?memeUrl=${encodeURIComponent(memeUrl)}`);
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className=" bg-secondary overflow-x-hidden">
      <div className=" flex items-center justify-between px-8 py-2 bg-primary text-white">
        <div className="flex items-center">
          <img src="/icons/image.png" alt="" className=" w-12" />
          <span className=" font-bold text-2xl">
            Dev<span className=" font-light">zero</span>
          </span>
        </div>
        <h1 className=" text-3xl font-bold">Meme Generator</h1>
      </div>
      {generatedMemes.length > 0 && (
        <div>
          <h1 className=" text-center text-4xl my-10 font-bold">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-text-gradient">
              Memes
            </span>
          </h1>
          <div className="mt-4">
          {generatedMemes.map((meme, ind) => (
            <div key={ind} className="mb-1">
              <div className=" shadow p-1 hover:bg-blue-100 text-center">
                <a href={meme} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  {meme}
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      <h1 className=" text-center text-4xl my-10 font-bold">
        Epic{" "}
        <span className="text-transparent bg-clip-text bg-text-gradient">
          Meme Templates
        </span>{" "}
        to Make You Go Viral
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {templates.map((template, ind) => (
          <button
            key={ind}
            className="cursor-pointer bg-primary p-2 text-tertiary rounded-lg text-center shadow-lg flex flex-col items-center"
            onClick={() => setSelectedTemplate(template)}
          >
            <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
              <img
                src={template.blank}
                alt={template.name}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-2 truncate">{template.name}</p>
          </button>
        ))}
      </div>
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
          <form
            onSubmit={generateMeme}
            className=" overflow-hidden mx-4 md:mx-0 flex flex-col items-center"
          >
            <img
              src={selectedTemplate.blank}
              alt={selectedTemplate.name}
              className=" max-w-[65%] max-h-[65%] rounded-md"
            />
            <div className="p-4 w-full">
              <input
                type="text"
                placeholder="Enter your text here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="mt-2 w-full p-2 border border-gray-300 rounded"
              />
              <div className="flex space-x-2 mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 flex-1 bg-quaternary text-white rounded hover:bg-quinary transition duration-150"
                >
                  Generate
                </button>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="px-4 py-2 flex-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-150"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Memes;
