"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signUpWithGoogle, handleLogOut, checkIfLoggedIn } from "../firebase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AccountButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = checkIfLoggedIn();
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleSignIn = async () => {
    try {
      const userData = await signUpWithGoogle();
      if (userData && userData.photoURL) {
        localStorage.setItem("photoURL", userData.photoURL);
        setIsLoggedIn(true);
      }
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
        <DropdownMenu>
          <DropdownMenuTrigger
            className="fixed top-0 right-0 m-4 flex flex-row flex-shrink-0
            items-center justify-center truncate transition duration-200
            ease-out disabled:pointer-events-auto disabled:opacity-50 bg-white
            shadow ring-1 ring-gray-200 hover:bg-gray-50 px-2.5 sm:px-2 py-2 h-9
            sm:h-8 sm:text-sm rounded-lg font-medium input-focus-ring
            select-none"
          >
            My Account
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/subscription")}>
              Subscription
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
