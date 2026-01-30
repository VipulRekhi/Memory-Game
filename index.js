var randnum=Math.floor((Math.random()*16))
let set=["a1","a1","a1","a1","a2","a2","a2","a2","a3","a3","a3","a3","a4","a4","a4","a4"];

// layout logic
let template=[];
var t=0;
if(template.includes(randnum) === false)
{
    template.push(randnum)
    t=set[randnum];
}

var click=0;
var his=null;  // to maintain first click record
$(".main").on("click", function()
{
    click++;
    $(this).addClass("a4");
    if(click == 1)
    {
        his=$(this);
    }
    
    if (click == 2)
{
    setTimeout(() =>
    {
   $(this).removeClass();
   his.removeClass();},300)
   click=0;
}
});