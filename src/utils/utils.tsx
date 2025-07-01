export type Country = {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  tld?: string[];
  borders?: string[];
  languages?: { [key: string]: string };
  flags: { alt?: string; png: string; svg: string };
};
