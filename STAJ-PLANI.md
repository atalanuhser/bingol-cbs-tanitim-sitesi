# 19 Günlük İş Planı — CBS Tanıtım Sitesi

> 24 Ağustos – 17 Eylül 2026 arası 19 iş günü; **18 Eylül Cuma = teslim + final sunum** (plan dışı, ayrı gün).
> Ritim: cuma 15.00 sunumları, 1. hafta çarşamba kalibrasyon görevi, perşembe öğleden sonraları tampon.
> Geliştirme localhost'ta, her gün commit+push; yayın yalnızca sprint sonunda ve manueldir.

---

## Hafta 1 — Keşif & Tasarım (24–28 Ağustos)
Hafta hedefi: mesaj netleşir, tasarım yönü onaylanır. Bu hafta site kodu az — karar haftası.

| Gün | Tarih | Yapılacak iş | Gün sonu çıktısı |
|---|---|---|---|
| **1** | Pzt 24 Ağu | Oryantasyon; **CBS alan araştırması** — internetten CBS kavramları, TUCBS, belediye CBS örnekleri; arşivdeki demo ekran görüntülerine yalnızca yardımcı bağlam olarak göz at (tek kaynak değil). **Not tut** (bu notlar CbsMockup varyantlarının listesi olacak). Araç kurulumu: Node, git, depo (`git init` + GitHub, `.gitignore`'a ekran arşivi). | Çalışan geliştirme ortamı + boş depo + araştırma notları |
| **2** | Sal 25 Ağu | Ana mesaj çalışması: CLAUDE.md'deki 6 değer önerisini araştırma notlarıyla karşılaştır, 4–6 mesajı kesinleştir, `src/data/mesajlar.js` taslağını yaz. | Yazılı ana mesaj listesi |
| **3** | Çar 26 Ağu | Sabah: benchmark — 4–5 referans site (kurum tanıtım + teknoloji ürün sayfası), her biri için 3 satır not. Öğleden sonra: **kalibrasyon görevi** (2–3 saat, tek bölümlük duyarlı sayfa — commit'lenir, localhost'ta gösterilir). | Benchmark notları + kalibrasyon commit'i |
| **4** | Per 27 Ağu | Site haritası + kaba wireframe (kağıt/kodda kutu düzeni): ana sayfa, özellikler, hakkında. Renk yok, sadece yerleşim ve başlık hiyerarşisi. Öğleden sonra tampon. | 3 sayfanın wireframe'i |
| **5** | Cum 28 Ağu | Sabah: görsel yön — `tokens.css` ilk sürümü (palet, tipografi, boşluk ölçeği) + ana sayfa üst bölümünün 1 örnek taslağı. **15.00 Sunum #1** (tasarım onay kapısı). | Onaylı görsel yön; 2. hafta planı kalibrasyona göre ölçeklenir |

## Hafta 2 — İskelet (31 Ağustos – 4 Eylül)
Hafta hedefi: localhost'ta gezilebilir site iskeleti. Her gün en az bir anlamlı commit+push.

| Gün | Tarih | Yapılacak iş | Gün sonu çıktısı |
|---|---|---|---|
| **6** | Pzt 31 Ağu | Astro kurulumu (minimal şablon), CLAUDE.md'deki dosya yapısı açılır: `Layout.astro`, `tokens.css`/`global.css` bağlanır, fontlar projeye (latin-ext) eklenir, boş 3 sayfa rotası. | "Boş ama çalışan" site localhost'ta |
| **7** | Sal 1 Eyl | Ana sayfa: hero + ana mesaj bölümü (`mesajlar.js`'ten). Onaylı palet/tipografi koda dökülür. Alt metin ve kontrast baştan doğru yazılır. | Hero + mesaj bölümü bitmiş |
| **8** | Çar 2 Eyl | Navigasyon + footer + duyarlı yerleşim (375px kontrolü). "Rakamlarla CBS" bandı iskeleti (`rakamlar.js` placeholder). | Tüm sayfalarda ortak iskelet gezilebilir |
| **9** | Per 3 Eyl | Özellikler sayfası iskeleti: 6 özellik bölümü başlıkları + yer tutucu mockup alanları. 30 dk repo temizliği. Öğleden sonra tampon/hata ayıklama. | Özellikler sayfası iskeleti |
| **10** | Cum 4 Eyl | Sabah: gerçek telefonda mobil kontrol, toparlama, prova. **15.00 Sunum #2** — demo localhost'tan, telefonda aynı ağ üzerinden gösterilebilir (`npm run dev -- --host`). | İskelet onayı |

## Hafta 3 — İçerik & Mockup'lar (7–11 Eylül)
Hafta hedefi: "içerik tamam". 4. haftaya sadece cila kalır.

| Gün | Tarih | Yapılacak iş | Gün sonu çıktısı |
|---|---|---|---|
| **11** | Pzt 7 Eyl | `CbsMockup.astro` bileşeni: temel harita alanı + katman paneli (variant="katmanlar"). 1. hafta araştırma notları burada kullanılır. | İlk mockup varyantı çalışıyor |
| **12** | Sal 8 Eyl | Mockup varyantları: "bilgi-penceresi" ve "genel". Özellik metinlerinin ilk taslağı yazılır, gün sonunda **süpervizör redaksiyonuna** gider (içerik onay kapısı, dönüş 24 saat). | 3 mockup varyantı + taslak metinler redaksiyonda |
| **13** | Çar 9 Eyl | "Rakamlarla CBS" ve TUCBS bölümleri son hâline getirilir. Redaksiyon dönüşleri işlenir. AI görseller üretilir, WebP'ye çevrilir (<200 KB). | Rakam bandı + TUCBS bitmiş, görseller yerinde |
| **14** | Per 10 Eyl | Hakkında/İletişim sayfası. Zaman kaldıysa: SSS + yol haritası ("yakında/planlanıyor" dilinde). Öğleden sonra tampon + eksik görseller. | Tüm sayfalar içerikli |
| **15** | Cum 11 Eyl | Sabah: lorem/boş kutu taraması — hiçbir yer tutucu kalmaz (rakamlar `rakamlar.js`'te placeholder kalabilir, bu bilinçli). Prova. **15.00 Sunum #3.** | "İçerik tamam" onayı |

## Hafta 4 — Cila & Teslim (14–17 Eylül + 18 Eylül teslim)
Hafta hedefi: yayına hazır kalite. **Bu hafta yeni özellik eklenmez.**

| Gün | Tarih | Yapılacak iş | Gün sonu çıktısı |
|---|---|---|---|
| **16** | Pzt 14 Eyl | Tarayıcı/cihaz testi: Chrome + Firefox + Safari × telefon/masaüstü. Sorunları **önce listele**, sonra düzelt. 375px yatay kaydırma kontrolü. | Hata listesi + düzeltmeler |
| **17** | Sal 15 Eyl | `npm run build` + Lighthouse (mobil) ölçümü: Perf/Erişilebilirlik/SEO ≥ 90 hedefi. Görsel sıkıştırma, `loading="lazy"`, `width`/`height` denetimi. | Lighthouse raporu + optimizasyonlar |
| **18** | Çar 16 Eyl | Sabah: erişilebilirlik (kontrast ≥ 4.5:1, Tab gezinmesi, odak halkası) + SEO/meta/OG (`og:locale=tr_TR`, 1200×630 OG görseli, benzersiz title/description). Öğleden sonra: Türkçe yazım redaksiyonu — son geçiş. | Kalite çıtası maddeleri kapanmış |
| **19** | Per 17 Eyl | README yazılır (CLAUDE.md'deki başlıklar: nedir, dosya yapısı, metin/görsel değiştirme, yerelde çalıştırma, **manuel yayın adımları**, rakamlar notu). Final sunum provası. | README depoda + prova tamam |
| — | **Cum 18 Eyl** | Sabah: **manuel yayın** (VPS `scp` **veya** `wrangler deploy` — karar süpervizörde; karar gelmediyse "yayına hazır" tam puandır). **15.00 Final Sunum (#4)** + retrospektif. | Site yayında/yayına hazır, staj teslim |

---

## Her güne yayılan sabit kurallar
- Gün sonunda en az bir anlamlı **commit + push** (2. haftadan itibaren).
- Her yeni bölümde önce mevcut bölümlerin boşluk/renk düzenine bak — `tokens.css` dışında renk kodu yazılmaz.
- Cuma sabahları yalnızca toparlama + prova; cuma günü yeni iş açılmaz.
- Perşembe öğleden sonraları tampondur — plan kayarsa buradan telafi edilir.
- Gün planları esnek, **cuma çıktıları sabittir**; kayma olursa hafta içi diziliş değişir, cuma kapısı değişmez.
