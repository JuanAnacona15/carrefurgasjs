
//Importa la clase employee para el objeto que almacena los datos del empleado
import { clEmployee } from "./employee.js";
//Importa la clase que almacena las funciones para hacer los calculos
import Calculates from "./Calculates.js";

//Se crea el objeto empleado
let employee =  new clEmployee({})


/**
 * Evento de tipo submit que se acciona cuando se envian los datos del formulario
 * Funcion: Almacenar los valores de los inputs en dormulario en los atributos del 
 * objeto employee
 */
document.getElementById('formInputs').addEventListener('submit', function(event) {
    event.preventDefault();

    // Se extraen los valores de los inputs del formulario y se pasan como atributos al objeto employee

    employee.id = document.getElementById('iId').value
    employee.ExpeditionId = document.getElementById('iExpeditionId').value
    employee.Department = document.getElementById('iDepartment').value
    employee.Municipality = document.getElementById('iMunicipality').value
    employee.District= document.getElementById('iDistrict').value
    employee.BirthDate= document.getElementById('iBirthDate').value
    employee.BloodType = document.getElementById('iBloodType').value
    employee.ZodiacSign = document.getElementById('iZodiacSign').value
    employee.EmployeeType = document.getElementById('iEmployeeType').value
    employee.Salary= document.getElementById('iSalary').value
    employee.iDepartmentWork = document.getElementById('iDepartmentWork').value
    employee.Section = document.getElementById('iSection').value
    employee.Division = document.getElementById('iDivision').value
    employee.DaysWorked = document.getElementById('iDaysWorked').value
    employee.ExtraDay= document.getElementById('iExtraDay').value
    employee.ExtraNight= document.getElementById('iExtraNight').value
    employee.ExtraSunday= document.getElementById('iExtraSunday').value

    /**
     * Posterior a esto, deberian estar los calculos
    */
})