let projeNumarasi = 1;

function yeniProjeEkle() {
    projeNumarasi = projeNumarasi + 1;

    let yeniProje = document.createElement("div");
    yeniProje.className = "project-two";

    yeniProje.innerHTML = `
        <div class="title-two">
            <h3>Proje ${projeNumarasi}</h3>
            <button class="delete" onclick="sil(this)">Kaldır</button>
        </div>

        <div class="project-row">
            <div class="project-field">
                <label>Proje Adı</label>
                <input type="text" class="projeadi" placeholder="Proje adını girin">
            </div>

            <div class="project-field">
                <label>Proje URL</label>
                <input type="text" class="projeyol" placeholder="https://projeniz.com">
            </div>
        </div>

        <div class="project-desc">
            <label>Açıklama</label>
            <textarea class="projeaciklama" placeholder="Proje açıklaması..."></textarea>
        </div>
    `;

    document.getElementById("projectsContainer").appendChild(yeniProje);
}

function sil(button) {
    button.parentElement.parentElement.remove();
}

function olustur() {
    let adsoyad = document.getElementById("adsoyad").value;
    let unvan = document.getElementById("unvan").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let github = document.getElementById("github").value;
    let linkedin = document.getElementById("linkedin").value;
    let beceriler = document.getElementById("beceriler").value;
    let hakkimda = document.getElementById("hakkimda").value;
    let tema = document.getElementById("tema").value;

    let projeler = [];
    let projeInputlar = document.querySelectorAll(".project-two");

    projeInputlar.forEach(function (proje) {
        let projeadi = proje.querySelector(".projeadi").value;
        let projeyol = proje.querySelector(".projeyol").value;
        let projeaciklama = proje.querySelector(".projeaciklama").value;

        if (projeadi.trim() !== "") {
            projeler.push({
                adi: projeadi,
                yol: projeyol,
                aciklama: projeaciklama
            });
        }
    });

    let data = {
        adsoyad: adsoyad,
        unvan: unvan,
        email: email,
        telefon: telefon,
        github: github,
        linkedin: linkedin,
        beceriler: beceriler,
        hakkimda: hakkimda,
        projeler: projeler,
        tema: tema
    };

    localStorage.setItem("portfolioData", JSON.stringify(data));

    if (data.tema === "modern") {
        window.location.href = "../Modern_Portfolio/Modern-Portfolio.html";
    }

    if (data.tema === "minimal") {
        window.location.href = "../Minimal_Portfolio/Minimal-Portfolio.html";
    }

    if (data.tema === "yaratici") {
        window.location.href = "../Creative_Portfolio/Creative-Portfolio.html";
    }
    if (data.tema === "profesyonel") {
        window.location.href = "../Professional_Portfolio/Professional-Portfolio.html";
    }
}

function önizle() {
    let sonuclar = document.getElementById("sonuc");
    
    let adsoyad = document.getElementById("adsoyad").value;
    let unvan = document.getElementById("unvan").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let github = document.getElementById("github").value;
    let linkedin = document.getElementById("linkedin").value;
    let beceriler = document.getElementById("beceriler").value;
    let hakkimda = document.getElementById("hakkimda").value;
    
    let yazı = "";
    yazı = yazı + "<h2>" + adsoyad + "</h2>";
    yazı = yazı + "<p><strong>Ünvan:</strong> " + unvan + "</p>";
    yazı = yazı + "<p><strong>Email:</strong> " + email + "</p>";
    yazı = yazı + "<p><strong>Telefon:</strong> " + telefon + "</p>";
    yazı = yazı + "<p><strong>GitHub:</strong> " + github + "</p>";
    yazı = yazı + "<p><strong>LinkedIn:</strong> " + linkedin + "</p>";
    yazı = yazı + "<p><strong>Beceriler:</strong> " + beceriler + "</p>";
    yazı = yazı + "<p class='hakkimda-yazı'><strong>Hakkımda:</strong> " + hakkimda + "</p>";
    
    sonuclar.innerHTML = yazı;
}
