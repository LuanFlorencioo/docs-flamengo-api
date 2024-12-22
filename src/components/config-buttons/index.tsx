import { Github } from "lucide-react";
import { ButtonLanguage } from "../button-language";
import { ButtonTheme } from "../button-theme";
import { Button } from "../ui/button";

export function ConfigButtons() {
	return (
		<div className="w-full flex flex-wrap items-center justify-center gap-4">
			<Button variant="outline" asChild>
				<a
					href="https://github.com/LuanFlorencioo/flamengo-api"
					target="_blank"
					rel="noreferrer"
				>
					<Github /> Github
				</a>
			</Button>

			<ButtonLanguage />

			<ButtonTheme />
		</div>
	);
}
