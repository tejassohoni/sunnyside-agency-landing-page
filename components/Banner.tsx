import Image from "next/image";
import bannerImage from "../images/desktop/image-header.jpg";
import downArrow from "../images/icon-arrow-down.svg";

export default function Banner() {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-md">
        <Image src={bannerImage} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="font-lora text-white text-6xl font-semibold tracking-wide">
          WE ARE CREATIVES
        </h1>
      </div>
      <div className="absolute top-1/3 w-full text-center h-40 mt-32">
        <Image src={downArrow} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
