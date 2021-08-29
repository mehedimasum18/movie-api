fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
    .then(res => res.json())
    .then(data => setMovies(data.results))

    
const setMovies = (movies) => {
    const movieSpinner = document.getElementById('movie_spinner')
    movieSpinner.style.display="none"
    const movieContainer=document.getElementById("movie_container")
    for (const movie of movies) {
        const movieBox = document.createElement("div")
        movieBox.classList.add("col-md-3")
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
        movieBox.innerHTML = `
            <div>
                <img class="img-fluid p-3"  src="${imageUrl}" alt="">
                <div class="div shadow rounded p-3 m-2">
                    <h3>Title: ${movie.title}</h3>
                    <p>description: ${movie.overview.slice(0, 200)}</p>
                    <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary text-center">See Details </button>
                </div>
            </div>
        `
        movieContainer.appendChild(movieBox)
    }
}

const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
    
}

const setMovieDetails = (movie) => {
    console.log(movie)
    const movieDetails = document.getElementById("movie_details")
    movieDetails.innerHTML = ""
    const movieBox = document.createElement("div")
    movieBox.innerHTML = `
    <h3>title: ${movie.original_title} </h3>
    
    `
    movieDetails.appendChild(movieBox)
    
}