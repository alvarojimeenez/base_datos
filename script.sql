create database empresa; 
use empresa; 

create table cliente (
    id_cliente varchar(10), 
    nombre varchar(20),
    apellido varchar(20),
    constraint PK_CLIENTE primary key id_cliente
);

create table pedido(
    id_pedido varchar(10), 
    descripcion_pedido(100), 
    constraint PK_PEDIDO primary key id_pedido
);

create table articulo(
    id_articulo varchar(10),
    descripcion_articulo varchar(100), 
    nombre_articulo varchar(20),
    constraint PK_ARTICULO primary key id_articulo
);

create table realiza(
    id_cliente varchar(10),
    id_pedido varchar(10),
    constraint PK_REALIZA primary key (id_cliente,id_pedido),
    constraint FK_REALIZA foreign key id_cliente references cliente(id_cliente),
    constraint FK_REALIZA1 foreign key id_pedido references pedido(id_pedido)
);

create table tiene(
    id_pedido varchar(10),
    id_articulo varchar(10),
    constraint PK_TIENE primary key (id_pedido,id_articulo),
    constraint FK_TIENE foreign key id_pedido references pedido(id_pedido),
    constraint FK_TIENE1 foreign key id_articulo references articulo(id_articulo)  
);