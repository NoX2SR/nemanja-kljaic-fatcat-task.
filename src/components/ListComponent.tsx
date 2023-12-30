import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { Layout } from './Layout.tsx';
import { getUsers } from '../api/data-handler.tsx';
import { Iuser } from '../model/user.tsx';

export const ListComponent = () => {
    const [users, setUsers] = useState<Array<Iuser>>([]);

    useEffect(() => {
        getUsers((users) => setUsers(users)).then(
            () => {}, //Nothing to do. I think...
            () => {}
        );
    }, []);

    return (
        <Layout background="">
            <div className={clsx('flex', 'justify-center', 'items-center')}>
                <div className={clsx('list', 'gap-8', 'w-8/12')}>
                    {users.map((user: Iuser, key) => (
                        <UserItem key={key} user={user} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

const UserItem = ({ user }: { user: Iuser }) => {
    return (
        <div key={user.id} className={clsx('rounded-md', 'p-8')}>
            <div className="my-8">
                <div className={clsx('text-2xl', 'font-bold', 'mb-2')}>
                    {user.name}
                </div>
                <div className={clsx('text-xl')}>ID: {user.id}</div>
                <div className={clsx('text-xl')}>
                    User name: {user.username}
                </div>
                <div className={clsx('text-xl')}>e-mail: {user.email}</div>
                <div className={clsx('text-xl')}>Phone: {user.phone}</div>
            </div>
        </div>
    );
};
