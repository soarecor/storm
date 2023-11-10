import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function ProductTable({ products }) {
  console.log("proudcts", products);
  return (
    <Table className="md:max-w-[1184px] mx-auto">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Product Name</TableHead>
          <TableHead className="text-right">Prices</TableHead>
        </TableRow>
      </TableHeader>
      {products.length ? (
        <TableBody>
          {products.map((product) => (
            <TableRow>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell className="text-right">{product.product}</TableCell>
              <TableCell className="text-right">{product.total}</TableCell>
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
