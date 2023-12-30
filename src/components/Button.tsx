import clsx from 'clsx';

import { IbuttonOptions } from '../model/components.tsx';

export const Button = ({ children, onClick, props }: IbuttonOptions) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                props ? { ...props } : props
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
