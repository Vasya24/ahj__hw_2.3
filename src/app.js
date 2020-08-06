let cont = document.querySelector('.container');


let xhr = new XMLHttpRequest();
xhr.open('GET', 'src/data.json');
xhr.responseType = 'json'

xhr.send()

xhr.onload = () => {

      
    let c = `<table id="table">
    <tr>
    <td class="td">Айди <i class="fa fa-long-arrow-down" aria-hidden="true" id="arrow"></i></td>
    <td class="td">Название</td>
    <td class="td">Год выхода</td>
    <td class="td">Рейтинг на imdb</td>
    </tr>
    <tr class="row">
    <td class="td">${xhr.response[0].id}</td>
    <td class="td">${xhr.response[0].title}</td>
    <td class="td">${xhr.response[0].year}</td>
    <td class="td">${xhr.response[0].imdb}</td>
  </tr>
  <tr class="row">
  <td class="td">${xhr.response[1].id}</td>
  <td class="td">${xhr.response[1].title}</td>
  <td class="td">${xhr.response[1].year}</td>
  <td class="td">${xhr.response[1].imdb}</td>
</tr>
<tr class="row">
<td class="td">${xhr.response[2].id}</td>
<td class="td">${xhr.response[2].title}</td>
<td class="td">${xhr.response[2].year}</td>
<td class="td">${xhr.response[2].imdb}</td>
</tr>
<tr class="row">
<td class="td">${xhr.response[3].id}</td>
<td class="td">${xhr.response[3].title}</td>
<td class="td">${xhr.response[3].year}</td>
<td class="td">${xhr.response[3].imdb}</td>
</tr>
<tr class="row">
<td class="td">${xhr.response[4].id}</td>
<td class="td">${xhr.response[4].title}</td>
<td class="td">${xhr.response[4].year}</td>
<td class="td">${xhr.response[4].imdb}</td>
</tr>
  <table>`

  cont.innerHTML = c;
let arrow = document.getElementById("arrow");

arrow.onclick = () => {
  xhr.open('GET', 'src/data.json');
xhr.responseType = 'json'

xhr.send();
xhr.onload = () => {
  xhr.response.sort((prev, next) => prev.id - next.id);
  cont.innerHTML = c
}
}
}

