import React from "react";
import Image from "next/image";
import { ContainerScroll } from './../../components/container-scroll-animation';


function Hero(){
    return(
        <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              best option to manage your <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-300">
                FINANCES with AI
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/image.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    );
}

export default Hero;