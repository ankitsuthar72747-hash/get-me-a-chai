import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:mt-5 mt-5 items-center justify-center h-[30vh] md:h-[40vh] gap-2 text-white">
        <div className="font-bold md:text-4xl text-2xl md:pl-0 pl-2.5 flex justify-center items-center">
          Buy Me a Chai
          <span>
            <Image
              className="pb-4 w-11 h-14 md:w-22 md:h-26"
              src="/tea.gif"
              width={88}
              height={88}
              alt=""
            />
          </span>
        </div>
        <p className="pb-2 justify-center md:pl-0 pl-4 text-sm md:text-lg">
          A crowdfunding platform for chai lovers to support their favorite chai
          vendors and help them grow their business.
        </p>
        <div className="flex gap-2">
          <Link href="/login">
            <button
              type="button"
              className="text-white  bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal md:font-medium rounded-lg text-[12px] md:text-sm px-2 md:px-4 py-1 md:py-2.5 text-center leading-5"
            >
              Start here
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal md:font-medium rounded-lg text-[12px] md:text-sm px-2 py-1 md:px-4 md:py-2.5 text-center leading-5"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>
      <div className="container mx-auto text-white py-4 md:py-14">
        <h1 className="text-xl md:text-3xl font-semibold md:font-bold text-center mb-4">
          Your Fans Can Buy You a Chai
        </h1>

        <div className="flex justify-around">
          <div className="item flex flex-col items-center space-y-3 mt-6 w-1/3 text-center">
            <Image
              className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14"
              src="/man.gif"
              width={88}
              height={88}
              alt=""
            />
            <p className="font-bold text-sm md:text-xl min-h-[28px]">
              Build Your Profile
            </p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5 min-h-[72px]">
              Create your own profile and let your fans know what you’re working
              on.
            </p>
          </div>

          <div className="item flex flex-col items-center space-y-3 mt-6 w-1/3 text-center">
            <Image
              className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14"
              src="/coin.gif"
              width={88}
              height={88}
              alt=""
            />
            <p className="font-bold text-sm md:text-xl min-h-[28px]">
              Receive Support
            </p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5 min-h-[72px]">
              Your fans can support you with a small contribution through secure
              online payments.
            </p>
          </div>

          <div className="item flex flex-col items-center space-y-3 mt-6 w-1/3 text-center">
            <Image
              className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14"
              src="/group.gif"
              width={88}
              height={88}
              alt=""
            />
            <p className="font-bold text-[12px] md:text-xl min-h-[28px]">
              Connect With Your Fans
            </p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5 min-h-[72px]">
              See your supporters and their messages, and keep growing your
              community.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white py-12 mb-16">
        <h1 className="md:text-3xl text-xl font-semibold md:font-bold text-center mb-4">
          Learn More About Us
        </h1>

        <div className="flex justify-around">
          <div className="item flex flex-col items-center space-y-3 mt-6 w-1/3 text-center">
            <Image
              className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14"
              src="/man.gif"
              width={88}
              height={88}
              alt=""
            />
            <p className="font-bold text-sm md:text-xl min-h-[28px]">
              Made For Creators
            </p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5 min-h-[72px]">
              A simple platform for creators to receive support from the people
              who enjoy their work.
            </p>
          </div>

          <div className="item flex flex-col items-center space-y-3 mt-6 w-1/3 text-center">
            <Image
              className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14"
              src="/coin.gif"
              width={88}
              height={88}
              alt=""
            />
            <p className="font-bold text-sm md:text-xl min-h-[28px]">
              Every Chai Matters
            </p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5 min-h-[72px]">
              Even a small contribution can help creators continue doing what
              they love.
            </p>
          </div>

          <div className="item flex flex-col items-center space-y-3 mt-6 w-1/3 pb-5 text-center">
            <Image
              className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14"
              src="/group.gif"
              width={88}
              height={88}
              alt=""
            />
            <p className="font-bold text-sm md:text-xl min-h-7">
              Support & Grow
            </p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5 min-h-18">
              Give your fans an easy way to support you and be a part of your
              journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
