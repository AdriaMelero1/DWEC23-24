/*
    Se nos facilitan 3 variables que contienen informacion sobre una ciudad --> esCapital(boolean), habitantes(int), impuestoPorCiudadano(float)
    esCapital sera cierta si y solo si la ciudad es capital.
    habitantes es el numero de ciudadanos de esta ciudad
    impuestoPorCiudadano es el impuesto medio mensual que paga un ciudadano de esa ciudad

    Para nosotros, una metropolis será una ciudad si bien es una capital con mas de 100.000 habitantes o 
    si no es capital y tiene mas de 200.000 habitantes y una renta media de 720 millones al año

    Dad una expresion booleana con las 3 variables de tal manera que sea cierta si y solo si es metropolis
    */

    let esCapital = false;
    let habitantes = 2000000;
    let impuestoPorCiudadano = 50;

    const esMetropolis = (esCapital && habitantes >= 100000 || habitantes >= 200000 && impuestoPorCiudadano * habitantes * 12 >= 720000000);
    

    console.log("La ciudad es metropolis?   ",esMetropolis);

    