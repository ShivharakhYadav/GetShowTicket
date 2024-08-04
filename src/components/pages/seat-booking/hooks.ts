import { useState } from "react";
const ApiResponse = [
  {
    name: "Normal",
    price: 230,
    seatRows: {
      A: [
        {
          id: "A1",
          name: "1",
          isSeat: true,
        },
        {
          id: "A2",
          name: 2,
          isSeat: true,
        },
        {
          id: "A3",
          name: "3",
          isSeat: true,
        },
        {
          id: "A4",
          name: "4",
          isSeat: true,
        },
        {
          id: "A5",
          name: "5",
          isSeat: true,
        },
        {
          id: "A6",
          name: "6",
          isSeat: true,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "A7",
          name: "7",
          isSeat: true,
        },
        {
          id: "A8",
          name: "8",
          isSeat: true,
        },
        {
          id: "A9",
          name: "9",
          isSeat: true,
        },
        {
          id: "A10",
          name: "10",
          isSeat: true,
        },
        {
          id: "A11",
          name: 11,
          isSeat: true,
        },
        {
          id: "A12",
          name: 12,
          isSeat: true,
        },
        {
          id: "A13",
          name: 13,
          isSeat: true,
        },
        {
          id: "A14",
          name: 14,
          isSeat: true,
        },
        {
          id: "A15",
          name: 15,
          isSeat: true,
        },
        {
          id: "A16",
          name: 16,
          isSeat: true,
        },
        {
          id: "A17",
          name: 17,
          isSeat: true,
        },
        {
          id: "A18",
          name: 18,
          isSeat: true,
        },
        {
          id: "A19",
          name: 19,
          isSeat: true,
        },
        {
          id: "A20",
          name: 20,
          isSeat: true,
        },
        {
          id: "A21",
          name: 21,
          isSeat: true,
        },
        {
          id: "A22",
          name: 22,
          isSeat: true,
        },
        {
          id: "A23",
          name: 23,
          isSeat: true,
        },
        {
          id: "A24",
          name: 24,
          isSeat: true,
        },
        {
          id: "A25",
          name: 25,
          isSeat: true,
        },
        {
          id: "A26",
          name: 26,
          isSeat: true,
        },
        {
          id: "A27",
          name: 27,
          isSeat: true,
        },
        {
          id: "A28",
          name: 28,
          isSeat: true,
        },
        {
          id: "A29",
          name: 29,
          isSeat: true,
        },
        {
          id: "A30",
          name: 30,
          isSeat: true,
        },
        {
          id: "A31",
          name: 31,
          isSeat: true,
        },
        {
          id: "A32",
          name: 32,
          isSeat: true,
        },
        {
          id: "A33",
          name: 33,
          isSeat: true,
        },
        {
          id: "A34",
          name: 34,
          isSeat: true,
        },
        {
          id: "A35",
          name: 35,
          isSeat: true,
        },
        {
          id: "A36",
          name: 36,
          isSeat: true,
        },
        {
          id: "A37",
          name: 37,
          isSeat: true,
        },
        {
          id: "A38",
          name: 38,
          isSeat: true,
        },
        {
          id: "A39",
          name: 39,
          isSeat: true,
        },
      ],
      B: [
        {
          id: "B1",
          name: 1,
          isSeat: true,
        },
        {
          id: "B2",
          name: 2,
          isSeat: true,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "B3",
          name: 3,
          isSeat: true,
        },
        {
          id: "B4",
          name: 4,
          isSeat: true,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "B5",
          name: 5,
          isSeat: true,
        },
        {
          id: "B6",
          name: 6,
          isSeat: true,
        },
        {
          id: "B7",
          name: 7,
          isSeat: true,
        },
        {
          id: "B8",
          name: 8,
          isSeat: true,
        },
        {
          id: "B9",
          name: 9,
          isSeat: true,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "B10",
          name: 10,
          isSeat: true,
        },
        {
          id: "B11",
          name: 11,
          isSeat: true,
        },
        {
          id: "B12",
          name: 12,
          isSeat: true,
        },
        {
          id: "B13",
          name: 13,
          isSeat: true,
        },
        {
          id: "B14",
          name: 14,
          isSeat: true,
        },
        {
          id: "B15",
          name: 15,
          isSeat: true,
        },
        {
          id: "B16",
          name: 16,
          isSeat: true,
        },
        {
          id: "B17",
          name: 17,
          isSeat: true,
        },
        {
          id: "B18",
          name: 18,
          isSeat: true,
        },
        {
          id: "B19",
          name: 19,
          isSeat: true,
        },
        {
          id: "B20",
          name: 20,
          isSeat: true,
        },
        {
          id: "B21",
          name: 21,
          isSeat: true,
        },
        {
          id: "B22",
          name: 22,
          isSeat: true,
        },
        {
          id: "B23",
          name: 23,
          isSeat: true,
        },
        {
          id: "B24",
          name: 24,
          isSeat: true,
        },
        {
          id: "B25",
          name: 25,
          isSeat: true,
        },
        {
          id: "B26",
          name: 26,
          isSeat: true,
        },
        {
          id: "B27",
          name: 27,
          isSeat: true,
        },
        {
          id: "B28",
          name: 28,
          isSeat: true,
        },
        {
          id: "B29",
          name: 29,
          isSeat: true,
        },
      ],
      C: [
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "C1",
          name: 1,
          isSeat: true,
        },
        {
          id: "C2",
          name: 2,
          isSeat: true,
        },
        {
          id: "C3",
          name: 3,
          isSeat: true,
        },
        {
          id: "C4",
          name: 4,
          isSeat: true,
        },
        {
          id: "C5",
          name: 5,
          isSeat: true,
        },
        {
          id: "C6",
          name: 6,
          isSeat: true,
        },
        {
          id: "C7",
          name: 7,
          isSeat: true,
        },
        {
          id: "C8",
          name: 8,
          isSeat: true,
        },
        {
          id: "C9",
          name: 9,
          isSeat: true,
        },
        {
          id: "C10",
          name: 10,
          isSeat: true,
        },
        {
          id: "C11",
          name: 11,
          isSeat: true,
        },
        {
          id: "C12",
          name: 12,
          isSeat: true,
        },
        {
          id: "C13",
          name: 13,
          isSeat: true,
        },
        {
          id: "C14",
          name: 14,
          isSeat: true,
        },
        {
          id: "C15",
          name: 15,
          isSeat: true,
        },
        {
          id: "C16",
          name: 16,
          isSeat: true,
        },
        {
          id: "C17",
          name: 17,
          isSeat: true,
        },
        {
          id: "C18",
          name: 18,
          isSeat: true,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "C19",
          name: 19,
          isSeat: true,
        },
        {
          id: "C20",
          name: 20,
          isSeat: true,
        },
        {
          id: "C21",
          name: 21,
          isSeat: true,
        },
        {
          id: "C22",
          name: 22,
          isSeat: true,
        },
        {
          id: "C23",
          name: 23,
          isSeat: true,
        },
        {
          id: "C24",
          name: 24,
          isSeat: true,
        },
        {
          id: "C25",
          name: 25,
          isSeat: true,
        },
        {
          id: "C26",
          name: 26,
          isSeat: true,
        },
        {
          id: "C27",
          name: 27,
          isSeat: true,
        },
        {
          id: "C28",
          name: 28,
          isSeat: true,
        },
        {
          id: "C29",
          name: 29,
          isSeat: true,
        },
      ],
    },
  },
  {
    name: "VIP",
    price: 530,
    seatRows: {
      D: [
        {
          id: "D1",
          name: "1",
          isSeat: true,
        },
        {
          id: "D2",
          name: "2",
          isSeat: true,
        },
        {
          id: "D3",
          name: "3",
          isSeat: true,
        },
        {
          id: "D4",
          name: "4",
          isSeat: true,
        },
        {
          id: "D5",
          name: "5",
          isSeat: true,
        },
        {
          id: "D6",
          name: "6",
          isSeat: true,
        },
        {
          id: "D7",
          name: "7",
          isSeat: true,
        },
        {
          id: "D8",
          name: "8",
          isSeat: true,
        },
        {
          id: "D9",
          name: "9",
          isSeat: true,
        },
        {
          id: "D10",
          name: "10",
          isSeat: true,
        },
        {
          id: "D11",
          name: "11",
          isSeat: true,
        },
        {
          id: "D12",
          name: "12",
          isSeat: true,
        },
        {
          id: "D13",
          name: "13",
          isSeat: true,
        },
      ],
      E: [
        {
          id: null,
          name: null,
          isSeat: false,
        },
        {
          id: "E2",
          name: "2",
          isSeat: true,
        },
        {
          id: "E3",
          name: "3",
          isSeat: true,
        },
        {
          id: "E4",
          name: "4",
          isSeat: true,
        },
        {
          id: null,
          name: null,
          isSeat: false,
        },
      ],
      F: [
        {
          id: "F1",
          name: "1",
          isSeat: true,
        },
        {
          id: "F2",
          name: "2",
          isSeat: true,
        },
        {
          id: "F3",
          name: "3",
          isSeat: true,
        },
        {
          id: "F4",
          name: "4",
          isSeat: true,
        },
        {
          id: "F5",
          name: "5",
          isSeat: true,
        },
      ],
    },
  },
];

