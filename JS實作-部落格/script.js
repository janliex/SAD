//部落格
var title = document.getElementById('title'); 
var content = document.getElementById('content'); 
var btn = document.getElementById('btn'); 
var list = document.getElementById('list'); 

btn.addEventListener("clcik",function(){
    list.innerHTML = list.innerHTML +
    <div class="article">
         <h2>$(title.value)</h2> 
         <p>$(content.value)</p>
    </div>
    ; //-模板語法-
    //上傳之後再清空
    title.value ='';
    content.value=''

})