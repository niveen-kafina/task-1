const pics=[
   'url("1.jfif")',  
   'url("2.jfif")',
   'url("3.jfif")',  
   'url("4.jfif")',   
   'url("5.jfif")',









];
const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img=pics[a]
    console.log(img);
    pic.style.backgroundImage =img;
}





