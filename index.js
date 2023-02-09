

// Отправка при помощи xhr
// let xhr =new XMLHttpRequest()
// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/10')
// xhr.responseType='json'
// xhr.send()
// xhr.onload=function(){
//   console.log(xhr.response);
// }

// Добавление при помощи цепочки промисов
function fakeFetch(url, method = 'GET') {
  const xhr = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    xhr.open(method.toUpperCase(), url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject(`Error occured - status code ${xhr.status}`);
      }
    };
  });
}
fakeFetch('https://jsonplaceholder.typicode.com/todos/10')
  .then((res) => console.log(res),err=>console.log(err))


// Отправка через async await
async function fetchWithAwait (url) { 
let res= await fetch(url);
 if(res.ok){
  let json= await res.json()
  console.log(json);
 }
}
// Отправка через Fetch
// fetch('https://jsonplaceholder.typicode.com/todos/10')
//   .then(res=>res.json())
//     .then(res=>console.log(res))

//Отправка через axios
// axios.get('https://jsonplaceholder.typicode.com/todos/10').then(res=>console.log(res.data))
