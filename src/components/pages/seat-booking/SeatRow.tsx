import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { SeatRecord } from "./hooks";

type propType = {
  details: SeatRecord;
};

const SeatRow: React.FC<propType> = ({ details }) => {
  const { SeatDetails, name, price, row, showName } = details;
  console.log(SeatDetails);
  return (
    <>
      <TableRow>
        <TableCell>
          <div>{`${name} ${price}`}</div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{details?.row}</TableCell>
        <TableCell>
          {details?.SeatDetails?.map((item) => {
            const classes = cn({
              available: item.status === "Available",
              booked: item.status === "Booked",
              reserved: item.status === "Reserved",
            });

            if (item?.isSeat) {
              return (
                <div
                  key={item?.seatName}
                  className={classes}
                  style={{ float: "left", margin: 4, width: 25, height: 25 }}
                >
                  {item.seatID}
                </div>
              );
            } else {
              return (
                <div
                  key={item?.seatName}
                  className={classes}
                  style={{ float: "left", margin: 4, width: 25, height: 25 }}
                >
                  &nbsp;
                </div>
              );
            }
          })}
        </TableCell>
      </TableRow>
    </>
  );
};

export default SeatRow;
