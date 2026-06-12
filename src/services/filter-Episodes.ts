import { repoPodcasts } from "../data/podcasts-datas"
import { filterPodcastModel } from "../models/response-podcast-model"
import { StatusCode } from "../utils/status-code"



export const filterEpisodes = async(podcastName?: string | undefined) : Promise<filterPodcastModel>  => {

    //define a interface de retorno
    let responseFormat: filterPodcastModel = {
        statusCode: 0,
        body: [],
    }


    //busca os dados
    const queryString = podcastName?.split('?p=')[1] || ''
    const data = await repoPodcasts(queryString)
    console.log(`Esse> ${queryString}`)

    //verifico se tem conteúdo
    if(data){
        responseFormat.statusCode = StatusCode.OK
    } else{
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    responseFormat.body = data

    return responseFormat
}