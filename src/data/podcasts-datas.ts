import fs from 'fs'
import path from 'path'
import { podcastModel } from '../models/podcast-models';




export const pathData = path.join(__dirname, "../data/podcasts.json")


export const repoPodcasts = async(podcastsName?:string): Promise <podcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData)

    if(podcastsName){
        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName === podcastsName)
    } else {
        console.log('erro')
    }

    
    return jsonFile
}