import axios from "axios";

const API_URL = 'https://brasilapi.com.br/api/taxas/v1';

export interface Taxa {
    nome: string;
    valor: number;
}

export async function fetchTaxas(): Promise<Taxa[]> {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar taxas', error);
        throw error;
    }
}
