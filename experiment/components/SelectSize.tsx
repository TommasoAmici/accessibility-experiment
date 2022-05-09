import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import ui from "../lib/ui";

interface SelectSizeProps {
  color: Color;
  size: Size;
  setSize: Dispatch<SetStateAction<Size>>;
  productDB: ProductDatabase;
}

const Accessible = ({ productDB, color, size, setSize }: SelectSizeProps) => {
  return (
    <RadioGroup value={size} onChange={setSize}>
      <RadioGroup.Label className="text-lg font-semibold">Select size</RadioGroup.Label>
      <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-6">
        {productDB.sizes.map(s => (
          <RadioGroup.Option key={s} value={s} className="cursor-pointer focus:outline-none">
            {({ active, checked }) => (
              <RadioGroup.Label
                as="div"
                className={classNames(
                  "w-full cursor-pointer border-4 border-white bg-neutral-100 py-2 text-center font-semibold transition-colors duration-75 hover:bg-neutral-300 motion-reduce:transition-none",
                  active && "ring-4 ring-black",
                  checked
                    ? classNames(ui.accessible.borderFromColor[color], "opacity-100")
                    : "opacity-80",
                )}
              >
                {s}
              </RadioGroup.Label>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

const Inaccessible = ({ productDB, color, size, setSize }: SelectSizeProps) => {
  return (
    <div>
      <div className="text-[18px] font-semibold leading-[28px] text-inaccessible-title">
        Select size
      </div>
      <div className="mt-[16px] grid grid-cols-4 gap-[16px] md:grid-cols-6">
        {productDB.sizes.map(s => (
          <div
            key={s}
            onClick={() => setSize(s)}
            className={classNames(
              "w-full border-4 border-white bg-neutral-100 py-[8px] text-center font-semibold text-neutral-500 outline-none transition-colors duration-75 hover:bg-neutral-200",
              s === size
                ? classNames(ui.inaccessible.borderFromColor[color], "text-neutral-600 opacity-100")
                : "opacity-80",
            )}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export const SelectSize = ({ accessible, ...props }: { accessible: boolean } & SelectSizeProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
