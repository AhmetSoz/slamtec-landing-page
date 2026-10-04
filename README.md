# RobotSepeti × Slamtec

RobotSepeti'nde listelenen Slamtec ürünlerini tanıtan tek sayfalık, Türkçe landing page.

## Yerel önizleme

```powershell
node scripts/preview-server.js
```

Ardından `http://127.0.0.1:4173/` adresini açın. Ürün kartı seçildiğinde URL'deki `#urun=...` bölümü değişir; katalog gizlenir ve ürün detayları ile belgeler aynı sayfada gösterilir. Geri düğmesi ve tarayıcı geçmişi çalışır.

Statik yayın paketini oluşturmak için `node scripts/build.js` komutunu çalıştırın. Çıktı `dist/` klasörüne yazılır.

16 ürünün kartı RobotSepeti ürün sayfalarındaki görselleri kullanır. Her ürün detayı üreticinin geniş kapak görseliyle başlar; teknik bilgiler, tam genişlikte görsel/video bölümleri ve belgeler aşağı kaydırılarak incelenir. Satış bağlantıları RobotSepeti'ne gider. 30 farklı teknik PDF `assets/docs/` altında yerel olarak sunulur.

Ürün anlatımı `official-design.js` içindeki resmi masaüstü ve mobil bölüm yapılarıyla gösterilir. Üreticinin yerleşim stilleri `official-design.css` içinde yalnızca `#official-product` alanına uygulanır. Banner, yan yana karşılaştırma, görsel üzerine metin, ikon ve video yerleşimleri üreticinin kendi sayfasından alınır. Türkçe metinler ve modele özel teknik tablo `product-layout.css` ile tamamlanır. Görseller `assets/design/`, `assets/official/` ve `assets/media/` altında yerel sunulur. Aileye ortak sayfalarda satın alınan varyantın menzil ve bağlantısı ayrıca belirtilir.

`scripts/gallery-sources.json` görsellerin kaynak URL'lerini kaydeder. `scripts/collect-gallery.ps1` ve `scripts/download-gallery.ps1` bu kaynakları güncellemek için kullanılır.

`scripts/manufacturer-visuals.json` üretici anlatım görsellerinin kaynaklarını kaydeder. `manufacturer-stories.js` bu görsellerin Türkçe açıklamalarını ve ürün eşleşmelerini tutar.

`manufacturer-extra.js` ve `product-hero.js` resmî ürün sayfası varlıklarını modele bağlar. `product-videos.js` SLAMTEC'in kendi ürün sayfalarında yayımladığı beş MP4/GIF gösterimini ürünlerle eşleştirir. Dosyalar yerel sunulur; YouTube oynatıcısı, logosu ve durdurma düğmesi kullanılmaz. Videolar ekrana gelince sessiz döngüyle oynar, ekrandan çıkınca durur. Hareket azaltma ve veri tasarrufu tercihleri dikkate alınır.

`node scripts/check-content.js` komutu 16 RobotSepeti ürün bağlantısını, 30 PDF'i ve yerel medya dosyalarını denetler.

Resmi sayfa aktarımını yeniden üretmek için geliştirme araçlarını `npm install --prefix scripts/import-tools cheerio postcss image-size ffmpeg-static` ile kurup sırasıyla `node scripts/import-official-design.js`, `node scripts/localize-official-design.js`, `node scripts/size-official-images.js` ve `node scripts/create-video-posters.js` komutlarını çalıştırın. Kaynak URL kaydı `scripts/official-design-assets.json` dosyasındadır. İçe aktarım, ikonların üretici tarafından belirtilen küçük ölçülerini korur. Yerel video önizlemeleri, yükleme sırasında ve hareket azaltma tercihinde boş alan oluşmasını önler. Üreticinin analiz kodları, menüsü ve satış bağlantıları aktarılmaz. S1 için güncel bir sunum sayfası bulunmadığından mevcut model görselleri ve teknik belgeleri kullanılır.
