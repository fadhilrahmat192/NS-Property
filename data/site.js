// ====== DATA UMUM NS PROPERTY ======
// Urutan "daftar" = urutan kartu di beranda. Perumahan baru: tambahkan nama foldernya di sini.
window.NS = {
  site: {
    nama: "NS Property",
    wa: "6282349510272",
    wa_tampil: "+62 823-4951-0272",
    instagram: "https://www.instagram.com/perumahan.pattiro_hill",
    instagram_tampil: "@perumahan.pattiro_hill",
    tiktok: "https://www.tiktok.com/@ns.property.makassar",
    tiktok_tampil: "@ns.property.makassar"
  },
  daftar: ["d-pattiro-hill", "mega-rezky-residence"],
  data: {},
  register(slug, d) { d.slug = slug; this.data[slug] = d; }
};
