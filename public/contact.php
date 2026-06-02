<?php

header('Content-Type: application/json');

// Validar método
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Método no permitido"
    ]);
    exit;
}

// Datos del formulario
$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$phone   = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");

// Validación básica
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode([
        "success" => false,
        "message" => "Faltan datos obligatorios"
    ]);
    exit;
}

// =========================
// CORREO PARA RG PERFORACIONES
// =========================

$to = "augustoprados91@gmail.com";

$subject = "Nueva consulta desde RG Perforaciones";

$body = "
Nueva consulta recibida desde la web

Nombre: $name

Email: $email

Teléfono: $phone

Mensaje:
$message

--------------------------------
Enviado desde rgperforaciones.com
";

$headers = "From: noreply@rgperforaciones.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mailSent = mail($to, $subject, $body, $headers);

// =========================
// CORREO AUTOMÁTICO AL CLIENTE
// =========================

if ($mailSent) {

    $clientSubject = "Hemos recibido tu consulta - RG Perforaciones";

    $clientMessage = "
Hola $name,

Gracias por comunicarte con RG Perforaciones.

Recibimos correctamente tu consulta y nos pondremos en contacto con vos a la brevedad.

Resumen de tu consulta:

Teléfono: $phone

Mensaje:
$message

--------------------------------
RG Perforaciones
Perforación y corte de hormigón profesional
https://rgperforaciones.com
";

    $clientHeaders = "From: noreply@rgperforaciones.com\r\n";
    $clientHeaders .= "Reply-To: augustoprados91@gmail.com\r\n";
    $clientHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail(
        $email,
        $clientSubject,
        $clientMessage,
        $clientHeaders
    );

    echo json_encode([
        "success" => true
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "No se pudo enviar el correo"
    ]);

}
?>