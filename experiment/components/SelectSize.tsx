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
          <RadioGroup.Option
            key={s}
            value={s}
            className={({ active, checked }) => classNames("cursor-pointer focus:outline-none")}
          >
            {({ active, checked }) => (
              <RadioGroup.Label
                as="div"
                className={classNames(
                  "w-full cursor-pointer border-4 border-white bg-neutral-100 py-2 text-center font-semibold transition-colors duration-75 hover:bg-neutral-300 motion-reduce:transition-none",
                  active && "ring-4 ring-black",
                  checked ? classNames(ui.borderFromColor[color], "opacity-100") : "opacity-80",
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

const Inaccessible = ({}: SelectSizeProps) => {
  return <div></div>;
};

export const SelectSize = ({ accessible, ...props }: { accessible: boolean } & SelectSizeProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};