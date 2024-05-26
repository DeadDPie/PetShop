import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/shared/ui";
import { usePostRegistrationMutation } from "@/shared/api/hooks/usePostRegisterMutation";

import { Layout } from "../Layout/Layout";
import { Input } from "../Input/Input";

const formSchema = z
  .object({
    name: z.string().min(1, "Данное поле не может быть пустым"),
    email: z
      .string()
      .min(1, "Данное поле не может быть пустым")
      .email("Введите корректную почту"),
    password: z.string().min(1, "Данное поле не может быть пустым"),
    repeatPassword: z.string().min(1, "Данное поле не может быть пустым"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Пароли должны совпадать",
    path: ["repeatPassword"], // This specifies where the error message should appear
  });

type FormFields = z.infer<typeof formSchema>;

export const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });
  const postRegistrationMutation = usePostRegistrationMutation();

  const onSubmit = async (data: FormFields) => {
    const postRegistrationMutationResponse =
      await postRegistrationMutation.mutateAsync({
        params: data,
      });

    console.log(postRegistrationMutationResponse);

    navigate("/");
  };

  return (
    <Layout title="Регистрация">
      <form
        className="flex flex-col gap-4 md:gap-[30px] w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input field="name" error={errors?.name?.message} register={register} />
        <Input
          field="email"
          error={errors?.email?.message}
          register={register}
        />

        <Input
          type="password"
          field="password"
          error={errors?.password?.message}
          register={register}
        />

        <Input
          type="password"
          field="repeatPassword"
          error={errors?.repeatPassword?.message}
          register={register}
        />
        <div className="w-full flex items-center gap-4 xs:justify-between max-w-[491px] flex-col md:flex-row">
          {/*почему то в мобилке запрос не работает */}
          <Button
            type="submit"
            className="w-full xs:w-fit text-base rounded-[6px] md:rounded-[12px] py-[11px] md:px-[19px] md:py-[19px]"
          >
            Зарегистрироваться
          </Button>
          <Button
            className="w-full xs:w-[163px] text-base rounded-[6px] py-[11px] md:rounded-[12px] md:px-[19px] md:py-[19px]"
            onClick={() => navigate("/sign-in")}
          >
            Отмена
          </Button>
        </div>
      </form>
    </Layout>
  );
};
