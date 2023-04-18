import { Navigate, Outlet, useMatch } from 'react-router-dom';

import { useUserQuery } from '../../../queries/user/useUserQuery.js';
import { ROUTES } from '../../../constants/router.js';
import { Preloader } from '../../ui-kit/Preloader';

export function AuthorizedContent() {
    const { isFetching, isLoading, isError, isInitialLoading } = useUserQuery();
    const isUnauthorized = isLoading && !isFetching;
    const isBuy = useMatch(ROUTES.buy);

    if (isInitialLoading) {
        return <Preloader />;
    }

    if (isUnauthorized || isError) {
        return <Navigate to={`${ROUTES.login}${isBuy ? '?buy' : ''}`} />;
    }

    return <Outlet />;
}
