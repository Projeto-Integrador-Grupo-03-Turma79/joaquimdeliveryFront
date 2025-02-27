import Categoria from "./Categoria"

export default interface Restaurante {
    id: number
    nome: string
    horario_funcionamento: string
    avaliacao: number
    endereco: string
    saudavel: boolean
    categoria?: Categoria | null
  }