import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import { RiFacebookBoxFill } from "react-icons/ri";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import SeatBookingModal from "@/components/pages/seat-booking";

import { BannerCardProps } from "./types";

const BannerCard: React.FC<BannerCardProps> = ({
  bannerImage,
  title,
  info,
  date,
  price,
  artistInfo,
  showInfo,
  artistImage,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="shadow-lg">
      <Image
        src={bannerImage}
        alt="Banner"
        className="h-64 w-full object-cover"
        width="0"
        height="0"
        sizes="100vw"
      />

      <CardContent>
        <div className="flex items-start justify-between py-4">
          <div className="flex flex-col space-y-2">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <p className="text-sm text-gray-600">
              {info.split("|").join(" | ")}
            </p>
          </div>
          {/* <Button className="ml-4">Book</Button> */}
          <SeatBookingModal date={date} title={title} key={title} />
        </div>

        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-gray-600">{date}</p>
          <p className="text-lg font-semibold">{price}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <h3 className="font-semibold">Artist</h3>
            <div className="mt-3 flex items-center space-x-4">
              <Image
                src={artistImage}
                alt="Artist"
                className="h-12 w-12 rounded-full object-cover"
                width="0"
                height="0"
                sizes="100vw"
              />
              <h1 className="text-sm text-gray-600">{artistInfo}</h1>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold">Share this show</h3>
              <Button variant="ghost" className="text-gray-600">
                <RiFacebookBoxFill className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="text-gray-600">
                <InstagramLogoIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">About the Show</h3>
            <p className="text-sm text-gray-600">
              {isExpanded ? showInfo : `${showInfo.slice(0, 100)}...`}
            </p>
            <Button
              variant="link"
              className="text-blue-500"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>

            <Accordion type="single" className="py-4" collapsible>
              <AccordionItem value="terms">
                <AccordionTrigger className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold no-underline">
                  Terms and Conditions
                </AccordionTrigger>
                <AccordionContent className="pl-4 pt-2 text-sm text-gray-600">
                  <ul className="list-inside list-disc space-y-2">
                    <li>Item 1: Explanation of the first term or condition.</li>
                    <li>
                      Item 2: Detailed information about another important
                      condition.
                    </li>
                    <li>
                      Item 3: Additional rules or guidelines to be aware of.
                    </li>
                    <li>
                      Item 4: Any other relevant term or condition that applies.
                    </li>
                    <li>
                      Item 5: Final points that should be noted by the user.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BannerCard;
