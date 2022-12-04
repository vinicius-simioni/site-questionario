<?php

$acertos = 0;

$respostas = [
    $_POST['q1'],
    $_POST['q2'],
    $_POST['q3'],
    $_POST['q4'],
    $_POST['q5']
];

$gabarito = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

for($i = 0; $i < count($respostas); $i++){
    if($respostas[$i] === $gabarito[$i]){
        $acertos++;
    }
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-whitesmoke">

<div class="h-50 bg-blue flex align-items-center justify-content-center">
<h1>Resultado</h1>
</div>

<div class="h-auto w-80vw bg-white margin-auto br-10 mt-15 p-30 ta-center">
    <h3>Você acertou <?php echo $acertos ?>/5 questões.</h3>
</div>
    
</body>
</html>
