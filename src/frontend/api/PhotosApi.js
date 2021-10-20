import { get } from "./Api.js";

const baseUrl = "/photos";

export async function getQuotationOfTheDay() {
    return await get(baseUrl);
}
