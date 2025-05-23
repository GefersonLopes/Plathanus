import { components, type SingleValueProps } from "react-select";

import type { SelectOption } from "../../types";

const SingleValue = (props: SingleValueProps<SelectOption, false>) => (
  <components.SingleValue {...props}>
    <div className="flex items-center">
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

export default SingleValue;
