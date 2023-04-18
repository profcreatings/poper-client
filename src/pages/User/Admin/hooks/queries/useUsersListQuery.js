import { useUsersParams } from '../useUsersParams.js';
import { useUsersQuery } from '../../../../../queries/admin/useUsersQuery.js';

export const useUsersListQuery = () => {
    const usersParams = useUsersParams();

    return useUsersQuery({
        params: usersParams,
    });
};
