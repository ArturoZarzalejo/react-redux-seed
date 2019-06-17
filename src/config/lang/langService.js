import { en } from "./en"
import { es } from "./es"

export default function getString(lang, string) {
    switch (lang) {
        case 'en':
            return en[string];
        case 'es':
            return es[string];
        default:
            return '';
    }
}