export interface Cat {
    id: number;
    name: string;
    breed: string;
    color: string;
    age: number;
    gender: 'male' | 'female';  // Добавляем пол
    description: string;
    photo: string;
    title?: string;              // Титулы/награды
    character?: string;          // Характер
}

export interface Kitten extends Cat {
    price: number;
    isBooked?: boolean;
    birthDate: string;
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