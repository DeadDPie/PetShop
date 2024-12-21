import { Button } from "@/shared/ui";
import { useGetCategory } from "../hooks/Category/useGetCategory";
import { useGetBrands } from "../hooks/Brand/useGetBrands";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useState, useEffect } from "react";
import { useGetUsers } from "../hooks/User/useGetUsers";

pdfMake.vfs_fonts = pdfFonts.pdfsnames;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const DownloadPDF = () => {
	const { data: brands } = useGetBrands();
	const { data: Category } = useGetCategory();
	const { data: users } = useGetUsers();
	console.log(Category);
	const [currentPage] = useState(1);
	const limit = 50;

	const { data: Products } = useGetProductsQuery({
		params: {
			limit: limit.toString(),
			current: currentPage.toString(),
		},
	});

	// Функция для генерации отчета с задержкой
	const generatePDFReport = async () => {
		// Ждем 2 секунды перед продолжением
		await delay(1000);

		const docDefinition = {
			content: [
				{
					text: "Отчет о данных сайта",
					style: "header",
				},
				{
					table: {
						headerRows: 1,
						widths: ["auto", "*"],
						body: [
							[{ text: "ID" }, { text: "Название категории" }],
							...(Category?.map((category) =>
								category.category_id && category.name
									? [category.category_id, category.name] // Исправлено: используем category.category_id вместо category.id
									: ["Нет данных", "Нет данных"]
							) || [["Нет данных", "Нет данных"]]),
						],
					},
					style: "tableHeader",
				},
				{
					table: {
						headerRows: 1,
						widths: ["auto", "*"],
						body: [
							[{ text: "ID" }, { text: "Название бренда" }],
							...(brands?.map((brand) =>
								brand.brand_id && brand.name
									? [brand.brand_id, brand.name]
									: ["Нет данных", "Нет данных"]
							) || [["Нет данных", "Нет данных"]]),
						],
					},
					style: "tableHeader",
				},
				{
					ul: [
						{
							text: `Общее количество продуктов: ${Products?.rows.length || 0}`,
						},
						{ text: `Общее количество пользователей: ${users?.length}` },
					],
					style: "listItem",
				},
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
					alignment: "center",
				},
				tableHeader: {
					fillColor: "#f0f0f0",
					bold: true,
					alignment: "left",
				},
				listItem: {
					margin: [0, 5, 0, 0],
				},
			},
		};

		const pdfDocGenerator = pdfMake.createPdf(docDefinition);
		pdfDocGenerator.getBuffer((buffer) => {
			const blob = new Blob([buffer], { type: "application/pdf" });
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = "site-data-report.pdf";
			link.click();
		});
	};

	return <Button onClick={generatePDFReport}>Скачать PDF отчет</Button>;
};
