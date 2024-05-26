import { useMutation } from "@tanstack/react-query";

import type { PostRegistrationRequestConfig } from "../requests";
import { postRegistration } from "../requests";

export const usePostRegistrationMutation = (
  settings?: MutationSettings<
    PostRegistrationRequestConfig,
    typeof postRegistration
  >
) =>
  useMutation({
    mutationKey: ["postRegistration"],
    mutationFn: ({ params, config }) =>
      postRegistration({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });

