"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type BaseUrlCopyProps = {
	url: string;
};

export function BaseUrlCopy({ url }: BaseUrlCopyProps) {
	const [wasCopied, setWasCopied] = useState(false);

	const baseUrlCopy = () => {
		if (!wasCopied) {
			setWasCopied(true);
			navigator.clipboard.writeText(url);
			setTimeout(() => {
				setWasCopied(false);
			}, 3000);
		}
	};

	return (
		<div className="w-full max-w-[400px] min-h-20 px-8 py-4 rounded bg-background border relative">
			<pre className="overflow-x-auto">
				<code className="text-xs sm:text-sm">{url}</code>
			</pre>

			<Button
				size="icon"
				variant="outline"
				onClick={baseUrlCopy}
				className="absolute -bottom-2 -right-2 flex items-center gap-1"
			>
				{wasCopied ? <Check size={14} /> : <Copy size={16} />}
			</Button>
		</div>
	);
}
