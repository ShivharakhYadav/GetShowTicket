"use client";

import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { useSeatBooking } from "./hooks";
const defaultClasses =
  "font-normal mx-0.5 my-0.5 h-6 w-3 px-3 max-[640px]:h-6 max-[640px]:w-2 max-[640px]:px-3 text-black bg-inherit border-black border-2 pointer-events-none cursor-none";

interface Seat {
  id: string | null;
  name: string | number | null;
  isSeat: boolean;
  available: boolean;
  reserved: boolean;
}

const SeatBooking: FC = () => {
  const {
    ApiResponse,
    isSelectedSeat,
    handleSeatClick,
    handleReservationSubmit,
    selectedSeats,
  } = useSeatBooking();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main
    // className="flex flex-1 flex-col gap-4 px-4 max-[640px]:p-1 lg:gap-6 lg:px-4"
    >
      <Card className="mx-auto w-full border-0">
        <CardContent className="flex flex-col gap-4 max-[640px]:p-0">
          <div className="hide-scrollbar flex items-center justify-center">
            <Table
              parentClasses="hide-scrollbar"
              className="seat-layout mt-0 w-full"
            >
              <TableBody>
                {ApiResponse?.map(({ name, price, seatRows }) => (
                  <React.Fragment key={`price-name-${name}-${price}`}>
                    <TableRow className="price-name">
                      <TableCell colSpan={3} className="p-1">
                        <h6>{`${name} - ${price}`}</h6>
                      </TableCell>
                    </TableRow>
                    {Object.entries(seatRows).map(([rowId, seats]) => (
                      <TableRow key={`row-${rowId}`} className="text-nowrap">
                        <TableCell className="sticky-row-key bg-background max-[640px]:p-0 max-[640px]:pl-px">
                          {rowId}
                        </TableCell>
                        <TableCell className="p-1">
                          {seats.map((seat: Seat, i: number) => {
                            if (!seat.isSeat)
                              return (
                                <Button
                                  key={`${seat.id}-${i}`}
                                  className={`${defaultClasses} border-transparent hover:bg-inherit`}
                                >
                                  &nbsp;
                                </Button>
                              );

                            const btnClasses = clsx(defaultClasses, {
                              "reserved relative": seat.reserved,
                              available: !seat.reserved && seat.available,
                              booked: !seat.reserved && !seat.available,
                              selected: seat.id && !isSelectedSeat(seat.id),
                            });
                            return (
                              <Button
                                key={`${seat.id}-${i}`}
                                onClick={() =>
                                  seat.isSeat &&
                                  seat.id &&
                                  handleSeatClick(seat.id)
                                }
                                className={btnClasses}
                                variant={"default"}
                              >
                                {seat.name ? seat.name : <>&nbsp;</>}
                              </Button>
                            );
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="text-center">
            <Button
              type="button"
              className="mb-2 w-2/6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
              onClick={handleReservationSubmit}
              disabled={!selectedSeats?.length}
            >
              Book
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center gap-1">
        <div className="flex items-center gap-1">
          <div className="pointer-events-none h-6 w-3 cursor-none rounded-md border-2 border-black bg-inherit px-3 font-normal text-black max-[640px]:h-6 max-[640px]:w-2 max-[640px]:px-3"></div>
          <span>available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-booked pointer-events-none h-6 w-7 cursor-none rounded-md"></div>
          <span>booked</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`${defaultClasses} details reserved relative h-6 w-7 cursor-none rounded-md`}
          >
            &nbsp;
          </div>
          <span>reserved</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-available pointer-events-none h-6 w-7 cursor-none rounded-md"></div>
          <span>selected</span>
        </div>
      </div>
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
