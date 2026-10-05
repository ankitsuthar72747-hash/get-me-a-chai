import React from "react";
import Link from "next/link";
export default function About() {
  return (
    <>
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-6xl">☕</div>

          <h1 className="text-4xl font-bold md:text-6xl">
            About Get Me A Chai
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Get Me A Chai is a simple platform where you can support someone
            by sending them a virtual chai. Just choose a person, enter your
            message and amount, and make a donation.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <h2 className="mb-5 text-3xl font-bold">
            What is Get Me A Chai?
          </h2>

          <p className="leading-8 text-slate-400">
            Get Me A Chai is a donation platform that makes it easy for people
            to support each other. Users can create an account and share
            their personal page. Other users can visit that page and send a
            donation along with their name and a personal message.
          </p>

          <p className="mt-4 leading-8 text-slate-400">
            The idea is simple — if someone has helped, inspired, entertained,
            or simply deserves a chai, you can send one their way. ☕
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            How It Works
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
              <div className="mb-5 text-5xl">👤</div>

              <h3 className="mb-3 text-xl font-semibold">
                Create an Account
              </h3>

              <p className="text-slate-400">
                Login and create your own profile so people can support you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
              <div className="mb-5 text-5xl">☕</div>

              <h3 className="mb-3 text-xl font-semibold">
                Send a Chai
              </h3>

              <p className="text-slate-400">
                Visit someone's page, choose a donation amount, and leave a
                message.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center">
              <div className="mb-5 text-5xl">❤️</div>

              <h3 className="mb-3 text-xl font-semibold">
                Support Someone
              </h3>

              <p className="text-slate-400">
                Complete the payment and let the person know that someone
                appreciates them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Simple & Easy
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                🔐 Login
              </h3>
              <p className="text-slate-400">
                Create an account and manage your own profile.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                💳 Donations
              </h3>
              <p className="text-slate-400">
                Send donations securely through Razorpay.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                💬 Messages
              </h3>
              <p className="text-slate-400">
                Add a personal message when sending a donation.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                👥 Support Others
              </h3>
              <p className="text-slate-400">
                Find someone's profile and send them a virtual chai.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="px-6 py-20 text-center">
        <div className="text-5xl">☕</div>

        <h2 className="mt-5 text-3xl font-bold">
          Buy someone a chai.
        </h2>

        <p className="mt-3 text-slate-400">
          A small donation can be a big gesture.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-full bg-yellow-400 px-7 py-3 font-semibold text-black transition hover:bg-yellow-300"
        >
          Get Started
        </Link>
      </section>
    </main>
</>
  );
}
export const metadata = {
  title: "About - Get Me A Chai",
};