// Model notes are condensed from the linked RobotSepeti listings and Slamtec product/spec pages.
// The linked PDF remains the reference for a purchased hardware revision.
const productEditorial = {
  'aurora-s': {
    official: 'https://www.slamtec.com/en/aurora-s/spec',
    gallery: ['aurora-s-2.jpg', 'aurora-s-3.jpg'],
    detail: [
      'Bu modelin temel farkı, görsel SLAM işlemesini sensör üzerinde yapmasıdır. Stereo balık gözü kameralar ve IMU eş zamanlı çalışır; sistem 3D harita, 6DoF poz ve yoğun derinlik verisini doğrudan üretir. LiDAR füzyonu isteğe bağlıdır; Aurora S, kutudan çıkan standart konfigürasyonda LiDAR tarayıcı gibi değerlendirilmemelidir.',
      'Üretici 180° kamera görüş alanı, tipik 15 Hz görüntü hızı, harita yükleme/kaydetme ve yeniden konumlandırma desteği belirtir. RobotSepeti ürün sayfası ROS, C++ ve Python geliştirme araçlarını ve 9–24 V DC ile USB Type-C PD 3.0 güç seçeneklerini listeler.'
    ],
    scenarios: ['Görsel referanslarla 3D haritalama ve yeniden konumlandırma', 'Robot üzerinde yoğun derinlik ve nesne segmentasyonu', 'Dijital ikiz ve araştırma platformlarında mekânsal veri toplama'],
    extraSpecs: [['Kamera', 'Stereo RGB balık gözü, 180° görüş, 60 mm baz'], ['Kamera hızı', 'Tipik 15 Hz; 10/30 Hz yapılandırılabilir'], ['Güç tüketimi', 'Tipik 10 W, LiDAR hariç']],
    note: 'LiDAR, Aurora S için isteğe bağlı füzyon bileşenidir; pakete dahil olup olmadığını RobotSepeti ürün sayfasından doğrulayın.'
  },
  aurora: {
    official: 'https://www.slamtec.com/en/aurora/spec',
    gallery: ['aurora-2.webp', 'aurora-3.webp'],
    detail: [
      'Aurora, Aurora S’den farklı olarak 2D LiDAR’ı cihazın içinde taşır. Binoküler görüş ve 6DoF IMU ile birleştirilen LiDAR verisi, hem düzlem haritası hem de üç boyutlu konum bilgisinin çıkarılmasına yardımcı olur. Bu nedenle tek başına ham tarama verisi gereken işlerden çok, harita ve pozun birlikte istendiği projelere yöneliktir.',
      'Slamtec teknik sayfasında 40 m azami LiDAR menzili, seçilebilir 2/5/10 cm 2D harita çözünürlüğü, 180° HDR balık gözü kameralar ve donanım düzeyinde sensör eşzamanlaması belirtilir. Haritalar kaydedilip yeniden yüklenebilir; sistem daha önce oluşturulmuş haritada yeniden konumlanabilir.'
    ],
    scenarios: ['İç ve dış mekân 3D haritalama', 'Mobil robotun 6DoF konum takibi', 'LiDAR ve görsel verinin birlikte gerektiği araştırma sistemleri'],
    extraSpecs: [['LiDAR menzili', '40 m’ye kadar'], ['2D harita çözünürlüğü', '2 / 5 / 10 cm seçenekleri'], ['Kamera', '180° HDR binoküler balık gözü; 6 cm baz']],
    note: 'Haritalama alanı ve menzil üst sınırları üreticinin test koşullarına aittir; gerçek performans ortam ve yüzeylere bağlıdır.'
  },
  'lpx-t1': {
    official: 'https://www.slamtec.com/en/t1/spec',
    gallery: ['lpx-t1-2.webp', 'lpx-t1-3.webp'],
    detail: [
      'LPX-T1M4, ön tarafı kapsayan 270° tarama alanıyla AGV ve AMR navigasyonuna odaklanır. Saniyede 60.000 ölçüm ve 0,12° açısal çözünürlük, dar geçitlerdeki küçük engellerin daha ayrıntılı görülmesine yardımcı olur. 360° çevre taraması gerekiyorsa görüş açısı sınırlaması proje yerleşiminde dikkate alınmalıdır.',
      'Üretici 40 m azami menzili %70 yansıtıcılıkta, 15 m menzili ise %10 yansıtıcılıkta verir. 80.000 lux ortam ışığı dayanımı, 9–28 V DC besleme ve M12 üzerinden Ethernet bağlantısı endüstriyel entegrasyon için önemli parametrelerdir.'
    ],
    scenarios: ['Depo AGV’lerinde koridor ve engel algılama', 'Servis robotlarında 270° ön alan navigasyonu', 'Güçlü ortam ışığı olan alanlarda 2D tarama'],
    extraSpecs: [['Düşük yansıtıcılık menzili', '0,05–15 m (%10 yüzey)'], ['Arayüz / besleme', 'M12 Ethernet / 9–28 V DC'], ['Ortam ışığı dayanımı', '80.000 lux’a kadar']],
    note: '40 m menzil %70 yansıtıcılığa sahip hedef içindir; koyu yüzeylerde menzil daha kısadır.'
  },
  slamkit: {
    official: 'https://www.slamtec.com/en/slamkit/spec',
    gallery: ['slamkit-2.jpg', 'slamkit-3.png'],
    detail: [
      'SLAMKit bir LiDAR sensörü değil, robot kontrolcüsüne entegre edilen haritalama ve lokalizasyon yazılım lisansıdır. RobotSepeti paketinde lisans kartı ile lisanslı yazılım yer alır; LiDAR ayrı seçilir. Kendi mekanik ve kontrol donanımını geliştiren ekipler, sensör verisinden harita ve robot pozu üretmek için bu çözümü kullanabilir.',
      'Slamtec çok kaynaklı lokalizasyon, çevrim kapatma, SharpEdge harita iyileştirme ve harita yönetim araçlarını listeler. C++, Java, REST ve ROS arayüzleri geliştirme tarafını; RoboStudio ise devreye alma ve izleme tarafını destekler. Harita çözünürlüğü 1, 2,5 veya 5 cm olarak seçilebilir.'
    ],
    scenarios: ['Özel AGV veya AMR platformuna SLAM yeteneği ekleme', 'Büyük alan haritalarını yönetme ve yeniden konumlandırma', 'Mevcut kontrol yazılımına SDK üzerinden poz verisi aktarma'],
    extraSpecs: [['Harita çözünürlüğü', '1 / 2,5 / 5 cm seçenekleri'], ['Poz çıkış hızı', '20–100 Hz'], ['Geliştirme', 'C++, Java, REST ve ROS']],
    note: 'LiDAR ve robot kontrolcüsü ürün paketine dahil değildir; uyumlu donanım ve lisans kapsamı sipariş öncesi kontrol edilmelidir.'
  },
  'lpx-e3': {
    official: 'https://www.slamtec.com/en/e3/spec',
    gallery: ['lpx-e3-2.jpg', 'lpx-e3-3.jpg'],
    detail: [
      'LPX-E3P1 bir alan izleme cihazıdır. Önceden tanımlanan bölgelerde giriş veya ihlal algılayıp IO çıkışı üretir; üreticinin E3P1 tablosunda nokta bulutu çıkışı bulunmaz. Bu ayrım, cihazı navigasyon için ham LiDAR taraması bekleyen sistemlerden ayırır.',
      '360° izleme, 20 Hz tarama ve 64 alan seti bulunur. Her seçili sette üç alan aynı anda izlenebilir. USB Type-C yapılandırma arayüzü ile bölgeler tanımlanır; IO çıkışı PLC veya başka bir kontrol sistemine bağlanabilir. Üretici menzili hedef yansıtıcılığına göre ayırır: %70 yüzeyde 25 m, %10 yüzeyde uyarı için 10 m ve %2 yüzeyde alarm için 4 m.'
    ],
    scenarios: ['Üretim hattı veya geçiş alanı ihlal izleme', 'PLC’ye alan durumu iletme', 'AGV çalışma alanında yapılandırılabilir bölge izleme'],
    extraSpecs: [['Menzil · %70 hedef', '0,05–25 m'], ['Uyarı / alarm menzili', '10 m (%10) / 4 m (%2)'], ['Alan seti / çıkış', '64 set; her sette 3 alan / IO'], ['Nokta bulutu çıkışı', 'E3P1 için yok']],
    note: 'E3P1 alan izleme içindir. Ham nokta bulutu gerekiyorsa LPX-T1 veya uygun RPLIDAR modeli incelenmelidir.'
  },
  s2l: {
    official: 'https://www.slamtec.com/en/s2/spec',
    gallery: ['s2l-2.jpg', 's2l-3.jpg'],
    detail: [
      'S2L, S2 ailesinin 18 m menzilli UART modelidir. 32.000 örnek/sn, tipik 10 Hz dönüş ve 0,1125° açısal çözünürlük ile 360° 2D tarama verir. Aynı ailede daha uzun menzil için S2, Ethernet bağlantısı için S2E incelenmelidir.',
      'Üreticinin 18 m değeri %90 yansıtıcılığa sahip yüzeyler içindir; %10 yansıtıcılıkta azami menzil 8 m’dir. IP65 koruma ve 5 V besleme, korumalı gövde isteyen gömülü robot sistemlerine uygundur.'
    ],
    scenarios: ['İç ve dış mekân mobil robot haritalama', 'UART çıkışlı engel algılama', '18 m’ye kadar alan taraması gerektiren robotlar'],
    extraSpecs: [['Düşük yansıtıcılık menzili', '0,05–8 m (%10 yüzey)'], ['Tarama frekansı', 'Tipik 10 Hz'], ['Açısal çözünürlük', '0,1125°']],
    note: '18 m azami menzil %90 yansıtıcılığa göre verilir.'
  },
  s2: {
    official: 'https://www.slamtec.com/en/s2/spec',
    gallery: ['s2-2.jpg', 's2-3.jpg'],
    detail: [
      'S2, S2L ile aynı 32 kHz örnekleme ve UART veri bağlantısını kullanırken %90 yansıtıcılıkta menzili 30 m’ye çıkarır. 360° dToF tarama, mobil robotun çevre haritasını oluşturacak yazılıma mesafe ve açı verisi sağlar.',
      'Üretici %10 yansıtıcılığa sahip koyu hedeflerde 10 m menzil, tipik 10 Hz dönüş, 0,1125° açısal çözünürlük ve IP65 gövde belirtir. Ethernet/UDP gerekiyorsa aynı menzil sınıfındaki S2E modeline bakılmalıdır.'
    ],
    scenarios: ['Geniş iç mekânlarda 2D haritalama', 'UART kullanan AMR ve servis robotları', 'IP65 korumalı uzun menzilli engel algılama'],
    extraSpecs: [['Düşük yansıtıcılık menzili', '0,05–10 m (%10 yüzey)'], ['Tarama frekansı', 'Tipik 10 Hz'], ['Açısal çözünürlük', '0,1125°']],
    note: '30 m azami menzil %90 yansıtıcılığa göre verilir.'
  },
  s1: {
    official: 'https://www.slamtec.com/en/support#rplidar-s1',
    gallery: ['s1-2.jpg', 's1-3.jpg'],
    detail: [
      'S1, ToF ölçüm kullanan 40 m sınıfı 360° tarayıcıdır. Üretici teknik föyünde tipik 10 Hz dönüş ve 8–15 Hz ayarlanabilir tarama hızı belirtilir. 9.200 örnek/sn kapasite, dış ortamda çevre haritası ve robot lokalizasyonu geliştiren ekipler için 2D nokta verisi sağlar.',
      'Slamtec dokümanı beyaz ve koyu yüzeylerde, uzun mesafede ve doğrudan güneş altında çalışmaya odaklandığını anlatır. 3,3 V TTL seviyeli UART veri arayüzü ve 5 V besleme gereksinimi, bağlantı kartı seçilirken dikkate alınmalıdır.'
    ],
    scenarios: ['Dış ortam robot haritalama', 'Geniş otopark veya depo alanlarında 2D tarama', 'Uzun menzilli çevre ve engel algılama'],
    extraSpecs: [['Tarama frekansı', 'Tipik 10 Hz; 8–15 Hz ayarlanabilir'], ['Veri arayüzü', '3,3 V TTL UART'], ['Besleme', '5 V']],
    note: '40 m menzil üreticinin uygun hedef ve test koşullarındaki üst sınırıdır.'
  },
  a3: {
    official: 'https://www.slamtec.com/en/lidar/a3spec',
    gallery: ['a3-2.jpg', 'a3-3.jpg'],
    detail: [
      'A3M1’de iki çalışma modu bulunur. Gelişmiş modda açık renk hedef için 25 m menzil ve 16 kHz örnekleme sağlanır. Dış ortam modu güneş ışığına dayanımı öne alır; bu modda aynı hedef için menzil 20 m ve örnekleme 10 kHz olarak listelenir. Teknik verileri tek bir koşul altında karşılaştırmak gerekir.',
      '360° tarama, tipik 10 Hz dönüş ve 0,225° açısal çözünürlük; 2D harita ve engel algılama geliştirmesinde kullanılabilir. Üretici 5 V besleme ve 3,3 V TTL seviyeli 256000 bps UART çıkışı belirtir.'
    ],
    scenarios: ['İç ortamda daha uzun menzilli 2D tarama', 'Dış ortam modunda gün ışığına dayanıklı algılama', 'Kendi SLAM yazılımını kullanan mobil robotlar'],
    extraSpecs: [['Gelişmiş mod', '25 m / 16 kHz (açık renk hedef)'], ['Dış ortam modu', '20 m / 10 kHz (açık renk hedef)'], ['Bağlantı / besleme', 'TTL UART 256000 bps / 5 V']],
    note: '25 m ve 16 kHz değerleri gelişmiş moda aittir; dış ortam modu için üretici ayrı değer verir.'
  },
  a2m12: {
    official: 'https://www.slamtec.com/en/lidar/a2spec',
    gallery: ['a2m12-2.jpg', 'a2m12-3.jpg'],
    detail: [
      'A2M12, A2 ailesinde 12 m menzil ile 16.000 örnek/sn kapasitesini birleştirir. 4 cm civarındaki ince gövde, robot şasisi içine yerleştirmeyi kolaylaştırır. A2M8 ile aynı menzil sınıfında olmasına rağmen örnekleme hızı iki katıdır; tipik 10 Hz dönüşte daha sık açısal veri sağlar.',
      'Üretici sayfasında 0,225° açısal çözünürlük, 5–15 Hz ayarlanabilir dönüş, OPTMAG temassız güç/veri aktarımı ve 5 V besleme belirtilir. UART çıkışı 256000 bps’dir. Haritalama algoritması için gereken nokta bulutu, doğrudan sensör çıkışından alınır.'
    ],
    scenarios: ['İnce sensör yuvası olan servis robotları', '12 m’ye kadar yoğun 2D tarama', 'ROS/SDK tabanlı haritalama prototipleri'],
    extraSpecs: [['Gövde yüksekliği', 'Yaklaşık 4 cm'], ['Veri arayüzü', 'UART 256000 bps'], ['Besleme', '5 V']],
    note: '12 m menzil üreticinin belirttiği test koşullarına bağlıdır.'
  },
  a1: {
    official: 'https://www.slamtec.com/en/lidar/a1spec',
    gallery: ['a1-2.jpg', 'a1-3.jpg'],
    detail: [
      'A1M8-R6, 360° taramayla 12 m’ye kadar 2D mesafe verisi sağlayan giriş seviyesi modeldir. Lazer üçgenleme kullandığı için öncelikle iç mekân robotları ve kontrollü aydınlatmalı prototipler için değerlendirilmelidir; dış ortam ve güçlü güneş ışığı gereksinimlerinde S serisi daha uygun olabilir.',
      'Üretici tipik 5,5 Hz dönüş, 8 kHz örnekleme, 5 V besleme ve 3,3 V TTL seviyeli UART çıkışı belirtir. Teknik föy tarama hızının uygun motor beslemesiyle 10 Hz’ye kadar ayarlanabildiğini açıklar. Geliştirme setinde USB adaptörü bulunup bulunmadığı satılan paket içeriğine göre kontrol edilmelidir.'
    ],
    scenarios: ['Eğitim ve prototip robotları', 'İç ortam 2D haritalama', 'UART üzerinden nokta bulutu alan gömülü projeler'],
    extraSpecs: [['Dönüş hızı', 'Tipik 5,5 Hz; en çok 10 Hz'], ['Veri çıkışı', '3,3 V TTL UART'], ['Besleme', '5 V']],
    note: 'USB bağlantısı sensörün yerleşik çıkışı değil, kullanılan adaptör veya geliştirme setine bağlıdır.'
  },
  s3: {
    official: 'https://www.slamtec.com/en/s3/spec',
    gallery: ['s3-2.jpg', 's3-3.jpg'],
    detail: [
      'S3, yaklaşık 4 cm yüksekliğinde kompakt gövdede 40 m sınıfı menzil sunar. Üretici 40 m’yi %70 yansıtıcılıkta, 15 m’yi %10 yansıtıcılıkta ve 5 m’yi %2 yansıtıcılıkta belirtir. Koyu renkli hedeflerin önemli olduğu projelerde bu ayrım, yalnızca en yüksek menzile bakmaktan daha yararlıdır.',
      '32 kHz ölçüm, 10–20 Hz dönüş, 80.000 lux ortam ışığı dayanımı ve 1 Mbps TTL UART bağlantısı dokümante edilmiştir. 0,1125° açısal çözünürlük tipik 10 Hz dönüş için verilir; hız artırıldığında açısal aralık değişir.'
    ],
    scenarios: ['Kompakt AMR’lerde uzun menzilli tarama', 'Koyu hedeflerin bulunduğu ortamlarda engel algılama', 'Gün ışığı altında 2D çevre algısı'],
    extraSpecs: [['Menzil · düşük yansıtıcılık', '15 m (%10) / 5 m (%2)'], ['Ortam ışığı dayanımı', '80.000 lux’a kadar'], ['Veri arayüzü', 'TTL UART, 1 Mbps']],
    note: '40 m ve 0,1125° değerleri üreticinin belirttiği yansıtıcılık ve dönüş hızına aittir.'
  },
  s2e: {
    official: 'https://www.slamtec.com/en/s2/spec',
    gallery: ['s2e-2.jpg', 's2e-3.jpg'],
    detail: [
      'S2E, S2 ailesinin Ethernet/UDP çıkışlı varyantıdır. 30 m azami menzil, 32 kHz örnekleme ve IP65 koruma sunar. UART bağlantılı S2’den ayrıldığı nokta ağ üzerinden veri aktarımı ve 12 V besleme istemesidir; mevcut robot kontrolcüsünün ağ topolojisi model seçiminde belirleyicidir.',
      'Üretici %90 yansıtıcılıkta 30 m, %10 yansıtıcılıkta 10 m menzil verir. Tipik 10 Hz dönüş ve 0,1125° açısal çözünürlük, 360° 2D nokta bulutu üretimi içindir. Ethernet/UDP çıkışı 10/100 Mbit ağ bağlantısıyla kullanılır.'
    ],
    scenarios: ['Ethernet üzerinden sensör verisi alan AMR sistemleri', 'IP65 koruma gerektiren iç/dış ortam robotları', '30 m sınıfı ağ bağlantılı 2D tarama'],
    extraSpecs: [['Düşük yansıtıcılık menzili', '0,05–10 m (%10 yüzey)'], ['Tarama frekansı', 'Tipik 10 Hz'], ['Arayüz / besleme', '10/100 Mbit Ethernet UDP / 12 V']],
    note: 'S2E, S2/S2L UART bağlantısından farklı olarak Ethernet/UDP kullanır.'
  },
  m2m3: {
    official: 'https://www.slamtec.com/en/lidar/mapperspec',
    gallery: ['m2m3-2.jpg', 'm2m3-3.jpg'],
    detail: [
      'Mapper M2M3, lazer tarayıcı ile SLAM işlemeyi tek cihazda sunar. Kullanıcı ham tarama verisine ek olarak harita ve poz bilgisini alabilir; haritalama işlemini tamamen ayrı bir bilgisayarda kurma ihtiyacını azaltır. Wi-Fi erişim noktası/istemci modları ve 100 Mbit Ethernet, telefon, PC veya robot kontrolcüsüne veri taşımayı kolaylaştırır.',
      'RobotSepeti’nde listelenen varyant ve bu sayfada indirilen M2M3 teknik föyü 40 m menzil ve 10.000 örnek/sn belirtir. Slamtec’in güncel web tablosunda 32.000 örnek/sn görünmektedir. Bu farkı model revizyonu veya doküman sürümü açısından satıcıyla teyit etmek gerekir.'
    ],
    scenarios: ['Elde veya robot üzerinde 2D haritalama', 'Harita ve pozun aynı cihazdan alınması', 'Wi-Fi/Ethernet ile ROS veya özel uygulama entegrasyonu'],
    extraSpecs: [['Veri bağlantısı', '100 Mbit Ethernet ve Wi-Fi'], ['Harita alanı', 'En çok 300 × 300 m (teknik föy)'], ['Harita çözünürlüğü', '0,05 m (teknik föy)']],
    note: 'M2M3 örnekleme değeri satılan ürün açıklaması ve indirilebilir teknik föyde 10 kHz; üreticinin güncel web tablosunda 32 kHz. Donanım revizyonunu sipariş öncesi doğrulayın.'
  },
  m2m2: {
    official: 'https://www.slamtec.com/en/support#mapper',
    gallery: ['m2m2-2.jpg', 'm2m2-3.jpg'],
    detail: [
      'Mapper M2M2, 360° lazer tarayıcı ve yerleşik SLAM motorunu birleştirir. Harita oluşturma ve gerçek zamanlı konum verisi üretme görevleri, cihaz üzerinde çalışan algoritmayla yürütülür. Ham LiDAR taraması da SDK veya ROS üzerinden alınabilir.',
      'Üretici teknik föyü 40 m menzil, 9.200 örnek/sn, 300 × 300 m azami harita alanı ve 5 cm harita çözünürlüğü belirtir. Yerleşik Wi-Fi ve Ethernet çıkışı, saha değerlendirmesi veya robot entegrasyonu için kullanılır. Slamtec Support bu modeli EOL olarak işaretler; RobotSepeti’nde listelense de tedarik durumu kontrol edilmelidir.'
    ],
    scenarios: ['Mevcut Mapper M2M2 sistemlerinin bakımı', 'Elde ortam haritalama', 'ROS/SDK üzerinden harita ve poz verisi kullanımı'],
    extraSpecs: [['Veri bağlantısı', 'Wi-Fi ve 100 Mbit Ethernet'], ['Harita alanı', 'En çok 300 × 300 m'], ['Harita çözünürlüğü', '0,05 m']],
    note: 'Üretici destek sayfası M2M2’yi EOL olarak listeler; güncel stok ve tedarik için RobotSepeti ürün sayfasını kontrol edin.'
  },
  a2m8: {
    official: 'https://www.slamtec.com/en/lidar/a2spec',
    gallery: ['a2m8-2.png', 'a2m8-3.png'],
    detail: [
      'A2M8, A2M12 ile aynı 12 m menzil sınıfındaki 360° tarayıcıdır; 8 kHz örnekleme ve 0,45° tipik açısal çözünürlük sunar. A2M12’nin 16 kHz ve 0,225° değerleri daha yoğun tarama isteyen projelerde belirgin fark yaratır. Her iki modelde de ince gövde ve OPTMAG temassız sürüş teknolojisi bulunur.',
      'A2M8’in 5–15 Hz ayarlanabilir dönüş hızı ve 5 V beslemesi üretici teknik sayfasında listelenir. RobotSepeti bu ürünü set olarak sunar; kablo/USB adaptörü gibi paket parçaları için ürün sayfasındaki içerik esas alınmalıdır. Üretici A2M8’i yeni satış için listelemeyebilir.'
    ],
    scenarios: ['A2M8 kullanan mevcut robotların yedek parça ihtiyacı', '12 m 2D tarama ile eğitim/prototip çalışmaları', 'İnce gövdeli sensör gerektiren mobil platformlar'],
    extraSpecs: [['Açısal çözünürlük', '0,45°'], ['Dönüş hızı', 'Tipik 10 Hz; 5–15 Hz'], ['Besleme', '5 V']],
    note: 'Ürün RobotSepeti’nde listelenir; üreticideki satış ve stok durumu farklı olabilir. Set içeriğini ürün sayfasında kontrol edin.'
  }
};
