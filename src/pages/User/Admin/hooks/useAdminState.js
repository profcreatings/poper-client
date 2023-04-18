import { useMemo, useState } from 'react';

export const useAdminState = () => {
    const [dateRange, setDateRange] = useState({
        startDate: new Date('01/01/2023'),
        endDate: new Date(),
    });
    const [email, setEmail] = useState('');
    const [isOnlySubscribed, setIsOnlySubscribed] = useState(false);

    return useMemo(
        () => ({
            dateRange,
            setDateRange,
            email,
            setEmail,
            isOnlySubscribed,
            setIsOnlySubscribed,
        }),
        [dateRange, email, isOnlySubscribed],
    );
};
