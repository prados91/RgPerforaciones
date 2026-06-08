<?php

header('Content-Type: application/json');

// =====================================
// CARGAR .ENV
// =====================================

function loadEnv($path)
{
    if (!file_exists($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {

        $line = trim($line);

        if ($line === '' || strpos($line, '#') === 0) {
            continue;
        }

        if (strpos($line, '=') === false) {
            continue;
        }

        list($name, $value) = explode('=', $line, 2);

        $_ENV[trim($name)] = trim($value);
    }
}

loadEnv(__DIR__ . '/.env');

// =====================================
// VALIDAR MÉTODO
// =====================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Método no permitido"
    ]);

    exit;
}

// =====================================
// PHPMailer
// =====================================

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

// =====================================
// DATOS DEL FORMULARIO
// =====================================

$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$phone   = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");

if (
    empty($name) ||
    empty($email) ||
    empty($message)
) {
    echo json_encode([
        "success" => false,
        "message" => "Faltan campos obligatorios"
    ]);

    exit;
}

// =====================================
// VARIABLES SMTP
// =====================================

$smtpHost = $_ENV['SMTP_HOST'] ?? '';
$smtpUser = $_ENV['SMTP_USER'] ?? '';
$smtpPass = $_ENV['SMTP_PASS'] ?? '';
$smtpPort = $_ENV['SMTP_PORT'] ?? '465';

$mailTo   = $_ENV['MAIL_TO'] ?? '';
$mailFrom = $_ENV['MAIL_FROM'] ?? '';

try {

    // =====================================
    // CORREO PARA RG PERFORACIONES
    // =====================================

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = (int)$smtpPort;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        $mailFrom,
        'RG Perforaciones'
    );

    $mail->addAddress(
        $mailTo,
        'RG Perforaciones'
    );

    $mail->addReplyTo(
        $email,
        $name
    );

    $mail->isHTML(true);

    $mail->Subject = 'Nueva consulta desde la web';

    $mail->Subject = 'Nueva consulta desde rgperforaciones.com';

    $mail->Body = "
    <h2>Nueva consulta recibida</h2>
    
    <table cellpadding='8' cellspacing='0' border='1'>
    <tr>
        <td><strong>Nombre</strong></td>
        <td>{$name}</td>
    </tr>
    <tr>
        <td><strong>Email</strong></td>
        <td>{$email}</td>
    </tr>
    <tr>
        <td><strong>Teléfono</strong></td>
        <td>{$phone}</td>
    </tr>
    </table>
    
    <br>
    
    <h3>Mensaje</h3>
    
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->send();

    // =====================================
    // RESPUESTA AUTOMÁTICA AL CLIENTE
    // =====================================

    $clientMail = new PHPMailer(true);

    $clientMail->isSMTP();
    $clientMail->Host       = $smtpHost;
    $clientMail->SMTPAuth   = true;
    $clientMail->Username   = $smtpUser;
    $clientMail->Password   = $smtpPass;
    $clientMail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $clientMail->Port       = (int)$smtpPort;

    $clientMail->CharSet = 'UTF-8';

    $clientMail->setFrom(
        $mailFrom,
        'RG Perforaciones'
    );

    $clientMail->addAddress(
        $email,
        $name
    );

    $clientMail->isHTML(true);

    $clientMail->Subject = 'Hemos recibido tu consulta';

    $clientMail->Body = "
        <h2>Hola {$name}</h2>

        <p>
            Gracias por comunicarte con
            <strong>RG Perforaciones</strong>.
        </p>

        <p>
            Hemos recibido tu consulta y nos pondremos en contacto a la brevedad.
        </p>

        <p>Datos recibidos:</p>

        <ul>
            <li><strong>Nombre:</strong> {$name}</li>
            <li><strong>Email:</strong> {$email}</li>
            <li><strong>Teléfono:</strong> {$phone}</li>
        </ul>

        <p>
            Si necesitás una respuesta urgente podés comunicarte por WhatsApp:
        </p>

        <p>
            <strong>+54 9 11 7891-7853</strong>
        </p>

        <br>

        <p>Saludos cordiales.</p>

        <p>
            <strong>RG Perforaciones</strong><br>
            Perforación y corte profesional de hormigón
        </p>
    ";

    $clientMail->send();

    echo json_encode([
        "success" => true
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage(),
        "errorInfo" => $mail->ErrorInfo ?? null
    ]);
}