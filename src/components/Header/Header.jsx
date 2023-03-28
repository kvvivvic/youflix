import React, { useEffect, useRef, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Header.module.css";

const Header = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const searchInput = useRef();
  const form = useRef();

  //handler

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  //
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className=" w-full max-w-screen-2xl mx-auto flex text-white justify-between h-16 items-center">
      <Link to="/" className="flex items-center ml-8">
        <AiFillYoutube className="text-3xl text-red-600" />
        <h1 className="text-3xl">Youflix</h1>
      </Link>

      <form className="flex items-center mr-8 h-10 border-b border-b-white" ref={form} onSubmit={handleSubmit}>
        <input className="bg-transparent border-none h-8 outline-none p-2 text-white" type="text" ref={searchInput} placeholder="Search.." value={text} onChange={(e) => setText(e.target.value)} />
        <button className=" text-3xl border-none mr-2">
          <BiSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
