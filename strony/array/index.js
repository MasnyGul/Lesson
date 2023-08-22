const btn=document.querySelector('button');
const rez=document.querySelector('input');
const odp=document.querySelector('p');
const min=document.querySelector('#min');
const pl=document.querySelector('#plus')
const licz=document.querySelector('h5')
const cos=document.querySelector('.cos')
const array=[];
var stachu="";
pl.addEventListener('click', () => {
    
    if(document.querySelector('h5').innerHTML<10)
    {
    if(rez.value!=''){
    array.push(rez.value);    
    rez.value='';
    var liczba=document.querySelector('h5').innerHTML;
    liczba++;
    licz.innerHTML=liczba;
    console.log(liczba);     
    console.log(array)
    stachu="";
    for(let i=0;i<array.length;i++){
        stachu=stachu + "<p>"+array[i]+"</p>";
    };
    cos.innerHTML=stachu;
    }
    }
    else 
    rez.value='';  
})

min.addEventListener('click', () => {
    rez.value='';
    if(document.querySelector('h5').innerHTML>1)
    {
    array.pop();
    var liczba=document.querySelector('h5').innerHTML;
    liczba--;
    licz.innerHTML=liczba;
    console.log(liczba);
    console.log(array);
    
    
    stachu="";
    for(let i=0;i<array.length;i++){
        stachu=stachu + "<p>"+array[i]+"</p>";
    };
    cos.innerHTML=stachu;
    }
    else
    rez.value='';  
    
})



btn.addEventListener('click', () => {
    if(rez.value!='')
    {
    array.push(rez.value);
    odp.innerHTML=array;
    console.log(array);
    stachu="";
    for(let i=0;i<array.length;i++){
        stachu=stachu + "<p>"+array[i]+"</p>";
    };
    cos.innerHTML=stachu;
    }
    else
    odp.innerHTML=array;

    array.length=0;
    console.log(array);
    rez.value='';
});

