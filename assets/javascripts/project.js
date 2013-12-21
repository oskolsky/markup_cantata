
$(function() {
  
  $('#footer').stickyFooter();

  $('.form_text.__phone').mask('+7 (999) 999-9999');



  //****************************************************************************************************
  //
  // .. CUSTOM SELECT
  //
  //****************************************************************************************************
  $('.custom-select').each(function() {

    var _this = this;

    $(this).click(function() {
      $(this).find('ul').show();
      return false;
    });

    $(this).find('ul').find('a').click(function() {
      var value = $(this).data('value');
      var text = $(this).text();
      $(this).closest('ul').hide();
      $(_this).find('input[type="hidden"]').val(value)
      $(_this).find('p > a').text(text);
      return false;
    });

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
    speed: 1000,
    swipe: true,
    timeout: 0,
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