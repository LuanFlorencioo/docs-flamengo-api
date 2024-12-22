import { Menu } from "lucide-react";
import { ApiMenuNav } from "../api-menu-nav";
import { ConfigButtons } from "../config-buttons";
import { DocMenuNav } from "../doc-menu-nav";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

export function Header() {
	return (
		<header className="w-full h-16 px-4 border-b fixed top-0 left-0 backdrop-blur-3xl z-20">
			<div className="w-full max-w-[1200px] h-full mx-auto flex items-center gap-8">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="md:hidden">
							<Menu />
						</Button>
					</SheetTrigger>

					<SheetContent side="left">
						<SheetHeader>
							<SheetTitle>Tópicos</SheetTitle>

							<SheetDescription />
						</SheetHeader>

						<nav className="pt-16 pb-8 flex flex-col gap-8">
							<DocMenuNav />

							<Separator />

							<div className="flex flex-col gap-4">
								<p className="opacity-50">Rotas</p>

								<ApiMenuNav />
							</div>

							<Separator />
						</nav>

						<SheetFooter>
							<ConfigButtons />
						</SheetFooter>
					</SheetContent>
				</Sheet>

				<div className="flex items-center gap-2">
					<p className="font-bold text-2xl text-primary">FlamengoAPI</p>

					<Badge variant="secondary" className="font-mono">
						Docs
					</Badge>
				</div>
			</div>
		</header>
	);
}
