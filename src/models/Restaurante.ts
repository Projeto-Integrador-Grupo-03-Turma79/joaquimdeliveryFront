import Categoria from "./Categoria";

export default interface Restaurante{
    id: number;
    nome: string;
    horarioFuncionamento: string;
    avaliacao: number;
    endereco: string;
    categoria: Categoria | null;
    saudavel: boolean;

}