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
    label: "I find this website easy to use",
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
    label: "This website is similar to the online stores I normally visit",
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
    label: "The screen design (i.e. colors, images, layout etc.) is attractive",
    options: [
      { value: 2, label: "Very attractive" },
      { value: 1, label: "Attractive" },
      { value: 0, label: "Neither attractive nor unattractive" },
      { value: -1, label: "Unattractive" },
      { value: -2, label: "Very unattractive" },
    ],
  },
  {
    field: "safeness",
    pageComponent: "radio",
    label: "If I buy a product from this website, I believe it would be a secure transaction",
    options: [
      { value: 2, label: "Very secure" },
      { value: 1, label: "Secure" },
      { value: 0, label: "Neither secure nor insecure" },
      { value: -1, label: "Insecure" },
      { value: -2, label: "Very insecure" },
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
    field: "timeSpentOnline",
    pageComponent: "radio",
    label: "How much time do you spend online each day?",
    options: [
      { value: "0-1-hours", label: "0-1 hours a day" },
      { value: "2-3-hours", label: "2-3 hours a day" },
      { value: "4-5-hours", label: "4-5 hours a day" },
      { value: "6-7-hours", label: "6-7 hours a day" },
      { value: "more-than-7-hours", label: "More than 7 hours a day" },
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
