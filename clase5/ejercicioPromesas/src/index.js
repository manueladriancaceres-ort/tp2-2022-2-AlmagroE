console.log("Comienzo");

const fu = (tpo) => {
    return new Promise( (resolve,reject) => {
        if(tpo == undefined) throw " parametro no encontrado";
        if(tpo > 5000) {
            reject("Demasiado tiempo")
        } else {
            setTimeout(() => {
                resolve("Proceso 10");
            }, tpo);            
        }
    }) 
}

const fuproceso = (texto) => console.log("Proceso " + texto);
const fufinal = () => console.log("Final");
const fuerror = () => console.log("Error tpo");
const fuexcepcion = (e) => console.log(e);

fu()
    .then(fuproceso, fuerror)
    .catch(fuexcepcion)
    .finally(fufinal);



