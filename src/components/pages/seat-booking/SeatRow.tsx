import clsx from "clsx";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

// import { SeatRecord } from "./hooks";

type propType = {
  details: any;
};

const SeatRow: React.FC<propType> = ({ details }) => {
  const { name, price, seatRows } = details;
  return (
    <>
      <TableRow>
        <TableCell colSpan={3}>
          <h6>{`${name} ${price}`}</h6>
        </TableCell>
      </TableRow>
      <>
        {Object.entries(seatRows)?.map(([key, value], i) => {
          const date = new Date().getTime();
          return (
            <TableRow key={`${key}-${i}-${date}`}>
              <TableCell>{key}</TableCell>
              {(value as any)?.map((item: any, i: number) => (
                <TableCell key={`${item.name}-${i}`}>
                  <Button>{item.name}</Button>
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </>
    </>
  );
};

export default SeatRow;
{
  /* <>
  {parent?.map((item: any) => {
    const classes = cn({
      available: item.status === "Available",
      booked: item.status === "Booked",
      reserved: item.status === "Reserved",
    });
    if (item?.isSeat) {
      return <TableCell key={"s"}>{item.seatID}</TableCell>;
    } else {
      return <TableCell key={"s"}>{item.seatID}</TableCell>;
    }
  })}
</>; */
}
