import NotFoundError from "../errors/NotFoundError.js";
import * as QuotationsRepository from "../repositories/QuotationsRepository";

export async function get(id) {
    const quotation = await QuotationsRepository.get(id);
    if (quotation) {
        return quotation;
    }
    throw new NotFoundError("Quotation not found");
}

export async function getQuotationOfTheDay() {
    const quotations = await QuotationsRepository.getAll();
    const today = Math.floor(new Date().valueOf() / (1000 * 60 * 60 * 24));
    const todaysId = today % quotations.length;
    return quotations[todaysId];
}

export async function addToDatabase (text, attribution) {
    await QuotationsRepository.addToDatabase(text, attribution);
}
