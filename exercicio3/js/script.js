const botao = document.querySelector('.add');

function somar(){
    const div = document.querySelector("div");
    const total = Number(div.innerText) + 1;
    if(total <= 10){
        div.innerText = total;
    }else{
        console.log('CHEGAAAA');
    }
}

if(botao){
    botao.addEventListener('click', somar);
}
