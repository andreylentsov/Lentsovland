export interface Cat {
    id: number;
    name: string;
    breed: string;
    color: string;
    age: number;
    gender: 'male' | 'female';
    description: string;
    photo: string;
    title?: string;
    character?: string;
}

export interface Kitten {
    id: number;
    name: string;
    breed: string;
    color: string;
    age: number;
    gender: 'male' | 'female';
    description: string;
    photo: string;
    isBooked?: boolean;
    birthDate: string;
    litter: string;  // Название помета
    parents?: {
        father: string;
        mother: string;
    };
}

export type ContactFormData = {
    name: string;
    email: string;
    phone?: string;
    message: string;
};