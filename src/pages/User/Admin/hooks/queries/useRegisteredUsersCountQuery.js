import { useAdminContext } from '../../context.jsx';
import { useUsersCountQuery } from '../../../../../queries/admin/useUsersCountQuery.js';

export const useRegisteredUsersCountQuery = () => {
    const adminState = useAdminContext();
    const { dateRange } = adminState;

    return useUsersCountQuery({
        params: {
            filters: {
                createdAt: {
                    $gte: dateRange.startDate,
                    $lte: dateRange.endDate,
                },
            },
        },
    });
};
