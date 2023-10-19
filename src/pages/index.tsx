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




    const kaf = text.replaceAll("ك", "گ")
    const jeem = kaf.replaceAll("ج", "چ")
    const zayan  = jeem.replaceAll("ز", "ژ")
    const baa  = zayan.replaceAll("ب", "پ")
    const seen  = baa.replaceAll("س", "ـшـ")
    const sss  = seen.replaceAll("ف", "ڤ")
    const ssss  = sss.replaceAll(" ", "‌")
    const awdasd  = ssss.replaceAll("ى", "ي")
    
    
 
    return awdasd
  }


  return (
    <div className="w-full max-w-5xl h-full p-7 block mx-auto">
      <h1 className="text-3xl uppercase text-center font-bold m-1"> يلعن ابوك يا مارك</h1>
      <textarea dir="rtl" value={text} className="p-1 focus:outline-none w-full h-2/5 border border-cyan-800" onChange={handleChange}>

      </textarea>

      <div className="relative h-2/5">
        <button className="absolute top-0 left-0 bg-slate-500 p-2 text-white" onClick={() => window.navigator.clipboard.writeText(angry(text)).then(() => alert("Copied!"))}>CoPy</button>
         <p dir="rtl" title="angry text" className="w-full h-full rtl text-right " >
            {angryText}
        </p>

      </div>       Made with hate by <a className="text-red-600" rel="noreferrer" target="_blank" href="https://3adl.dev">Ahmad Addel</a>

    </div>
  );
};

export default Home;
