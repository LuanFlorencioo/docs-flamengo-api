import { FooterCard } from "@/components/footer-card";
import { Text } from "@/components/typography/text";
import { Title } from "@/components/typography/title";
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

			<FooterCard
				href="/introduction"
				title={t("Footer.Next_Page.heading")}
				text={t("Footer.Next_Page.text")}
			/>
		</>
	);
}
