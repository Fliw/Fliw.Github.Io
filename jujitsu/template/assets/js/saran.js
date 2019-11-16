
  $('document').ready(function()
{ 
   $("#saran-form").validate({
        rules: {
           
      saran: {
        required: true,
        minlength: 5
       
      },
        captcha: {
        required: true,
        minlength: 3,
        maxlength: 3,
        number: true
      },
        },
        //For custom messages
        messages: {
           
           saran:{
                required: "Isi Saran",
                minlength: "Minimal 5 Karakter"
            },
            captcha:{
                required: "Isi Angka Acak Di atas",
                minlength: "Minimal 3 Karakter",
                 maxlength: "Maksimal 3 Karakter",
                  number: "Masukkan Hanya Angka"
            },
        },
       
      errorPlacement : function(error, element) {
        $(element).closest('.form-group').find('.help-block').html(error.html());

       },
       highlight : function(element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        
       },
       unhighlight: function(element, errorClass, validClass) {
        $(element).closest('.form-group').removeClass('has-error');
        $(element).closest('.form-group').find('.help-block').html('');
        
       },
      submitHandler: submitForm
     });
     function submitForm()
     {    
      var data = $("#saran-form").serialize();
        var url = $('#url').val();
        
      $.ajax({
        
      type : 'POST',
      url  : url+'Home/kirim_saran',
      data : data,
      beforeSend: function()
      { 
        $("#error1").fadeOut();
        $("#btn-saran").html('Loading...').prop('disabled', true);
      },
        statusCode: {
    403: function() {
        $("#error").fadeIn(1000, function(){            
        toastr.error('Session Anda Habis, Silahkan Reload Halaman Ini', {timeOut: 5000});
        $("#btn-login").html('Sign In').prop('disabled', false);
       
                      
                      });
    }
  },
      success :  function(response)
         {            
          if(response=="ok"){
                  
            
            $("#error1").fadeIn(1000, function(){           
        toastr.success('Kirim Saran Sukses', {timeOut: 5000});

                      $("#btn-saran").html('Kirim Saran Sukses').prop('disabled', true);
                      });
          
          
          } else if(response=="captcha"){
                  
            
            $("#error").fadeIn(1000, function(){  
            toastr.error('<strong>Captcha </strong>yang kamu masukkan salah!', {timeOut: 5000});         
            $("#btn-saran").html('Reset').prop('disabled', false);
                      });
          }else {
                  
            $("#error1").fadeIn(1000, function(){           
        toastr.info('Gagal Kirim Saran', {timeOut: 5000});
                    $("#btn-saran").html('KIRIM').prop('disabled', false);
                  });
          }
        }
      });
        return false;
    }
     /* daftar submit */
});
