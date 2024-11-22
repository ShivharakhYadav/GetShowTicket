"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import appRoutes from "@/config/appRoutes";
import { Event } from "@/services/events/types";
import Ratings from "@/components/ui/ratings";

const EventCard: FC<Event> = ({ _id: id, name, rating, year }) => {
  const router = useRouter();
  return (
    <Card
      key={id}
      className="cursor-pointer"
      onClick={() =>
        router.push(appRoutes.eventDetails(name.toLowerCase(), id))
      }
    >
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="flex-1 truncate">{name}</CardTitle>
          <CardDescription className="ml-1">{year}</CardDescription>
        </div>
        {/* <CardDescription className="line-clamp-3">
          {description}
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        {/* <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
          alt={name}
        /> */}
      </CardContent>
      <CardFooter>
        <Ratings value={rating} />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
