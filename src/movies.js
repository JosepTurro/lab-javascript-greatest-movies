// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director );
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const spielbergMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    } 
//    const valorInicial = 0;
   const sum = moviesArray.reduce((acumulador, valorActual) => {
    if (!valorActual.score){
        return acumulador;
    } else{
        return acumulador + valorActual.score;}
   } ,0);
    

   let scoreAvarage= Math.round(sum/moviesArray.length * 100)/100;
   return scoreAvarage;
   
  

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // if (moviesArray.length === 0){
    //     return 0;
    // } 

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    

    const sum = dramaMovies.reduce((acumulador, valorActual) => {
        if (!valorActual.score){
            return acumulador;
        } else{
            return acumulador + valorActual.score;}
       } ,0);

       
        if (dramaMovies.length === 0){
            return 0;

        }
    
       let DramaScoreAvarage= Math.round(sum/dramaMovies.length * 100)/100;
       return DramaScoreAvarage;
       

 
//     if (moviesArray.length === 0 && !movie.genre.includes("Drama") ){
//         return 0;
//     }else if ( movie.genre.includes("Drama")){
//    const valorInicial = 0;
//    const sum = moviesArray.reduce((valorPrev, valorActual) => valorPrev + valorActual.genre , 0);
//    let scoreAvarage= Math.round(sum/moviesArray.length * 100)/100;
//    return scoreAvarage;
   }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearArray = moviesArray.map((movie)=> movie);
    yearArray.sort((a, b) => a.year - b.year);
    let yearArrayT = yearArray.sort((a,b) => {
        if (a.year === b.year){
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            
        }
    })
        
    
    return yearArrayT;
    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphabeticArray = moviesArray.map((movie)=> movie.title);
    alphabeticArray.sort();
    alphabeticArray.sort((a,b) => {
        
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            
   
        
    });
    return alphabeticArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// const newArray = array.map(num =>

// const arr = [1, 2, 3];

// const numerosPares =  arr.filter((num)=>{

//     return num % 2 ===0;
// });

// console.log ('numerosPares', numerosPares)

// const numerosPrimos = arr.filter((num) =>{
//     return !(num % 2 === 0);
// }) 

// console.log ('numerosPimos', numerosPrim
