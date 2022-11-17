-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema livros
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema livros
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `livros` DEFAULT CHARACTER SET utf8 ;
USE `livros` ;

-- -----------------------------------------------------
-- Table `livros`.`Livro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `livros`.`Livro` (
  `id_livro` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NULL,
  `editora` VARCHAR(200) NULL,
  `edicao` INT NULL,
  `ano` INT NULL,
  PRIMARY KEY (`id_livro`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `livros`.`Autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `livros`.`Autor` (
  `id_autor` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL,
  `nacionalidade` VARCHAR(50) NULL,
  PRIMARY KEY (`id_autor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `livros`.`Autoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `livros`.`Autoria` (
  `id_livro` INT NOT NULL,
  `id_autor` INT NOT NULL,
  PRIMARY KEY (`id_livro`, `id_autor`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
