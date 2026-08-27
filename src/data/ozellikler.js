// Özellikler sayfası içeriği — sıra CLAUDE.md'deki sıradır.
// Açıklamalar TASLAK metindir (Gün 2 onaylı mesajlardan türetildi);
// Hafta 3'te süpervizör redaksiyonundan geçecek.
// mockup: Hafta 3'te eklenecek CbsMockup varyantı (katmanlar | bilgi-penceresi | genel).
export const ozellikler = [
  {
    id: "interaktif-harita",
    baslik: "İnteraktif harita",
    aciklama:
      "Su, kanalizasyon, imar ve numarataj verisi tek ekranda buluşur. Haritada gezinir, aradığınız hattı ya da parseli sorguyla bulur, üzerine tıklayıp tüm özniteliklerini görürsünüz.",
    mockup: "genel",
  },
  {
    id: "katman-yonetimi",
    baslik: "Katman yönetimi",
    aciklama:
      "Her veri kümesi kendi katmanında yaşar. Atıksu şebekesi, imar planı, mahalle sınırları tek tıkla açılıp kapanır; ekip o an neye ihtiyaç duyuyorsa haritada yalnızca o görünür.",
    mockup: "katmanlar",
  },
  {
    id: "veri-kalitesi",
    baslik: "Denetlenebilir veri kalitesi",
    aciklama:
      "Haritadaki her nesnenin hangi kaynaktan geldiği ve hangi işlemlerden geçtiği kayıt altındadır. \"Bu veri nereden geldi?\" sorusunun her zaman bir cevabı vardır.",
    mockup: "bilgi-penceresi",
  },
  {
    id: "tucbs",
    baslik: "Ulusal standartlara (TUCBS) uyum",
    aciklama:
      "Öznitelik yapısı Türkiye Ulusal Coğrafi Bilgi Sistemi standartlarına göre kurulur. Aynı dili konuşan veri, kurumlar arası paylaşımda dönüştürme derdi yaşatmaz.",
    mockup: "bilgi-penceresi",
  },
  {
    id: "mvt",
    baslik: "Hızlı vektör karo (MVT) altyapısı",
    aciklama:
      "Modern vektör karo altyapısı büyük şehir verisini küçük parçalar hâlinde iletir; çizim tarayıcıda yapıldığı için sunucu yorulmaz. Harita masaüstünde de telefonda da takılmadan açılır, yakınlaştıkça netliğini korur.",
    mockup: "genel",
  },
  {
    id: "kurum-sunucusu",
    baslik: "Kurum sunucusunda barındırma",
    aciklama:
      "Sistem kurumun kendi sunucusunda çalışır; hiçbir veri üçüncü taraf buluta gönderilmez, veri konumu üzerindeki kontrol tümüyle kurumda kalır. Kimin neyi görüp düzenleyeceğini birim bazında yetkiler belirler.",
    mockup: "genel",
  },
];
