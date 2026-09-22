"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const slides = [
    {
        id: 1,
        image: "/images/slides/corporate-1.webp",
        alt: "corporate 1",
        width: 1920,
        height: 1080,
    },
    {
        id: 2,
        image: "/images/slides/corporate-2.webp",
        alt: "corporate 2",
        width: 1920,
        height: 1080,
    }
]

export default function Hero() {
  return (
    <div className="relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <Image src={slide.image} alt={slide.alt} width={slide.width} height={slide.height} className="h-[80vh] object-cover dark:brightness-65" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="my-3">
          <CarouselDots />
        </div>
      </Carousel>
    </div>
  );
}
