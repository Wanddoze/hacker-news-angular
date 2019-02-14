export class Configuration {
    public static _instance: Configuration = null;

    public channel: string;
    public server: string = 'localhost:5000';
    public protocol: string = 'http';
    public id_contract: number;
    public type: string;
    public ambiente: 'DESENVOLVIMENTO' | 'PRODUCAO';
    public ddsUrl: string;
    public version: string;
    public sentryKey: string;
    public sentryProjectId: string;
    // public server: string = 'http://localhost:5000'
    public constructor() {
        if (Configuration._instance) {
            return Configuration._instance;
        } else {
            Configuration._instance = this;
        }
    }

    public buildAddress(target: string): string {
        target = target.startsWith('/') ? target.substr(1) : target;
        return this.protocol + '://' + this.server + '/' + target;
    }
}

export let config: Configuration = new Configuration();