// Defino el valor del ticket
const valorTicket = 200;


// Defino el valor de descuentos según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;
let categoriaSeleccionada = 0;



//Desarrollo funciones
function resetTotalPagar()
{

   let totalPago       = document.getElementById("totalAPagar");
   quitarClaseError();
   totalPago.innerHTML="";    
}


function quitarClaseError()  
{
   let x=document.querySelectorAll(".form-control,.form-select");
   let i;

   for(i=0;i<x.length;i++) 
   {
      x[i].classList.remove("is-invalid");
   }   
}

function totalPagar()
{  
   //Variables
   let nombre          = document.getElementById("nombre");
   let apellido        = document.getElementById("apellido");
   let mail            = document.getElementById("mail");
   let cantidadTickets = document.getElementById("cantidadTickets");
   let categoria       = document.getElementById("categoriaSelect");
   let totalPago       = document.getElementById("totalAPagar");
   let error = false; 
   let errorEmail = document.getElementById("errorEmail");

   console.log("quitar clase error");
   //Antes de pagar se asegura de borrar los errores
   quitarClaseError(); 

   
   //Para determinar si los campos son o no son válidos

   //Nombre
   if(nombre.value=="") 
    {
    nombre.classList.add("is-invalid");
    nombre.focus();
    error=true;
    }


   //Apellido
    if(apellido.value=="") 
    {
    apellido.classList.add("is-invalid");
    apellido.focus();
    error=true;
    }

    
   //Email
   const emailValido = mail => 
   {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);   
   }


   if(!emailValido(mail.value))
   {
      errorEmail.innerText="El email está mal escrito...";
      if(mail.value=="") 
      {
         errorEmail.innerText="Ingrese su email";
      }
      mail.classList.add("is-invalid");
      mail.focus();
      error=true;   
   }


    //Cantidad de tickets  
    if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)) )
    {
    errorCantidad.innerText="Ingrese cantidad";
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    error=true;
    }


   //Categoría
    console.log(categoria)
    if(categoriaSeleccionada==0)
    {
    //alert("Elegir categoría...");
    errorCategoria.innerText="Elegir categoría";
    categoria.classList.add("is-invalid");
    categoria.focus();
    error=true;
    }

   if(error) return;
   console.log("///////");
    

   //Valor tickets
   let totalValorTickets=(cantidadTickets.value)*valorTicket;

   
   //No selecciona categoría
   if(categoriaSeleccionada==0)
   {
   console.log("0");   
   totalValorTickets=totalValorTickets;
   }

   //Categoría ESTUDIANTE
   if(categoriaSeleccionada==1)
   {
   console.log("80%");
   totalValorTickets=totalValorTickets-descuentoEstudiante/100*totalValorTickets;
   }


   //Categoría TRAINEE
   if(categoriaSeleccionada==2)
   {
   console.log("50%");
   totalValorTickets=totalValorTickets-descuentoTrainee/100*totalValorTickets;
   }

   //Categoría JUNIOR
   if(categoriaSeleccionada==3)
   {
   console.log("15%");
   totalValorTickets=totalValorTickets-descuentoJunior/100*totalValorTickets;
   }

   //Total pago
   totalPago.innerHTML=totalValorTickets;

}

   //Cambiar categoría
   function cambiarCategoria(value)
{
   console.log(value)
   categoriaSeleccionada=value;
}


