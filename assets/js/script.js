function detectar_msj_para_mi(msj)
{
    var div1=document.getElementById("btn_enviar_msj_para_mi");
    div1.href="https://api.whatsapp.com/send?phone=5493513289703&text="+msj.value;
}