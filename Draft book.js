// for (let i = 0; i < 2; i++) {
//     const A = prompt("Один из последних просмотренных фильмов?", ""),
//           B = prompt("На сколько оцените его?", "");

//     if (A != null && B !=null && A != "" && B != "" && A.length < 50) {
//         personalMovieDB.movies[A] = B;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }

// let num = 0;

// while (num < 2) {
//     const A = prompt("Один из последних просмотренных фильмов?", ""),
//           B = prompt("На сколько оцените его?", "");

//     if (A != null && B != null && A != "" && B != "" && A.length < 50) {
//         console.log("done");
//         num++;
//     } else {
//         console.log("error");
//         num--;
//     }
// }

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };

// let num = 0;

// do {
//     const A = prompt("Один из последних просмотренных фильмов?", ""),
//           B = prompt("На сколько оцените его?", "");

//     if (A != null && B != null && A != "" && B != "" && A.length < 50) {
//         personalMovieDB.movies[A] = B;
//         console.log("done");
//         num++;
//     } else {
//         console.log("error");
//         num--;
//     }
// }
// while (num < 2);

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов", "")
// }else if (personalMovieDB.count < 30){
//     console.log("Вы классический зритель", "")
// }else if (personalMovieDB.count >= 30){
//     console.log("Вы киноман", "")
// }else {
//     console.log("Произошла ошибка", "")
// }
