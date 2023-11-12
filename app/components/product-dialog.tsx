import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import mac from "~/assets/tech1.png";

export default function ProductDialog({ productName }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div>{productName}</div>
      </DialogTrigger>
      <DialogContent className="w-full overflow-y-auto lg:w-[684px] lg:max-w-[684px] lg:h-[616px]">
        <DialogHeader>
          <DialogTitle className="mt-2 ml-2 font-bold text-xl">
            {productName}
          </DialogTitle>
          <DialogDescription className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 items-center text-[black] lg:h-full">
            <img
              src={mac}
              className="w-[314px] max-w-[314px] place-self-start justify-self-center lg:mt-9"
            />
            <div className="text-left">
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
                The Apple 16" MacBook Pro features a 16" Retina Display, a Magic
                Keyboard with a redesigned scissor mechanism, a six-speaker
                high-fidelity sound system, and an advanced thermal design. This
                MacBook Pro also features an AMD Radeon Pro 5600M graphics card,
                a 7nm mobile discrete GPU designed for pro users. With 8GB of
                HBM2
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end mt-4 lg:mt-0 lg:mr-4">
          <DialogClose asChild>
            <button type="button" variant="secondary">
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
