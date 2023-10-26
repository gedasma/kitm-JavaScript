let count = 2;

console.log(count + 1)

let movie = "movie from hollywood title is \"Matrix\""

console.log(movie)

console.log(`string's lengh is : ${movie.length}`)

console.log(`string's first 2 and 3 chracters are: ${movie.slice(1,3)}`)

console.log(movie.indexOf("vie"))


movie = movie.replace("\"Matrix\"", "Transformers")
console.log(movie)

movieWords = movie.split(' ');
movie = movie.replace(movieWords[2], "bollywood")
console.log(movie)

movieWords.unshift("greatest")
newString = movieWords.join(' ');
console.log(newString)


const language = "en";
switch(language){
    case "lt":
        console.log("sveiki");
        break;
    case "en":
        console.log("hello");
        break;
    default:
        console.log("nesupratau kalbos");
}

let weather = 20;
let userName = weather > 19 ? "Andrius":"Karolis"
console.log(userName)