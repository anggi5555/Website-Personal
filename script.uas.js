// Fungsi untuk memesan jaket
function pesan(jaket) {
    const daftarPesanan = document.getElementById('daftarPesanan');
    const listItem = document.createElement('li');
    listItem.textContent = `Pesanan: ${jaket}`;
    daftarPesanan.appendChild(listItem);
}

// Fungsi untuk validasi login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password123") {
        alert("Login berhasil!");
        window.location.href = "index.html"; // Redirect ke halaman beranda setelah login
    } else {
        alert("Username atau password salah!");
    }
});

// Menyimpan daftar pesanan dan harga
let pesananList = [];
let totalHarga = 0;

// Fungsi untuk memesan jaket
function pesan(namaJaket, harga) {
    // Menambahkan jaket ke daftar pesanan
    pesananList.push({ nama: namaJaket, harga: harga });
    
    // Menambahkan item pesanan ke daftar tampilan
    const daftarPesanan = document.getElementById('daftarPesanan');
    const listItem = document.createElement('li');
    listItem.textContent = `${namaJaket} - Rp${harga.toLocaleString()}`;
    daftarPesanan.appendChild(listItem);
    
    // Menambahkan harga ke total
    totalHarga += harga;

    // Menampilkan tombol Proses Transaksi jika ada pesanan
    const prosesTransaksiBtn = document.getElementById('prosesTransaksiBtn');
    prosesTransaksiBtn.style.display = 'block'; // Tampilkan tombol Proses Transaksi
}

// Fungsi untuk memproses transaksi
function prosesTransaksi() {
    if (pesananList.length === 0) {
        alert("Tidak ada pesanan untuk diproses.");
        return;
    }

    // Menampilkan konfirmasi transaksi
    let transaksiDetails = "Pesanan Anda:\n";
    pesananList.forEach(item => {
        transaksiDetails += `${item.nama} - Rp${item.harga.toLocaleString()}\n`;
    });
    transaksiDetails += `\nTotal: Rp${totalHarga.toLocaleString()}`;

    const konfirmasi = confirm(transaksiDetails + "\n\nApakah Anda ingin melanjutkan?");
    
    if (konfirmasi) {
        alert("Transaksi berhasil!");
        // Reset pesanan setelah transaksi
        pesananList = [];
        totalHarga = 0;

        // Mengupdate daftar pesanan di UI
        const daftarPesanan = document.getElementById('daftarPesanan');
        daftarPesanan.innerHTML = ''; // Menghapus daftar pesanan
        document.getElementById('prosesTransaksiBtn').style.display = 'none'; // Menyembunyikan tombol Proses Transaksi
    } else {
        alert("Transaksi dibatalkan.");
    }
}