export const useSeatBooking = () => {
  const [reservedSeats, setReservedSeats] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seat: string) => {
    if (reservedSeats.includes(seat)) {
      // setAvailableSeats([...availableSeats, seat]);
      setReservedSeats(
        reservedSeats.filter((reservedSeat) => reservedSeat !== seat),
      );
    } else {
      setReservedSeats([...reservedSeats, seat]);
      // setAvailableSeats(
      //   availableSeats.filter((availableSeat) => availableSeat !== seat),
      // );
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
    ApiResponse,
  };
};

// // import { useState } from "react";

// export type SeatDetail = {
//   seatID: null | string;
//   isSeat: boolean;
//   seatName?: string;
//   status: "Available" | "Booked" | "Reserved" | "Unavailable";
// };

// // export type seatType = {
// //   [key: string]: SeatDetail[];
// // };
// export type SeatRecord = {
//   name: string;
//   price: number;
//   showName: string;
//   row: string;
//   SeatDetails: SeatDetail[][];
// };

// export const useSeatBooking = () => {
//   // const allSeats: SeatRecord[] = [
//   //   {
//   //     name: "Section A",
//   //     price: 200,
//   //     showName: "TestShow",
//   //     row: "A",
//   //     SeatDetails: [
//   //       [
//   //         {
//   //           seatID: "A1",
//   //           isSeat: false,
//   //           seatName: "A",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A1",
//   //           isSeat: true,
//   //           seatName: "1",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A2",
//   //           isSeat: true,
//   //           seatName: "2",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A3",
//   //           isSeat: true,
//   //           seatName: "3",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A4",
//   //           isSeat: true,
//   //           seatName: "4",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A5",
//   //           isSeat: true,
//   //           seatName: "5",
//   //           status: "Available",
//   //         },
//   //       ],
//   //       [
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //       ],
//   //       [
//   //         {
//   //           seatID: "A1",
//   //           isSeat: false,
//   //           seatName: "A",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A1",
//   //           isSeat: true,
//   //           seatName: "1",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A2",
//   //           isSeat: true,
//   //           seatName: "2",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A3",
//   //           isSeat: true,
//   //           seatName: "3",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A4",
//   //           isSeat: true,
//   //           seatName: "4",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A5",
//   //           isSeat: true,
//   //           seatName: "5",
//   //           status: "Available",
//   //         },
//   //       ],
//   //       [
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A6",
//   //           isSeat: false,
//   //           seatName: "B",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A7",
//   //           isSeat: true,
//   //           seatName: "7",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A8",
//   //           isSeat: true,
//   //           seatName: "8",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A9",
//   //           isSeat: true,
//   //           seatName: "9",
//   //           status: "Available",
//   //         },
//   //         {
//   //           seatID: "A10",
//   //           isSeat: true,
//   //           seatName: "10",
//   //           status: "Available",
//   //         },
//   //       ],
//   //     ],
//   //   },
//   // ];

