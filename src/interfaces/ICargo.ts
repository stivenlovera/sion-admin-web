export interface Icargo {
    cargoId: number;
    nombreCargo: string
    descripcion: string
}

export const initialCargo: Icargo = {
    cargoId: 0,
    nombreCargo: '',
    descripcion: ''
}