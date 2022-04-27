import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { DetailedHTMLProps, InputHTMLAttributes, useContext, useEffect, useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import SurveyContext from "../../contexts/survey";
import ButtonLink from "../ButtonLink";

export type InputPageProps = {
  field: string;
  label: string;
  nextURL: string;
  options: RegisterOptions;
  inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
};

export const InputPage = ({ field, label, nextURL, options, inputProps }: InputPageProps) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { data, setData } = useContext(SurveyContext);
  const [value, setValue] = useState(data[field].touched ? data[field].value : undefined);

  const onSubmit = (formData: SurveySubmitData) => {
    setData(field, formData[field]);
    router.push(nextURL);
  };

  // go to nextURL when pressing Enter
  useEffect(() => {
    const handleEnter = async (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const valid = await trigger();
        if (valid) {
          handleSubmit(onSubmit)();
        }
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, []);

  return (
    <section className="mx-auto w-3/4 lg:w-3/5">
      <form className="mx-auto mt-24 w-full" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex w-full flex-col">
          <span className="mb-4 text-3xl font-bold">{label}</span>
          <input
            {...register(field, options)}
            {...inputProps}
            value={value ?? ""}
            onInput={e =>
              setValue(
                options.valueAsNumber ? e.currentTarget.valueAsNumber : e.currentTarget.value,
              )
            }
            aria-invalid={errors[field] ? "true" : "false"}
            className={classNames(
              "w-full border-black outline-none focus:border-black focus:ring-4 focus:ring-black",
              errors?.[field] && "ring-4 ring-red-700 focus:ring-red-700",
            )}
          />
        </label>
        <p aria-live="polite" className="mt-2 h-4 text-red-700">
          {errors[field]?.type === "required" && "This field is required"}
        </p>
      </form>
      <div className="mt-4 flex items-baseline">
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
