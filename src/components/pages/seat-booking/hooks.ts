import { useState } from "react";

export const useSeatBooking = () => {
  const [allSeats] = useState<string[]>([
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
  ]);

  const [availableSeats, setAvailableSeats] = useState<string[]>([
    "A1",
    "A2",
    "A3",
    "A6",
    "B1",
    "B4",
    "B5",
    "B6",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
  ]);

  const [reservedSeats, setReservedSeats] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([
    "A4",
    "A5",
    "B2",
    "B3",
  ]);

  const handleSeatClick = (seat: string) => {
    if (reservedSeats.includes(seat)) {
      setAvailableSeats([...availableSeats, seat]);
      setReservedSeats(
        reservedSeats.filter((reservedSeat) => reservedSeat !== seat),
      );
    } else {
      setReservedSeats([...reservedSeats, seat]);
      setAvailableSeats(
        availableSeats.filter((availableSeat) => availableSeat !== seat),
      );
    }
  };

  const isSeatAvailable = (seat: string) => {
    return !selectedSeats.includes(seat);
  };

  const handleReservationSubmit = () => {
    setSelectedSeats([...selectedSeats, ...reservedSeats]);
    setReservedSeats([]);
  };

  return {
    isSeatAvailable,
    handleSeatClick,
    selectedSeats,
    reservedSeats,
    handleReservationSubmit,
    allSeats,
  };
};
