document.getElementById("formaduan").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let tglkejadian = document.getElementById("tglkejadian").value;
    let lkskejadian = document.getElementById("lkskejadian").value;
    let adukejadian = document.getElementById("adukejadian").value;
    let anonim = document.querySelector('input[name="jk"]:checked').value; // Menggunakan name="jk"

    // Ambil tabel
    let tabel = document.getElementById("hasilTable").querySelector("tbody");
    let newRow = tabel.insertRow();

    // Tambahkan data ke tabel
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${alamat}</td>
        <td>${tglkejadian}</td>
        <td>${lkskejadian}</td>
        <td>${adukejadian}</td>
        <td>${anonim}</td> 
    `;

    // Reset form setelah submit
    document.getElementById("formaduan").reset();
});