//   const ApiResponse = [
//     {
//       name: "Normal",
//       price: 230,
//       seatRows: {
//         A: [
//           {
//             id: "A1",
//             name: "1",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "A4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: "A5",
//             name: "5",
//             isSeat: true,
//           },
//           {
//             id: "A6",
//             name: "6",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A7",
//             name: "7",
//             isSeat: true,
//           },
//           {
//             id: "A8",
//             name: "8",
//             isSeat: true,
//           },
//           {
//             id: "A9",
//             name: "9",
//             isSeat: true,
//           },
//           {
//             id: "A10",
//             name: "10",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A11",
//             name: "11",
//             isSeat: true,
//           },
//           {
//             id: "A12",
//             name: "12",
//             isSeat: true,
//           },
//           {
//             id: "A13",
//             name: "13",
//             isSeat: true,
//           },
//           {
//             id: "A10",
//             name: "10",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A11",
//             name: "11",
//             isSeat: true,
//           },
//           {
//             id: "A12",
//             name: "12",
//             isSeat: true,
//           },
//           {
//             id: "A13",
//             name: "13",
//             isSeat: true,
//           },
//           {
//             id: "A1",
//             name: "1",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "A4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: "A5",
//             name: "5",
//             isSeat: true,
//           },
//           {
//             id: "A6",
//             name: "6",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A7",
//             name: "7",
//             isSeat: true,
//           },
//           {
//             id: "A8",
//             name: "8",
//             isSeat: true,
//           },
//           {
//             id: "A9",
//             name: "9",
//             isSeat: true,
//           },
//           {
//             id: "A10",
//             name: "10",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A11",
//             name: "11",
//             isSeat: true,
//           },
//           {
//             id: "A12",
//             name: "12",
//             isSeat: true,
//           },
//           {
//             id: "A13",
//             name: "13",
//             isSeat: true,
//           },
//           {
//             id: "A10",
//             name: "10",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "A11",
//             name: "11",
//             isSeat: true,
//           },
//           {
//             id: "A12",
//             name: "12",
//             isSeat: true,
//           },
//           {
//             id: "A13",
//             name: "13",
//             isSeat: true,
//           },
//         ],
//         B: [
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "B2",
//             name: "2",
//             isSeat: true,
//           },
//           {
//             id: "B3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "B4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//         ],
//         C: [
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "C1",
//             name: "1",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "C2",
//             name: "2",
//             isSeat: true,
//           },
//           {
//             id: "C3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "C4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: "C5",
//             name: "5",
//             isSeat: false,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "C6",
//             name: "6",
//             isSeat: true,
//           },
//         ],
//       },
//     },
//     {
//       name: "VIP",
//       price: 530,
//       seatRows: {
//         D: [
//           {
//             id: "D1",
//             name: "1",
//             isSeat: true,
//           },
//           {
//             id: "D2",
//             name: "2",
//             isSeat: true,
//           },
//           {
//             id: "D3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "D4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: "D5",
//             name: "5",
//             isSeat: true,
//           },
//           {
//             id: "D6",
//             name: "6",
//             isSeat: true,
//           },
//           {
//             id: "D7",
//             name: "7",
//             isSeat: true,
//           },
//           {
//             id: "D8",
//             name: "8",
//             isSeat: true,
//           },
//           {
//             id: "D9",
//             name: "9",
//             isSeat: true,
//           },
//           {
//             id: "D10",
//             name: "10",
//             isSeat: true,
//           },
//           {
//             id: "D11",
//             name: "11",
//             isSeat: true,
//           },
//           {
//             id: "D12",
//             name: "12",
//             isSeat: true,
//           },
//           {
//             id: "D13",
//             name: "13",
//             isSeat: true,
//           },
//         ],
//         E: [
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//           {
//             id: "E2",
//             name: "2",
//             isSeat: true,
//           },
//           {
//             id: "E3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "E4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: null,
//             name: null,
//             isSeat: false,
//           },
//         ],
//         F: [
//           {
//             id: "F1",
//             name: "1",
//             isSeat: true,
//           },
//           {
//             id: "F2",
//             name: "2",
//             isSeat: true,
//           },
//           {
//             id: "F3",
//             name: "3",
//             isSeat: true,
//           },
//           {
//             id: "F4",
//             name: "4",
//             isSeat: true,
//           },
//           {
//             id: "F5",
//             name: "5",
//             isSeat: true,
//           },
//         ],
//       },
//     },
//   ];
//   return {
//     allSeats: ApiResponse,
//   };
// };

