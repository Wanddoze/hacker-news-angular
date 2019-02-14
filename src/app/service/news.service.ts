import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable()
export class NewsService {
    
    constructor(private http: HttpService){

    }

    public async getNewsService(){
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b5f7b222afe045b8b44a7c9496acf2ea';
        return await this.http.callMethodDirect(url);
    }
}