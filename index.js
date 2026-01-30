
let set = ["a1", "a1", "a1", "a1", "a2", "a2", "a2", "a2", "a3", "a3", "a3", "a3", "a4", "a4", "a4", "a4"];

// fix layout logic

let template = [];
let actual_grid = {};
var i = 0;
var g_value = null;
while (template.length != 16) {

    var randnum = Math.floor((Math.random() * 16))
    if (template.includes(randnum) === false) {
        template.push(randnum)
        actual_grid["g" + randnum] = set[i];
        i++;
    }
}

//setting class on specific click

$(".main").on("click", function () {
    g_value = this.classList[1]; // stores the value of which grid block actualy cliked
});


//2 click transition

var click = 0;
var his = null;  // to maintain first click record
var first_g_value = null;
$(".main").on("click", function () {
    click++;
    $(this).addClass(actual_grid[g_value]);
    if (click == 1) {
        his = $(this);
        first_g_value = g_value; //keeping track of first g value
    }
    if(click==2 && this==his[0]) //verification for same box double click
    {
        alert("Dont Click Same Box Twice")
        click=1;
        return;
    }
    else // verified not clicked twice
        {
         
        if (click == 2) {
            //matching condition
            if (actual_grid[g_value] === actual_grid[first_g_value]) {
                setTimeout(() => {
                    $(this).css("visibility", "hidden");
                    his.css("visibility", "hidden");

                    click = 0;
                    return;
                }, 500
                );
            }

            //retry condition
            else {
                setTimeout(() => {
                    $(this).removeClass(actual_grid[g_value]);
                    his.removeClass(actual_grid[first_g_value]);
                }, 300)
                click = 0;
            }
        }
    }}
);