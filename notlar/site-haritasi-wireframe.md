# Site Haritası + Wireframe'ler (Gün 4)

Renk/görsel yok — yalnızca yerleşim ve başlık hiyerarşisi. Mobil öncelikli: dar ekranda
tüm bölümler tek sütun alt alta; ≥900px'te belirtilen yan yana düzenler devreye girer.

## Site haritası

```
/            Ana sayfa
/ozellikler  Özellikler
/hakkinda    Hakkında + İletişim (tek sayfa)
```

Ortak iskelet (her sayfada):
```
┌──────────────────────────────────────┐
│ HEADER: logo · nav (3 link) · [CTA]  │  ← mobilde nav basit satır, hamburger YOK (3 link sığar)
├──────────────────────────────────────┤
│ ... sayfa içeriği ...                │
├──────────────────────────────────────┤
│ FOOTER: logo · kısa cümle · nav      │
│ tekrarı · iletişim linki             │
└──────────────────────────────────────┘
```

## 1. Ana sayfa (/)

```
┌──────────────────────────────────────┐
│ HERO                                 │
│  h1: ana değer cümlesi               │
│  1 paragraf destek metni             │
│  [Özellikleri İncele] [İletişim]     │
│  CbsMockup (genel varyant)           │  ← ≥900px: metin sol, mockup sağ
├──────────────────────────────────────┤
│ DEĞER ÖNERİLERİ                      │
│  h2 + 6 kart (mesajlar.js'ten)       │
│  kart: ikon · h3 · 1-2 cümle         │  ← mobil 1, ≥640px 2, ≥1200px 3 sütun
├──────────────────────────────────────┤
│ RAKAMLARLA CBS                       │
│  bant: 4 rakam (rakamlar.js'ten)     │  ← mobil 2×2, ≥900px 4'lü satır
├──────────────────────────────────────┤
│ ÖNE ÇIKAN ÖZELLİKLER                 │
│  h2 + 2-3 özellik özeti              │
│  (mockup varyantı + kısa metin,      │
│   dönüşümlü sol/sağ) → /ozellikler   │
├──────────────────────────────────────┤
│ KAPANIŞ CTA                          │
│  h2 çağrı cümlesi + [İletişime Geç]  │
└──────────────────────────────────────┘
```

## 2. Özellikler (/ozellikler)

```
┌──────────────────────────────────────┐
│ SAYFA BAŞI: h1 + 1 cümle özet        │
├──────────────────────────────────────┤
│ 6 ÖZELLİK BÖLÜMÜ (h2'ler):           │
│  1. İnteraktif harita                │
│  2. Katman yönetimi                  │  her bölüm: h2 · paragraf ·
│  3. Veri kalitesi ve kürasyon        │  mockup/diyagram görseli
│  4. TUCBS uyumu                      │  ← ≥900px: metin-görsel dönüşümlü
│  5. Hızlı vektör karo (MVT) altyapısı│     sol/sağ (zigzag)
│  6. Kurum sunucusunda barındırma     │
├──────────────────────────────────────┤
│ KAPANIŞ CTA (ana sayfayla aynı)      │
└──────────────────────────────────────┘
```

Mockup eşlemesi: 1-2 → variant="katmanlar" · 3 → veri paneli stili · 5 → variant="genel"
· 4/6 → inline SVG diyagram/ikon (harita gerektirmez).

## 3. Hakkında + İletişim (/hakkinda)

```
┌──────────────────────────────────────┐
│ h1: Hakkında                         │
│ 2-3 paragraf: bu ürün nedir, kimin   │
│ için, yaklaşım (standart, veri       │
│ sahipliği)                           │
├──────────────────────────────────────┤
│ h2: Yol haritası (zaman kalırsa)     │
│  "yakında / planlanıyor" dilinde     │
│  madde listesi                       │
├──────────────────────────────────────┤
│ h2: İletişim                         │
│  e-posta · adres — form YOK          │  ← statik site, form backend'i yok
└──────────────────────────────────────┘
```

## Başlık hiyerarşisi kuralı
Sayfa başına tek h1 (hero/sayfa başı). Bölümler h2, kart/özellik başlıkları h3. Atlama yok.

## Sunum #1'de sorulacaklar
- Hero'da mockup sağda mı, altta tam genişlik mi? (benchmark: Mapbox tarzı görsel ağırlık)
- 6 kart mı, 4 kart + 2'si özellik bölümüne mi? (yoğunluk tercihi)
- SSS ana sayfaya mı, hakkında sayfasına mı? (zaman kalırsa maddesi)
