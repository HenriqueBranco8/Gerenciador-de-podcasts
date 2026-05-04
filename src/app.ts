import * as http from "http"
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controllers"
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"


export const server = http.createServer( async (request: http.IncomingMessage, response:http.ServerResponse) => {
    
    //queryString
    //localhost:3636/api/episodes?p=flow
    
    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''] 
    console.log(baseUrl)
    console.log(queryString)
    
    //Listar podcasts
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request, response)
    }

    //filter episodes
    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(request, response)
    }
})
