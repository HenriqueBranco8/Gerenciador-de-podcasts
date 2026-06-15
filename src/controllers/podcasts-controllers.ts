import {IncomingMessage, request, ServerResponse} from 'http'
import {listEpisodes} from '../services/list-Episodes'
import { filterEpisodes } from '../services/filter-Episodes'
import { ContentType } from '../utils/content-type'
import { PodcastTransferModel } from '../models/response-podcasts-transfer-model'

const defaultContent = {'Content-Type': ContentType.JSON}

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content: PodcastTransferModel = await listEpisodes()

    response.writeHead(content.statusCode, defaultContent )
    response.end(JSON.stringify(content.body))

}




export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) => {
    
    const content: PodcastTransferModel = await filterEpisodes(request.url)
    
    response.writeHead(content.statusCode, {'Content-Type': ContentType.JSON})
    response.end(JSON.stringify(content.body))
}