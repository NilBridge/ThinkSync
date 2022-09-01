export function init(dir:string,prepare:()=>void):boolean;
export function getPlayer(xuid:string,callback:(error:Error | undefined,data: any)=>void):void;
export function setPlayer(xuid:string,callback:(error:Error | undefined,data: any)=>void):void;
export function deletePlayer(xuid:string,callback:(error:Error | undefined,data: any)=>void):void;
export function queryXuid(xuid:string,callback:(error:Error | undefined,data: any)=>void):void;
export function queryName(xuid:string,callback:(error:Error | undefined,data: any)=>void):void;
export function all(callback:(error:Error | undefined,data: Array | undefined)=>void):void;