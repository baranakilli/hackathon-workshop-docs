
# 👋 Hoş Geldin! Minima Hackathon — Hello World MiniDapp Rehberi

Bu rehberde, sıfırdan başlayarak kendi Minima MiniDapp’ini nasıl geliştireceğini adım adım göstereceğiz.  
Ama önce, Minima yerel sunucusunu bilgisayarinda çalıştırmamız gerekiyor. Hadi başlayalım!

---

## ⚙️ 1. Minima Node’u (Yerel Suncuyu) Çalıştır

### 💻 Adım Adım Kurulum

1. Bilgisayarında masaüstüne veya istediğin bir yere `minima` adında bir klasör oluştur.
2. Aşağıdaki bağlantıdan en güncel `minima.jar` dosyasını indir:  
   👉 [https://github.com/minima-global/Minima/releases](https://github.com/minima-global/Minima/releases)
3. İndirdiğin `.jar` dosyasını oluşturduğun klasörün içine koy.
4. Terminali aç ve bu klasöre git.  
   (Kolay yol: klasörü terminale sürükle ve bırak)

Bu komut, bilgisayarınızda bir yerel sunucu (localhost) oluşturarak Minima Hub arayüzüne ulaşmanızı sağlar.  
Her şey tamamen sizin bilgisayarınızda çalışır, dış dünyayla paylaşılmaz.

5. Aşağıdaki komutu **kendi belirleyeceğiniz bir şifreyle birlikte** yazıp çalıştırın:

```bash
java -jar minima.jar -data .minima -p2pnodes megammr.minima.global:9001 -mdsenable -mdspassword INSERTPASSWORD
```

🔑 Buradaki **INSERTPASSWORD** kısmını kendi şifrenizle değiştirin.  
Örneğin: `baran123`, `minimafan2025`, `hackathonwinner` gibi.

🎉 **Tebrikler!** Artık node’un çalışıyor. Tarayıcından  
👉 `http://127.0.0.1:9003` adresine giderek MiniDapp Hub’a ulaşabilirsin.

:::tip Güvenlik Uyarısı Hakkında
MiniDapp Hub’ı (http://127.0.0.1:9003) açtığınızda tarayıcınız “güvenli değil” uyarısı verebilir. Bu çok normaldir çünkü bu sayfa sadece sizin bilgisayarınızda çalışıyor ve bu yüzden SSL sertifikası yok.
Dolayısıyla endişelenmenize gerek yok! Ayrıca, Minima’nın içerisinde sizden kart, banka ya da kişisel bilgi isteyen hiçbir bölüm bulunmaz. Her şey tamamen sizin kontrolünüzdedir.
:::

---

Harika, şimdi ilk MiniDapp projemizi oluşturmaya geçelim!

---

## 📘 Terimler Sözlüğü

| Terim         | Açıklama |
|--------------|----------|
| **MiniDapp**  | Minima ağı üzerinde çalışan küçük web uygulamalarıdır. |
| **Minima**    | Merkeziyetsiz çalışan bir blockchain ağıdır. |
| **Node**      | Minima ağına bağlı çalışan bir cihazdaki Minima yazılımıdır. |
| **MiniDapp Hub** | Minima uygulamasında MiniDapp’lerini yükleyip çalıştırabileceğin paneldir. |
| **favicon.ico** | Uygulamanın küçük simgesidir. Tarayıcı sekmesinde veya Hub'ta görünür. |
| **`MDS.cmd`** | MiniDapp'in Minima node’una komut göndermesini sağlar. |

---

## 🚀 2. MiniDapp Projesini Oluştur

### 🗂️ Proje klasörünü oluştur

Yeni bir klasör oluştur: `helloworld`

---

### ⚙️ `dapp.conf` dosyasını oluştur

Bu dosya MiniDapp'in temel bilgilerini içerir.  
`helloworld` klasörü içinde `dapp.conf` adında bir dosya oluşturup şunu yaz:

```json
{
  "name": "Hello World",
  "icon": "favicon.ico",
  "version": "1.0",
  "description": "Blockchain ile bağlantılı ilk MiniDapp'im"
}
```

---

### 🖼️ `favicon.ico` simgesini ekle

Aynı klasöre `favicon.ico` dosyasını ekle.  
Kendi tasarımını da koyabilirsin, internetten hazır bir `.ico` simgesi de olur.

---

### 📥 `mds.js` dosyasını indir

Minima'nın MiniDapp’lerle konuşmasını sağlayan bu dosyayı buradan indir:  
👉 [https://raw.githubusercontent.com/minima-global/Minima/master/mds/mds.js](https://raw.githubusercontent.com/minima-global/Minima/master/mds/mds.js)  
İndirip `helloworld` klasörüne ekle.

---

### 🖥️ `index.html` dosyasını oluştur

Aynı klasörde `index.html` oluştur ve aşağıdaki kodu içine yapıştır:

```html
<html>
  <head>
    <script type="text/javascript" src="mds.js"></script>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <title>Hello World</title>
  </head>

  <body>
    <h2>Hello World MiniDapp</h2>

    <p>Güncel Minima Blok Yüksekliği: <span id="block-height"></span></p>
    <p>Node Durumu: <span id="node-status"></span></p>

    <button onclick="runStatus();">Durumu Kontrol Et</button>

    <script>
      // Node'a bağlandığımızı dinliyoruz
      MDS.init(function (msg) {
        if (msg.event === "inited") {
          MDS.cmd("status", function (res) {
            if (res.status) {
              const blockHeight = res.response.chain.block;
              document.getElementById("block-height").innerText = blockHeight;
            }
          });
        }
      });

      // Kullanıcı butona bastığında node'un durumunu al
      function runStatus() {
        MDS.cmd("status", function (res) {
          if (res.status) {
            const nodeStatus = JSON.stringify(res.response, null, 2);
            document.getElementById("node-status").innerText = nodeStatus;
          } else {
            document.getElementById("node-status").innerText = "Node durumu alınamadı";
          }
        });
      }
    </script>
  </body>
</html>
```

---

### 📎 `status` komutu ne yapar?

Bu komut node’dan güncel verileri getirir:

| Alan          | Açıklama |
|---------------|----------|
| `version`     | Minima uygulamasının sürüm numarası |
| `uptime`      | Node’un ne zamandır açık olduğu |
| `minima`      | Sistemdeki toplam Minima miktarı (senin cüzdanın değil) |
| `chain.block` | Blockchain’deki en güncel blok numarası |
| `chain.time`  | Son bloğun zamanı |

---

### 📦 MiniDapp’i paketle

Klasöründeki bu 4 dosyayı sıkıştırıp `.zip` formatına getir:  
- `dapp.conf`  
- `favicon.ico`  
- `index.html`  
- `mds.js`  

🧊 Zip adını şöyle ver:  
```txt
helloworld.mds.zip
```

---

### ✅ Yükle ve Başlat!

1. `http://127.0.0.1:9003` adresine git.
2. Sayfanın sağ üst kısmındaki `+` butonuna tıkla.
3. `helloworld.mds.zip` dosyanı yükl ve "Install" tuşuna bas.
4. Artık uygulamanı logosu ile beraber MiniHub'daki uygulamalar arasında görebilir ve tıklayarak açabilirsin!

🎉 **Tebrikler!** Artık kendi MiniDapp’ini yaptın!  
Minima dünyasına hoş geldin 👋

---
