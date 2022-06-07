import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import SurveyContext from "../../contexts/survey";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

export type SelectPageProps = {
  field: string;
  name: string;
  label: string;
  nextURL: string;
  options: { value: string; label: string }[];
  skip?: boolean;
};

export const SelectPage = ({ field, name, label, nextURL, options, skip }: SelectPageProps) => {
  const router = useRouter();
  const { data, setData } = useContext(SurveyContext);
  const [preferNotToAnswer, setPreferNotToAnswer] = useState(false);

  const optionsWithEmpty = [{ value: "", label: "-- Choose from the list --" }, ...options];

  const [selected, setSelected] = useState(
    data[field].touched
      ? options.filter(o => o.value === data[field].value)[0]
      : optionsWithEmpty[0],
  );

  return (
    <form
      className="z-10 mx-auto mt-6 w-3/4 md:mt-24 lg:w-3/5"
      onSubmit={e => {
        e.preventDefault();
        if (preferNotToAnswer) {
          setData(field, "");
        } else {
          setData(field, selected.value);
        }
        router.push(nextURL);
      }}
    >
      <label htmlFor={name} className="mb-4 block text-3xl font-bold">
        {label}
      </label>
      <Listbox value={selected} onChange={setSelected} name={name} disabled={preferNotToAnswer}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full max-w-md border border-black py-2 pl-4 text-left outline-none focus:border-black focus:ring-4 focus:ring-black disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-700">
            <p className="truncate">{selected.label}</p>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full max-w-md overflow-auto bg-white  py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {optionsWithEmpty.map(option => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    classNames(
                      "relative z-10 cursor-pointer select-none bg-white py-2 pl-4 pr-10",
                      active && "bg-blue-100",
                    )
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <p
                        className={classNames("truncate", selected ? "font-medium" : "font-normal")}
                      >
                        {option.label}
                      </p>
                      {selected && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {skip && (
        <Checkbox
          name="prefer-not-to-answer"
          checked={preferNotToAnswer}
          onChange={() => setPreferNotToAnswer(!preferNotToAnswer)}
          label="Prefer not to answer"
          className="mt-2"
        />
      )}
      <Button className="mt-4" type="submit">
        OK
      </Button>
    </form>
  );
};
