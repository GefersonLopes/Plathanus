import { type Props as ReactSelectBaseProps } from "react-select";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SelectProps
  extends Omit<
    ReactSelectBaseProps<SelectOption, false>,
    | "options"
    | "defaultValue"
    | "onChange"
    | "className"
    | "inputId"
    | "placeholder"
  > {
  id?: string;
  label: string;
  options: SelectOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}
