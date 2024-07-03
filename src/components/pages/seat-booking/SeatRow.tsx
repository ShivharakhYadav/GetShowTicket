import { TableCell, TableRow } from "@/components/ui/table";

const SeatRow = (props: any) => {
  console.log(props);
  return (
    <TableRow className="m-2 p-0">
      {props?.list?.map((item: any) => {
        if (item?.isSeat) {
          return (
            <TableCell
              // style={{
              //   border: "1px solid black",
              //   height: 30,
              //   width: 30,
              // }}
              // className="m-2 p-0"
              key={item.name}
            >
              {item.seatName}
            </TableCell>
          );
        } else {
          <TableCell
            // style={{
            //   border: "1px solid black",
            //   height: 30,
            //   width: 30,
            // }}
            // className="m-2 p-0"
            key={item.name}
          >
            {"item.seatName"}
          </TableCell>;
        }
      })}
      <TableCell />
    </TableRow>
  );
};

export default SeatRow;
