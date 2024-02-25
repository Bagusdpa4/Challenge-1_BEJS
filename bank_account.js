// saldo awal diisi 0
let totalSaldo = 0;

// function agar mengubah menjadi format rupiah
function formatRupiah(angka) {
  let formatSaldo = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formatSaldo.format(angka);
}

// function untuk menampilkan saldo secara real-time dengan format rupiah
function updateSaldo() {
  let lihatSaldo = document.getElementById("saldo");
  lihatSaldo.innerText = `Saldo Anda: ${formatRupiah(totalSaldo)}`;
}

// function untuk menambahkan saldo
function tambahSaldo() {
  let saldoMasuk = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:");
  saldoMasuk = parseInt(saldoMasuk);

  // beberapa required yang harus dipenuhi sebelum function dijalankan
  if (!isNaN(saldoMasuk) && saldoMasuk > 0) {
    totalSaldo += saldoMasuk;
    updateSaldo();
  } else if (isNaN(saldoMasuk)) {
    alert("Masukkan jumlah saldo berupa nominal angka.");
  } else {
    alert("Saldo yang dimasukkan tidak bisa <= 0");
  }
}

// function untuk mengurangi saldo
function kurangiSaldo() {
  let saldoKeluar = window.prompt("Masukkan jumlah saldo yang ingin dikurangi:");
  saldoKeluar = parseInt(saldoKeluar);

  // beberapa required yang harus dipenuhi sebelum function dijalankan
  if (!isNaN(saldoKeluar) && saldoKeluar > 0 && saldoKeluar <= totalSaldo) {
    totalSaldo -= saldoKeluar;
    updateSaldo();
  } else if (isNaN(saldoKeluar)) {
    alert("Masukkan jumlah saldo berupa nominal angka.");
  } else if (saldoKeluar <= 0) {
    alert("Saldo yang di input tidak bisa <= 0");
  } else {
    alert("Saldo yang di input tidak bisa melebihi sisa saldo Anda.");
  }
}

updateSaldo();
