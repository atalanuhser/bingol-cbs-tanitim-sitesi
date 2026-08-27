# Hafta 2 — Gün Gün Görev Listesi (İskelet)

31 Ağustos – 4 Eylül. Hedef: localhost'ta gezilebilir site iskeleti. Her gün en az bir anlamlı commit + push.

## Gün 6 — Pazartesi 31 Ağustos: Astro kurulumu
- [ ] Astro'yu minimal şablonla kur (TypeScript'siz, örnek içeriksiz)
- [ ] CLAUDE.md'deki klasör yapısını aç: `src/pages/`, `src/layouts/`, `src/components/`, `src/content/`
- [ ] `Layout.astro`: ortak head (charset, viewport, title/description prop'ları, favicon), header/footer yer tutucuları, `<html lang="tr">`
- [ ] `tokens.css` + `global.css` (reset + temel stiller) Layout'a bağlanır
- [x] Font kararı (28 Ağu revizyonu): yerel Lora (başlık) + Figtree (gövde) — latin+latin-ext woff2 `public/fonts/`te, `@font-face` `src/styles/fontlar.css`te; önceki "sistem fontları kalıcı" kararının yerine geçti
- [ ] 3 boş sayfa rotası: `index.astro`, `ozellikler.astro`, `hakkinda.astro`
- [ ] `.gitignore`'a `.astro/` eklenir; `npm run dev` doğrulaması; commit + push
- **Çıktı:** boş ama çalışan 3 sayfalık site localhost'ta

## Gün 7 — Salı 1 Eylül: Hero + mesaj bölümü
- [ ] Onaylı hero taslağı (`taslaklar/hero-taslak.html`) `Hero.astro`'ya dökülür — token kopyaları atılır, gerçek `tokens.css` kullanılır
- [ ] `MesajKartlari.astro`: veriyi `src/data/mesajlar.js`'ten döngüyle çeker
- [ ] Kart ızgarası: mobil 1 / 640px 2 / 1200px 3 sütun; her karta inline SVG ikon (Lucide kopyası)
- [ ] Alt metin ve kontrast baştan doğru; commit + push
- **Çıktı:** ana sayfanın üst yarısı gerçek kodda

## Gün 8 — Çarşamba 2 Eylül: Navigasyon + footer + rakam bandı
- [ ] Header: logo + 3 nav linki, aktif sayfa vurgusu (hamburger yok)
- [ ] Klavye erişimi: Tab gezinmesi + görünür odak halkası
- [ ] `Footer.astro`: logo, tek cümle, nav tekrarı, iletişim linki
- [ ] `src/data/rakamlar.js` (CLAUDE.md'deki 4 placeholder) + `RakamBandi.astro` (mobil 2×2, 900px 4'lü)
- [ ] 375px yatay kaydırma kontrolü; commit + push
- **Çıktı:** ortak iskelet tüm sayfalarda

## Gün 9 — Perşembe 3 Eylül: Özellikler sayfası iskeleti
- [ ] `ozellikler.astro`: h1 + özet + 6 özellik bölümü h2 iskeleti (sıra: interaktif harita, katman yönetimi, veri kalitesi, TUCBS, MVT, kurum sunucusu)
- [ ] Her bölümde yer tutucu görsel alanı + 1 paragraf taslak metin; ≥900px zigzag
- [ ] Ana sayfa "öne çıkan özellikler" bölümü + özellikler sayfasına link
- [ ] 30 dk depo temizliği; öğleden sonra tampon; commit + push
- **Çıktı:** özellikler sayfası iskeleti

## Gün 10 — Cuma 4 Eylül: Mobil kontrol + Sunum #2
- [ ] Gerçek telefonda test (`npm run dev -- --host`), Chrome + Firefox kontrolü, konsol temiz
- [ ] Küçük rötuşlar — yeni özellik açılmaz
- [ ] Sunum #2: 4 slayt şablonu + prova (15 dk sınır); demo localhost'tan, mobil telefondan
- [ ] **15.00 Sunum #2**
- **Cuma çıktısı:** iskelet gezilebilir, mobil kırılmasız, günlük commit'ler atılmış
