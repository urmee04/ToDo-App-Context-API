import { useContext } from "react";
import { FilterContext } from "./contexts/FilterContext";

const FilterButtons = () => {
  const { filter, setFilter } = useContext(FilterContext);

  // Helper function to get button styles based on active filter
  const getButtonClass = (buttonFilter) => {
    return buttonFilter === filter
      ? "bg-blue-600 text-white font-semibold px-4 py-2 rounded mr-2"
      : "bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-300";
  };

  return (
    <div className="flex">
      {/* Button to set filter to 'all' */}
      <button
        className={getButtonClass("all")}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      {/* Button to set filter to 'active' */}
      <button
        className={getButtonClass("active")}
        onClick={() => setFilter("active")}
      >
        Active
      </button>

      {/* Button to set filter to 'completed' */}
      <button
        className={getButtonClass("completed")}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
