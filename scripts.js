jQuery(document).ready(function(){

  $('#contact-state').append(`<option rel="US" value="AL" >Alabama</option>
<option rel="US" value="AK" >Alaska</option>
<option rel="US" value="AZ" >Arizona</option>
<option rel="US" value="AR" >Arkansas</option>
<option rel="US" value="CA" >California</option>
<option rel="US" value="CO" >Colorado</option>
<option rel="US" value="CT" >Connecticut</option>
<option rel="US" value="DE" >Delaware</option>
<option rel="US" value="FL" >Florida</option>
<option rel="US" value="GA" >Georgia</option>
<option rel="US" value="HI" >Hawaii</option>
<option rel="US" value="ID" >Idaho</option>
<option rel="US" value="IL" >Illinois</option>
<option rel="US" value="IN" >Indiana</option>
<option rel="US" value="IA" >Iowa</option>
<option rel="US" value="KS" >Kansas</option>
<option rel="US" value="KY" >Kentucky</option>
<option rel="US" value="LA" >Louisiana</option>
<option rel="US" value="ME" >Maine</option>
<option rel="US" value="MD" >Maryland</option>
<option rel="US" value="MA" >Massachusetts</option>
<option rel="US" value="MI" >Michigan</option>
<option rel="US" value="MN" >Minnesota</option>
<option rel="US" value="MS" >Mississippi</option>
<option rel="US" value="MO" >Missouri</option>
<option rel="US" value="MT" >Montana</option>
<option rel="US" value="NE" >Nebraska</option>
<option rel="US" value="NV" >Nevada</option>
<option rel="US" value="NH" >New Hampshire</option>
<option rel="US" value="NJ" >New Jersey</option>
<option rel="US" value="NM" >New Mexico</option>
<option rel="US" value="NY" >New York</option>
<option rel="US" value="NC" >North Carolina</option>
<option rel="US" value="ND" >North Dakota</option>
<option rel="US" value="OH" >Ohio</option>
<option rel="US" value="OK" >Oklahoma</option>
<option rel="US" value="OR" >Oregon</option>
<option rel="US" value="PA" >Pennsylvania</option>
<option rel="US" value="RI" >Rhode Island</option>
<option rel="US" value="SC" >South Carolina</option>
<option rel="US" value="SD" >South Dakota</option>
<option rel="US" value="TN" >Tennessee</option>
<option rel="US" value="TX" >Texas</option>
<option rel="US" value="UT" >Utah</option>
<option rel="US" value="VT" >Vermont</option>
<option rel="US" value="VA" >Virginia</option>
<option rel="US" value="WA" >Washington</option>
<option rel="US" value="WV" >West Virginia</option>
<option rel="US" value="WI" >Wisconsin</option>
<option rel="US" value="WY" >Wyoming</option>
<option rel="AU" value="Victoria" >Victoria</option>
<option rel="IR" value="GY" >Galway</option>`);

  
   	$('#location-search-state').append(`<option rel="US" value="AL" >Alabama</option>
      <option rel="US" value="AK" >Alaska</option>
      <option rel="US" value="AZ" >Arizona</option>
      <option rel="US" value="AR" >Arkansas</option>
      <option rel="US" value="CA" >California</option>
      <option rel="US" value="CO" >Colorado</option>
      <option rel="US" value="CT" >Connecticut</option>
      <option rel="US" value="DE" >Delaware</option>
      <option rel="US" value="FL" >Florida</option>
      <option rel="US" value="GA" >Georgia</option>
      <option rel="US" value="HI" >Hawaii</option>
      <option rel="US" value="ID" >Idaho</option>
      <option rel="US" value="IL" >Illinois</option>
      <option rel="US" value="IN" >Indiana</option>
      <option rel="US" value="IA" >Iowa</option>
      <option rel="US" value="KS" >Kansas</option>
      <option rel="US" value="KY" >Kentucky</option>
      <option rel="US" value="LA" >Louisiana</option>
      <option rel="US" value="ME" >Maine</option>
      <option rel="US" value="MD" >Maryland</option>
      <option rel="US" value="MA" >Massachusetts</option>
      <option rel="US" value="MI" >Michigan</option>
      <option rel="US" value="MN" >Minnesota</option>
      <option rel="US" value="MS" >Mississippi</option>
      <option rel="US" value="MO" >Missouri</option>
      <option rel="US" value="MT" >Montana</option>
      <option rel="US" value="NE" >Nebraska</option>
      <option rel="US" value="NV" >Nevada</option>
      <option rel="US" value="NH" >New Hampshire</option>
      <option rel="US" value="NJ" >New Jersey</option>
      <option rel="US" value="NM" >New Mexico</option>
      <option rel="US" value="NY" >New York</option>
      <option rel="US" value="NC" >North Carolina</option>
      <option rel="US" value="ND" >North Dakota</option>
      <option rel="US" value="OH" >Ohio</option>
      <option rel="US" value="OK" >Oklahoma</option>
      <option rel="US" value="OR" >Oregon</option>
      <option rel="US" value="PA" >Pennsylvania</option>
      <option rel="US" value="RI" >Rhode Island</option>
      <option rel="US" value="SC" > South Carolina</option>
      <option rel="US" value="SD" >South Dakota</option>
      <option rel="US" value="TN" >Tennessee</option>
      <option rel="US" value="TX" >Texas</option>
      <option rel="US" value="UT" >Utah</option>
      <option rel="US" value="VT" >Vermont</option>
      <option rel="US" value="VA" >Virginia</option>
      <option rel="US" value="WA" >Washington</option>
      <option rel="US" value="WV" >West Virginia</option>
      <option rel="US" value="WI" >Wisconsin</option>
      <option rel="US" value="WY" >Wyoming</option>
      <option rel="AU" value="Victoria" >Victoria</option>
      <option rel="IR" value="GY" >Galway</option>`);   
  




      let state_counter = 0;
    $('.state-collection .w-dyn-item').each(function(i,item){
        $(this).attr('data-id', state_counter);
        let name = $(this).find('.athrzd_location_name').text();
        let state = $(this).find('.state').text();
        let code = $(this).find('.loc-code').text();
        let email_1 = $(this).find('.email-1').text();
        let email_2 = $(this).find('.email-2').text();
        let email_3 = $(this).find('.email-3').text();
        let location_tag = $(this).find('.location-tag').text();
        if(location_tag){
          location_text = location_tag;
        }else{
          location_text = '';
        } 

        $('#contact-studio').append('<option rel="'+ state +'" data-code="'+ code +'" data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"  value="'+ name +'">'+ name + '</option>');
       state_counter++;
    });
    
    /*
    $('.australia-studio .w-dyn-item').each(function(i,item){
        let name = $(this).find('.athrzd_location_name').text();
        let state = $(this).find('.state').text();
        let code = $(this).find('.loc-code').text();
        let email_1 = $(this).find('.email-1').text();
        let email_2 = $(this).find('.email-2').text();
        let email_3 = $(this).find('.email-3').text();
        let location_tag = $(this).find('.location-tag').text();    

        if(location_tag){
          location_text = location_tag;
        }else{
          location_text = '';
        } 
      
        $('#contact-studio').append('<option rel="'+ state +'" data-code="'+ code +'" data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"   value="'+ name +'">'+ name +' '+ location_text +'</option>');
    });   
    
    $('.ireland-studios .w-dyn-item').each(function(i,item){
        let name = $(this).find('.athrzd_location_name').text();
        let state = $(this).find('.state').text();
        let code = $(this).find('.loc-code').text();
        let email_1 = $(this).find('.email-1').text();
        let email_2 = $(this).find('.email-2').text();
        let email_3 = $(this).find('.email-3').text();
        let location_tag = $(this).find('.location-tag').text();
        let location_text;
        if(location_tag){
          location_text = location_tag;
        }else{
          location_text = '';
        }  
        $('#contact-studio').append('<option rel="'+ state +'" data-code="'+ code +'" data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"  value="'+ name +'">'+ name +' '+ location_text +'</option>');
    });

    */
    
    
    
      //Contact us and Free trial Form logic
    var $supCat = $('#Country'),
        $cat = $("#contact-state"),
        $subcat = $("#contact-studio");     
  
      $cat.prop("disabled", true);
      $subcat.prop("disabled", true);
      //$('#contact-studio').val('HOTWORX- Bartlett, TN');


    $supCat.on("change",function(){
            //alert('changed');
      //$subcat.find("option").hide();
      //$subcat.find("option").unwrap('<span>');

      $subcat.find("option").each(function(idx,item){
        if($(this).parent().is('span')){
            $(this).unwrap();
            //console.log('span parent');
        }
      })
      $subcat.find("option").not(':first').wrap('<span>');
    

      $subcat.prop('selectedIndex',0);
      $subcat.prop("disabled",true);
      
      //$cat.find("option").hide();
      $cat.find("option").each(function(idx,item){
        if($(this).parent().is('span')){
            $(this).unwrap();
            //console.log('span parent');
        }
      })


      $cat.find("option").not(':first').wrap('<span>');
      $cat.prop('selectedIndex',0);
      $cat.prop("disabled",false);
      var _rel = $(this).val();
      //$cat.find("[rel~='"+_rel+"']").show();
      $cat.find("span option[rel~='"+_rel+"']").unwrap();

   });


  $cat.on("change",function(){

    //$subcat.find("option").hide();

      $subcat.find("option").each(function(idx,item){
        if($(this).parent().is('span')){
            $(this).unwrap();
        }
      })
    $subcat.find("option").not(':first').wrap('<span>');
    $subcat.prop('selectedIndex',0);
    $subcat.prop("disabled",false);
    var rel_cat = $(this).val();
    //$subcat.find("[rel~='"+rel_cat+"']").show();
    $subcat.find("span option[rel~='"+rel_cat+"']").unwrap();


  });
  $subcat.on("change", function(){
    
    $('.input_email1').remove();
    $('.input_email2').remove();
    $('.input_email3').remove();
    $('.studio_code').remove();
    
      //console.log($(this).find(':selected').data('email1'));
    let email1 = $(this).find(':selected').data('email1');
    let email2 = $(this).find(':selected').data('email2');
    let email3 = $(this).find(':selected').data('email3');
    let code = $(this).find(':selected').data('code');
    $('.contact-form-default').append('<input type="hidden" name="email1" class="input_email1" value="'+ email1 +'">');
    $('.contact-form-default').append('<input type="hidden" name="email2" class="input_email2" value="'+ email2 +'">');
    $('.contact-form-default').append('<input type="hidden" name="email3" class="input_email3" value="'+ email3 +'">');
    $('.contact-form-default').append('<input type="hidden" name="code" class="studio_code" value="'+ code +'">');
  })


  // Get Cookies if they are set for Single Location Page
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {

        var locCountry=getCookie("locCountry");
        if(locCountry == 'USA'){
            locCountry = "US";
        }else if(locCountry == 'Ireland'){
            locCountry = 'IR'
        }else if(locCountry == 'Australia'){
            locCountry = 'AU'
        }
        var locState=getCookie("locState");
        var locCode=getCookie("locCode");
        var email_1=getCookie("email_1");
        var email_2=getCookie("email_2");
        var email_3=getCookie("email_3");

        if (locCountry) {

            $cat.prop("disabled",false);
            $subcat.prop("disabled",false);

            $("#Country option").each(function(idx,item){
                var $this = $(this);
                if($this.val() == locCountry){
                   
                    $('#Country option[value="'+ locCountry +'"]').prop("selected", true);
                }
            });

            $("#contact-state option").each(function(idx,item){
                var $this = $(this);
                if($this.val() == locState){
                   
                    $('#contact-state option[value="'+ locState +'"]').prop("selected", true);
                }
            });

            $("#contact-studio option").each(function(idx,item){
                var $this = $(this);
                //console.log($this.attr('data-code'));
                
                if($this.attr('data-code') == locCode){
                    //console.log(idx);
                    $('#contact-studio option').eq(idx).prop('selected', true);
                }
                
            });
            // Setting hidden inputs at contact form

            $('.contact-form-default').append('<input type="hidden" name="email1" class="input_email1" value="'+ email_1 +'">');
            $('.contact-form-default').append('<input type="hidden" name="email2" class="input_email2" value="'+ email_2 +'">');
            $('.contact-form-default').append('<input type="hidden" name="email3" class="input_email3" value="'+ email_3 +'">');
            $('.contact-form-default').append('<input type="hidden" name="code" class="studio_code" value="'+ locCode +'">');

        } else {

        }
    }

  checkCookie();    












  //End form logic for contact form and free trial form
  
  //Single Location Phone format

   //US Phone Format
    function phoneFormatUsa(phone) {
      phone = phone.replace(/[^0-9]/g, '');
      phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      return phone;
    } 

    //Australia Phone Format
    function phoneFormatAus(phone) {
      phone = phone.replace(/[^0-9]/g, '');
      phone = phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2 $3");
      return phone;
    }

    //Ireland Phone Format
    function phoneFormatIre(phone) {
      phone = phone.replace(/[^0-9]/g, '');
      //phone = phone.replace(/(\d{2})(\d{3)(\d{4})/, "($1) $2 $3");
       
      return phone;
    }

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = (phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{2})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2]+' '+ match[3]
    }
    return null
  }




  
  var location_phone = $('.us-studio .us-loc-phone').text();
  if(location_phone){
      location_phone = phoneFormatUsa(location_phone);
      $('.us-studio .us-loc-phone').text(location_phone); 
  }
    
  var aus_location_phone = $('.us-studio .aus-loc-phone').text();
  if(aus_location_phone){
      aus_location_phone = phoneFormatAus(aus_location_phone);
      $('.us-studio .aus-loc-phone').text(aus_location_phone); 
  }
      
  var ire_location_phone = $('.us-studio .ire-loc-phone').text();
  if(ire_location_phone){
      ire_location_phone = phoneFormatAus(ire_location_phone);
      $('.us-studio .ire-loc-phone').text(ire_location_phone); 
  }
  



  let ireland_phone = $('.ireland-studio .location-phone').text();
  
  if(ireland_phone){
      //ireland_phone = phoneFormatIre(ireland_phone);
      
    
    ireland_phone = formatPhoneNumber(ireland_phone);
    //alert(ireland_phone);
    $('.ireland-studio .location-phone').text(ireland_phone);
    
  }    
    //au ph format
    let single_aus_phone_holder = $('.single-aus-studio .location-phone');
    let single_aus_phone = single_aus_phone_holder.text();
    let formatted_single_aus_phone = phoneFormatAus(single_aus_phone);
    single_aus_phone_holder.text(formatted_single_aus_phone);



  //US Location phone verification of form

    var phone_no; var validation;
    function validate_phone(phone_no){
      if(phone_no.length>0){
         validation = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone_no);
        if(validation == false){
            alert('Please enter a valid phone no.');
          return false;
        }
        return true;
      } 
    }
    
    $("body.US .loc-form-phone").focusout(function(){

      if(validate_phone($(this).val())){
        console.log('validated');
      }else{
        console.log('not validated');
      }
    });

    $('body.contact-page ')

    // Aus ph validation
    function allnumeric(inputtxt){

      validation = /^[0-9]+$/.test(inputtxt);
      if(validation && inputtxt.length >= 10 && inputtxt.length<=12){
          return true;
          $('.loc-sumbit').prop('disabled', false);
      }else {
          return false;
          $('.loc-sumbit').prop('disabled', true);
      }
    }
    
    function check_aus_phone(){
  
    }

    $("body.Australia .loc-form-phone").focusout(function(){
       if(allnumeric($(this).val())){
        //console.log('validated');
        $('.loc-sumbit').prop('disabled', false);
      }else{
        alert('Please input a valid Phone Number');
        $('.loc-sumbit').prop('disabled', true);
      } 
    });

  //Franchise fee text based on country selecion 
  $('#Country').on('change', function(){
    //alert(this.value);
    if(this.value == 'United States'){
        $('.aus-frnchs-rqrmnt').css('display','none');
        $('.glbl-frnchs-rqrmnt').css('display','none');
      $('.us-frnchs-rqrmnt').css('display','block');
    }else if(this.value == 'Australia'){
        $('.glbl-frnchs-rqrmnt').css('display','none');
      $('.us-frnchs-rqrmnt').css('display','none');      
      $('.aus-frnchs-rqrmnt').css('display','block');
    }else{
      $('.us-frnchs-rqrmnt').css('display','none');      
      $('.aus-frnchs-rqrmnt').css('display','none');      
      $('.glbl-frnchs-rqrmnt').css('display','block');
    }
  })
  
  //Get Url params
  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };
  var source = getUrlParameter('source');
  var utm_source = getUrlParameter('utm_source');
  //console.log(source + '-'+ utm_source);
  //Setting Cookie from url params
  if(source ){
    setCookie("source", source, 365);
  }else if(utm_source){
    setCookie("utm_source", utm_source, 365);
  }else{
    
  }
  
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); // 1 day
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
 //======== Adding hidden campaign field to forms
  
  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  function param_checkCookie() {
      let cookie_source = getCookie("source");
      let cookie_utm_source = getCookie("utm_source");
        //console.log(source + '-' + utm_source);
      if (cookie_source || cookie_utm_source ) {
        $('.contact-form-default').append(`<input type="hidden" name="Source" value=${cookie_source}>`);
            $('.contact-form-default').append(`<input type="hidden" name="Utm Source" value=${cookie_utm_source}>`);
            $('.loc-subs-form').append(`<input type="hidden" name="Source" value=${cookie_source}>`);
            $('.loc-subs-form').append(`<input type="hidden" name="Utm Source" value=${cookie_utm_source}>`);
            $('.franchise-form').append(`<input type="hidden" name="Source" value=${cookie_source}>`);
            $('.franchise-form').append(`<input type="hidden" name="Utm Source" value=${cookie_utm_source}>`);          
      }
  }

  param_checkCookie(); 
  // Cookie end

  //Footer subscription email validation
    function validate_email(email){
        if(email.length>0){
            validation_email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
            if(validation_email == false){
                return false;
            }
            return true;
        } 
    }  
  
  
    $('.footer-subscription .subs-submit').click(function(e){
        var email = $('.footer-subscription .email-field').val();
        //console.log(email);

        if(validate_email(email)){
            //alert('Submitted');
        }else{
            e.preventDefault();
            alert('Please enter a valid email address.');
        }

    });

    //alert for screen readers on footer subscription
      $('#footer .w-form-done').attrchange({
        trackValues: true,
        callback: function (event) {
            //alert('color changed');
            $('#footer-subs-errors').html('Subscribed successfully.');
        }        
      });

    //alert for screen readers on VI application
      $('.vi-application .w-form-done').attrchange({
        trackValues: true,
        callback: function (event) {
            //alert('color changed');
            $('#wf-form-Virtual-Instructor-Form #errors').html('Application sent successfully.');
            $('.vi-application .w-form-done').focus();
        }        
      });

    //alert for screen readers on news subscription
      $('.subscription .w-form-done').attrchange({
        trackValues: true,
        callback: function (event) {
            //alert('color changed');
            $('#wf-form-NEWS-SUBSCRIPTION #errors').html('Subscribed successfully.');

        }        
      });
    //alert for screen readers on blog subscription
      $('.subscription .w-form-done').attrchange({
        trackValues: true,
        callback: function (event) {
            //alert('color changed');
            $('#wf-form-BLOG-SUBSCRIPTION #errors').html('Subscribed successfully.');
        }        
      });





        //locations page search result count for screen readers
          $('.locations-map #pac-input').focusout(function(){
            setTimeout(function(){
              let resCount = $('.results li').length;
              $('.result_message').html(`${resCount} results found`);         

            }, 1500)
          });


  
})// Document ready






