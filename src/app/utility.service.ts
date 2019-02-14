import { URLSearchParams, QueryEncoder } from '@angular/http';
import "rxjs/add/observable/fromPromise";

export class UtilityService {
    public static urlencode(data: any): string {
        let urlSearchParams: URLSearchParams = new URLSearchParams('', new GhQueryEncoder());
        urlSearchParams.append('returnformat', 'json');
        urlSearchParams.append('paramextended', 'true');
        if (data['method']) {
            urlSearchParams.append('method', data['method']);
            delete data['method'];
        }
        for (var key in data) {
            if (typeof data[key] !== 'undefined') {
                urlSearchParams.append(key, data[key]);
            }
        }
        return urlSearchParams.toString();
    }

    public static resolveSelectWhitespace(prop: string): string {
        const PROP: string = prop.trim();
        return PROP ? PROP : ' ';
    }

    public static deepClone(obj: Object | Array<Object>) {
        let copiedObj = JSON.parse(JSON.stringify(obj));
        return copiedObj;
    }

    public static async waitTimeout(timeoutLength: number = 0): Promise<void> {
        return new Promise<void>(resolve => setTimeout(resolve, timeoutLength));
    }
}

class GhQueryEncoder extends QueryEncoder {
    encodeKey(k: string): string {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v: string): string {
        v = super.encodeKey(v);
        return v.replace(/\+/gi, '%2B');
    }
}
