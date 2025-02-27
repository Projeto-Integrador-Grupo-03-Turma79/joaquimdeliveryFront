import Restaurante from "./Restaurante";

export default interface Categoria {
    id: number;
    descricao: string;
    restaurante?: Restaurante | null;
}