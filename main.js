



/* document.body.innerText = 'Hello World'; */

// Nullish coalescing Operator (para lidar com valor nulo)

/* const idade27 = 27;

document.body.innerText = 'Sua idade é: '+ idade27; */

//retorna 27

/* const idade0 = 0;

document.body.innerText = 'Sua idade é: '+ idade0; */

//retorna 0

/* const idadenull = null;

document.body.innerText = 'Sua idade é: '+ idadenull; */

//retorna null

//para o JS 0, '', [], false, undefined, null => falsy (não validos)

/* const idadeno = 0;

document.body.innerText = 'Sua idade é: ' + (idadeno ?? 'Não informado'); */


// Objetos

/* const user = {
  name: 'Diego',
  nickname: 'Schell',
  age: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
}; */

/* document.body.innerText = ('name' in user); */

//in indentifica se há um elemento dentro de um obejto

/* document.body.innerText = Object.keys(user); */
//retorna um vetor com as "chaves" do objeto

/* document.body.innerText = Object.values(user); */
//retorna um vetor com os valores do objeto


//para objetos mais "complexos" usar JSON para melhor visualização dos valores

/* document.body.innerText = JSON.stringify(Object.values(user));


document.body.innerText = JSON.stringify(Object.entries(user)); */
// .entries serve apra ver as chaves e os keys em vetores


// Desestruturação



/* const {address, age: age, nickname = 'Fernandes' } = user; */
//é priorizado o settado no objeto, mas caso não haja nada, pode ser add

/* document.body.innerText = JSON.stringify({address, age, nickname });

function mostraage({age}){
  return age;
}

document.body.innerText = mostraage(user); */


//REST operator

//const {name,age, ...rest } = user;

//document.body.innerText = JSON.stringify(rest);
// retorna o resto das propiedades menos as ditas anteriormente 

/* const array = [1,2,3,4,5,6,7,8,9,10];
const [first, ,third, ...rest] = array;

document.body.innerText = JSON.stringify({first, third, rest}); */


//SHORT SYNTAX

/* const name2 = 'Diego';
const age2 = 27;

const user2 = {
name2,
age2,
};

document.body.innerText = JSON.stringify(user2); */


//Optional Chaining

/* const user3 = {
  name: 'Diego',
  age: 27,
  address: {
    street: 'Rua 3',
    number: 123,
    zip: {
      code: '891600008',
      city: 'Rio do Sul'
    },
    showFullAddress(){
      return 'ok';
    }
  },
};

document.body.innerText = user3.address?.showFullAddress?.() ?? 'Não Informado'; */




//Métodos importantes JS: map, filter, every,some,find,findIndex,reduce



// Método de percorrer array
/* const array2 = [1,2,3,4,5]; */

//for (const i of array){
//  document.body.innerText += i;
//};

//array2.forEach(item => {
//  document.body.innerText += item;
//})

//quando se quer trbalhar com os valores do array é melhor utilizar o map

//map ()
/* const novoArray = array2.map(
  item => {
   return item * 2;
  }
);

document.body.innerText = JSON.stringify(novoArray); */

//só uso o map quando eu quero mudar o valor dos itens de um array sem modificar a quantidade de itens
//map pode ser usado com um if 

/* const novoArray2 = array2.map(
  item =>{
  if (item % 2 == 0){
    return item *10;
  }
  return item;
}
);

document.body.innerText = JSON.stringify(novoArray2); */


//Filter

/* const novoArray3 = array2.filter(item => item %2 != 0);

document.body.innerText = JSON.stringify(novoArray3); */

//é possivel se utilizar mais de um metodo em um array

/* const novoArray4 = array2
.filter(item => item %2 !=0)
.map(item => item * 10)

document.body.innerText = JSON.stringify(novoArray4); */

//every()

/* const array3 = [1,2,3,4,5,'texto'];

const todosItensSaoNumeros = array3.every(item  => {
  return typeof item == 'number';
});
document.body.innerText = JSON.stringify(todosItensSaoNumeros); */


//some()
// funciona como o every mas retorna true se pelo menos um condizer ao requesito

/* const peloMenosUmItemNaoEumNumero = array3.some(
  item =>{
    return typeof item != 'number';
  }
);

document.body.innerText = JSON.stringify(peloMenosUmItemNaoEumNumero); */

//find() e findindex()
// o find encontra UM item do array

/* const par = array.find(item => item % 2 == 0);
document.body.innerText = JSON.stringify(par); */
// mostra o primieiro item que satisfaça a condição
// o index faz  a mesma coisa mas retorna em qual index do array está 


//reduce()

/* const soma = array2.reduce((acc, item)=>{
  return acc + item;
}, 0);

document.body.innerText = JSON.stringify(soma); */

//Template Literals

/* const name3 = "";
const message = `Bem-Vindo, ${name3 ? name3 : 'visitante'}`;

document.body.innerText = message; */

// Promises

// .then/ .cathc

/* const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

somaDoisNumeros(4, 3)
.then(soma =>{
  document.body.innerText = soma
})
.catch(err => {
  console.log(err)
}) */



// exemplo mais prático

//fetch('https://api.github.com/users/Zerfallener-Succellus')

// o then abaixo tem um problema de ter muitos then juntos, isso acbaa formando uma cascata
/* .then(response => {
  response.json().then(body =>{
    console.log(body);
  })
}) */


// forma mais correta
/* .then(response => {
  return response.json();
})
.then(body => {
console.log(body)
})
.catch(err =>{
  console.log(err)
}) */


//forma mais "bela em termos de sintaxe"



/* async function buscaDadosNoGithub() {
  try{
    const response = await fetch('https://api.github.com/users/Zerfallener-Succellus');
    const body = await response.json();

    console.log(body);
    return body.name;
  } catch (err){
    console.log(err);
  } finally {
    console.log('running :p')
  }
}


buscaDadosNoGithub().then(name => {
console.log(name)
});
 */


