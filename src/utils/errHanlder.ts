import { FieldErrorsImpl } from "react-hook-form";

export const hasErrorClass = (
  name: string,
  errors: Partial<FieldErrorsImpl<any>>
) => ({
  className: errors[name] && "has-error",
});

export const errorDetail = (
  name: string,
  errors: Partial<FieldErrorsImpl<any>>
): string => {
  if (errors[name]) {
    return `<div className="ant-form-explain text-red text-xs">${errors[name]?.message}</div>`;
  } else {
    return "";
  }
};