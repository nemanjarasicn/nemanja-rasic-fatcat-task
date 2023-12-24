import React from 'react';
import clsx from 'clsx';
import { LayoutProps } from '@homework-task/models/app.models';

export const Layout = ({ children, background, title }: LayoutProps) => {
    return (
        <section className={clsx('py-20', background)}>
            <div
                className={clsx(
                    'text-2xl',
                    'font-bold',
                    'my-10',
                    'mx-10',
                    'c-white'
                )}
            >
                {title}
                <hr />
            </div>
            {children}
        </section>
    );
};
