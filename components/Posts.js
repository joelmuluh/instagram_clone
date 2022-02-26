import React from "react";
import Post from "./Post";
function Posts() {
  return (
    <div className="lg:w-[590px] bg-white">
      <Post
        profilePhoto={"/images/seven.jpg"}
        postImage={"/images/three.jpg"}
        numOfLikes={"9,681"}
        userName={"javascript.js"}
        numOfComments={"83"}
        timeOfPost={"10 Hours AGO"}
      />
      <Post
        profilePhoto={"/images/six.jpg"}
        postImage={"/images/one.jpg"}
        numOfLikes={"681"}
        userName={"the_real_software"}
        numOfComments={"42"}
        timeOfPost={"4 Hours AGO"}
      />
      <Post
        profilePhoto={"/images/eight.jpg"}
        postImage={"/images/two.jpg"}
        numOfLikes={"81"}
        userName={"jamespaul"}
        numOfComments={"133"}
        timeOfPost={"1 Hours AGO"}
      />
      <Post
        profilePhoto={"/images/nine.jpg"}
        postImage={"/images/four.jpg"}
        numOfLikes={"281"}
        userName={"economic_retrogration"}
        numOfComments={"92"}
        timeOfPost={"6 Hours AGO"}
      />
    </div>
  );
}

export default Posts;
