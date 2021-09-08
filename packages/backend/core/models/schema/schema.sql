create schema if not exists core;

alter schema core owner to postgres;

create schema if not exists app;

alter schema app owner to postgres;

create extension if not exists "uuid-ossp";
