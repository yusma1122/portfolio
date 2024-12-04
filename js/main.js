(function ($) {
  "use strict";

  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").fadeIn("slow").css("display", "flex");
    } else {
      $(".navbar").fadeOut("slow").css("display", "none");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  if ($(".typed-text-output").length == 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

 // Menangani fade in dan fade out
if ($(".typed-text-output-2").length == 1) {
  var typed_strings_2 = $(".typed-text-2").text().split(", "); // Membagi string sesuai koma
  var currentIndex = 0;

  // Pastikan elemen tidak tersembunyi di awal
  $(".typed-text-output-2").show(); // Menampilkan elemen jika sebelumnya tersembunyi
  
  // Fungsi untuk menangani fade in dan fade out
  function fadeText() {
    var currentText = typed_strings_2[currentIndex];
    
    // Terapkan fade out pada teks lama jika ada
    $(".typed-text-output-2").fadeOut(500, function() {
      // Setelah fade out selesai, ubah teks dan lakukan fade in
      $(this).text(currentText).fadeIn(500);
      
      // Update index untuk teks berikutnya
      currentIndex = (currentIndex + 1) % typed_strings_2.length;
    });
  }

  // Mulai animasi dengan interval
  setInterval(fadeText, 4000); // Ubah setiap 4 detik (4000ms)
  
  // Pastikan pertama kali elemen muncul tanpa menunggu fade in (agar tidak terlewat)
  fadeText(); // Memanggil fungsi pertama kali agar langsung muncul
}



  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Scroll to Bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-bottom").fadeOut("slow");
    } else {
      $(".scroll-to-bottom").fadeIn("slow");
    }
  });

  // Skills
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".kembali-keatas").fadeIn("slow");
    } else {
      $(".kembali-keatas").fadeOut("slow");
    }
  });
  $(".kembali-keatas").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);

function openPopup(popupId, event) {
  event.preventDefault(); // Mencegah scroll ke atas
  const popup = document.getElementById(popupId);
  popup.classList.add("show");
}

// Function to close popup and stop video
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  const iframe = document.getElementById("youtube-video");

  // Stop video by resetting the iframe src
  const iframeSrc = iframe.src;
  iframe.src = "";
  iframe.src = iframeSrc;

  popup.classList.remove("show");
}

// Inisialisasi indeks untuk masing-masing slideshow
let slideIndex = [1, 1, 1];

// Fungsi untuk menampilkan slide pada slideshow tertentu
function showSlides(no) {
  let slides = document.getElementsByClassName("product-slide-" + no);
  let slideNumber = document.getElementById("slide-number-" + no);

  // Atur slideIndex agar tetap dalam rentang slide yang ada
  if (slideIndex[no - 1] > slides.length) {
    slideIndex[no - 1] = 1;
  }
  if (slideIndex[no - 1] < 1) {
    slideIndex[no - 1] = slides.length;
  }

  // Sembunyikan semua slide dalam slideshow tertentu
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tampilkan slide yang aktif
  slides[slideIndex[no - 1] - 1].style.display = "block";

  // Update slide counter
  slideNumber.innerHTML = slideIndex[no - 1] + " / " + slides.length;
}

// Fungsi navigasi antar slide untuk slideshow tertentu
function plusSlides(n, no) {
  slideIndex[no - 1] += n;
  showSlides(no);
}

// Jalankan fungsi showSlides untuk memulai setiap slideshow
showSlides(1); // Untuk slideshow pertama
showSlides(2); // Untuk slideshow kedua
showSlides(3); // Slide ke3

//cara menambahkan nya, Tambah "Slide Indexnya", Panggil Show Slide nya, Div nya pakai class Slide yang baru, dan perhatikan tombol prev dan next, sertta ID nya juga

// Mengaktifkan modal ketika "View Certificate" diklik
document;
// Ambil elemen dengan ID "viewCertificate" dan "viewCertificate2"
var element1 = document.getElementById("viewCertificate");
var element2 = document.getElementById("viewCertificate2");
var element3 = document.getElementById("viewCertificate3");
var element4 = document.getElementById("viewCertificate4");
var element5 = document.getElementById("viewCertificate5");
var element6 = document.getElementById("viewCertificate6");
// var element7 = document.getElementById("viewCertificate7");

// Tambahkan event listener untuk elemen pertama
element1.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default
  var certificateModal = new bootstrap.Modal(
    document.getElementById("certificateModal")
  );
  certificateModal.show(); // Tampilkan modal
});

// Tambahkan event listener untuk elemen kedua
element2.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default
  var certificateModal = new bootstrap.Modal(
    document.getElementById("certificateModal2")
  );
  certificateModal.show(); // Tampilkan modal
});

// Tambahkan event listener untuk elemen ketiga
element3.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default
  var certificateModal = new bootstrap.Modal(
    document.getElementById("certificateModal3")
  );
  certificateModal.show(); // Tampilkan modal
});

// Tambahkan event listener untuk elemen keempat
element4.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default
  var certificateModal = new bootstrap.Modal(
    document.getElementById("certificateModal4")
  );
  certificateModal.show(); // Tampilkan modal
});

// Tambahkan event listener untuk elemen keempat
element5.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default
  var certificateModal = new bootstrap.Modal(
    document.getElementById("certificateModal5")
  );
  certificateModal.show(); // Tampilkan modal
});

// Tambahkan event listener untuk elemen keempat
element6.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default
  var certificateModal = new bootstrap.Modal(
    document.getElementById("certificateModal6")
  );
  certificateModal.show(); // Tampilkan modal
});

// // Tambahkan event listener untuk elemen keempat
// element6.addEventListener("click", function (e) {
//   e.preventDefault(); // Mencegah aksi default
//   var certificateModal = new bootstrap.Modal(
//     document.getElementById("certificateModal7")
//   );
//   certificateModal.show(); // Tampilkan modal
// });

