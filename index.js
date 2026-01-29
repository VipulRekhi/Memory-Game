var click=0;
var history=null;  // to maintain first click record
$(".main").on("click", function()
{
    click++;
    $(this).addClass("red");
    if(click == 1)
    {
        history=$(this);
    }
    
    if (click == 2)
{
    $(this).animate({opacity:0.3},200 , function()
{
    $(this).removeClass("red");
    history.removeClass("red");
});
    click=0;
    history=null;
}
});