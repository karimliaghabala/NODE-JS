// console.log("uygulama bashlatiliyor");

// const fs = require("fs");
// const os = require("os");
// const test = require("./test.js");
// const _ = require("lodash");
// const yargs = require("yargs");

// const argv = yargs.argv;
// console.log(argv);

// let komut = process.argv[2]

// if(komut === 'sil'){
//     console.log('komut siliniyor');
// }else if(komut === 'kaydet'){
//     console.log('komut kaydedilyor');
// }else{
//     console.log('komut bulunamadi');
// }

// console.log();

// let donenDeyer = test.testFunksiyasi()
// console.log(donenDeyer);

// console.log(_.isString(true));
// console.log(_.isString(os.userInfo()));
// console.log(_.isString('agabala'));

// let sonhal = _.uniq(['test',1,'test',2,'test',3,'test',4])
// console.log(sonhal);

// let user = os.userInfo()

// console.log(user.username);

// fs.appendFileSync('yenitest.txt','Sistem kullanicisinin adi : '+ user.username)

// fs.appendFileSync('yeni tes.txt',`Sistem kullanicisi : ${user.username}`)
// fs.appendFile('test.txt','bu bir test denemesidir',(err)=>{
//     if(err){

//         console.log(err);
//     }
// })

// debuggu

// console.log("bashliyoruz");

// let ogrenci = {
//   adi: "agabala",
// };
// ogrenci.not = 75;
// debugger
// ogrenci.adi = "elin";
// console.log(ogrenci);


// arrov functionlar

console.log("bashliyoruz");
let kareAl =(x)=>x*x

console.log(kareAl(3));

let ogrenci = {
    isim:'agabala',
    kendiniTanit:()=>{
        console.log(`salam +${this.isim}`);
    },
    selamVer (){
        console.log(`salam +${this.isim}`);
    }
}
ogrenci.kendiniTanit()
ogrenci.selamVer()
