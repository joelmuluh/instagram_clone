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
        postDesc={"java"}
        numOfComments={"83"}
        timeOfPost={"10 Hours AGO"}
      />
      <Post
        profilePhoto={"/images/six.jpg"}
        postImage={"/images/one.jpg"}
        numOfLikes={"681"}
        userName={"the_real_software"}
        postDesc={
          "Blanditiis ea voluptatum eos, deleniti est delectus unde consequuntur neque ab dolorem reprehenderit! Odit officiis laudantium dolores impedit rerum consequuntur ex, autem repudiandae dignissimos iure, eaque tempore? Eius autem et laborum? Dolore, nisi id adipisci soluta repellendus doloribus architecto"
        }
        numOfComments={"42"}
        timeOfPost={"4 Hours AGO"}
      />
      <Post
        profilePhoto={"/images/eight.jpg"}
        postImage={"/images/two.jpg"}
        numOfLikes={"81"}
        userName={"jamespaul"}
        postDesc={
          "Eius autem et laborum? Dolore, nisi id adipisci soluta repellendus doloribus architecto"
        }
        numOfComments={"133"}
        timeOfPost={"1 Hours AGO"}
      />
      <Post
        profilePhoto={"/images/nine.jpg"}
        postImage={"/images/four.jpg"}
        numOfLikes={"281"}
        userName={"economic_retrogration"}
        postDesc={"Hello people"}
        numOfComments={"92"}
        timeOfPost={"6 Hours AGO"}
      />
    </div>
  );
}

export default Posts;
