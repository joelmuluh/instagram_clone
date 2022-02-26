import React from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <div className="lg:flex w-[100%] sm:max-w-[600px] w-[100%] lg:max-w-[940px] sm:mx-auto">
        <Feed />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
