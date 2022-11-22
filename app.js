let pictures=['sn1.jpg','sn2.jpg','sn3.jpg','sn4.jpg','sn5.jpg'];
let descrptions=
['description for Picture 1',
'description for Picture 2',
'description for Picture 3',
'description for Picture 4',
'description for Picture 5',
]

let picture=document.getElementById('pic');
let description=document.getElementById('desc');
let index=0;

function rightClick(){
    if(index<pictures.size-1){
    index++;
    }
    else index=0;
    showPicture();
}

function leftClick(){
    if(index<=0){
        index=pictures.lenght-1;
    }
    else 
    index--;
    showPicture();
}
function showPicture(){
    description.innerText=description[index];
    
}
