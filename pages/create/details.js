import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
function PostDetails() {
  const [postText, setPostText] = useState("");
  const postDetail = useSelector((state) => state.user.postDetail);
  const [postImage, setPostImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (postDetail !== null) {
      const img = URL.createObjectURL(postDetail.postImage);
      setPostImage(img);
    } else {
      router.push("/");
    }
  }, []);

  const uploadPost = () => {
    alert("We are working on this");
  };
  return (
    <div>
      <div
        style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
        className="h-[45px] md:h-[60px] px-[15px]"
      >
        <div className=" flex items-center h-full justify-between lg:max-w-[940px] lg:mx-auto">
          <KeyboardArrowLeftIcon
            style={{ transform: "rotate(-90deg)" }}
            sx={{ width: 40, height: 40 }}
            onClick={() => router.push("/create/style")}
          />
          <p className="font-bold">New Post</p>
          <Button onClick={() => uploadPost()}>Share</Button>
        </div>
      </div>
      <div className="flex justify-between mt-[20px] px-[15px] lg:max-w-[940px] lg:mx-auto">
        <Avatar sx={{ width: 40, height: 40 }} />
        <textarea
          className="flex-1 mx-[15px] outline-none"
          placeholder="Write a caption..."
          onChange={(e) => setPostText(e.target.value)}
        />
        <img
          className="h-[60px] w-[80px] object-cover"
          src={postImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default PostDetails;
