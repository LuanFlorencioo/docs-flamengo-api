import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="w-full h-screen flex flex-col justify-center items-center gap-4">
			<h1 className="font-sans font-bold text-3xl">Hello World</h1>

			<p className="w-full max-w-[500px] font-mono font-normal text-base text-justify">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam
				totam neque quibusdam dolore, repudiandae, vitae distinctio doloribus
				voluptates minus doloremque ea laborum omnis, dolores ipsam nesciunt
				assumenda animi quo inventore quae!
			</p>

			<div className="w-full flex flex-wrap justify-center items-center gap-4">
				<Button className="font-mono">Get Started</Button>

				<p>Or</p>

				<Button variant="outline" className="font-mono">
					Documentation
				</Button>
			</div>
		</main>
	);
}
