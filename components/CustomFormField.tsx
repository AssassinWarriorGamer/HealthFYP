'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import Image from "next/image";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the style for PhoneInput
import { FormFieldType } from "@/components/forms/UserForm";

interface CustomProps<T extends FieldValues> {
  control: Control<T>;
  fieldType: FormFieldType;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: UseControllerProps<T>["name"]) => React.ReactNode;
}

const RenderInput = <T extends FieldValues>({
  field,
  props,
}: {
  field: {
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
  };
  props: CustomProps<T>;
}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              type="text"
              placeholder={props.placeholder}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              disabled={props.disabled}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
      case FormFieldType.PHONE_INPUT:
        return (
          <div className="flex rounded-md border-dark-500 bg-dark-400">
            {props.iconSrc && (
              <Image
                src={props.iconSrc}
                height={24}
                width={24}
                alt={props.iconAlt || "icon"}
                className="ml-2"
              />
            )}
            <FormControl>
              <PhoneInput
                defaultCountry="MY"
                international
                withCountryCallingCode
                onChange={field.onBlur}
              />
            </FormControl>
          </div>
      );
    default:
      return null;
  }
};

const CustomFormField = <T extends FieldValues>(props: CustomProps<T>) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className="shade-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;