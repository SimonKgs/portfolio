

export const monthsConverter = ( months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = '';

    if (years > 0) {
        result += `${years} ${years > 1 ? 'Years' : 'Year'}`;
    }

    if (remainingMonths > 0) {
        if (result) {
            result += ' and ';
        }
        result += `${remainingMonths} ${remainingMonths > 1 ? 'Months' : 'Month'}`;
    }

    return result;
}

