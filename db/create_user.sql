INSERT INTO langusers (email, passcode)
VALUES($1, $2)
RETURNING *;