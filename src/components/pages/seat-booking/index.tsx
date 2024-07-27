"use client";

import React, { FC, useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { useSeatBooking } from "./hooks";

const SeatBooking: FC = () => {
  const { ApiResponse } = useSeatBooking();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSeatClick = (seatId: string) => {
    console.log("Selected seat:", seatId);
    // Implement seat selection logic here
  };

  return (
    <main className="flex flex-1 flex-col gap-4 px-4 lg:gap-6 lg:px-4">
      <Card className="mx-auto w-full border-0">
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <Table className="seat-layout mt-0 w-full">
              <TableBody>
                {/* {ApiResponse?.map(({ name, price, seatRows }) => {
                  return (
                    <>
                      <TableRow
                        className="price-name"
                        key={`price-name-${name}-${price}`}
                      >
                        <TableCell colSpan={3} className="p-1">
                          <h6>{`${name} ${price}`}</h6>
                        </TableCell>
                      </TableRow>
                      <>
                        {Object.entries(seatRows)?.map(([key, value], i) => {
                          const date = new Date().getTime();
                          return (
                            <TableRow
                              key={`${key}-${i}-${date}`}
                              className="text-nowrap"
                            >
                              <TableCell className="fixed relative z-10 p-1">
                                {key}
                              </TableCell>
                              <TableCell className="p-1">
                                {(value as any)?.map((item: any, i: number) => (
                                  <>
                                    {item?.isSeat ? (
                                      <Button>{item.name}</Button>
                                    ) : (
                                      <Button
                                        disabled
                                        className="space bg-transparent"
                                      ></Button>
                                    )}
                                  </>
                                ))}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </>
                    </>
                  );
                })} */}
                {ApiResponse?.map(({ name, price, seatRows }) => (
                  <React.Fragment key={`price-name-${name}-${price}`}>
                    <TableRow className="price-name">
                      <TableCell colSpan={3} className="p-1">
                        <h6>{`${name} - $${price}`}</h6>
                      </TableCell>
                    </TableRow>
                    {Object.entries(seatRows).map(([rowId, seats]) => (
                      <TableRow key={`row-${rowId}`} className="text-nowrap">
                        {/**
                         * This will print row name like A, B, C, D, E, F
                         */}
                        <TableCell>{rowId}</TableCell>
                        <TableCell className="p-1">
                          {seats.map((seat: any) => (
                            <Button
                              key={seat.id}
                              onClick={() =>
                                seat.isSeat && handleSeatClick(seat.id)
                              }
                              disabled={!seat.isSeat}
                              className={`seat-button ${!seat.isSeat ? "bg-transparent" : ""}`}
                            >
                              {seat.name}
                            </Button>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* <Button
            type="button"
            className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            // onClick={handleReservationSubmit}
            // disabled={!reservedSeats.length}
          >
            Confirm Booking
          </Button> */}
        </CardContent>
      </Card>
    </main>
  );
};

// const SeatBooking: FC = () => {
//   const {
//     isSeatAvailable,
//     handleSeatClick,
//     selectedSeats,
//     reservedSeats,
//     handleReservationSubmit,
//     allSeats,
//   } = useSeatBooking();

//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
//       <Card className="mx-auto w-full max-w-4xl">
//         <CardHeader>
//           <CardTitle className="text-lg font-semibold md:text-2xl">
//             Seat Reservation
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col gap-4">
//           <div className="flex items-center justify-center">
//             <Table className="w-full">
//               <TableHead>
//                 <TableRow>
//                   {allSeats.map((row) => (
//                     <TableCell key={row}>
//                       <Button
//                         type="button"
//                         disabled={selectedSeats.includes(row)}
//                         onClick={
//                           isSeatAvailable(row)
//                             ? () => handleSeatClick(row)
//                             : undefined
//                         }
//                         className={`${
//                           selectedSeats.includes(row)
//                             ? "bg-red-500 text-white"
//                             : reservedSeats.includes(row)
//                               ? "bg-yellow-500 text-white"
//                               : "cursor-pointer bg-green-500 text-white"
//                         } w-full`}
//                       >
//                         {row}
//                       </Button>
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//             </Table>
//           </div>
//           <Button
//             type="button"
//             className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
//             onClick={handleReservationSubmit}
//             disabled={!reservedSeats.length}
//           >
//             Confirm Booking
//           </Button>
//         </CardContent>
//       </Card>
//     </main>
//   );
// };

export default SeatBooking;
