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
import { Card, CardContent } from "@/components/ui/card";
import appRoutes from "@/config/appRoutes";
import { useEventsSearchQuery } from "@/services/events";
import { Skeleton } from "@/components/ui/skeleton";
import { Event } from "@/services/events/types";

import { BANNER_IMAGES } from "./consts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventLists from "../events/partials/EventLists";

const Home = () => {
  const router = useRouter();
  const { data: events = [], isLoading } = useEventsSearchQuery<Event[]>({
    select: (data) => data.data,
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
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

        <CarouselCard opts={{ align: "start" }} className="w-full">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index}>
                  <CardContent>
                    <Skeleton className="h-64 w-full rounded-md" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <CarouselContent>
              <EventLists events={events.slice(0, 6)} />
            </CarouselContent>
          )}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </CarouselCard>
      </main>
    </div>
  );
};

export default Home;
