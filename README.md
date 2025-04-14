# 🛡️ swpCaptcha — I Stand with Palestine CAPTCHA

**swpCaptcha** is a lightweight image-based CAPTCHA solution inspired by Google reCAPTCHA — but with a cause.  
It’s designed to show solidarity with Palestine every time a human verifies themselves.


## 🌟 Features

- "I Stand with Palestine" click CAPTCHA
- Popup with image verification to prove you're not a dog
- Easy integration (HTML + JS)
- Secure token generation and PHP-based verification
- LocalStorage caching for user convenience
- Fully client and server side ready


## 🔐 Generate API Key & Secret key

Before you begin, generate your free **API key** and **Secret key** from here:  
➡️ [Generate API Key](https://samiulalim1.github.io/swpCaptcha/src/)


## 🚀 Installation & Usage

### 1. HTML (Frontend)

#### 🧠 Include the JS in `<head>`

```html
<script src="https://samiulalim1.github.io/swpCaptcha/src/v1.1/swpCaptcha.class.min.js"></script>
```

#### 📦 Add a Captcha Container in `<body>`

```html
<div id="swpCaptcha"></div> <!-- You can change the ID -->
```

#### ⚙️ Initialize the CAPTCHA

```js
let swpCaptcha = null;

if(window.swpCaptchaClass){
  swpCaptcha = new swpCaptchaClass();
  swpCaptcha.setCaptcha("swpCaptcha"); // ID used in HTML
  swpCaptcha.setCaptchaSecret("YOUR_SECRET_KEY"); // Optional but recommended for stronger token
}else{
  console.log("swpCaptchaClass class not loaded yet.");
}
```

#### ⚙️ Check if Captcha is solved

```js
let isSolved = swpCaptcha.isCaptchaSolved(); // Returns true or false
```

#### ⚙️ Get the token when Captcha is solved

```js
let captchaToken = swpCaptcha.getCaptchaToken(300); // Returns token or null
// 300 means the token will expire in 300 seconds.You can change this as you wish. 
```


### 2. PHP (Backend)

#### 📥 Download the PHP Class

🔗 [swpCaptcha PHP Class](https://samiulalim1.github.io/swpCaptcha/src/v1.1/swpCaptcha.class.php)

#### 🧪 Setup in PHP

```php
require_once 'swpCaptcha.class.php';

$swpCaptcha = new swpCaptchaClass();
$swpCaptcha->setApiKey('YOUR_API_KEY'); // Required if using captcha secret

```

#### ✅ Verify Token

```php
$verify = $swpCaptcha->verifyToken('THE_TOKEN_FROM_JS');
// returns true if verified
// returns false if expired or invalid
```

## 👨‍💻 Developer Info

**Made with ❤️ by Samiul Alim**  
📱 Telegram: [@samiulalim1230](https://t.me/samiulalim1230)  

## 🕊️ Free Palestine 🇵🇸

This project is more than just code.  
It’s a small digital protest for **freedom**, **human rights**, and **dignity** for the people of **Palestine**.  
Stand with truth. Stand with humanity. **Stand with Palestine.**
