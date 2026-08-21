# CBS Tanıtım Sitesi — Proje Bağlamı

## Proje nedir
piramittek.com için **genel bir CBS (Coğrafi Bilgi Sistemi) tanıtım web sitesi**. Piramittek'in CBS ürününü anlatan pazarlama/tanıtım sitesi. Bingöl Belediyesi'nde staj projesi olarak yapılıyor ama içerik genel geçer bir CBS ürün tanıtımıdır — belirli bir kurumun canlı sistemine, gerçek verisine veya iç bilgisine bağlı DEĞİLDİR.

- CBS sisteminin kendisine (kod tabanı, veritabanı, harita servisi) dokunulmaz. Bu ayrı, bağımsız bir statik sitedir.
- **CBS hakkında kurum içinden (süpervizör/yönetici) veri veya bilgi alınmaz, istenmez.** Bilgi kaynağı açık internet araştırmasıdır (CBS kavramları, TUCBS, belediye CBS örnekleri).
- `CBS_Screens_Archive_GitIgnore/` içindeki demo ekran görüntüleri yalnızca **yardımcı bağlamdır** — asla tek veya birincil bilgi kaynağı olarak kullanılmaz, içerik bunlardan türetilip doğrulanmadan siteye yazılmaz. Klasör git'e commit edilmez (`.gitignore`).
- Canlı harita gömülmez (Leaflet/Mapbox/OpenLayers YOK). Harita görselleri stilize mockup olarak kodla üretilir.
- Tüm rakamlar ve iddialar placeholder'dır, `src/data/` altında tek yerde tutulur.

## Sayfalar
1. **Ana sayfa:** hero → değer önerileri (4-6 mesaj) → "Rakamlarla CBS" bandı → öne çıkan özellikler → kapanış CTA
2. **Özellikler:** interaktif harita, katman yönetimi, veri kalitesi/kürasyon, ulusal standartlara (TUCBS) uyum, hızlı vektör karo (MVT) altyapısı, kurum sunucusunda barındırma
3. **Hakkında / İletişim** (tek sayfa)

Olması güzel (zaman kalırsa): SSS, yol haritası bölümü.

## Teknoloji — tartışmaya kapalı kararlar

