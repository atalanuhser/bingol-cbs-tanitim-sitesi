# Benchmark Notları (Gün 3)

5 referans site incelendi: 3 ürün tanıtım sitesi + 2 belediye KBS örneği.
Format: iyi yaptığı / kötü yaptığı / bizde ne işe yarar.

## 1. Netcad KEOS — kent bilgi sistemi ürün sayfası (netcad.com/tr/urunler/keos)
- **İyi:** Net bilgi hiyerarşisi (hero → 6 özellik kartı → sekmeler → SSS); güçlü sosyal kanıt (müşteri sayıları, logolar); ürün ekran görüntüleri carousel'i.
- **Kötü:** Uzun metin blokları, sayfa çok kaydırma istiyor; CTA'lar az ve silik; hero görseli sıradan.
- **Bizde:** 6 özellik kartı düzeni bizim 6 mesajla birebir örtüşüyor — ana sayfa mesaj bölümü kart ızgarası olacak. SSS bölümü "olması güzel" listemizde zaten var. Metinleri kısa tutacağız.

## 2. Mapbox — harita teknolojisi ürünü (mapbox.com)
- **İyi:** Çarpıcı harita görselleri hero'da (3D şehir, gece navigasyon); tek cümlelik net değer önerisi; ürün → sektör çözümü eşlemesi düzenli.
- **Kötü:** Tekrarlayan bölüm başlıkları monoton; kampanya/etkinlik duyurusu hero'yu işgal etmiş.
- **Bizde:** "Haritanın kendisi en güçlü görsel" dersi — bizim CbsMockup hero'da veya hemen altında olmalı. Değer önerisi tek cümle: bizim 1 numaralı mesaj bu işi görür.

## 3. Felt — modern bulut GIS (felt.com)
- **İyi:** Minimalist, kendinden emin tasarım; "veri sahipliği + güvenlik" mesajını ayrı bölüm yapmış (bizim 4. mesajla aynı akıl); somut örnekler linkli.
- **Kötü:** Hero'daki tekrarlı dekoratif metin okunabilirliği düşürüyor; fiyat belirsiz.
- **Bizde:** "Veri kurumun sunucusunda" mesajını Felt gibi ayrı, ikonlu bir güven bölümü olarak işleyebiliriz. Sade tipografi + bol boşluk yönü bize uygun.

## 4. Altındağ Belediyesi KBS (cbs.altindag.bel.tr)
- **İyi:** Kurum kimliği net, arayüz sade.
- **Kötü:** Ziyaretçiye hiçbir tanıtım/açıklama yok — direkt login ekranı; sistemin ne yaptığını anlatan tek satır bile yok.
- **Bizde:** Tam olarak bizim sitenin varlık sebebi: sistemin *önünde* onu anlatan bir vitrin olmalı. "Tanıtım sitesi ayrı, sistem ayrı" kararımızın doğrulaması.

## 5. Konya KBS (kbs.konya.bel.tr)
- **İyi:** Kapsamlı hizmet seti sunduğu biliniyor (harita, sorgular).
- **Kötü:** İçerik tamamen JavaScript'le yükleniyor — arama motoru/erişilebilirlik açısından boş sayfa; başlık dışında taranabilir içerik yok.
- **Bizde:** Statik HTML (Astro) kararımızın doğrulaması: içerik JS olmadan da okunabilir olacak, SEO hedefimiz (≥90) buna bağlı.

## Sonuç — tasarım kararlarına girdiler
1. Ana sayfa düzeni: tek cümlelik hero + mockup görseli → 6 mesaj kartı → rakam bandı → özellik önizlemesi → CTA (KEOS + Mapbox dersleri).
2. Mockup en değerli görsel varlık; hero'da ya da hemen altında gösterilecek.
3. "Veri kurumda" mesajı ayrı güven bölümü olarak işlenmeye değer (Felt deseni).
4. Metinler kısa; her bölüm tek fikir (KEOS'un uzun bloklarından kaçın).
5. Statik, JS'siz içerik = SEO ve erişilebilirlik avantajı (Konya karşı örneği).
