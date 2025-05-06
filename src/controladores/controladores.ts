import { bancoDeDados } from "../../banco_de_dados"
import { Request,Response } from "express"

export function listarInstrutores(req:Request,res:Response){
    res.status(200).json(bancoDeDados)
}

export const detalharInstrutor = (req: Request, res: Response): Response => {
    const { id } = req.params;
    const instrutor = bancoDeDados.find((instrutor) => instrutor.id === Number(id));
  
    if (!instrutor) {
      return res.status(404).json({ mensagem: "instrutor nao localizado" });
    }
  
    return res.status(200).json(instrutor);
  };

// import { Request, Response } from "express";
// import { bancoDeDados } from "../../banco_de_dados";

// export function listarInstrutores(req: Request, res: Response) {
//   return res.status(200).json(bancoDeDados);
// }

// export function detalharInstrutor(req: Request, res: Response) {
//   const id = Number(req.params.id);
//   const instrutor = bancoDeDados.find(pessoa => pessoa.id === id);

//   if (!instrutor) {
//     return res.status(404).json({ mensagem: "Instrutor não encontrado" });
//   }

//   return res.status(200).json(instrutor);
// }
