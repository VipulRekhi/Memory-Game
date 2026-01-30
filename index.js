let template={}
//random num generator
for(let i=0 ;i<16 ;i++)
{
var randnum=Math.floor((Math.random()*4)+1)
template[i+1]="a"+randnum;
}

var click=0;
var his=null;  // to maintain first click record
$(".main").on("click", function()
{
    click++;
    $(this).addClass(template[4]);
    if(click == 1)
    {
        his=$(this);
    }
    
    if (click == 2)
{
    setTimeout(() =>
    {
   $(this).removeClass(template[4]);
   his.removeClass(template[4]);},300)
   click=0;
}
});