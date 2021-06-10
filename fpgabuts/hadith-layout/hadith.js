var param = location.search.substring(1);
var splitter = param.split("|");
var hadithId = splitter[0];
var page = parseInt(splitter[1]);
AOS.init();
$(document).ready(function() {
    if (page == 20) {
        $('.btnPrev').addClass("disabled")
    }
    $.ajax({
        url: "https://api.hadith.sutanlab.id/books/" + hadithId + "?range=" + (page - 19) + "-" + page,
        type: "get",
        success: function(response) {
            $("#mainFrameHadith").fadeIn(1000);
            $("#loadingText").fadeOut(1000);
            for (var x = 0; x < 19; x++) {
                var content = '<h4> Hadist Nomor ' + response.data.hadiths[x].number + '</h4><a data-aos="zoom-in" data-aos-delay="200" style="background-color:#dbe6fd;box-shadow:-10px 0px 0px dodgerblue" class="rounded list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-"><h5 class="mb-1">' + response.data.hadiths[0].arab + '</h5></div><p class="mb-1 addReadMore showlesscontent">' + response.data.hadiths[x].id + '</p></a><br><br>';
                $("#mainContent").append(content);
            }
            $("#hadithTitle").html("Hadist Riwayat " + response.data.name);
            page += 20;
            AddReadMore();
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

function AddReadMore() {
    var carLmt = 280;
    var readMoreTxt = " ... Baca Lebih Banyak";
    var readLessTxt = " Baca Lebih Sedikit";
    $(".addReadMore").each(function() {
        if ($(this).find(".firstSec").length)
            return;
        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }
    });
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}