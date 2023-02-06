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
  function success() {
    let xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), url);
    xhr.responseType = 'json';
    xhr.send();
    return xhr;
  }
  const errHandler = () => console.log('Ошибка');
  return new Promise(function (resolve, reject) {
    resolve(success);
    reject(errHandler);
  });
}
fakeFetch('https://jsonplaceholder.typicode.com/todos/10')
  .then(res=>res())
  .then(res=>{
    res.onload=function () { 
      console.log(res.response);
    }
  })
    