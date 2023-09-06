const body=document.querySelector('body');
const card=document.querySelector('.card');
const zdj=document.querySelector('.zdj');
const cream=document.querySelector('.cream');

var x=1;


function git(){
    switch(x){
    case 1:
        zdj.src="lod1.png";
        cream.src="jo1.png"
        body.style.setProperty('--bg','rgb(237, 206, 149)');
    break;
    case 2:
        zdj.src="lod2.png";
        cream.src="jo2.png"
        body.style.setProperty('--bg','rgb(255, 141, 141)');
    break;
    case 3:
        zdj.src="lod3.png";
        cream.src="jo3.png"
        body.style.setProperty('--bg','rgb(223, 74, 102)');
    break;
    }
    if(x>=3){
        x=0;
    }
    card.style.marginLeft="35vw";
}

function lud(){
    card.style.marginLeft="100vw"
    x++;
    setTimeout(git,1000)
};
setInterval(lud,8000)