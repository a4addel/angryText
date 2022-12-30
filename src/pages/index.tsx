import { type NextPage } from "next";
import React, { ChangeEvent } from "react";

const Home: NextPage = () => {
  const [text, setText] = React.useState("");
  const [angryText, setAngryText] = React.useState("");

  const handleChange = React.useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    setAngryText(angry(e.target.value))
  }, [text]);


  function angry(text: string): string {

    const isCaptalized = (index: number) => (index + 1) % 2 === 0;

    return text.split("").map((e: string, i: number) => {
      const isCaptalizedLetter = isCaptalized(i);
      return isCaptalizedLetter ? e.toLocaleUpperCase() : e.toLocaleLowerCase();
    }).join("")
  }


  return (
    <div className="w-full max-w-5xl h-full p-7 block mx-auto">
      <h1 className="text-3xl uppercase text-center font-bold m-1">Angry Text 🤬 </h1>
      <textarea value={text} className="p-1 focus:outline-none w-full h-2/5 border border-cyan-800" onChange={handleChange}>

      </textarea>

      <div className="relative h-2/5">
        <button className="absolute top-0 right-0 bg-slate-500 p-2 text-white" onClick={() => window.navigator.clipboard.writeText(angry(text)).then(() => alert("Copied!"))}>CoPy</button>
         <textarea title="angry text" className="w-full h-full " disabled value={angryText}>

        </textarea>

      </div>       Made with hate by <a className="text-red-600" rel="noreferrer" target="_blank" href="https://3adl.dev">Ahmad Addel</a>

    </div>
  );
};

export default Home;
