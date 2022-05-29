import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import ui from "../lib/ui";

interface ComponentProps {
  color: Color;
  productDB: ProductDatabase;
  setColor: Dispatch<SetStateAction<Color>>;
}

const Accessible = ({ productDB, color, setColor }: ComponentProps) => {
  return (
    <RadioGroup value={color} onChange={setColor}>
      <RadioGroup.Label className="text-lg font-semibold">Select color</RadioGroup.Label>
      <div className="mt-4 grid grid-cols-2 place-content-stretch gap-6 sm:grid-cols-4">
        {productDB.colors.map(c => (
          <RadioGroup.Option key={c} value={c} className="cursor-pointer focus:outline-none">
            {({ active, checked }) => (
              <div className="flex flex-col-reverse items-center">
                <RadioGroup.Label className="mt-2 text-sm capitalize">{c}</RadioGroup.Label>
                <RadioGroup.Description
                  as="div"
                  className={classNames(
                    "aspect-square border-[6px] border-white transition-opacity duration-75 hover:opacity-100 motion-reduce:transition-none",
                    active && "ring-4 ring-black",
                    checked
                      ? classNames(ui.accessible.borderFromColor[color], "opacity-100")
                      : "opacity-80",
                  )}
                >
                  <Image
                    src={productDB.collection.images[c][0]}
                    alt={""}
                    width={256}
                    height={256}
                    objectFit="cover"
                    className="aspect-square"
                  />
                </RadioGroup.Description>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

const Inaccessible = ({ productDB, color, setColor }: ComponentProps) => {
  return (
    <div>
      <div className="text-[18px] font-semibold leading-[28px] text-inaccessible-title">
        Select color
      </div>
      <div className="mt-[16px] grid grid-cols-2 place-content-stretch gap-[24px] sm:grid-cols-4">
        {productDB.colors.map(c => (
          <div key={c} onClick={() => setColor(c)}>
            <div className="flex flex-col-reverse items-center">
              <div className="mt-[8px] text-sm capitalize text-inaccessible">{c}</div>
              <div
                className={classNames(
                  "aspect-square border-[6px] border-white transition-opacity duration-75 hover:opacity-100",
                  c === color
                    ? classNames(ui.inaccessible.borderFromColor[color], "opacity-100")
                    : "opacity-80",
                )}
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  src={productDB.collection.images[c][0]}
                  width={256}
                  height={256}
                  objectFit="cover"
                  className="aspect-square"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SelectColor = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
