import sortIdUp from './components/Sort';
import sortIdDown from './components/Sort';
import createTable from './components/CreateTable';

const board = document.querySelector('.board tr');

const movies = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const deleteTable = () => {
  while (board.nextElementSibling) {
    board.nextElementSibling.remove(board.nextElementSibling);
  }
};

const arrow = (name) => {
  const elementArrow = document.querySelector(name);
  return elementArrow;
};

const sortTable = () => {
  let counter = 0;

  setInterval(() => {
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdUp('id'));
      arrow('[data-head=id]').textContent = 'id ↓';
      arrow('[data-head=imdb]').textContent = 'imdb';
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      arrow('[data-head=id]').textContent = 'id ↑';
      movies.sort(sortIdDown('id'));
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdUp('title'));
      arrow('[data-head=id]').textContent = 'id';
      arrow('[data-head=title]').textContent = 'title ↓';
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdDown('title'));
      arrow('[data-head=title]').textContent = 'title ↑';
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdUp('year'));
      arrow('[data-head=title]').textContent = 'title';
      arrow('[data-head=year]').textContent = 'year ↓';
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdDown('year'));
      arrow('[data-head=year]').textContent = 'year ↑';
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdUp('imdb'));
      arrow('[data-head=year]').textContent = 'year';
      arrow('[data-head=imdb]').textContent = 'imdb ↓';
      createTable(movies, board);
    }, counter += 2000);
    setTimeout(() => {
      deleteTable();
      movies.sort(sortIdDown('imdb'));
      arrow('[data-head=imdb]').textContent = 'imdb ↑';
      createTable(movies, board);
    }, counter += 2000);
  }, counter);
};

sortTable();

export default movies;
