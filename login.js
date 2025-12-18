const invite=document.getElementById("invite");
const admin=document.getElementById("admin");
const login=document.getElementById("login");
const pw=document.getElementById("password");
document.getElementById('btn_login').addEventListener('click',()=>{
    document.querySelectorAll('.error').forEach((e)=>e.textContent="");
    let test=true
    if(!invite.checked&&!admin.checked)
        {
            invite.parentElement.querySelector('.error').textContent="Veuillez saisir le mode d'acces !";
            test=false;
        }
    if(pw.value.trim()==="")
        {
            pw.parentElement.querySelector('.error').textContent="Veuilerz saisir votre pw";
            test=false;
        }
    if(test)
        {
            if(invite.checked&&(pw.value!=="user"|| login.value!=="user"))
            {
                log
            }
        }
    

    })
