import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { apiRoutes } from "@/config/apiRoutes";
import { handleAxiosError } from "@/utils/handleAxiosError";

import { RegisterUser, RegisterUserPayload } from "./types";

const { register: registerEndpoint } = apiRoutes;

const registerUser = async (formData: RegisterUserPayload) => {
  try {
    const data = await axios.post<RegisterUser>(registerEndpoint, formData);
    return data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw errorMessage;
  }
};

export const useRegisterUserMutation = () => {
  return useMutation({ mutationFn: registerUser });
};
