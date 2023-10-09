console.log(document.title);


const lista = document.querySelector('.infocard')

console.log(lista)

const title_mod = document.getElementById('gen-1');

title_mod.innerHTML='Generasión 1 Pokimon';





const element =document.getElementsByTagName('div');

element[2].style.background = 'red';


const urlDoc = document.URL;

console.log(urlDoc);

const dominio = document.domain;

console.log(dominio);

const imgnodes=document.getElementsByTagName('img');

console.log(imgnodes);



const x = document.getElementsByTagName('img');
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
    }



const y = document.querySelectorAll('.infocard-lg-data text-muted');
    for (j = 0; j < y.length; j++) {
        y[j].style.backgroundColor = 'green';
    }


const z = document.getElementsByClassName('.itype flying');
    for (k = 0; k < z.length; k++) {
        z[k].style.backgroundColor = 'blue';
    }
  

