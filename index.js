// Отправка при помощи xhr
let xhr =new XMLHttpRequest()
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/10')
xhr.responseType='json'
xhr.send()
xhr.onload=function(){
  console.log(xhr.response);
}