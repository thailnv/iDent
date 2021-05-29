function windowScroll() {
  window.onscroll = () => {
    if (document.documentElement.scrollTop > window.innerHeight * 0.5) {
      document.querySelector(".nav").style.background =
        "url('/img/banner-bg.jpg') bottom";
      document.querySelector(".logo img").src = "/img/logo_trans.png";
      let dropBtn = document.getElementsByClassName("dropdown-btn");
      for (let i = 0; i < dropBtn.length; i++) {
        dropBtn[i].style.color = "rgb(114, 106, 106)";
      }
      document.getElementById("account-btn").style.color = "rgb(114, 106, 106)";
    } else {
      document.querySelector(".nav").style.background = "transparent";
      let dropBtn = document.getElementsByClassName("dropdown-btn");
      if (document.documentElement.scrollTop > window.innerHeight * 0.5 - 29) {
        for (let i = 0; i < dropBtn.length; i++) {
          dropBtn[i].style.color = "rgb(114, 106, 106)";
        }
        document.querySelector(".logo img").src = "/img/logo_trans.png";
        document.getElementById("account-btn").style.color =
          "rgb(114, 106, 106)";
      } else {
        for (let i = 0; i < dropBtn.length; i++) {
          dropBtn[i].style.color = "#fff";
        }
        document.querySelector(".logo img").src = "/img/logo_trans_light.png";
        document.getElementById("account-btn").style.color = "#fff";
      }
    }
  };
}

export { windowScroll };
