<?php
/**
 * AllMarine contact form handler.
 * Ships to /out/contact.php unchanged during static export.
 */

header('Content-Type: text/html; charset=UTF-8');

$base = '/allmarine';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo '<!DOCTYPE html><html><head><title>Method Not Allowed</title></head>';
    echo '<body><h1>405 — Method Not Allowed</h1>';
    echo '<p><a href="' . htmlspecialchars($base, ENT_QUOTES, 'UTF-8') . '/">Return home</a></p></body></html>';
    exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$company = trim($_POST['company'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];

if ($name === '') {
    $errors[] = 'Name is required.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}

if ($message === '') {
    $errors[] = 'Message is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo '<!DOCTYPE html><html><head><title>Form Error</title></head>';
    echo '<body><h1>There was a problem with your submission</h1><ul>';
    foreach ($errors as $error) {
        echo '<li>' . htmlspecialchars($error, ENT_QUOTES, 'UTF-8') . '</li>';
    }
    echo '</ul><p><a href="' . htmlspecialchars($base, ENT_QUOTES, 'UTF-8') . '/contact/">Go back</a></p></body></html>';
    exit;
}

$to      = 'info@allmarineuae.com';
$subject = 'New contact form submission — ' . $name;
$body    = "Name: {$name}\n";
$body   .= "Email: {$email}\n";
$body   .= "Company: {$company}\n";
$body   .= "Service: {$service}\n\n";
$body   .= "Message:\n{$message}\n";

$headers  = "From: noreply@allmarineuae.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo '<!DOCTYPE html><html><head><title>Server Error</title></head>';
    echo '<body><h1>Unable to send message</h1>';
    echo '<p>Please try again later or email us directly.</p>';
    echo '<p><a href="' . htmlspecialchars($base, ENT_QUOTES, 'UTF-8') . '/contact/">Go back</a></p></body></html>';
    exit;
}

echo '<!DOCTYPE html><html><head><title>Message Sent</title></head>';
echo '<body><h1>Thank you!</h1>';
echo '<p>Your message has been sent. We will get back to you within one business day.</p>';
echo '<p><a href="' . htmlspecialchars($base, ENT_QUOTES, 'UTF-8') . '/">Return home</a></p></body></html>';
