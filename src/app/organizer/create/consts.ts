import { z } from "zod";

export const CreateEventSchema = z.object({
  event_name: z.string().min(1, {
    message: "*Name is required",
  }),

  start_date: z.date({ required_error: "*Start Date is required" }),
  end_date: z.date({
    required_error: "*End Date is required",
  }),
  license_document: z.string({
    required_error: "*License Document is required",
  }),

  hall_permit_document: z.string({
    required_error: "*Hall Permit Document is required",
  }),
});
