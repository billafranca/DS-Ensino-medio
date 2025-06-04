CREATE DATABASE SistemaDocumentos;

USE SistemaDocumentos;

CREATE TABLE
    Categoria (
        id_categoria INT AUTO_INCREMENT PRIMARY KEY,
        nome_categoria VARCHAR(100) NOT NULL
    );

CREATE TABLE
    Documento (
        id_documento INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(150) NOT NULL,
        data_publicacao DATE NOT NULL,
        id_autor INT,
        id_categoria INT,
        FOREIGN KEY (id_autor) REFERENCES Autor (id_autor),
        FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria)
    );

INSERT INTO
    Categoria (nome_categoria)
VALUES
    ('Tecnologia'),
    ('Educação'),
    ('Saúde');

INSERT INTO
    Autor (nome_autor)
VALUES
    ('Pedro Braga'),
    ('Arthur Velozo'),
    ('Pedro Rodrigues');

INSERT INTO
    Documento (titulo, data_publicacao, id_autor, id_categoria)
VALUES
    ('Introdução à Programação', '2024-02-10', 1, 1),
    ('Metodologias de Ensino', '2023-11-05', 2, 2),
    ('Cuidados com a Saúde Mental', '2024-06-01', 3, 3),
    ('Redes de Computadores', '2025-01-15', 1, 1);

CREATE INDEX idx_titulo ON Documento (titulo);

CREATE INDEX idx_categoria ON Documento (id_categoria);

SELECT
    D.titulo,
    D.data_publicacao,
    A.nome_autor,
    C.nome_categoria
FROM
    Documento D
    JOIN Autor A ON D.id_autor = A.id_autor
    JOIN Categoria C ON D.id_categoria = C.id_categoria;

SELECT
    titulo
FROM
    Documento
    JOIN Categoria ON Documento.id_categoria = Categoria.id_categoria
WHERE
    nome_categoria = 'Tecnologia';

SELECT
    titulo
FROM
    Documento
    JOIN Autor ON Documento.id_autor = Autor.id_autor
WHERE
    nome_autor = 'Pedro Braga';