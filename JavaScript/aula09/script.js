window.document.write("Adicionando componentes\n");

var p1 = window.document.getElementsByTagName('p')[0];
var p2 = window.document.getElementsByTagName('p')[1];
var b = window.document.querySelector('button');

p1.style.color = 'blue';
b.style.color = 'white';
b.style.background = 'red';

document.write(`\nO primeiro paragráfo é: ${p1.innerText}`);
document.write(`\nO segundo paragráfo é: ${p2.innerText}`);

