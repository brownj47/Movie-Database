const express = require('express')
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'movies_db'
      }, 
      console.log(`database movies_db connected`)
)

//movies
app.get('/api/movies', function(req, res){
    console.log(req.body)
    db.query('SELECT * FROM movies;', (err, data)=>{
        if (err){
            console.log(err)
        }
        res.json(data)
    })

})
app.get('/api/movies/reviews', function(req, res){
    console.log(req.body)
    db.query('SELECT * FROM movie_reviews;', (err, data)=>{
        if (err){
            console.log(err)
        }
        res.json(data)
    })

})
app.post('/api/add-movie', function(req, res){ //add a movie
    console.log(req.body)
    const value1 = req.body.title

    console.log(value1)
    db.query('INSERT INTO movies(movie_name) VALUES (?);', value1,  (err, data)=>{
        if (err){
            console.log(err)
        }
        res.json(data)
    })
})
app.put('/api/update-review/:id', function(req, res){ //add a review
    console.log(req.body)
    console.log(req.params.id)

    const value1 = req.body.text
    const value2 = req.params.id

    console.log(value1)
    db.query('UPDATE movie_reviews SET review_text = ? WHERE id = ?;', [value1,value2],  (err, data)=>{
        if (err){
            console.log(err)
        }
        res.json(data)
    })


    // db.query('INSERT INTO movie_reviews(review_text, movie_id) VALUES ("I hated it ", 1),', value,  (err, data)=>{
    //     if (err){
    //         console.log(err)
    //     }
    //     res.json(data)
    // })
})
app.delete('/api/movies/:id', function(req, res){ //add a review
    console.log(req.params.id)
    const value2 = req.params.id
    db.query('DELETE FROM movies WHERE id = ?;', [value2],  (err, data)=>{
        if (err){
            console.log(err)
        }
        res.json(data)
    })


    // db.query('INSERT INTO movie_reviews(review_text, movie_id) VALUES ("I hated it ", 1),', value,  (err, data)=>{
    //     if (err){
    //         console.log(err)
    //     }
    //     res.json(data)
    // })
})


app.listen(PORT, console.log(`Listening on PORT http://localhost:${PORT}`))