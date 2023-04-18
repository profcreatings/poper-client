import { useAdminContext } from '../../context.jsx';
import { useUsersCountQuery } from '../../../../../queries/admin/useUsersCountQuery.js';

export const useSubscribedUsersCountQuery = () => {
    const adminState = useAdminContext();
    const { dateRange } = adminState;

    return useUsersCountQuery({
        params: {
            filters: {
                subscribedAt: {
                    $gte: dateRange.startDate,
                    $lte: dateRange.endDate,
                },
            },
        },
    });
};
