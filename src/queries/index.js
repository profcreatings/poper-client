import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export const queryClient = new QueryClient();

const localStoragePersister = createSyncStoragePersister({
    storage: localStorage,
});

persistQueryClient({
    queryClient,
    persister: localStoragePersister,
    dehydrateOptions: {
        shouldDehydrateQuery: ({ queryKey }) => queryKey.includes('license'),
    },
});
