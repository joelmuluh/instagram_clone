import React, { useEffect } from "react";
import { Avatar, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
function User() {
  // const router = useRouter();
  // const userInfo = useSelector((state) => state.user.userInfo);
  // const getUserData = async () => {
  //   console.log(userInfo);
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
      <div className="lg:max-w-[914px] px-[0.8rem]  md:max-w-[600px] md:mx-auto ">
        <div className="mt-[2rem] flex md:space-x-[1rem] md:mx-[3rem] flex-col md:flex-row  relative border-b pb-[1.5rem] mb-[100px]">
          <div className="md:hidden">
            <Avatar src="/images/three.jpg" sx={{ width: 75, height: 75 }} />
          </div>
          <div className="hidden md:inline-flex flex-[0.35] ">
            <Avatar src="/images/three.jpg" sx={{ width: 150, height: 150 }} />
          </div>
          <div className="flex-[0.65]">
            <div className="flex flex-col md:flex-row md:space-x-[15px] space-y-[10px] md:items-center mb-[1.5rem]">
              <p className="md:text-[30px] text-[20px] font-[100]">
                john.history
              </p>
              <div className="flex items-center space-x-[10px]">
                <Button
                  variant="contain"
                  style={{
                    backgroundColor: "white",
                    fontSize: "12px",
                    height: "30px",
                    padding: "0 15px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    textTransform: "capitalize",
                  }}
                >
                  Message
                </Button>
                <Button
                  variant="contain"
                  style={{
                    backgroundColor: "white",
                    height: "30px",
                    width: "85px",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <PersonIcon sx={{ width: 18, height: 18 }} />
                  <DoneIcon sx={{ width: 14, height: 14 }} />
                </Button>
                <Button
                  variant="contain"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(0,0,0,0.1)",
                    height: "30px",
                    width: "15px",
                  }}
                >
                  <KeyboardArrowDownIcon sx={{ width: 18, height: 18 }} />
                </Button>

                <DotsHorizontalIcon className="h-7 ml-[15px]" />
              </div>
              <div className="flex space-x-[13px] hidden">
                <Button
                  variant="contain"
                  style={{
                    backgroundColor: "white",
                    fontSize: "12px",

                    width: "100px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    textTransform: "capitalize",
                  }}
                >
                  Edit Profile
                </Button>
                <DotsHorizontalIcon className="h-7 ml-[10px]" />
              </div>
            </div>

            <div className="flex space-x-[2.5rem] px-[0.8rem] md:px-0 userFollowership-mobile text-[14px] justify-center md:justify-start">
              <FollowerDetails number={5} genre="posts" />
              <FollowerDetails number={100} genre="followers" />
              <FollowerDetails number={250} genre="following" />
            </div>

            <div className="max-w-[230px]">
              <p className="font-semibold text-[17px] mt-[1rem] mb-[0.6]">
                John History
              </p>
              <p>
                {
                  "There's no much to say but I just want everyone around me to be real"
                }
              </p>
            </div>
            <p className="text-[12px] text-[gray] mt-[12px]">
              Followed by <span className="font-bold">donald.trump</span> and
              <span className="font-bold"> joe_biden</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

const FollowerDetails = ({ number, genre }) => (
  <>
    <p className="flex md:inline-flex flex-col md:flex-row md:space-x-[10px] items-center md:text-[16px]">
      <span className="font-semibold md:font-bold">{number}</span>
      <span className="text-gray-400 md:text-black">{genre}</span>
    </p>
  </>
);
