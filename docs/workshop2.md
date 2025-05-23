---
sidebar_position: 2
---

# 🚀 2. Workshop: İlk MiniDapp'ini Geliştir

Bu workshop'a başlamadan önce bilgisayarınızda istediğiniz bir yerde yeni bir klasör oluşturun.
İsmini istediğiniz gibi verebilirsiniz. Örneğin: `ilk-minidappim`

Daha sonra bu klasörü VSCode'da açın. Tüm dosyalarımızı bu klasörün içine oluşturacağız.

Bu workshop'ta Minima ağı üzerinde çalışan basit bir MiniDapp geliştireceğiz. Amacımız, tarayıcı üzerinden çalışan, Minima node'dan veri çekebilen bir uygulama yaparak konsepti daha iyi anlamak.

---

## 🧾 MiniDapp Yapısı Nasıldır?

Bir MiniDapp, Minima Hub üzerinden yüklenebilen küçük bir web uygulamasıdır.

Temel olarak şu 4 dosyadan oluşur:

* `dapp.conf`: MiniDapp'in adını, ikonunu ve açıklamasını içeren yapılandırma dosyası
* `index.html`: Arayüz
* `mds.js`: Minima ile etkileşimi sağlayan JavaScript dosyası
* `favicon.ico`: Uygulamanın ikonu

> 💡 Not: Kullanacağınız görselin mutlaka `.ico` formatında olması gerekmez. Webden bulduğunuz kare boyutlarda `.png` veya `.jpg` uzantılı bir görseli de kullanabilirsiniz.

---

## 🧠 dapp.conf Dosyasını Oluşturun

`dapp.conf`, MiniDapp'in kimliğini belirten tanım dosyasıdır. JSON formatındadır.

```json
{
  "name": "Hello World",
  "icon": "favicon.ico",
  "version": "1.0",
  "description": "Blockchain ile bağlantılı ilk MiniDapp'ım"
}
```

---

## 🧹 mds.js Dosyasını Ekleyin

Minima ile bağlantı kurmak için bu dosya gerekir. Şu adresten indirilebilir:

🔗 [https://github.com/minima-global/Minima/releases/download/v1.0.45/minima.jar](https://github.com/minima-global/Minima/releases/download/v1.0.45/minima.jar)

Bu dosya, MiniDapp'in Minima node'u ile konuşmasını sağlar.

:::tip Node Ne Demek?
💻 `Node`, Türkçe'de düğüm anlamına gelir. Bilgisayar ağlarında veri üreten, aktaran veya alan her cihaz bir düğümdür.
:::

---

## 🧑‍💻 index.html Dosyasını Yazalım

Bu dosya MiniDapp'in görsel arayüzünü içerir. JavaScript kodunu ayrıca `script.js` olarak dışarı çıkaracağız.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
  
</head>
<body>
  <h1>Merhaba Minima!</h1>
  <p>Blok: <span id="block-height">Yükleniyor...</span></p>
  <script src="mds.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

---

## 🧠 script.js Dosyasını Oluşturalım

```js
MDS.init(function (msg) {
  if (msg.event === "inited") {
    MDS.cmd("status", function (res) {
      document.getElementById("block-height").innerText = res.response.chain.block;
    });
  }
});
```


Bu örnekte, Minima node'unun durumunu sorguluyoruz ve güncel blok numarasını ekrana yazdırıyoruz.

---

## 🧪 status Komutu Ne Döndürür?

`status` komutu node'dan aşağıdaki gibi bilgiler döndürür:

| Alan        | Açıklama                     |
| ----------- | ---------------------------- |
| version     | Minima sürüm bilgisi         |
| uptime      | Node ne kadar süredir açık   |
| minima      | Ağdaki toplam Minima miktarı |
| chain.block | Güncel blok numarası         |
| chain.time  | Son bloğun üretildiği zaman  |

---

## 🧩 Diğer Komutları Nereden Öğrenebilirim?

Minima içinde, daha fazla komut öğrenmek için terminali açıp `help` yazmanız yeterlidir. Bu komut, sistemde kullanabileceğiniz tüm komutları listeler.

Ayrıca `mds.js` kütüphanesinin hangi fonksiyonları sunduğunu merak ediyorsanız, Minima'nın [resmi dökümantasyon sitesine](https://docs.minima.global/docs/development/minidapp-mdsjs) göz atabilirsiniz. Orada `MDS.cmd()`, `MDS.init()`, `MDS.log()`, `MDS.sql()` gibi pek çok işlevin nasıl çalıştığı örneklerle açıklanmıştır.

---

> 💡 **Ekstra Not:** `status` dışında bazı komutları da merak edebilirsiniz. Örneğin `balance` komutu, cüzdanınızdaki Minima miktarını gösterir. Bu komutu uygulayarak sonuçlarını doğrudan görebilirsiniz. (Bu komut dökümantasyonda yer almasa da, workshop sırasında ekstra bilgi olarak anlatılacaktır.)

---

## 📆 MiniDapp'i Paketleyin

1. `dapp.conf`
2. `favicon.ico`
3. `index.html`
4. `mds.js`
5. `script.js` 

Bu 4 dosyayı `.zip` haline getirin.

Dosya adı: `helloworld.mds.zip`

---

## 🚀 MiniDapp'inizi Hub'a Yükleyin

1. Tarayıcınızdan MiniDapp Hub'ı açın: [http://127.0.0.1:9003](http://127.0.0.1:9003)
2. Sağ üstteki **+** (artı) simgesine tıklayın
3. Zip dosyanızı seçin
4. Ardından **Install** butonuna basın
5. MiniDapp listenize eklenecektir — tıklayıp çalıştırabilirsiniz!

---

## 🎉 Tebrikler!

Artık blockchain'e bağlı çalışan ilk MiniDapp'inizi oluşturdunuz.

