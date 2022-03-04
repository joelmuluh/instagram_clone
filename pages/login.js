import { Button } from "@mui/material";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function Login() {
  const router = useRouter();
  const userInfo = useSelector((state) => state.user.userInfo);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  const login = async () => {
    try {
      const userInfo = await signInWithPopup(auth, provider);
      if (userInfo) {
        dispatch({
          type: "LOGIN",
          payload: {
            userId: userInfo.user.uid,
            userName: userInfo.user.displayName,
            userEmail: userInfo.user.email,
            userPhoto: userInfo.user.photoURL,
          },
        });
        router.push("/");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex  justify-center mt-[10vh]">
      <div>
        <h1 className="font-bold text-[2rem] mb-[1.5rem]">
          Welcome to JoelsInsta
        </h1>
        <Button
          style={{
            backgroundColor: "#2aa6f7",
            color: "white",
            padding: "10px 1rem",
            borderRadius: "6px",
          }}
          onClick={login}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;