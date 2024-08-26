

export const monthsConverter = ( months: number): string => {
   const stringMonths = months % 12 === 0
        ? `${months / 12} ${months / 12 > 1 ? 'Years' : 'Year'}`
        : `${months} ${months > 1 ? 'Months' : 'Month'}`
    return stringMonths
}

