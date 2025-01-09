import { Text } from "../typography/text";

type ListItemProps = {
	children?: React.ReactNode;
};

export function ListUnordered({ children }: ListItemProps) {
	return <ul className="ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function Item({ children }: ListItemProps) {
	return (
		<li>
			<Text>{children}</Text>
		</li>
	);
}
