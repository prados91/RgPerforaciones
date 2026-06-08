<?php

header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

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

// Validación mínima
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode([
        "success" => false,
        "message" => "Faltan datos obligatorios"
    ]);
    exit;
}

try {

    // ============================
    // MAIL PARA RG PERFORACIONES
    // ============================

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = 'contacto@rgperforaciones.com';
    $mail->Password   = 'Falcon2620.';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        'contacto@rgperforaciones.com',
        'RG Perforaciones'
    );

    $mail->addAddress(
        'contacto@rgperforaciones.com',
        'RG Perforaciones'
    );

    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    $mail->Subject = 'Nueva consulta desde la web';

    $mail->Body = "
        <h2>Nueva consulta desde rgperforaciones.com</h2>

        <p><strong>Nombre:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Teléfono:</strong> {$phone}</p>

        <hr>

        <p><strong>Mensaje:</strong></p>

        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->send();

    // ============================
    // RESPUESTA AUTOMÁTICA CLIENTE
    // ============================

    $clientMail = new PHPMailer(true);

    $clientMail->isSMTP();
    $clientMail->Host       = 'smtp.hostinger.com';
    $clientMail->SMTPAuth   = true;

    $clientMail->Username   = 'contacto@rgperforaciones.com';
    $clientMail->Password   = 'Falcon2620.';

    $clientMail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $clientMail->Port       = 465;

    $clientMail->CharSet = 'UTF-8';

    $clientMail->setFrom(
        'contacto@rgperforaciones.com',
        'RG Perforaciones'
    );

    $clientMail->addAddress($email, $name);

    $clientMail->isHTML(true);

    $clientMail->Subject = 'Hemos recibido tu consulta';

    $clientMail->Body = "
        <h2>Hola {$name}</h2>

        <p>
            Gracias por comunicarte con RG Perforaciones.
        </p>

        <p>
            Hemos recibido tu consulta y nos pondremos en contacto
            a la brevedad.
        </p>

        <p>
            Si necesitás una respuesta urgente podés escribirnos por WhatsApp:
        </p>

        <p>
            <strong>+54 9 11 7891-7853</strong>
        </p>

        <br>

        <p>
            Saludos.<br>
            <strong>RG Perforaciones</strong>
        </p>
    ";

    $clientMail->send();

    echo json_encode([
        "success" => true
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}