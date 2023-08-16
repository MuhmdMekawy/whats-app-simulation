const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

// Define your routes and logic here
router.get('/data', (req, res) => {
  const names = [
    { "id" : 1 , "user" : "Ahmed Fares" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "ولسوف يعطيك ربك فترضي" , "sentMsg" :"أهلا بك كيف حالك؟" , "recMsg" :"تمام" , "story" : "https://images.pexels.com/photos/3222401/pexels-photo-3222401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , "phone" : "01066392541"} ,
    { "id" : 2 , "user" : "AMINO" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "I'm not exist"  , "sentMsg" : " " , "recMsg" : "كل سنه وانت طيب يبرو" , "story" : "" , "phone" : "1122334455"} ,
    { "id" : 3 , "user" : "A⚡⚡Am" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "👷problem solver" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+6025163"} ,
    { "id" : 4 , "user" : "Kariem Elashram" , "imgUrl" : "https://cdn-icons-png.flaticon.com/128/560/560216.png" , "state" : "No Goal .. No Resumption" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+2055646"} ,
    { "id" : 5 , "user" : "MrWa" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/921/921009.png" , "state" : "ثق بإنني أستطيع أن أجازف بالتخلي عن كل شيء في حين يصبح المكسب نفسي" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+6254630"} ,
    { "id" : 6 , "user" : "Mahmoud Kamal" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "كن كالغيث إذا وقع نفع وإذا مضي أسعد ❤️"  , "sentMsg" : " " , "recMsg" : " " , "story" : "https://images.pexels.com/photos/4460483/pexels-photo-4460483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , "phone" : "+555516161"}, 
    { "id" : 7 , "user" : "Sama Ragab" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/921/921053.png" , "state" : "ولسوف يعطيك ربك فترضي" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+45123652"} ,
    { "id" : 8 , "user" : "Mazona" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "No Pain No gain" , "sentMsg" : "معاد ماتش الاهلي امتي؟" , "recMsg" : "أسأل جوجل" , "story" : "" , "phone" : "+84621534"} ,
    { "id" : 9 , "user" : "Nada Emad" , "imgUrl" : "https://cdn-icons.flaticon.com/png/512/4134/premium/4134175.png?token=exp=1651133330~hmac=36408d0a238ad3720beec3e2f9c053f0" , "state" : "القناعه كنز لا يفني" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+4587623"} ,
    { "id" : 10 , "user" : "Amr Awad" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "فصبر جميل .. والله المستعان على ما تصفون"  , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+777845230"},
    { "id" : 11, "user" : "Hend Tarek" , "imgUrl" : "https://cdn-icons.flaticon.com/png/512/2335/premium/2335153.png?token=exp=1651133505~hmac=21719f537eae425ecf5eae666260c93a" , "state" : "إن مع العسر يسرا❤️" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+999854620"} ,
    { "id" : 12 , "user" : "Huda Ali" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "القناعة دليل الأمانة، والأمانة دليل الشكر، والشكر دليل الزيادة، والزيادة دليل بقاء النعمة، والحياة دليل الخير كله." , "sentMsg" : " رساله مستلمه" , "recMsg" : " " , "story" : "" , "phone" : "+78877114"} ,
    { "id" : 13 , "user" : "Mohamed Eleraqy" , "imgUrl" : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "وهِب لي يا الله : قلبًا نقيا تقياً ، يخشاك سِراً وعلانية" , "sentMsg" : " " , "recMsg" : " " , "story" : "https://images.pexels.com/photos/5981369/pexels-photo-5981369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , "phone" : "+33032152"} 
    ,{ "id": 14, "user": "Saad Ali", "imgUrl": "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , "state" : "أهلا بك أنا استخدم واتساب" , "sentMsg" : " " , "recMsg" : " " , "story" : "https://images.pexels.com/photos/7409749/pexels-photo-7409749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" , "phone" : "66323462005"}
    , { "id": 15, "user": "Sara Ragheb", "imgUrl": "https://cdn-icons-png.flaticon.com/512/2922/2922688.png", "state": "أهلا بك أنا استخدم واتساب" , "sentMsg" : " " , "recMsg" : " Sent Message" , "story" : "" , "phone" : "+44152223"}
    , { "id": 16, "user": "Baraa Fady", "imgUrl": "https://cdn-icons-png.flaticon.com/512/2922/2922688.png", "state": "أهلا بك أنا استخدم واتساب" , "sentMsg" : " " , "recMsg" : " " , "story" : "https://images.pexels.com/photos/2985016/pexels-photo-2985016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , "phone" : "+2215222462"}
    , { "id": 17, "user": "Shady kamel", "imgUrl": "https://cdn-icons-png.flaticon.com/128/921/921071.png", "state": "أهلا بك أنا استخدم واتساب" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+03035462"}
    , { "id": 18, "user": "Sally Saied", "imgUrl": "https://cdn-icons-png.flaticon.com/128/949/949635.png", "state": "أهلا بك أنا استخدم واتساب" , "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+74568215"}
    , { "id": 19, "user": "Waleed Reda", "imgUrl": "https://cdn-icons-png.flaticon.com/512/2922/2922688.png", "state": "أهلا بك أنا استخدم واتساب" , "sentMsg" : " " , "recMsg" : " " , "story" : ""  , "phone" : "+203222354"}
    , { "id": 20, "user": "Shadya Ahmed", "imgUrl": "https://cdn-icons-png.flaticon.com/128/3667/3667325.png", "state": "أهلا بك أنا استخدم واتساب", "sentMsg" : " " , "recMsg" : " " , "story" : "" , "phone" : "+0951364752"}
  ];
  res.json(names);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
