var body = document.body; 
var html = document.documentElement; 
var lastScroll; 


var height = Math.max(body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

var newColVal = 0; 
    var currentFontCol = body.style.color; 
    console.log(currentFontCol); 

function openNav() {
    document.getElementById("mySidenav").style.width = "90px";
    document.getElementById("openbtn").style.opacity = "0"; 
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("openbtn").style.opacity = "1"; 
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

document.getElementById("topbtn").style.display = "none";

function scrollFunction() {
    

    changeBackground(); 
    
    if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        lastScroll = document.body.scrollTop; 
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function changeBackground(){
    
    var currentCol = getStyle(body, 'background-color');
    currentFontCol = getFontColor();
    console.log("Background color: " +currentCol); 
    console.log("Font color: "+currentFontCol); 
    
    var screenRange = height - window.innerHeight;
    
    // Background color values 
    var minCol = 60;
    var maxCol = 180; 
    var range = maxCol - minCol; 
    var colAmount = range/100; 
    
    // Font color values
    var minColFont = 150; 
    var maxColFont = 230; 
    var rangeFont = maxColFont-minColFont; 
    var colAmountFont = rangeFont/100; 
    
    
    var max = 100;
    var value = (document.documentElement.scrollTop/screenRange)*max;
    
    
    newColVal = Math.floor(minCol+colAmount*value);
    
    newFontColVal = Math.floor(minColFont+colAmountFont*value); 
    document.body.style.backgroundColor = "rgb("+ newColVal + "," + newColVal + "," + newColVal+")"; 
    
    document.body.style.color = "rgb("+ newFontColVal + "," + newFontColVal + "," + newFontColVal+")"; 
}
   

window.onresize = function(){
    //console.log("Resizing window"); 
    height = Math.max(body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    //console.log("New height value = " + height); 
}

function getFontColor (){
    var col = body.style.color; 
    //alert(body.style.color);
   // console.log(col); 
    return col; 
}

// Gets the color of the body background... // 
function getStyle(elem, name)
{
    if (document.defaultView && document.defaultView.getComputedStyle)
    {
        name = name.replace(/([A-Z])/g, "-$1");
        name = name.toLowerCase();
        s = document.defaultView.getComputedStyle(elem, "");
        return s && s.getPropertyValue(name);
    }
    
    

    else if (elem.currentStyle)
    {
        if (/backgroundcolor/i.test(name))
        {
            return (function (el)
            { // get a rgb based color on IE
                var oRG=document.body.createTextRange();

                oRG.moveToElementText(el);

                var iClr=oRG.queryCommandValue("BackColor");

                return "rgb("+(iClr & 0xFF)+","+((iClr & 0xFF00)>>8)+","+
                        ((iClr & 0xFF0000)>>16)+")";
            })(elem);
        }

        return elem.currentStyle[name];
    }

    else if (elem.style[name])
    {
        return elem.style[name];
    }

    else
    {
        return null;
    }
}