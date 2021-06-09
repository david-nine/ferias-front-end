export interface Requerimento {
    idGestor: number,
    dataAbertura: string,
    dataFechamento: string,
    prazoAnalise: string,
    estado: string,
    mensagem: string,
    resposta: string,
    diasRequisitados: number,
    diasVendidos: number,
    dataInicioFerias: string
}