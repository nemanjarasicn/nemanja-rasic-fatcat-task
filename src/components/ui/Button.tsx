import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from '@homework-task/models/app.models';

export const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                'mt-5',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
