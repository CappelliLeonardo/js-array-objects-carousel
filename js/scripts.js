

// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.




const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// document.querySelector('.canvas').innerHTML = (images[0].title);

for ( let i = 0; i < images.length; i++){
    // faccio un ciclo for in per ciclare le chiavi iesime di ogni oggetto
    // for (let key in images[i]){


    //     console.log(images[i][key])
    // };

    document.querySelector('.canvas').innerHTML +=`

        <div class="slider aiuto">
            <img src="${images[i]['url']} "alt="">
            <h1>
                ${images[i]['title']}
            </h1>
            <p>
                ${images[i]['description']}
            </p>
        </div>
    `;
    //  se l'elemento i è uguale a zero allora sesegui le istruzione fra
    //  le graffe fa riferimento alla prima foto
    if (i == 0){

        document.querySelector('.aiuto').classList.add('active')
        document.querySelector('.aiuto').classList.remove('slider')


        
        // images[0]classList.add('active');
    
    }
    
    // document.querySelector('.slider').classList.add('hidden')

    
    
};







let counter = 0 ;

let slider = document.querySelectorAll('.slider')
 




// ASSOCIO UNA VARIABILE AI BUTTON
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');


buttonRight.addEventListener('click', function(){

     
    if (counter < images.length -1){

        counter += 1;

            // associo il counter esimo alla classe slider
            slider[counter].classList.add('active')

            slider[counter].classList.remove('slider')
            
            
            console.log(counter);
            
        

    }
            
            // document.querySelector('.hidden').classList.add('active')
    
            // document.querySelector('.active').classList.remove('active')
    


});


buttonLeft.addEventListener('click', function(){
    if ((counter !== images.length) && (counter !== 0)){
        counter -= 1

        console.log(counter)

        document.querySelector('.canvas').innerHTML = (images[counter])


    } 
});