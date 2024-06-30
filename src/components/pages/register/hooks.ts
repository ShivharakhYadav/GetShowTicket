import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/components/ui/use-toast";

import { SignupFormSchema } from "./consts";

export const useSignupForm = () => {
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = useCallback(async (data: z.infer<typeof SignupFormSchema>) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem with your request.",
        });
      } else {
        toast({
          description: "Registered Successfully.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem with your request.",
      });
    }
  }, []);

  return { onSubmit, form };
};
