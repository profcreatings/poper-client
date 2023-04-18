import { startOfDay } from 'date-fns';
import { useUsersCountQuery } from '../../../../../queries/admin/useUsersCountQuery.js';

export const useTodayUsersCountQuery = () =>
    useUsersCountQuery({
        params: {
            filters: {
                createdAt: {
                    $gt: startOfDay(new Date()),
                },
            },
        },
    });
