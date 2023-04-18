import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useUserQuery } from '../../../queries/user/useUserQuery.js';
import { Preloader } from '../../ui-kit/Preloader/index.jsx';
import { useLogoutMutation } from '../../../queries/user/useLogoutMutation.js';

export function UnauthorizedContent() {
    const { isSuccess, isInitialLoading, isError } = useUserQuery();
    const { mutate: logout } = useLogoutMutation();

    useEffect(() => {
        if (isError) {
            logout();
        }
    }, [isError, logout]);

    if (isInitialLoading) {
        return <Preloader />;
    }

    if (isSuccess) return <Navigate to="/" replace />;

    return <Outlet />;
}
