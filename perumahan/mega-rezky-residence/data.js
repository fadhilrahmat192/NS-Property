NS.register("mega-rezky-residence", {
  nama: "Mega Rezky Residence",
  lokasi: "Jln Kampus UIN Samata, Gowa",
  pengembang: "PT. Pilar Manggala",
  thumbnail: "foto/thumb.jpg",
  harga_mulai: "Rp 465.000.000",
  label: "Tipe 65 sold out",
  spek_kartu: ["Tipe 46/6x14", "2 kamar tidur, 1 kamar mandi", "Keramik 60x60"],
  promo: ["Hanya bayar DP: gratis biaya akad kredit, notaris, pajak-pajak, asuransi jiwa & kebakaran", "Free kanopi"],
  ringkasan: [
    ["Tipe tersedia", "46/6x14"],
    ["Kamar (tipe 46)", "2 kamar tidur, 1 kamar mandi"],
    ["Lantai", "Keramik 60x60"],
    ["Sertifikat", "SHM"]
  ],
  tipe: [
    {
      nama: "Tipe 46/6x14",
      harga: "Rp 465.000.000",
      simulasi_judul: "Estimasi angsuran per bulan",
      simulasi: {
        kolom: ["DP", "KPR", "5 Tahun", "10 Tahun", "15 Tahun", "20 Tahun"],
        baris: [
          ["Rp 10.000.000", "Rp 455.000.000", "Rp 9.280.000", "Rp 4.790.572", "Rp 3.599.135", "Rp 2.980.421"],
          ["Rp 50.000.000", "Rp 415.000.000", "Rp 8.817.527", "Rp 4.481.718", "Rp 3.390.896", "Rp 2.738.816"],
          ["Rp 100.000.000", "Rp 365.000.000", "Rp 7.576.799", "Rp 3.871.391", "Rp 2.982.354", "Rp 2.408.838"]
        ]
      }
    },
    {
      nama: "Tipe 65/7x14",
      harga: "Rp 700.000.000",
      sold_out: true,
      simulasi_judul: "Estimasi angsuran per bulan",
      simulasi: {
        kolom: ["DP", "KPR", "5 Tahun", "10 Tahun", "15 Tahun", "20 Tahun"],
        baris: [
          ["Rp 70.000.000", "Rp 630.000.000", "Rp 12.898.041", "Rp 6.882.421", "Rp 4.991.210", "Rp 4.517.000"],
          ["Rp 140.000.000", "Rp 560.000.000", "Rp 11.624.001", "Rp 5.991.214", "Rp 4.628.921", "Rp 3.695.011"]
        ]
      }
    }
  ],
  catatan_simulasi: "Asumsi suku bunga angsuran 10% eff p.a. dan dapat berubah sesuai keputusan bank penyedia kredit.",
  harga_termasuk: ["Listrik 1300 Watt (realisasi PLN)", "Air bersih (PDAM)", "IMB (Izin Mendirikan Bangunan)", "Biaya KPR, notaris, dan biaya akad kredit", "SHM (Sertipikat Hak Milik)"],
  harga_belum_termasuk: ["Biaya kelebihan tanah", "Biaya angsuran blokir", "Biaya materai"],
  dekat_dari: ["Dekat dari Hertasning", "9 menit dari Toko Satu Sama", "3 menit dari Kampus UIN Samata", "5 menit dari Kampus Kedokteran Unismuh", "5 menit dari RS Yapika dan RS Unismuh"],
  fasilitas: ["CCTV dalam perumahan", "Mesjid", "Sekolah TK", "Taman bermain untuk anak"],
  syarat_kpr_judul: "Syarat-syarat KPR (2 rangkap)",
  syarat_kpr: [
    "Copy KTP suami / istri",
    "Copy Kartu Keluarga",
    "Copy surat nikah / ket. belum nikah",
    "Photo suami / istri 3x4 masing-masing 2 lbr",
    "Copy NPWP",
    "Copy buku tabungan / rek. gaji",
    "Copy SK pertama & terakhir (PNS)",
    "Surat ket. penghasilan / gaji",
    "Copy SPT, TDP, SITU, SIUP (wiraswasta)"
  ],
  cara_pembayaran: [
    "Uang tanda jadi (UTJ) sebesar Rp 10.000.000 dan biaya administrasi Rp 1.000.000",
    "Sisa uang muka (DP) dibayarkan pada saat berkas ACC bank (jika nasabah KPR)",
    "Kelengkapan berkas diberikan maksimal sampai dengan hari ke-7 setelah uang muka; jika tidak, dianggap mengundurkan diri, unit di-nonblok, UTJ dinyatakan hangus dan uang muka dikembalikan setelah unit terjual kembali",
    "Jika terjadi pembatalan/pengunduran diri dengan alasan apapun, UTJ dinyatakan hangus",
    "Harga kelebihan tanah ditentukan berdasarkan ketentuan pengembang dan harus dibayarkan sebelum proses akad kredit",
    "Apabila terjadi pembatalan/pengunduran diri maupun berkas ditolak pihak bank, DP akan dikembalikan pada saat unit telah terjual"
  ],
  catatan: [
    "Harga dan ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu",
    "Uang muka dan angsuran dapat berubah sesuai keputusan pihak bank penyedia kredit"
  ],
  galeri: [
    { src: "foto/tampak-depan.jpg", ket: "Tampak depan" },
    { src: "foto/depan.jpg", ket: "Depan rumah" },
    { src: "foto/teras.jpg", ket: "Teras rumah" },
    { src: "foto/ruang-keluarga.jpg", ket: "Ruang keluarga" },
    { src: "foto/kamar.jpg", ket: "Kamar" },
    { src: "foto/dapur.jpg", ket: "Dapur" },
    { src: "foto/toilet.jpg", ket: "Toilet" },
    { src: "foto/tanah-belakang.jpg", ket: "Kelebihan tanah belakang" }
  ],
  dokumen: [
    { src: "foto/brosur.jpg", ket: "Brosur & daftar harga" },
    { src: "foto/denah.jpg", ket: "Denah" },
    { src: "foto/flyer.jpg", ket: "Flyer" }
  ],
  video: { src: "video.mp4", poster: "foto/poster.jpg" }
});
