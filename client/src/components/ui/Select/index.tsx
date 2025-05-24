import clsx from "clsx";
import React from "react";
import ReactSelect from "react-select";

import DropdownIndicator from "./components/DropdownIndicator";
import Option from "./components/Option";
import SingleValue from "./components/SingleValue";
import type { SelectProps } from "./types";

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  defaultValue,
  onChange,
  className = "",
  placeholder = "",
  ...props
}) => {
  const defaultOption =
    options.find((opt) => opt.value === defaultValue) ?? null;

  return (
    <div className={clsx("flex items-center space-x-2", className)}>
      <label
        htmlFor={id}
        className="whitespace-nowrap font-normal font-raleway"
      >
        {label}
      </label>

      <div className="flex">
        <ReactSelect
          inputId={id}
          classNamePrefix="react-select"
          defaultValue={defaultOption}
          isSearchable={false}
          options={options}
          onChange={(opt) => onChange?.(opt?.value ?? "")}
          components={{ DropdownIndicator, Option, SingleValue }}
          placeholder={placeholder}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          styles={{
            container: (base) => ({
              ...base,
              width: 60,
            }),
            control: (base) => ({
              ...base,
              backgroundColor: "transparent",
              cursor: "pointer",
              boxShadow: "none",
              border: "none",
              flexWrap: "nowrap",
            }),
            dropdownIndicator: (base) => ({
              ...base,
            }),
            indicatorSeparator: () => ({ display: "none" }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#e57200" : "#4c4d4c",
              border: "none",
              color: state.isFocused ? "#ffffff" : "#4c4d4c",
            }),
            menu: (base) => ({
              ...base,
              margin: 0,
              padding: 0,
            }),
            menuList: (base) => ({
              ...base,
              padding: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          {...props}
        />
      </div>
    </div>
  );
};
