# RobotSepeti × Slamtec

RobotSepeti'nde listelenen Slamtec ürünlerini tanıtan tek sayfalık, Türkçe landing page.

## Yerel önizleme

```powershell
node scripts/preview-server.js
```

Ardından `http://127.0.0.1:4173/` adresini açın. Ürün kartı seçildiğinde URL'deki `#urun=...` bölümü değişir; katalog gizlenir ve ürün detayları ile belgeler aynı sayfada gösterilir. Geri düğmesi ve tarayıcı geçmişi çalışır.

Statik yayın paketini oluşturmak için `node scripts/build.js` komutunu çalıştırın. Çıktı `dist/` klasörüne yazılır.

16 ürünün kartı ve üçer görsellik galerisi RobotSepeti ürün sayfalarındaki görselleri kullanır. Açıklamalar RobotSepeti ürün sayfaları ile Slamtec teknik tablolarına göre düzenlenmiştir; her detayda kaynak bağlantıları bulunur. 29 farklı teknik PDF `assets/docs/` altında yerel olarak sunulur. SLAMKit kullanım kılavuzu Slamtec Support sayfasına bağlanır.

`scripts/gallery-sources.json` görsellerin kaynak URL'lerini kaydeder. `scripts/collect-gallery.ps1` ve `scripts/download-gallery.ps1` bu kaynakları güncellemek için kullanılır.
