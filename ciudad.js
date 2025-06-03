// npm test comando para ejecutar el test
class Ciudad {
    //constructor
    constructor(codPost, nomC, cantHab, impuestos, gastosM) {
        this.codPost = codPost;                 
        this.nomC = nomC;                      
        this.cantHab = cantHab;                 
        this.impuestos = impuestos;   // Arreglo de impuestos
        this.gastosM = gastosM; // Corregido el nombre
    }

    calcularImpuesto() {
        let montoRecaudado = 0;
        
        for (let impt of this.impuestos) {
            montoRecaudado += impt.getImporte(); // Usar 'impt' para acceder al método de la instancia
        }
        
        return montoRecaudado; // Devolver la variable correcta
    }

    tieneDeficit() {
        return this.gastosM > this.calcularImpuesto(); // Comparar los gastos con el monto recaudado
    }
}

class Impuesto {
    constructor(tipo, importe) {
        this.tipo = tipo;
        this.importe = importe;
    }

    getImporte() {
        return this.importe; // Método correcto para devolver el importe
    }
}

module.exports = { Ciudad, Impuesto }; // Exportar ambas clases
