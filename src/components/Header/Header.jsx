import React, { useRef, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "./Header.module.css";

const Header = () => {
  const [text, setText] = useState("");
  const searchInput = useRef();
  const form = useRef();

  //handler
  const handleClick = (e) => {
    e.preventDefault();
    setText("");
  };

  //

  return (
    <header className=" w-full max-w-screen-2xl mx-auto flex text-white justify-between h-16 items-center">
      <div className="flex items-center ml-8">
        <AiFillYoutube className="text-3xl text-red-600" />
        <h1 className="text-3xl">Youflix</h1>
      </div>

      <form className="flex items-center mr-8 h-10 border-b border-b-white" ref={form}>
        <input className="bg-transparent border-none h-8 outline-none p-2 text-white" type="text" ref={searchInput} placeholder="Search.." value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick} className=" text-3xl border-none mr-2">
          <BiSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
