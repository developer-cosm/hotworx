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
<option rel="AU" value="VIC" >Victoria</option>
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
      <option rel="AU" value="VIC" >Victoria</option>
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

        $('#contact-studio').append('<option rel="'+ state +'" data-code="'+ code +'" data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"  value="'+ name +'">'+ name +' '+location_text +'</option>');
       state_counter++;
    });
    
      
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
    
      //console.log($(this).find(':selected').data('email1'));
    let email1 = $(this).find(':selected').data('email1');
    let email2 = $(this).find(':selected').data('email2');
    let email3 = $(this).find(':selected').data('email3');
    let code = $(this).find(':selected').data('code');
    $('.contact-form-default').append('<input type="hidden" name="email1" class="input_email1" value="'+ email1 +'">');
    $('.contact-form-default').append('<input type="hidden" name="email2" class="input_email2" value="'+ email2 +'">');
    $('.contact-form-default').append('<input type="hidden" name="email3" class="input_email3" value="'+ email3 +'">');
    $('.contact-form-default').append('<input type="hidden" name="code" class="" value="'+ code +'">');
  })
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

    //scrollbar
     $("ul.results").mCustomScrollbar();







  
})// Document ready






