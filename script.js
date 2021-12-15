const scriptURL = "https://script.google.com/macros/s/AKfycbzdQPfcrpbXiyTXVPnY0wCt1oZoYl_BGgJ5OKIrZu0VEeUMiyxvhLI_8rp6iWtR46A9dA/exec";
const form = document.forms["pesan-dari-website"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // menampilkan tombol loading, menghilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // menampilkan tombol kirim, menghilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
