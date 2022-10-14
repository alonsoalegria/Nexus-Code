import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import flogo from "../public/images/flogo.png";
import pchristina from "../public/images/pexels-christina.jpg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

function Home() {
  return (
    <div className="space-y-20 relative">
        <header className="flex justify-around items-center py-4 bg-white">
          <div className="relative w-36 h-10">
            <Image src={flogo} alt="logo" layout="fill" objectFit="contain"/>
            </div>
        <div className="flex items-center">
            <div className=" space-x-8 pr-4">
              {/*<HeaderLink Icon={SearchIcon} text="Search"/>
              <HeaderLink Icon={ControlPointRoundedIcon} text="Upload"/>
              <HeaderLink Icon={AccountCircleIcon} text="Account"/>
              */}
              <HeaderLink Icon={AccountCircleIcon} text="Sign In"/>
            </div>
            <div className="pl-4 hidden sm:flex">
            <button className=" text-green-900 bg-green-400 font-semibold shadow-lg rounded-lg border border-green-400 px-5 py-1.5 hover:shadow-green-500/70">
              Get Started
              </button>
            </div>  
        </div>
    </header>

      <main className="flex flex-col space-y-4 space-x-5 xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="lg:pt-16 text-3xl md:text-5xl text-black-800/80 max-w-xl !leading-snug pl-4 xl:pl-0" >
            A social Media Platform Made For Developers - Built By Developers 
          </h1>
            <div className="space-y-4">
              <h2 className="text-xl md:text-xl text-black-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
                Share, Collaborate And Network With Other Software Developers Like You.
              </h2>
            </div>
            <div className="flex space-x-2 pl-1 pr-1">
              <input className="w-80 px-5 shadow-lg outline-none rounded-lg" type="text" id="email" placeholder="john.doe@nexus.codes"/>
              <button className=" text-green-900 bg-green-400 font-semibold shadow-lg rounded-lg border border-green-400 px-5 py-1.5 hover:shadow-green-500/70">Sign Up for Nexus</button>
            </div>
        </div>

        <div className= "bg-white">
         carousel
        </div>
      </main>
    </div>
  )
}

export default Home