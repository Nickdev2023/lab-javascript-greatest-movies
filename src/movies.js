// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const map1 = moviesArray.map((moviesArray) => moviesArray.director);

  return map1;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const spielbergDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.inculdes("Drama")
    );
  });
  return spielbergDramas.length;

  //   const map1 = moviesArray.filter(
  //     (type) => type.director === "Steven Spielberg"
  //   );
  //   const map2 = map1.filter((type) => (type.genre = "Drama"));
  //   return map2.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = moviesArray.reduce((acc, movie) => {
    if (!movie.score) {
      return acc;
    }
    return (acc += movie.score);
  }, 0);
  return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.inculdes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = [...moviesArray];
  copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
    }
    return a.year - b.year;
  });
  return copy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copy = [...moviesArray];
  copy = copy.map((movie) => movie.title);
  copy.sort((a, b) => {
    return a.title.localeCompare(b, undefined, { sensitivity: "base" });
  });
  return copy.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
