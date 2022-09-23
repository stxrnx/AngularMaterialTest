    import { ELENCO } from "./transazioni";

const CLIENTI: any =[
{
codfid:'67000086',
nominativo:'CARMELO ROSSI',
comune: 'SASSARI',
stato:1
}
]

const x:string =`67000086,CARMELO ROSSI,SASSARI,1,svg-1
67000285,VITTORIO BIANCHI,ALGHERO,-28,svg-1
67000663,IRENE GRILLO,BORONEDDU,22,svg-1
67100019,MARIA M. SCARDAMELLA,ORISTANO,23,svg-1
67100057,ANGELA CITZIA,ORISTANO,35,svg-1
67100092,LOREDANA MORARU,ORISTANO,-49,svg-1
67100270,ONORATA CARCANGIU,ORISTANO,29,svg-1
67100316,COSTANTINO DINI,ORISTANO,-27,svg-1
67100481,ANGELA FRIGERIO,MACOMER,58,svg-1
67100627,MARIO MUREDDU,SASSARI,-800,svg-1
67300121,LUIGI ALBERTI,Alghero,99,svg-1
`


const v =x.split('\n');

export const ELENCODATI:any[]=[];

v.map((v)=>{
 const y =v.split(',');
 const z ={
 codFid: +y[0],
 nominativo: y[1],
 comune: y[2],
 stato: +y[3],
 idAvatar: y[4],
 transazioni: ELENCO[y[0]],
 }
ELENCODATI.push(z)
});







