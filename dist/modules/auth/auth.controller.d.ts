import { UserDTO } from '../users/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<string>;
    signUp(user: UserDTO): Promise<{
        user: {
            [x: string]: any;
        };
        token: string;
    }>;
}
