
import {Request, Response} from 'express';
import { ELENCODATI } from './clienti';






export function getAllClienti(req: Request, res: Response) {

    /*
        console.log("ERROR loading courses!");
        res.status(500).json({message: 'error occurred.'});
        return;
    */
    
    
    
            setTimeout(() => {
    
                 res.status(200).json({Clienti:Object.values(ELENCODATI)});
    
            }, 400);

            
    }

    export function getClienteByUrl(req: Request, res: Response) {

        const clienteId = req.params["id"];

        console.log(clienteId);
    
        const clienti:any = Object.values(ELENCODATI);
    
        const cliente = clienti.find(cliente => cliente.codFid == clienteId);

        console.log(cliente);
    
        res.status(200).json(cliente);
    }
