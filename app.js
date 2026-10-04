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

// Yeni eklenen ürünlerde eksik alanlar boş kabul edilir; site hata vermez.
const productDefaults = { family: '', category: 'lidar', summary: '', paragraphs: [], features: [], specs: [], chips: [], docs: [], official: '', gallery: [], detail: [], scenarios: [], extraSpecs: [], note: '' };
for (const product of products) {
  Object.assign(product, { ...productDefaults, fullName: product.name, ...product, ...(productEditorial[product.id] || {}) });
  product.manufacturerStories = manufacturerStories[product.id] || [];
  product.extraMedia = extraMedia[product.id] || [];
  product.hero = productHero[product.id] || null;
  product.video = productVideos[product.id] || null;
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const imageSize = (file) => mediaDimensions[file] ? `width="${mediaDimensions[file][0]}" height="${mediaDimensions[file][1]}" style="--image-width:${mediaDimensions[file][0]}px;aspect-ratio:${mediaDimensions[file][0]} / ${mediaDimensions[file][1]}"` : '';
const grid = document.getElementById('product-grid');
const catalog = document.getElementById('catalog-view');
const detail = document.getElementById('product-detail');
const intro = document.getElementById('product-intro');
const productsSection = document.getElementById('urunler');
let activeFilter = 'all';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let routeRevision = 0;
let filterTimer;
let videoObserver;
let chapterVideoObserver;

function setVideoPlayback(stage, play) {
  if (!stage) return;
  if (play && !stage.querySelector('video, img')) {
    const media = document.createElement(stage.dataset.mediaType === 'gif' ? 'img' : 'video');
    if (media instanceof HTMLVideoElement) {
      media.muted = true;
      media.defaultMuted = true;
      media.autoplay = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = 'metadata';
      media.setAttribute('aria-label', stage.dataset.mediaTitle);
    } else {
      media.alt = stage.dataset.mediaTitle;
    }
    media.src = stage.dataset.mediaSrc;
    stage.append(media);
    if (media instanceof HTMLVideoElement) media.play().catch(() => {});
  } else if (play) {
    stage.querySelector('video')?.play().catch(() => {});
  } else {
    stage.querySelector('video')?.pause();
  }
  stage.classList.toggle('is-playing', play);
}

// Ürün sayıları listeye göre otomatik güncellenir.
const allFilterCount = document.querySelector('[data-filter="all"] span');
if (allFilterCount) allFilterCount.textContent = products.length;
document.querySelectorAll('.product-count strong').forEach((count) => { count.textContent = products.length; });
const categoryLabels = { lidar: 'RPLIDAR modeli', mapping: 'Haritalama ve SLAM ürünü', industrial: 'Endüstriyel LiDAR' };
document.querySelectorAll('strong + span').forEach((label) => {
  const category = Object.keys(categoryLabels).find((key) => categoryLabels[key] === label.textContent.trim());
  if (category) label.previousElementSibling.textContent = products.filter((product) => product.category === category).length;
});
document.querySelectorAll('p').forEach((paragraph) => {
  if (/listelenen \d+ modeli/.test(paragraph.textContent)) paragraph.textContent = paragraph.textContent.replace(/listelenen \d+ modeli/, `listelenen ${products.length} modeli`);
});

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

const officialPageKeys = {
  'aurora-s':'aurora-s', aurora:'aurora', 'lpx-t1':'t1', slamkit:'slamkit', 'lpx-e3':'e3',
  s2l:'s2', s2:'s2', s2e:'s2', a3:'lidar-a3', a2m12:'lidar-a2', a2m8:'lidar-a2',
  a1:'lidar-a1', s3:'s3', m2m3:'lidar-mapper', m2m2:'lidar-mapper'
};
let officialMediaObserver;
let officialRevealObserver;
let carouselCleanups = [];
function cleanOfficialMedia() {
  officialMediaObserver?.disconnect();
  officialRevealObserver?.disconnect();
  carouselCleanups.forEach(cleanup=>cleanup());
  carouselCleanups=[];
}
function renderDetail(product) {
  videoObserver?.disconnect();
  chapterVideoObserver?.disconnect();
  cleanOfficialMedia();
  const specs = new Map([...product.specs, ...product.extraSpecs].map(([label, value])=>[label,value]));
  const template = officialDesign[officialPageKeys[product.id]];
  const familyNote = ['s2l','s2','s2e','a2m12','a2m8','m2m2','m2m3'].includes(product.id);
  const fallback = `<div class="official-legacy-hero"><div class="container"><span>RPLIDAR S Serisi</span><h2>${escapeHtml(product.name)}</h2><p>${escapeHtml(product.summary)}</p><img src="assets/images/${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"></div></div>${product.manufacturerStories.map(story=>`<section class="official-legacy-section"><div class="container"><h3>${escapeHtml(story.title)}</h3><p>${escapeHtml(story.caption)}</p></div><img src="assets/images/official/${escapeHtml(story.file)}" ${imageSize(`assets/images/official/${story.file}`)} alt="${escapeHtml(story.title)}" loading="lazy"></section>`).join('')}`;
  detail.innerHTML = `
    <div class="detail-nav"><div class="detail-nav-inner container">
      <button class="detail-back" type="button" id="detail-back" aria-label="Tüm ürünler"><span aria-hidden="true">←</span><span class="detail-back-label">Tüm ürünler</span></button>
      <strong class="detail-nav-name">${escapeHtml(product.name)}</strong>
      <nav class="detail-nav-links" aria-label="Ürün içeriği">
        <button type="button" data-scroll-target="detail-overview">Genel bakış</button>
        <button type="button" data-scroll-target="detail-specs"><span class="desktop-label">Teknik özellikler</span><span class="mobile-label">Özellikler</span></button>
        <button type="button" data-scroll-target="belgeler">Belgeler</button>
        <a href="${escapeHtml(product.url)}" target="_blank" rel="noopener noreferrer"><span class="desktop-label">RobotSepeti'nde incele ↗</span><span class="mobile-label">RobotSepeti ↗</span></a>
      </nav>
    </div></div>
    ${familyNote ? `<div class="selected-model-strip"><strong>Seçili model: ${escapeHtml(product.name)}</strong> · ${product.chips.map(escapeHtml).join(' · ')}. Görsel anlatım ürün ailesine aittir.</div>` : ''}
    <div id="detail-overview"><div id="official-product" aria-label="${escapeHtml(product.name)} ürün anlatımı">${template ? template.html : fallback}</div></div>
    <section class="product-specification" id="detail-specs" aria-labelledby="detail-heading">
      <div class="container">
        <div class="specification-heading"><div><span class="eyebrow">${escapeHtml(product.family)}</span><h2 id="detail-heading">${escapeHtml(product.name)} teknik özellikleri</h2><p>${escapeHtml(product.fullName)}</p></div><a class="primary-button" href="${escapeHtml(product.url)}" target="_blank" rel="noopener noreferrer">RobotSepeti'nde incele ↗</a></div>
        ${familyNote ? `<p class="model-variant-note">Üstteki görsel anlatım ${escapeHtml(product.family)} ailesine aittir. Aşağıdaki teknik bilgiler RobotSepeti'nde satılan <strong>${escapeHtml(product.name)}</strong> modeline özeldir.</p>` : ''}
        <div class="specification-body"><div class="specification-product"><img src="assets/images/${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} ürün görünümü" loading="lazy"><div class="detail-chips">${product.chips.map(chip=>`<span>${escapeHtml(chip)}</span>`).join('')}</div></div><table class="model-spec-table"><caption>${escapeHtml(product.name)} donanım ve performans bilgileri</caption><tbody>${[...specs].map(([label,value])=>`<tr><th scope="row">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('')}</tbody></table></div>
        <div class="model-description"><h3>Çalışma biçimi ve kullanım</h3>${[...product.paragraphs,...product.detail].map(p=>`<p>${escapeHtml(p)}</p>`).join('')}
          ${product.features.length ? `<ul class="feature-list">${product.features.map(f=>`<li>${escapeHtml(f.replace(/^✓\s*/,''))}</li>`).join('')}</ul>` : ''}
          ${product.note ? `<aside class="model-selection-note">${escapeHtml(product.note)}</aside>` : ''}
        </div>
      </div>
    </section>
    ${product.docs.length ? `<section class="product-documents" id="belgeler"><div class="container"><div class="specification-heading"><div><span class="eyebrow">İndirilebilir PDF dosyaları</span><h3>Teknik belgeler</h3></div></div><div class="docs-list">${product.docs.map(doc=>`<a class="doc-link" href="${escapeHtml(doc.url)}" download><span>${escapeHtml(doc.name)}</span><span aria-hidden="true">↓</span></a>`).join('')}</div><p class="docs-note">Donanım revizyonunu ve model adını belgenin başlığından kontrol edin.</p></div></section>` : ''}
  `;
  const official = detail.querySelector('#official-product');
  official.querySelectorAll('[data-store-link]').forEach(a=>{a.href=product.url;});
  for (const number of [5, 6]) {
    for (const phone of [false, true]) {
      const suffix = phone ? '-phone' : '';
      const prefix = `slamkit-section${number}`;
      const box = official.querySelector(`.${prefix}-tab${suffix}`);
      if (!box) continue;
      const controls = [...box.querySelectorAll(`.${prefix}-tab-nav${suffix} a`)];
      const panels = [...box.querySelectorAll(`.${prefix}-tab-con${suffix}`)];
      const backgrounds = [...box.querySelectorAll(`.${prefix}-tab-img${suffix}`)];
      const extra = number === 5 ? official.querySelector(phone ? '.slamkit-section5-tab-con-phone-2-extra' : '.slamkit-section5-tab-con-2-extra') : null;
      function selectPanel(index, animate = true) {
        controls.forEach((control, i) => {
          control.classList.toggle('cur', i === index);
          control.setAttribute('aria-pressed', String(i === index));
        });
        panels.forEach((panel, i) => {
          panel.hidden = i !== index;
          panel.style.display = i === index ? 'block' : 'none';
          if (i === index) {
            panel.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-revealed'));
            if (animate && !reducedMotion) panel.animate([{opacity:.4},{opacity:1}], {duration:350,easing:'ease-out'});
          }
        });
        backgrounds.forEach((image, i) => {
          image.hidden = i !== index;
          image.style.display = i === index ? 'block' : 'none';
        });
        if (extra) { extra.hidden = index !== 1; extra.style.display = index === 1 ? 'block' : 'none'; }
      }
      controls.forEach((control, index) => {
        const id = `${prefix}${suffix}-panel-${index}`;
        panels[index].id = id;
        control.href = `#${id}`;
        control.setAttribute('role', 'button');
        control.setAttribute('aria-controls', id);
        control.addEventListener('click', event => { event.preventDefault(); selectPanel(index); });
        control.addEventListener('keydown', event => {
          if (event.key === ' ') { event.preventDefault(); selectPanel(index); }
        });
      });
      selectPanel(0, false);
    }
  }
  official.querySelectorAll('[data-intro-video]').forEach(video=>{
    if(product.video?.type==='video') video.dataset.mediaSrc=product.video.src;
    else video.closest('.video-responsive')?.remove();
  });
  official.querySelectorAll('video').forEach(video=>{
    const source=video.querySelector('source');
    const src=video.dataset.mediaSrc || source?.getAttribute('src') || video.getAttribute('src');
    if(src) video.dataset.mediaSrc=src;
    source?.remove(); video.removeAttribute('src'); video.muted=true; video.defaultMuted=true;
  });
  officialMediaObserver = new IntersectionObserver(entries=>{
    entries.forEach(({target:video,isIntersecting})=>{
      const onScreen=isIntersecting && video.getBoundingClientRect().width>0;
      if(onScreen && !reducedMotion && !navigator.connection?.saveData){
        if(!video.getAttribute('src') && video.dataset.mediaSrc) video.src=video.dataset.mediaSrc;
        video.play().catch(()=>{});
      } else video.pause();
    });
  },{threshold:.15,rootMargin:'100px'});
  official.querySelectorAll('video').forEach(v=>officialMediaObserver.observe(v));
  officialRevealObserver = new IntersectionObserver(entries=>{
    entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.classList.add('is-revealed');officialRevealObserver.unobserve(target);}});
  },{threshold:.08});
  official.querySelectorAll('[data-reveal]').forEach(e=>officialRevealObserver.observe(e));
  official.querySelectorAll('.swiper-container').forEach(slider=>{
    const wrapper=slider.querySelector('.swiper-wrapper');
    if(!wrapper)return;
    const slides=[...wrapper.children].filter(e=>e.classList.contains('swiper-slide'));
    if(slides.length<2)return;
    slider.classList.add('official-carousel');
    const controls=document.createElement('div');controls.className='official-carousel-controls';
    slides.forEach((slide,index)=>{
      const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',`${product.name} gösterim ${index+1}`);
      button.addEventListener('click',()=>show(index));controls.append(button);
    });slider.append(controls);
    let activeSlide=0;
    function show(index){activeSlide=index;slides.forEach((slide,i)=>{slide.hidden=i!==index;if(i===index){slide.querySelectorAll('[data-reveal]').forEach(e=>e.classList.add('is-revealed'));if(!reducedMotion)slide.animate([{opacity:.3,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:550,easing:'cubic-bezier(.2,.7,.2,1)'});}});[...controls.children].forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));}
    show(0);
    if(!reducedMotion){const timer=setInterval(()=>{const bounds=slider.getBoundingClientRect();if(bounds.width>0&&bounds.top<innerHeight&&bounds.bottom>0&&!slider.matches(':hover')&&!slider.contains(document.activeElement))show((activeSlide+1)%slides.length);},9000);carouselCleanups.push(()=>clearInterval(timer));}
  });
}

