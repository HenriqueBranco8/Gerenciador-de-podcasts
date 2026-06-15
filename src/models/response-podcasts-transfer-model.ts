import { podcastModel } from "./podcast-models";

export interface PodcastTransferModel {
    statusCode: number,
    body: podcastModel[],
    
}