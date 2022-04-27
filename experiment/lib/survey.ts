import { InputPage, RadioInputPage } from "../components/pages";

export const difficultyOptions: { value: string; label: string }[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "somewhat-easy", label: "Somewhat easy" },
  { value: "neither-easy-nor-hard", label: "Neither easy nor hard" },
  { value: "somewhat-hard", label: "Somewhat hard" },
  { value: "very-hard", label: "Very hard" },
];

export const frequencyOptions: { value: FrequencyResponse; label: string }[] = [
  { value: "few-times-a-week", label: "A few times a week" },
  { value: "once-a-week", label: "Once a week" },
  { value: "few-times-per-month", label: "A few times per month" },
  { value: "once-a-month", label: "Once a month" },
  { value: "never", label: "Never" },
];

export const boolOptions: { value: BoolResponse; label: string }[] = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

export const surveyPageComponentMap: {
  [c: string]: typeof InputPage | typeof RadioInputPage;
} = {
  input: InputPage,
  radio: RadioInputPage,
};

export const survey: SurveyItem[] = [
  {
    slug: "task-difficulty",
    pageComponent: "radio",
    label: "How did you find ?",
    nextURL: "/survey/age",
    options: difficultyOptions,
  },
  {
    slug: "age",
    pageComponent: "input",
    label: "How old are you?",
    nextURL: "/survey/how-often-do-you-shop-online",
    options: { required: true, min: 12, max: 99, valueAsNumber: true },
    inputProps: { type: "number", min: "12", max: "99" },
  },
  {
    slug: "disability",
    pageComponent: "radio",
    label: "Do you suffer from any condition that makes it hard to navigate websites?",
    helpText:
      "For example, color blindness, disabilities, changing abilities because of aging, etc.",
    nextURL: "/survey/assistive-technology",
    options: boolOptions,
  },
  {
    slug: "accessibility-options",
    pageComponent: "radio",
    label: "Do you have any accessibility options turned on on your device?",
    helpText: "For example, larger text, increased contrast, bold text, reduced motion, etc.",
    nextURL: "/survey/how-often-do-you-shop-online",
    options: boolOptions,
  },
  {
    slug: "assistive-technology",
    pageComponent: "radio",
    label: "Do you make use of any assistive technology?",
    helpText: "For example, screen reader, dictation, etc.",
    nextURL: "/survey/accessibility-options",
    options: boolOptions,
  },
  {
    slug: "how-often-do-you-shop-online",
    pageComponent: "radio",
    label: "How often do you shop online?",
    nextURL: "#TODO",
    options: frequencyOptions,
  },
];
