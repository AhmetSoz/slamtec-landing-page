# Son kontrol — 4 Ekim 2026

## Kapsam ve sonuçlar

- SLAMTEC: 16 ürün; masaüstü ve 390 px telefon görünümü. Ürün anlatımları, görünür bölüm başlıkları, tablo hücreleri, galeriler, karusel seçimleri, PDF alanları ve katalog dönüşü incelendi.
- uFactory: 13 ürün kartı, 4 kategori ve bütün model/paket seçenekleri; masaüstü ve 390 px telefon görünümü. Galeri, seçenek bazlı satış/teklif bağlantıları, menü, sayfa bölümleri ve klavye erişimi kontrol edildi.
- 47 farklı RobotSepeti ürün adresi: HTTP 200, yönlendirme yok; açılan sayfa başlıkları model/paketlerle eşleştirildi.
- İki yayındaki siteden 532 medya, belge ve genel bağlantı yanıtı kontrol edildi: hata yok. Görsel/video MIME türleri ve 30 PDF'nin `%PDF` imzası doğrulandı.
- SLAMTEC'in 20 farklı videosu tarayıcıda oynatıldı: `readyState=4`, ilerleyen zaman, sıfırdan büyük yükseklik, oynatma hatası yok; oynatıcı kontrolleri kapalı.
- Mobil taramada yatay sayfa taşması, kırık görsel veya tablo/metin taşması bulunmadı.
- Telefon `+90 212 697 62 14`, WhatsApp `+90 542 697 62 14`; logolar ve satış düğmeleri RobotSepeti'ne gider. SLAMTEC ürün sayfalarında üretici sitesine çıkan bağlantı yok.
- `node scripts/build.js`, `node --check app.js` ve içerik/dosya kontrolü başarılı. Tarayıcıda uygulama konsol hatası görülmedi.

## Bu taramada düzeltilenler

1. LPX-E3 aile tanıtımındaki 40 m / 0,1125° değerleri E3P1 için 25 m / 0,225° @ 20 Hz olarak düzeltildi; yüzey yansıtıcılığına göre menzil açıklandı. Kaynak: [SLAMTEC E3 teknik özellikleri](https://www.slamtec.com/en/e3/spec).
2. SLAMKit'in haritalama, geliştirme, devreye alma ve bakım seçicileri çalışır hale getirildi. Masaüstü ve telefonda altı seçim, ilgili görseller/paneller ve haritalama ek bölümü test edildi; seçimler ürün rotasını değiştirmez.
3. Teknik özellikler/belgeler kaydırması, ana başlık ve ürün menüsünün gerçek yüksekliğine göre hesaplanıyor. Sabit menü altında başlık kalması önlendi.
4. uFactory'de kesilen teknik etiketler, kırpılan videolar ve görseli örten başlıklar düzeltildi. Lite tutucu ve eğitim seti seçimleri kendi görselini/özelliklerini gösterir.
5. uFactory ürün rotası yenileme ve tarayıcı geri/ileri ile korunur; kapalı katalog kontrolleri klavye ve erişilebilirlik ağacından çıkarıldı.
6. Doğrulanmayan otomatik insan algılama, kesin durdurma/teslim süresi ve tarih iddiaları çıkarıldı. Teknik açıklamalar model ve kontrolcü işlevlerine göre düzenlendi.

## Tekrar çalıştırma

```sh
node scripts/check-content.js --titles
node scripts/check-live-assets.js
```

İkinci komuta üçüncü argüman olarak uFactory deposunun yerel yolu verilirse onun `public` dosyaları ve genel bağlantıları da kontrol edilir. Tarayıcı yerleşimi ve etkileşim kontrolleri ayrı yürütülür.

## Kontrol sınırları

Testler Chromium masaüstü/telefon boyutlarında yapıldı; fiziksel cihazlarda Safari/Firefox ayrıca test edilmedi. E-posta/WhatsApp/tel bağlantılarının hedefleri incelendi; müşteri mesajı gönderilmedi ve arama yapılmadı. Stok ve teslim süresi mağazadaki güncel bilgiye bağlıdır.

uFactory üretim bağımlılıklarında `npm audit --omit=dev` sonucu 0 açık. Tam denetimde, yaması yayımlanmamış `braces@3.0.3` üzerinden ESLint geliştirme araçlarında 5 ilişkili yüksek önem uyarısı var; bu zincir üretim bağımlılıkları arasında değil. Uyumsuz ESLint sürümüne zorla düşürülmedi. Detay uFactory deposundaki kontrol raporunda.
