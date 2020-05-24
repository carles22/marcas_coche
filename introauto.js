
/* 
No he sido capaz encontrar una manera para automatizar la definición de variables con un sufijo _1, _2,..., _50 */


var marcas_coche = ["Audi", "Seat", "Ford", "Citroen", "Volksvagen"];

var modelos_audi = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "TT", "R8"];
var modelos_seat = ["Ibiza", "Toledo", "Cordoba", "Panda", "Leon", "Alhambra", "Murcia", "Burgos", "Salamanca", "Barcelona" ];
var modelos_ford = ["Fiesta", "Mondeo", "Ka", "Mustang", "Focus", "Puma", "Cobra", "Scord", "Tourneto", "Smax" ];
var modelos_citroen = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8","Picasso", "Xara"];
var modelos_volksvagen = ["Fox", "Golf", "Polo", "Touran", "Tiguan", "Allspace", "Passat","Alltrack", "Touareg", "Caddy"];

var anyo = [2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020];

var color = ["rojo", "blanco", "negro", "azul", "gris", "amarillo", "turquesa", "verde", "naranja", "" ];

   

function coche (marca, modelo, anyo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.color = color;

}

   
for ( i = 1; i < 11; i++) {

var coche_i = new coche (`${marcas_coche[1]}`, `${modelos_audi[i]}`,`${anyo[i]}`, `${color[i]}`);

    }

for ( i = 11; i < 21; i++) {
var coche_i = new coche (`${marcas_coche[2]}`, `${modelos_seat[i]}`,`${anyo[i]}`, `${color[i]}`);

    }

for ( i = 21; i < 31; i++) {
    var coche_i = new coche (`${marcas_coche[3]}`, `${modelos_ford[i]}`,`${anyo[i]}`, `${color[i]}`);
        
    }
    
for ( i = 31; i < 41; i++) {
    var coche_i = new coche (`${marcas_coche[4]}`, `${modelos_citroen[i]}`,`${anyo[i]}`, `${color[i]}`);
        
    }

for ( i = 41; i < 51; i++) {
    var coche_i = new coche (`${marcas_coche[5]}`, `${modelos_volksvagen[i]}`,`${anyo[i]}`, `${color[i]}`);
        
    }