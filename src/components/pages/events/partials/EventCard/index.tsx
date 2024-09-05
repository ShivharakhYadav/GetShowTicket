"use client";

import Image from "next/image";
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
import Ratings from "@/components/ui/ratings";
import appRoutes from "@/config/appRoutes";

import { Event } from "../../types";

const EventCard: FC<Event> = ({
  title,
  year,
  description,
  imageUrl,
  rating,
  id,
}) => {
  console.log("called");
  const router = useRouter();
  return (
    <Card
      key={id}
      className="cursor-pointer"
      onClick={() =>
        router.push(appRoutes.eventDetails(title.toLowerCase(), id))
      }
    >
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="flex-1">{title}</CardTitle>
          <CardDescription>{year}</CardDescription>
        </div>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imageUrl}
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
          alt={title}
        />
      </CardContent>
      <CardFooter>
        <Ratings value={rating} />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
