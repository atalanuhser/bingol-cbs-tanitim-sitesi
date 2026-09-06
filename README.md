# Piramittek CBS — Tanıtım Sitesi

Belediyelere yönelik Coğrafi Bilgi Sistemi (CBS) ürününü anlatan statik tanıtım sitesidir. Üç sayfadan oluşur: Ana sayfa, Özellikler ve Hakkında/İletişim; canlı sisteme bağlı değildir, tüm harita görünümleri kodla çizilmiş stilize mockup'lardır. [Astro](https://astro.build) ile geliştirilmiştir; `npm run build` komutu siteyi `dist/` klasörüne düz HTML/CSS olarak üretir.

> **Önemli:** Sitedeki tüm rakamlar (ör. "250+ km şebeke") geçici örnek değerlerdir ve **tek bir dosyada** durur: `src/data/rakamlar.js`. Gerçek değerler netleşince yalnızca bu dosya güncellenir — başka hiçbir yere dokunmak gerekmez.

## Dosya yapısı

```
src/
  pages/            → sayfalar: index.astro (ana), ozellikler.astro, hakkinda.astro
  layouts/          → Layout.astro — ortak iskelet (başlık etiketleri, header, footer)
  components/       → yapı taşları: Hero, CbsMockup (harita mockup'ı), RakamBandi ...
  data/             → SİTEDEKİ TÜM METİNLER VE RAKAMLAR (aşağıya bakın)
  styles/
    tokens.css      → tüm renkler, yazı tipleri, boşluk ölçüleri — tek yer
    global.css      → temel stiller
    fontlar.css     → yerel font tanımları
  assets/img/       → görseller (WebP)
public/             → favicon, robots.txt, fontlar, paylaşım görseli (og-gorsel.jpg)
sunumlar/           → haftalık sunum dosyaları
notlar/             → araştırma ve haftalık görev listeleri
```

## Bir metni nasıl değiştiririm?

Metinler sayfa kodunun içine gömülü değildir; hepsi `src/data/` klasöründeki üç dosyada durur:

| Dosya | İçindekiler |
|---|---|
| `src/data/mesajlar.js` | Ana sayfa: "ne sağlar" bölümü, kartlar, kapanış çağrısı |
| `src/data/ozellikler.js` | Özellikler sayfasındaki 6 bölümün başlık ve açıklamaları |
| `src/data/hakkinda.js` | Hakkında sayfası: tanıtım, SSS, yol haritası, **e-posta ve adres** |
| `src/data/rakamlar.js` | "Rakamlarla CBS" bandındaki değerler |

Dosyayı herhangi bir metin düzenleyiciyle açın, tırnak işaretleri **arasındaki** metni değiştirin, tırnakları ve virgülleri silmeyin, kaydedin. Site yerelde çalışıyorsa değişiklik anında görünür.

## Bir görseli nasıl değiştiririm?

1. Yeni görseli **WebP** biçiminde ve **200 KB altında** hazırlayın ([squoosh.app](https://squoosh.app) ücretsiz dönüştürür).
2. `src/assets/img/` içindeki eski dosyanın adının aynısıyla üzerine kaydedin (ör. `hero-sehir.webp`). Ad aynı kalırsa kodda değişiklik gerekmez.
3. Görselin en-boy oranı farklıysa sayfada taşma olup olmadığına bakın.

Paylaşım kartı görseli (WhatsApp/X önizlemesi) ayrıdır: `public/og-gorsel.jpg`, 1200×630 boyutunda JPG olmalıdır.

## Yeni bölüm nasıl eklenir?

1. Metni önce `src/data/` altındaki ilgili dosyaya ekleyin (örneğin SSS'ye soru eklemek: `hakkinda.js` içindeki `sorular` listesine mevcut satırların kopyasını yapıştırıp metnini değiştirin — kod bilgisi gerekmez, liste kendiliğinden uzar).
2. Sayfaya yepyeni bir bölüm gerekiyorsa `src/pages/` içindeki ilgili sayfada mevcut bir `<section>` bloğunu örnek alın. Renk kodu yazmayın; her zaman `var(--renk-...)` değişkenlerini kullanın (tanımları `src/styles/tokens.css`'te).

## Yerelde çalıştırma

Bilgisayarda [Node.js](https://nodejs.org) (LTS sürümü) kurulu olmalıdır.

```bash
npm install       # ilk seferde, bağımlılıkları kurar
npm run dev       # geliştirme sunucusu: http://localhost:4321
```

Telefonda denemek için: `npm run dev -- --host` çalıştırıp terminalde yazan "Network" adresini telefonun tarayıcısına yazın (telefon ve bilgisayar aynı ağda olmalı; kişisel erişim noktası/hotspot en garantili yol).

## Yayınlama (manuel)

Site yayını otomatik değildir; iki adımdır:

```bash
npm run build
npx wrangler deploy
```

İlk komut siteyi `dist/` klasörüne üretir; ikincisi Cloudflare Workers'a yükler (ilk kullanımda `npx wrangler login` ile tarayıcıdan giriş istenir). Yapılandırma `wrangler.jsonc` dosyasındadır. Alternatif: `dist/` içeriği herhangi bir web sunucusuna (`scp` ile VPS'e) kopyalanabilir — çıktı düz statik dosyalardır.

Deneme yayını: <https://cbs-tanitim-sitesi.bingol-cbs-tanitim-sitesi.workers.dev>

---

*Bingöl Belediyesi staj projesi kapsamında geliştirilmiştir (Ağustos–Eylül 2026).*
