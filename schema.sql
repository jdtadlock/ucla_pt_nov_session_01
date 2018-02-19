USE ucla_01;

DROP TABLE IF EXISTS notes;

CREATE TABLE notes(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(250),
  details TEXT,
  created_at TIMESTAMP default current_timestamp
);