function showCatalog() {
  cleanOfficialMedia();
  document.body.classList.remove('has-product-detail');
  videoObserver?.disconnect();
  chapterVideoObserver?.disconnect();
  productsSection.classList.remove('is-detail');
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
      document.body.classList.add('has-product-detail');
      productsSection.classList.add('is-detail');
      detail.hidden = false;
      catalog.hidden = true;
      intro.hidden = true;
    } else showCatalog();
  };
  const finish = (behavior = reducedMotion ? 'auto' : 'smooth') => {
    if (revision !== routeRevision) return;
    if (scroll && (product || location.hash === '#urunler')) productsSection.scrollIntoView({ behavior, block: 'start' });
    if (focus && product) detail.querySelector('#detail-back')?.focus({ preventScroll: true });
    if (focus && !product && location.hash === '#urunler') {
      const heading = document.getElementById('products-heading');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }
  };
  if (scroll && changingView && !reducedMotion && document.startViewTransition) {
    // Position and focus the new view before its animation begins. A delayed
    // finish must not override a document-link click made during the transition.
    document.startViewTransition(() => {
      update();
      finish('auto');
    }).finished.catch(() => {});
  } else {
    update();
    finish();
  }
}

renderCards();
route();
window.addEventListener('hashchange', () => route({ scroll: true, focus: true }));
function returnToTop(event) {
  event.preventDefault();
  const top = detail.hidden ? 0 : productsSection.getBoundingClientRect().top + window.scrollY - document.querySelector('.site-header').offsetHeight;
  window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? 'auto' : 'smooth' });
}
document.querySelectorAll('.floating-top,.site-footer a[href="#top"]').forEach(control=>control.addEventListener('click',returnToTop));
function scrollToProductSection(id) {
  const section = detail.querySelector(`#${id}`);
  if (!section) return;
  const header = document.querySelector('.site-header').getBoundingClientRect().height;
  const navigation = detail.querySelector('nav[aria-label="Ürün içeriği"]').getBoundingClientRect().height;
  window.scrollTo({
    top: Math.max(0, window.scrollY + section.getBoundingClientRect().top - header - navigation - 24),
    behavior: reducedMotion ? 'auto' : 'smooth'
  });
}
detail.addEventListener('click', (event) => {
  if (event.target.closest('#detail-back')) location.hash = 'urunler';
  if (event.target.closest('[data-scroll-docs]')) scrollToProductSection('belgeler');
  const scrollButton = event.target.closest('[data-scroll-target]');
  if (scrollButton) scrollToProductSection(scrollButton.dataset.scrollTarget);
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
