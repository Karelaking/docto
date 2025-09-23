"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const AutoPlayCarousel = () => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center rounded-lg">
      <Carousel
        className="w-full max-w-6xl mx-auto rounded-lg"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="h-[50vh] rounded-lg">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="relative h-[50vh] rounded-lg">
              <div className="relative w-full h-full rounded-lg">
                <Image
                  src={"/img/image.png"}
                  fill
                  sizes="50vw"
                  className="object-cover rounded-lg"
                  alt="Carousel image"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AutoPlayCarousel;
