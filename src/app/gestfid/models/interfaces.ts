export interface IClienti {
    codFid: string;
    nominativo: string;
    comune: string;
    stato: number;
    idAvatar: string;
    transazioni: Array<ITransazioni>
}

export interface IClienti2 {
    codFid: string;
    nominativo: string;
    comune: string;
    stato: string;
    bollini: number;
    idAvatar: string;
    spese: number;
    dataSpesa: Date;
    transazioni: Array<ITransazioni>
}

export interface ITransazioni {
    id:number;
    data: Date;
    puntoVendita: string;
    bollini: number;
}