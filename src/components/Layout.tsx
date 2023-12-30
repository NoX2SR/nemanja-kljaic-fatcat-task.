import clsx from 'clsx';

import { IlayoutOptions } from '../model/components.tsx';

export const Layout = ({ children, background, props }: IlayoutOptions) => {
    return (
        <section
            className={clsx('py-20', background, props ? { ...props } : [])}
        >
            {children}
        </section>
    );
};
