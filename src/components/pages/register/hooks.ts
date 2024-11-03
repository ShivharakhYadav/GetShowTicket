import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { toast } from "@/components/ui/use-toast";
import { useRegisterUserMutation } from "@/services/register";
import { USER_TYPE } from "@/services/register/enums";
import { RegisterUserPayload } from "@/services/register/types";
import appRoutes from "@/config/appRoutes";

import { SignupFormSchema } from "./consts";

export const useSignupForm = () => {
  const { mutateAsync: register } = useRegisterUserMutation();

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });
  const router = useRouter();

  const onSubmit = useCallback(
    async (data: Omit<RegisterUserPayload, "user_type">) => {
      try {
        await register({
          ...data,
          user_type: USER_TYPE.EndUser,
        });
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          callbackUrl: appRoutes.home,
        });
        if (res?.error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: res.error,
          });
        } else {
          toast({
            description: "Registered Successfully.",
          });
          router.push(appRoutes.home);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error as string,
        });
      }
    },
    [register, router]
  );

  return { onSubmit, form };
};
