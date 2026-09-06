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
- [x] Kontrast denetimi Lighthouse'ta 3 sayfada 100; odak halkası `:focus-visible`'da doğrulandı (2px yeşil + 2px boşluk); tabindex hilesi yok, Tab sırası DOM sırası
- [x] SEO/OG: Layout.astro'ya canonical + OG + twitter kartı eklendi (`og:locale=tr_TR`, `public/og-gorsel.jpg` 1200×630 — paylaşım uyumluluğu için bilinçli JPG); mutlak adresler piramittek.com üzerinden
- [x] Türkçe yazım son geçişi: otomatik hata taraması + tüm görünür metinlerin okuması — düzeltme çıkmadı
- **Çıktı:** kalite çıtası maddeleri kapanmış

## Gün 19 — Perşembe 17 Eylül: README + prova
- [x] README yazıldı: CLAUDE.md'deki tüm başlıklar + telefon testi ipucu + deneme yayını adresi
- [x] Final sunum hazırlandı (`sunumlar/sunum-4-final.pptx`, aynı üslup, konuşmacı notlu) — prova kullanıcıda
- **Çıktı:** README depoda + prova tamam

## — Cuma 18 Eylül: Teslim
- [ ] Sabah: son build + manuel yayın (karar süpervizörde; karar yoksa "yayına hazır" tam puandır — workers.dev deneme adresi mevcut)
- [ ] **15.00 Final Sunum (#4)** + retrospektif
- **Çıktı:** site yayında/yayına hazır, staj teslim

## Haftaya yayılan kurallar
- Yeni özellik yok; yalnızca test, düzeltme, belge.
- Renk kodu yalnızca `tokens.css`; metin bileşene gömülmez.
- Cuma günü yeni iş açılmaz; perşembe öğleden sonrası tampondur.
