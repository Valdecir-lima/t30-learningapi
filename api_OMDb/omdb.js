class OMDb {
    async getMovieInformation(){ 
        let buscador = document.getElementById("name").value;
        
        let arr = buscador.split(' ')
        //console.log(arr)
        let string = arr.join('+')
        //console.log(string)
        //let string = buscador.replaceAll(' ','+')

        let res = await fetch(`http://www.omdbapi.com/?t=${string}&plot=full&apikey=a2000ba`)
        let json = await res.json();
        return json;
        
     }
 }
 
 export default class Controller {
   constructor (){
     this.omdb = new OMDb();
   }
 
   async listarNaTela(){
     let information = await this.omdb.getMovieInformation();
     console.log (information);
 
     let div = document.getElementById("lista");
       div.innerHTML += `
       <div class="col-3">    
    <div class="card" style="width: 18rem;">
  <img src="${information.Poster}" class="card-img-top" width='18rem;'>
        <div class="card-body">
            <h5 class="card-title">${information.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Year: ${information.Year} | Movie Time: ${information.Runtime} | Genre: ${information.Genre}</h6>
            <p class="card-text overflow-auto" style="height: 12rem;">${information.Plot}</p>
            <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
        </div>
    </div>
</div>`
    
    
    ;
   }
   limpLista(){
    let div = document.getElementById("lista");
     div.innerHTML = ""

   }
 }