let casella = document.querySelectorAll ("td");

let turno = 0;

let index = 0;

let valore = casella[index];



casella.forEach(td =>{

     
    td.addEventListener("click" , function(){

         

        console.log(td)

        if ( (turno % 2 ) === 0 && (valore.innerHTML==="")) {

        td.classList.toggle("x");
        turno++;

        } else { td.classList.toggle("o")
                turno++; }

      }  )

    });
    
