"use server";
import Razorpay from "razorpay";
import Payment from "@/app/Models/Payment";
import connectDB from "@/app/db/connectDb";
import User from "@/app/Models/User";

export const initiate = async (amount, username, paymentform) => {
  await connectDB();
  let user = await User.findOne({ username });

    if (!user) {
        throw new Error("User not found");
    }
  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: user.razorpaysecret,
  });
  let options = {
    amount: Number.parseInt(amount), // amount in the smallest currency unit
    currency: "INR",
  };
  let x = await instance.orders.create(options);
  await Payment.create({
    oid: x.id,
    amount: amount / 100,
    to_user: username,
    name: paymentform.name,
    message: paymentform.message,
  });
  return x;
};

export const fetchuser = async (username) => {
  await connectDB();

 

  let u = await User.findOne({ username }).lean();



  if (!u) return null;

  return JSON.parse(JSON.stringify(u));
};

export const fetchpayments = async (username) => {
  await connectDB();
  let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(5).lean();
  return JSON.parse(JSON.stringify(p));
};
// export const updateProfile = async (data, oldusername) => {
//   await connectDB();

//   const ndata = Object.fromEntries(data);

//   if (oldusername !== ndata.username) {
//     const u = await User.findOne({ username: ndata.username });

//     if (u) {
//       return { error: "Username already exists" };
//     }
//   }

//   await User.updateOne(
//     { username: oldusername },
//     { $set: ndata }
//   );

//   return { success: true };
// };
export const updateProfile = async (data) => {
  await connectDB();

  const ndata = Object.fromEntries(data);

  const existingUser = await User.findOne({
    username: ndata.username,
  });

  if (existingUser && existingUser.email !== ndata.email) {
    return { error: "Username already exists" };
  }
 
  const result = await User.updateOne({ email: ndata.email }, { $set: ndata });



  return { success: true };
};
