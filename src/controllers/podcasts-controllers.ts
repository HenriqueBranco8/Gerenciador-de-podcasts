import {IncomingMessage, request, ServerResponse} from 'http'
import {listEpisodes} from '../services/list-Episodes'
import { filterEpisodes } from '../services/filter-Episodes'
import { StatusCode } from '../utils/status-code'
import { ContentType } from '../utils/content-type'



export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content = await listEpisodes()
    response.writeHead(StatusCode.OK, {'Content-Type': ContentType.JSON})
    response.end(JSON.stringify(content))

}




export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) => {
    const content = await filterEpisodes(request.url)

}