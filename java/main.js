let users = [
    {
        login: "azizbek1",
        password: "112233"
    }
];

$(document).ready(function (){
    $('.btn-success').click(function (){
        let login = $('#login').val();
        let password = $('#password').val();
        let num = false;
        if (login == ''){
            alert("Login qatorini toldiring!");
        }else if (password == ''){
            alert("Parol qatorini toldiring!");
        }
        if (users.length !=0){
          users.forEach(function (item){
              if (login == item.login){
                  if (password == item.password){
                      num = true;
                      alert("siz tizimga kirdingiz");
                  }
                  else {
                      alert("Parolingiz notogri");
                  }
              }
            });
          if (!num){
              alert("Ro`yhatdan o`tishingiz shart!");
          }

        }else {
            alert("Siz birinchi foydalanuvchidiz. Iltimos, ro`yhatdan o`ting!");
        }
    })

    $('.btn-link').click(function (){
        let login = $('#login').val();
        let password = $('#password').val();
        let num =false;
        if (login == ''){
            alert("Login qatorini toldiring!");
        }else if (password == ''){
            alert("Parol qatorini toldiring!");
        }
       else {
            if (users.length !=0){

                users.forEach(function (item){
                    if (login == item.login){
                        num = true;
                    }
                });
                if (num){
                    alert("Bunday login mavjud");
                }
                else {
                    alert("Zor! Siz roxhatdan otdingiz");
                    users.push({login: login,password: password});
                }

            }else {
                users.push({login: login,pasword:password})
            }
            console.log(users);
        }

    });

    $('.btn-light').on("mousedown",function (){
      let attr = $('#password').attr("type");
      $('#password').attr("type","text");
      $('.fa').toggleClass('fa-eye fa-eye-slash');
      $('#password').css('border-color','red');
    }) ;

    $('.btn-light').on("mouseup",function (){
        let attr = $('#password').attr("type");
        $('#password').attr("type","password");
        $('.fa').toggleClass('fa-eye fa-eye-slash');
        $('#password').css('border-color','blue');
    })
});