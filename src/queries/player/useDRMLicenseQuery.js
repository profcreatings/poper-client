import { useQuery } from '@tanstack/react-query';

import { API } from '../../api/index.js';

// Persisted in localStorage
export const useDRMLicenseQuery = (options) =>
    useQuery({
        ...options,
        queryKey: ['license'],
        retry: 2,
        refetchOnWindowFocus: false,
        queryFn: () => API.gumlet.get('drm'),
        // persist for 9 minutes:
        staleTime: 9 * 60 * 1000,
        cacheTime: 9 * 60 * 1000,
    });
