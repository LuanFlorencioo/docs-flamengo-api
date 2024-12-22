import { SunMoon } from "lucide-react";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function ButtonTheme() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<SunMoon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="center">
				<DropdownMenuLabel>Themes</DropdownMenuLabel>
				<DropdownMenuItem>Dark</DropdownMenuItem>
				<DropdownMenuItem>Light</DropdownMenuItem>
				<DropdownMenuItem>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
