"use client";

import { useEventsSearchQuery } from "@/services/events";
import { Event } from "@/services/events/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

import EventCard from "./partials/EventCard";

const Events = () => {
  const { data: events = [], isLoading } = useEventsSearchQuery<Event[]>({
    select: (data) => data.data,
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-8 lg:grid-cols-3">
        <div className="col-span-full">
          <h2 className="text-xl font-semibold">Events In Ahmedabad</h2>
        </div>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardContent>
                  <Skeleton className="h-64 w-full rounded-md" />
                </CardContent>
              </Card>
            ))
          : events.map((show) => <EventCard {...show} key={show._id} />)}
      </main>
    </div>
  );
};

export default Events;
