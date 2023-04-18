import { Fragment } from 'react';
import { useUsersListQuery } from '../hooks/queries/useUsersListQuery.js';
import { formatDate } from '../../../../utils/formatDate.js';
import { useSubscribedUsersCountQuery } from '../hooks/queries/useSubscribedUsersCountQuery.js';
import { useAdminContext } from '../context.jsx';
import { useRegisteredUsersCountQuery } from '../hooks/queries/useRegisteredUsersCountQuery.js';

// TODO: list pagination, virtualization, sorting
export function UsersList() {
    const {
        dateRange,
        email,
        setEmail,
        isOnlySubscribed,
        setIsOnlySubscribed,
    } = useAdminContext();
    const { data: users } = useUsersListQuery();
    const { data: subscribedUsersCount } = useSubscribedUsersCountQuery();
    const { data: registeredUsersCount } = useRegisteredUsersCountQuery();

    // const words = useWords(users);

    if (!users) {
        return null;
    }

    return (
        <div>
            <div>
                <div>
                    В период с {formatDate(dateRange.startDate, 'd MMMM')} по{' '}
                    {formatDate(dateRange.endDate, 'd MMMM')}
                </div>
                <br />
                <div style={{ fontSize: 20 }}>
                    <b>{registeredUsersCount} пользователь </b> зарегался
                    <br />
                    <b>{subscribedUsersCount} пользователь </b> купило доступ к
                    спешлу
                </div>
            </div>
            <br />
            <br />
            <input
                type="text"
                name="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label style={{ fontSize: 16 }}>
                Только купившие{' '}
                <input
                    type="checkbox"
                    name="onlySubscribed"
                    value={isOnlySubscribed}
                    onChange={(e) => setIsOnlySubscribed(e.target.checked)}
                />
            </label>
            <br />
            <br />

            <div
                style={{
                    display: 'inline-grid',
                    gridTemplateColumns: 'repeat(2, auto)',
                    alignItems: 'center',
                    gridGap: '50px',
                }}
            >
                {users?.map((user) => (
                    <Fragment key={user.id}>
                        <div>{user.email}</div>
                        <div>
                            {user.subscribed ? (
                                <span style={{ color: 'SteelBlue' }}>
                                    купил <br />
                                    <span style={{ fontSize: 16 }}>
                                        {formatDate(
                                            new Date(user.subscribedAt),
                                            'd MMMM в HH:mm',
                                        )}
                                    </span>
                                </span>
                            ) : (
                                <div>не купил</div>
                            )}
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
