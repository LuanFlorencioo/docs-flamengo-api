import { Languages } from "lucide-react";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function ButtonLanguage() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Languages />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="center">
				<DropdownMenuLabel>Languages</DropdownMenuLabel>

				<DropdownMenuItem>English</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
