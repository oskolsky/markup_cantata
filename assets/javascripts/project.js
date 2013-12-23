
$(function() {
  
  $('#footer').stickyFooter();

  $('.form_text.__phone').mask('+7 (999) 999-99-99');



  //****************************************************************************************************
  //
  // .. ORDER VALIDATION
  //
  //****************************************************************************************************
  setInterval(function() {
    var data = {
      name: $('.order-form').find('.form_text[data-name="name"]'),
      phone: $('.order-form').find('.form_text[data-name="phone"]')
    };
    var $el = $('.order-form').find('.form_button');
    data.name.val() != '' && data.phone.val() != '' ? $el.removeAttr('disabled') : $el.attr('disabled', 'disabled');
  }, 1);



  //****************************************************************************************************
  //
  // .. SUBSCRIBE
  //
  //****************************************************************************************************
  $(document).on('focus', '.subscribe-form .form_text[data-name="name"], .subscribe-form .form_text[data-name="email"]', function() {
    var default_val = $(this).data('value');
    var val = $(this).val();
    if (default_val == val) {
      $(this).val('');
    }
  });
  $(document).on('focusout', '.subscribe-form .form_text[data-name="name"], .subscribe-form .form_text[data-name="email"]', function() {
    var default_val = $(this).data('value');
    var val = $(this).val();
    if (val == '') {
      $(this).val(default_val);
    }
  });
  // Validation
  setInterval(function() {
    var data = {
      name: $('.subscribe-form').find('.form_text[data-name="name"]'),
      email: $('.subscribe-form').find('.form_text[data-name="email"]')
    };
    var $el = $('.subscribe-form').find('.form_button');
    data.name.val() != data.name.data('value') && data.email.val() != data.email.data('value') && data.name.val() != '' && data.email.val() != '' ? $el.removeAttr('disabled') : $el.attr('disabled', 'disabled');
  }, 1);



  //****************************************************************************************************
  //
  // .. PROMO CODE
  //
  //****************************************************************************************************
  $('.bag-summary_promo').find('.bag-summary_promo_input').keyup(function() {
    var val = $(this).val();
    if (val != '') {
      $('.bag-summary_promo').find('.bag-summary_promo_submit').removeAttr('disabled');
    } else {
      $('.bag-summary_promo').find('.bag-summary_promo_submit').attr('disabled', 'disabled');
    }
  });



  //****************************************************************************************************
  //
  // .. CUSTOM SELECT
  //
  //****************************************************************************************************
  $('.custom-select').each(function() {

    var _this = this;

    $(this).find('p a').click(function() {
      $('.custom-select').find('ul').hide();
      $(_this).find('ul').show();
      $(_this).addClass('__current');
      return false;
    });

    $(this).find('ul').find('a').click(function() {
      var value = $(this).data('value');
      var text = $(this).text();
      $(this).closest('ul').hide();
      $(_this).find('input[type="hidden"]').val(value)
      $(_this).find('p > a > span').text(text);
      $(_this).removeClass('__current');
      return false;
    });

  });

  $(document).click(function() {
    if ($('.custom-select').find('ul').is(':visible')) {
      $('.custom-select').find('ul').hide();
      $('.custom-select').removeClass('__current'); 
    }
  });



  //****************************************************************************************************
  //
  // .. BAY ITEM
  //
  //****************************************************************************************************
  $('.js-in-bag').click(function() {
    $(this).hide();
    $('.js-order-link').css({display: 'block'});
    return false;
  });



  //****************************************************************************************************
  //
  // .. PHOTO GALLERY
  //
  //****************************************************************************************************
  $('.gallery').find('.gallery_thumb_i_a').click(function() {
    var rel = $(this).attr('rel');
    $('.gallery').find('.gallery_thumb_i_a.__current').removeClass('__current');
    $(this).addClass('__current');
    $('.gallery').find('.gallery_preview').find('img').attr({src: rel});
    $('.gallery').find('.gallery_preview').find('a').attr({href: rel});
    $('.gallery').find('.gallery_plus').attr({href: rel});
    return false;
  });



  //****************************************************************************************************
  //
  // .. DOUBLE HOVER
  //
  //****************************************************************************************************
  doubleHover('a.double-hover', 'hover');



  //****************************************************************************************************
  //
  // .. FORMS
  //
  //****************************************************************************************************
  $('.form').customForm(); // $('#checkbox').customForm() to init single element; $('body').customForm() to init all elements



  //****************************************************************************************************
  //
  // .. SCROLL TO
  //
  //****************************************************************************************************
  $('a[data-scroll="true"]').on('click touchstart', function() {
    var       $this = $(this),
             anchor = $this.attr('href'),
        destination = $(anchor).offset().top;
    $('html, body').animate({scrollTop: destination}, 500);
    return false;
  });
  


  //****************************************************************************************************
  //
  // .. SLIDERS
  //
  //****************************************************************************************************
  $('.slider').find('.slides').cycle({
    log: false,
    speed: 500,
    swipe: true,
    timeout: 4000,
    slides: $(this).find('.slide'),
    pager: '.slider_pager'
  });



  //****************************************************************************************************
  //
  // .. DIALOGS
  //
  //****************************************************************************************************
  //
  // .. Open dialog
  //
  $(document).on('click touchstart', '[data-dialog="true"]', function() {
    var url = $(this).data('url');
    
    $.arcticmodal({
      type: 'ajax',
      url: url
    });
    
    return false;
  });

  //
  // .. Close dialog
  //
  $(document).on('click touchstart', '.js-dialog_close', function() {
    $.arcticmodal('close');
  });



  //****************************************************************************************************
  //
  // .. ACCOUNTING
  //
  //****************************************************************************************************
  //
  // .. Number
  //
  $('.format-number').each(function() {
    var
      number = parseInt($(this).text()),
      formatNumber = accounting.formatNumber(number);

    $(this).text(formatNumber);
  });

  //
  // .. Money
  //
  $('.format-money').each(function() {
    var c = accounting.settings.currency;

    if ($(this).hasClass('__rub')) {
      c.format = '%v';
    } else if ($(this).hasClass('__usd')) {
      c.symbol = '$';
      c.format = '%s%v';
    } else if ($(this).hasClass('__eur')) {
      c.symbol = '€';
      c.format = '%s%v';
    }

    var
      number = parseFloat($(this).text()),
      formatMoney = accounting.formatMoney(number);
    
    if ($(this).hasClass('__rub')) {
      $(this).text(formatMoney).append('&nbsp;<i class="fa fa-ruble"></i>');
    } else {
      $(this).text(formatMoney);
    }
  });



  //****************************************************************************************************
  //
  // .. LOAD
  //
  //****************************************************************************************************
  $(window).load(function() {});



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {

    $('#footer').stickyFooter();

  });
  
});