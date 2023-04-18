import { useTodayUsersCountQuery } from '../hooks/queries/useTodayUsersCountQuery.js';

export function Header() {
    const { data: todayUsersCount } = useTodayUsersCountQuery();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <h1 style={{ fontWeight: 400, fontSize: 28 }}>
                Это твой личный кабинет, <b>Даня</b>
            </h1>
            <div style={{ fontSize: 18 }}>
                {/* TODO: grammatical case */}
                <b>{todayUsersCount} пользователей</b> зарегистрировалось
                сегодня
            </div>
        </div>
    );
}
