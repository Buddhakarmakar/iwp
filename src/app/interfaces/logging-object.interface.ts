export interface LoggingObject{
  message: string;
  timestamp: Date;
  method: string,
}


export interface LogConfig{
  thresholdLevel: number,
  logLevel: string,

}
