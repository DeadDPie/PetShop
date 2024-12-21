// import { Button, Modal } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button, Typography } from "@/shared/ui";

import { Layout } from "../Layout/Layout";
import { Input } from "../Input/Input";
import { usePostLoginMutation } from "@/pages/admin/usePostLoginMutation";
//import { usePostLoginMutation } from "@/shared/api/hooks/usePostLoginMutation";

const formSchema = z.object({
	email: z
		.string()
		.min(1, "Данное поле не может быть пустым")
		.email("Введите корректную почту"),
	password: z.string().min(1, "Данное поле не может быть пустым"),
});

type FormFields = z.infer<typeof formSchema>;

export const SignIn = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(formSchema),
	});
	const postLoginMutation = usePostLoginMutation();

	const onSubmit = async (data: FormFields) => {
		console.log(data);
		const postLoginMutationResponse = await postLoginMutation.mutateAsync({
			email: data.email,
			password: data.password,
		});

		console.log(postLoginMutationResponse);

		// Предположим, что ответ содержит поле `id`
		const userId = postLoginMutationResponse.user.user_id;

		// Сохраняем `id` пользователя в localStorage
		if (userId) {
			localStorage.setItem("userId", userId.toString()); // Сохраняем как строку
		}

		const role = postLoginMutationResponse.user.role;

		// Сохраняем `id` пользователя в localStorage
		if (role) {
			localStorage.setItem("role", role.toString()); // Сохраняем как строку
		}

		navigate("/animal");
	};

	return (
		<Layout title="Авторизация">
			<form
				className="flex flex-col gap-4 md:gap-[35px] w-full items-center xl:mt-12"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					field="email"
					error={errors?.email?.message}
					register={register}
					placeholder="Адрес электронной почты"
				/>

				<Input
					type="password"
					field="password"
					error={errors?.password?.message}
					register={register}
					placeholder="Пароль"
				/>

				<div className="w-full flex items-center gap-4 xs:justify-between max-w-[491px] flex-col">
					{/*почему то в мобилке запрос не работает */}
					<Button
						type="submit"
						className="w-full xs:w-fit text-base py-[11px] md:rounded-[12px]  md:px-[5px] md:py-[19px] md:text-xl"
					>
						Войти в аккаунт
					</Button>
					<div className=" flex items-center gap-4 xs:justify-between flex-col md:flex-row lg:gap-10 xl:text-xl">
						{/* <button>
							<Typography variant="h4" className=" xl:text-xl">
								Восстановить пароль
							</Typography>
						</button>
						<button onClick={() => navigate("/sign-up")}>
							<Typography variant="h4" className=" xl:text-xl">
								Зарегистрироваться
							</Typography>
						</button> */}
					</div>
				</div>
			</form>
		</Layout>
	);
};
