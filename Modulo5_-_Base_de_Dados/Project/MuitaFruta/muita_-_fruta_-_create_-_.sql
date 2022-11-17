-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema muita__fruta
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema muita__fruta
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `muita__fruta` DEFAULT CHARACTER SET utf8 ;
USE `muita__fruta` ;

-- -----------------------------------------------------
-- Table `muita__fruta`.`inscrição`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `muita__fruta`.`inscrição` (
  `id_inscrição` INT NOT NULL,
  `Data_de_inscrição` DATE NULL,
  `Tipo` ENUM("Produtor", "Cliente") NULL,
  PRIMARY KEY (`id_inscrição`),
  UNIQUE INDEX `id_inscrição_UNIQUE` (`id_inscrição` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `muita__fruta`.`produtor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `muita__fruta`.`produtor` (
  `id_Produtor` INT NOT NULL,
  `Nome` VARCHAR(200) NULL,
  `Localidade` VARCHAR(200) NULL,
  `Produto` VARCHAR(200) NULL,
  `Nif` VARCHAR(45) NULL,
  `id_inscrição` INT NOT NULL,
  PRIMARY KEY (`id_Produtor`),
  UNIQUE INDEX `id_Produtor_UNIQUE` (`id_Produtor` ASC) VISIBLE,
  UNIQUE INDEX `id_inscrição_UNIQUE` (`id_inscrição` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `muita__fruta`.`Delegação`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `muita__fruta`.`Delegação` (
  `id_Delegação` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(200) NULL,
  `Morada` VARCHAR(200) NULL,
  `horario_de_funcionamento` DATE NULL,
  PRIMARY KEY (`id_Delegação`),
  UNIQUE INDEX `idDelegação_UNIQUE` (`id_Delegação` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `muita__fruta`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `muita__fruta`.`Cliente` (
  `id_Cliente` INT NOT NULL,
  `Nome` VARCHAR(200) NULL,
  `Cidade` VARCHAR(50) NULL,
  `Telefone` VARCHAR(50) NULL,
  `Email` VARCHAR(45) NULL,
  `Nif` VARCHAR(50) NULL,
  `Codigo_Postal` VARCHAR(50) NULL,
  `TipoDeCesta` ENUM("Grande", "Pequena") NULL,
  `Estado` ENUM("Activo", "Inactivo") NULL,
  `id_inscrição` INT NOT NULL,
  `id_Delegação` INT NOT NULL,
  PRIMARY KEY (`id_Cliente`),
  UNIQUE INDEX `id_Cliente_UNIQUE` (`id_Cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `muita__fruta`.`Recolha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `muita__fruta`.`Recolha` (
  `id_Recolha` INT NOT NULL AUTO_INCREMENT,
  `data_de_recolha` DATE NULL,
  `Recolhido` TINYINT(1) NULL,
  `id_Delegação` INT NOT NULL,
  `id_Cliente` INT NOT NULL,
  PRIMARY KEY (`id_Recolha`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `muita__fruta`.`Delegação_Produtor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `muita__fruta`.`Delegação_Produtor` (
  `id_Delegação` INT NOT NULL,
  `id_Produtor` INT NOT NULL,
  PRIMARY KEY (`id_Delegação`, `id_Produtor`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
