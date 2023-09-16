var nabiId = location.search.substring(1);
AOS.init();
let tahun = "sebelum masehi";
$(document).ready(function() {
    $.ajax({
        url: "https://islamic-api-indonesia.herokuapp.com/api/data/kisahnabi?nabi=" + nabiId,
        type: "get",
        success: function(response) {
            $("#mainFrameHadith").fadeIn(1000);
            $("#loadingText").fadeOut(1000);
            $("#nabiImg").attr("src", response.result.nabi.image);
            checkMasehi(response.result.nabi.nabi);
            $("#nabiLahir").html("Tahun Kelahiran : " + response.result.nabi.lahir + " " + tahun);
            $("#nabiTempat").html("Tempat Dakwah : " + response.result.nabi.tempat);
            $("#nabiUmur").html("Umur Nabi : " + response.result.nabi.umur);
            $("#nabiStory").html(response.result.nabi.kisah);
            $("#nabiTitle").html("Cerita " + response.result.nabi.nabi);
            page += 20;
        },
        error: function(response) {
            alert("Maaf Terjadi Kesalahan!");
        }
    })
});

$(".btnNext").click(function() {
    window.history.replaceState(null, null, "?" + hadithId + "|" + page);
    location.reload();
});
$(".btnPrev").click(function() {
    if (!$(".btnPrev").hasClass('disabled')) {
        page -= 40;
        console.log(page);
        window.history.replaceState(null, null, "?" + hadithId + "|" + page);
        location.reload();
    }
});

function checkMasehi(namaNabi) {
    if (namaNabi == "Nabi Yahya AS" || namaNabi == "Nabi Isa AS" || namaNabi == "Nabi Muhammad SAW") {
        tahun = "setelah masehi";
    }
}