export interface Environment {
  nodeEnv: string,
  dbUrl: string;
  googleAccessToken:string
  baseUrl:string
}

export function env(): Environment {
  return {
    nodeEnv: process.env.NODE_ENV,
    dbUrl: process.env.DB_URL,
    googleAccessToken: process.env.GOOGLE_ACCESS_TOKEN,
    baseUrl:process.env.BASE_URL
  };
}