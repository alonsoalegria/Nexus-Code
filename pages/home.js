import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import flogo from "../public/images/flogo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

function Home() {
  return (
    <div>
        <header className="flex justify-around ">
          <div className="relative w-36 h-10">
            <Image src={flogo} alt="logo" layout="fill" objectFit="contain"/>
            </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
            <div className="hidden sm:flex space-x-8 pr-4">
               <HeaderLink Icon={SearchIcon} text="Search"/>
               <HeaderLink Icon={ControlPointRoundedIcon} text="Upload"/>
               <HeaderLink Icon={AccountCircleIcon} text="Account"/>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Home