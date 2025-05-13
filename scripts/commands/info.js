module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : Md. Sakib
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : S A K I B ツ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : Islam
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Ullapara, Sirajganj.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Ullapara, Sirajganj.
𝐆𝐞𝐧𝐝𝐞𝐫.   : Male
𝐀𝐠𝐞           : 18+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : In a relationship with Moni
𝐖𝐨𝐫𝐤        : Student
𝐆𝐦𝐚𝐢𝐥       : sakibbotv2@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 01765051219
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/2ndJohnnySins
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/2ndJohnnySins/`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/472796285_122118705218674221_5876343853182013289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHPWJiaw6P8SRI4uMyscnjSSv9SUH336SdK_1JQfffpJwxcyWdKz5RijhFacSkXIu1swhEcYBxYDg1nwLRBqr6x&_nc_ohc=Grk6Brk17OgQ7kNvwEnVlLE&_nc_oc=AdkIwTr3Cdraov5jn-_tjiUasDNjnNtmiJUcvBToik8qVVoRd7rFOOWzTuz0WtwDO_c&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=jYuwIhEM4bnTmgudMFSBPQ&oh=00_AfIzYs5xgYoCz1PuyDyFMZAxqR_ID5GiMYS0iKERzRxHXA&oe=68294418`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
