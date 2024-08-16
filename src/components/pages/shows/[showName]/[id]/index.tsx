"use client";

import { useParams } from "next/navigation";

import Custom404 from "@/app/not-found";

import BannerCard from "./partials/BannerCard";

const ShowDetails = () => {
  const params = useParams();
  const { showName, id } = params;

  if (typeof showName !== "string" || typeof id !== "string") {
    return <Custom404 />;
  }
  return (
    <div className="container mx-auto p-4">
      <BannerCard
        bannerImage="https://via.placeholder.com/1200x400"
        title="Live Concert: The Symphony Experience"
        info="New York | Music | Live Performance"
        date="September 30, 2024"
        price="$75.00"
        artistInfo="John Doe"
        showInfo="Join us for an unforgettable evening of classical music. Featuring compositions by Mozart, Beethoven, and Tchaikovsky, the concert will showcase the talents of our orchestra and guest soloists. The evening promises to be a memorable experience, filled with the majestic sounds of some of the greatest composers in history. Whether you are a lifelong classical music enthusiast or a newcomer to the genre, this concert will offer something for everyone."
        artistImage="https://via.placeholder.com/1200x400"
      />
    </div>
  );
};

export default ShowDetails;
