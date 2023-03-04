import { Score } from "./score";
import { User } from "./user";

export interface ResponseUsers {
    status: 'OK' | 'KO';
    message: string;
    data: User[];
}

export interface ResponseScores {
    status: 'OK' | 'KO';
    message: string;
    data: Score[];
}