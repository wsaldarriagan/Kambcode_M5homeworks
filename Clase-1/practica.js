// Tarea Clase 1

// Punto 1. Acceso y Modificación Básica de Datos
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

// Item 1. 
console.log('El autor del segundo libro es: ',libros[1].autor);

// Item 2. 
libros[0].paginas = 350
console.log('El nuevo numero de paginas del libro 1 es : ',libros[0].paginas);

// Item 3. 
console.log(`EL primero libro tiene como titulo: ${libros[0].titulo}, su autor es: ${libros[0].autor} y cuenta con ${libros[0].paginas} paginas`);

// Item 4. 
const arrayTitulosAutores = libros.map((libro)=> ({ titulo: libro.titulo, autor: libro.autor } ));
console.log('Arreglo de Titulos y Autores',arrayTitulosAutores);

// Punto 2: Cálculo de Estadísticas Básicas
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

// Item 1
let sumaEdades = 0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad
}
console.log('La sumatoria de edades es: ', sumaEdades);

// Item 2
let promedioEdades = sumaEdades / estudiantes.length
console.log(`El promedio de edades de los estudiantes es: ${promedioEdades}`);

// Item 3
console.log(`La suma de las edades de los estudiantes es: ${sumaEdades} y el promedio de edades de los estudiantes es: ${promedioEdades}`);

// Punto 3: Búsqueda y Filtrado de Datos
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

// Item 1
const productosCategoria = productos.filter((producto) => producto.categoria.includes('Ropa'))
console.log('Los productos de la categoria Ropa son: ',productosCategoria);

// Item 2
const preciosMayores = productos.filter((producto) => producto.precio > 30)
console.log('Los productos con precio mayor a 30 son: ', preciosMayores);

// Reto Opcional
let mayorPromedio = estudiantes[0].promedio;
let estudianteMayorPromedio = estudiantes[0];

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > mayorPromedio ){
        mayorPromedio = estudiantes[i].promedio;
        estudianteMayorPromedio = estudiantes[i];
    }     
}
console.log('El estudiante con mayor promedio es: ', estudianteMayorPromedio)