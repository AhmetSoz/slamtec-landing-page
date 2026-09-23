// Visuals are local copies of the linked Slamtec product pages and the S1 article.
// Family visuals describe the measurement principle; model-specific values remain in the spec table.
const manufacturerStories = {
  'aurora-s': [
    { file: 'aurora-s-architecture.webp', title: 'Sensör ve işlem akışı', caption: 'Çift balık gözü kamera ile IMU verisi, cihaz içindeki AI-VSLAM işleminde birleşir. Diyagramdaki LiDAR bağlantısı isteğe bağlı füzyon içindir; Aurora S gövdesine entegre bir LiDAR olduğu anlamına gelmez.', source: 'https://www.slamtec.com/en/aurora-s' },
    { file: 'aurora-s-dense-map.webp', title: 'Yoğun dokulu 3D harita örneği', caption: 'Üreticinin paylaştığı örnek çıktı, görsel veriden oluşturulan ortam geometrisi ve dokusunu gösterir.', source: 'https://www.slamtec.com/en/aurora-s', compact: true }
  ],
  aurora: [
    { file: 'aurora-stable-localization.gif', title: 'Yerelleştirme ve nokta bulutu', caption: 'Üretici arayüzünden alınan hareketli örnekte kamera görüntüleri ile 3D nokta bulutu aynı anda izlenir.', source: 'https://www.slamtec.com/en/aurora', compact: true },
    { file: 'aurora-3d-pointcloud.gif', title: 'Kapalı alan 3D tarama örneği', caption: 'Garaj ortamındaki taramanın nokta bulutu çıktısı. Görsel, Aurora’nın üç boyutlu harita verisinin biçimini gösterir.', source: 'https://www.slamtec.com/en/aurora', compact: true }
  ],
  'lpx-t1': [
    { file: 'lpx-t1-small-objects.webp', title: 'Küçük nesne algılama', caption: 'Üreticinin örnek sahnesi 0,12° açısal çözünürlüğün ince nesneleri ayırt etmedeki rolünü gösterir. Algılama, hedef uzaklığına ve yüzeyine bağlıdır.', source: 'https://www.slamtec.com/en/t1' },
    { file: 'lpx-t1-daylight.webp', title: 'Güçlü ortam ışığında kullanım', caption: 'LPX-T1 için belirtilen 80 klux ortam ışığı dayanımını anlatan üretici görseli. Dış ortam kurulumunda hedef yansıtıcılığı ve görüş alanı ayrıca değerlendirilmelidir.', source: 'https://www.slamtec.com/en/t1' }
  ],
  slamkit: [
    { file: 'slamkit-architecture.webp', title: 'Robot üzerindeki SLAMKit yapısı', caption: 'Lisans kartı ve SLAMWARE yazılımının robot kontrolcüsüyle ilişkisi gösterilir. Diyagramdaki RPLIDAR ayrı seçilen sensördür; RobotSepeti’ndeki kit paketine dahil değildir.', source: 'https://www.slamtec.com/en/slamkit' }
  ],
  'lpx-e3': [
    { file: 'lpx-e3-field-editor.webp', title: 'Alanların yazılımda çizilmesi', caption: 'LPX ScanDesigner ekranında izlenecek bölgeler çokgen ve dairesel şekillerle tanımlanır. Bu E3P1 yapılandırma örneğidir; model nokta bulutu çıkışı vermez.', source: 'https://www.slamtec.com/en/e3' },
    { file: 'lpx-e3-mask.webp', title: 'Birden fazla koruma alanı', caption: 'Aynı alan setinde farklı bölgelerin ve maskeleme ayarlarının nasıl düzenlendiğini gösteren üretici yazılımı ekranı.', source: 'https://www.slamtec.com/en/e3' }
  ],
  s2l: [
    { file: 's2-dtof-principle.webp', title: 'S2 ailesinde dToF ölçüm', caption: 'Lazer darbesinin hedefe gidip dönme süresinden mesafe hesaplama ilkesi. Bu şema S2 ailesine aittir; S2L’nin 18 m sınırı model tablosunda ayrıca verilir.', source: 'https://www.slamtec.com/en/s2', compact: true },
    { file: 's2-ip65.webp', title: 'IP65 korumalı gövde', caption: 'Üreticinin S2 ailesi için gösterdiği toza ve su püskürtmesine karşı korumalı tasarım. Dış ortam montajında bağlantıların da korunması gerekir.', source: 'https://www.slamtec.com/en/s2' }
  ],
  s2: [
    { file: 's2-dtof-principle.webp', title: 'Doğrudan uçuş süresi ölçümü', caption: 'S2’nin dToF yöntemi, lazer darbesinin gidiş dönüş süresini mesafeye dönüştürür; 360° dönüşle 2D tarama elde edilir.', source: 'https://www.slamtec.com/en/s2', compact: true },
    { file: 's2-ip65.webp', title: 'IP65 gövde tasarımı', caption: 'S2 ailesi için üreticinin koruma sınıfını anlatan görseli. Sensörün besleme ve UART bağlantısı kurulum sırasında uygun biçimde korunmalıdır.', source: 'https://www.slamtec.com/en/s2' }
  ],
  s1: [
    { file: 's1-parking-map.jpg', title: 'Kapalı otopark haritası', caption: 'Slamtec’in S1 ile SLAMWARE kullanarak oluşturduğu 134 × 111 m otopark haritası örneği. Bu bir uygulama çıktısıdır; tek başına sensör menzil ölçümü değildir.', source: 'https://www.slamtec.com/en/news/detail/202' },
    { file: 's1-outdoor-map.jpg', title: 'Gün ışığında saha gösterimi', caption: 'Üreticinin S1’i dış mekânda bilgisayara bağlı çalıştırdığı saha fotoğrafı. S1 teknik föyündeki menzil, hedef rengi ve ışık koşullarına göre değişir.', source: 'https://www.slamtec.com/en/news/detail/202' }
  ],
  a3: [
    { file: 'a3-range.webp', title: '25 m sınıfı tarama alanı', caption: 'A3 için üretici tarafından hazırlanan menzil görseli. 25 m değeri gelişmiş modda açık renk hedef koşuluna aittir; dış ortam modunun değeri farklıdır.', source: 'https://www.slamtec.com/en/lidar/a3' },
    { file: 'a3-ranging-engine.webp', title: 'RPVision ölçüm motoru', caption: 'Üreticinin A3’teki hızlı görsel mesafe ölçümü yaklaşımını gösteren teknik anlatım görseli.', source: 'https://www.slamtec.com/en/lidar/a3' }
  ],
  a2m12: [
    { file: 'a2-operating-principle.webp', title: 'A2 ailesinin ölçüm akışı', caption: 'Lazer ölçümlerinin dönel taramaya ve 2D nokta bulutuna dönüşümünü gösterir. A2M12’nin 16 kHz örnekleme değeri aile görselinden ayrı değerlendirilir.', source: 'https://www.slamtec.com/en/lidar/a2' },
    { file: 'a2-360-scan.webp', title: '360° çevre taraması', caption: 'A2 ailesinin tüm yönlere tarama yapmasını anlatan üretici görseli. Haritalama yazılımı bu mesafe örneklerinden harita oluşturur.', source: 'https://www.slamtec.com/en/lidar/a2' }
  ],
  a1: [
    { file: 'a1-triangulation.webp', title: 'Lazer üçgenleme ilkesi', caption: 'A1’in gönderilen lazeri geri yansıma geometrisiyle ölçmesini anlatan üretici şeması; dToF sensörlerinden farklı ölçüm yöntemidir.', source: 'https://www.slamtec.com/en/lidar/a1' },
    { file: 'a1-360-scan.webp', title: 'Dönel 2D tarama', caption: 'Sensör dönerek çevresinden mesafe örnekleri toplar. Bu veriler haritalama veya engel algılama yazılımına aktarılır.', source: 'https://www.slamtec.com/en/lidar/a1' }
  ],
  s3: [
    { file: 's3-ranging-technology.webp', title: 'S3 ölçüm teknolojisi', caption: 'Slamtec’in S3 için hazırladığı dToF mesafe ölçümü anlatımı. 32 kHz örnekleme ile 10–20 Hz dönüş birlikte değerlendirilmelidir.', source: 'https://www.slamtec.com/en/s3' },
    { file: 's3-low-reflectivity.webp', title: 'Koyu yüzeylerde menzil', caption: 'Üretici görseli, %10 yansıtıcılıkta yaklaşık 15 m algılamayı gösterir. 40 m azami değer daha yüksek yansıtıcılık koşulundadır.', source: 'https://www.slamtec.com/en/s3' }
  ],
  s2e: [
    { file: 's2-dtof-principle.webp', title: 'S2 ailesi dToF ölçümü', caption: 'S2E’nin de kullandığı doğrudan uçuş süresi yöntemi. Aile görseli bağlantı biçimini göstermez; bu varyant Ethernet/UDP ve 12 V kullanır.', source: 'https://www.slamtec.com/en/s2', compact: true },
    { file: 's2-ip65.webp', title: 'IP65 korumalı tasarım', caption: 'S2 ailesi gövdesinin koruma sınıfı üretici görselinde anlatılır. S2E kurulumunda Ethernet ve güç bağlantıları ayrıca korunmalıdır.', source: 'https://www.slamtec.com/en/s2' }
  ],
  m2m3: [
    { file: 'mapper-handheld-map.webp', title: 'Mapper ile elde haritalama örneği', caption: 'Slamtec’in Mapper ailesi sayfasındaki örnek harita çıktıları. M2M3’ün yerleşik SLAM motorunun ürettiği harita ve poz verisinin kullanımını somutlaştırır.', source: 'https://www.slamtec.com/en/lidar/mapper' }
  ],
  m2m2: [
    { file: 'mapper-handheld-map.webp', title: 'Mapper ailesinden harita çıktısı', caption: 'Üreticinin Mapper ailesi için verdiği elde haritalama örnekleri. Görsel aileye aittir; M2M2’nin donanım revizyonu ve teknik değerleri kendi föyünde yer alır.', source: 'https://www.slamtec.com/en/lidar/mapper' }
  ],
  a2m8: [
    { file: 'a2-operating-principle.webp', title: 'A2 ailesinin ölçüm akışı', caption: 'Dönel lazer ölçümünden 2D nokta bulutu üretilmesi. A2M8’in 8 kHz örnekleme değeri, A2M12’nin 16 kHz değerinden farklıdır.', source: 'https://www.slamtec.com/en/lidar/a2' },
    { file: 'a2-360-scan.webp', title: '360° çevre taraması', caption: 'A2 ailesine ait üretici görseli, tek düzlemde tüm çevreden mesafe toplama biçimini gösterir.', source: 'https://www.slamtec.com/en/lidar/a2' }
  ]
};
