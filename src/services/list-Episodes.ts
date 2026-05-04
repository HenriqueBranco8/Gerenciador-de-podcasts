import { repoPodcasts } from "../data/podcasts-datas"

export const listEpisodes = async () => {
    const data = await repoPodcasts()
    return data
}