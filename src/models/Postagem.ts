import Tema from './Tema'

interface Postagem{
    id: number;
    nome: string;
    email: string;
    telefone: string;
    foto: string;

    tema?: Tema| null
}

export default Postagem;