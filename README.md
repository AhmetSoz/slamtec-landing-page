# RobotSepeti × Slamtec

RobotSepeti'nde listelenen Slamtec ürünlerini tanıtan tek sayfalık, Türkçe landing page.

## Yerel önizleme

```powershell
node scripts/preview-server.js
```

Ardından `http://127.0.0.1:4173/` adresini açın. Ürün kartı seçildiğinde URL'deki `#urun=...` bölümü değişir; katalog gizlenir ve ürün detayları ile belgeler aynı sayfada gösterilir. Geri düğmesi ve tarayıcı geçmişi çalışır.

Statik yayın paketini oluşturmak için `node scripts/build.js` komutunu çalıştırın. Çıktı `dist/` klasörüne yazılır.

16 ürünün kartı ve üçer görsellik galerisi RobotSepeti ürün sayfalarındaki görselleri kullanır. Açıklamalar RobotSepeti ürün sayfaları ile Slamtec teknik tablolarına göre düzenlenmiştir; her detayda kaynak bağlantıları bulunur. 30 farklı teknik PDF `assets/docs/` altında yerel olarak sunulur.

Her ürün detayında Slamtec'in ürün anlatımından seçilen teknik görseller ve uygulama çıktıları da yer alır. Bunlar `assets/images/official/` klasöründe yerel sunulur; her görselin kaynak bağlantısı ve modelle ilişkisini açıklayan metin sayfadadır. S1 için üreticinin [S1 saha yazısı](https://www.slamtec.com/en/news/detail/202) kullanılmıştır. Aileye ortak görseller varyant menzilini temsil etmez. Görsele tıklayınca aynı sayfada büyük görünüm açılır; Escape ile kapanır.

`scripts/gallery-sources.json` görsellerin kaynak URL'lerini kaydeder. `scripts/collect-gallery.ps1` ve `scripts/download-gallery.ps1` bu kaynakları güncellemek için kullanılır.

`scripts/manufacturer-visuals.json` üretici anlatım görsellerinin kaynaklarını kaydeder. `manufacturer-stories.js` bu görsellerin Türkçe açıklamalarını ve ürün eşleşmelerini tutar.

`product-videos.js` SLAMTEC'in kendi ürün sayfalarında yayımladığı beş MP4/GIF gösterimini ürünlerle eşleştirir. Dosyalar `assets/videos/` içinde yerel olarak sunulur; YouTube oynatıcısı, logosu ve durdurma düğmesi kullanılmaz. Bölüm ekrana gelince sessiz döngü yüklenir, ekrandan çıkınca kaldırılır. Hareket azaltma veya veri tasarrufu ayarında yalnızca ürün görseli ve kaynak bağlantısı gösterilir. Uygun doğrudan üretici hareketli görseli bulunmayan modellerde bu bölüm gösterilmez.
