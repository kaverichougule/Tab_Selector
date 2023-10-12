let buttons = document.querySelectorAll("button");
let para=document.querySelectorAll(".text-container div");
let image=document.querySelector(".image-container");
buttons[0].classList.add("selectedButton");
buttons.forEach((val,idx)=>{
    val.addEventListener("click", () => {
        addClass(idx);
        removeClass(idx)
    });
})
function addClass(idx) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == idx){
      buttons[i].classList.remove("selectedButton");
      para[i].style.display = "block";
      image.style.left=`-${100*(i)}%`;
    } 
    else{ 
    buttons[i].classList.add("selectedButton");
    para[i].style.display = "none";
  }
}
}
function removeClass(idx) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == idx){
      buttons[i].classList.add("selectedButton");
    }else{
      buttons[i].classList.remove("selectedButton");
    }
     
  }
}
// const tabBtn=document.querySelectorAll('.tablink')
// // console.log(tabBtn)

// let tabContent=document.querySelectorAll('.single-tab')
// for(let i=1;i<tabBtn.length;i++){
//     tabContent[i].style.display="none";
// }

// tabBtn.forEach(function(val,idx){
//     val.addEventListener('click',()=>{
//         for(let i=0;i<tabBtn.length;i++){
//             if(idx==i){
//                 tabBtn[i].classList.add('active')
//                 tabContent[i].style.display='block'
//                 tabContent[i].classList.add('active')
//             }
//             else{
//                 tabBtn[i].classList.remove('active')
//                 tabContent[i].style.display='none'
//                 tabContent[i].classList.remove('active')
//             }
//         }
//     })

// })
