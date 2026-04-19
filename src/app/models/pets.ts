export interface Pet {
    id: string,
    name: string,
    description: string,
    imageUrl: string;
}

export interface RespuestaApi{
    data: Pet[];
}