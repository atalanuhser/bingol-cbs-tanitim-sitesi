# CBS Alan Araştırması Notları (Gün 1)

Kaynak: açık internet araştırması (21 Ağustos 2026). Arşivdeki demo ekran görüntüleri yalnızca
arayüz öğeleri bölümünde yardımcı bağlam olarak kullanıldı — bilgi kaynağı değildir.

## 1. CBS / Kent Bilgi Sistemi nedir
- CBS (Coğrafi Bilgi Sistemi / GIS): konumu olan verinin toplanması, saklanması, sorgulanması ve harita üzerinde gösterilmesi.
- Kent Bilgi Sistemi (KBS): bir kente ait grafik (harita) ve grafik olmayan (tablo/belge) verinin
  tek mekânsal sistemde güncellenerek yönetilmesi; belediye hizmetlerinde karar desteği.
- Belediyelerde tipik kullanım alanları: imar ve kadastro (parsel, yapı envanteri, imar planları),
  altyapı yönetimi (su, kanalizasyon, doğalgaz hatlarının takibi, arıza/bakım planlama),
  numarataj/adres, acil durum ve alan kullanım planlaması.
- Katmanlar metaveri ile tanımlanıp kataloglanır — "katman yönetimi" KBS literatüründe merkezî kavram.

## 2. Türkiye'de belediye CBS örnekleri (ne öne çıkarıyorlar)
- Yaygın vatandaş yüzü: e-imar / imar durumu sorgu, ada-parsel sorgulama, kent rehberi,
  nöbetçi eczane, adres sorgu (örnek: Altındağ, Konya, Çankaya, Melikgazi, KEOS kullanan belediyeler).
- Ticari ürünler (ör. Netcad KEOS): belediye içi uygulamalar + vatandaşa açık uygulamalar tek çatı altında;
  harita destekli sorgulama, online imar durumu, mobil uyum vurgusu.
- Çıkarım: pazarda iki ana anlatı var — (a) kurum içi verimlilik/karar desteği, (b) vatandaş hizmetleri.
  Bizim site (a) odaklı; vatandaş erişimi vaadi kırmızı çizgi gereği YAZILMAZ.

## 3. TUCBS (Türkiye Ulusal Coğrafi Bilgi Sistemi)
- CBS Genel Müdürlüğü (ÇŞİDB) koordinasyonunda ulusal coğrafi veri altyapısı; 49 sayılı CB Kararnamesi dayanaklı.
- 32 coğrafi veri teması; birincil temalar: Adres, Bina, Tapu-Kadastro, İdari Birim, Ulaşım,
  Hidrografya, Ortofoto, Arazi Örtüsü, Topografya, Jeodezik Altyapı. İkincil düzeyde Altyapı, Plan Bölgeleri vb.
- Amaç: kurumlar arası birlikte çalışabilirlik — aynı nesne tipleri, aynı öznitelik adları.
- Siteye çevirisi: "öznitelik yapısı ulusal standartla (TUCBS) uyumlu → veriniz diğer kurumlarla konuşabilir."

## 4. Vektör karo (MVT) neden hızlı
- MVT = Mapbox Vector Tile; harita verisini küçük vektör parçalar hâlinde gönderir.
- Raster karoya göre çoğu içerikte 5–10× küçük dosya → daha hızlı yükleme.
- Çizim istemcide (tarayıcı/GPU) yapılır → sunucu yükü düşer, her ekran çözünürlüğünde net görüntü,
  stil değişikliği için sunucuya gitmek gerekmez; akıcı yakınlaştırma/kaydırma.
- Siteye çevirisi: "modern vektör karo altyapısı = büyük şehir verisi telefonda bile akıcı."

## 5. Veri kalitesi, metaveri, lineage
- Metaveri: verinin kaynağını, kalitesini, güncelliğini, formatını tanımlayan bilgi (TÜİK/CBS GM rehberleri).
- Veri kalitesi boyutları: doğruluk, bütünlük, tutarlılık, güncellik; lineage = verinin nereden gelip
  hangi işlemlerden geçtiğinin izi.
- Siteye çevirisi: "haritadaki her nesnenin kaynağı ve işlem geçmişi kayıtlı — 'bu veri nereden geldi'
  sorusunun her zaman cevabı var."

