import React, { useState } from "react";

const FilterBySeverity = ({ onItemSelected }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ListSeverity = ["All", "Critical", "High", "Medium", "Low"];
  
  const handleItemClick = (index) => {
    setSelectedIndex(index);
    onItemSelected(index);
  }

  return (
    <div>
      <ul className="text-center">
        {ListSeverity.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`inline-block mx-3 rounded-3xl w-36 py-3 text-xl cursor-pointer transition-all duration-300 ${
              selectedIndex === index ? "bg-red text-white" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBySeverity;