| Ne | Karar |
|---|---|
| Çatı | **Astro**, statik çıktı (`npm run build` → `dist/`) |
| Stil | Sade CSS + custom properties. Tailwind YOK, UI kütüphanesi YOK |
| JS | Minimum. Framework YOK (React/Vue/Svelte island'ları dahil, gerekmedikçe) |
| İçerik | Metinler `src/content/` altında markdown/veri dosyasında, bileşene gömülmez |
| Görseller | Stilize arayüz mockup'ları HTML/SVG ile kodda; dekoratif görseller AI üretimi, `src/assets/img/` |
| Geliştirme | **Sadece localhost** (`npm run dev`) |
| Depo | GitHub — sadece commit/push/pull. **GitHub Actions / workflow YARATMA** |
| Yayın | Sprint sonunda manuel: Cloudflare Workers (`wrangler deploy`) veya VPS'e `scp`. **Netlify/Vercel/Pages gibi servisler ASLA kullanılmaz, önerilmez** |
| Tasarım | Kodda, dene-yanıl. **Figma/Illustrator gibi araçlar önerilmez** |

## Dosya yapısı
```
src/
  pages/            → index.astro, ozellikler.astro, hakkinda.astro
  layouts/          → Layout.astro (ortak iskelet: head, header, footer)
  components/       → Hero.astro, OzellikBolumu.astro, RakamBandi.astro, CbsMockup.astro ...
  content/          → sayfa metinleri (markdown)
  data/             → rakamlar.js, mesajlar.js (placeholder veriler)
  styles/
    tokens.css      → TÜM renkler, tipografi, boşluk ölçeği — TEK yer
    global.css      → reset + temel stiller
  assets/img/       → AI üretimi görseller (WebP)
public/             → favicon, robots.txt
```

## Değişmez kurallar
1. **Renk kodu sadece `tokens.css`'te yazılır.** Bileşen içinde asla `#hex` değeri kullanma, her zaman `var(--renk-*)`.
2. Site dili **Türkçe**. `<html lang="tr">`. Çoklu dil altyapısı kurulmaz.
3. Her `<img>`'ye anlamlı Türkçe `alt` metni. Süsleme görsellerine `alt=""`.
4. Mobil öncelikli CSS: önce dar ekran, `min-width` ile genişlet. Kırılma noktaları: 640 / 900 / 1200px.
5. Sayfa başına tek `<h1>`, başlık hiyerarşisi atlanmaz.
6. Dış CDN'den hiçbir şey çekilmez: font dosyaları projede (`latin-ext` alt kümesi — ı, İ, ğ, ş, ç, ö, ü zorunlu), ikonlar inline SVG (Lucide setinden kopyala).
7. Görseller WebP, tek görsel < 200 KB, hero dışındakilere `loading="lazy"`, hepsine `width`/`height`.
8. Metinde tarih vaadi yok: yol haritası maddeleri "yakında / planlanıyor" dilinde.
9. Rakamlar sadece `src/data/rakamlar.js`'ten gelir. Metin içine rakam gömme — sonradan gerçekleriyle tek dosyadan değiştirilecek.

## Placeholder veriler (başlangıç)
```js
// src/data/rakamlar.js
export const rakamlar = [
  { deger: "250+", etiket: "km şebeke haritada" },
  { deger: "12",   etiket: "aktif veri katmanı" },
  { deger: "<3sn", etiket: "tüm şehir görünümü açılışı" },
  { deger: "%100", etiket: "ulusal standart (TUCBS) uyumu" },
];
```

Ana mesajlar (değer önerileri):
1. Şehrin altyapısı tek haritada, sorgulanabilir
2. Katman yönetimi — her veri kümesi ayrı ayrı açılıp kapanır
3. Denetlenebilir veri kalitesi — "veri nereden geldi" sorusunun her zaman cevabı var
4. Modern vektör karo (MVT) altyapısıyla hızlı ve akıcı harita
5. Ulusal standartlara (TUCBS) uyumlu öznitelik yapısı
6. Veri kurumun kendi sunucusunda — dışarı çıkmaz

## CBS mockup bileşeni
Gerçek sistem ekran görüntüsü YOK. Yerine `CbsMockup.astro`: HTML/SVG ile stilize bir CBS arayüzü — koyu tema harita alanı, solda katman paneli (checkbox'lı: Atıksu Şebekesi, İmar Planı, Mahalle Sınırları), haritada renkli hatlar/poligonlar (SVG path), açık bir bilgi penceresi (öznitelik tablosu görünümü). Gerçekçilik değil, temiz ve modern görünüm hedeflenir. Varyantları prop ile: `variant="katmanlar" | "bilgi-penceresi" | "genel"`.

## Tasarım süreci (Claude ile çalışma şekli)
- Kullanıcı tasarımı kodda dene-yanıl ile yapar. Büyük değişiklik önerme, **her turda tek şeyi değiştir.**
- Yeni bir bölüm yaparken önce mevcut bölümlerin boşluk/renk düzenine bak, tutarlı kal.
- "Güzelleştir" gibi belirsiz taleplerde 2-3 somut seçenek sun, seçtir.
- Bir şeyi yapmadan önce ne yapacağını kısaca söyle; önemsiz olmayan kod için tek cümlelik açıklama ver — kullanıcı bu kodu haftalık incelemede anlatabilecek durumda olmalı.

## Kalite çıtası (sprint sonu hedefleri)
- Lighthouse (mobil): Performans ≥ 90, Erişilebilirlik ≥ 90, SEO ≥ 90
- Chrome + Safari + Firefox'ta kırılma yok; 375px'te yatay kaydırma yok
- Konsolda hata yok, 404 link yok, yer tutucu "lorem" metni kalmamış
- Her sayfada benzersiz `<title>` + `<meta description>` + OG etiketleri (`og:locale` = `tr_TR`, OG görseli 1200×630)
- Klavye (Tab) ile tüm linkler gezilebilir, odak halkası görünür
- Metin/zemin kontrastı ≥ 4.5:1

## Yayın (sprint sonunda, manuel)
```bash
npm run build
# Seçenek A — VPS:
scp -r dist/* kullanici@sunucu:/var/www/site/
# Seçenek B — Cloudflare Workers:
npx wrangler deploy
```
Bunun dışında hiçbir yayın otomasyonu, servis entegrasyonu veya webhook kurulmaz.

## Kaba takvim (18 Eylül teslim)
- **Hafta 1:** tokens.css + görsel yön, hero, ana mesaj bölümü — localhost'ta tasarımı oturt
- **Hafta 2:** navigasyon, footer, rakam bandı, özellikler sayfası iskeleti, CbsMockup bileşeni
- **Hafta 3:** tüm metinler, mockup varyantları, AI görseller, hakkında/iletişim — içerik tamam
- **Hafta 4:** tarayıcı testleri, Lighthouse, erişilebilirlik, SEO/OG, README (kurulum + içerik güncelleme + manuel yayın adımları), yayın

## README'de olması gerekenler (4. hafta)
Bu site nedir (3 cümle) · dosya yapısı · bir metin nasıl değiştirilir (teknik olmayan biri için) · bir görsel nasıl değiştirilir · yeni bölüm nasıl eklenir · yerelde çalıştırma (`npm install`, `npm run dev`) · manuel yayın adımları · rakamların `src/data/`'da olduğu ve gerçekleriyle değiştirileceği notu.
