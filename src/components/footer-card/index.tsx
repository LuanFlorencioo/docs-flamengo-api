import { Link } from "@/i18n/routing";
import { SquareArrowUpRight } from "lucide-react";

type FooterCardProps = {
	title: string;
	text: string;
	href: string;
};

export function FooterCard({ href, text, title }: FooterCardProps) {
	return (
		<footer className="w-full mt-8 flex justify-end">
			<Link href={href}>
				<div className="w-full max-w-[400px] p-4 rounded-lg border-2 border-primary flex flex-col gap-2 cursor-pointer opacity-75 transition hover:opacity-100">
					<h2 className="scroll-m-20 border-b pb-4 text-3xl text-primary font-semibold tracking-tight flex items-center justify-between">
						{title} <SquareArrowUpRight size={24} />
					</h2>

					<p className="text-sm text-muted-foreground leading-7">{text}</p>
				</div>
			</Link>
		</footer>
	);
}
