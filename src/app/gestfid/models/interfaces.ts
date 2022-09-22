export interface IClienti {
    codFid: string;
    nominativo: string;
    comune: string;
    stato: number;
}

export interface ITransazioni {
    id:number;
    data: Date;
    puntoVendita: string;
    bollini: number;
}