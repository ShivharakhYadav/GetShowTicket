import { CarouselItem } from "@/components/ui/carousel";

import { Event } from "../../types";
import EventCard from "../EventCard/index";

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
