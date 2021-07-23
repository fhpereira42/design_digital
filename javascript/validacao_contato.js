function validar(){
	var nome=formulario.nome.value;
	if (nome==""){
		window.alert("Campo nome é obrigat´ro");
		formulario.nome.focus();
		return false;
	}	
    
    var email=formulario.email.value;
	if (email==""){
		window.alert("Campo email é obrigat´ro");
		formulario.email.focus();
		return false;
	}

    var whats=formulario.whats.value;
	if (whats==""){
		window.alert("Campo Whats é obrigatório");
		formulario.whats.focus();
		return false;
	}}