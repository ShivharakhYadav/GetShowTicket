import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect, useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";
import appRoutes from "@/config/appRoutes";

import { LoginFormSchema } from "./consts";
import { signIn } from "next-auth/react";

export const useLoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (data: z.infer<typeof LoginFormSchema>) => {
      try {
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          callbackUrl: appRoutes.home,
          redirect: false,
        });
        if (res?.error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: res.error,
          });
        } else {
          toast({
            description: "Loggedin Successfully.",
          });
          router.push(appRoutes.home);
        }
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem with your request.",
        });
      }
    },
    [router]
  );

  return { onSubmit, form };
};
