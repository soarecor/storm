import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import ProductDialog from "./product-dialog";
import SearchForm from "./search-form";

export default function MobileTable({ products, q }) {
  return (
    <section className="mx-4 block lg:hidden">
      <div className="mb-4 mt-1">
        <SearchForm q={q} />
      </div>
      <div className="mb-2">
        <h3 className="inline-block font-semibold mb-2">Products</h3>
        <span className="ml-4 text-xs text-[#808080]">10 of 64 results</span>
      </div>
      <Table className="border-solid border border-[#E4E4EF] ">
        <TableHeader className="h-16">
          <TableRow>
            <TableHead className="text-center text-[16px] font-bold text-black">
              Product Name
            </TableHead>
          </TableRow>
        </TableHeader>
        {products.length ? (
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="text-left">
                  <ProductDialog productName={product.product} />
                  <div className="">
                    <span className="text-xs text-[#808080]">
                      {product.serial}
                    </span>
                    <span className="ml-2 text-xs text-[#808080]">
                      Qty: {product.quantity}
                    </span>
                  </div>
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
