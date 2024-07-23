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
  // const allSeats: SeatRecord[] = [
  //   {
  //     name: "Section A",
  //     price: 200,
  //     showName: "TestShow",
  //     row: "A",
  //     SeatDetails: [
  //       [
  //         {
  //           seatID: "A1",
  //           isSeat: false,
  //           seatName: "A",
  //           status: "Available",
  //         },
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
  //       ],
  //       [
  //         {
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //       ],
  //       [
  //         {
  //           seatID: "A1",
  //           isSeat: false,
  //           seatName: "A",
  //           status: "Available",
  //         },
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
  //           status: "Available",
  //         },
  //         {
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
  //           status: "Available",
  //         },
  //         {
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
  //           status: "Available",
  //         },
  //         {
  //           seatID: "A5",
  //           isSeat: true,
  //           seatName: "5",
  //           status: "Available",
  //         },
  //       ],
  //       [
  //         {
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //           seatID: "A6",
  //           isSeat: false,
  //           seatName: "B",
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
  //       ],
  //     ],
  //   },
  // ];

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
            id: null,
            name: null,
            isSeat: false,
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
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "A11",
            name: "11",
            isSeat: true,
          },
          {
            id: "A12",
            name: "12",
            isSeat: true,
          },
          {
            id: "A13",
            name: "13",
            isSeat: true,
          },
          {
            id: "A10",
            name: "10",
            isSeat: true,
          },
          {
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "A11",
            name: "11",
            isSeat: true,
          },
          {
            id: "A12",
            name: "12",
            isSeat: true,
          },
          {
            id: "A13",
            name: "13",
            isSeat: true,
          },
          {
            id: "A1",
            name: "1",
            isSeat: true,
          },
          {
            id: null,
            name: null,
            isSeat: false,
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
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "A11",
            name: "11",
            isSeat: true,
          },
          {
            id: "A12",
            name: "12",
            isSeat: true,
          },
          {
            id: "A13",
            name: "13",
            isSeat: true,
          },
          {
            id: "A10",
            name: "10",
            isSeat: true,
          },
          {
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "A11",
            name: "11",
            isSeat: true,
          },
          {
            id: "A12",
            name: "12",
            isSeat: true,
          },
          {
            id: "A13",
            name: "13",
            isSeat: true,
          },
        ],
        B: [
          {
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "B2",
            name: "2",
            isSeat: true,
          },
          {
            id: "B3",
            name: "3",
            isSeat: true,
          },
          {
            id: "B4",
            name: "4",
            isSeat: true,
          },
          {
            id: null,
            name: null,
            isSeat: false,
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
            id: "C1",
            name: "1",
            isSeat: true,
          },
          {
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "C2",
            name: "2",
            isSeat: true,
          },
          {
            id: "C3",
            name: "3",
            isSeat: true,
          },
          {
            id: "C4",
            name: "4",
            isSeat: true,
          },
          {
            id: "C5",
            name: "5",
            isSeat: false,
          },
          {
            id: null,
            name: null,
            isSeat: false,
          },
          {
            id: "C6",
            name: "6",
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
  return {
    allSeats: ApiResponse,
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
