import { BaseUrlCopy } from "@/components/base-url-copy";
import { FooterCard } from "@/components/footer-card";
import { Item, ListUnordered } from "@/components/list_unordered";
import { Text } from "@/components/typography/text";
import { Title } from "@/components/typography/title";
import { apiRoutes } from "@/data/links";
import { useTranslations } from "next-intl";

export default function IntroductionPage() {
	const t = useTranslations("Introduction");
	const baseURL = "https://lf-flamengo-api.vercel.app";
	const nextPage =
		apiRoutes.find((route) =>
			route.translations.find(
				(translation) =>
					translation.locale === "en" && translation.label === "About API",
			),
		)?.href ?? "foo";
	const itemsList = ["item_1", "item_2", "item_3"];

	return (
		<>
			<Title>{t("Introduction.title")}</Title>

			<Text>{t("Introduction.text")}</Text>

			<Title variant="h2">{t("Content.Overview.title")}</Title>

			<ListUnordered>
				{itemsList.map((item) => (
					<Item key={item}>{t(`Content.Overview.list_unordered.${item}`)}</Item>
				))}
			</ListUnordered>

			<Title variant="h2">{t("Content.Base_URL.title")}</Title>

			<BaseUrlCopy url={baseURL} />

			<Text>{t("Content.Base_URL.text")}</Text>

			<Title variant="h2">{t("Content.Integration.title")}</Title>

			<Text>{t("Content.Integration.text")}</Text>

			<ListUnordered>
				{itemsList.map((item) => (
					<Item key={item}>
						{t(`Content.Integration.list_unordered.${item}`)}
					</Item>
				))}
			</ListUnordered>

			<FooterCard
				href={nextPage}
				title={t("Footer.title")}
				text={t("Footer.text")}
			/>
		</>
	);
}
