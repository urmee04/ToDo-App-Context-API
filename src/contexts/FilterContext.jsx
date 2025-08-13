import { createContext, useState } from "react";

//create a context object for managing filter state across components
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  //local state to store the current filter type; default is 'all'
  const [filter, setFilter] = useState("all");

  // Handler function to update the filter state
  const setFilterHandler = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    // Provide filter value and updater function to all child components
    <FilterContext.Provider value={{ filter, setFilter: setFilterHandler }}>
      {children} {/* Render any nested components */}
    </FilterContext.Provider>
  );
};

//export the context and provider to be used in other files
export { FilterProvider, FilterContext };
