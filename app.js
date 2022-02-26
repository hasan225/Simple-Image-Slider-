const prevBtn =document.querySelector('.previous')
const nextBtn =document.querySelector('.next')
const img =document.querySelector('.img')

let count =0;

let images =["img/1320758.jpg","img/543797.jpg","img/607614.jpg","img/84273.jpg"];


nextBtn.addEventListener("click",()=>{
    count++;
    
    if(count >= images.length){
        count=0;
        img.src=images[count]
    }else{
         img.src=images[count]
    }
    console.log(images[count])
})
prevBtn.addEventListener("click",()=>{
    count--;
    
    if(count < 0 ){
        count=images.length -1;
        img.src=images[count]
    }else{
         img.src=images[count]
    }
    console.log(images[count])
})