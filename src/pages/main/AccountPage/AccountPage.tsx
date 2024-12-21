import { UserData } from "./UserData";
import { PurchaseHystory } from "./PurchaseHistory";
import { Modal } from "@/shared/ui";
import { useState } from "react";
import { TrackOrder } from "./TrackOrder";
import { ChangePassword } from "./ChangePassword";
import { EditUserData } from "./EditUserData";
import { Partner } from "./Partner";
import { ReviewComponent } from "./ReviewComponent";

export const AccountPage = () => {
	const [modal, setModal] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);
	const [modalEditUserData, setModalEditUserData] = useState(false);
	const [modalPartner, setModalPartner] = useState(false);

	return (
		<div className="w-full flex flex-col items-center xl:items-start xl:flex-row gap-12 pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[100px] xl:justify-center mb-[55px]">
			<Modal className={modal ? "w-full" : "hidden"}>
				<TrackOrder setModal={setModal} />
			</Modal>
			<Modal className={modalEdit ? "w-full" : "hidden"}>
				<ChangePassword setModalEdit={setModalEdit} />
			</Modal>
			<Modal className={modalEditUserData ? "w-full" : "hidden"}>
				<EditUserData setModalEditUserData={setModalEditUserData} />
			</Modal>
			<Modal className={modalPartner ? "w-full" : "hidden"}>
				<Partner setModalPartner={setModalPartner} />
			</Modal>

			<UserData
				setModal={setModal}
				setModalEdit={setModalEdit}
				setModalEditUserData={setModalEditUserData}
				setModalPartner={setModalPartner}
			/>
			{/* <PurchaseHystory /> */}
			<ReviewComponent />
		</div>
	);
};
