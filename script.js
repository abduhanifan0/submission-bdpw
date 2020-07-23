var Index = 0;
        perulangan();

        function perulangan() {
        var i;
        var x = document.getElementsByClassName("featured-images-biawak");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        Index++;

        if (Index > x.length) {Index = 1}    
        x[Index-1].style.display = "block";  
        setTimeout(perulangan, 2000); // Merubah gambar setiap 2 detik
    }