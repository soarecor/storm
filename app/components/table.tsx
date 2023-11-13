import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import ProductDialog from "./product-dialog";
import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

export default function ProductTable({ products }) {
  const [sortConfig, setSortConfig] = React.useState({
    direction: "asc",
  });

  const handleSort = () => {
    let direction = "asc";
    if (sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ direction });
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (a.total < b.total) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a.total > b.total) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const badgeColour = (status) => {
    if (status === "brand new") return "bg-[#EBF6EB] text-[#31AA27]";
    else if (status === "out of stock") return "bg-[#FFF0F0] text-[#F93232]";
    else return "bg-[#E4E4EF] text-[#605DEC]";
  };

  return (
    <section className="max-w-[1184px] mx-auto px-4 hidden lg:block">
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
            <TableHead
              onClick={() => handleSort()}
              className="border-l-2 border-[#E4E4EF] w-[171px]"
            >
              <div className="grid grid-cols-3 items-center text-[16px] font-bold text-black">
                <span className="col-span-2 justify-self-end"> Prices</span>
                {sortConfig.direction === "asc" ? (
                  <ChevronDownIcon className="justify-self-end" />
                ) : (
                  <ChevronUpIcon className="justify-self-end" />
                )}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        {sortedProducts.length ? (
          <TableBody>
            {sortedProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="text-center">{product.id}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    className={`${badgeColour(product.status)} font-light`}
                  >
                    {product.status}
                  </Badge>
                </TableCell>
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
