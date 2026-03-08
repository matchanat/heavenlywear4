function analyze() {

    let undertone = document.getElementById("undertone").value;
    let face = document.getElementById("face").value;

    localStorage.setItem("undertone", undertone);
    localStorage.setItem("face", face);

    window.location.href = "rekomendasi.html";
}