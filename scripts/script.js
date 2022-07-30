$(document).ready(function() {

    $('#play1').magnificPopup({
        type: 'iframe',

        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            
          
          }
      });

      $('#play2').magnificPopup({
        type: 'iframe',

        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            
          
          }
      });

  });

