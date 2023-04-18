import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

// Persist search-params between auth routes
export const usePersistSearchParams = () => {
    const { pathname } = useLocation();
    const search = useRef(location.search).current;
    const navigate = useNavigate();

    useEffect(() => {
        navigate(pathname + search, {
            replace: true,
        });
    }, [pathname, search, navigate]);
};
