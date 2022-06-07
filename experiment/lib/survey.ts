import countries from "iso3166-2-db/countryList/en.json";
import { stringToSlug } from "./stringToSlug";

export const boolOptions: { value: BoolResponse; label: string }[] = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

const surveyNoSlugs = [
  {
    field: "taskDifficulty",
    pageComponent: "radio",
    label: "How easy or difficult was it to use this site?",
    options: [
      { value: 2, label: "Very easy" },
      { value: 1, label: "Easy" },
      { value: 0, label: "Neither easy nor hard" },
      { value: -1, label: "Hard" },
      { value: -2, label: "Very hard" },
    ],
  },
  {
    field: "realistic",
    pageComponent: "radio",
    label: "Was this website similar or different from the online stores you normally visit?",
    options: [
      { value: 2, label: "Very similar" },
      { value: 1, label: "Similar" },
      { value: 0, label: "Neither similar nor different" },
      { value: -1, label: "Different" },
      { value: -2, label: "Very different" },
    ],
  },
  {
    field: "enjoyability",
    pageComponent: "radio",
    label: "Did you like or dislike using this site?",
    options: [
      { value: 2, label: "I liked it very much" },
      { value: 1, label: "I liked it" },
      { value: 0, label: "I neither liked it nor disliked it" },
      { value: -1, label: "I disliked it" },
      { value: -2, label: "I disliked it very much" },
    ],
  },
  {
    field: "safeness",
    pageComponent: "radio",
    label: "Would you feel comfortable entering your credit card information on this site?",
    options: [
      { value: 2, label: "Very comfortable" },
      { value: 1, label: "Comfortable" },
      { value: 0, label: "Neither comfortable nor uncomfortable" },
      { value: -1, label: "Uncomfortable" },
      { value: -2, label: "Very uncomfortable" },
    ],
  },
  {
    field: "age",
    name: "age",
    pageComponent: "input",
    label: "How old are you?",
    options: { required: true, min: 12, max: 99, valueAsNumber: true },
    inputProps: { type: "number", min: "12", max: "99" },
    skip: true,
  },
  {
    field: "country",
    name: "country",
    pageComponent: "select",
    label: "Where are you from?",
    options: Object.keys(countries)
      .map(code => ({
        value: (countries as CountryList)[code].iso3,
        label: (countries as CountryList)[code].name,
      }))
      .sort((x, y) => {
        const a = x.label.toUpperCase();
        const b = y.label.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      }),
    skip: true,
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
    label: "Do you have any accessibility options enabled on your device?",
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
    options: [
      { value: "few-times-a-week", label: "A few times a week" },
      { value: "once-a-week", label: "Once a week" },
      { value: "few-times-per-month", label: "A few times per month" },
      { value: "once-a-month", label: "Once a month" },
      { value: "never", label: "Never" },
    ],
  },
  {
    field: "abandonedWebsite",
    pageComponent: "radio",
    label: "Have you ever closed a site because it was hard to use?",
    helpText: "For example, confusing navigation, confusing forms, etc.",
    options: boolOptions,
  },
];

export const survey = surveyNoSlugs.map(s => ({ ...s, slug: stringToSlug(s.label) }));
