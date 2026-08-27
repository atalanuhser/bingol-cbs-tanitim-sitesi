# Hafta 3 — Gün Gün Görev Listesi (İçerik & Mockup'lar)

7–11 Eylül. Hedef: "içerik tamam" — 4. haftaya yalnızca cila kalır. Her gün en az bir anlamlı commit + push.
Not: plan ~4 gün önde işliyor; buradaki gün numaraları plan günleridir, takvim günü değil.

## Gün 11 — Pazartesi 7 Eylül: CbsMockup bileşeni ✔
- [x] `CbsMockup.astro`: koyu tema harita alanı (SVG imar poligonları, atıksu hatları, mahalle sınırı, ızgara)
- [x] Solda checkbox'lı katman paneli (Atıksu Şebekesi + alt sınıflar, İmar Planı, Mahalle Sınırları; İçme Suyu ve Binalar kapalı)
- [x] `variant="katmanlar"` özellikler sayfasının katman yönetimi bölümüne bağlandı
- [x] Erişilebilirlik: `role="img"` + Türkçe `aria-label`; mobilde panel üstte
- **Çıktı:** ilk mockup varyantı sitede çalışıyor ✔

## Gün 12 — Salı 8 Eylül: Mockup varyantları + metin taslakları (redaksiyon kapısı)
- [ ] `variant="bilgi-penceresi"`: haritada seçili nesne + açık öznitelik kartı (boru çapı, uzunluk, kaynak dosya, TUCBS sınıfı — araştırma notları §7)
- [ ] `variant="genel"`: arama kutusu + harita araçları (yakınlaştır/lejant) + durum çubuğu (EPSG, güncellik) görünümü
- [ ] `OzellikBolumu.astro` hazır varyant listesine ikisi eklenir — 6 bölümün 6'sında da gerçek mockup
- [ ] Özellik metinlerinin ilk taslağı gözden geçirilir (`src/data/ozellikler.js` zaten taslak içeriyor) ve gün sonunda **süpervizör redaksiyonuna gönderilir** (e-posta/çıktı — dönüş 24 saat, içerik onay kapısı)
- [ ] Commit + push
- **Çıktı:** 3 mockup varyantı sitede + taslak metinler redaksiyonda

## Gün 13 — Çarşamba 9 Eylül: Rakam bandı + TUCBS son hâli + AI görseller
- [ ] Redaksiyon dönüşleri `ozellikler.js` / `mesajlar.js`'e işlenir (rakam gömme kuralı korunur)
- [ ] "Rakamlarla CBS" bandı son hâline getirilir (görsel rötuş; değerler placeholder kalır — bilinçli)
- [ ] TUCBS bölümü son hâli: metin + görsel alanı (bilgi-penceresi varyantı ya da AI görsel)
- [ ] AI görseller üretilir → WebP'ye çevrilir, tek görsel < 200 KB, `width`/`height` + `loading="lazy"` + Türkçe `alt`
- [ ] Görseller `src/assets/img/` altına, commit + push
- **Çıktı:** rakam bandı + TUCBS bitmiş, görseller yerinde

## Gün 14 — Perşembe 10 Eylül: Hakkında / İletişim sayfası
- [ ] `hakkinda.astro`: sayfa başı (v2 dili) + 2–3 paragraf tanıtım metni (`src/content/` veya veri dosyasından)
- [ ] İletişim bölümü: e-posta + adres (placeholder değerler, tek yerden değiştirilebilir); footer'daki İletişim linki buraya çapa ile bağlanır
- [ ] Zaman kalırsa: SSS (3–5 soru) + yol haritası bölümü — **tarih vaadi yok**, "yakında / planlanıyor" dili
- [ ] Öğleden sonra tampon: eksik görseller, küçük rötuşlar; commit + push
- **Çıktı:** tüm sayfalar içerikli

## Gün 15 — Cuma 11 Eylül: Tarama + Sunum #3
- [ ] Lorem/boş kutu taraması: hiçbir yer tutucu metin/kutu kalmaz (rakamlar placeholder kalabilir — bilinçli; "yakında" yer tutucu görsel alanı kalmamalı)
- [ ] Konsol temiz + 404 link kontrolü + 375px tur
- [ ] Sunum #3 hazırlanır (içerik tamam kapısı) + prova
- [ ] **15.00 Sunum #3**
- **Cuma çıktısı:** "içerik tamam" onayı — 4. haftaya yalnızca test/cila kalır

## Haftaya yayılan kurallar
- Metinler bileşene gömülmez (`src/data/` veya `src/content/`); rakamlar yalnızca `rakamlar.js`'ten.
- Her yeni bölümde önce mevcut boşluk/renk düzenine bak; renk kodu yalnızca `tokens.css`.
- Kontrast ≥ 4.5:1, her görselde anlamlı Türkçe `alt`, süsleme görselinde `alt=""`.
- Cuma günü yeni iş açılmaz; perşembe öğleden sonrası tampondur.
