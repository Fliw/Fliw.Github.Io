
  $('document').ready(function()
{ 
   $("#kontak-form").validate({
        rules: {
           nama: {
                required: true,
                
                maxlength: 50,
                minlength: 3
            },
            email: {
                required: true,
                email:true,
                maxlength: 100,
                minlength: 10
            },
            phone: {
        required: true,
        minlength: 10,
        maxlength: 12,
        number: true
      },
      pesan: {
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
            email:{
                required: "Isi Email",
                minlength: "Minimal 10 Karakter",
                 maxlength: "Maksimal 100 Karakter",
                 email: "Format Email Salah"
            },
            nama:{
                required: "Isi Nama",
                minlength: "Minimal 3 Karakter",
                 maxlength: "Maksimal 50 Karakter"
            },
            phone:{
                required: "Isi Nomor Handphone",
                minlength: "Minimal 10 Karakter",
                 maxlength: "Maksimal 12 Karakter",
                 number: "Masukkan Hanya Angka"
            },
           pesan:{
                required: "Isi Pesan",
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
      var data = $("#kontak-form").serialize();
        var url = $('#url').val();
    
      $.ajax({
        
      type : 'POST',
      url  : url+'Home/kirim_pesan',
      data : data,
      beforeSend: function()
      { 
        $("#error1").fadeOut();
        $("#btn-kontak").html('Loading...').prop('disabled', true);
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
        toastr.success('Kirim Pesan Sukses', {timeOut: 5000});

                      $("#btn-kontak").html('Kirim Pesan Sukses').prop('disabled', true);
                      });
          
          
          } else if(response=="captcha"){
                  
            
            $("#error").fadeIn(1000, function(){  
            toastr.error('<strong>Captcha </strong>yang kamu masukkan salah!', {timeOut: 5000});         
            $("#btn-kontak").html('Reset').prop('disabled', false);
                      });
          }else {
                  
            $("#error1").fadeIn(1000, function(){           
        toastr.info('Gagal Kirim Pesan', {timeOut: 5000});
                    $("#btn-kontak").html('KIRIM').prop('disabled', false);
                  });
          }
        }
      });
        return false;
    }
     /* daftar submit */
});
