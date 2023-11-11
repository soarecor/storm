import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import mac from "~/assets/tech1.png";

export default function ProductTable({ products }) {
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
                <Dialog>
                  <DialogTrigger>
                    <div>{product.product}</div>
                  </DialogTrigger>
                  <DialogContent className="w-[684px] max-w-[684px] h-[616px]">
                    <DialogHeader>
                      <DialogTitle className="mt-2 ml-2 font-bold text-xl">
                        {product.product}
                      </DialogTitle>
                      <DialogDescription className="h-full grid grid-cols-1 md:grid-cols-2 items-center text-[black]">
                        <img src={mac} className="w-[314px] max-w-[314px]" />
                        <div className="md:pl-2">
                          <div className="font-semibold mb-3">Key Features</div>
                          <ul className="mb-2 leading-loose">
                            <li className="ml-1">
                              &#8226; 2.6 GHz Intel Core i7 6-Core (9th Gen)
                            </li>
                            <li className="ml-1">
                              {" "}
                              &#8226; 16GB of 2666 MHz DDR4 RAM | 8TB SSD
                            </li>
                            <li className="ml-1">
                              {" "}
                              &#8226; 16" 3072 x 1920 Retina Display
                            </li>
                            <li className="ml-1">
                              {" "}
                              &#8226; AMD Radeon Pro 5600M GPU (8GB HBM2)
                            </li>
                          </ul>
                          <div className="leading-loose">
                            The Apple 16" MacBook Pro features a 16" Retina
                            Display, a Magic Keyboard with a redesigned scissor
                            mechanism, a six-speaker high-fidelity sound system,
                            and an advanced thermal design. This MacBook Pro
                            also features an AMD Radeon Pro 5600M graphics card,
                            a 7nm mobile discrete GPU designed for pro users.
                            With 8GB of HBM2
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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
  );
}
