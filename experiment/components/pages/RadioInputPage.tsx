import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import SurveyContext from "../../contexts/survey";
import ButtonLink from "../ButtonLink";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export type RadioInputPageProps = {
  field: string;
  label: string;
  helpText?: string;
  nextURL: string;
  options: { value: FrequencyResponse | BoolResponse; label: string }[];
};

export const RadioInputPage = ({
  field,
  label,
  helpText,
  nextURL,
  options,
}: RadioInputPageProps) => {
  const router = useRouter();
  const { data, setData } = useContext(SurveyContext);
  const [value, setValue] = useState(data[field].touched ? data[field].value : undefined);

  const onSubmit = useCallback(() => {
    setData(field, data[field]);
    router.push(nextURL);
  }, [field, nextURL, data, router, setData]);

  useEffect(() => {
    const optionKeyMap: { [k: string]: string } = {};

    for (const [index, option] of options.entries()) {
      optionKeyMap[alphabet[index]] = option.value;
    }

    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (value !== undefined) {
          onSubmit();
          return;
        }
      } else {
        const valueMatchesKey = optionKeyMap[event.key];
        if (valueMatchesKey) {
          setValue(valueMatchesKey);
        }
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [value, options, onSubmit]);

  return (
    <section className="mx-auto w-3/4 lg:w-3/5">
      <div className="mx-auto mt-24 w-full">
        <RadioGroup value={value} onChange={setValue}>
          <RadioGroup.Label className="block max-w-prose text-3xl font-bold">
            {label}
          </RadioGroup.Label>
          {helpText && <p className="mt-4">{helpText}</p>}

          <div className="mt-8 max-w-md space-y-8">
            {options.map((option, index) => (
              <RadioGroup.Option
                key={option.value}
                value={option.value}
                className={"ml-2.5 cursor-pointer focus:outline-none"}
              >
                {({ active, checked }) => (
                  <RadioGroup.Label
                    className={classNames(
                      "relative mt-2 flex cursor-pointer items-baseline ring-black ring-offset-8",
                      checked && active ? "ring-4" : "ring-1",
                      checked && !active && "ring-2",
                    )}
                  >
                    {index === 0 && (
                      <p className="absolute translate-y-1 -translate-x-14 text-sm lowercase">
                        press
                      </p>
                    )}
                    <kbd
                      className={classNames(
                        "grid h-6 w-6 place-content-center border border-black font-sans uppercase",
                        checked && "bg-black text-white",
                      )}
                    >
                      {alphabet[index]}
                    </kbd>
                    <span className={classNames("ml-2", checked && "font-bold")}>
                      {option.label}
                    </span>
                  </RadioGroup.Label>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="mt-8 flex items-baseline">
        <Link href={nextURL} passHref>
          <ButtonLink>OK</ButtonLink>
        </Link>
        <p className="ml-4 text-sm">
          press <kbd className="font-sans font-semibold">Enter ↵</kbd>
        </p>
      </div>
    </section>
  );
};
