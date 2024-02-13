export interface Environment {
    nodeEnv: string;
    dbUrl: string;
    googleAccessToken: string;
    baseUrl: string;
}
export declare function env(): Environment;
