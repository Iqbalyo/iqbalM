document.querySelector('.work-item a').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link default
    var popup = document.getElementById('imagePopup');
    var popupImage = document.getElementById('popupImage');
    
    // Set the image in the popup
    popupImage.src = this.href;
    
    // Tampilkan pop-up
    popup.style.display = "block";

    // Fungsi untuk redirect saat pop-up diklik
    popup.addEventListener('click', function() {
        window.location.href = 'https://www.example.com'; // Ganti dengan URL tujuan Anda
    });
});