type TitleProps = {
	children?: React.ReactNode;
	variant?: "h1" | "h2";
};

export function Title({ children, variant = "h1" }: TitleProps) {
	switch (variant) {
		case "h1":
			return (
				<>
					<h1 className="mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						{children}
					</h1>

					<span className="w-full h-1 bg-gradient-to-r from-primary via-background to-background rounded-sm animate-pulse" />
				</>
			);

		case "h2":
			return (
				<h2 className="mt-8 mb-2 scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight">
					{children}
				</h2>
			);
	}
}
