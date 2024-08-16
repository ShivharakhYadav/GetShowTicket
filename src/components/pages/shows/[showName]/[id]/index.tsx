"use client";

import { useParams } from "next/navigation";
import { Share1Icon } from "@radix-ui/react-icons";
import capitalize from "lodash/capitalize";

import Custom404 from "@/app/not-found";
import { Button } from "@/components/ui/button";

const ShowDetails = () => {
  const params = useParams();
  const { showName, id } = params;

  if (typeof showName !== "string" || typeof id !== "string") {
    return <Custom404 />;
  }
  return (
    <>
      <div
        className="grid h-[40vh] grid-cols-1 gap-8 p-8 md:h-[50vh] md:grid-cols-2"
        style={{
          backgroundImage:
            "url('/assets/images/Kingsglaive_Final_Fantasy_XV.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex flex-col items-center justify-center text-center text-white">
          <h3 className="mb-4 text-4xl font-bold md:text-6xl">
            {capitalize(showName.replaceAll("-", " "))}
          </h3>
          <div className="flex justify-center space-x-4 text-xl md:text-2xl">
            <span>2h 25m</span>
            <span>Drama, Romantic</span>
            <span>UA</span>
            <span>2 Aug, 2024</span>
          </div>
          <Button type="submit" className="mt-8 w-1/3 md:w-1/4">
            Book Tickets
          </Button>
        </div>

        <div className="relative flex items-start justify-end text-white md:items-center">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button>
              <Share1Icon className="mr-2 h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative p-8 text-white">
        <h3 className="mb-4 text-2xl font-bold">About the show</h3>
        <p>sasa</p>
      </div>
    </>
  );
};

export default ShowDetails;
