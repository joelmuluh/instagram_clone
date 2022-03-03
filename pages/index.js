import React, { useEffect } from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
function Home() {
  // const router = useRouter();
  // const userInfo = useSelector((state) => state.user.userInfo);
  // const getUserData = async () => {
  //   alert("hello");
  // };
  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push("/login");
  //   } else {
  //     getUserData();
  //   }
  // }, [userInfo]);
  return (
    <>
      <Header />
      <div className="lg:flex w-[100%] sm:max-w-[600px] w-[100%] lg:max-w-[940px] sm:mx-auto">
        <Feed />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
