<?php

class AuthCallback
{
    /**
     * Callback function for ESI Authenticating
     */

    private $secretkeyloc = "res/SecretKey.txt";
    private $esi_idloc = "res/esi_id.txt";
    function Callback(){
        $f = fopen($this->secretkeyloc, "r");
        $secretkey = fread($f, filesize($this->secretkeyloc));
        fclose($f);

        $f = fopen($this->esi_idloc, "r");
        $esi_id = fread($f, filesize($this->esi_idloc));
        fclose($f);

        $url = "https://login.eveonline.com/v2/oauth/token";

        $str = $esi_id . ":" . $secretkey;

        $content = array(
            "grant_type" => "authorization_code",
            "code" => $_GET["code"]
        );

        $header = array(
            "Authorization:Basic " . base64_encode($str),
            "Content-Type:application/x-www-form-urlencoded",
            "Host:login.eveonline.com"
        );
        $post = curl_init();

        curl_setopt($post, CURLOPT_URL, $url);
        curl_setopt($post, CURLOPT_POST, true);
        curl_setopt($post, CURLOPT_HTTPHEADER, $header);
        curl_setopt($post, CURLOPT_POSTFIELDS, http_build_query($content));
        curl_setopt($post, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($post);
        $info = curl_getinfo($post);

        curl_close($post);
        var_dump($result);
    }
}

$client = new AuthCallback();
$client->Callback();
