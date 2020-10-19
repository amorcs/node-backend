import express from 'express';
//expree é um framework que ajuda a lidar com requisição e resposta no NODE
// cria aplicação
const app = express();
app.use(express.json());
// '/users' => rota + função(requisição e reposta)
////request : tudo que é passado do frontend para o backend
////response : como o backend (ou o quê) o backend irá devolver para o frontend
// ---
// recurso: user (usuario), o objeto 
// ---
//Métodos HTTP
////GET/POST/PUT/DELETE
/////GET: Busca uma Informção (default)
/////POST: Cria uma Informação
/////PUT: Edita uma Informação
/////DELETE: Deleta informções
// ---
//Parâmetros
////Query params: https://localhost:3333/users?search=marcos busca todos os marcos
////Route params: https://localhost:3333/users/1 identificar o recurso, usado no DELETE e PUT
////Body params: https://localhost:3333/users/ as informções estão no body

app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);


    return response.json({'message': 'Hello World'})
});
//3333 a porta que o express irá utilizar 
app.listen(3333); //=> localhost:3333
// REQ => páginas de contatos e o NODE 'RES' com uma página de contatos
// o beckend faz a requisição e o NODE retorna a resposta
