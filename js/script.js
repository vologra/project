'use strict';

const number0Films = +prompt ('сколько фильмов просмотрено?', '');

const personalMovieDB = {
    count : number0Films,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};
const a = prompt ('какой фильм посмотрели?',''),
      b = prompt ('как оцените его?',''),
      c = prompt ('какой фильм посмотрели?',''),
      d = prompt ('как оцените его?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);

      