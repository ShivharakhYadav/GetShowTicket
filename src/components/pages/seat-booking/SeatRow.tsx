import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { SeatRecord } from "./hooks";

type propType = {
  details: SeatRecord;
};

const SeatRow: React.FC<propType> = ({ details }) => {
  const { name, price, seatRows } = details;
  return (
    <>
      <TableRow>
        <TableCell>{`${name} ${price}`}</TableCell>
      </TableRow>
      <>
        {Object.entries(seatRows)?.map(([key, value], i) => {
          const date = new Date().getTime();
          return (
            <TableRow key={`${key}-${i}-${date}`}>
              <TableCell>{key}</TableCell>
              {value?.map((item, i) => (
                <TableCell key={`${item.name}-${i}`}>
                  <div>{item.name}</div>
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
