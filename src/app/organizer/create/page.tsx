/* eslint-disable comma-dangle */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DatePicker from "react-datepicker";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CreateEventSchema } from "./consts";
import "react-datepicker/dist/react-datepicker.css";

type formType = z.infer<typeof CreateEventSchema>;

const CreateEvent = () => {
  const form = useForm<formType>({
    resolver: zodResolver(CreateEventSchema),
    defaultValues: {
      event_name: "",
      start_date: undefined,
      end_date: undefined,
      license_document: "",
      hall_permit_document: "",
    },
  });

  const handleAddEvent = (data: formType) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto max-w-screen-md p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleAddEvent)}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <Label htmlFor="event-name">Event Name</Label>
                <FormField
                  control={form.control}
                  name="event_name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Event Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <Label htmlFor="start-date">Start Date</Label>
                <FormField
                  control={form.control}
                  name="start_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePicker
                          selected={field.value}
                          onChange={field.onChange}
                          placeholderText="Start Date"
                          className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="end-date">End Date</Label>
                <FormField
                  control={form.control}
                  name="end_date"
                  render={({ field }) => (
                    <FormItem className="fe">
                      <FormControl>
                        <DatePicker
                          selected={field.value}
                          onChange={field.onChange}
                          placeholderText="End Date"
                          className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <Label htmlFor="license_document">License</Label>
                <FormField
                  control={form.control}
                  name="license_document"
                  render={({ field }) => {
                    // render={({ field: { onChange, ...restFields } }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="file"
                            // onChange={(e) =>
                            //   e.target.files && onChange(e.target.files[0])
                            // }
                            // {...restFields}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="hall_permit_document">Hall Permit</Label>
                <FormField
                  control={form.control}
                  name="hall_permit_document"
                  render={({ field }) => {
                    // render={({ field: { onChange, ...restFields } }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="file"
                            // onChange={(e) =>
                            //   e.target.files && onChange(e.target.files[0])
                            // }
                            // {...restFields}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateEvent;
