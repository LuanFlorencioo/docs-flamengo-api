"use client";

import { docRoutes } from "@/data/links";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function DocMenuNav() {
	const pathname = usePathname();
	const currentLocale = pathname.slice(1, 3);
	const links = docRoutes.map((link) => {
		const href = link.href;
		const label = link.translations.find(
			({ locale }) => locale === currentLocale,
		)?.label;

		return { href, label };
	});

	return (
		<menu className="flex flex-col gap-2">
			{links.map(({ href, label }) => (
				<li key={label}>
					<Button variant="link" size="lg" asChild className="font-bold">
						<Link href={href}>{label}</Link>
					</Button>
				</li>
			))}
		</menu>
	);
}
