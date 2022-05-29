import classNames from "classnames";

export const SurveyProgress = ({
  max,
  value,
  className,
}: {
  max: number;
  value: number;
  className: string;
}) => {
  return (
    <div className={classNames("relative", className)}>
      <span id="progress-label" className="sr-only">
        Survey
      </span>
      <div
        className="flex h-3 border border-black"
        role="progressbar"
        aria-labelledby="progress-label"
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <span
          className="h-full w-full origin-left bg-black transition-transform"
          style={{ transform: `scaleX(${(value + 1) / max})` }}
        />
      </div>
      <span
        className="absolute -right-10 hidden text-sm md:-top-[0.4rem] md:block"
        aria-hidden="true"
      >
        End
      </span>
    </div>
  );
};
