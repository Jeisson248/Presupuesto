// Crear variables para selectores //
const formulario = document.querySelector('#Agregar-gastos')
const listagasto = document.querySelector('#Gastos ul');

// Eventos 
cargarpagina();//se esta llamando a la funcion principal
function cargarpagina() {
    document.addEventListener('DOMContentLoaded', Preguntar);
    formulario
}



// Clases 
class Presupuesto {
    constructor(presupuesto) {
        this.Presupuesto = Number(presupuesto);
        this.disponible = Number(presupuesto);
        this.Gastos * [];
    }
}
class Interfaz {
    insertardinero(Valor) {
        const { presupuesto, restante } = Valor;

        // Agregar al HTML
        document.querySelector('# total'), textContent = presupuesto;
        document.querySelector('# restante'), textContent = restante;
    }
}


let presupuesto;
const inte = new Interfaz();

// Funciones 
function Preguntar() {
    const Presupuestousu = prompt("Ingrse su presupuesto");
    console.log(Presupuestousu)
    // validar campo 

    if (Presupuestousu === '' || Presupuestousu === '' || isNaN(Presupuestousu) || Presupuestousu <= 0) {
        window.location.reload();
    }

    // Insertar el presupuesto

    presupuesto = new presupuesto(Presupuestousu);
    inte.insertardinero(presupuesto);


}

