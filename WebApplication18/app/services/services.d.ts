import { Http } from 'angular2/http';
import * as model from '../dal/models';
import { Observable } from 'rxjs/Observable';
export declare class CacheManager {
    constructor();
    StoreInCache(key: string, value: any): void;
    GetFromCache<T>(key: string, defaultValue?: T): T;
    RemoveFromCache(key: string): void;
    ClearCache(): void;
}
export declare class DataService {
    private http;
    private CacheManager;
    constructor(http: Http, CacheManager: CacheManager);
    GetFileContent(filePath: string): Observable<any>;
    ConnectToApiData(request: model.DataRequest, url: string): Observable<model.DataResponse>;
    private handleError(error);
}
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
export declare class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    confirm(message?: string): Promise<boolean>;
}
