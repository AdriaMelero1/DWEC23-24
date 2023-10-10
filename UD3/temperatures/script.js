let any2010Juny = 25.8
let any2010Juliol = 28.6
let any2010Agost = 30.1

let any2015Juny = 26.5
let any2015Juliol = 29.3
let any2015Agost = 30.8

let any2020Juny = 27.2
let any2020Juliol = 29.9
let any2020Agost = 31.5

let mitjanaAny2010 = (any2010Agost + any2010Juliol + any2010Juny) / 3;
let mitjanaAny2015 = (any2015Agost + any2015Juliol + any2015Juny) / 3;
let mitjanaAny2020 = (any2020Agost + any2020Juliol + any2020Juny) / 3;

let superatAny2010 = (mitjanaAny2010 > 30 ? true : false);
let superatAny2015 = (mitjanaAny2015 > 30 ? true : false);
let superatAny2020 = (mitjanaAny2020 > 30 ? true : false);

let mitjanaAny2010Fahrenheit = (mitjanaAny2010 * 9/5) + 32;
let mitjanaAny2010Kelvin = mitjanaAny2010 + 273.15;

let mitjanaAny2015Fahrenheit = (mitjanaAny2015 * 9/5) + 32;
let mitjanaAny2015Kelvin = mitjanaAny2015 + 273.15;

let mitjanaAny2020Fahrenheit = (mitjanaAny2020 * 9/5) + 32;
let mitjanaAny2020Kelvin = mitjanaAny2020 + 273.15;

console.log("Mitjanes en celsius:\n2010: ", mitjanaAny2010.toFixed(2), " --- 2015: ",mitjanaAny2015.toFixed(2), " --- 2020: ", mitjanaAny2020.toFixed(2));

if (superatAny2010) {
    console.log("La temp. va superar els 30º Celsius en 2010");
} else{
    console.log("La temp.  NO va superar els 30º Celsius en 2010");
}



console.log("Mitjanes en Fahrenheit:\n2010: ", mitjanaAny2010Fahrenheit.toFixed(2), " --- 2015: ",mitjanaAny2015Fahrenheit.toFixed(2), " --- 2020: ", mitjanaAny2020Fahrenheit.toFixed(2));
if (superatAny2010) {
    console.log("La temp. va superar els 30º Celsius en 2010");
} else{
    console.log("La temp.  NO va superar els 30º Celsius en 2010");
}
console.log("Mitjanes en Kelvin:\n2010: ", mitjanaAny2010Kelvin.toFixed(2), " --- 2015: ",mitjanaAny2015Kelvin.toFixed(2), " --- 2020: ", mitjanaAny2020Kelvin.toFixed(2));