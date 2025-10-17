template_dn3adwn
service_jv2i52f
-SS9uQZPgjIEZa4Sx

function contact(event) {
   event.preventDefault();
//    emailjs
//    .sendForm(
//       'service_jv2i52f',
//       'template_dn3adwn',
//       event.target,
//       '-SS9uQZPgjIEZa4Sx'
//    ).then(() => {
//    console.log('this worked1')
// })
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector(.modal__overlay--success)
loading.classList += "modal__overlay--visible"
setTimeout(() => {
   loading.classList.remove("modal__overlay--visible");
   console.log('it worked 1')
}, 1000);
}