import {Injectable} from 'angular2/core'
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import * as model from '../dal/models'
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class CacheManager {
    constructor() { }
    public StoreInCache(key: string, value: any): void {
        sessionStorage.setItem(key, value);
    }
    public GetFromCache<T>(key: string, defaultValue: T = null): T {
        var retVal = <T>sessionStorage.getItem(key);
        if (!retVal && defaultValue != null)
            retVal = defaultValue;
        return retVal;
    }
    public RemoveFromCache(key: string): void {
        sessionStorage.removeItem(key);
    }

    public ClearCache(): void {
        sessionStorage.clear();
    }


}




@Injectable()


export class DataService {

    constructor(private http: Http) { }
    public ConnectToApiData(request: model.DataRequest, url: string): Observable<model.DataResponse> {
        let body = JSON.stringify({ request });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options).map((res) => <model.DataResponse>res.json())
            //.do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError)
    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}


/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
@Injectable()
export class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    confirm(message?: string) {
        return new Promise<boolean>((resolve, reject) =>
            resolve(window.confirm(message || 'Is it OK?')));
    };
}
