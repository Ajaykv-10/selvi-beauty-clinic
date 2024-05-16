import { Card } from "@/components/ui/card";
import React from "react";
import { beautyServicesPics } from "./services-pic";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <Card>
      <h1 className="text-center text-3xl font-bold my-4">
        Selvi Beauty Clinic Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {beautyServicesPics.map(({ id, img, service }) => (
          <Link key={id} href={`/beauty-pics-feed/${id}`}>
            <Image
              src={img}
              alt={service}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default page;
