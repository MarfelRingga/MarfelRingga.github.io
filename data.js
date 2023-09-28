function ngeyel() {
    alert('dibilang jangan ditekan !');
}

function sayWelcome() {
    let name = document.getElementById('userName').value;
if (name =="")
    alert("Tolong isi namamu tuan")
else
    alert("Selamat datang tuan "+name)
}

// Nilai KKM

function cekKKM() {
    let studentsName = document.getElementById('studentsName').value;
    let nilai = parseFloat(document.getElementById('nilaiSiswa').value);
    if (isNaN(nilai)) {
        alert("Masukkan angka yang valid untuk nilai");
    } else if (nilai > 100) {
        alert("Nilai harus lebih kecil/sama dengan 100");
    } else if (nilai < 0) {
        alert("Nilai harus lebih besar/sama dengan 0");
    } else if (nilai > 75) {
        alert("Nilai "+studentsName+" diatas KKM")
    } else if (nilai < 75) {
        alert("Nilai "+studentsName+" dibawah KKM")
    } else if (nilai == 75) {
        alert("Nilai "+studentsName+" pas KKM")
    }
}