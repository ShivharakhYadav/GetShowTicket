import { z } from "zod";

import { contactSchema } from "./consts";

export type ContactFormValues = z.infer<typeof contactSchema>;
