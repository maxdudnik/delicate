<?php

$name = isset($_POST["name"]) ? trim($_POST["name"]) : null;
$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : null;
$email = isset($_POST["email"]) ? trim($_POST["email"]) : null;

$msg = "";

if($name && $phone && $email) {
	$mailto = 'kno@delikatno-nn.ru';
	$subject_mail = "Заявка";
	$content = "<b>Имя:</b> $name <b>Телефон:</b> $phone <b>Email:</b> $email";
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	if (mail($mailto, $subject_mail, $content, $headers)){
		$content_mobile = "Имя: $name \nТелефон: $phone \nEmail: $email";
		$client = new SoapClient('http://smsc.ru/sys/soap.php?wsdl');
		$ret = $client->send_sms(array('login'=>'knomuradyan', 'psw'=>'scorpion271089', 'phones'=>'79200473192', 'mes'=>$content_mobile, 'id'=>'', 'sender'=>$subject_mail, 'time'=>0));
		$msg = 'Спасибо!';
	} else {
		$msg = 'Ошибка';
	}
} else {
	$msg = 'Form not require';
}

echo $msg;