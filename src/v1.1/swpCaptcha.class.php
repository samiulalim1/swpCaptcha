<?php
class swpCaptchaClass{
	protected $apiKey = null;
	protected $swpName = "swpCaptcha";	
	
	protected function swpDecode($e, $k){
		$d = '';
		$l = strlen($k);
		for($i = 0; $i < strlen($e); $i += 2){
			$c = hexdec(substr($e, $i, 2)); 
			$d .= chr($c ^ ord($k[($i / 2) % $l])); 
		}
		return $d;
	}
	
	protected function swpH2b($h){
		$b = trim($h);
		if(preg_match('/^[0-9a-fA-F]+$/', $b) && strlen($b) % 2 === 0){
			return hex2bin($b);
		}
		return false;
	}
	
	protected function swpKey(){
		return ($this->apiKey == null) ? $this->swpName : $this->apiKey;
	}
	
	protected function swpTime(){
		date_default_timezone_set("Asia/Dhaka");
		return strtotime(date("Y-m-d H:i:s"));
	}
	
	public function setApiKey($k){
		$this->apiKey = $k;
	}
		
	public function verifyToken($t){
		$d = json_decode(base64_decode($t), true);
		if(isset($d['key'], $d['data'])){
			$h = $this->swpH2b($this->swpDecode($d['data'], $d['key']));
			if($h){
				$e = intval(strrev($this->swpDecode($h, $this->swpKey())));
				if($e && $e > $this->swpTime()){
					return true;
				}
			}
			
		}
		return false;
	}
}
