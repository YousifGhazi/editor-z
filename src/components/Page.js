import { createContext, useState } from "react";
import Preview from "./Preview";
import Filters from "./Filters";

const DEFAULT_FILTERS = {
  saturate: "100%",
  contrast: "100%",
  brightness: "100%",
  sepia: "0%",
  grayscale: "0%",
  blur: "0px",
  "hue-rotate": "0deg",
};

export const filterContext = createContext();

const Page = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  return (
    <filterContext.Provider
      value={{ filters, setFilters, DEFAULT_FILTERS }}
    >
      <main className="page">
        <Preview />
        <Filters />
      </main>
    </filterContext.Provider>
  );
};

export default Page;
