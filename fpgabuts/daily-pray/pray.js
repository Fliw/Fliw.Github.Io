AOS.init();
$(document).ready(function() {
    $.ajax({
        url: "https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian",
        type: "get",
        success: function(response) {

        },
        error: function(response) {
            alert("Maaf Terjadi Kesalahan!");
        }
    })
});