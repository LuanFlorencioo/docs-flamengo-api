import { ApiMenuNav } from "../api-menu-nav";
import { ConfigButtons } from "../config-buttons";
import { DocMenuNav } from "../doc-menu-nav";
import { Separator } from "../ui/separator";

export function Aside() {
	return (
		<aside className="hidden md:block w-full max-w-[250px] h-screen pt-16 border-r sticky top-0 left-0">
			<nav className="py-16 flex flex-col gap-8">
				<DocMenuNav />

				<Separator />

				<div className="pl-4 flex flex-col gap-4">
					<p className="opacity-50">Rotas</p>

					<ApiMenuNav />
				</div>

				<Separator />
			</nav>

			<ConfigButtons />
		</aside>
	);
}
