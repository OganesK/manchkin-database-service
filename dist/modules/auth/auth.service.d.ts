import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<string>;
    create(user: any): Promise<{
        user: any;
        token: string;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}
