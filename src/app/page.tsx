import Image from "next/image";

import { CarouselPlugin } from "@/components/CarouselPlugin";
import { SliderMainItem } from "@/components/CarouselPlugin/partials/extension/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShowCard from "@/components/showsList/partials/showCard";
import { showsData } from "@/components/showsList/consts";

const Home = async () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mt-4 md:mt-8">
          <CarouselPlugin autoplayDelay={3000} showIndicators>
            {Array.from({ length: 5 }).map((_, index) => (
              <SliderMainItem key={index} className="bg-transparent">
                <div className="flex size-full items-center justify-center rounded-xl bg-background outline outline-1 outline-border">
                  <Image
                    src={`https://via.placeholder.com/800x600?text=Slide+${index + 1}`}
                    alt={`Slide ${index + 1}`}
                    className="h-auto w-full object-cover"
                    width="0"
                    height="0"
                    sizes="100vw"
                    priority
                  />
                </div>
              </SliderMainItem>
            ))}
          </CarouselPlugin>
        </div>
        <h3 className="text-2xl font-semibold md:col-span-2 lg:col-span-4">
          Recommended Shows
        </h3>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {showsData.map((show, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <ShowCard key={show.id} {...show} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
