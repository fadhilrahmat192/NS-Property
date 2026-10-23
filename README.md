# Website NS Property

Website statis (HTML/CSS/JS), tanpa database. Bisa dihosting gratis (Netlify, Vercel, GitHub Pages, Cloudflare Pages) dan bisa dibuka langsung dengan double-click `index.html`.

## Mengubah kontak / urutan perumahan
Edit `data/site.js` (nomor WA, Instagram, TikTok, dan array `daftar`).

## Menambah perumahan baru
1. Salin folder `perumahan/mega-rezky-residence` dan ganti namanya (huruf kecil, tanpa spasi), mis. `perumahan/nama-baru`.
2. Ganti isi folder `foto/` dengan foto baru, lalu edit `data.js` di dalamnya (nama, harga, foto, dst). Bagian yang dihapus/dikosongkan otomatis tidak tampil.
   Pada baris pertama `data.js`, ganti slug `NS.register("nama-baru", {...` agar sama dengan nama folder.
3. Tambahkan `"nama-baru"` ke `daftar` di `data/site.js`.

## Update harga / status
Ubah angkanya di `data.js` perumahan terkait. Untuk menandai unit habis, tambahkan `sold_out: true` pada tipe tersebut.
