// import { useState } from "react";

export type SeatDetail = {
  seatID: null | string;
  isSeat: boolean;
  seatName?: string;
  status: "Available" | "Booked" | "Reserved" | "Unavailable";
};

// export type seatType = {
//   [key: string]: SeatDetail[];
// };
export type SeatRecord = {
  name: string;
  price: number;
  showName: string;
  row: string;
  SeatDetails: SeatDetail[][];
};

export const useSeatBooking = () => {
  const allSeats: SeatRecord[] = [
    {
      name: "Section A",
      price: 200,
      showName: "TestShow",
      row: "A",
      SeatDetails: [
        [
          {
            seatID: "A1",
            isSeat: false,
            seatName: "A",
            status: "Available",
          },
          {
            seatID: "A1",
            isSeat: true,
            seatName: "1",
            status: "Available",
          },
          {
            seatID: "A2",
            isSeat: true,
            seatName: "2",
            status: "Available",
          },
          {
            seatID: "A3",
            isSeat: true,
            seatName: "3",
            status: "Available",
          },
          {
            seatID: "A4",
            isSeat: true,
            seatName: "4",
            status: "Available",
          },
          {
            seatID: "A5",
            isSeat: true,
            seatName: "5",
            status: "Available",
          },
        ],
        [
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
        ],
        [
          {
            seatID: "A1",
            isSeat: false,
            seatName: "A",
            status: "Available",
          },
          {
            seatID: "A1",
            isSeat: true,
            seatName: "1",
            status: "Available",
          },
          {
            seatID: "A2",
            isSeat: true,
            seatName: "2",
            status: "Available",
          },
          {
            seatID: "A3",
            isSeat: true,
            seatName: "3",
            status: "Available",
          },
          {
            seatID: "A4",
            isSeat: true,
            seatName: "4",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A5",
            isSeat: true,
            seatName: "5",
            status: "Available",
          },
        ],
        [
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
          {
            seatID: "A6",
            isSeat: false,
            seatName: "B",
            status: "Available",
          },
          {
            seatID: "A7",
            isSeat: true,
            seatName: "7",
            status: "Available",
          },
          {
            seatID: "A8",
            isSeat: true,
            seatName: "8",
            status: "Available",
          },
          {
            seatID: "A9",
            isSeat: true,
            seatName: "9",
            status: "Available",
          },
          {
            seatID: "A10",
            isSeat: true,
            seatName: "10",
            status: "Available",
          },
        ],
      ],
    },
  ];

  return {
    allSeats,
  };
};

// const allSeats: SeatRecord[] = [
//   {
//     name: "Section A",
//     price: 200,
//     showName: "TestShow",
//     row: "A",
//     SeatDetails: {
//       A: [
//         {
//           seatID: "A1",
//           isSeat: true,
//           seatName: "1",
//           status: "Available",
//         },
//         {
//           seatID: "A2",
//           isSeat: true,
//           seatName: "2",
//           status: "Available",
//         },
//         {
//           seatID: "A3",
//           isSeat: true,
//           seatName: "3",
//           status: "Available",
//         },
//         {
//           seatID: "A4",
//           isSeat: true,
//           seatName: "4",
//           status: "Available",
//         },
//         {
//           seatID: "A5",
//           isSeat: true,
//           seatName: "5",
//           status: "Available",
//         },
//         {
//           seatID: "A6",
//           isSeat: true,
//           seatName: "6",
//           status: "Available",
//         },
//         {
//           seatID: "A7",
//           isSeat: true,
//           seatName: "7",
//           status: "Available",
//         },
//         {
//           seatID: "A8",
//           isSeat: true,
//           seatName: "8",
//           status: "Available",
//         },
//         {
//           seatID: "A9",
//           isSeat: true,
//           seatName: "9",
//           status: "Available",
//         },
//         {
//           seatID: "A10",
//           isSeat: true,
//           seatName: "10",
//           status: "Available",
//         },
//         {
//           seatID: "A11",
//           isSeat: true,
//           seatName: "11",
//           status: "Available",
//         },
//         {
//           seatID: "A12",
//           isSeat: true,
//           seatName: "12",
//           status: "Available",
//         },
//         {
//           seatID: "A13",
//           isSeat: true,
//           seatName: "13",
//           status: "Available",
//         },
//         {
//           seatID: "A14",
//           isSeat: true,
//           seatName: "14",
//           status: "Available",
//         },
//         {
//           seatID: "A15",
//           isSeat: true,
//           seatName: "15",
//           status: "Available",
//         },
//         {
//           seatID: "A16",
//           isSeat: true,
//           seatName: "16",
//           status: "Available",
//         },
//         {
//           seatID: "A17",
//           isSeat: true,
//           seatName: "17",
//           status: "Available",
//         },
//         {
//           seatID: "A18",
//           isSeat: true,
//           seatName: "18",
//           status: "Available",
//         },
//         {
//           seatID: "A19",
//           isSeat: true,
//           seatName: "19",
//           status: "Available",
//         },
//         {
//           seatID: "A20",
//           isSeat: true,
//           seatName: "8",
//           status: "Available",
//         },
//         {
//           seatID: " A21",
//           isSeat: true,
//           seatName: "21",
//           status: "Available",
//         },
//         {
//           seatID: "A22",
//           isSeat: true,
//           seatName: "23",
//           status: "Available",
//         },
//         {
//           seatID: "A24",
//           isSeat: true,
//           seatName: "24",
//           status: "Available",
//         },
//         {
//           seatID: "A15",
//           isSeat: true,
//           seatName: "15",
//           status: "Available",
//         },
//       ],
//     },
//   },
// ];
