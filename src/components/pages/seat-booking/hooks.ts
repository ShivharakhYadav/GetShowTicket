import { useState } from "react";

export const useSeatBooking = () => {
  const allSeats = [
    {
      name: "Normal",
      price: 140,
      showName: "Test",
      SeatDetails: [
        { seatID: null, isSeat: false, seatName: "" },
        { seatID: "A1", isSeat: true, seatName: "1" },
        { seatID: "A2", isSeat: true, seatName: "2" },
        { seatID: null, isSeat: false, seatName: "" },
        { seatID: "A3", isSeat: true, seatName: "3" },
        { seatID: "A4", isSeat: true, seatName: "4" },
        { seatID: "A5", isSeat: true, seatName: "5" },
        { seatID: null, isSeat: false, seatName: "" },
        { seatID: null, isSeat: false, seatName: "" },
        { seatID: "A6", isSeat: true, seatName: "6" },
        { seatID: "A7", isSeat: true, seatName: "7" },
        { seatID: null, isSeat: false, seatName: "" },
        { seatID: "A8", isSeat: true, seatName: "8" },
        { seatID: "A9", isSeat: true, seatName: "9" },
        { seatID: null, isSeat: false, seatName: "" },
        { seatID: "A10", isSeat: true, seatName: "10" },
        { seatID: "A11", isSeat: true, seatName: "11" },
        { seatID: "A12", isSeat: true, seatName: "12" },
      ],
    },
    {
      name: "Middle",
      price: 200,
      showName: "Test1",
      SeatDetails: [
        { seatID: null, isSeat: false },
        { seatID: "A1", isSeat: true },
        { seatID: "A2", isSeat: true },
        { seatID: null, isSeat: false },
        { seatID: "A3", isSeat: true },
        { seatID: "A4", isSeat: true },
        { seatID: "A5", isSeat: true },
        { seatID: null, isSeat: false },
        { seatID: null, isSeat: false },
        { seatID: "A6", isSeat: true },
        { seatID: "A7", isSeat: true },
        { seatID: null, isSeat: false },
        { seatID: "A8", isSeat: true },
        { seatID: "A9", isSeat: true },
        { seatID: null, isSeat: false },
        { seatID: "A10", isSeat: true },
        { seatID: "A11", isSeat: true },
        { seatID: "A12", isSeat: true },
      ],
    },
  ];
  const [allSeats1] = useState<string[]>([
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

  const handleSeatClick = (seatID: string) => {
    if (reservedSeats.includes(seatID)) {
      setAvailableSeats([...availableSeats, seatID]);
      setReservedSeats(
        reservedSeats.filter((reservedSeat) => reservedSeat !== seatID),
      );
    } else {
      setReservedSeats([...reservedSeats, seatID]);
      setAvailableSeats(
        availableSeats.filter((availableSeat) => availableSeat !== seatID),
      );
    }
  };

  const isSeatAvailable = (seatID: string) => {
    return !selectedSeats.includes(seatID);
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
