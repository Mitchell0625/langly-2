INSERT INTO langusers (name, email, passcode)
VALUES($1, $2, $3)
RETURNING *;