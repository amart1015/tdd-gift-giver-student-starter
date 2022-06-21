const {BadRequestError}=require("../utils/errors")
let namArr=[]

class GiftExchange{
    static pairs(names){
        if(names.length % 2 != 0){
            throw new BadRequestError("Number of names cannot be odd");
        }
        let nam1, nam2;
        let namUsed=[];
        let newList=[];
        for (let i = 0; i < names.length / 2; i++) {
            do {
              nam1 = Math.floor(Math.random() * names.length);
            } while (namUsed.includes(nam1));
      
            namUsed.push(nam1);
            do {
              nam2 = Math.floor(Math.random() * names.length);
            } while (namUsed.includes(nam2));
      
            namUsed.push(nam2);
      
            newList.push([names[nam1], names[nam2]]);
          }
        return newList;
    }
    static traditional(names){
        if(names.length % 2 != 0){
            throw new BadRequestError("Number of names cannot be odd");
        }
        let nam1
        let namUsed=[];
        let newList=[];
        let traList = [];

        for (let i = 0; i < names.length; i++) {
        do {
            nam1 = Math.floor(Math.random() * names.length);
        } while (namUsed.includes(nam1));

        namUsed.push(nam1);
        newList.push(names[nam1]);
        }

        for (let i = 0; i < newList.length; i++) {
        if (newList[i + 1] != undefined) {
            traList.push(newList[i] + " is giving a gift to " + newList[i + 1]);
        } else {
            traList.push(newList[i] + " is giving a gift to " + newList[0]);
        }
        }
        return traList;



    }
}


module.exports = GiftExchange;