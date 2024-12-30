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
		<main className="w-full min-h-screen py-32 px-8 flex flex-col gap-4 selection:bg-primary">
			<h1 className="mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				{t("Introduction.title")}
			</h1>

			<span className="w-full h-1 bg-gradient-to-r from-primary via-background to-background rounded-sm animate-pulse" />

			<p className="leading-7">{t("Introduction.text_1")}</p>

			<p className="leading-7">{t("Introduction.text_2")}</p>

			<h2 className="mt-8 mb-2 scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight">
				{t("Content.Features.heading")}
			</h2>

			<ul className="ml-6 list-disc [&>li]:mt-2">
				{listUnordered.map((key) => (
					<li key={key} className="leading-7">
						{t(`Content.Features.list_unordered.${key}`)}
					</li>
				))}
			</ul>

			<h2 className="mt-8 mb-2 scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight">
				{t("Content.Main_Features.heading")}
			</h2>

			<p className="leading-7">{t("Content.Main_Features.text_1")}</p>

			<p className="leading-7">{t("Content.Main_Features.text_2")}</p>

			<p className="leading-7">{t("Content.Main_Features.text_3")}</p>

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
		</main>
	);
}
