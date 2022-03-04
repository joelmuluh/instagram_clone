import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Sidebar() {
  const [userIn, setUserIn] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    if (userInfo) {
      setUserIn(true);
    }
  }, [userInfo]);
  return (
    <div className="hidden relative lg:block flex-grow mt-[3.5rem] ml-[2rem]">
      <div className="sticky top-[5.8rem]">
        <div className="flex justify-between items-center">
          <Avatar src="/images/four.jpg" sx={{ width: 60, height: 60 }} />
          <div className="ml-[15px] flex-1 ">
            <strong>{userIn ? userInfo?.userName : "Mr Joel"}</strong>
            <span className="block text-gray-400">
              {userIn ? userInfo?.userName : "Mr Joel"}
            </span>
          </div>

          <span className="text-[#2AA6F7] font-semibold">Switch</span>
        </div>
        <div className="my-[2rem] flex justify-between">
          <p>Suggested For You</p>
          <span>See All</span>
        </div>
        <div className="space-y-[8px]">
          <Suggestion name="johndoe" image="/images/one.jpg" />
          <Suggestion name="jane_doe" image="/images/two.jpg" />
          <Suggestion name="peter_parker" image="/images/three.jpg" />
          <Suggestion name="james_paul" image="/images/four.jpg" />
          <Suggestion name="leonardsnart" image="/images/five.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const Suggestion = ({ name, image }) => {
  return (
    <div className="flex justify-between items-center text-[14px]">
      <img className="rounded-full w-[35px] h-[35px] " src={image} alt="" />
      <div className="ml-[15px] flex-1 ">
        <strong>{name}</strong>
        <span className="block text-gray-400">Follows you</span>
      </div>

      <span className="text-[#2AA6F7] font-semibold">Follow</span>
    </div>
  );
};
