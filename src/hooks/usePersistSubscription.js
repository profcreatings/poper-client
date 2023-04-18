import { useUserQuery } from '../queries/user/useUserQuery.js';
import { LOCAL_STORAGE_KEYS } from '../constants/storage.js';

export const usePersistSubscription = () => {
    useUserQuery({
        onSuccess: (user) => {
            if (user.subscribed) {
                localStorage.setItem(LOCAL_STORAGE_KEYS.subscribed, 'true');
            } else {
                localStorage.removeItem(LOCAL_STORAGE_KEYS.subscribed);
            }
        },
    });
};
