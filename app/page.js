import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>

      <div className="flex flex-col justify-center items-center justify-center h-[30vh] md:h-[40vh] gap-2 text-white">
        <div className="font-bold md:text-4xl text-2xl md:pl-0 pl-2.5 flex justify-center items-center">Buy Me a Chai<span><Image className="pb-4 w-11 h-14 md:w-22 md:h-26" src="/tea.gif" width={88} height={88} alt="" /></span></div>
        <p className="pb-2 justify-center md:pl-0 pl-4 text-sm md:text-lg">
          A crowdfunding platform for chai lovers to support their favorite chai vendors and help them grow their business.
        </p>
        <div className="flex gap-2">
          <Link href="/login">
          <button type="button" className="text-white  bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal md:font-medium rounded-lg text-[12px] md:text-sm px-2 md:px-4 py-1 md:py-2.5 text-center leading-5">Start here</button>
          </Link>
          <Link href="/about">
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal md:font-medium rounded-lg text-[12px] md:text-sm px-2 py-1 md:px-4 md:py-2.5 text-center leading-5">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">
      </div>

      <div className="container mx-auto text-white py-4 md:py-14">
        <h1 className="text-xl md:text-3xl font-semibold md:font-bold text-center mb-4">Your Fans Can Buy You a Chai</h1>
        <div className="flex justify-around">
          <div className="item flex flex-col justify-center items-center space-y-3 mt-6">
            <Image className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14" src="/man.gif" width={88} height={88} alt="" />
            <p className="font-bold text-sm md:text-xl">Fans Want To Help</p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5">Your Fans Are Available For You To Help You</p>
          </div>
          <div className="item flex flex-col justify-around items-center space-y-3 mt-6">
            <Image className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14" src="/coin.gif" width={88} height={88} alt="" />
            <p className="font-bold text-sm md:text-xl">Fans Want To Help</p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5">Your Fans Are Available For You To Help You</p>
          </div>
          <div className="item flex flex-col justify-around items-center space-y-3 mt-6">
            <Image className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14" src="/group.gif" width={88} height={88} alt="" />
            <p className="font-bold text-sm md:text-xl">Fans Want To Help</p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5">Your Fans Are Available For You To Help You</p>
          </div>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">
      </div>
      <div className="container mx-auto text-white py-12 mb-16">
        <h1 className="md:text-3xl text-xl font-semibold md:font-bold text-center mb-4">Learn More About Us</h1>
        <div className="flex justify-around">
          <div className="item flex flex-col justify-center items-center space-y-3 mt-6">
            <Image className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14" src="/man.gif" width={88} height={88} alt="" />
            <p className="font-bold text-sm md:text-xl">Fans Want To Help</p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5">Your Fans Are Available For You To Help You</p>
          </div>
          <div className="item flex flex-col justify-around items-center space-y-3 mt-6">
            <Image className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14" src="/coin.gif" width={88} height={88} alt="" />
            <p className="font-bold text-sm md:text-xl">Fans Want To Help</p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5">Your Fans Are Available For You To Help You</p>
          </div>
          <div className="item flex flex-col justify-around items-center space-y-3 mt-6">
            <Image className="bg-slate-400 rounded-full p-2 md:w-22 md:h-22 w-14 h-14" src="/group.gif" width={88} height={88} alt="" />
            <p className="font-bold text-sm md:text-xl">Fans Want To Help</p>
            <p className="text-[12px] md:text-lg md:pl-0 pl-2.5">Your Fans Are Available For You To Help You</p>
          </div>
        </div>

      </div>

    </>
  );
}
