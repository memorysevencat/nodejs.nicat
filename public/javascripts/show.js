/**
 * Created by lintao on 16-1-30.
 */
var select_option = function () {
    var upClick = "";
    $("#showList").click(function () {
        if ($(this).val() !== "" && $(this).val() !== upClick) {
            upClick = $(this).val();
            var thisv = $("#" + $(this).val().replace("show", "list"));
            thisv.css("background-color", "#C9F");
            (function (e) {
                setTimeout(function () {
                    thisv.css("background-color", "");
                }, 1000)
            })(thisv);
        }
    })
}