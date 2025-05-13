CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `idade` int(11) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
);
