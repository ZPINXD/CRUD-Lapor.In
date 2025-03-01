document.getElementbyId("formaduan").addEventListener("submit", function (event) {
    event.preventDefault(); //mencegah reload

    //ambil data dari form

    let nama = document.getElementbyId("nama").value;
    let alamat = document.getElementbyId("alamat").value;
    let tglkejadian = document.getElementbyId("tglkejadian").value;
    let lkskejadian = document.getElementbyId("lkskejadian").value;
    let adukejadian = document.getElementbyId("adukejadian").value;
    let anonim = document.querySelector('input[name="anonim"]:checked').value;

   
})