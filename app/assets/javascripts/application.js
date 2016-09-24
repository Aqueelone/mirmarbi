// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.isinview
//= require wow
//= require gravtastic
//= require jquery.minicolors
//= require jquery.minicolors.simple_form
//= require refile
//= require turbolinks
//= require_tree .

jQuery(document).ready(function(callback) {
    var $ = jQuery;

    var screenRes = $(window).width(),
        screenHeight = $(window).height(),
        html = $('html');

    locale = getLocale();
    $('.mod-loader').hide();
    $(document).ajaxStart(function(){$(".mod-loader").show();}).ajaxComplete(function(){$(".mod-loader").hide()});

    start_up();
    if (Turbolinks.supported) {
        $(document).on('turbolinks:render', function(){
            $('.mod-loader').hide();
            callback;
        });
    }
    $(window).on('load', callback);
    $(document).on('page:load', callback);
    $(document).on('page:restore', callback);
});
jQuery(document).on('ready window:load page:load page:restore', function(){start_up();});

var locale = 'ru';

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var getLocale = function getLocale() {
    return getUrlParameter('locale') === undefined ? $('body > #locale').val() : getUrlParameter('locale');
}
function getLocaleIso(){
    if(getLocale === 'ua') localeIso = 'uk_UA';
    if(getLocale === 'ru') localeIso = 'ru_RU';
    if(getLocale === 'en') localeIso = 'en_US';
    if(getLocale === 'be') localeIso = 'be_BY';
    if(getLocale === 'pl') localeIso = 'pl_PL';
    if(getLocale === 'tr') localeIso = 'tr_TR';
}
function getSocial(){
    $('#social a.social').on('hover mouseover', function(event){
        event.stopPropagation();
        social = $(event.currentTarget).attr('data-link');
        if($('.insert', event.currentTarget).html().length == 0) {
            $('.insert', event.currentTarget).html('<div class="div-loader"><img alt="loading.." class="loader" src="/ajax-loading.gif" title="loading..."></div>');
            $.getScript(getSocialUrl(social)).done(function(){ $('.insert', event.currentTarget).load(social);});
        }
    });
}

function setActive(obj) {
    $('.navbar-nav li.active').removeClass('active');
    $(obj).parent('li').addClass('active');
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function isValidCell(tel) {
    var pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return pattern.test(tel);
}

function start_up(){
    var screenRes = $(window).width(),
        screenHeight = $(window).height(),
        html = $('html');

    $('.mod-loader').hide();
    $(document).ajaxStart(function(){$(".mod-loader").show();}).ajaxComplete(function(){$(".mod-loader").hide()});

// wow
    new WOW().init();
    renew_hash();
// IE<8 Warning
    if (html.hasClass("ie7")) {
        $("body").empty().html('Please, Update your Browser to at least IE8');
    }

// buttons
    $('a.btn, span.btn').on('mousedown', function(){
        $(this).addClass('active');
    });
    $('a.btn, span.btn').on('mouseup mouseout', function(){
        $(this).removeClass('active');
    });

// topnavbar activity
    $('.main-nav .navbar-nav.direct a').click( function() {
        setActive($(this));
    });

//colorchooser
    $('#color_color_gid').minicolors( {theme: 'bootstrap' })

//  HomeFaces
    $('#home-slider').waypoint(function(){
        catalog_choose();
        show_catalog();
    });
    getLocaleIso();
    getSocial();
}

function renew_hash(){
    $('.scroll a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        target = $(event.currentTarget).attr('href');
        if(target.indexOf('#') < 0) target = '#home';
        $('html, body').animate({
            scrollTop: $(target).offset().top + 50
        }, 300);
        return false;
    });
    if($('.top_box').length == 0) {
        $('.to_catalog').on('click', function(event){
            event.stopPropagation();
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('#catalog').offset().top + 50
            }, 300);
        });
        $('.to_order').on('click', function(event){
            event.stopPropagation();
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('#order').offset().top + 50
            }, 300);
        });
    }
}
function catalog_choose(){
    $('#navpanel0 .catalog-toggle').on('click', function(event){
        id = $(event.currentTarget).attr('id').replace('catalog-', '');
        $(event.currentTarget).tab('show');
        $('#navpanel0 li').removeClass('active');
        $(event.currentTarget).parent('li').addClass('active');
        event.stopPropagation();
        event.preventDefault();
        $('#catalog').hide(500, function(){
            $('#catalog').html('');
            $.ajax({
                type: 'GET',
                url: '/categories/'+ id +'/session_update?locale=' + getLocale(),
                cache: false
            }).done(function(data){
                show_catalog();
                $('#catalog').show(1500);
            });
        });
    })
}
function choose_category(){
    $('#category_category_id').on('change', function(event){
        event.stopPropagation();
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/categories/'+ $(event.currentTarget).val() +'/session_update?locale=' + getLocale(),
            cache: false
        }).done(function(data){$(event.currentTarget).parent().append(data).children('i').show(500)});
    });
}
function show_catalog(){
    width = $(window).width();
    height = $(window).height();
}