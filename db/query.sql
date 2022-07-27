USE movies_db;

SELECT * FROM movies;
SELECT * FROM movie_reviews;

UPDATE movie_reviews
SET review_text = ?
WHERE id = ?;

DELETE FROM movies
WHERE id = ?;