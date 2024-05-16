import { beautyServicesPics } from "@/app/beauty-pics-feed/services-pic";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  const photo = beautyServicesPics.find((pic) => pic.id === params.id);
  return (
    <div class="flex justify-center items-center mt-24">
      <Image
        src={photo.img}
        alt={photo.service}
        className=" object-cover aspect-square"
      />
    </div>
  );
};
export default page;
