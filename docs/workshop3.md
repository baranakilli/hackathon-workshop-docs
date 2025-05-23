---
sidebar_position: 3
---

# 🧱 3. Workshop: Backend Servisli MiniDapp - Basit Bir Twitter

Bu workshop'ta Minima üzerinde çalışan, kullanıcıdan gelen mesajları blockchain'e yazan ve arka planda saklayarak görüntüleyen basit bir MiniDapp uygulaması oluşturacağız. Kullanıcılar mesaj yazacak, bu mesaj `send` komutuyla blockchain'e gönderilecek, `service.js` ile dinlenecek ve `sql.js` ile saklanacak.

---

## 📁 Proje Dosya Yapısı
- `index.html` – Kullanıcı arayüzü
- `script.js` – Mesaj gönderme işlemi
- `service.js` – Blockchain’den gelen işlemleri dinleme
- `sql.js` – Mesajları saklayan veri tabanı işlemleri

---

## 🖼️ Arayüz – index.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mini Twitter</title>
</head>
<body>
  <h1>Mini Twitter</h1>
  <textarea id="msgInput" rows="4" cols="50" placeholder="Mesajınızı yazın..."></textarea>
  <br />
  <button onclick="sendMessage()">Post</button>
  <h2>Messages:</h2>
  <div id="messages"></div>

  <script src="mds.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

---

## 🧠 Mesaj Gönderimi – script.js

```js
function sendMessage() {
  const msg = document.getElementById("msgInput").value;
  if (!msg) return;

  const state = {};
  state[0] = "message";
  state[1] = msg;

  const func =
    "send amount:0.0001 address:" +
    "YOUR_MINIDAPP_ADDRESS_HERE" +
    " state:" +
    JSON.stringify(state);

  MDS.cmd(func, function(res) {
    console.log("Send response:", res);
    document.getElementById("msgInput").value = "";
  });
}
```

---

## ⚙️ Arka Plan Servisi – service.js

```js
MDS.load("./sql.js");

MDS.init(function(msg) {
  if (msg.event === "inited") {
    MDS.notify("YOUR_MINIDAPP_ADDRESS_HERE");
    MDS.sql("CREATE TABLE IF NOT EXISTS posts (msg TEXT)", function() {});
  }

  if (msg.event === "NOTIFYCOIN") {
    const stateData = msg.data.state;
    if (stateData && stateData["0"] === "message") {
      const message = stateData["1"];
      MDS.sql(`INSERT INTO posts (msg) VALUES ('${message}')`, function() {
        MDS.log("Mesaj eklendi: " + message);
      });
    }
  }
});
```

---

## 🗃️ SQL Sorguları – sql.js

```js
function getMessages(callback) {
  MDS.sql("SELECT * FROM posts", function(res) {
    callback(res.rows);
  });
}
```

---

🧾 Ek Adım: Mevcut Mesajları Yükleme

Sayfa ilk açıldığında, veri tabanındaki tüm mesajları ekrana getirmek için getMessages() fonksiyonunu çağırmamız gerekir. Bu işlem için HTML dosyasının sonuna şu script'i ekleyin:

```html
<script>
  MDS.init(function(msg) {
    if (msg.event === "inited") {
      getMessages(function(rows) {
        const container = document.getElementById("messages");
        container.innerHTML = "";
        rows.forEach(row => {
          const div = document.createElement("div");
          div.textContent = row.msg;
          container.appendChild(div);
        });
      });
    }
  });
</script>
```

Bu sayede uygulama açıldığında daha önce gönderilmiş tüm mesajlar otomatik olarak yüklenecek ve kullanıcıya gösterilecektir.

---

## 🔄 Uygulama Akışı

1. Kullanıcı mesajı textarea içine yazar.
2. "Post" tuşuna basınca `script.js` ile `send` komutu tetiklenir.
3. Mesaj `state` içinde `"0": "message", "1": "...mesaj"` olarak blockchain'e yazılır.
4. `service.js` `NOTIFYCOIN` eventiyle gelen mesajı dinler.
5. `sql.js` aracılığıyla mesaj local veritabanına eklenir.
6. `getMessages()` fonksiyonuyla veri alınabilir.

---

## 🎯 Öğrenilenler
- `send` komutunun state değişkenleriyle kullanımı
- `MDS.notify()` ile işlem takibi
- `MDS.sql()` ile MiniDapp içinde veri saklama
- MiniDapp'in backend ve frontend entegrasyonu

---

## 💡 Genişletme Fikirleri
- Kullanıcı ismi ve zaman damgası eklemek için state[2], state[3] gibi ek alanlar
- Gelen mesajları arayüzde göstermek için getMessages()'in frontend'e entegresi
- Mesaj silme ve düzenleme fonksiyonları eklemek

---

> Bu yapı Minima üzerinde çalışan merkeziyetsiz, hafif bir mesaj uygulamasının temelini oluşturur. Öğrendiklerinizi genişleterek MiniDapp geliştirme becerilerinizi artırabilirsiniz.