---
sidebar_position: 1
slug: /
---

# 🧱 1. Workshop: Blockchain Nedir ve Nasıl Çalışır?

## 📘 Teorik Tanım

Blockchain, adından da anlaşılacağı gibi **bloklardan oluşan bir zincirdir.**

* Her blok, içinde birden fazla işlemi barındırır.
* Her blok, kendisinden bir önceki bloğun **şifrelenmiş bir özetini** (hash) de içinde taşır.
* Bu zincirleme yapı sayesinde bir bloğun içeriği değiştirildiğinde sonraki tüm blokların geçersiz hale gelmesi gerekir. Bu da blockchain'i değiştirmeyi neredeyse imkânsız hale getirir.

Ayrıca blockchain merkezi değildir:

* Her kullanıcı, blockchain'in bir kopyasını kendi bilgisayarında tutar.
* Bu da sistemi hem şeffaf hem de saldırılara karşı dirençli yapar.

---

## 🧠 Şimdi bir düşünelim:

Bu yapı biraz karışık geldiyse hiç endişelenmeyin.
Hadi şimdi bu karmaşık sistemin nasıl ortaya çıkmış olabileceğini gerçek hayata indirerek, adım adım beraber kurgulayalım.

---

## 📒 Blockchain'i Sıfırdan Kurgulamak: Ortak Defter Hikayesi

Diyelim ki birkaç yakın arkadaşınızla birlikte para alışverişi yapıyorsunuz. Bazen borç veriyorsunuz, bazen bir şey satın alıyor, bazen paylaşıyorsunuz. Ama bir süre sonra kafalar karışıyor: "Ben sana 20 lira vermemiş miydim?", "Hayır sen bana vermiştin", "Ama kimse yazmamıştı ki!" gibi cümleler dönmeye başlıyor.

### 💡 Fikir Ortaya Çıkıyor:

Bir arkadaşınız diyor ki: "Arkadaşlar bu iş böyle olmayacak. Gelin bir defter tutalım. Kim kime ne verdi, buraya yazalım. Böylece herkes neyin ne olduğunu görür."

Bu defter ortak bir yerde duruyor. Herkes erişebiliyor. İlk not şu şekilde oluyor:

* Ahmet, Mehmet'e 50 TL borç verdi → *Yazan: Ahmet*

Herkes "Tamam bu işlem doğru" diyor ve böylece ilk işlem kaydı yazılıyor.

Ama sonra bir şey oluyor. Ahmet tekrar deftere gidiyor ve yazıyor:

* Mehmet, Ahmet'e 100 TL borç verdi → *Yazan: Mehmet (tek başına)*

Bu sefer herkes şüpheleniyor: "Ahmet'in haberi olmadan bu yazılmış olabilir mi?" diye.

### 🔐 Geliştirme 1: İmzalama Sistemi

Diyoruz ki, bundan sonra işlemler ancak her iki tarafın da onayıyla geçerli sayılacak.
Yani deftere bir işlem yazılacaksa, ilgili herkes imza atacak.
Bu, bugünkü blockchain'lerdeki **dijital imza** kavramına denk gelir.

Fakat başka bir problem çıkıyor:

* Defteri tutan kişi yazıları değiştirirse ne olacak?
* Ya bir gün defter kaybolursa? Ya da başkası aynı işlemi tekrar tekrar yazarsa?

### 🔐 Geliştirme 2: Herkesin Elinde Birer Kopya

Bunu çözmek için diyoruz ki: "Herkes kendi defter kopyasını tutsun. Bir işlem gerçekleştiğinde herkes kendi kopyasına aynı şeyi yazar. Eğer birinde farklı bir bilgi varsa, çoğunluğun dediği geçerli olsun."

Bu, blockchain'in dağıtık yapısına denk gelir. Herkesin bilgisayarında aynı verinin bir kopyası vardır.

Ama hâlâ biri, eski bir sayfayı açıp oradaki veriyi değiştirebilir. Bunun önüne nasıl geçeriz?

### 🔐 Geliştirme 3: Sayfaları Şifreleyerek Birbirine Bağlama (Hash)

Her yeni işlem sayfası (blok), bir önceki sayfanın şifreli özetini (hash) içerir. Eğer eski sayfada bir değişiklik yapılırsa, tüm zincir bozulur. Bu da blockchain'in **değiştirilemezlik (immutability)** özelliğidir.

---

## 🔚 Sonuç: Dağıtık, Güvenli ve Şeffaf

Bu adımlarla sıfırdan bugünkü blockchain sistemine ulaşıyoruz:

1. Tek kişinin yazmaması lazım → Onay sistemi lazım (İmza)
2. Defterin güvenliği lazım → Herkes birer kopya tutsun (Dağıtık yapı)
3. Geçmişi silememek lazım → Sayfaları birbirine bağlayalım (Hash + Zincir)

---

## 🌟 Minima'nın Farkı Nedir?

Pek çok blockchain sistemi büyük madencilik havuzlarına, yüksek işlem gücüne ve karmaşık altyapılara ihtiyaç duyar. Minima bu yaklaşımı tamamen değiştirir:

* Minima'da herkes kendi cihazında küçük bir node çalıştırabilir.
* Ağda bulunan herkes aynı zamanda bir **madenci** olur.
* Bu sayede merkeziyetsizlik sadece bir ilke değil, **uygulanabilir bir gerçeklik** haline gelir.
* Ağın güvenliği birkaç büyük oyuncuya değil, **katılan her bireye** yayılmış olur.

Yani Minima, blockchain'in ilk vizyonuna –herkesin eşit katılımcı olduğu bir yapıya– en yakın sistemlerden biridir.

Bu adımlarla sıfırdan bugünkü blockchain sistemine ulaşıyoruz:

1. Tek kişinin yazmaması lazım → Onay sistemi lazım (İmza)
2. Defterin güvenliği lazım → Herkes birer kopya tutsun (Dağıtık yapı)
3. Geçmişi silememek lazım → Sayfaları birbirine bağlayalım (Hash + Zincir)

---

## 🚀 Uygulama Zamanı: Minima Node'unu Çalıştır!

MiniDapp geliştirmek için önce bilgisayarınızda Minima node'unu çalıştırmanız gerekiyor.

### 🔧 Kurulum Adımları:

1. Bilgisayarınızda bir `minima` klasörü oluşturun.
2. [https://github.com/minima-global/Minima/releases](https://github.com/minima-global/Minima/releases) sayfasından en güncel `minima.jar` dosyasını indirin.
3. Terminal veya komut satırını açın ve bu klasöre gidin.
4. Aşağıdaki komutu çalıştırın:

:::tip Şifrenizi Belirleyin
🔑 `INSERTPASSWORD` kısmını kendi seçeceğiniz bir şifreyle değiştirmeyi unutmayın! (örneğin `baran123`).
:::

```bash
java -jar minima.jar -data minidata1 -basefolder minidata1 -mdsenable -mdspassword INSERTPASSWORD
```

### 🌐 Minima Hub'a Erişim

Node başarıyla çalıştıysa (aşağıdaki gibi bir görüntü görüyorsanız) tarayıcınızdan şu adrese giderek MiniDapp Hub'a erişebilirsiniz: 👉 [http://127.0.0.1:9003](http://127.0.0.1:9003)

💡 **Not:** Tarayıcı bu sayfayı açarken güvenlik uyarısı verebilir. Bu normaldir çünkü uygulama sadece sizin bilgisayarınızda çalışır.

---
