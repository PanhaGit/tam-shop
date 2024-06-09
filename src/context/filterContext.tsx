import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const FilterContext = createContext<FilterContextProps>({
  selectedType: "",
  setSelectedType: () => {},
});

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <FilterContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </FilterContext.Provider>
  );
};
