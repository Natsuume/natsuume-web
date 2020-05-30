create table information(
    info_id         serial  primary key,
    content         text    not null,
    uploaded     date    not null,
    thumbnail_url   text    default null
);

create table book(
    isbn    varchar(13)  primary key
);

create table paper(
    paper_id    serial      primary key,
    title       text not null,
    author      text not null,
    media       text        not null,
    year        varchar(4)        not null
)