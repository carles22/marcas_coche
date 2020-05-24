
/* 
for ( i = 1; i < 51; i++) {
    var coche_i;
        }

    NO FUNCIONA PARA DEFINIR LAS VARIABLES EN UN BUCLE */

var coche_1;
var coche_2;
var coche_3;
var coche_4;
var coche_5;
var coche_6;
var coche_7;
var coche_8;
var coche_9;
var coche_10;
var coche_11;
var coche_12;
var coche_13;
var coche_14;
var coche_15;
var coche_16;
var coche_17;
var coche_18;
var coche_19;
var coche_20;
var coche_21;
var coche_22;
var coche_23;
var coche_24;
var coche_25;
var coche_26;
var coche_27;
var coche_28;
var coche_29;
var coche_30;
var coche_31;
var coche_32;
var coche_33;
var coche_34;
var coche_35;
var coche_36;
var coche_37;
var coche_38;
var coche_39;
var coche_40;
var coche_41;
var coche_42;
var coche_43;
var coche_44;
var coche_45;
var coche_46;
var coche_47;
var coche_48;
var coche_49;
var coche_50;

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