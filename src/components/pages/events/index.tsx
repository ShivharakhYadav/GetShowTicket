import { events } from "./mocks";
import EventCard from "./partials/EventCard/index";

const Events = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-8 lg:grid-cols-3">
        <div className="col-span-full">
          <h2 className="text-xl font-semibold">Events In Ahmedabad</h2>
        </div>
        {events.map((show) => (
          <EventCard {...show} key={show.id} />
        ))}
      </main>
    </div>
  );
};

export default Events;
