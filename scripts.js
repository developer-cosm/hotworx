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
        let name = $(this).find('.name').text();
        let state = $(this).find('.state').text();
        let email_1 = $(this).find('.email-1').text();
        let email_2 = $(this).find('.email-2').text();
        let email_3 = $(this).find('.email-3').text();
        let location_tag = $(this).find('.location-tag').text();
        $('#contact-studio').append('<option rel="'+ state +'" data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"  value="'+ name +'">'+ name + ' (' + location_tag+ ')' +'</option>');
       state_counter++;
    });
    
      
    $('.australia-studio .w-dyn-item').each(function(i,item){
        let name = $(this).find('.name').text();
        let state = $(this).find('.state').text();
        let email_1 = $(this).find('.email-1').text();
        let email_2 = $(this).find('.email-2').text();
        let email_3 = $(this).find('.email-3').text();
        let location_tag = $(this).find('.location-tag').text();    
      
        $('#contact-studio').append('<option rel="'+ state +'" data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"   value="'+ name +'">'+ name + ' (' + location_tag + ')' +'</option>');
    });   
    
    $('.ireland-studios .w-dyn-item').each(function(i,item){
        let name = $(this).find('.name').text();
        let state = $(this).find('.state').text();
        let email_1 = $(this).find('.email-1').text();
        let email_2 = $(this).find('.email-2').text();
        let email_3 = $(this).find('.email-3').text();
        let location_tag = $(this).find('.location-tag').text();
              
        $('#contact-studio').append('<option rel="'+ state +'"  data-email1="'+ email_1 +'" data-email2="'+ email_2 +'" data-email3="'+ email_3 +'"  value="'+ name +'">'+ name + ' (' + location_tag + ')' +'</option>');
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
      $subcat.find("option").hide();
      $subcat.prop('selectedIndex',0);
      $subcat.prop("disabled",true);
      
      $cat.find("option").hide();
      $cat.prop('selectedIndex',0);
      $cat.prop("disabled",false);
      var _rel = $(this).val();
      $cat.find("[rel~='"+_rel+"']").show();

   });


  $cat.on("change",function(){

    $subcat.find("option").hide();
    $subcat.prop('selectedIndex',0);
    $subcat.prop("disabled",false);
    var rel_cat = $(this).val();
    $subcat.find("[rel~='"+rel_cat+"']").show();


  });
  $subcat.on("change", function(){
    
    $('.input_email1').remove();
    $('.input_email2').remove();
    $('.input_email3').remove();
    
      //console.log($(this).find(':selected').data('email1'));
    let email1 = $(this).find(':selected').data('email1');
    let email2 = $(this).find(':selected').data('email2');
    let email3 = $(this).find(':selected').data('email3');
    $('.contact-form-default').append('<input type="hidden" name="email1" class="input_email1" value="'+ email1 +'">');
    $('.contact-form-default').append('<input type="hidden" name="email2" class="input_email2" value="'+ email2 +'">');
    $('.contact-form-default').append('<input type="hidden" name="email3" class="input_email3" value="'+ email3 +'">');
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




  
  var location_phone = $('.us-studio .location-phone').text();
  if(location_phone){
      location_phone = phoneFormatUsa(location_phone);
      $('.us-studio .location-phone').text(location_phone); 
  }
  
  let ireland_phone = $('.ireland-studio .location-phone').text();
  
  if(ireland_phone){
      //ireland_phone = phoneFormatIre(ireland_phone);
      
    
    ireland_phone = formatPhoneNumber(ireland_phone);
    //alert(ireland_phone);
    $('.ireland-studio .location-phone').text(ireland_phone);
    
  }    
  
  
  
})// Document ready

