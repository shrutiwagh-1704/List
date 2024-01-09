import express, { response } from 'express';
import { addToDO,getAllTodo,toggleTodoDone,updateTodo,deleteTodo} from '../controller/todo-controller.js';



const route=express.Router();

route.post('/todos',addToDO);
route.get('/todos',getAllTodo);
route.get('/todos/:id',toggleTodoDone);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);


export default route;