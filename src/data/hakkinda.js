// Hakkında / İletişim sayfası içeriği — metinler bileşene gömülmez.
// İletişim bilgileri PLACEHOLDER'dır; gerçekleri geldiğinde yalnızca bu dosya değişir.

export const sayfaBasi = {
  eyebrow: "Hakkında",
  baslikDuz: "Şehrin verisini",
  baslikVurgu: "haritayla buluşturuyoruz",
  aciklama:
    "Piramittek CBS, belediyelerin dağınık altyapı verisini tek bir sorgulanabilir kent haritasında toplayan bir coğrafi bilgi sistemidir.",
};

export const tanitim = [
  "Belediyelerde altyapı bilgisi çoğu zaman ayrı dosyalarda, farklı birimlerde ve birbirinden habersiz sistemlerde durur. Piramittek CBS bu dağınıklığı tek bir kent haritasında toplar: su ve kanalizasyon hatları, imar planları, numarataj ve mahalle sınırları aynı ekranda, katman katman sorgulanabilir hâle gelir.",
  "Sistemi kurarken iki ilkeden ödün vermeyiz. Birincisi veri kalitesi: haritadaki her nesnenin hangi kaynaktan geldiği ve hangi işlemlerden geçtiği kayıt altındadır. İkincisi ulusal standartlara uyum: öznitelik yapısı Türkiye Ulusal Coğrafi Bilgi Sistemi (TUCBS) standartlarına göre kurulur; kurumlar arası veri paylaşımında dönüştürme derdi yaşanmaz.",
  "Veri kurumun kendi sunucusunda barındırılır, üçüncü taraf buluta çıkmaz. Modern vektör karo altyapısı sayesinde harita tarayıcıda hızlı ve akıcı çalışır; ekipler masa başında da sahada tablette de aynı güncel haritayı kullanır.",
];

// SSS — cevaplar onaylı özellik metinlerinden (ozellikler.js, 4 Eylül onayı)
// türetilmiştir; onaylı içerikle çelişen yeni iddia eklenmez.
export const sss = {
  eyebrow: "Sık Sorulan Sorular",
  baslikDuz: "Aklınıza takılanları",
  baslikVurgu: "kısaca yanıtlayalım",
  sorular: [
    {
      soru: "Kullanmak için bilgisayarlara özel bir program kurmak gerekir mi?",
      cevap:
        "Hayır. Sistem tarayıcıda çalışır; ekipler haritayı masa başında da sahada tablette de doğrudan tarayıcıdan açar, kurulum ve güncelleme derdi yaşamaz.",
    },
    {
      soru: "Verilerimiz nerede tutulur?",
      cevap:
        "Tüm katmanlar kurumun kendi sunucusunda barındırılır; hiçbir veri üçüncü taraf buluta gönderilmez. Kimin neyi görüp düzenleyeceğini birim bazında yetkiler belirler.",
    },
    {
      soru: "Elimizdeki dağınık dosyalar sisteme aktarılabilir mi?",
      cevap:
        "Evet, veri aktarımı kurulum sürecinin parçasıdır. Aktarılan her nesnenin hangi kaynaktan geldiği ve hangi işlemlerden geçtiği kayıt altına alınır; \"bu veri nereden geldi?\" sorusunun her zaman bir cevabı olur.",
    },
    {
      soru: "TUCBS uyumu bizim için ne anlama geliyor?",
      cevap:
        "Öznitelik yapısı Türkiye Ulusal Coğrafi Bilgi Sistemi (TUCBS) standartlarına göre kurulur. Aynı dili konuşan veri, kurumlar arası paylaşımda dönüştürme derdi yaşatmaz.",
    },
    {
      soru: "Harita, veri büyüdükçe yavaşlar mı?",
      cevap:
        "Modern vektör karo (MVT) altyapısı şehir verisini küçük parçalar hâlinde iletir; binlerce nesne yüklüyken bile yakınlaştırma ve sorgular akıcı kalır.",
    },
  ],
};

// Yol haritası — kural 8: tarih vaadi YOK, yalnızca "Yakında / Planlanıyor" dili.
export const yolHaritasi = {
  eyebrow: "Yol Haritası",
  baslikDuz: "Sırada",
  baslikVurgu: "neler var?",
  aciklama:
    "Sistemi kullanan ekiplerin ihtiyaçlarına göre geliştirmeye devam ediyoruz. Öne çıkan başlıklar:",
  maddeler: [
    {
      baslik: "Raporlama ve istatistik panelleri",
      aciklama: "Katman verilerinden özet raporlar ve grafikler.",
      durum: "Yakında",
    },
    {
      baslik: "Saha ekipleri için çevrimdışı çalışma",
      aciklama: "Bağlantının zayıf olduğu bölgelerde kesintisiz kullanım.",
      durum: "Planlanıyor",
    },
    {
      baslik: "Kurumlar arası veri paylaşım servisleri",
      aciklama: "TUCBS uyumlu standart servislerle diğer kurumlarla veri alışverişi.",
      durum: "Planlanıyor",
    },
    {
      baslik: "3B kent modeli görünümü",
      aciklama: "Bina ve altyapının üç boyutlu gösterimi.",
      durum: "Planlanıyor",
    },
  ],
};

export const iletisim = {
  eyebrow: "İletişim",
  baslikDuz: "Sistemi kurumunuzda",
  baslikVurgu: "birlikte planlayalım",
  aciklama:
    "Kurulum, veri aktarımı ve TUCBS uyumu hakkında sorularınız için bize yazın; size bir tanıtım görüşmesiyle dönelim.",
  eposta: "bilgi@piramittek.com",
  adres: "Örnek Mahallesi, Örnek Caddesi No: 1, Bingöl",
};
