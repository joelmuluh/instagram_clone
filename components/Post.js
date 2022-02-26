import React, { useState } from "react";

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as LikedHeart } from "@heroicons/react/solid";
import { BookmarkIcon as BookmarkedIcon } from "@heroicons/react/solid";
import Popup from "./Popup";
import Head from "next/head";
function Post({
  profilePhoto,
  postImage,
  numOfLikes,
  userName,
  numOfComments,
  timeOfPost,
}) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [fadePostBtn, setFadePostBtn] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Head>
        {/* <title>Joel's Instagram</title> */}
        <link rel="icon" href="/images/instagram_icon.jpg" />
      </Head>
      <div className="lg:border mb-[1rem]">
        <div className="flex px-[1rem] py-[15px] pt-[0.7rem] items-center">
          <img
            style={{ border: "2px solid tomato" }}
            className="w-[45px] rounded-[50%] h-[45px] object-cover p-1"
            src={profilePhoto}
            alt="some stuff"
          />
          <p
            style={{ fontWeight: "600" }}
            className="flex-1 ml-[15px] text-[13px]"
          >
            {userName}
          </p>
          <DotsHorizontalIcon
            className="h-7"
            onClick={() => setShowPopup(true)}
          />
        </div>
        <img
          className="h-[400px] lg:h-[550px] object-cover w-full"
          src={postImage}
          alt="some stuff"
        />
        <div className="pt-[1rem] px-[1rem] text-[14px]">
          <div className="flex justify-between">
            <div className="space-x-[10px] flex">
              {liked ? (
                <LikedHeart
                  onClick={() => setLiked(!liked)}
                  className="h-7 cursor-pointer transition-all duration-150 ease-out text-red-500"
                />
              ) : (
                <HeartIcon
                  onClick={() => setLiked(!liked)}
                  className="h-7 hover:opacity-[0.5] cursor-pointer transition-all duration-150 ease-out "
                />
              )}

              <ChatIcon className="h-7 hover:opacity-[0.5] cursor-pointer transition-all duration-150 ease-out" />
              <PaperAirplaneIcon className="h-7 hover:opacity-[0.5] cursor-pointer transition-all duration-150 ease-out" />
            </div>
            {bookmarked ? (
              <BookmarkedIcon
                onClick={() => setBookmarked(!bookmarked)}
                className="h-7 cursor-pointer transition-all duration-150 ease-out"
              />
            ) : (
              <BookmarkIcon
                onClick={() => setBookmarked(!bookmarked)}
                className="h-7 hover:opacity-[0.5] cursor-pointer transition-all duration-150 ease-out "
              />
            )}
          </div>
          <p className="mt-[0.7rem] font-semi-bold">{numOfLikes} likes</p>
          <p
            style={{ fontWeight: "600" }}
            className="mb-[0.2rem] font-semibold text-[13px]"
          >
            {userName}
          </p>
          <p className="text-gray-400 mb-[0.6rem]">
            View all {numOfComments} comments
          </p>
          <p className="text-gray-400">{timeOfPost}</p>
          <div className="hidden border-t h-[60px] lg:flex mt-[1rem] text-[18px] items-center">
            <EmojiHappyIcon className="h-7" />
            <input
              type="text"
              placeholder="Add a comment"
              className="flex-grow h-full outline-none border-none mx-[10px]"
              onChange={(e) => setFadePostBtn(e.target.value ? false : true)}
            />
            <button
              disabled={fadePostBtn ? true : false}
              className={`font-bold text-[#2AA6F7] ${
                fadePostBtn && "opacity-[0.4]"
              }`}
            >
              Post
            </button>
          </div>
        </div>
        {showPopup && (
          <Popup setShowPopup={setShowPopup}>
            <ul className="w-[70vw] md:w-[400px] text-[14px]">
              <li className="py-[13px] text-center border-b text-red-500 font-bold">
                Report
              </li>
              <li className="py-[13px] text-center border-b text-red-500 font-bold">
                Unfollow
              </li>
              <li className="py-[13px] text-center border-b">Go to post</li>
              <li className="py-[13px] text-center border-b">Share to...</li>
              <li className="py-[13px] text-center border-b">Copy Link</li>
              <li className="py-[13px] text-center border-b">Embed</li>
              <li className="py-[13px] text-center border-b">Cancel</li>
            </ul>
          </Popup>
        )}
      </div>
    </>
  );
}

export default Post;
