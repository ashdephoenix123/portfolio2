"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const BlogCard = ({
  blog: { title, metadescription, author, authorimg, date, slug },
}) => {
  const [heart, setHeart] = useState(false);

  const changeHeart = () => {
    setHeart(!heart);
  };

  return (
    <div className="block  rounded my-2 p-4 hover:bg-slate-500 dark:bg-gray-600 dark:text-zinc-300 scaleIt transition-all bg-slate-600 text-white">
      <h2 className="head3 font-semibold dark:text-neutral-300 flex justify-between items-center mb-2">
        {title}
        {!heart ? (
          <div className="w-8 ml-4">
            <BsHeart
              onClick={changeHeart}
              className="hover:cursor-pointer max-[456px]:text-2xl"
            />{" "}
          </div>
        ) : (
          <div className="w-8 ml-4">
            <BsHeartFill
              className="text-pink-600 hover:cursor-pointer max-[456px]:text-2xl heartAnimation"
              onClick={changeHeart}
            />
          </div>
        )}
        {/* {!heart ? <BsHeart onClick={changeHeart} className='hover:cursor-pointer ml-4 max-[456px]:text-5xl' /> : <BsHeartFill className='text-pink-600 hover:cursor-pointer ml-4 max-[456px]:text-5xl heartAnimation' onClick={changeHeart} />} */}
      </h2>
      <div className="fontxs min-[1200px]:text-sm flex items-center">
        <Image
          src="/me.jpg"
          className=" object-cover rounded-full overflow-hidden w-[30px] h-[30px]"
          width={100}
          height={100}
          alt={authorimg}
        />
        <span className="ml-2">
          <span className="font-bold">
            {author.slice(0, 1).toUpperCase().concat(author.slice(1))}
          </span>{" "}
          posted on {date}
        </span>
      </div>
      <p className="fontsm min-[1200px]:text-base mt-1 mb-3">
        {metadescription.slice(0, 300).concat("...")}
      </p>
      <Link className="btn" href={`/blogs/${slug}`}>
        Read
      </Link>
    </div>
  );
};

export default BlogCard;
