import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { FormFieldHandler } from "../../../lib/atoms/Form/FormFieldHandler";
import { FormField } from "../../../lib/hooks/useHookForm";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

type IformData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default function CTAForm() {
  const { t } = useTranslation();

  // const formMutation = useMutation(
  //   (dto: Partial<IformData>) =>
  //     categoryService.prepareData(dto, item && item.id),
  //   {
  //     onSuccess() {
  //       notify({
  //         message: item ? t("Item updated") : t("Item created"),
  //         type: "success",
  //       });

  //       onClose();
  //     },
  //   }
  // );

  // const defaultValues = useMemo(() => {
  //   return {
  //     name: "",
  //   };
  // }, []);

  // * FORM FIELDS

  const formFields: FormField<Partial<IformData>>[][] = [
    // STEP 1
    [
      {
        name: "name",
        placeholder: t("What should I call you?"),
        type: "text",
        label: t("Name"),
        validation: () => yup.string().required(t("Field is required")),
      },
      {
        name: "email",
        placeholder: t("Enter your email address"),
        type: "text",
        label: t("Email"),
        validation: () => yup.string().required(t("Field is required")),
      },
      {
        name: "subject",
        placeholder: t("What shall we talk about?"),
        type: "text",
        label: t("Name"),
        validation: () => yup.string().required(t("Field is required")),
      },
      {
        name: "message",
        placeholder: t("What's on your mind?"),
        type: "textarea",
        label: t("Name"),
        validation: () => yup.string().required(t("Field is required")),
      },
    ],
    // STEP 2
  ];

  // * FORM SERVICE

  const formService = useForm<Partial<IformData>>({
    mode: "onChange",
    resolver: yupResolver(
      yup.object(
        formFields.flat().reduce((acc, field) => {
          return {
            ...acc,
            [field.name]: field.validation(),
          };
        }, {})
      )
    ),
  });

  function onSubmit(dto: Partial<IformData>) {
    // formMutation.mutate(dto);
  }

  // useEffect(() => {
  //   if (item) return formService.reset(item);
  // }, [defaultValues, formService, item]);

  // * HANDLERS
  // -------------

  return (
    <>
      <VStack w={"full"} alignItems="stretch" gap="23px">
        <VStack maxW="full" alignItems={"start"} gap={commonStyle.componentGap}>
          {/* SPLASH IMAGE */}
          <VStack alignItems={"start"}>
            <Text color="white" fontSize={[30, 45]} fontWeight={"700"} mb="-2">
              Lets talk about
            </Text>
            <Text color="gold" fontSize={[30, 45]} fontWeight={"700"}>
              Your exciting project!
            </Text>
          </VStack>
          {/* FORM  */}
          <Box w="full" maxW="500px">
            <FormProvider {...formService}>
              <form onSubmit={formService.handleSubmit(onSubmit)}>
                <VStack
                  gap="24px"
                  width="full"
                  pb="40px"
                  transition={"all 0.3s ease-in-out"}
                >
                  {formFields.map((fields, index) => (
                    <VStack
                      key={index}
                      w="full"
                      alignItems="stretch"
                      spacing="24px"
                    >
                      {fields.map(field => (
                        <FormFieldHandler key={field.name} field={field} />
                      ))}
                    </VStack>
                  ))}
                </VStack>

                {/* BUTTONS */}

                <Button
                  variant={"outline"}
                  textTransform={"capitalize"}
                  fontSize={"18px"}
                  fontWeight={"400"}
                  type={"submit"}
                  width="full"
                  // isLoading={formMutation.isLoading}
                >
                  submit
                </Button>
              </form>
            </FormProvider>
          </Box>
        </VStack>
      </VStack>
    </>
  );
}
