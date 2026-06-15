import { repoPodcasts } from "../data/podcasts-datas"
import { PodcastTransferModel } from "../models/response-podcasts-transfer-model"
import { StatusCode } from "../utils/status-code"



export const filterEpisodes = async(podcastName?: string | undefined) : Promise<PodcastTransferModel>  => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }


    //busca os dados
    const queryString = podcastName?.split('?p=')[1] || ''
    const data = await repoPodcasts(queryString)

    //verifico se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat
}