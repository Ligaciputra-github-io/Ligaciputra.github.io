$('.progress .progress-bar').progressbar({
    display_text: 'center',
    use_percentage: false,
    amount_format: function(p, max, min) { return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' / ' + max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
});
$('#progress-header .progressbar-back-text').css('display', 'none');
$('#progress-header .progressbar-front-text').css('display', 'none');