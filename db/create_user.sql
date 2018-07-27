INSERT INTO langusers (email, password)
VALUES($1, $2)
RETURNING *;