const createTable = (arr, board) => {
  arr.forEach((el) => {
    board.insertAdjacentHTML('afterend',
      `<tr data-id="${el.id}" data-title="${el.title}" data-year="${el.year} data-imdb="${el.imdb}">
  <td>${el.id}</td>
  <td>${el.title}</td>
  <td>${el.year}</td>
  <td>${el.imdb}</td>
  </tr>`);
  });
};
export default createTable;
