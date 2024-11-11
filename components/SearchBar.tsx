"use client";
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from 'react-icons/io';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full hidden md:inline-flex flex-1 h-12 relative">
        <BsSearch className="text-xl absolute left-2.5 mt-3.5 " />
        <input type="text" placeholder="Search products..." className="flex-1 h-full outline-none bg-transparent placeholder:-text-grayText border-[1px] border-blackaccent/30 rounded-xl pl-10 pr-28"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        {search && <IoMdClose className="text-blackaccent/50 hover:text-brightRed hoverEffect cursor-pointer absolute right-24 top-4" onClick={() => setSearch("")}/>}
        <button className="bg-ceruleanBlue text-accentWhite absolute right-0 px-3.5 py-1.5 mr-1.5 text-sm hover:bg-limeGreen hoverEffect font-medium top-2 rounded-lg">
            Search
        </button>
    </div>
  )
}

export default SearchBar 