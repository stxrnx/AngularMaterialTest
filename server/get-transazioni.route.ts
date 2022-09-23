import { ELENCO } from './transazioni';
import {Request, Response} from 'express';





export function getAllTransazioni(req: Request, res: Response) {

/*
    console.log("ERROR loading courses!");
    res.status(500).json({message: 'error occurred.'});
    return;
*/



        setTimeout(() => {

             res.status(200).json(ELENCO);

        }, 400);




}


