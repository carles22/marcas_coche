// definición objeto primer coche
var nombre_apellidos;

var historialCar_1 = {
    marca: "null",
    modelo: "null",
    anyo: 0,
    antiguedad: 0,
    color: "null",
    }

// definición objeto segundo coche
var historialCar_2 = {
    marca: "null",
    modelo: "null",
    anyo: 0,
    antiguedad: 0,
    color: "null",
    }
    
// definicion objeto tercer coche
var historialCar_3 = {
    marca: "null",
    modelo: "null",
    anyo: 0,
    antiguedad: 0,
    color: "null",
    }

// solicitud al propietario de su nombre y apellidos

nombre_apellidos =  String(prompt("¿Cómo de llamas?"));
document.write = nombre_apellidos;

// solicitud al propietario de parámetros de su primer coche
historialCar_1["marca"] = String(prompt("¿De qué marca fue tu 1er coche?"));
historialCar_1["modelo"] = String(prompt("¿Qué modelo era?"));
historialCar_1["anyo"] = Number(prompt("¿En qué año salió al mercado?"));
historialCar_1["antiguedad"] = Number(prompt("¿Cuantos años lo disfrutaste?"));
historialCar_1["color"] = String(prompt("¿Qué color tenía?"));

// impresión de parámetros del primer coche

document.write(historialCar_1["marca"]); 
document.write(historialCar_1["modelo"]); 
document.write(historialCar_1["anyo"]); 
document.write(historialCar_1["antiguedad"]); 
document.write(historialCar_1["color"]); 



// solicitud al propietario de parámetros de su segundo coche
historialCar_2["marca"] = String(prompt("¿De qué marca fue tu 2o coche?"));
historialCar_2["modelo"] = String(prompt("¿Qué modelo era?"));
historialCar_2["anyo"] = Number(prompt("¿En qué año salió al mercado?"));
historialCar_2["antiguedad"] = Number(prompt("¿Cuantos años lo disfrutaste?"));
historialCar_2["color"] = String(prompt("¿Qué color tenía?"));

// impresión de parámetros del segundo coche

document.write(historialCar_2["marca"]); 
document.write(historialCar_2["modelo"]); 
document.write(historialCar_2["anyo"]); 
document.write(historialCar_2["antiguedad"]); 
document.write(historialCar_2["color"]); 



// solicitud al propietario de parámetros de su tercer coche
historialCar_3["marca"] = String(prompt("¿De qué marca fue tu 3er coche?"));
historialCar_3["modelo"] = String(prompt("¿Qué modelo era?"));
historialCar_3["anyo"] = Number(prompt("¿En qué año salió al mercado?"));
historialCar_3["antiguedad"] = Number(prompt("¿Cuantos años lo disfrutaste?"));
historialCar_3["color"] = String(prompt("¿Qué color tenía?"));

// impresión de parámetros del tercer coche

document.write(historialCar_3["marca"]); 
document.write(historialCar_3["modelo"]); 
document.write(historialCar_3["anyo"]); 
document.write(historialCar_3["antiguedad"]); 
document.write(historialCar_3["color"]); 
