import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    nickName: string;
    email: string;
    password: string;
    dataValues: {
        [x: string]: any;
        password: any;
    };
}
