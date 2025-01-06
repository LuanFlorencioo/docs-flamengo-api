type MainProps = {
	children?: React.ReactNode;
};

export function Main({ children }: MainProps) {
	return (
		<main className="w-full min-h-screen py-32 px-8 flex flex-col gap-4 selection:bg-primary">
			{children}
		</main>
	);
}
