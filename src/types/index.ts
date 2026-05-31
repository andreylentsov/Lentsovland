export interface Cat {
    id: number;
    name: string;
    breed: string;
    color: string;
    age: number;
    description: string;
    photo: string;
}

export interface Kitten extends Cat {
    price: number;
    isBooked?: boolean;
    birthDate: string;
    gender: 'male' | 'female';  // Добавляем пол
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