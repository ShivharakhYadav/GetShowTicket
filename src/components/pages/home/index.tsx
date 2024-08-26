"use client";

import Image from "next/image";
import { ArrowRightSquare } from "lucide-react";
import { useRouter } from "next/navigation";

import { CarouselPlugin } from "@/components/CarouselPlugin";
import { SliderMainItem } from "@/components/CarouselPlugin/partials/extension/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import appRoutes from "@/config/appRoutes";

import EventLists from "../events/partials/EventLists";
import { events } from "../events/mocks";

const Home = () => {
  const router = useRouter();
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
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Recommended Events</h3>
          <span
            className="flex cursor-pointer items-center text-lg font-medium text-blue-500"
            onClick={() => router.push(appRoutes.events)}
          >
            See All
            <ArrowRightSquare className="ml-2" />
          </span>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <EventLists events={events.slice(0, 6)} />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
