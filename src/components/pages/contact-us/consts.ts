import { z } from "zod";

import { ContactUsQueries } from "./enums";

export const contactSchema = z.object({
  queryType: z.enum(
    Object.values(ContactUsQueries) as [ContactUsQueries, ...ContactUsQueries[]]
  ),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});
