"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

import { Show } from "../../types";

const ShowCard: FC<Show> = ({
  title,
  year,
  description,
  imageUrl,
  rating,
  id,
}) => {
  const router = useRouter();
  return (
    <Card
      key={id}
      className="cursor-pointer"
      onClick={() => router.push(appRoutes.showDetail(title.toLowerCase(), id))}
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

export default ShowCard;
