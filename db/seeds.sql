
USE movies_db;

INSERT INTO movies(movie_name)
VALUES ("Jaws"), 
("The Secret Life of Walter Mitty");

INSERT INTO movie_reviews(review_text, movie_id)
VALUES ("I hated it ", 1), 
("BEST MOVIE EVER!! ", 1), 
("Cute ", 2),
("Totally improbable plot. 1 star.", 2);
