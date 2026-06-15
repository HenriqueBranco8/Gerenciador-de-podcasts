import fs from 'fs'
import path from 'path'
import { podcastModel } from '../models/podcast-models';





export const pathData = path.join(__dirname, "../data/podcasts.json")
const language = 'utf-8'

export const repoPodcasts = async(podcastsName?:string): Promise <podcastModel[]> => {
    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)

    if(podcastsName){
        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName === podcastsName)
    }
    
    return jsonFile
}