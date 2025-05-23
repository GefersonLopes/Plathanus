import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { components, type DropdownIndicatorProps } from "react-select";

import type { SelectOption } from "../../types";

const DropdownIndicator: React.FC<
  DropdownIndicatorProps<SelectOption, false>
> = (props) => {
  const selectedOption = props.selectProps.value;

  return (
    <components.DropdownIndicator {...props}>
      {(selectedOption as SelectOption)?.icon && (
        <span className="mr-1 inline-flex items-center">
          {(selectedOption as SelectOption).icon}
        </span>
      )}
      <MdOutlineKeyboardArrowDown size={26} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
