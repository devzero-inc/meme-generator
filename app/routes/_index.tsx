import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Meme Generator" },
    { name: "description", content: "Welcome to Meme Generator!" },
  ];
};

export default function Index() {
  return (
    <div>
      Hello World
    </div>
  );
}