## 6. Kurum sunucusunda barındırma (on-premise) ve KVKK
- On-premise: yazılım kurumun kendi sunucusunda; veri konumu üzerinde tam kontrol.
- KVKK bağlamı: veri Türkiye'de/kurumda kalır, yurt dışı aktarım prosedürü gerekmez.
- Açık kaynak yığın örneği: GeoServer + PostGIS ile kurum içi harita servisi yaygın ve olgun bir desen.
- Siteye çevirisi: "veri kurumun kendi sunucusunda — dışarı çıkmaz" güçlü ve gerçekçi bir mesaj.

## 7. CBS arayüzü öğeleri → CbsMockup şartnamesi
(Genel CBS arayüz kalıpları; arşiv görüntüleri yalnızca teyit için kullanıldı.)
- **Katman paneli:** checkbox'lı katman listesi (ör. Atıksu Hattı, İçme Suyu, Planlı Arazi Kullanımı,
  Parseller, Binalar); katman altında renk kodlu alt sınıflar (ör. boru çapı aralıkları).
- **Bilgi penceresi (öznitelik kartı):** haritada nesneye tıklayınca açılan panel — öznitelik tablosu
  (ör. boru çapı, uzunluk, kaynak dosya, TUCBS sınıfı) + ilişkili kayıt sayıları.
- **Arama kutusu:** adres / ada-parsel / kayıt no.
- **Harita araçları:** yakınlaştır/uzaklaştır, lejant, ölçek çubuğu, konum.
- **Durum çubuğu:** koordinat sistemi (EPSG), veri güncellik göstergesi, özet istatistik.
- **Veri yönetimi ekranı:** katman kataloğu tablosu (kaynak, kayıt sayısı, durum rozetleri),
  işleme hattı adımları (içe aktarma → kürasyon → kalite kontrolü → yayın), TUCBS alan eşlemesi.
- Mockup varyantlarına karşılık: `katmanlar` → katman paneli + harita; `bilgi-penceresi` → öznitelik
  kartı açık harita; `genel` → arama + araçlar + durum çubuğuyla genel görünüm.

## 8. Mesaj listesiyle çelişki kontrolü (sonuç)
Altı mesajın tamamı araştırmayla destekleniyor, çelişki yok:
1. Tek haritada altyapı ✓ (KBS'nin tanımı bu)
2. Katman yönetimi ✓ (literatürde merkezî kavram)
3. Hızlı harita ✓ (MVT'nin ölçülmüş avantajları)
4. Veri kurumda ✓ (on-premise + KVKK anlatısı yaygın)
5. TUCBS uyumu ✓ (gerçek ulusal standart, belediyeler için anlamlı)
6. Denetlenebilir veri kalitesi ✓ (metaveri/lineage kavramlarıyla birebir)

Tek not: pazardaki sitelerin çoğu vatandaş hizmetlerini (e-imar, parsel sorgu) öne çıkarıyor;
bizim sitede bu YOK ve bilinçli — kırmızı çizgi: vatandaşa açık erişim vaat edilmez.

## Kaynaklar
- https://dergipark.org.tr/tr/pub/hartek/article/177623 (CBS'nin yerel yönetimlerde kullanımı)
- https://www.urbased.com/kent-bilgi-sistemi-nedir/
- https://cbs.csb.gov.tr/turkiye-ulusal-cografi-bilgi-sistemi-tucbs-i-86080
- https://tucbs.gov.tr/tucbs-tanimlama-dokumanlari/
- https://en.wikipedia.org/wiki/Vector_tiles
- https://www.mdpi.com/2220-9964/9/2/101 (vektör vs raster karo performans testi)
- https://atlas.co/courses/gis-basics/raster-tiles-vs-vector-tiles/
- https://www.tuik.gov.tr/Kurumsal/Meta_Veri_Nedir
- https://webdosya.csb.gov.tr/db/cbs/icerikler/metaveri_rehber_dokumani-20210419145401.pdf
- https://www.netcad.com/tr/urunler/keos
- https://cbs.altindag.bel.tr/ · https://kbs.konya.bel.tr/ (belediye örnekleri)
- https://ankageo.com/harita-sunucu-yazilimlari/ (GeoServer/PostGIS on-premise)
