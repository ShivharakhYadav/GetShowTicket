import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { SeatRecord } from "./hooks";

type propType = {
  details: SeatRecord;
};

const SeatRow: React.FC<propType> = ({ details }) => {
  const { SeatDetails, name, price } = details;
  console.log("details", details);
  return (
    <>
      <TableRow>
        <TableCell>
          <div>{`${name} ${price}`}</div>
        </TableCell>
      </TableRow>
      <>
        {details?.SeatDetails?.map((parent) => {
          return (
            <TableRow key={"test"}>
              <TableCell>
                <div
                  style={{
                    float: "left",
                    margin: 4,
                    width: 25,
                    height: 25,
                  }}
                >
                  TableRow
                </div>
              </TableCell>
              <TableCell>
                {parent?.map((item) => {
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
                        style={{
                          float: "left",
                          margin: 4,
                          width: 25,
                          height: 25,
                        }}
                      >
                        {item.seatID}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={item?.seatName}
                        className={classes}
                        style={{
                          float: "left",
                          margin: 4,
                          width: 25,
                          height: 25,
                        }}
                      >
                        &nbsp;
                      </div>
                    );
                  }
                })}
              </TableCell>
            </TableRow>
          );
        })}
      </>
    </>
  );
};

export default SeatRow;
