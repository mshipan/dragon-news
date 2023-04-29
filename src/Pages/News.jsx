import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Dragon News</h1>
      <div className="border border-[#E7E7E7] p-8">
        <img className="mb-5 w-full" src={image_url} alt="" />
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="mb-8">{details}</p>
        <Link to={`/category/${category_id}`}>
          <button className="py-2 px-5 bg-red-600 text-white font-semibold flex items-center gap-3">
            <BsArrowLeft />
            All News in This Category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
