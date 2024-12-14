import { locales } from "@/i18n/locales";

export function isLocaleSupported(locale: string): boolean {
	const isSupported = locales.some(
		(localeSupported) => localeSupported === locale,
	);

	return isSupported;
}
