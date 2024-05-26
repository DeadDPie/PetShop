import { api } from "@/shared/api/instance";

export type PostLoginRequestConfig = RequestConfig<LoginRequestDto>;

export const postLogin = async ({ params, config }: PostLoginRequestConfig) =>
  api.post("auth/login", params, config);

export type PostRegistrationRequestConfig = RequestConfig<UserRegistrationDto>;

export const postRegistration = async ({
  params,
  config,
}: PostRegistrationRequestConfig) =>
  api.post<BaseResponse>("auth/registration", params, config);
