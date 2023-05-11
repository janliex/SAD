//部落格
var title = document.getElementById('title'); 
var content = document.getElementById('content'); 
var btn = document.getElementById('btn'); 
var list = document.getElementById('list'); 

btn.addEventListener("click",function(){
    list.innerHTML = list.innerHTML + ` 
    <div class="article">
        <h2>${title.value}</h2> 
        <p>${content.value}</p>
    </div>
    `  ;
    //上傳之後再清空
    //-模板語法-
    title.value ='';
    content.value='';

})

var btn = document.getElementById('btn');
 btn.addEventListener("mouseover",function(){ 
    this.style.color = 'CornflowerBlue';
 })

 var btn = document.getElementById('btn');
 btn.addEventListener("mouseout",function(){ 
    this.style.color = 'black';
 })