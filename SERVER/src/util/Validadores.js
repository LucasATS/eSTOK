
const ValidarCEP = cep => {
    // Remove caracteres não-numéricos
    cep = cep.replace(/[^\d]/g, "");

    // Verifica se o CEP tem 8 dígitos
    if (cep.length !== 8) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cep)) {
        return false;
    }

    // Se chegou aqui, o CEP é válido
    return true;
}

const ValidarCPF = cpf => {
    // Remove caracteres não-numéricos
    cpf = cpf.replace(/[^\d]/g, "");

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Verifica o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto === 10 || resto === 11 ? 0 : resto;
    if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Verifica o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto === 10 || resto === 11 ? 0 : resto;
    if (digito2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // Se chegou aqui, o CPF é válido
    return true;
}

// ISSO PODE SER PUXADO DE UMA TABLE DO BD
const wordlistPass = ['123456', '123', 'Teste123*', 'senha', 
'password', 'qwerty', 'abc123', 'admin', 'iloveyou', 'welcome'];
function validarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return {
            valido: false,
            mensagem: 'A senha deve conter pelo menos 8 caracteres.'
        };
    }

    // Verifica se a senha contém pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(senha)) {
        return {
            valido: false,
            mensagem: 'A senha deve conter pelo menos uma letra minúscula, uma Maiúscula, número e um caractere especial.'
        };
    }

    // Verifica se a senha não contém mais de 2 caracteres consecutivos idênticos
    if (/(.)\1{2,}/.test(senha)) {
        return {
            valido: false,
            mensagem: 'A senha contem mais de 2 caracteres consecutivos idênticos.'
        };
    }

    // Verifica se a senha não contém mais de 3 caracteres consecutivos em sequência
    // if (/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(senha)) {
    //   return {
    //     valido: false,
    //     mensagem: 'A senha não pode conter mais de 3 caracteres consecutivos em sequência.'
    //   };
    // }

    // Verifica se a senha não é uma palavra comum ou facilmente adivinhável
    if (wordlistPass.includes(senha.toLowerCase())) {
        return {
            valido: false,
            mensagem: 'A senha é facilmente adivinhável.'
        };
    }

    // Se chegou aqui, a senha é válida
    return {
        valido: true,
        mensagem: 'A senha é segura.'
    };
}

export { ValidarCPF, ValidarCEP, validarSenha };