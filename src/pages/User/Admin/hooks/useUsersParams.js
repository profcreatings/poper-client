import { useMemo } from 'react';
import { useAdminContext } from '../context.jsx';

export const useUsersParams = () => {
    const adminState = useAdminContext();
    const { dateRange, email, isOnlySubscribed } = adminState;

    return useMemo(
        () => ({
            filters: {
                email: {
                    $containsi: email,
                },
                subscribed: {
                    $eq: isOnlySubscribed ? true : undefined,
                },

                $or: [
                    {
                        createdAt: {
                            $gte: dateRange.startDate,
                            $lte: dateRange.endDate,
                        },
                    },
                    {
                        subscribedAt: {
                            $gte: dateRange.startDate,
                            $lte: dateRange.endDate,
                        },
                    },
                ],
            },
            fields: ['email', 'subscribed', 'subscribedAt'],
        }),
        [dateRange.endDate, dateRange.startDate, email, isOnlySubscribed],
    );
};
