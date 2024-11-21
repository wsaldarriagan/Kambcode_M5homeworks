# Calculadora CLI

## Descripción

Este proyecto es una calculadora básica que funciona en la línea de comandos (CLI). Permite realizar operaciones aritméticas simples como **suma**, **resta**, **multiplicación** y **división** usando **Node.js**.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado **Node.js** en tu sistema. Puedes verificar si Node.js está instalado ejecutando:

```bash
node -v
```
Si no está instalado, puedes descargarlo desde [Node.js](https://nodejs.org/), la versión con la que esta construido es **22.11.0**

## Instalación
1. Clona este repositorio (o descarga los archivos):
```bash
git clone https://github.com/tu-usuario/calculadora.git

cd calculadora
```
2. Instala las dependencias (aunque en este caso no hay dependencias externas):

```bash
npm install
```

## Uso

Para utilizar la calculadora desde la línea de comandos, ejecuta el siguiente comando:

```bash
node calculadora.js numero1 operacion numero2
```

### Ejemplos
#### 1. Suma
```bash
    node calculadora.js 5 + 3
```
**Resultado:** 8

#### 2. Resta
```bash
    node calculadora.js 10 - 4
```
**Resultado:** 6

#### 3. Multiplicación
```bash
    node calculadora.js 7 * 2
```
**Resultado:** 14

#### 4. División
```bash
    node calculadora.js 20 / 5
```
**Resultado:** 4

### Notas importantes:
- No se permiten divisiones por cero (0) ni multiplicaciones por cero (0).
- Si los argumentos proporcionados no son válidos o hay información faltante, la calculadora mostrará un mensaje de error.

## Estructura del proyecto
```go
calculadora/
├── calculadora.js
├── package.json
└── README.md
```

## Licencia
Este proyecto está bajo la licencia ISC.