window.addEventListener("load",()=>{
 document.getElementById("Boutique").classList.add('affiche');
})

//pour chaner le background du menu active et afficher la section concerner
 const menu=document.querySelectorAll(".menu");
 const sections = document.querySelectorAll('.section');
menu.forEach((e)=>{
  e.addEventListener("click",function(){
    const data=this.dataset.code;
    if(data==="section6"){
       window.location.href="inscription.html"
    }else{
       menu.forEach((nav)=>nav.classList.remove("active"))
      this.classList.add("active")
      sections.forEach(section => {
      section.classList.remove('affiche');
       });
      document.getElementById(data).classList.add('affiche');
    }
    
  })
})
document.querySelector("#hamber").addEventListener("click",function(){
    document.querySelector(".nav-link").classList.toggle("active")
})

 // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);


 document.querySelector(".fass").addEventListener("click",function(){
  document.querySelector(".panier").classList.toggle("shop")
 })   