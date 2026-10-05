"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { initiate, fetchuser, fetchpayments } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentsPage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setcurrentUser] = useState(null);
  const [payments, setPayments] = useState([]);
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast.success("Payment successful!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
      router.push(`/${username}`);
    }
  }, [searchParams]);

  async function pay(amount) {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser.razorpayid,
      amount: amount,
      currency: "INR",
      name: "Get me a chai",
      description: "Test Transaction",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name,
        email: session?.user?.email,
      },
      theme: {
        color: "#3399cc",
      },
      config: {
        display: {
          blocks: {
            upi_block: {
              name: "Pay via UPI",
              instruments: [{ method: "upi" }],
            },
          },
          sequence: ["block.upi_block"],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
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
      />

      {!currentUser ? (
        <div>Loading...</div>
      ) : (
        <>
          <Script src="https://checkout.razorpay.com/v1/checkout.js" />
          <div className="w-full min-h-screen">
            <div className="relative w-full md:h-96 h-45">
              <Image
                className="object-fit  w-full h-fit md:w-full md:h-96"
                src={currentUser.coverpic || "/poster1.jpg"}
                alt=""
                width={1600}
                height={384}
                priority
              />
              {/* <div className="absolute md:-bottom-22 top-20 md:top-80 md:left-200 left-44 md:right-[46%] border-slate-500 border-2 rounded-full size-fit overflow-hidden">
                <Image
                  className="w-22 h-22 md:w-45 md:h-32 rounded-full size-fit object-cover"
                  src={currentUser.profilepic}
                  width={128}
                  height={128}
                  alt=""
                />
              </div> */}
              <div className="absolute left-1/2 -translate-x-1/2 md:-bottom-22 -bottom-0 border-slate-500 border-2 rounded-full overflow-hidden">
                <Image
                  className="w-22 h-22 md:w-40 md:h-40 rounded-full object-cover"
                  src={currentUser.profilepic}
                  width={128}
                  height={128}
                  alt=""
                />
              </div>
            </div>
            <div className="info md:my-24 my-0 text-white flex flex-col items-center justify-center">
              <div className="md:font-bold font-semibold text-lg md:text-xl pb-2">
                {username}
              </div>
              <div className="text-slate-400 text-[12px] md:text-sm">
                Lets help {currentUser.name} get a chai!
              </div>
              <div className="text-slate-400 text-[12px] md:text-sm">
                {payments.length} Payments. {currentUser.name} has received ₹
                {payments.reduce((acc, p) => acc + p.amount, 0)}
              </div>
              <div className="payment flex md:flex-row flex-col gap-3 w-full md:w-[80%] mt-10">
                <div className="supporters bg-slate-900 text-white p-4 md:p-10 md:w-1/2 rounded-lg md:h-110 h-100 md:mx-0 mx-4">
                  <h2 className="md:text-2xl text-lg font-semibold md:font-bold md:my-5 ">
                    Top 10 Supporters
                  </h2>
                  <ul className="mx-4">
                    {payments.length === 0 && (
                      <div className="text-slate-400 text-center my-4 md:my-10">
                        No supporters yet. Be the first one to support!
                      </div>
                    )}
                    {payments.map((p, i) => {
                      return (
                        <li key={i} className="my-3 flex gap-2 items-center">
                          <Image
                            className="md:w-10 w-8"
                            src="/avatar.gif"
                            alt="user avatar"
                            width={40}
                            height={40}
                          />
                          <span className="text-[16px]">
                            {p.name} donated{" "}
                            <span className="font-bold text-[16.5px]">
                              ₹{p.amount}
                            </span>{" "}
                            with a message: "{p.message}"
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="makePayement bg-slate-900 text-white p-1 px-4 md:p-10 md:w-1/2 rounded-lg mb-20 md:mx-0 mx-4">
                  <h2 className="text-xl md:text-2xl font-bold my-3 md:my-5">
                    Make a payement
                  </h2>
                  <form action="">
                    <input
                      name="name"
                      onChange={handlechange}
                      value={paymentform.name}
                      className="w-full p-2 rounded-lg my-2 bg-slate-800 text-sm md:text-[16px]"
                      type="text"
                      placeholder="Enter your name"
                    />
                    <input
                      name="message"
                      onChange={handlechange}
                      value={paymentform.message}
                      className="w-full p-2 rounded-lg my-2 bg-slate-800 text-sm md:text-[16px]"
                      type="text"
                      placeholder="Enter your message"
                    />

                    <input
                      name="amount"
                      onChange={handlechange}
                      value={paymentform.amount}
                      className="w-full p-2 rounded-lg my-2 bg-slate-800 text-sm md:text-[16px]"
                      type="number"
                      placeholder="Enter amount"
                    />
                    <button
                      type="button"
                      onClick={() => pay(Number(paymentform.amount) * 100)}
                      disabled={
                        !paymentform.amount ||
                        !paymentform.name ||
                        !paymentform.message
                      }
                      className="w-full text-white disabled:to-slate-400 disabled:from-purple-200 bg-linear-to-br from-purple-800 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-sm px-4 py-2 md:px-4 md:py-2.5 text-center leading-5 my-1"
                    >
                      Pay
                    </button>
                    <div className="flex gap-2 w-full relative my-2">
                      <button
                        type="button"
                        className="bg-slate-800 text-sm md:text-lg text-white p-2 md:p-2 rounded-lg hover:bg-slate-700"
                        onClick={() => pay(1000)}
                      >
                        pay ₹10
                      </button>
                      <button
                        type="button"
                        className="bg-slate-800 text-sm md:text-lg text-white p-2 md:p-2 rounded-lg hover:bg-slate-700"
                        onClick={() => pay(2000)}
                      >
                        pay ₹20
                      </button>
                      <button
                        type="button"
                        className="bg-slate-800 text-sm md:text-lg text-white p-2 md:p-2 rounded-lg hover:bg-slate-700"
                        onClick={() => pay(3000)}
                      >
                        pay ₹30
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentsPage;
