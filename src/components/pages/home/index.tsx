"use client";

import Image from "next/image";
import { ArrowRightSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";

import {
  Carousel as CarouselCard,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import appRoutes from "@/config/appRoutes";

import EventLists from "../events/partials/EventLists";
import { events } from "../events/mocks";
import { BANNER_IMAGES } from "./consts";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Carousel autoPlay infiniteLoop showStatus={false}>
          {BANNER_IMAGES.map((imageUrl, index) => (
            <div
              className="relative h-64 w-full md:h-96"
              key={index.toString()}
            >
              <Image
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </Carousel>
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

        <CarouselCard
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <EventLists events={events.slice(0, 6)} />
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </CarouselCard>
      </main>
    </div>
  );
};

export default Home;
