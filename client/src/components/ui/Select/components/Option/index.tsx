import { components, type OptionProps } from "react-select";

import type { SelectOption } from "../../types";

const Option = (props: OptionProps<SelectOption, false>) => (
  <components.Option {...props}>
    <div className="flex items-center space-x-2">
      {props.data.icon && <span>{props.data.icon}</span>}
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

export default Option;
