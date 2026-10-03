// Additional product-specific media from the corresponding SLAMTEC overview pages.
// Paths are relative to https://image.slamtec.com/images/ and are copied locally by scripts/download-manufacturer-extra.js.
const sharedS2Media = [
  { path: 's2/pc/s2-section4-cn.webp', title: '32.000 örnek/sn nokta bulutu' },
  { path: 's2/pc/s2-section6-cn.webp', title: 'Düşük yansıtıcılıktaki hedefler' },
  { path: 's2/pc/s2-section12-cn.webp', title: 'Seri ve ağ bağlantısı seçenekleri' }
];
const sharedMapperMedia = [
  { path: 'mapper/pc/summary-section5-cn.webp', title: 'Bilgisayar bağlantısıyla haritalama' },
  { path: 'mapper/pc/summary-section6-cn.webp', title: 'Hareket sırasında harita üretimi' },
  { path: 'mapper/pc/summary-section10-en.webp', title: 'Mapper arayüz ve bağlantıları' }
];
const extraMedia = {
  'aurora-s': [
    { path: 'auroras/pc/auroras-section4-01.webp', title: 'Geleneksel SLAM çıktısı', compact: true },
    { path: 'auroras/pc/auroras-section4-02.webp', title: 'Aurora S yoğun dokulu haritası', compact: true },
    { path: 'auroras/pc/auroras-section4-03.webp', title: 'Gerçek saha haritası' },
    { path: 'auroras/gif/auroras-section5-01.gif', title: 'Geleneksel özellik çıkarımı' },
    { path: 'auroras/gif/auroras-section5-02.gif', title: 'Aurora S derin öğrenme ile özellik çıkarımı' },
    { path: 'auroras/pc/auroras-section8.webp', title: 'Aurora S arayüz ve bağlantıları' },
    { path: 'auroras/pc/auroras-section11-3.webp', title: 'Dış ortam robotu uygulaması', compact: true },
    { path: 'auroras/pc/auroras-section11-4.webp', title: 'Endüstriyel mobil robot uygulaması', compact: true },
    { path: 'auroras/mp4/auroras-section5.mp4', title: 'Çevrim kapama ve yeniden konumlama', kind: 'video' },
    { path: 'auroras/mp4/auroras-section6.mp4', title: 'Yoğun derinlik algısı', kind: 'video' },
    { path: 'auroras/mp4/auroras-section7.mp4', title: 'Semantik nesne tanıma', kind: 'video' },
    { path: 'auroras/mp4/auroras-section10.mp4', title: '3D sahne yeniden oluşturma', kind: 'video' }
  ],
  aurora: [
    { path: 'aurora/pc/aurora-section3-bg.webp', title: 'Aurora sensör mimarisi' },
    { path: 'aurora/gif/aurora-section4-3-orb.gif', title: 'Geleneksel görsel özellik çıkarımı' },
    { path: 'aurora/gif/aurora-section4-3-dnn.gif', title: 'Aurora derin öğrenme yaklaşımı' },
    { path: 'aurora/pc/aurora-section8-01.webp', title: 'Aurora kurulum görünümü', compact: true },
    { path: 'aurora/pc/aurora-section10-01.webp', title: 'İnsansı robot uygulaması', compact: true },
    { path: 'aurora/mp4/aurora-section4-2.mp4', title: 'Hızlı harekette konumlama', kind: 'video' },
    { path: 'aurora/mp4/aurora-section6-2-3d.mp4', title: '3D harita gösterimi', kind: 'video' }
  ],
  'lpx-t1': [
    { path: 't1/pc/t1-section1-cn.webp', title: 'Uzun menzilli algılama' },
    { path: 't1/pc/t1-section2-cn.gif', title: 'Yüksek hızlı örnekleme' },
    { path: 't1/pc/t1-section6-en.webp', title: 'Geliştirme platformları' },
    { path: 't1/pc/t1-section7-02.webp', title: 'AGV engel algılama uygulaması', compact: true }
  ],
  slamkit: [
    { path: 'slamkit/pc/slamkit-section5-2-1-cn.webp', title: 'Çevrim içi harita oluşturma' },
    { path: 'slamkit/pc/slamkit-dev.gif', title: 'Geliştirme ortamı gösterimi' },
    { path: 'slamkit/pc/slamkit-section7-1-cn.webp', title: 'Temizlik robotu uygulaması', compact: true },
    { path: 'slamkit/pc/slamkit-section7-3-cn.webp', title: 'AGV uygulaması', compact: true }
  ],
  'lpx-e3': [
    { path: 'e3/pc/e3-section2-en.webp', title: 'Alan izleme işlem akışı' },
    { path: 'e3/pc/e3-section4-1-en.webp', title: 'İzleme alanı ve alan seti', compact: true },
    { path: 'e3/pc/e3-section4-2-en.webp', title: 'İzleme yazılımı arayüzü', compact: true },
    { path: 'e3/pc/e3-section5-2-en.webp', title: 'Esnek LiDAR yerleşimi' }
  ],
  s2l: sharedS2Media,
  s2: sharedS2Media,
  s2e: sharedS2Media,
  a3: [
    { path: 'a3/pc/bg_4.webp', title: 'İç ve dış mekân kullanımı' },
    { path: 'a3/pc/bg_5.webp', title: '360° tarama alanı' },
    { path: 'a3/pc/bg_6.webp', title: 'İnce sensör gövdesi' }
  ],
  a2m12: [
    { path: 'a2/a2-overview/16k.gif', title: 'A2M12 için 16 kHz tarama örneği' },
    { path: 'a2/a2-overview/summary-section3.webp', title: 'A2 serisi ince gövde' },
    { path: 'a2/a2-overview/summary-section6.webp', title: 'Fırçasız motor yapısı' }
  ],
  a2m8: [
    { path: 'a2/a2-overview/8k.gif', title: 'A2M8 için 8 kHz tarama örneği' },
    { path: 'a2/a2-overview/summary-section3.webp', title: 'A2 serisi ince gövde' },
    { path: 'a2/a2-overview/summary-section6.webp', title: 'Fırçasız motor yapısı' }
  ],
  a1: [
    { path: 'a1/a1-overview/8k.gif', title: 'A1 için 8 kHz tarama örneği' },
    { path: 'a1/a1-overview/summary-section4.webp', title: 'Kablosuz güç ve veri aktarımı' },
    { path: 'a1/a1-overview/summary-section7-en.webp', title: 'Tak ve çalıştır bağlantı' }
  ],
  s3: [
    { path: 's3/pc/s3-section3-cn.webp', title: '32.000 örnek/sn tarama' },
    { path: 's3/pc/s3-section4-cn.webp', title: 'Yüksek ortam ışığında çalışma' },
    { path: 's3/pc/s3-section6-cn.webp', title: 'RPLIDAR uyumlu seri yapısı' }
  ],
  m2m3: sharedMapperMedia,
  m2m2: sharedMapperMedia
};
if (typeof module !== 'undefined') module.exports = extraMedia;
