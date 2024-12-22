type Link = {
	href: string;
	routeReference: "api" | "doc";
	translations: {
		locale: string;
		label: string;
	}[];
};

const links: Link[] = [
	{
		href: "/",
		routeReference: "doc",
		translations: [{ locale: "en", label: "Home" }],
	},
	{
		href: "/introduction",
		routeReference: "doc",
		translations: [{ locale: "en", label: "Introduction" }],
	},
	{
		href: "/route/api",
		routeReference: "api",
		translations: [{ locale: "en", label: "About API" }],
	},
	{
		href: "/route/squad",
		routeReference: "api",
		translations: [{ locale: "en", label: "Squad" }],
	},
	{
		href: "/route/info",
		routeReference: "api",
		translations: [{ locale: "en", label: "Info" }],
	},
	{
		href: "/route/achievements",
		routeReference: "api",
		translations: [{ locale: "en", label: "Achievements" }],
	},
];

export const apiRoutes: Link[] = links.filter(
	(link) => link.routeReference === "api",
);
export const docRoutes: Link[] = links.filter(
	(link) => link.routeReference === "doc",
);
