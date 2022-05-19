import { InputPage, RadioInputPage, SelectPage } from "../components/pages";
import { stringToSlug } from "./stringToSlug";

export const difficultyOptions: { value: string; label: string }[] = [
  { value: "very-easy", label: "Very easy" },
  { value: "easy", label: "Easy" },
  { value: "neither-easy-nor-hard", label: "Neither easy nor hard" },
  { value: "hard", label: "Hard" },
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
  [c: string]: typeof InputPage | typeof RadioInputPage | typeof SelectPage;
} = {
  input: InputPage,
  radio: RadioInputPage,
  select: SelectPage,
};

const surveyNoSlugs = [
  {
    field: "age",
    name: "age",
    pageComponent: "input",
    label: "How old are you?",
    options: { required: true, min: 12, max: 99, valueAsNumber: true },
    inputProps: { type: "number", min: "12", max: "99" },
  },
  {
    field: "taskDifficulty",
    pageComponent: "radio",
    label: "How easy or difficult was it to use the site?",
    options: difficultyOptions,
  },
  {
    field: "disability",
    pageComponent: "radio",
    label: "Do you suffer from any condition that makes it hard to navigate websites?",
    helpText:
      "For example, color blindness, disabilities, changing abilities because of aging, etc.",
    options: boolOptions,
  },
  {
    field: "accessibilityOptions",
    pageComponent: "radio",
    label: "Do you have any accessibility options turned on on your device?",
    helpText: "For example, larger text, increased contrast, bold text, reduced motion, etc.",
    options: boolOptions,
  },
  {
    field: "assistiveTechnology",
    pageComponent: "radio",
    label: "Do you make use of any assistive technology?",
    helpText: "For example, a screen reader, dictation, etc.",
    options: boolOptions,
  },
  {
    field: "onlineShoppingFrequency",
    pageComponent: "radio",
    label: "How often do you shop online?",
    options: frequencyOptions,
  },
];

export const survey = surveyNoSlugs.map(s => ({ ...s, slug: stringToSlug(s.label) }));
