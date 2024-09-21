"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-12 p-6">
      <div className="text-center">
        <h1 className="mb-6 text-5xl font-bold text-indigo-600">
          About Get Show Tickets
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-700">
          At Get Show Tickets, we believe in making entertainment accessible to
          everyone. Our team works tirelessly to bring you tickets to the best
          shows, concerts, and events in town, all at the click of a button.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12 rounded-lg p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-semibold">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          Our mission is to create a seamless, user-friendly platform where fans
          can discover, book, and attend their favorite shows with ease. Whether
          it&apos;s a concert, a theater performance, or a comedy night, we make
          sure you never miss a moment of excitement.
        </p>
      </div>

      {/* Team Section */}
      <h2 className="mb-8 text-center text-3xl font-semibold">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardHeader>
            <Image
              src="/ceo.jpg"
              alt="Dhruv Prajapati - CEO"
              width={500}
              height={500}
              className="rounded-full"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Dhruv Prajapati</CardTitle>
            <CardDescription>CEO & Founder</CardDescription>
            <p className="mt-2 text-gray-600">
              Dhruv is passionate about bringing the best entertainment to
              audiences worldwide. With over a decade in the industry, he leads
              our mission to revolutionize event ticketing.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <Image
              src="/cto.jpg"
              alt="Priyesh Vaghela - CTO"
              width={500}
              height={500}
              className="rounded-full"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Priyesh Vaghela</CardTitle>
            <CardDescription>CTO</CardDescription>
            <p className="mt-2 text-gray-600">
              Priyesh ensures our platform runs smoothly and securely, offering
              users the best online booking experience for events and shows.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <Image
              src="/marketing-head.jpg"
              alt="Krunal Vaghela - Head of Marketing"
              width={500}
              height={500}
              className="rounded-full"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Krunal Vaghela</CardTitle>
            <CardDescription>Head of Marketing</CardDescription>
            <p className="mt-2 text-gray-600">
              Krunal&apos;s innovative campaigns connect fans with the latest
              shows and events, making Get Show Tickets the go-to platform for
              entertainment lovers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Button className="rounded-lg  px-8 py-4 text-white shadow-lg">
          Explore Upcoming Shows
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
