export const getCaseByNumber = (number: number, word: string) => {
  const lastDigit = number % 10;
  if (lastDigit === 1) {
    return `${number} ${word}`;
  } else if ([2, 3, 4].includes(lastDigit)) {
    return `${number} ${word}a`;
  } else {
    return `${number} ${word}ов`;
  }
};

// 1 сезон
// 2-4 сезона
// 5-20 сезонов
// 21 сезон
// 22 сезона
