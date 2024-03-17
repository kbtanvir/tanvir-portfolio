import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormField } from "../../../hooks/useHookForm";

export function TextField({ field }: { field: FormField<any> }) {
  const { t } = useTranslation();
  const formService = useFormContext<FormField<any>>();
  return (
    <Input
      type={field.type}
      name={field.name as string}
      placeholder={t(field.placeholder ?? "")}
      _focus={{
        backgroundColor: "transparent !important",
      }}
      _focusVisible={{
        backgroundColor: "transparent",
      }}
      _focusWithin={{
        backgroundColor: "transparent",
      }}
      backgroundColor={"transparent"}
      defaultValue={formService.watch(field.name as any)}
      onChange={e => {
        formService.setValue(field.name as any, e.target.value);
      }}
    />
  );
}
