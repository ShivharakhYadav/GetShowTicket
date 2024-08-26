import { CarouselItem } from "@/components/ui/carousel";

import EventCard from "../eventCard";
import { Event } from "../../types";

const EventLists = ({ events }: { events: Event[] }) => {
  return (
    <>
      {events.map((show, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
          <EventCard {...show} />
        </CarouselItem>
      ))}
    </>
  );
};

export default EventLists;
