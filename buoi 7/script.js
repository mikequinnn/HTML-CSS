$(document).ready(function() {
    function activeTab(obj) {
        $('button').removeClass('active');
        $(obj).addClass('active');
        var id = "#tab-" + $(obj).text().toLowerCase()
        $('.tab-document').hide();
        $(id).show();
    }
    $('button').click(function() {
        activeTab(this);
        return false;
    });
    activeTab($('.btn button:first-child'));
});