'use client'

import {Nav, NavLink} from '@/components/Nav';
import React from 'react';

function AdminLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Nav>
                <NavLink href='/'>Dashboard</NavLink>
                <NavLink href='/admin/products'>Products</NavLink>
                <NavLink href='/admin/users'>Customers</NavLink>
                <NavLink href='/admin/sales'>Sales</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
            
        </>
    );
}

export default AdminLayout;