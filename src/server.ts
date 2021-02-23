import express from 'express'

const app = express()

/* Métodos HTTP
 * GET => BUSCA (Read)
 * POST => SALVAR (Create)
 * PUT => ALTERAR (Update)
 * DELETE => REMOVER (Delete)
 * PATCH => ALTERAÇÃO ESPECÍFICA (Update)
*/

//  Navegador trabalha por padrão com métodos GET
//  Utiliza-se Insomnia para métodos GET/PUT/POST/DELETE/PATCH

app.get('/', (request, response) => {
    let message = { msg: 'hello world!' }

    return response.json(message)
})

// Parâmetros: 
// 1 - Rota (string)
// 2 - Requisição e resposta (variável)
app.post('/', (request, response) => {
    let message = { msg: 'Dados salvos com sucesso!' }

    return response.json(message)
})

app.listen('3333', () => {
    // Executa quando o servidor estiver online ( http://localhost:3333/ )
    console.log('Servidor online!')
})