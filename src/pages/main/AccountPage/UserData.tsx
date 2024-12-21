import { useEffect, useState } from "react";
import { Button, Typography } from "@/shared/ui";
import { Edit } from "tabler-icons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserDataProps {
	setModal: (props: boolean) => void;
	setModalEdit: (props: boolean) => void;
	setModalEditUserData: (props: boolean) => void;
	setModalPartner: (props: boolean) => void;
}

interface User {
	id: number;
	username: string;
	email: string;
	phone?: string;
}

export const UserData = ({
	setModal,
	setModalEdit,
	setModalEditUserData,
	setModalPartner,
}: UserDataProps) => {
	const [user, setUser] = useState<User | null>(null);
	const userId = localStorage.getItem("userId");
	const nav = useNavigate();

	const logout = () => {
		localStorage.removeItem("userId");
		localStorage.removeItem("role"); // Удаляем конкретный элемент по ключу "userId"
		nav("/sign-in"); // Перенаправляем пользователя на страницу входа
	};
	// Получаем данные пользователя по запросу
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/user/${userId}`
				); // Замените на реальный id
				setUser(response.data); // Сохраняем полученные данные в состояние
			} catch (error) {
				console.error("Ошибка при получении данных пользователя:", error);
			}
		};

		fetchUserData();
	}, []);

	if (!user) {
		return <Typography variant="h4">Загрузка...</Typography>; // Показываем сообщение, пока данные не загрузятся
	}

	return (
		<div className="flex flex-col gap-5 items-center">
			<Typography variant="h3">Данные пользователя</Typography>
			<div className="bg-secondary p-4 rounded-[20px] py-[30px] flex flex-col justify-center max-w-[700px] xl:px-[50px] xl:py-[40px]">
				<div className="flex flex-col items-center max-w-[625px] gap-4 md:gap-5">
					{/* <div className="flex flex-row">
						<Typography variant="h3">Данные пользователя</Typography>
						<Edit
							className="bg-white rounded ml-4 cursor-pointer"
							onClick={() => setModalEditUserData(true)}
						/>
					</div> */}

					<div className="w-full text-sm md:text-xl px-3 py-2 bg-white rounded-[6px] mb-1 ">
						<Typography variant="h4" className="pl-2">
							{user.username}
						</Typography>
					</div>

					<div className="w-full text-sm md:text-xl px-3 py-2 bg-white rounded-[6px] mb-1 ">
						<Typography variant="h4" className="pl-2">
							{user.email}
						</Typography>
					</div>

					{user.phone && (
						<div className="w-full text-sm md:text-xl px-3 py-2 bg-white rounded-[6px] mb-1 ">
							<Typography variant="h4" className="pl-2">
								{user.phone}
							</Typography>
						</div>
					)}
				</div>
				{/* <div className="flex flex-wrap gap-2 mt-4 justify-center">
					<Button
						className="inline-block w-full text-white px-4 py-2 rounded-[12px]"
						onClick={() => setModal(true)}
					>
						Отследить заказ
					</Button>
				</div> */}
			</div>

			{localStorage.getItem("role") === "ADMIN" && (
				<button
					className="bg-white border border-brown px-5 py-3 rounded-[10px]"
					onClick={() => nav("/admin")}
				>
					<Typography variant="h4">Перейти на страницу админа</Typography>
				</button>
			)}
			<button
				className="bg-white border border-brown px-5 py-3 rounded-[10px]"
				onClick={() => logout()}
			>
				<Typography variant="h4">Выйти из аккаунта</Typography>
			</button>
		</div>
	);
};
