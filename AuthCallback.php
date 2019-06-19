<?php

class AuthCallback
{
    /**
     * Callback function for ESI Authenticating
     */
    function Callback(){
        $f = fopen("../res/SecretKey.txt", "r");
        $secretkey = fread($f, filesize("../res/SecretKey.txt"));
        fclose($f);

        $f = fopen("../res/esi_id.txt", "r");
        $esi_id = fread($f, filesize("../res/esi_id.txt"));
        close($f);

        $url = "https://login.eveonline.com/v2/oauth/token";
        $data = array('grant_type' => "authorization_code", "code" => $_GET["code"]);
        $options = array(
          'http' => array(
              "method" => "POST",
              "Authorization" => "Basic" . base64_encode($esi_id . + ":" . $secretkey),
              "Content-Type" => "application/x-www-form-urlencoded",
              "Host" => "login.eveonline.com",
              $data
          )
        );
        $context = stream_context_create($options);

        $response = file_get_contents($url, false, $context);

        if ($response == false) { //ERROR
            echo "Eve SSO failed to respond, ESI might be down?";
            return;
        }
        var_dump($response);
        return;

    }
}

$client = new AuthCallback();
$client->Callback();
