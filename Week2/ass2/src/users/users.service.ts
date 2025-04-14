import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: '1', name: 'A', role: 'user', email: 'a@example.com' },
        { id: '2', name: 'B', role: 'admin', email: 'b@admin.com' },
        { id: '3', name: 'C', role: 'user', email: 'c@example.com' },
    ];

    async getUserWithRole(id: string, role: string) {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new NotFoundException('User Not Found');
        // adding delay of 3 sec
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (role === 'admin') {
            return {
                message: 'Admin Access Granted',
                adminData: {
                    dashboard: 'admin/dashboard',
                    permission: ['read', 'write', 'delete']
                }
            };
        }
        else if (role === 'user') {
            return {
                message: 'User Access Granted',
                userData: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            };
        }
        else {
            throw new NotFoundException('Invalid Role');
        }
    }
}

