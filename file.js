document.getElementById("formaduan").addEventListener("submit", function(event) {
    event.preventDefault();
     // Tambahkan notifikasi verifikasi update
     if (confirm("Apakah Anda yakin ingin submit data?")) {
            // Jika user menekan OK, maka update data
            // Anda dapat menambahkan kode update data di sini
            let nama = document.getElementById("nama").value.trim();
            let alamat = document.getElementById("alamat").value.trim();
            let tglkejadian = document.getElementById("tglkejadian").value;
            let adukejadian = document.getElementById("adukejadian").value.trim();
            let fileInput = document.getElementById("myfile");
            let anonim = document.querySelector('input[name="jk"]:checked').value;
            let editIndex = document.getElementById("editIndex").value;
            
            let filePreview = "Tidak ada file";
            if (fileInput.files.length > 0) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    filePreview = `<img src="${e.target.result}" style="width: 100px; height: auto;">`;
                    simpanData(nama, alamat, tglkejadian, adukejadian, filePreview, anonim, editIndex);
                };
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                simpanData(nama, alamat, tglkejadian, adukejadian, filePreview, anonim, editIndex);
            }
        } else {
            // Jika user menekan Cancel, maka tidak update data
        }
});

function simpanData(nama, alamat, tglkejadian, adukejadian, filePreview, anonim, editIndex) {
    let tabel = document.getElementById("hasilTable").querySelector("tbody");
    if (editIndex) {
        let row = tabel.rows[editIndex];
        row.cells[0].textContent = anonim === "anon" ? "Anonymous" : nama;
        row.cells[1].textContent = alamat;
        row.cells[2].textContent = tglkejadian;
        row.cells[3].textContent = adukejadian;
        row.cells[4].innerHTML = filePreview;
        row.cells[5].textContent = anonim === "anon" ? "Anonymous" : "Public";
        document.getElementById("editIndex").value = "";
    } else {
        let newRow = tabel.insertRow();
        newRow.innerHTML = `
            <td>${anonim === "anon" ? "Anonymous" : nama}</td>
            <td>${alamat}</td>
            <td>${tglkejadian}</td>
            <td>${adukejadian}</td>
            <td>${filePreview}</td>
            <td>${anonim === "anon" ? "Anonymous" : "Public"}</td>
            <td>
                <button class="ubah">Edit</button>
                <button class="hapus">Delete</button>
            </td>
        `;
    }
    document.getElementById("formaduan").reset();
}

document.getElementById("hasilTable").addEventListener("click", function(event) {
  
    let target = event.target;
    if (target.classList.contains("hapus")) {
      // Tambahkan notifikasi verifikasi update
      if (confirm("Apakah Anda yakin ingin menghapus data?")) {
         // Jika user menekan OK, maka update data
         // Anda dapat menambahkan kode update data di sini
         target.closest("tr").remove();
     } else {
         // Jika user menekan Cancel, maka tidak update data
     }
    }
    if (target.classList.contains("ubah")) {
        let row = target.closest("tr");
        document.getElementById("nama").value = row.cells[0].textContent === "Anonymous" ? "" : row.cells[0].textContent;
        document.getElementById("alamat").value = row.cells[1].textContent;
        document.getElementById("tglkejadian").value = row.cells[2].textContent;
        document.getElementById("adukejadian").value = row.cells[3].textContent;
        document.getElementById("editIndex").value = row.rowIndex - 1;
        let anonimValue = row.cells[5].textContent === "Anonymous" ? "anon" : "public";
        document.querySelector(`input[name='jk'][value='${anonimValue}']`).checked = true;
         // Tambahkan notifikasi verifikasi update
        //  if (confirm("Apakah Anda yakin ingin mengupdate data?")) {
        //     // Jika user menekan OK, maka update data
        //     // Anda dapat menambahkan kode update data di sini
        // } else {
        //     // Jika user menekan Cancel, maka tidak update data
        // }
    }
});