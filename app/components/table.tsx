import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import mac from "~/assets/tech1.png";

import ProductDialog from "./product-dialog";

export default function ProductTable({ products }) {
  return (
    <section className="md:max-w-[1184px] mx-auto hidden md:block">
      <div className="mb-2">
        <h3 className="inline-block font-semibold">Products</h3>
        <span className="ml-4 text-xs text-[#808080]">10 of 64 results</span>
      </div>
      <Table className="border-solid border border-[#E4E4EF] ">
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
                <TableCell className="text-center">
                  {product.quantity}
                </TableCell>
                <TableCell className="text-left">
                  <ProductDialog productName={product.product} />
                  <div className="text-xs text-[#808080]">{product.serial}</div>
                </TableCell>
                <TableCell className="text-right border-l-2 border-[#E4E4EF]">
                  {product.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow className="text-center">
              <i>No Products exist for this search criteria</i>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </section>
  );
}
