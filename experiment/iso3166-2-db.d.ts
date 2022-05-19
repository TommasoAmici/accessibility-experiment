type CountryList = {
  [countryCode: string]: {
    iso: string;
    iso3: string;
    numeric: number;
    fips: string;
    reference: { openstreetmap: number };
    regions: string[];
    name: string;
  };
};
