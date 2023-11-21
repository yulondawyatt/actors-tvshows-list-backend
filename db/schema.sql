DROP DATABASE IF EXISTS actors_tvshow_db;
CREATE DATABASE actors_tvshow_db;

\c actors_tvshow_db;

CREATE TABLE actors_tb (
    actors_id serial PRIMARY KEY,
    fname VARCHAR(15) NOT NULL,
    surname VARCHAR(15) NOT NULL,
    gender CHAR(1),
    birthdate DATE,
    num_tv_seen INT NOT NULL CHECK (num_tv_seen >= 2)
    );

