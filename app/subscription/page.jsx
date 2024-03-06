"use client";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { FaCircleCheck } from "react-icons/fa6";
import {
  signUpWithGoogle,
  updateUserSubscriptionStatus,
  checkIfLoggedIn,
} from "../firebase";

export default function SubscriptionPage() {
  const router = useRouter();
  const handlePlanAction = async (planType) => {
    const isLoggedIn = checkIfLoggedIn();
    if (!isLoggedIn) {
      try {
        await signUpWithGoogle();
        handleSubscription(planType);
      } catch (error) {
        console.error("Error with subscription process:", error);
      }
    } else {
      handleSubscription(planType);
    }
  };

  const handleSubscription = async (planType) => {
    if (planType !== "basic") {
      // Retrieve the user's ID to update their subscription status
      const userId = localStorage.getItem("uid");
      await updateUserSubscriptionStatus(userId, true);
      alert(`You are now subscribed to the ${planType} plan.`);
      router.push("/");
    } else {
      // Logic for basic plan, if any
      alert("Signed up for the basic plan.");
      router.push("/");
    }
  };

  return (
    <>
      <Header></Header>
      <Head>
        <title>Premium Plans</title>
      </Head>
      <div className="relative h-2/3">
        <Image
          src="/Subscription.png"
          alt="Subscription background"
          width={1000}
          height={500}
          style={{ height: "60vh", width: "100%" }}
          className="absolute h-full w-full "
        />
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
        <div className="w-full z-10">
          <div className="text-center mb-16">
            <h2
              className="text-6xl font-extrabold text-white"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Premium Plans
            </h2>
            <p
              className="text-white mt-5"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Subscribe to find unlimited sources!
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            {/* Start Plan */}
            <div className="bg-white p-8 w-1/3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 hover:scale-105">
              <h1 className="text-black text-2xl mb-2 font-extrabold">Basic</h1>
              <p className="text-black text-3xl mb-4 font-bold">$0</p>
              <ul className="text-black mb-4">
                <li>
                  <FaCircleCheck className="inline" /> 10 Limited Expert
                  Searches
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Basic Profile Previews
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Personalized
                  Recommendations{" "}
                </li>
              </ul>
              <button
                onClick={() => handlePlanAction("basic")}
                className="bg-black text-white rounded py-2 px-6 hover:bg-gray-300"
              >
                Sign Up
              </button>
            </div>

            {/* Basic Plan - Bigger Size */}
            <div className="bg-black p-10 w-1/3 transform scale-101 rounded-lg shadow-xl hover:shadow-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <h1 className="text-white text-2xl mb-2 font-extrabold">
                Premium
              </h1>
              <p className="text-white text-3xl mb-4 font-bold">$12</p>
              <ul className="text-white mb-4">
                <li>
                  <FaCircleCheck className="inline" /> Unlimited Expert Searches
                </li>
                <li>
                  <FaCircleCheck className="inline" /> In-Depth Expert Profiles{" "}
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Direct Messaging
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Opportunity to Comment on
                  Experts
                </li>
                <li>
                  <FaCircleCheck className="inline" /> User-Rated Sources{" "}
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Advanced Recommendation
                  Engine{" "}
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Priority Customer Support{" "}
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Ad-Free Experience{" "}
                </li>
              </ul>
              <button
                onClick={() => handlePlanAction("premium")}
                className="bg-white text-black rounded py-2 px-6 hover:bg-gray-500"
              >
                Order Now
              </button>
            </div>

            <div className="bg-white p-8 w-1/3 rounded-lg shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 hover:scale-105">
              <h1 className="text-black text-2xl mb-2 font-extrabold">
                Business
              </h1>
              <p className="text-black text-3xl mb-4 font-bold">$99</p>
              <ul className="text-black mb-4">
                <li>
                  <FaCircleCheck className="inline" /> Analytics Dashboard
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Customizable Source Lists
                </li>
                <li>
                  <FaCircleCheck className="inline" /> Team Access, Unlimited
                  Users
                </li>
              </ul>
              <button
                onClick={() => handlePlanAction("premium")}
                className="bg-black text-white rounded py-2 px-6 hover:bg-gray-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
