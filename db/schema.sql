

DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;


CREATE TABLE movies(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE movie_reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
);