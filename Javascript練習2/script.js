 //變數規則 
 //只能是英文大小寫、數字、＄、_組合
 //開頭不能是數字

 //變數類別
 var my_name ='Jenny' //字串
 var my_age = 20 //數字
 var is_male = false //布林值 

 //字串用法
 document.write(my_name);
 document.write(my_name.length); //字串長度
 document.write(my_name.toUpperCase);//字串全部大寫
 document.write(my_name.toLowerCase);//字串全部小寫
 document.write(my_name.charAt(0));//回傳字串第幾位
 document.write(my_name.indexOf);//寫字元回傳第幾位 重複只會回傳最前面的
 document.write(my_name.substring(0,5));//回傳到第幾位（0-4) 最後一個數字不包括

 //數字用法
 var a = 2 ;
 document.write(10%3);// ％取餘數
 document.write(Math.abs(a)); //絕對值
 document.write(Math.max(2,3,4,10,99)); //找最大值
 document.write(Math.min(2,3,4,10,99));//找最小值
 document.write(Math.round(a)); //四捨五入
 document.write(Math.pow(2,3)); //(數字,幾次方) 
 document.write(Math.sqrt(36)); //開根號 
 document.write(Math.random());//回傳0-1隨機數
 document.write(Math.round(Math.random()*10));//回傳1-10隨機數


//製作一個基本計算機
var a = prompt('請輸入'); //input 得到的數字是字串
a = parseInt(a); //字串轉換整數
a = parseFloat(a); //字串轉換小數點

//陣列 
var scores = [20,40,60,80,100];
document.write(scores[0]); //印出20
scores[0] = 15; //20變成15

//函式
function add(num1,num2){
    document.write(num1+num2);
    document.write('<br/>');
    return 10;
    document.write('妳好'); //此行不會印出
}

value = add(3,2);
document.write(value);

//結果印出 5 換行 10

//if判斷

/* 
1.
如果 肚子餓
    我要去吃飯
*/
var hungry = true ;
if (hungry){
    document.write('我要去吃飯');
}

/*
2.
如果 今天下雨
    我就開車去上班
否則
    我就走路去上班
*/

var rain = true ;
if (rain){
    document.write('我就開車去上班');
}
else{
    document.write('我就走路去上班');
}
        
/*
3.
如果 你考100
    我給你1000
或是如果 你考80以上
    我給你500
或是如果 你考60以上
    我給你100
否則
    你給我300
*/
var score = 100;
if(score == 100){
    document.write('我給你1000');
}
else if(score>=80){
    document.write('我給你500');
}
else if(score>=60){
    document.write('我給你100');
}
else{
    document.write('你給我300');
}

/*
4.
如果 今天下雨 且 考一百分
    我給你1000元
否則
    你給我100元
*/

var score = 100;
var rain = true;
if(score == 100 && rain == true){
    document.write('我給你1000');
}
else{
    document.write('你給我100元'); 
}

/*
5. 
如果 今天下雨 或 考一百分
    我給你1000元
否則
    你給我100元
*/

var score = 100;
var rain = true;
if(score == 100 || rain == true){
    document.write('我給你1000');
}
else{
    document.write('你給我100元'); 
}

/*
6.
如果 今天沒下雨 或 考一百分
    我給你1000元
否則
    你給我100元
*/

var score = 100;
var rain = true;
if(score == 100 || !rain == true){
    document.write('我給你1000');
}
else{
    document.write('你給我100元'); 
}

/*
7.測驗
找三個數的最大值
*/
function max(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3){
         return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    else{
        return num3;
    }
} 
document.write(max(2,3,5));

//物件object
//key  value
//鍵    值 

var person ={
    name:'Jenny',
    age : 20,
    is_male: false,
    print_name:function(){ //可以內含函式
        document.write(this.name);
    }
}; 
person.print_name();

//真實物件
var movie = {
    title:"刻在你心底的名字",
    duration:114,
    actors:[
        {
            name:'陳昊森',
            age:'24',
            is_male:true
        },
        {
            name:'曾敬煇',
            age:'23',
            is_male:true
        }
    ]
};
document.write(movie.actors[0]);//第一位演員的資訊
document.write(movie.actors[0].name);//第一位演員的名字 

//while迴圈

var i = 0;

//while成立才會執行下面動作
while(i<=3){ 
    document.write(i);
    i++;
}

//先執行再來判斷
do{ 
    document.write(i);
    i++;
}while(i<=3)

//密碼檢驗
var password = 12345;
var input;
var count = 0;
var limit = 3;
var out_of_limit = false;

while(password != input && !out_of_limit ){
    count ++;
    if(count <= limit){
        input = prompt("請輸入正確密碼：");
    }
    else{
        out_of_limit = true;
    }
    
}
if(out_of_limit){
    alert("超過輸入次數");
}
else{
    alert("登入成功");
}

//for迴圈

var number =[2,4,6];
for(i=0; i<number.length; i++){
    document.write(number[i]);
}

//製作一個問答程式
var question = [
    {
    prompt:'香蕉是什麼顏色？\n(A)紅色\n(B)綠色\n(C)黃色',
    answer:'Ｃ'
    },
    {
    prompt:'草莓是什麼顏色？\n(A)紅色\n(B)紫色\n(C)黃色',
    answer:'Ａ'
    },
    {
    prompt:'1公尺等於幾公分？\n(A)1\n(B)10\n(C)100',
    answer:'C'
    }
]

var score = 0;
for(var i=0; i<score.length; i++){
    var input = prompt(question[i].prompt);
    if(input == question[i].answer){
        score ++;
        alert('答對了！')
    }
    else{
        alert('答錯了');
    }
} 
alert('總共答對了'+ score + '題'); 

//2維陣列、巢狀迴圈
var number = [
    [1,2,3],
    [3,4,5],
    [6,7,8],
    [0]
]; //此為二維陣列 
document.write(number[0][1]); //2

for(var i=0; i<4; i++){
    for(var j=0; j<3; j++){
        document.write('i:'+i+'j:'+j);
        document.write('<br/>');
    }
} //此為巢狀迴圈

//印出二維陣列所有值
for(var i=0; i<number.length; i++){
    for(var j=0; j<number[i].length; j++){
        document.write(number[i][j]);
    }
    document.write('<br/>');
}

//class
var phone1 ={
    number :'123',
    year:2020,
    waterproof:false,
    phone_age:function(){
        return 2023 - this.year;
    }
}

var phone2 ={
    number :'456',
    year:2018,
    waterproof:false,
    phone_age:function(){
        return 2023 - this.year;
    }
}

var phone3 ={
    number :'789',
    year:2018,
    waterproof:true,
    phone_age:function(){
        return 2023 - this.year;
    }
}