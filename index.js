
let set=["a1","a1","a1","a1","a2","a2","a2","a2","a3","a3","a3","a3","a4","a4","a4","a4"];

// layout logic
let template=[];
let actual_grid={}
var t=0;
var i=0;
while(template.length != 16)
{

    var randnum=Math.floor((Math.random()*16))
if(template.includes(randnum) === false)
{
    template.push(randnum)
    actual_grid["g"+randnum]=set[i];
    i++;
}
}
console.log(actual_grid)
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