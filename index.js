// template_dn3adwn
// service_jv2i52f
// -SS9uQZPgjIEZa4Sx

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_jv2i52f",
      "template_dn3adwn",
      event.target,
      "-SS9uQZPgjIEZa4Sx"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable.  Please contact me directly on Scott.Wood@TScottWood.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
   isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
