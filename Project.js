'use strict'

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};



for (let i = 0; i < 2; i++){
    const A = prompt("Один из последних просмотренных фильмов?", ""),
          B = prompt("На сколько оцените его?", "");

    if (A != null && B !=null && A != "" && B != "" && A.length < 50) {
        personalMovieDB.movies[A] = B;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
alert("Просмотрено довольно мало фильмов", "")
}else if (personalMovieDB.count < 30){
alert("Вы классический зритель", "")
}else if (personalMovieDB.count >= 30){
alert("Вы киноман", "")
}else {
alert("Произошла ошибка", "")
}



console.log(personalMovieDB);