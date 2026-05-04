import {IncomingMessage, request, ServerResponse} from 'http'
import {listEpisodes} from '../services/list-Episodes'
import { filterEpisodes } from '../services/filter-Episodes'



export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content = await listEpisodes()
    response.writeHead(200, {'Content-Type': 'aplication/json'})
    response.end(JSON.stringify(content))

}




export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) => {
    const queryString = request.url?.split('?p=')[1] || ''
    const content = await filterEpisodes(queryString)
    response.writeHead(200, {'Content-Type': 'aplication/json'})
    response.end(JSON.stringify(content))
}