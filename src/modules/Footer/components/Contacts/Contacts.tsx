import { BrandTelegram, BrandVk, Phone } from "tabler-icons-react";

export const Contacts = () => (
	<div className="flex flex-col gap-[13px]">
		<div className="text-xl">Контакты и обратная связь</div>
		<div className="flex gap-[26px] items-center">
			<div className="flex gap-[9px] text-base items-center">
				{/* <Phone className="size-[17px]" /> <p>+7 (812) 313-01-01</p> */}
			</div>

			<a href="https://t.me" target="_blank" rel="noopener noreferrer">
				<BrandTelegram className="size-[17px] hover:size-[24px]" />
			</a>
			<a href="https://vk.com" target="_blank" rel="noopener noreferrer">
				<BrandVk className="size-[17px] hover:size-[24px]" />
			</a>
		</div>
	</div>
);
