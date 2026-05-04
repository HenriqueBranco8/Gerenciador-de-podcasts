import * as http from "http"
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controllers"


const  server = http.createServer( async (request: http.IncomingMessage, response:http.ServerResponse) => {
    
    //queryString
    //localhost:3636/api/episodes?p=flow
    
    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''] 
    console.log(baseUrl)
    console.log(queryString)
    
    //Listar podcasts
    if(request.method === 'GET' && baseUrl === '/api/list'){
        await getListEpisodes(request, response)
    }

    //filter episodes
    if(request.method === 'GET' && baseUrl === '/api/episodes'){
        await getFilterEpisodes(request, response)
    }
})

const port = process.env.PORT

server.listen(port,()=>{
    console.log(`Servidor iniciado na porta ${port}`)
    
})

