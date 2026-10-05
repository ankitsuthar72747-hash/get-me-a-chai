"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});

  const getData = async () => {
    if (!session?.user?.username) return;
    let u = await fetchuser(session.user.username);
    if (u) {
      setform(u);
    }
  };

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (session?.user?.username) {
      getData();
    }
  }, [status, session, router]);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (!session?.user?.username) return;

    const result = await updateProfile(e, session.user.username);

    if (result?.error) {
      alert(result.error);
      return;
    }

    toast("Profile updated successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  if (status === "loading") {
    return <div className="text-white text-center py-10">Loading...</div>;
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="absolute top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] text-white"></div>
      <div className="container mx-auto py-5">
        <h1 className="text-white text-center text-xl md:pt-0 pt-10 md:text-3xl pb-5 p-6 font-bold">
          Welcome to your Dashboard
        </h1>
        <form className="max-w-2xl md:px-0 px-4 mx-auto" action={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={form.name ? form.name : ""}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={form.email ? form.email : ""}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input forusername */}
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={form.username ? form.username : ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input for profile picture of input type text */}
          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              id="profilepic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input for cover pic  */}
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              id="coverpic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input razorpay id */}
          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Razorpay Id
            </label>
            <input
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              type="text"
              name="razorpayid"
              id="razorpayid"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* input razorpay secret */}
          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 text-sm font-normal md:font-medium text-gray-900 dark:text-white"
            >
              Razorpay Secret
            </label>
            <input
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              type="text"
              name="razorpaysecret"
              id="razorpaysecret"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Submit Button  */}
          <div className="my-6">
            <button
              type="submit"
              className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
