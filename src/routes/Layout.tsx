import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => (
    <main>
      <Outlet />
    </main>
);
