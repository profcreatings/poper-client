import { Dates } from './Dates/index.jsx';
import { AdminContext } from './context.jsx';
import { useAdminState } from './hooks/useAdminState.js';
import { UsersList } from './UsersList';
import { Header } from './Header/index.jsx';

export function Admin() {
    const adminState = useAdminState();

    return (
        <AdminContext.Provider value={adminState}>
            <section style={{ fontSize: 24 }}>
                <Header />

                <br />
                <br />
                <br />

                <Dates />
                <br />
                <br />
                <UsersList />
            </section>
        </AdminContext.Provider>
    );
}
