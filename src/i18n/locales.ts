export const locales = [
	"en", // English (default locale)
	// "pt", // Portuguese
	// "fr", // French
	// "es", // Spanish
	// "de", // German
	// "it", // Italian
	// "nl", // Dutch
	// "sv", // Swedish
	// "el", // Greek
	// "ru", // Russian
	// "ko", // Korean
	// "ja", // Japanese
] as const;

type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
