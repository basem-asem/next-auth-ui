import cardValidator from "card-validator";

export const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const formatCardNumber = (cardNumber: string): string => {
    // Remove non-numeric characters
    const digitsOnly = cardNumber.replace(/\D/g, "");

    // Detect the card type using card-validator
    const validation = cardValidator.number(digitsOnly);
    const cardType = validation.card?.type;

    // Define formatting rules based on card type
    let format: number[] = [4, 4, 4, 4]; // Default format (Visa, MasterCard, Discover)

    if (cardType === "american-express") {
        format = [4, 6, 5]; // AMEX format
    } else if (cardType === "diners-club") {
        format = [4, 6, 4]; // Diners Club format
    } else if (cardType === "unionpay" || cardType === "maestro") {
        format = [4, 4, 4, 4, 3]; // Variable-length cards
    }

    let formatted = "";
    let index = 0;

    for (const blockLength of format) {
        if (index >= digitsOnly.length) break;
        formatted += digitsOnly.substring(index, index + blockLength) + " ";
        index += blockLength;
    }

    console.log(formatted.trim())

    return formatted.trim();
};

export const unformatCardInfo = (formattedNumber: string): string => {
    return formattedNumber.replace(/\D/g, ""); // Remove all non-digit characters
};

export const formatCVC = (cvc: string): string => {
    const digitsOnly = cvc.replace(/\D/g, "");

    return digitsOnly.substring(0, 4);
};

export const formatExpiryDate = (expiryDate: string): string => {
    // Remove all non-digit characters
    const digitsOnly = expiryDate.replace(/\D/g, "");

    // Add a slash after the first 2 digits
    if (digitsOnly.length <= 2) {
        return digitsOnly;
    }
    const month = digitsOnly.substring(0, 2);
    const year = digitsOnly.substring(2, 4);
    return `${month}/${year}`;
};