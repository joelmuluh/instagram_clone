import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
function Posts() {
  const [userIn, setUserIn] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    if (userInfo) {
      setUserIn(true);
    }
  }, [userInfo]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setAllPosts(snapshot.docs);
          console.log(snapshot.docs);
        }
      ),
    []
  );
  return (
    <div className="lg:w-[590px] bg-white">
      {allPosts.map((post) => (
        <Post
          key={post.id}
          profilePhoto={post.data().userPhoto}
          postImage={post.data().postImage}
          numOfLikes={post.data().numOfLikes}
          numOfComments={post.data().numOfComments}
          userName={post.data().userName}
          postDesc={post.data().postDesc}
          // timeOfPost={post.data().timestamp}
          postId={post.id}
          userId={post.data().userId}
        />
      ))}
    </div>
  );
}

export default Posts;
