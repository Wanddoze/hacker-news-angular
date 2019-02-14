import { Inject, Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { Configuration } from './config';
import { UtilityService } from './utility.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    constructor(@Inject('CONFIG') private config: Configuration, private http: Http) { }

    private handleError(response: Response, url: string, encodedBody: any) {
        let error = new Error();
        let responseJson = response.json();
        error.message = JSON.stringify({
            errorMessage: responseJson['errorMessage'],
            stacktrace: responseJson['stacktrace']
        });
        error.name = "HTTPError";
    }
    async callMethod(path?: string, params?:any): Promise<number> {
        let url = this.config.buildAddress(path);
        if(params){
            let conds = [];
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    const element = params[key];
                    conds.push(`${key}=${element}`); 
                }
            }
            url += `?${conds.join('&')}`
        }
        console.log(url)
        const response = await this.http.get(url, { withCredentials: false }).toPromise();
        return response.json();
    }

    async callMethodDirect(path?: string): Promise<number> {
        const response = await this.http.get(path, { withCredentials: false }).toPromise();
        return response.json();
    }

    public post(path?:string, body?: HttpBody | any, options?: RequestOptionsArgs): Promise<any> {
        let url = this.config.buildAddress(path);
        let encodedBody: string;
        encodedBody = UtilityService.urlencode(body);
        return new Promise<any>((resolve: any, reject: any) => {
            this.http.post(url, encodedBody, options)
                .map((response: Response): Response => {
                    let jsonResponse = response.json();
                    return resolve(jsonResponse);
                }).catch((response: Response): Observable<Response> => {
                    this.handleError(response, url, encodedBody);
                    return Observable.throw(response.json());
                })
                .debounceTime(500)
                .subscribe((response: any): void => resolve(response), reject);
        });
    }

}

export interface HttpBody {
    [key: string]: object | string | number | boolean | Array<any>;
    method: string;
    returnformat?: 'json';
}

export interface HttpResponse {
    RESULT: any;
    SUCCESS: boolean;
}

export interface HttpGenericResponse {
    SUCCESS: boolean;
    [key: string]: any;
}
