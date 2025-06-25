import React from "react";
import { app } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { AiFillGoogleCircle } from "react-icons/ai";

function Auth() {
  const auth = getAuth(app);
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.getCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultFromGoogle);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <AiFillGoogleCircle size={20} />
        Google Auth
      </button>
    </>
  );
}

export default Auth;
