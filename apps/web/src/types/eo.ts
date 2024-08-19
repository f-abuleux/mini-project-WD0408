export interface UserInput {
    username: string;
    email: string;
    password: string
}

export interface UserLogin {
    data: string;
    password: string
}
export interface CreateTweet {
    content: string;
}

export interface UserState {
    id: number;
    username: string;
    email: string;
    avatar?: string;
}

export interface UserState {
    id: number;
    username: string;
    email: string;
    avatar?: string;
}

export interface CreateEvent {
    id: number;
    name: string;
    description: string;
    price: number;
    date : number;
    location : string;
    seat : number;
    image : string;
    category :string;
}
