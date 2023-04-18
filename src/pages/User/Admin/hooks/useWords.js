// TODO: improve grammatical cases system
// https://www.youtube.com/watch?v=9xMmRmXKwUk&t=21s&ab_channel=404fest1
export const useWords = (users) => {
    if (!users) {
        return {};
    }

    return {
        users: (() => {
            const lastTwoDigits = String(users.length).slice(-2);
            const lastDigit = lastTwoDigits.slice(-1);

            if (lastDigit === '1' && lastTwoDigits !== '11') {
                return 'пользователь';
            }

            if (
                ['2', '3', '4'].includes(lastDigit) &&
                !['12', '13', '14'].includes(lastTwoDigits)
            ) {
                return 'пользователя';
            }

            return 'пользователей';
        })(),
        buy: (() => {
            const lastTwoDigits = String(users.length).slice(-2);
            const lastDigit = lastTwoDigits.slice(-1);

            if (lastDigit === '1' && lastTwoDigits !== '11') {
                return 'купил';
            } else {
                return 'купило';
            }
        })(),
    };
};
