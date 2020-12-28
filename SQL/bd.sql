create database recode;

create table monitores(
    id int not null primary key AUTO_INCREMENT,
    nome varchar(60),
    email varchar(60),
    senha varchar(32)
);

insert monitores(nome, email, senha) value("Gui," "gui@recode.org.br", 12345)