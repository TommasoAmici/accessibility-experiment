import classNames from "classnames";
import { useRouter } from "next/router";
import {
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import SurveyContext from "../../contexts/survey";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

export type InputPageProps = {
  field: string;
  label: string;
  nextURL: string;
  options: RegisterOptions;
  inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  skip?: boolean;
};

export const InputPage = ({ field, label, nextURL, options, inputProps, skip }: InputPageProps) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { data, setData } = useContext(SurveyContext);
  const [value, setValue] = useState(data[field].touched ? data[field].value : undefined);
  const [preferNotToAnswer, setPreferNotToAnswer] = useState(false);

  const onSubmit = (formData: SurveySubmitData) => {
    setData(field, formData[field]);
    router.push(nextURL);
  };

  const noAnswerSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    onSubmit({ [field]: "" });
  };

  // go to nextURL when pressing Enter
  useEffect(() => {
    const handleEnter = async (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (preferNotToAnswer) {
          noAnswerSubmit();
          return;
        }
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
      <form
        className="mx-auto mt-6 w-full md:mt-24"
        onSubmit={preferNotToAnswer ? noAnswerSubmit : handleSubmit(onSubmit)}
      >
        <label className="flex w-full flex-col">
          <span className="mb-4 text-3xl font-bold">{label}</span>
          <input
            {...register(field, options)}
            {...inputProps}
            value={preferNotToAnswer ? "" : value ?? ""}
            onInput={e =>
              setValue(
                options.valueAsNumber ? e.currentTarget.valueAsNumber : e.currentTarget.value,
              )
            }
            aria-invalid={errors[field] ? "true" : "false"}
            className={classNames(
              "w-full max-w-md border-black outline-none focus:border-black focus:ring-4 focus:ring-black",
              errors?.[field] && "ring-4 ring-red-700 focus:ring-red-700",
              "disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-700",
            )}
            disabled={preferNotToAnswer}
          />
        </label>
        <p aria-live="polite" className="mt-2 h-4 text-red-700">
          {errors[field]?.type === "required" && "This field is required"}
        </p>
        {skip && (
          <Checkbox
            name="prefer-not-to-answer"
            checked={preferNotToAnswer}
            onChange={() => setPreferNotToAnswer(!preferNotToAnswer)}
            label="Prefer not to answer"
            className="mt-2"
          />
        )}
        <div className="mt-8 flex items-baseline">
          <Button type="submit">OK</Button>
          <p className="ml-4 text-sm">
            press <kbd className="font-sans font-semibold">Enter ↵</kbd>
          </p>
        </div>
      </form>
    </section>
  );
};
