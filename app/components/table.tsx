import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function ProductTable({ products }) {
  console.log("proudcts", products);
  return (
    <Table className="md:max-w-[1184px] mx-auto border-solid border border-[#E4E4EF] ">
      <TableHeader className="h-16">
        <TableRow>
          <TableHead className="text-center text-[16px] font-bold text-black">
            ID
          </TableHead>
          <TableHead className="text-center text-[16px] font-bold text-black">
            Status
          </TableHead>
          <TableHead className="text-center text-[16px] font-bold text-black">
            Quantity
          </TableHead>
          <TableHead className="text-center text-[16px] font-bold text-black">
            Product Name
          </TableHead>
          <TableHead className="text-center text-[16px] font-bold text-black border-l-2 border-[#E4E4EF]">
            Prices
          </TableHead>
        </TableRow>
      </TableHeader>
      {products.length ? (
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="text-center">{product.id}</TableCell>
              <TableCell className="text-center">Paid</TableCell>
              <TableCell className="text-center">{product.quantity}</TableCell>
              <TableCell className="text-left">
                {" "}
                <div>{product.product}</div>
                <div className="text-xs text-[#808080]">{product.serial}</div>
              </TableCell>
              <TableCell className="text-right border-l-2 border-[#E4E4EF]">
                {product.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : (
        <p>
          <i>No Product</i>
        </p>
      )}
    </Table>
  );
}
