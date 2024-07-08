import { useState } from "react";

import { Button } from "@/components/ui/button";

const initialSeatLayout = {
  A: { type: "normal", seats: ["A1", "A2", "A3", "A4", "A5"] },
  B: { type: "normal", seats: ["B1", "B2", "B3", "B4", "B5"] },
  C: { type: "normal", seats: ["C1", "C2", "C3", "C4", "C5"] },
  D: { type: "middle", seats: ["D1", "D2", "D3", "D4", "D5"] },
  E: { type: "middle", seats: ["E1", "E2", "E3", "E4", "E5"] },
  M: { type: "middle", seats: ["M1", "M2", "M3", "M4", "M5"] },
  N: { type: "premium", seats: ["N1", "N2", "N3", "N4", "N5"] },
  V: { type: "premium", seats: ["V1", "V2", "V3", "V4", "V5"] },
};

const Seat = ({ seat, onSelect, selected }: any) => (
  <Button
    className={`m-1 rounded border p-2 ${
      selected ? "bg-blue-500 text-white" : "bg-gray-300"
    }`}
    onClick={() => onSelect(seat)}
  >
    {seat}
  </Button>
);

const SeatLayout = ({ layout }: any) => {
  const [selectedSeats, setSelectedSeats] = useState<any>([]);

  const handleSelect = (seat: any) => {
    setSelectedSeats((prev: any) =>
      prev.includes(seat)
        ? prev.filter((s: any) => s !== seat)
        : [...prev, seat],
    );
  };

  const groupedLayout = Object.entries(layout).reduce(
    (acc: any, [key, value]: any) => {
      acc[value.type] = acc[value.type] || [];
      acc[value.type].push({ key, ...value });
      return acc;
    },
    {},
  );

  return (
    <div className="p-4">
      {Object.entries(groupedLayout).map(([type, rows]: any) => (
        <div key={type} className="mb-8">
          <div className="mb-2 text-lg font-bold">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
          {rows.map((row: any) => (
            <div key={row.key} className="mb-4 flex items-center">
              <div className="mr-4 font-bold">{row.key}</div>
              <div className="flex">
                {row.seats.map((seat: any) => (
                  <Seat
                    key={seat}
                    seat={seat}
                    onSelect={handleSelect}
                    selected={selectedSeats.includes(seat)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="mt-4">Selected Seats: {selectedSeats.join(", ")}</div>
    </div>
  );
};

export default function Home() {
  const [seatLayout, setSeatLayout] = useState(initialSeatLayout);
  // Example function to add a row
  const addRow = (key, type, seats) => {
    setSeatLayout((prevLayout) => ({
      ...prevLayout,
      [key]: { type, seats },
    }));
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Seat Layout System</h1>
      <SeatLayout layout={seatLayout} />
      {/* Example button to add a new row */}
      <Button
        onClick={() => addRow("W", "premium", ["W1", "W2", "W3", "W4", "W5"])}
        className="mt-4"
      >
        Add Row W
      </Button>
    </div>
  );
}
