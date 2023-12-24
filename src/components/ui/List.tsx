import React from 'react';
import clsx from 'clsx';
import { ListItem } from '@homework-task/models/app.models';
import { RingLoader } from 'react-spinners';

// fetching data
import { useQuery } from 'react-query';
import axios from 'axios';

const retrieveItems = async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
};

export const List = () => {
    const {
        data: items,
        error,
        isLoading,
    } = useQuery('listData', retrieveItems);

    if (isLoading) {
        // Render loading spinner or circular component
        return (
            <div className="flex justify-center items-center">
                <RingLoader color="#36D7B7" loading={isLoading} size={150} />
            </div>
        );
    }

    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div className={clsx('grid', 'grid-cols-3', 'gap-5', 'w-8/12')}>
                {items.map(({ id, name, username, email, phone }: ListItem) => (
                    <div
                        key={id}
                        className={clsx('rounded-md', 'p-8', 'bg-white')}
                    >
                        <div className="my-8">
                            <div
                                className={clsx(
                                    'text-2xl',
                                    'font-bold',
                                    'mb-2'
                                )}
                            >
                                {name} (id:{id})
                            </div>
                            <div className={clsx('text-xl', 'text-ellipsis')}>
                                {username}
                            </div>
                            <div className={clsx('text-xl', 'text-ellipsis')}>
                                {email}
                            </div>
                            <div className={clsx('text-xl', 'text-ellipsis')}>
                                {phone}
                            </div>
                        </div>
                        {/*<Button onClick={onClick}>{buttonText}</Button>*/}
                    </div>
                ))}
            </div>
        </div>
    );
};
