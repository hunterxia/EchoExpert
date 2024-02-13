"use client";
import React, { useState, useEffect } from "react";
import { signUpWithGoogle, handleLogOut, checkIfLoggedIn } from "../firebase";

export default function AccountButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!checkIfLoggedIn());
  }, []);

  const handleSignIn = async () => {
    try {
      await signUpWithGoogle();
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await handleLogOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <button
          className="fixed top-0 right-0 m-4 flex flex-row flex-shrink-0 items-center justify-center truncate transition duration-200 ease-out disabled:pointer-events-auto disabled:opacity-50 bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 px-2.5 sm:px-2 py-2 h-9 sm:h-8 sm:text-sm rounded-lg font-medium input-focus-ring select-none"
          onClick={handleSignOut}
        >
          <span className="material-symbols-outlined">person</span>
          Sign Out
        </button>
      ) : (
        <button
          className="fixed top-0 right-0 m-4 flex flex-row flex-shrink-0 items-center justify-center truncate transition duration-200 ease-out disabled:pointer-events-auto disabled:opacity-50 bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 px-2.5 sm:px-2 py-2 h-9 sm:h-8 sm:text-sm rounded-lg font-medium input-focus-ring select-none"
          onClick={handleSignIn}
        >
          <span className="material-symbols-outlined">person</span>
          Sign In
        </button>
      )}
    </div>
  );
}
