import Image from "next/image";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <div className=" bg-lightBlue flex flex-row justify-between py-8 px-10 items-center">
      <h1 className="font-secular text-5xl text-white">sunnyside</h1>
      <div className="flex flex-row items-center">
        <p className="navbarOption">About</p>
        <p className="navbarOption">Services</p>
        <p className="navbarOption">Projects</p>
        <button className="bg-white text-gray-700 font-lora font-semibold py-3 px-8 rounded-full hover:bg-opacity-20 hover:text-white transition duration-300 ease-out">
          Contact
        </button>
      </div>
    </div>
  );
}
