import { Text } from "@/components/typography/text";
import { Title } from "@/components/typography/title";
import { Link } from "@/i18n/routing";
import { SquareArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Root() {
	const t = useTranslations("Home");
	const listUnordered = [
		"history",
		"information",
		"current_squad",
		"achievements",
	] as const;

	return (
		<>
			<Title>{t("Introduction.title")}</Title>

			<Text>{t("Introduction.text_1")}</Text>

			<Text>{t("Introduction.text_2")}</Text>

			<Title variant="h2">{t("Content.Features.heading")}</Title>

			<ul className="ml-6 list-disc [&>li]:mt-2">
				{listUnordered.map((key) => (
					<li key={key}>
						<Text>{t(`Content.Features.list_unordered.${key}`)}</Text>
					</li>
				))}
			</ul>

			<Title variant="h2">{t("Content.Main_Features.heading")}</Title>

			<Text>{t("Content.Main_Features.text_1")}</Text>

			<Text>{t("Content.Main_Features.text_2")}</Text>

			<Text>{t("Content.Main_Features.text_3")}</Text>

			<footer className="w-full mt-8 flex justify-end">
				<Link href="/introduction">
					<div className="w-full max-w-[400px] p-4 rounded-lg border-2 border-primary flex flex-col gap-2 cursor-pointer opacity-75 transition hover:opacity-100">
						<h2 className="scroll-m-20 border-b pb-4 text-3xl text-primary font-semibold tracking-tight flex items-center justify-between">
							{t("Footer.Next_Page.heading")} <SquareArrowUpRight size={24} />
						</h2>

						<p className="text-sm text-muted-foreground leading-7">
							{t("Footer.Next_Page.text")}
						</p>
					</div>
				</Link>
			</footer>
		</>
	);
}
