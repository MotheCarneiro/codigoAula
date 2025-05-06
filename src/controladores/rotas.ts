import { Router } from "express"
import { detalharInstrutor, listarInstrutores } from "./controladores"


const rotas = Router()

rotas.get('/', listarInstrutores)

rotas.get('/:id', detalharInstrutor)

export default rotas

// import { Router } from "express";
// import { detalharInstrutor, listarInstrutores } from "./controladores";

// const rotas = Router();

// rotas.get("/", listarInstrutores);
// rotas.get("/:id", detalharInstrutor);
// export default rotas;
