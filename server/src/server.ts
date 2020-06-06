import express, { response, request } from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors }  from 'celebrate';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota: Endereço completo da requisição
// Recurso: Qual entidade(no caso '/users') estamos acessando

// GET: Buscar uma ou mais informações do backend
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET https://localhost:3333/users = Listar usuários
// GET https://localhost:3333/users/2 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso(por exemplo o id do usuário)
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = "Nicoly"
// knex('users').where('name', 'Nicoly').select('*');

app.use(errors());

app.listen(3333);

