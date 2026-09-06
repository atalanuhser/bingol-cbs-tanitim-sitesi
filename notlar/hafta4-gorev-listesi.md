# Hafta 4 — Gün Gün Görev Listesi (Cila & Teslim)

14–18 Eylül. Hedef: yayına hazır kalite. **Bu hafta yeni özellik eklenmez.** Her gün en az bir anlamlı commit + push.
Not: plan önde işliyor; buradaki gün numaraları plan günleridir, takvim günü değil.

## Gün 16 — Pazartesi 14 Eylül: Tarayıcı/cihaz testleri
- [x] Chrome/Chromium: 3 sayfa × etkileşimler (katman demosu, SSS, çapalar) + konsol — temiz
- [x] Firefox (masaüstü): kullanıcı elle gezdi — sorun yok (CSS taraması: yalnızca `text-wrap` aşamalı iyileştirme)
- [x] Safari/telefon: kullanıcı canlı adresten (workers.dev) gezdi — sorun yok; `backdrop-filter` önek düzeltmesi yayında
- [x] 375 / 768 / 1280 görünüm turları — üç sayfada da yatay taşma yok
- [x] Bulgu listesi çıkarıldı; tek gerçek hata (`-webkit-backdrop-filter`) düzeltildi; commit + push
- **Çıktı:** hata listesi + düzeltmeler

## Gün 17 — Salı 15 Eylül: Build + Lighthouse
- [x] Lighthouse (mobil, canlı adres): Ana 98/100/100/100 · Özellikler 99/100/100/100 · Hakkında 95/100/100/100 (P/E/BP/SEO)
- [x] Görsel denetimi: 3 görsel de WebP < 200 KB; lazy (hero ve sayfa başı hariç) + width/height tam
- [x] Optimizasyonlar: CSS HTML'e gömüldü (FCP 2.5s→0.9s, Perf 87→98); mockup kapalı katman etiketi kontrast düzeltmesi (Erişilebilirlik 96→100)
- **Çıktı:** Lighthouse raporu + optimizasyonlar

## Gün 18 — Çarşamba 16 Eylül: Erişilebilirlik + SEO/OG + yazım
- [ ] Kontrast ≥ 4.5:1 denetimi; Tab ile tüm linkler gezilebilir, odak halkası görünür
- [ ] SEO/OG: her sayfada benzersiz title/description + OG etiketleri (`og:locale=tr_TR`, 1200×630 OG görseli) — Layout.astro'ya eklenecek
- [ ] Türkçe yazım redaksiyonu — son geçiş (tüm veri dosyaları + sayfalar)
- **Çıktı:** kalite çıtası maddeleri kapanmış

## Gün 19 — Perşembe 17 Eylül: README + prova
- [ ] README: site nedir (3 cümle) · dosya yapısı · metin/görsel değiştirme (teknik olmayan biri için) · yeni bölüm ekleme · yerelde çalıştırma · manuel yayın (`npx wrangler deploy`) · rakamlar notu
- [ ] Final sunum (#4) hazırlığı + prova
- **Çıktı:** README depoda + prova tamam

## — Cuma 18 Eylül: Teslim
- [ ] Sabah: son build + manuel yayın (karar süpervizörde; karar yoksa "yayına hazır" tam puandır — workers.dev deneme adresi mevcut)
- [ ] **15.00 Final Sunum (#4)** + retrospektif
- **Çıktı:** site yayında/yayına hazır, staj teslim

## Haftaya yayılan kurallar
- Yeni özellik yok; yalnızca test, düzeltme, belge.
- Renk kodu yalnızca `tokens.css`; metin bileşene gömülmez.
- Cuma günü yeni iş açılmaz; perşembe öğleden sonrası tampondur.
