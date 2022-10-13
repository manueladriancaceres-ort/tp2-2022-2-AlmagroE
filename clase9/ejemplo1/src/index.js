console.log("comienzo");

const fu = (ms) => {
    return new Promise( (reject, resolve) => {
        if (miliSegundos == undefined) throw "no hay parametro"
        if(ms > 5000) { 
            reject("demasiado tiempo")
        } else {
            setTimeout(()=> {
                resolve("Proceso de 5 seg")
            },ms);            
        }
    })
}

const proceso = (texto) => console.log("Desc.: " + texto);
const error = (texto) => console.log("Tipo error: " + texto);
const unTrow = (texto) => { console.log("Excepcion: " + texto); }

fu()
    .then(error,proceso)
    .catch(unTrow)