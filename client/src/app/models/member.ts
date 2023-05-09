import { Photo } from './photo';

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    intruduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}

export interface Register {
    username: string;
    knownAs: string;
    gender: string;
    dateOfBirth: string;
    city: string;
    country: string;
    password: string;
    confirmPassword: string;
}