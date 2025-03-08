import { Button, Text, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { FormFieldHandler } from "../../../lib/atoms/Form/FormFieldHandler";
import { FormField } from "../../../lib/hooks/useHookForm";
import { notify } from "../../../lib/utils/helper";
import { styles } from "./styles";

type IformData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default function CTAForm() {
  const { t } = useTranslation();

  const formMutation = useMutation((dto: IformData) => sendEmail(dto), {
    onSuccess() {
      notify({
        message: t("Form submitted successfully"),
        type: "success",
      });
    },
    onError() {
      notify({
        message: t("Form submission failed"),
        type: "error",
      });
    },
  });

  // const defaultValues = useMemo(() => {
  //   return {
  //     name: "",
  //   };
  // }, []);

  // * FORM FIELDS

  const formFields: FormField<IformData>[][] = [
    // STEP 1
    [
      {
        name: "name",
        placeholder: t("What should I call you?"),
        type: "text",
        // label: t("Name"),
        validation: () => yup.string().required(t("Field is required")),
      },
      {
        name: "email",
        placeholder: t("Enter your email address"),
        type: "text",
        // label: t("Email"),
        validation: () =>
          yup
            .string()
            .email(t("Invalid email"))
            .required(t("Field is required")),
      },
      {
        name: "subject",
        placeholder: t("What shall we talk about?"),
        type: "text",
        // label: t("Name"),
        validation: () => yup.string().required(t("Field is required")),
      },
      {
        name: "message",
        placeholder: t("What's on your mind?"),
        type: "textarea",
        // label: t("Name"),
        validation: () =>
          yup
            .string()
            .max(500, "Message is too long")
            .required(t("Field is required")),
        max: 500,
      },
    ],
    // STEP 2
  ];

  // * FORM SERVICE

  const formService = useForm<IformData>({
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

  const sendEmail = async (dto: IformData) => {
    const brevoApiKey = process.env.NEXT_PUBLIC_BREEVO_KEY; // Ensure this is set in your environment
    const toEmail = process.env.NEXT_PUBLIC_APP_EMAIL; // Ensure this is set in your environment

    if (!brevoApiKey || !toEmail) {
      throw new Error("Brevo API key or recipient email is missing.");
    }

    const emailData = {
      sender: {
        name: dto.name,
        email: "hello@kbtanvir.dev",
      },
      to: [
        {
          email: "hello@kbtanvir.dev",
          name: "Bashar Tanvir",
        },
      ],
      subject: `Enquiry from Portfolio Website - #${dto.subject}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
          </head>
          <body>
            <h1>Enquiry from Portfolio Website</h1>
            <p>Here are the details of your submission:</p>
            <ul>
              <li>Name: ${dto.name}</li>
              <li>Subject: ${dto.subject}</li>
              <li>Email: ${dto.email}</li>
              <li>Message: ${dto.message}</li>
            </ul>
            <p>Thank you for considering our services.</p>
          </body>
        </html>
      `,
    };

    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        emailData,
        {
          headers: {
            "accept": "application/json",
            "api-key": brevoApiKey,
            "content-type": "application/json",
          },
        }
      );

      console.log("Email sent successfully:", response.data);
      return response.data;
    } catch (error: any) {
      console.error(
        "Error sending email:",
        error.response?.data || error.message
      );
      throw new Error("Failed to send email");
    }
  };
  function onSubmit(dto: IformData) {
    formMutation.mutate(dto);
  }

  // * HANDLERS
  // -------------

  if (formMutation.isSuccess)
    return (
      <ThankYou
        onClick={() => {
          formMutation.reset();
          formService.reset();
        }}
      />
    );

  return (
    <VStack {...styles.formWrapper}>
      {/* FORM  */}
      <VStack alignItems={"start"}>
        <Text {...styles.formTitle} color="white" mb="-2">
          Let`s talk about
        </Text>
        <Text color="gold" {...styles.formTitle}>
          your exciting project!
        </Text>
      </VStack>
      <FormProvider {...formService}>
        <form onSubmit={formService.handleSubmit(onSubmit)}>
          <VStack
            gap="24px"
            width="full"
            pb="40px"
            transition={"all 0.3s ease-in-out"}
          >
            {formFields.map((fields, index) => (
              <VStack key={index} w="full" alignItems="stretch" gap="24px">
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
            isLoading={formMutation.isLoading}
          >
            submit
          </Button>
        </form>
      </FormProvider>
    </VStack>
  );
}

function ThankYou({ onClick }: { onClick: () => void }) {
  return (
    <VStack {...styles.formWrapper}>
      <Text {...styles.formTitle} color="white" mb="-6">
        Awesome!
      </Text>
      <Text color="gold" {...styles.formTitle}>
        I`ll be in touch shortly.
      </Text>
      <Button
        variant={"outline"}
        textTransform={"capitalize"}
        fontSize={"18px"}
        fontWeight={"400"}
        type={"submit"}
        width="full"
        maxW={"300px"}
        onClick={onClick}
      >
        Send another message
      </Button>
    </VStack>
  );
}
