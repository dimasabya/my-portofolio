const abouts = document.getElementById("abouts");
const home = document.querySelector("#home");
const certifikat = document.querySelector("#certifikat");
const contact = document.querySelector("#contacts");
const fe = document.querySelector("#skil-fe");
const be = document.querySelector("#skil-be");

home.addEventListener("click", function () {
  const profile = document.querySelector("#profile");
  const contacPage = document.querySelector("#contact-page");
  const sertifikatPage = document.querySelector("#sertifikat-page");
  const abaoutPage = document.querySelector("#abouts-page");
  if (profile.classList.contains("remove-home")) {
    profile.classList.remove("remove-home");
    abaoutPage.classList.remove("showing");
  }
  if (contacPage.classList.contains("showing") || sertifikatPage.classList.contains("showing")) {
    contacPage.classList.remove("showing");
    sertifikatPage.classList.remove("showing");
  }
});

abouts.addEventListener("click", function () {
  const abaoutPage = document.querySelector("#abouts-page");
  const contacPage = document.querySelector("#contact-page");
  const profile = document.querySelector("#profile");
  const sertifikatPage = document.querySelector("#sertifikat-page");

  if (contacPage.classList.contains("showing") || sertifikatPage.classList.contains("showing")) {
    contacPage.classList.remove("showing");
    sertifikatPage.classList.remove("showing");
  }

  profile.classList.add("remove-home");
  abaoutPage.classList.add("showing");
});

certifikat.addEventListener("click", function () {
  const sertifikatPage = document.querySelector("#sertifikat-page");
  const abaoutPage = document.querySelector("#abouts-page");
  const contacPage = document.querySelector("#contact-page");
  const profile = document.querySelector("#profile");

  if (contacPage.classList.contains("showing")) {
    contacPage.classList.remove("showing");
  }

  sertifikatPage.classList.add("showing");
  abaoutPage.classList.remove("showing");
  profile.classList.add("remove-home");
});

contact.addEventListener("click", function () {
  const sertifikatPage = document.querySelector("#sertifikat-page");
  const abaoutPage = document.querySelector("#abouts-page");
  const contacPage = document.querySelector("#contact-page");
  const profile = document.querySelector("#profile");

  if (sertifikatPage.classList.contains("showing")) {
    sertifikatPage.classList.remove("showing");
  }

  contacPage.classList.add("showing");
  profile.classList.add("remove-home");
  abaoutPage.classList.remove("showing");
});

fe.addEventListener("click", function (e) {
  const techFe = document.querySelector("#tech-fe");
  const techBe = document.querySelector("#tech-be");

  if (techFe.classList.contains("showing")) {
    techFe.classList.remove("showing");
    console.log(this);
    return;
  }

  techFe.classList.add("showing");
  techBe.classList.remove("showing");
});

be.addEventListener("click", function () {
  const techFe = document.querySelector("#tech-fe");
  const techBe = document.querySelector("#tech-be");

  if (techBe.classList.contains("showing")) {
    // techFe.classList.add("showing");
    techBe.classList.remove("showing");
    return;
  }

  if (techFe.classList.contains("showing")) {
    techFe.classList.remove("showing");
    // return;
  }

  techFe.classList.add("remove-home");
  techBe.classList.add("showing");
});

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const imgFilter = document.querySelectorAll(".img-filter");
const gallery = document.querySelector("#gallery");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = searchInput.value.toLowerCase();

  const image = gallery.querySelectorAll("#img-filter");
  image.forEach((img) => {
    img.style.display = "none";
  });

  image.forEach((img) => {
    const tags = img.getAttribute("data-tags").toLowerCase();

    if (tags.includes(inputValue)) {
      img.style.display = "block";
    }
  });
});

// JavaScript untuk perbesaran gambar
const lightbox = document.getElementById("gallery");
const lightboxImage = document.getElementById("lightbox-image");

// Fungsi untuk menampilkan gambar yang diperbesar
function showImage(src) {
  lightboxImage.src = src;
  lightbox.style.display = "flex";
}

// Fungsi untuk menyembunyikan gambar yang diperbesar
// function hideImage() {
//   lightbox.style.display = "none";
// }

// Tambahkan event listener untuk setiap gambar
const images = gallery.querySelectorAll("#img-filter");
images.forEach((image) => {
  image.addEventListener("click", function () {
    const src = image.getAttribute("data-src");
    showImage(src);
    // Menampilkan gambar yang diperbesar dengan src dari atribut data-src
  });
});

// Event listener untuk menyembunyikan gambar yang diperbesar ketika diklik di luar gambar
// lightbox.addEventListener("click", hideImage);
