
  $('document').ready(function()
{ 
   $("#pendaftaran-form").validate({
        rules: {
           nama: {
                required: true,
                
                maxlength: 50,
                minlength: 3
            },
            nim: {
                required: true,
                
                maxlength: 10,
                minlength: 10,
                number: true
            },
            
            jenis_kelamin: {
                required: true
            },
            no_hp: {
        required: true,
        minlength: 10,
        maxlength: 12,
        number: true
      },

      alamat: {
        required: true,
        minlength: 3,
      },
      tempat_lahir: {
        required: true,
        minlength: 3,
        maxlength: 25
       
      },
      
      tanggal_lahir: {
        required: true
      },
        
      fakultas: {
        required: true
      },
      jurusan: {
        required: true
      },
       fakultas_lain: {
        required: true
      },
      jurusan_lain: {
        required: true
      },
      strata: {
        required: true
      },
      angkatan_kuliah: {
                required: true,
                
                maxlength: 4,
                minlength: 4,
                number: true
            },
            angkatan_jujitsu: {
                required: true,
                
                maxlength: 4,
                minlength: 4,
                number: true
            },
        },
        //For custom messages
        messages: {
            nim:{
                required: "Isi NIM Kamu",
                minlength: "Minimal 10 Karakter",
                 maxlength: "Maksimal 10 Karakter",
                 number: "Masukkan Hanya Angka"
            },
             angkatan_kuliah:{
                required: "Isi Angkatan Kuliah Kamu",
                minlength: "Minimal 4 Karakter",
                 maxlength: "Maksimal 4 Karakter",
                 number: "Masukkan Hanya Angka"
            },
            angkatan_jujitsu:{
                required: "Isi Angkatan Jujitsu Kamu",
                minlength: "Minimal 4 Karakter",
                 maxlength: "Maksimal 4 Karakter",
                 number: "Masukkan Hanya Angka"
            },
            nama:{
                required: "Isi Nama Kamu",
                minlength: "Minimal 3 Karakter",
                 maxlength: "Maksimal 50 Karakter"
            },
           
            no_hp:{
                required: "Isi Nomor Handphone Kamu",
                minlength: "Minimal 10 Karakter",
                 maxlength: "Maksimal 12 Karakter",
                 number: "Masukkan Hanya Angka" 
            },
            
           tempat_lahir:{
                required: "Isi Tempat Lahir Kamu",
                minlength: "Minimal 3 Karakter",
                maxlength: "Maksimal 25 Karakter"
            },
            jenis_kelamin: "Isi Jenis Kelamin Kamu",
            tanggal_lahir: "Isi Tanggal Lahir Kamu",
            fakultas: "Isi Fakultas Kamu",
            jurusan: "Isi Jurusaan Kamu",
            alamat: "Isi Alamat Kamu Tinggal",
            fakultas_lain: "Isi Fakultas Kamu",
            jurusan_lain: "Isi Jurusaan Kamu",
            strata: "Isi Strata"
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
      var data = $("#pendaftaran-form").serialize();
        var url = $('#url').val();
      $.ajax({
        
      type : 'POST',
      url  : url+'Home/pendaftaran_member',
      data : data,
      beforeSend: function()
      { 
        $("#error1").fadeOut();
        $("#btn-pendaftaran").html('Loading...').prop('disabled', true);
      },
      statusCode: {
    403: function() {
        $("#error").fadeIn(1000, function(){            
        toastr.error('Session Anda Habis, Silahkan Reload Halaman Ini', {timeOut: 5000});
        $("#btn-pendaftaran").html('DAFTAR').prop('disabled', false);
       
                      
                      });
    },
     500: function() {
        $("#error").fadeIn(1000, function(){            
        toastr.error('Mohon maaf ada kesalahan dalam Sistem', {timeOut: 5000});
        $("#btn-pendaftaran").html('DAFTAR').prop('disabled', false);
       
                      
                      });
    }
  },
      success :  function(response)
         {            
          if(response=="ok"){
                  
            
            $("#error1").fadeIn(1000, function(){           
        toastr.success('Pendaftaran Anggota Jujitsu Sukses', {timeOut: 5000});

                      $("#btn-pendaftaran").html('Pendaftaran Berhasil :)').prop('disabled', true);
                      setTimeout('location.reload()', 500);
                      });
          
          
          } else if(response=="sudah ada"){
                  
            
            $("#error1").fadeIn(1000, function(){           
        toastr.error('NIM Yang Kamu Masukkan Sudah Terdaftar Sebagai Anggota', {timeOut: 5000});

                      $("#btn-pendaftaran").html('Daftar').prop('disabled', false);
                      });
          
          } else {
                  
            $("#error1").fadeIn(1000, function(){           
        toastr.info('Pendaftaran Anggota Gagal, Silahkan Coba Lagi', {timeOut: 5000});
                    $("#btn-pendaftaran").html('Daftar').prop('disabled', false);
                  });
          }
        }
      });
        return false;
    }
     /* daftar submit */
});
