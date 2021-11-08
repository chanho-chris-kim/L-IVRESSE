const genreApi = '?api_key=47359816eaddb6638823a824dbadf6e0'; 
const movieGenreSelect = document.getElementById('movie__genre');
const dropMenuTitle = document.createElement('option');
const selectElement = document.getElementById('movie__genre');
const genreIDNumberInOrder = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]
let result = [];
let selectedGenreID = 0; 
let movieTitleBox = document.querySelector('.movie__title');
let movieDescriptionBox = document.querySelector('.movie__description');
let moviePosterBox = document.querySelector('.movie__poster-image');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let cocktailTitleBox = document.querySelector('.cocktail__title');
let cocktailDescriptionBox = document.querySelector('.cocktail__description');
let cocktailPosterBox = document.querySelector('.cocktail__poster-image');
let ingredients = [];
let cocktailIngredientsBox = ""
let resultCocktailID = [];

// displaying drop down box options
dropMenuTitle.setAttribute('value','genre');
movieGenreSelect.appendChild(dropMenuTitle)
dropMenuTitle.innerHTML = "Pick a genre";
const genreList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "TV Movie", "Thriller", "War", "Western"]
for(let i = 0; i < genreList.length; i++){
    const option = document.createElement('option');
    option.setAttribute('value','genre');
    option.value = String(i);
    movieGenreSelect.appendChild(option);
    option.innerHTML = genreList[i];
}
// listening to dropdown options. turn that value into genre ID and putting that ID number into selectedGenreID variable
selectElement.addEventListener('change', function(){
    selectedGenreID = genreIDNumberInOrder[selectElement.selectedIndex - 1]
    console.log(selectedGenreID);
    gettingMovieData(selectedGenreID);
});

function gettingMovieData(selectedGenreID){
    console.log(selectedGenreID);
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=47359816eaddb6638823a824dbadf6e0&with_genres=${selectedGenreID}`)
    .then(response => {
    console.log(response.data.results);

    for(let i = 0; i < response.data.results.length; i++){
    result.push({
        title : response.data.results[i].title,
        overview : response.data.results[i].overview,
        posterURL : `http://image.tmdb.org/t/p/w500${response.data.results[i].poster_path}`
    });
    }

    let randomNumber = Math.floor(Math.random()*10);
    displayMovie(result[randomNumber]);
})}

function gettingCocktailData(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response => {
    console.log(response);
    resultCocktailID = response.data.drinks
    console.log(resultCocktailID);
    randomNumber = Math.floor(Math.random()*20);
    searchForCocktailID(resultCocktailID[randomNumber].idDrink);
})
} 

function searchForCocktailID(id){

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
        ingredients = [];
        ingredients.push({
            item: response.data.drinks[0].strIngredient1,
            measure: response.data.drinks[0].strMeasure1
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient2 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient2,
            measure: response.data.drinks[0].strMeasure2
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient3 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient3,
            measure: response.data.drinks[0].strMeasure3
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient4 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient4,
            measure: response.data.drinks[0].strMeasure4
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient5 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient5,
            measure: response.data.drinks[0].strMeasure5
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient6 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient6,
            measure: response.data.drinks[0].strMeasure6
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient7 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient7,
            measure: response.data.drinks[0].strMeasure7
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient8 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient8,
            measure: response.data.drinks[0].strMeasure8
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient9 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient9,
            measure: response.data.drinks[0].strMeasure9
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient10 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient10,
            measure: response.data.drinks[0].strMeasure10
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient11 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient11,
            measure: response.data.drinks[0].strMeasure11
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient12 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient12,
            measure: response.data.drinks[0].strMeasure12
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient13 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient13,
            measure: response.data.drinks[0].strMeasure13
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient14 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient14,
            measure: response.data.drinks[0].strMeasure14
        });
        console.log(ingredients);
        if(response.data.drinks[0].strIngredient15 === null)
        {
            return displayCocktail(response.data.drinks[0]);
        }
        ingredients.push({
            item: response.data.drinks[0].strIngredient15,
            measure: response.data.drinks[0].strMeasure15
        });
        console.log(ingredients);
            return displayCocktail(response.data.drinks[0]);
    })
}

function displayMovie(movie){
    gettingCocktailData();
    movieTitleBox.innerText = movie.title
    movieDescriptionBox.innerText = movie.overview
    moviePosterBox.src = movie.posterURL
}

function displayCocktail(cocktail){
    console.log(cocktail);
    cocktailIngredientsBox = "";
    for(let i = 0; i < ingredients.length ; i ++){
        cocktailIngredientsBox = cocktailIngredientsBox + `${ingredients[i].item} ${ingredients[i].measure} `
    }
    cocktailTitleBox.innerText = cocktail.strDrink
    cocktailDescriptionBox.innerText = "Ingredients: " + cocktailIngredientsBox + "\n\n" + "Instructions: " + cocktail.strInstructions
    cocktailPosterBox.src = cocktail.strDrinkThumb
}

button1.addEventListener("click", () => {
    const ranNum = Math.floor(Math.random()*10);
    displayMovie(result[ranNum])
});

button2.addEventListener("click", () => {
    gettingCocktailData();
});

// title : response.data.drinks[i].strDrink,
// image : response.data.drinks[i].strDrinkThumb,
// ingredients : [response.data.drinks[0].strIngredient1,response.data.drinks[0].strIngredient2,response.data.drinks[0].strIngredient3],
// instructions : response.data.drinks[0].strInstructions,