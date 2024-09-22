import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactSchema } from "./consts";
import { ContactFormValues } from "./types";
import { ContactUsQueries } from "./enums";
export const useContactUsForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      queryType: ContactUsQueries.Customer,
      message: "",
      name: "",
      email: "",
      mobile: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    // Handle form submission
  };

  return { onSubmit, form };
};
