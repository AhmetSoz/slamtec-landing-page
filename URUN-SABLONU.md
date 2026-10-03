# Slamtec sitesine ürün ekleme / silme

Ürünler `app.js` dosyasındaki `const products = [` listesinde durur. Her ürün `{` ile başlayıp `},` ile biten bir bloktur.
**Sadece şu yerlere dokunacaksınız:** `assets/images` (görseller), `assets/docs` (PDF'ler, isteğe bağlı) ve `app.js`. Diğer dosyaları değiştirmeyin.

## 1) Hazırlık
- Ürün görseli (kare, beyaz arka planlı JPG/PNG/WEBP; 1 MB'tan küçük olsun)
- Kısa ad, uzun ad, RobotSepeti ürün linki
- Açıklama paragrafları, öne çıkan işlevler, kullanım alanları, teknik özellikler

## 2) Görseli yükleyin
`assets/images` → **Add file** → **Upload files** → dosyayı sürükleyin → **Commit changes**.
- Dosya adında **Türkçe karakter (ç, ğ, ı, ö, ş, ü), boşluk ve büyük harf kullanmayın.** Örnek: `rplidar-c1.jpg`
- Görseli başka klasöre yüklemeyin; mutlaka `assets/images` içinde olsun.

## 3) Ürünü ekleyin
1. `app.js` → sağ üstteki kalem (Edit) simgesi.
2. `const products = [` satırının **sonuna** tıklayıp **Enter**'a basın.
3. Aşağıdaki şablonu tam bu boş satıra yapıştırın ve bilgileri doldurun.
4. **Commit changes...** → **Commit changes**.

```js
  {
    // ===== ZORUNLU ALANLAR =====
    id: 'rplidar-c1',              // Sayfa adresindeki kod: küçük harf, rakam ve tire. Her üründe farklı olmalı.
    name: 'RPLIDAR C1',            // Kartta ve detay başlığında görünen kısa ad
    fullName: 'Slamtec RPLIDAR C1 360° DTOF Lidar Sensör',   // Detay başlığının altındaki uzun ad
    family: 'RPLIDAR',             // Kartın üstündeki turuncu küçük etiket
    category: 'lidar',             // Filtre: 'lidar' = RPLIDAR, 'mapping' = Haritalama & SLAM, 'industrial' = Endüstriyel LiDAR
    image: 'rplidar-c1.jpg',       // assets/images klasörüne yüklediğiniz görselin TAM adı
    url: 'https://www.robotsepeti.com/urun-linki',           // "RobotSepeti'nde incele" butonunun linki
    summary: 'Kartta ve detayın başında görünen tek cümlelik açıklama.',
    chips: ['12 m', '360°', '10 Hz'],                        // Kartta görünen küçük etiketler (2-3 adet)

    // ===== AÇIKLAMALAR (detay sayfası) =====
    paragraphs: [
      'Birinci açıklama paragrafı. Ürünün ne olduğunu ve ne işe yaradığını anlatın.',
      'İkinci açıklama paragrafı. İstemiyorsanız bu satırı silin.'
    ],
    features: ['Öne çıkan işlev 1', 'Öne çıkan işlev 2', 'Öne çıkan işlev 3'],
    scenarios: ['Uygun kullanım alanı 1', 'Uygun kullanım alanı 2'],
    specs: [['Menzil', '0,05–12 m'], ['Tarama açısı', '360°'], ['Örnekleme', '5.000 örnek/sn']],
    note: 'Model seçimi için kısa not. İstemiyorsanız bu satırı silin.',

    // ===== İSTEĞE BAĞLI (kullanmıyorsanız satırı silin) =====
    gallery: ['rplidar-c1-2.jpg'],                           // Ek görseller (assets/images klasörüne yükleyin)
    official: 'https://www.slamtec.com/en/',                 // "Slamtec teknik sayfası" linki
    docs: [pdf('RPLIDAR C1 teknik föyü', 'c1-datasheet.pdf')]   // PDF belgeler (assets/docs klasörüne yükleyin)
  },
```

### Dikkat edilecekler
- Şablonu **sadece** `const products = [` satırının hemen altına yapıştırın. Başka bir ürün bloğunun içine veya dosyanın sonundaki `];` satırından sonraya yapıştırmayın.
- `const products = [` satırını ve dosyanın sonundaki `];` satırını **silmeyin**.
- Her metin tek tırnak içinde olmalı: `'metin'`. Metnin içinde `'` geçiyorsa önüne `\` koyun: `'RobotSepeti\'nde'`.
- Liste elemanlarının arasında virgül olmalı: `['a', 'b', 'c']`. Son elemandan sonra virgül gerekmez.
- Blok mutlaka `},` ile bitmeli (virgül dahil).
- `image` alanındaki ad, yüklediğiniz dosyanın adıyla **birebir** aynı olmalı (uzantı dahil: `.jpg`, `.png`, `.webp`).
- `id` her üründe farklı olmalı; aynı id iki kez olursa ürün sayfası karışır.
- `//` ile başlayan açıklama satırları sadece rehber içindir; silebilir ya da bırakabilirsiniz.

## 4) Ürünü silin
1. `app.js` → kalem simgesi.
2. **Ctrl+F** ile ürünün id'sini aratın (örn. `rplidar-c1`).
3. O ürünün **`{` satırından `},` satırına kadar** seçip silin. Üstteki ve alttaki ürünlerin `{` / `},` satırlarına dokunmayın.
4. **Commit changes**. İsterseniz görseli de `assets/images` içinden silin (dosyayı açın → sağ üstteki `...` → **Delete file**).

## 5) Kontrol
- **Actions** sekmesinde sarı nokta = yayınlanıyor, yeşil tik = tamam (yaklaşık 1 dakika).
- Siteyi **Ctrl+F5** ile yenileyin (tarayıcı eski hali 10 dakikaya kadar hafızada tutabilir).

## Bir şey bozulursa
Actions'ta **kırmızı çarpı** görürseniz site eski halinde kalır, bozulmaz. Hatayı düzeltmek için `app.js` → **History** → bir önceki sürümü açıp içeriğini kopyalayarak geri yapıştırın ve kaydedin.
