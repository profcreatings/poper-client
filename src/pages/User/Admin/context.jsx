import { createContext, useContext } from 'react';

export const AdminContext = createContext({
    // properties are declared for autocompletion
    dateRange: undefined,
    setDateRange: undefined,
    email: undefined,
    setEmail: undefined,
    isOnlySubscribed: undefined,
    setIsOnlySubscribed: undefined,
});

export const useAdminContext = () => useContext(AdminContext);
