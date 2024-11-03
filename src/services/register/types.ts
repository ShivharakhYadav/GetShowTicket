import { USER_TYPE } from "./enums";

export type RegisterUserPayload = {
  username: string;
  email: string;
  password: string;
  user_type: USER_TYPE;
};

export interface RegisterUser extends RegisterUserPayload {
  _id: string;
}
