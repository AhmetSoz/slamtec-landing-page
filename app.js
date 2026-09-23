const pdf = (name, file) => ({ name, url: `assets/docs/${file}`, local: true });

// Product selection and specifications are based on RobotSepeti's Slamtec search results.
// PDF labels and model matches follow Slamtec Support and Slamtec Wiki.
const products = [
  {
    id: 'aurora-s', name: 'Aurora S', fullName: 'SLAMTEC Aurora S Deep Learning vSLAM Kompakt Haritalama ve Algılama Sensörü',
    family: '3D Haritalama', category: 'mapping', image: 'aurora-s.jpg',
    url: 'https://www.robotsepeti.com/slamtec-aurora-s-deep-learning-vslam-lidar-kompakt-haritalama-ve-algilama-sensoru',
    summary: 'Stereo kameralar ve IMU ile 3D harita, derinlik ve 6DoF poz üreten gömülü AI-VSLAM sensörü; LiDAR füzyonu opsiyonel.',
    paragraphs: [
      'Aurora S, Slamtec’in görsel algılama, ataletsel ölçüm birimi (IMU) ve derin öğrenme tabanlı vSLAM teknolojisini bir araya getiren kompakt sensörüdür. İç ve dış mekânda 3D haritalama, çevre algılama ve altı serbestlik dereceli konumlandırma için tasarlanmıştır.',
      'Çift balık gözü kamera, yerleşik işlem birimi ve isteğe bağlı LiDAR füzyonu sayesinde gerçek zamanlı nokta bulutu, derinlik haritası ve nesne segmentasyonu çıktıları sağlar. Gömülü zekâ, dijital ikiz, endüstriyel otomasyon ve düşük hızlı otonom sürüş projelerinde değerlendirilebilir.'
    ],
    features: ['AI destekli vSLAM ve 6DoF konumlandırma', '180° balık gözü görüntüleme ve stereo derinlik algısı', 'ROS, C++ ve Python SDK desteği'],
    specs: [['Algılama', 'Stereo görüntü + IMU; LiDAR opsiyonel'], ['Haritalama alanı', '>1.000.000 m²'], ['Konumlandırma', '6DoF, yeniden konumlandırma desteği'], ['Güç', '9–24 V DC veya USB Type-C PD 3.0']],
    chips: ['3D haritalama', 'AI-VSLAM', '6DoF'],
    docs: [pdf('Aurora S teknik föyü', 'aurora-s-datasheet.pdf'), pdf('Aurora S kullanım kılavuzu', 'aurora-s-manual.pdf')]
  },
  {
    id: 'aurora', name: 'Aurora', fullName: 'Slamtec AURORA All in One Yerelleştirme ve 3D Haritalama Multi Source Lidar Sensör',
    family: '3D Haritalama', category: 'mapping', image: 'aurora.webp',
    url: 'https://www.robotsepeti.com/slamtec-aurora-all-in-one-yerellestirme-ve-haritalama-multi-source-lidar-sensor',
    summary: 'Yerleşik LiDAR, binoküler kamera ve IMU verilerini birleştirerek 3D harita ve 6DoF konum üretir.',
    paragraphs: [
      'Aurora; LiDAR, görüntü, IMU ve öğrenme tabanlı algoritmaları tek bir gövdede birleştiren yerelleştirme ve haritalama sensörüdür. Harici sensöre bağımlı kalmadan üç boyutlu ortam haritaları ve 6DoF konum verisi üretebilir.',
      'RobotSepeti ürün açıklamasında Robostudio arayüzü ve SDK araçlarının geliştirme sürecine sağladığı destek öne çıkıyor. GPS/RTK ve odometri gibi ek kaynaklarla genişletilebilen çoklu veri füzyonu, mobil robot ve araştırma uygulamalarına uyum sağlar.'
    ],
    features: ['LiDAR + binoküler görüş + IMU füzyonu', 'İç ve dış mekânda 3D haritalama', 'RoboStudio ve SDK ile geliştirme desteği'],
    specs: [['Algılama', 'LiDAR + binoküler görüş + IMU'], ['Konumlandırma', '6DoF'], ['Kullanım', 'İç ve dış mekân'], ['Ek veri', 'GPS/RTK ve odometri genişletmesi']],
    chips: ['LiDAR füzyonu', '3D harita', '6DoF'],
    docs: [pdf('Aurora teknik föyü', 'aurora-datasheet.pdf'), pdf('Aurora kullanım kılavuzu', 'aurora-manual.pdf')]
  },
  {
    id: 'lpx-t1', name: 'LPX-T1', fullName: 'Slamtec RPLIDAR LPX-T1 (LPX-T1M4) 2D TOF 270° Lidar Lazer Tarayıcı',
    family: 'Endüstriyel LiDAR', category: 'industrial', image: 'lpx-t1.webp',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-lpx-t1-t1m4-2d-tof-270-lidar-lazer-tarayici',
    summary: 'AGV ve servis robotları için 270° tarama, 40 m azami menzil ve 60 kHz ölçüm; Ethernet bağlantılı.',
    paragraphs: [
      'LPX-T1, orta ve uzun menzilli çevre algılaması için geliştirilmiş 270° 2D ToF lazer tarayıcıdır. RobotSepeti açıklamasına göre 40 metreye kadar tarama ve yüksek örnekleme frekansıyla gerçek zamanlı nokta bulutu üretir.',
      '20–40 Hz tarama aralığı, 0,12° açısal çözünürlük ve güçlü ortam ışığına dayanım; otomatik güdümlü araçların, servis robotlarının ve hafif otonom sistemlerin konumlandırma ve navigasyon işlerinde kullanılmasını sağlar.'
    ],
    features: ['270° tarama açısı', 'İç ve dış mekânda orta ve uzun menzil algısı', 'AGV ve servis robotu entegrasyonu'],
    specs: [['Menzil', '0,05–40 m'], ['Tarama açısı', '270°'], ['Örnekleme', '60.000 örnek/sn'], ['Tarama frekansı', '20–40 Hz'], ['Açısal çözünürlük', '0,12°']],
    chips: ['40 m', '270°', '60K'],
    docs: [pdf('LPX-T1 teknik föyü', 't1-datasheet.pdf'), pdf('LPX-T1 kullanım kılavuzu', 't1-manual.pdf')]
  },
  {
    id: 'slamkit', name: 'SLAMKit', fullName: 'SLAMKit Mobil Robotlar için SLAM Kiti (Lisans Kartı + Lisanslı Yazılım)',
    family: 'Haritalama & SLAM', category: 'mapping', image: 'slamkit.jpg',
    url: 'https://www.robotsepeti.com/slamkit-mobil-robotlar-icin-slam-kiti',
    summary: 'Robot kontrolcüsüne haritalama ve konumlandırma ekleyen lisans kartı ve yazılım; LiDAR ayrı seçilir.',
    paragraphs: [
      'SLAMKit, farklı mobil robot platformlarının harita oluşturması ve gerçek zamanlı konumunu belirlemesi için geliştirilen bir yazılım lisanslama çözümüdür. Robot kontrol kartına gömülü çalışır ve geniş alanların yüksek çözünürlüklü haritalanmasını destekler.',
      'RobotSepeti’nde sunulan pakette lisans modülü ile lisanslı Slamware yazılımı bulunur. RPLIDAR ayrı satın alınır. RoboStudio ve SDK araçları, otonom yerelleştirme ve navigasyon geliştirme sürecini hızlandırır.'
    ],
    features: ['Haritalama ve gerçek zamanlı lokalizasyon', 'Lisans modülü + Slamware yazılımı', 'RoboStudio ve SDK ekosistemi'],
    specs: [['Ürün tipi', 'Lisans modülü + lisanslı yazılım'], ['LiDAR', 'Ayrı satın alınır'], ['Haritalama', 'Büyük alan ve yüksek çözünürlük'], ['Geliştirme', 'C++, Java, REST ve ROS araçları']],
    chips: ['SLAM', 'Lisans', 'SDK'],
    docs: [pdf('SLAMKit teknik föyü', 'slamkit-datasheet.pdf'), pdf('SLAMKit kullanım kılavuzu', 'slamkit-manual.pdf')]
  },
  {
    id: 'lpx-e3', name: 'LPX-E3P1', fullName: 'Slamtec LPX-E3P1 360° 2D Endüstriyel Alan İzleme Lidarı',
    family: 'Endüstriyel LiDAR', category: 'industrial', image: 'lpx-e3.jpg',
    url: 'https://www.robotsepeti.com/slamtec-lpx-e3p1-360-endustriyel-alan-izleme-lidari',
    summary: '360° alan izleme için 64 yapılandırılabilir set ve IO çıkışı; E3P1 nokta bulutu üretmez.',
    paragraphs: [
      'LPX-E3P1, endüstriyel alan izleme için tasarlanmış 360° 2D LiDAR çözümüdür. RobotSepeti açıklamasında 64 yapılandırılabilir alan seti ve her sette eş zamanlı izlenebilen üç alan öne çıkıyor.',
      '20 Hz tarama ve 0,225° açısal çözünürlük; montaj hattı parça sayımı, alan ihlali ve geçiş denetimi gibi uygulamalarda kullanılır. Bölgeler yapılandırma yazılımında tanımlanır ve ihlal bilgisi IO çıkışından alınır.'
    ],
    features: ['64 yapılandırılabilir alan seti', 'Aynı anda üç bölge izleme', 'PLC bağlantısı için IO çıkışı'],
    specs: [['İzleme menzili', '0,05–25 m (%70 yansıtıcılık)'], ['Tarama açısı', '360°'], ['Tarama frekansı', '20 Hz'], ['Açısal çözünürlük', '0,225°'], ['Çıkış', 'IO; nokta bulutu yok']],
    chips: ['25 m', '360°', '64 alan'],
    docs: [pdf('LPX-E3 teknik föyü', 'e3-datasheet.pdf'), pdf('Alan izleme kılavuzu', 'e3-manual.pdf')]
  },
  {
    id: 's2l', name: 'RPLIDAR S2L', fullName: 'Slamtec RPLIDAR S2M1-R2L (S2L) 360° DTOF Hassas Lidar',
    family: 'RPLIDAR S Serisi', category: 'lidar', image: 's2l.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-s2m1-l18-360-dtof-hassas-lidar-18m-32k-uart-5v-ip65',
    summary: '18 m menzilli, UART bağlantılı ve IP65 korumalı 360° dToF LiDAR.',
    paragraphs: [
      'S2L, Slamtec’in doğrudan uçuş süresi (dToF) ölçüm kullanan S2 ailesinin 18 metre menzilli modelidir. Saat yönünde dönerek 360° 2D nokta bulutu verisi üretir; mobil ve ticari robotların haritalama ve engel algılama işlerinde kullanılabilir.',
      '32 kHz ölçüm, 10 Hz dönüş, gün ışığına dayanım ve IP65 koruma sınıfı dış ortam koşullarında güvenilir algılamaya yardımcı olur. UART arayüzü ve 5 V besleme, gömülü sistem entegrasyonuna uygundur.'
    ],
    features: ['IP65 gövde ve gün ışığına dayanım', 'UART arayüzü', '32 kHz örnekleme'],
    specs: [['Menzil', '0,05–18 m'], ['Tarama açısı', '360°'], ['Örnekleme', '32.000 örnek/sn'], ['Bağlantı', 'UART'], ['Besleme', '5 V']],
    chips: ['18 m', '32K', 'IP65'],
    docs: [pdf('S2L teknik föyü', 's2l-datasheet.pdf'), pdf('S2 serisi kullanım kılavuzu', 's2-series-manual.pdf')]
  },
  {
    id: 's2', name: 'RPLIDAR S2', fullName: 'Slamtec RPLIDAR S2M1-R2 (S2) 360° DTOF Hassas Lidar',
    family: 'RPLIDAR S Serisi', category: 'lidar', image: 's2.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-s2-360-dtof-lazer-hassas-lidar-sensor-30m-32k-ip65',
    summary: '30 m menzil, UART veri çıkışı ve IP65 koruma ile iç ve dış mekân robot algısı.',
    paragraphs: [
      'S2, dToF teknolojisiyle 30 metreye kadar ölçüm yapan 360° lazer tarayıcıdır. 2D nokta bulutu verisi; haritalama, robot navigasyonu ve dış ortamda engel algılama amacıyla kullanılabilir.',
      'RobotSepeti ürün açıklamasında 32 kHz ölçüm frekansı, 10 Hz dönüş hızı, güçlü ortam ışığına dayanım ve IP65 koruma öne çıkar. UART-TTL çıkışı ve 5 V çalışma gerilimi, gömülü kontrol kartlarına bağlantıyı kolaylaştırır.'
    ],
    features: ['30 m dToF ölçüm menzili', 'Gün ışığına dayanıklı IP65 yapı', 'UART-TTL bağlantı'],
    specs: [['Menzil', '0,05–30 m'], ['Tarama açısı', '360°'], ['Örnekleme', '32.000 örnek/sn'], ['Bağlantı', 'UART'], ['Besleme', '5 V']],
    chips: ['30 m', '32K', 'IP65'],
    docs: [pdf('S2 teknik föyü', 's2-datasheet.pdf'), pdf('S2 serisi kullanım kılavuzu', 's2-series-manual.pdf')]
  },
  {
    id: 's1', name: 'RPLIDAR S1', fullName: 'Slamtec RPLIDAR S1 (S1M1-R2) TOF Uzun Menzilli Lidar Sensör',
    family: 'RPLIDAR S Serisi', category: 'lidar', image: 's1.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-s1-360-tof-lazer-uzun-menzilli-lidar-sensor-40m-5-15hz',
    summary: '40 metreye ulaşan ToF menziliyle dış ortam haritalama ve robot lokalizasyonu.',
    paragraphs: [
      'RPLIDAR S1, 40 metreye kadar 360° 2D tarama gerçekleştiren uzun menzilli ToF sensörüdür. Üretilen nokta bulutu; haritalama, yerelleştirme, çevre modelleme ve otonom robot navigasyonunda değerlendirilebilir.',
      'Slamtec’in S1 serisi özellikle uzak, açık ya da koyu renkli nesneleri ve doğrudan gün ışığı altındaki çevreyi algılamak üzere geliştirilmiştir. Koruyucu gövdesi sayesinde endüstriyel ve dış ortam projelerine uygundur.'
    ],
    features: ['40 m uzun menzil', 'Dış ortamda gün ışığına dayanım', 'ROS ve SDK ile entegrasyon'],
    specs: [['Menzil', '40 m’ye kadar'], ['Tarama açısı', '360°'], ['Örnekleme', '9.200 örnek/sn'], ['Tarama frekansı', '8–15 Hz'], ['Açısal çözünürlük', '0,391° (10 Hz)']],
    chips: ['40 m', '9.2K', 'ToF'],
    docs: [pdf('S1 teknik föyü', 's1-datasheet.pdf'), pdf('S1 kullanım kılavuzu', 's1-manual.pdf')]
  },
  {
    id: 'a3', name: 'RPLIDAR A3', fullName: 'Slamtec RPLIDAR A3M1 360° Lidar Sensör',
    family: 'RPLIDAR A Serisi', category: 'lidar', image: 'a3.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-a3m1-360-lidar-lazer-tarayici-sensor-015-25m-10-20hz',
    summary: '25 m menzilli, 16 kHz örneklemeli ve iç/dış ortam modlu 360° LiDAR.',
    paragraphs: [
      'A3M1, lazer üçgenleme yöntemiyle 360° tarama yapan A serisinin uzun menzilli modelidir. 25 metreye kadar 2D nokta bulutu üretir ve 16 kHz örnekleme hızı sunar.',
      'RobotSepeti ürün açıklamasında iç ve dış mekân için iki çalışma modu, güneş ışığına karşı dayanım ve ROS ile SLAMWARE desteği vurgulanır. Siyah ve beyaz yüzeyler arasında değişen ortamlarda mobil robot navigasyonu için değerlendirilebilir.'
    ],
    features: ['İç ve dış mekân çalışma modları', 'ROS ve SLAMWARE desteği', '16 kHz örnekleme'],
    specs: [['Menzil', '0,2–25 m (gelişmiş mod)'], ['Tarama açısı', '360°'], ['Örnekleme', '16.000/sn (gelişmiş); 10.000/sn (dış ortam)'], ['Tarama frekansı', '5–15 Hz'], ['Açısal çözünürlük', '0,225°']],
    chips: ['25 m', '16K', '360°'],
    docs: [pdf('A3M1 teknik föyü', 'a3-datasheet.pdf'), pdf('A3M1 geliştirme kiti kılavuzu', 'a3-manual.pdf')]
  },
  {
    id: 'a2m12', name: 'RPLIDAR A2M12', fullName: 'Slamtec RPLIDAR A2M12 360° Lidar Sensör',
    family: 'RPLIDAR A Serisi', category: 'lidar', image: 'a2m12.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-a2m12-360-lidar-lazer-tarayici-sensor-015-12m',
    summary: 'İnce gövdede 12 m tarama menzili ve 16 kHz örnekleme sunan LiDAR.',
    paragraphs: [
      'A2M12, 12 metreye kadar 360° 2D tarama yapan ince profilli lazer sensördür. 16 kHz’e ulaşan örnekleme hızıyla ev içi robotlardan çevre modellemeye kadar farklı uygulamalarda kullanılabilir.',
      'RobotSepeti açıklamasında beş yıla kadar çalışma ömrü, ROS ve SLAMWARE desteği, seri bağlantı/USB üzerinden veri alma kolaylığı öne çıkar. A2 serisi içinde daha yüksek örnekleme isteyen projeler için seçenektir.'
    ],
    features: ['İnce profil ve robot içine kolay yerleşim', 'ROS ve SLAMWARE desteği', '16 kHz ölçüm'],
    specs: [['Menzil', '0,2–12 m'], ['Tarama açısı', '360°'], ['Örnekleme', '16.000 örnek/sn'], ['Tarama frekansı', '5–15 Hz'], ['Açısal çözünürlük', '0,225°']],
    chips: ['12 m', '16K', '360°'],
    docs: [pdf('A2M12 teknik föyü', 'a2m12-datasheet.pdf'), pdf('A2 serisi geliştirme kiti kılavuzu', 'a2-series-manual.pdf')]
  },
  {
    id: 'a1', name: 'RPLIDAR A1', fullName: 'RPLIDAR A1M8-R6 360° Lidar Lazer Tarayıcı Sensör',
    family: 'RPLIDAR A Serisi', category: 'lidar', image: 'a1.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-a1-360-omnidirectional-lidar-22342',
    summary: 'Haritalama, lokalizasyon ve eğitim projeleri için ekonomik 360° LiDAR.',
    paragraphs: [
      'A1M8-R6, 12 metrelik menzil içinde 360° tarama yapabilen giriş seviyesi LiDAR sensörüdür. Ürettiği 2D nokta bulutu, robot navigasyonu, haritalama, nesne ve ortam modelleme uygulamalarında kullanılır.',
      'RobotSepeti ürün açıklamasına göre tarama frekansı motor kontrolüyle ayarlanabilir. Sensörün veri çıkışı UART’tır; USB bağlantısı, varsa paketteki dönüştürücü aracılığıyla sağlanır. ROS desteği prototipleme ve eğitim projelerini kolaylaştırır.'
    ],
    features: ['Giriş seviyesi 360° tarama', 'UART veri çıkışı', 'ROS desteği'],
    specs: [['Menzil', '0,15–12 m'], ['Tarama açısı', '360°'], ['Örnekleme', '8.000 örnek/sn'], ['Tarama frekansı', '5,5–10 Hz'], ['Ölçüm yöntemi', 'Lazer üçgenleme']],
    chips: ['12 m', '8K', '360°'],
    docs: [pdf('A1M8 teknik föyü', 'a1-datasheet.pdf'), pdf('A1M8 geliştirme kiti kılavuzu', 'a1-manual.pdf')]
  },
  {
    id: 's3', name: 'RPLIDAR S3', fullName: 'Slamtec RPLIDAR S3 360° DTOF 2D Lidar Sensör',
    family: 'RPLIDAR S Serisi', category: 'lidar', image: 's3.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-s3-360-dtof-2d-lidar-sensor',
    summary: 'Kompakt gövdede 40 m azami menzil, 32 kHz örnekleme ve 10–20 Hz dönüş sunan 2D ToF LiDAR.',
    paragraphs: [
      'RPLIDAR S3, kompakt boyutlu ve yüksek performanslı bir 360° 2D dToF lazer tarayıcıdır. 40 metre menzilinde nokta bulutu üreterek AMR, drone ve eğitim robotlarının haritalama, lokalizasyon ve navigasyon görevlerini destekler.',
      '32 kHz örnekleme hızı ve 0,1125° açısal çözünürlük, ayrıntılı çevre verisi sağlar. RobotSepeti açıklamasında uzun mesafeli nesne algısı ve ortam ışığına karşı istikrarlı çalışma özellikleri öne çıkar.'
    ],
    features: ['Kompakt 2D dToF yapı', '32 kHz yoğun örnekleme', 'İç ve dış mekân algısı'],
    specs: [['Menzil', '40 m’ye kadar'], ['Tarama açısı', '360°'], ['Örnekleme', '32.000 örnek/sn'], ['Tarama frekansı', '10–20 Hz'], ['Açısal çözünürlük', '0,1125°']],
    chips: ['40 m', '32K', '0,1125°'],
    docs: [pdf('S3 teknik föyü', 's3-datasheet.pdf'), pdf('S3 kullanım kılavuzu', 's3-manual.pdf')]
  },
  {
    id: 's2e', name: 'RPLIDAR S2E', fullName: 'Slamtec RPLIDAR S2M1-R2E (S2E) 360° DTOF Lidar',
    family: 'RPLIDAR S Serisi', category: 'lidar', image: 's2e.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-s2m1-e30-360-dtof-hassas-lidar-18m-32k-udp-5v-ip65',
    summary: 'Ethernet/UDP bağlantılı, 12 V beslemeli ve IP65 korumalı 30 m dToF LiDAR.',
    paragraphs: [
      'S2E, 30 metre menzilli S2 ailesinin Ethernet/UDP haberleşmeli modelidir. 360° dToF tarama verisi üreterek ticari robotlar ve dış ortam mobil platformlarında çevre algısına hizmet eder.',
      '32 kHz ölçüm frekansı, IP65 koruma ve 12 V çalışma gerilimi; kablolu ağ üzerinden veri aktarımı isteyen robot sistemleri için uygundur. RobotSepeti açıklaması güçlü gün ışığına dayanımı da vurgular.'
    ],
    features: ['Ethernet/UDP veri çıkışı', 'IP65 koruma', '30 m dToF menzil'],
    specs: [['Menzil', '0,05–30 m'], ['Tarama açısı', '360°'], ['Örnekleme', '32.000 örnek/sn'], ['Bağlantı', 'Ethernet / UDP'], ['Besleme', '12 V']],
    chips: ['30 m', 'Ethernet', 'IP65'],
    docs: [pdf('S2E teknik föyü', 's2e-datasheet.pdf'), pdf('S2E geliştirme kiti kılavuzu', 's2e-manual.pdf')]
  },
  {
    id: 'm2m3', name: 'Mapper M2M3', fullName: 'Slamtec M2M3 MAPPER Yerleşik SLAM Motorlu Lidar Haritalama Sensörü',
    family: 'Mapper', category: 'mapping', image: 'm2m3.jpg',
    url: 'https://www.robotsepeti.com/slamtec-m2m3-mapper-yerlesik-slam-motorlu-lidar-haritalama-sensoru',
    summary: '360° LiDAR ile yerleşik SLAM motorunu birleştiren haritalama ve gerçek zamanlı konumlandırma sensörü.',
    paragraphs: [
      'Mapper M2M3, 360° lazer tarayıcıyı yerleşik SLAM motoruyla bir araya getirir. Harici hesaplama zincirini sadeleştirerek karmaşık ortamların otonom haritalanmasına ve gerçek zamanlı konum belirlemeye yardımcı olur.',
      'RobotSepeti ürün açıklamasında SharpEdge teknolojisi ve Slamtec’in üçüncü nesil SLAM motoru vurgulanır. Depo ve bina haritalama, lojistik robotları, arama kurtarma ve Ar-Ge platformlarına entegrasyon başlıca uygulama alanlarıdır.'
    ],
    features: ['Yerleşik SLAM motoru', 'SharpEdge harita optimizasyonu', 'Harita ve poz verisi çıkışı'],
    specs: [['Menzil', '40 m’ye kadar'], ['Tarama açısı', '360°'], ['Örnekleme', '10.000 örnek/sn'], ['Çıktı', 'LiDAR taraması, harita ve poz verisi'], ['Uygulama', 'Otonom haritalama ve lokalizasyon']],
    chips: ['40 m', 'SLAM 3.0', '360°'],
    docs: [pdf('M2M3 teknik föyü', 'm2m3-datasheet.pdf'), pdf('M2M3 hızlı başlangıç', 'm2m3-quickstart.pdf')]
  },
  {
    id: 'm2m2', name: 'Mapper M2M2', fullName: 'Slamtec MAPPER M2M2 TOF Lidar Haritalama ve Lokalizasyon Sensörü',
    family: 'Mapper', category: 'mapping', image: 'm2m2.jpg',
    url: 'https://www.robotsepeti.com/slamtec-rplidar-m2m2-lidar-haritalama-ve-lokalizasyon-sensoru-40m-10hz',
    summary: 'Entegre SLAM motoruyla tak çalıştır haritalama ve lokalizasyon çözümü.',
    paragraphs: [
      'Mapper M2M2, lazer menzil tarayıcı ile Slamtec SLAM motorunu aynı sistemde sunar. Harita oluşturma ve gerçek zamanlı konum/yön belirleme görevlerini ek sensör gereksinimini azaltarak yerine getirmek için geliştirilmiştir.',
      'RobotSepeti açıklamasına göre robot konumlandırma, çevresel analiz ve elde haritalama gibi alanlara uygundur. SharpEdge haritalama teknolojisi ve harita optimizasyon motoru, kapalı çevrim düzeltmesiyle harita kalitesini artırır.'
    ],
    features: ['Tak çalıştır SLAM çözümü', 'SharpEdge harita optimizasyonu', 'Harita ve konum verisi'],
    specs: [['Menzil', '40 m’ye kadar'], ['Tarama açısı', '360°'], ['Örnekleme', '9.200 örnek/sn'], ['Tarama frekansı', '8–15 Hz'], ['Kullanım', 'Robot ve elde haritalama']],
    chips: ['40 m', '9.2K', 'SLAM'],
    docs: [pdf('M2M2 teknik föyü', 'm2m2-datasheet.pdf'), pdf('Mapper hızlı başlangıç', 'm2m2-quickstart.pdf')]
  },
  {
    id: 'a2m8', name: 'RPLIDAR A2M8', fullName: 'RPLiDAR A2M8 360 Derece Lidar Lazer Tarayıcı Sensör Seti',
    family: 'RPLIDAR A Serisi', category: 'lidar', image: 'a2m8.png',
    url: 'https://www.robotsepeti.com/rplidar-a2m8-360-derece-lazer-tarayici-set-12-metre-menzilli',
    summary: '12 m menzil, 8 kHz örnekleme ve ince gövdeye sahip 360° LiDAR seti.',
    paragraphs: [
      'A2M8, Slamtec’in 360° iki boyutlu lazer tarayıcı setidir. 12 metre menzil içinde ürettiği veriler haritalama, yer belirleme ve obje/çevre modelleme projelerinde kullanılabilir.',
      'RobotSepeti açıklamasında 8 kHz örnekleme, ayarlanabilir 5–15 Hz tarama frekansı, Class 1 lazer güvenliği ve ince mekanik tasarım öne çıkar. Üretici A2M8 modelini satış dışı olarak işaretlese de ürün RobotSepeti arama sonuçlarında listelenmektedir; güncel stok ve tedarik bilgisi ürün sayfasından doğrulanmalıdır.'
    ],
    features: ['İnce gövdeli 360° tarama', 'OPTMAG teknolojisi', 'Class 1 lazer güvenliği'],
    specs: [['Menzil', '0,2–12 m'], ['Tarama açısı', '360°'], ['Örnekleme', '8.000 örnek/sn'], ['Tarama frekansı', '5–15 Hz'], ['Açısal çözünürlük', '0,45°']],
    chips: ['12 m', '8K', '360°'],
    docs: [pdf('A2M8 teknik föyü', 'a2m8-datasheet.pdf'), pdf('A2 serisi geliştirme kiti kılavuzu', 'a2-series-manual.pdf')]
  }
];

