export interface MenuItem {
    name: string
    path: string
}

export const menuItems: MenuItem[] = [
    {
        name: 'Dashboard',
        path: '/',
    },
    {
        name: 'Users',
        path: '/users',
    },
]