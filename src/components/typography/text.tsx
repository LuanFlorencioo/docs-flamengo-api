type TextProps = {
	children?: React.ReactNode;
};

export function Text({ children }: TextProps) {
	return <p className="leading-7">{children}</p>;
}
