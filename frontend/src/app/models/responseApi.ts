import { User } from "./user";

export interface responseUsers {
    status: 'OK' | 'KO';
    message: string;
    data: User[];
}