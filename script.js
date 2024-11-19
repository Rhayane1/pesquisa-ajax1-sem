<?php
// Validação dos dados
function validar_dados($nome, $email) {
    // Verifica se os campos foram preenchidos
    if (empty($nome) || empty($email)) {
        return "Por favor, preencha todos os campos.";
    }

    // Verifica se o email é válido (implementar uma função de validação de email mais robusta)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return "O email informado é inválido.";
    }

    return true;
}

// Processamento dos dados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

    $mensagem_erro = validar_dados($nome, $email);

    if ($mensagem_erro === true) {
        // Processar os dados (enviar email, salvar no banco de dados, etc.)
        // ...

        // Redirecionar para a página de agradecimento
        header('Location: obrigado.html');
        exit;
    } else {
        // Exibir mensagem de erro
        echo "<p>Erro: $mensagem_erro</p>";
    }
}
?>