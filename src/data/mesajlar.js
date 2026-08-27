// "CBS belediyenize ne sağlar?" bölümü içeriği.
// Kaynak: onaylı bölüm taslağı (cbs-bolum-taslak.html, 28 Ağu) — metinler
// Gün 2 mesajlarının taslakta düzenlenmiş hâlidir.

export const bolumGiris = {
  eyebrow: "Coğrafi Bilgi Sistemi",
  baslikDuz: "CBS belediyenize",
  baslikVurgu: "ne sağlar?",
  aciklama:
    "Dağınık dosyalarda duran altyapı verisi tek bir sorgulanabilir kent haritasında toplanır. Aşağıdaki haritada katmanları açıp kapatarak deneyin.",
};

// Öne çıkan koyu kart — canlı katman demosu
export const oneCikan = {
  etiket: "Canlı örnek",
  baslik: "Her veri katmanı ayrı ayrı açılıp kapanır",
  aciklama:
    "Su hattı, imar parselleri, numarataj — her veri kümesi kendi katmanında yaşar. O an neye ihtiyacınız varsa onu açarsınız; harita hiç kalabalıklaşmaz.",
  ipucu: "Sağdaki katman düğmelerine tıklayın",
};

// Standart kartlar — sıralama taslaktaki sıradır.
export const mesajlar = [
  {
    baslik: "Şehrin tüm altyapısı tek haritada",
    aciklama:
      "Su, kanalizasyon, imar, numarataj — ayrı dosyalarda duran her şey tek kent haritasında birleşir. Aradığınız hattı veya parseli saniyeler içinde bulur, tıklayıp tüm bilgisini görürsünüz.",
  },
  {
    baslik: "Tarayıcıda, hızlı ve akıcı",
    aciklama:
      "Kurulum gerektirmez; ekipler haritayı doğrudan tarayıcıdan açar. Binlerce nesne yüklüyken bile yakınlaştırma ve sorgular gecikmesiz çalışır, sahada tabletten de kullanılır.",
  },
  {
    baslik: "Veri kurumunuzda kalır",
    aciklama:
      "Tüm katmanlar belediyenin kendi sunucusunda barındırılır; üçüncü taraf buluta veri çıkmaz. Kimin neyi görüp düzenleyeceğini birim bazında yetkilerle siz belirlersiniz.",
  },
];

// Taslakta yer almayan onaylı Gün 2 mesajları — silinmedi; özellikler
// sayfasında (TUCBS ve veri kalitesi bölümlerinde) kullanılacak.
export const yedekMesajlar = [
  {
    baslik: "Ulusal standartlarla (TUCBS) uyumlu",
    aciklama:
      "Öznitelik yapısı Türkiye Ulusal Coğrafi Bilgi Sistemi standartlarına göre kurulur. Aynı dili konuşan veri, kurumlar arası paylaşımda dönüştürme derdi yaşatmaz.",
  },
  {
    baslik: "Her verinin kaynağı belli — denetlenebilir veri kalitesi",
    aciklama:
      "Haritadaki her nesnenin hangi kaynaktan geldiği ve hangi işlemlerden geçtiği kayıt altındadır. \"Bu veri nereden geldi?\" sorusunun her zaman bir cevabı vardır.",
  },
];
