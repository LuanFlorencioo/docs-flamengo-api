import { isLocaleSupported } from "@/utils/isLocaleSupported";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !isLocaleSupported(locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../translations/${locale}.json`)).default,
	};
});
