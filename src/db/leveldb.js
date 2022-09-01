//LiteXLoader Dev Helper
/// <reference path="c:\Users\amsq\.vscode\extensions\moxicat.lxldevhelper-0.1.8/Library/JS/Api.js" /> 

let db;


function init(dir,prepare){
    let has = true;
    if(file.exists(dir) == false){
        has = true;
    }
    db = new KVDatabase(dir);
    if(!has) prepare();
    return true;
}

function setPlayer(xuid,playerdata,callback){
    try{
        db.set(xuid,playerdata);
        callback(null);
    }catch(err){
        callback(err);
    }
}

function getPlayer(xuid,callback){
    try{
        callback(null,db.get(xuid));
    }catch(err){
        callback(err);
    }
}

function deletePlayer(xuid,callback){
    try{
        db.delete(xuid);
        callback(null);
    }catch(err){
        callback(err);
    }
}

function all(callback){
    try{
        callback(null,db.listKey());
    }catch(err){
        callback(err);
    }
}

function queryName(xuid,callback){
    let all = db.listKey();
    for(let i in all){
        if(i.xuid == xuid){
            callback(null,i.name);
        }
    }
    callback(new Error('not found'));
}

function queryXuid(name,callback){
    let all = db.listKey();
    for(let i in all){
        if(i.name == name){
            callback(null,i.xuid);
        }
    }
    callback(new Error('not found'));
}