for (const product of products) {
  if (!productEditorial[product.id]) throw new Error(`Eksik ürün içeriği: ${product.id}`);
  Object.assign(product, productEditorial[product.id]);
  product.manufacturerStories = manufacturerStories[product.id] || [];
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const grid = document.getElementById('product-grid');
const catalog = document.getElementById('catalog-view');
const detail = document.getElementById('product-detail');
const intro = document.getElementById('product-intro');
const productsSection = document.getElementById('urunler');
let activeFilter = 'all';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let routeRevision = 0;
let galleryRevision = 0;
let filterTimer;
let revealObserver;

function renderCards() {
  const shown = products.filter((product) => activeFilter === 'all' || product.category === activeFilter);
  grid.innerHTML = shown.map((product) => `
    <article class="product-card">
      <a class="card-hit" href="#urun=${escapeHtml(product.id)}" aria-label="${escapeHtml(product.name)} ürün detayını aç">
        <div class="card-image"><img src="assets/images/${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} ürün görseli" loading="lazy"></div>
        <div class="card-body">
          <span class="card-family">${escapeHtml(product.family)}</span>
          <h3 class="card-title">${escapeHtml(product.name)}</h3>
          <p class="card-summary">${escapeHtml(product.summary)}</p>
          <div class="card-specs">${product.chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join('')}</div>
        </div>
        <span class="card-open">Teknik detayları gör <span aria-hidden="true">↗</span></span>
      </a>
    </article>`).join('');
}

function renderDetail(product) {
  revealObserver?.disconnect();
  const gallery = [product.image, ...product.gallery];
  const specs = new Map([...product.specs, ...product.extraSpecs].map(([label, value]) => [label, value]));
  detail.innerHTML = `
    <button class="detail-back" type="button" id="detail-back"><span aria-hidden="true">←</span> Tüm ürünlere dön</button>
    <div class="detail-overview">
      <div class="detail-media">
        <div class="detail-image"><img id="detail-main-image" src="assets/images/${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} ürün görseli 1"></div>
        <div class="gallery-thumbs" role="group" aria-label="${escapeHtml(product.name)} ürün görselleri">
          ${gallery.map((photo, index) => `<button class="gallery-thumb ${index === 0 ? 'is-active' : ''}" type="button" data-gallery-image="${escapeHtml(photo)}" data-gallery-index="${index + 1}" aria-label="${escapeHtml(product.name)} görsel ${index + 1}" aria-pressed="${index === 0}"><img src="assets/images/${escapeHtml(photo)}" alt="" loading="lazy"></button>`).join('')}
        </div>
      </div>
      <div class="detail-intro">
        <span class="eyebrow"><span class="eyebrow-line"></span> ${escapeHtml(product.family)}</span>
        <h2 id="detail-heading">${escapeHtml(product.name)}</h2>
        <p class="detail-full-name">${escapeHtml(product.fullName)}</p>
        <p>${escapeHtml(product.summary)}</p>
        <div class="detail-chips">${product.chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join('')}</div>
        <div class="detail-actions">
          <a class="primary-button" href="${escapeHtml(product.url)}" target="_blank" rel="noopener noreferrer">RobotSepeti'nde incele <span aria-hidden="true">↗</span></a>
          <button class="outline-button" type="button" data-scroll-docs>Teknik belgeler ↓</button>
        </div>
        <a class="manufacturer-link" href="${escapeHtml(product.official)}" target="_blank" rel="noopener noreferrer">Slamtec teknik sayfası <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="detail-content">
      <div class="detail-copy">
        <h3>Modelin çalışma biçimi ve kullanım amacı</h3>
        ${[...product.paragraphs, ...product.detail].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        <h3 class="subsection-title">Uygun kullanım alanları</h3>
        <ul class="application-list">${product.scenarios.map((scenario) => `<li>${escapeHtml(scenario)}</li>`).join('')}</ul>
        <h3 class="subsection-title">Öne çıkan işlevler</h3>
        <ul class="feature-list">${product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}</ul>
      </div>
      <div class="spec-column">
        <h3>Teknik özellikler</h3>
        <table class="spec-table"><tbody>${[...specs].map(([label, value]) => `<tr><th scope="row">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('')}</tbody></table>
        <div class="selection-note"><strong>Model seçimi için not</strong><p>${escapeHtml(product.note)}</p></div>
      </div>
    </div>
    ${product.manufacturerStories.length ? `<section class="manufacturer-story" aria-labelledby="manufacturer-story-title">
      <div class="manufacturer-story-heading">
        <div><span class="eyebrow"><span class="eyebrow-line"></span> Üretici görselleri</span><h3 id="manufacturer-story-title">${escapeHtml(product.name)} nasıl çalışır?</h3><p>Slamtec'in ürün anlatımından seçilen şemalar ve uygulama örnekleri. Aileye ait görsellerde model farkları açıklamalarda belirtilir.</p></div>
      </div>
      <div class="manufacturer-story-list">${product.manufacturerStories.map((story, index) => `<figure class="manufacturer-figure ${story.compact ? 'is-compact' : ''}">
        <button class="manufacturer-image" type="button" data-story-image="${escapeHtml(story.file)}" data-story-alt="${escapeHtml(story.title)}" aria-label="${escapeHtml(story.title)} görselini büyüt"><img src="assets/images/official/${escapeHtml(story.file)}" alt="${escapeHtml(story.title)}" loading="lazy" decoding="async"><span class="image-expand" aria-hidden="true">Büyüt ↗</span></button>
        <figcaption><span class="figure-index">${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(story.title)}</strong><p>${escapeHtml(story.caption)}</p><a href="${escapeHtml(story.source)}" target="_blank" rel="noopener noreferrer">Slamtec kaynağı ↗</a></div></figcaption>
      </figure>`).join('')}</div>
    </section>` : ''}
    <div class="docs-panel" id="belgeler">
      <div><span class="eyebrow"><span class="eyebrow-line"></span> Slamtec Support</span><h3>Teknik belgeler</h3></div>
      <div class="docs-list">${product.docs.map((document) => `<a class="doc-link" href="${escapeHtml(document.url)}" download><span>${escapeHtml(document.name)}</span><span aria-hidden="true">↓</span></a>`).join('')}</div>
      <p class="docs-note">Belgeler doğrudan PDF olarak indirilir. Güncel sürümler Slamtec Support sayfasındadır.</p>
    </div>
    <div class="source-links"><span>Bilgi kaynakları</span><a href="${escapeHtml(product.url)}" target="_blank" rel="noopener noreferrer">RobotSepeti ürün sayfası ↗</a><a href="${escapeHtml(product.official)}" target="_blank" rel="noopener noreferrer">Slamtec teknik sayfası ↗</a></div>
    <dialog class="image-dialog" id="image-dialog" aria-label="Üretici görseli"><button class="image-dialog-close" type="button" data-close-story aria-label="Görseli kapat">✕</button><img alt=""></dialog>`;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
    detail.querySelectorAll('.manufacturer-story-heading, .manufacturer-figure').forEach((element) => {
      element.classList.add('will-reveal');
      revealObserver.observe(element);
    });
  }
}

function showCatalog() {
  detail.innerHTML = '';
  detail.hidden = true;
  catalog.hidden = false;
  intro.hidden = false;
}

function route({ scroll = false, focus = false } = {}) {
  const revision = ++routeRevision;
  const match = location.hash.match(/^#urun=([a-z0-9-]+)$/);
  const product = match && products.find((item) => item.id === match[1]);
  const changingView = Boolean(product) !== !detail.hidden;
  const update = () => {
    if (revision !== routeRevision) return;
    if (product) {
      renderDetail(product);
      detail.hidden = false;
      catalog.hidden = true;
      intro.hidden = true;
    } else showCatalog();
  };
  const finish = () => {
    if (revision !== routeRevision) return;
    if (scroll && (product || location.hash === '#urunler')) productsSection.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    if (focus && product) detail.querySelector('#detail-back')?.focus({ preventScroll: true });
    if (focus && !product && location.hash === '#urunler') {
      const heading = document.getElementById('products-heading');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }
  };
  if (scroll && changingView && !reducedMotion && document.startViewTransition) {
    document.startViewTransition(update).finished.then(finish).catch(finish);
  } else {
    update();
    finish();
  }
}

renderCards();
route();
window.addEventListener('hashchange', () => route({ scroll: true, focus: true }));
detail.addEventListener('click', (event) => {
  const storyImage = event.target.closest('[data-story-image]');
  if (storyImage) {
    const dialog = detail.querySelector('#image-dialog');
    dialog.querySelector('img').src = `assets/images/official/${storyImage.dataset.storyImage}`;
    dialog.querySelector('img').alt = storyImage.dataset.storyAlt;
    dialog.showModal();
    dialog.querySelector('[data-close-story]').focus();
  }
  if (event.target.closest('[data-close-story]')) detail.querySelector('#image-dialog')?.close();
  if (event.target.id === 'image-dialog') event.target.close();
  if (event.target.closest('#detail-back')) location.hash = 'urunler';
  if (event.target.closest('[data-scroll-docs]')) detail.querySelector('#belgeler')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const thumb = event.target.closest('[data-gallery-image]');
  if (thumb) {
    const mainImage = detail.querySelector('#detail-main-image');
    const revision = ++galleryRevision;
    const updateImage = () => {
      if (revision !== galleryRevision) return;
      mainImage.src = `assets/images/${thumb.dataset.galleryImage}`;
      mainImage.alt = `${detail.querySelector('#detail-heading').textContent} ürün görseli ${thumb.dataset.galleryIndex}`;
      detail.querySelectorAll('.gallery-thumb').forEach((item) => {
        const active = item === thumb;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
    };
    if (reducedMotion) updateImage();
    else mainImage.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.985)' }], { duration: 130, easing: 'ease-in' }).finished.then(() => {
      updateImage();
      mainImage.animate([{ opacity: 0, transform: 'scale(1.015)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 220, easing: 'ease-out' });
    }).catch(() => {});
  }
});
document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach((item) => {
    const selected = item === button;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  if (!reducedMotion) grid.classList.add('is-filtering');
  window.clearTimeout(filterTimer);
  filterTimer = window.setTimeout(() => {
    renderCards();
    grid.classList.remove('is-filtering');
  }, reducedMotion ? 0 : 150);
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !detail.hidden) location.hash = 'urunler';
});

const slides = [...document.querySelectorAll('.hero-slide')];
let currentSlide = 0;
function setSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === currentSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
    slide.inert = !active;
  });
  document.getElementById('hero-index').textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
}
document.getElementById('hero-prev').addEventListener('click', () => setSlide(currentSlide - 1));
document.getElementById('hero-next').addEventListener('click', () => setSlide(currentSlide + 1));
if (!reducedMotion) {
  let timer = setInterval(() => setSlide(currentSlide + 1), 5500);
  const stage = document.getElementById('hero-stage');
  stage.addEventListener('mouseenter', () => clearInterval(timer));
  stage.addEventListener('mouseleave', () => { timer = setInterval(() => setSlide(currentSlide + 1), 5500); });
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Menüyü aç');
}));
