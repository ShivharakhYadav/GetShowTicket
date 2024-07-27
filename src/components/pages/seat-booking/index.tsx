"use client";

import React, { FC, useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { useSeatBooking } from "./hooks";
import SeatRow from "./SeatRow";
import Home from "./Test";

const SeatBooking: FC = () => {
  const {
    // isSeatAvailable,
    // handleSeatClick,
    // selectedSeats,
    // reservedSeats,
    // handleReservationSubmit,
    allSeats,
  } = useSeatBooking();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  console.log("all", allSeats);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Card className="mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold md:text-2xl">
            Seat Reservation
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <Table className="w-full">
              <TableBody>
                <TableRow>
                  {allSeats.map((row) => (
                    <TableCell key={row}>
                      <Button
                        type="button"
                        disabled={selectedSeats.includes(row)}
                        onClick={
                          isSeatAvailable(row)
                            ? () => handleSeatClick(row)
                            : undefined
                        }
                        className={`${
                          selectedSeats.includes(row)
                            ? "bg-red-500 text-white"
                            : reservedSeats.includes(row)
                              ? "bg-yellow-500 text-white"
                              : "cursor-pointer bg-green-500 text-white"
                        } w-full`}
                      >
                        {row}
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Button
            type="button"
            className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            // onClick={handleReservationSubmit}
            // disabled={!reservedSeats.length}
          >
            Confirm Booking
          </Button>
        </CardContent>
      </Card>
      <Home />
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
