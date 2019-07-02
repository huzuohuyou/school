function blinklink()
{
if (!document.getElementById('blink').style.color)
 {
 document.getElementById('blink').style.color="red"
 }
if (document.getElementById('blink').style.color=="red")
 {
 document.getElementById('blink').style.color="black"
 }
else
 {
 document.getElementById('blink').style.color="red"
 }
timer=setTimeout("blinklink()",300)
}

function stoptimer()
{
clearTimeout(timer)
}