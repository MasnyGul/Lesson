const display=document.querySelector('.display');
var blocks=3;
function direction(){
    const direction=document.querySelector('#Direction').value;
    display.style.flexDirection=direction;
}
function wrap(){
    const wrap=document.querySelector('#wrap').value;
    display.style.flexWrap=wrap;
}
function justify(){
    const Justify=document.querySelector('#Justify').value;
    display.style.justifyContent=Justify;
}
function items(){
    const items=document.querySelector('#items').value;
    display.style.alignItems=items;
}
function content(){
    const content=document.querySelector('#content').value;
    display.style.alignContent=content;
}

function Add(){
    if(blocks<20){
        var div=document.createElement("div");
        display.appendChild(div);
        blocks++;
    }
}

function Remove(){
    if(blocks>3){
        console.log('remove')
        display.removeChild(display.lastChild);
        blocks--;
    }
}
function reset(){
    display.style.alignContent='flex-start';
    display.style.alignItems='flex-start';
    display.style.justifyContent='flex-start';
    display.style.flexWrap='wrap';
    display.style.flexDirection='row';

    const content=document.querySelector('#content').value='flex-start';
    const items=document.querySelector('#items').value='flex-start';
    const Justify=document.querySelector('#Justify').value='flex-start';
    const wrap=document.querySelector('#wrap').value='wrap';
    const direction=document.querySelector('#Direction').value='Row';

    while(blocks>3){
        blocks--;
        display.removeChild(display.lastChild);
    }
}
