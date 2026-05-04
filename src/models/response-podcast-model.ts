import { podcastModel } from "./podcast-models";

export interface filterPodcastModel {
    statusCode: number,
    body: podcastModel[],
    
}