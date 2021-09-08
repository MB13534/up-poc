create schema if not exists core;

alter schema core owner to web_admin;

create schema if not exists app;

alter schema app owner to web_admin;

create extension if not exists "uuid-ossp";
