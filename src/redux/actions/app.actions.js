import { appConstants } from "../../config/constants";

export function changeLanguage(payload) {
    return { type: appConstants.CHANGE_LANGUAGE, payload }
};