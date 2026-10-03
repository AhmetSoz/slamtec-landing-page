# RobotSepeti × Slamtec

RobotSepeti'nde listelenen Slamtec ürünlerini tanıtan tek sayfalık, Türkçe landing page.

## Yerel önizleme

```powershell
node scripts/preview-server.js
```

Ardından `http://127.0.0.1:4173/` adresini açın. Ürün kartı seçildiğinde URL'deki `#urun=...` bölümü değişir; katalog gizlenir ve ürün detayları ile belgeler aynı sayfada gösterilir. Geri düğmesi ve tarayıcı geçmişi çalışır.

Statik yayın paketini oluşturmak için `node scripts/build.js` komutunu çalıştırın. Çıktı `dist/` klasörüne yazılır.

16 ürünün kartı RobotSepeti ürün sayfalarındaki görselleri kullanır. Her ürün detayı üreticinin geniş kapak görseliyle başlar; teknik bilgiler, tam genişlikte görsel/video bölümleri ve belgeler aşağı kaydırılarak incelenir. Satış bağlantıları RobotSepeti'ne gider. 30 farklı teknik PDF `assets/docs/` altında yerel olarak sunulur.

Üretici anlatım görselleri `assets/images/official/` ve `assets/media/` altında yerel sunulur. Aileye ortak görseller farklı varyantların menzil veya bağlantı özelliklerini temsil etmez; model farkları ürün metinlerinde belirtilir. Küçük görsel seçicisi ve büyütme penceresi kullanılmaz.

`scripts/gallery-sources.json` görsellerin kaynak URL'lerini kaydeder. `scripts/collect-gallery.ps1` ve `scripts/download-gallery.ps1` bu kaynakları güncellemek için kullanılır.

`scripts/manufacturer-visuals.json` üretici anlatım görsellerinin kaynaklarını kaydeder. `manufacturer-stories.js` bu görsellerin Türkçe açıklamalarını ve ürün eşleşmelerini tutar.

`manufacturer-extra.js` ve `product-hero.js` resmî ürün sayfası varlıklarını modele bağlar. `product-videos.js` SLAMTEC'in kendi ürün sayfalarında yayımladığı beş MP4/GIF gösterimini ürünlerle eşleştirir. Dosyalar yerel sunulur; YouTube oynatıcısı, logosu ve durdurma düğmesi kullanılmaz. Videolar ekrana gelince sessiz döngüyle oynar, ekrandan çıkınca durur. Hareket azaltma ve veri tasarrufu tercihleri dikkate alınır.

`node scripts/check-content.js` komutu 16 RobotSepeti ürün bağlantısını, 30 PDF'i ve yerel medya dosyalarını denetler.