// // const allSeats: SeatRecord[] = [
// //   {
// //     name: "Section A",
// //     price: 200,
// //     showName: "TestShow",
// //     row: "A",
// //     SeatDetails: {
// //       A: [
// //         {
// //           seatID: "A1",
// //           isSeat: true,
// //           seatName: "1",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A2",
// //           isSeat: true,
// //           seatName: "2",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A3",
// //           isSeat: true,
// //           seatName: "3",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A4",
// //           isSeat: true,
// //           seatName: "4",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A5",
// //           isSeat: true,
// //           seatName: "5",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A6",
// //           isSeat: true,
// //           seatName: "6",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A7",
// //           isSeat: true,
// //           seatName: "7",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A8",
// //           isSeat: true,
// //           seatName: "8",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A9",
// //           isSeat: true,
// //           seatName: "9",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A10",
// //           isSeat: true,
// //           seatName: "10",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A11",
// //           isSeat: true,
// //           seatName: "11",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A12",
// //           isSeat: true,
// //           seatName: "12",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A13",
// //           isSeat: true,
// //           seatName: "13",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A14",
// //           isSeat: true,
// //           seatName: "14",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A15",
// //           isSeat: true,
// //           seatName: "15",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A16",
// //           isSeat: true,
// //           seatName: "16",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A17",
// //           isSeat: true,
// //           seatName: "17",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A18",
// //           isSeat: true,
// //           seatName: "18",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A19",
// //           isSeat: true,
// //           seatName: "19",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A20",
// //           isSeat: true,
// //           seatName: "8",
// //           status: "Available",
// //         },
// //         {
// //           seatID: " A21",
// //           isSeat: true,
// //           seatName: "21",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A22",
// //           isSeat: true,
// //           seatName: "23",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A24",
// //           isSeat: true,
// //           seatName: "24",
// //           status: "Available",
// //         },
// //         {
// //           seatID: "A15",
// //           isSeat: true,
// //           seatName: "15",
// //           status: "Available",
// //         },
// //       ],
// //     },
// //   },
// // ];
