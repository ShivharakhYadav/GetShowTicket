"use client";

import Image from "next/image";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useContactUsForm } from "./hooks"; // Assuming you have hooks set up similarly
import { ContactUsQueries } from "./enums";

const ContactForm = () => {
  const { form, onSubmit } = useContactUsForm();

  return (
    <div className="flex w-full justify-center py-12">
      {/* Main Container for Form and Image */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        {/* Left Side - Form */}
        <div className="w-full">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch with us by filling out the form below
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                {/* Query Type */}
                <div className="grid gap-2">
                  <Label htmlFor="queryType">Query Type</Label>
                  <FormField
                    control={form.control}
                    name="queryType"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={ContactUsQueries.Customer}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a query type" />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.values(ContactUsQueries).map(
                                  (query) => (
                                    <SelectItem key={query} value={query}>
                                      {query}
                                    </SelectItem>
                                  )
                                )}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Mobile */}
                <div className="grid gap-2">
                  <Label htmlFor="mobile">Mobile No.</Label>
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Mobile Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Message */}
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder="Your Message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden items-center justify-center md:flex">
          <Image
            src="/assets/images/contact-us.jpg"
            alt="Contact Us Banner"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
