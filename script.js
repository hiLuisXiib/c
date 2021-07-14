< SCRIPT language = JavaScript >
    function go() {

        if (document.form.password.value == '123' && document.form.login.value == 'demo') {
            document.form.submit();
        } else {
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
        }
    } <
    /SCRIPT>