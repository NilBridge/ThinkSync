//LiteXLoader Dev Helper
/// <reference path="c:\Users\amsq\.vscode\extensions\moxicat.lxldevhelper-0.1.8/Library/JS/Api.js" /> 


class playerData{
    /**
     * @type {Player}
     */
    #player;
    #nbt;
    #data = {
        bag : [],
        enderchest : []
    };
    /**
     * 
     * @param {Player} player 
     */
    constructor(player){
        this.#player = player;
        this.#data.xuid = player.xuid;
        this.#data.name = player.realName;
    }
    #Bag(){
        let all = this.#player.getInventory().getAllItems();
        all.forEach(item=>{
            this.#data.bag.push({type:item.type,count:item.count,nbt:item.getNbt().toSNBT()});
        });
    }
    #enderChest(){
        let all = this.#player.getEnderChest().getAllItems();
        all.forEach(item=>{
            this.#data.enderchest.push({type:item.type,count:item.count,nbt:item.getNbt().toSNBT()});
        });
    }
}

module.exports = playerData;