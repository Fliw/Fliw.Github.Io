$('[data-target="#hadithModal"]').on('click',
    function e() {
        $.ajax({
            url: "https://api.hadith.sutanlab.id/books/",
            type: "get",
            success: function(response) {
                for (var x = 0; x < 9; x++) {
                    var button = '<a href="./hadith-layout/index.html?' + response.data[x].id + '|20"<button class="btn btn-lg text-white" style="background-color:#00adb5;">' + response.data[x].name + ' Dengan Jumlah hadist ' + response.data[x].available + '</button></a><br><br>';
                    $(".hadithModalBody").append(button);
                }
            },
            error: function(response) {
                $("#loadingText").html("Maaf Terjadi Kesalahan!");
            }
        })
    });
$('[data-dismiss="modal"]').on('click',
    function e() {
        console.log("kehapus");
        $(".hadithModalBody").empty();
    });
    AOS.init();
    var typed = new Typed('#typed', {
        strings: ["ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ", "Hai Akhi!", "Selamat Datang di Aplikasi islami"],
        typeSpeed: 50,
        backSpeed: 20,
        showCursor:false,
        loop:true
      });
      