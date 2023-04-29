import moment from "moment";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark, BsFillEyeFill, BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, rating, total_view } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl rounded-md mb-7">
        <div className="flex items-center bg-[#F3F3F3] p-5">
          <div className="flex flex-grow items-center gap-3">
            <img className="w-10 h-10 rounded-full" src={author?.img} alt="" />
            <div>
              <h4 className="text-base font-semibold">{author?.name}</h4>
              <p className="text-base">
                {moment(author?.published_date).format("YYYY-MM-D")}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <BsBookmark className="text-xl" />
            <AiOutlineShareAlt className="text-xl" />
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold mb-5">{title}</h1>
          <figure className="mb-8">
            <img src={image_url} alt="Shoes" />
          </figure>
          <p className="mb-5">
            {details?.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details?.slice(0, 250)}...
                <Link
                  to={`/news/${_id}`}
                  className="text-red-500 font-semibold"
                >
                  Read More
                </Link>
              </>
            )}
          </p>
        </div>
        <div className="border-t border-[#E7E7E7]"></div>
        <div className="flex justify-between items-center gap-3 p-5">
          <div className="flex gap-2">
            <div className="m-0">
              <Rating
                placeholderRating={rating?.number}
                readonly
                emptySymbol={
                  <BsStar className="text-red-500 text-2xl"></BsStar>
                }
                placeholderSymbol={
                  <BsStarFill className="text-red-500 text-2xl"></BsStarFill>
                }
                fullSymbol={
                  <BsStarFill className="text-red-500 text-2xl"></BsStarFill>
                }
              ></Rating>
            </div>
            <p className="text-lg font-medium">{rating?.number}</p>
          </div>
          <div className="flex gap-2">
            <BsFillEyeFill className="text-2xl"></BsFillEyeFill>
            <p className="text-base font-medium">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
