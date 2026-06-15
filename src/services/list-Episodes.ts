
import { repoPodcasts } from "../data/podcasts-datas"
import { PodcastTransferModel } from "../models/response-podcasts-transfer-model"
import { StatusCode } from "../utils/status-code"

export const listEpisodes = async (): Promise<PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //busco os dados
    const data = await repoPodcasts()


    //verifico o tipo de resposta
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data

    return responseFormat
}