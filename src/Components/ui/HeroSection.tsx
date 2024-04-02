import Link from "next/link";
import React from "react";
import { Spotlight } from "./SpotLight";
import { MovingBorder } from "./moving-border";
import { Button } from "../ui/moving-border";

const Herosection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-60 left-0 md:left-80 md:-top-45"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Drive into your comprehensive music courses and transform your musical
          journey today. Whether you are beginner or looking to refine your
          skills, join us to unlock your true potential
        </p>
      </div>
      <Button
        dark-color
        borderRadius="1.75rem"
        className="bg-white dark:bg-black/[0.3] text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div>
          <Link href={"/cources"} >Explore Cources</Link>
        </div>
      </Button>
    </div>
  );
};

export default Herosection;
