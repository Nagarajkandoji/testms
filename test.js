moviedata = 
[
    {"genre_ids":[14,12,28],
        "id":338953,
        "language":"en",
        "popularity":15444.286,
        "release_date":"2022-04-06",
        "title":"Fantastic Beasts: The Secrets of Dumbledore",
        "video":false,
        "vote_average":6.7,
        "vote_count":1191},
    {
        "genre_ids":[28,878,14],
        "id":526896,
        "language":"en",
        "release_date":"2022-03-30",
        "title":"Morbius",
        "video":false,
        "vote_average":6.4,
        "vote_count":1327},
    {
        "genre_ids":[28,12,35,10749],
        "id":752623,
        "language":"en",
        "popularity":6505.287,
        "release_date":"2022-03-24",
        "title":"The Lost City",
        "video":false,
        "vote_average":6.8,
        "vote_count":892},
    {
        "genre_ids":[28,14,35,10751,12,878],
        "id":675353,
        "language":"en",
        "popularity":5329.177,
        "release_date":"2022-03-30",
        "title":"Sonic the Hedgehog 2",
        "video":false,
        "vote_average":7.7,
        "vote_count":1771},
    {
        "genre_ids":[28,12,14,53],
        "id":639933,
        "language":"en",
        "popularity":4667.074,
        "release_date":"2022-04-07",
        "title":"The Northman",
        "video":false,
        "vote_average":7.4,
        "vote_count":1267},
    {
        "genre_ids":[28,12],
        "id":335787,
        "language":"en",
        "popularity":3158.23,
        "release_date":"2022-02-10",
        "title":"Uncharted",
        "video":false,
        "vote_average":7.2,
        "vote_count":2204},
    {
        "genre_ids":[80,9648,53],
        "id":414906,
        "language":"en",
        "release_date":"2022-03-01",
        "title":"The Batman",
        "video":false,
        "vote_average":7.8,
        "vote_count":4897},
    {
        "genre_ids":[14,28,12],
        "id":453395,
        "language":"en",
        "popularity":3012.636,
        "release_date":"2022-05-04",
        "title":"Doctor Strange in the Multiverse of Madness",
        "video":false,
        "vote_average":7.4,
        "vote_count":2015},
    {
        "genre_ids":[28,12,878],
        "id":634649,
        "language":"en",
        "popularity":2949.427,
        "release_date":"2021-12-15",
        "title":"Spider-Man: No Way Home",
        "video":false,
        "vote_average":8.1,
        "vote_count":13173},
    {   
        "genre_ids":[28,53,80],
        "id":864116,
        "language":"en",
        "popularity":2834.298,
        "release_date":"2022-03-04",
        "title":"A Day to Die",
        "video":false,
        "vote_average":5.6,
        "vote_count":30},{
        "genre_ids":[27],
        "id":836225,
        "language":"en",
        "popularity":2511.905,
        "release_date":"2022-02-10",
        "title":"The Exorcism of God",
        "video":false,
        "vote_average":6.8,
        "vote_count":191},
    {
        "genre_ids":[28,53],
        "id":628900,
        "language":"en",
        "popularity":2386.88,
        "release_date":"2022-03-10",
        "title":"The Contractor",
        "video":false,
        "vote_average":6.6,
        "vote_count":266},
    {
        "genre_ids":[16,10751,35,14],
        "id":508947,
        "language":"en",
        "popularity":2185.735,
        "release_date":"2022-03-10",
        "title":"Turning Red",
        "video":false,
        "vote_average":7.5,
        "vote_count":2289},{
        "genre_ids":[16,35,10751,80],
        "id":629542,
        "language":"en",
        "popularity":2031.629,
        "release_date":"2022-03-17",
        "title":"The Bad Guys",
        "video":false,
        "vote_average":7.8,
        "vote_count":539},{
        "genre_ids":[28,53,80],
        "id":818397,
        "language":"en",
        "popularity":3413.27,
        "release_date":"2022-04-28",
        "title":"Memory",
        "video":false,
        "vote_average":7.3,
        "vote_count":175},
    {
        "genre_ids":[878,12,28],
        "id":406759,
        "language":"en",
        "popularity":1962.191,
        "release_date":"2022-02-03",
        "title":"Moonfall",
        "video":false,
        "vote_average":6.5,
        "vote_count":1141},
    {   
        "genre_ids":[35,28],
        "id":785985,"language":"fr",
        "popularity":1777.113,
        "release_date":"2022-05-06",
        "title":"The Takedown",
        "video":false,
        "vote_average":5.9,
        "vote_count":182},
    {
        "genre_ids":[28,53,80],
        "id":763285,"language":"en",
        "popularity":1692.902,
        "release_date":"2022-03-16",
        "title":"Ambulance",
        "video":false,
        "vote_average":7,
        "vote_count":699},
    {   
        "genre_ids":[16,10751,35,12,9648],
        "id":420821,"language":"en",
        "popularity":1975.472,
        "release_date":"2022-05-18",
        "title":"Chip 'n Dale: Rescue Rangers",
        "video":false,
        "vote_average":7.1,
        "vote_count":359},
    {
        "genre_ids":[27],
        "id":893370,
        "language":"es",
        "popularity":1580.337,
        "release_date":"2022-04-21",
        "title":"Virus:32",
        "video":false,
        "vote_average":7.1,
        "vote_count":63}
]



// const movie_filtered = moviedata.filter(value=>{
//            return value.release_date === 'en'
//          });

// console.log(movie_filtered);


const express = require('express');
const app = express();

app.get('/products',(req,res)=>{ 

    console.log(req.query)

        let movie_filtered = moviedata.filter(movie=>{
        return movie.title === req.query.title
    })

    res.json(movie_filtered);
})


app.listen(4000,()=>{
    console.log("Server is at 4000")
})


// moviedata.forEach(elem => {
//     if(parseInt(elem.release_date.split('-')[0]) === 2021){
//         console.log(elem)
//     }
//     // console.log(elem.release_date.split('-')[0])

// });
// let movie = []
// moviedata.forEach(elem => {
//     if(elem.release_date.split('-')[0] === '2022'){
//         // movie = elem
//         movie.push(elem)
//     }
// });

// console.log(movie);