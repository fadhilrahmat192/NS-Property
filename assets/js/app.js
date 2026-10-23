(() => {
const S = NS.site;
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const wa = t => `https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`;
const li = a => (a || []).map(x => `<li>${esc(x)}</li>`).join("");
const load = src => new Promise(r => { const s = document.createElement("script"); s.src = src; s.onload = s.onerror = r; document.head.appendChild(s); });
const loadAll = slugs => Promise.all(slugs.map(s => load(`perumahan/${s}/data.js`)));
const img = (d, p) => `perumahan/${d.slug}/${p}`;

const header = () => `<header class="top"><div class="wrap"><a class="logo" href="index.html">NS <span>Property</span></a>
<a class="btn wa sm" href="${wa("Halo NS Property, saya ingin bertanya tentang perumahan.")}" target="_blank" rel="noopener">WhatsApp</a></div></header>`;
const footer = () => `<footer><div class="wrap">© ${new Date().getFullYear()} ${esc(S.nama)}. Harga dan ketentuan dapat berubah sewaktu-waktu; hubungi kami untuk informasi terbaru.</div></footer>
<a class="btn wa fab" href="${wa("Halo NS Property, saya ingin bertanya tentang perumahan.")}" target="_blank" rel="noopener">Chat WhatsApp</a>
<div class="lb" id="lb"><img alt=""></div>`;
const contact = () => `<section id="kontak"><div class="wrap"><h2>Hubungi Kami</h2><div class="contact">
<a href="${wa("Halo NS Property, saya ingin bertanya tentang perumahan.")}" target="_blank" rel="noopener"><b>WhatsApp (utama)</b><span>${esc(S.wa_tampil)}</span></a>
<a href="${esc(S.instagram)}" target="_blank" rel="noopener"><b>Instagram</b><span>${esc(S.instagram_tampil)}</span></a>
<a href="${esc(S.tiktok)}" target="_blank" rel="noopener"><b>TikTok</b><span>${esc(S.tiktok_tampil)}</span></a></div></div></section>`;

function home(list) {
  document.getElementById("app").innerHTML = header() + `
<div class="wrap hero"><h1>${esc(S.nama)}</h1><p>Informasi perumahan yang kami pasarkan. Hubungi langsung via WhatsApp untuk survei lokasi dan konsultasi.</p>
<div class="row"><a class="btn wa" href="${wa("Halo NS Property, saya ingin bertanya tentang perumahan.")}" target="_blank" rel="noopener">Chat WhatsApp</a><a class="btn" href="#perumahan">Lihat Perumahan</a></div></div>
<section id="perumahan"><div class="wrap"><h2>Perumahan</h2><div class="grid">${list.map(d => `
<article class="card"><a href="perumahan.html?p=${d.slug}"><img class="im" loading="lazy" src="${img(d, d.thumbnail)}" alt="${esc(d.nama)}"></a>
<div class="bd"><h3>${esc(d.nama)}</h3><div class="mut">${esc(d.lokasi)}</div>
${d.label ? `<span class="tag">${esc(d.label)}</span>` : ""}
${d.spek_kartu ? `<ul class="spek">${li(d.spek_kartu)}</ul>` : ""}
<div class="row"><a class="btn solid sm" href="perumahan.html?p=${d.slug}">Lihat Detail</a>
<a class="btn wa sm" href="${wa(`Halo NS Property, saya tertarik dengan ${d.nama}. Mohon info lebih lanjut.`)}" target="_blank" rel="noopener">Tanya via WA</a></div></div></article>`).join("")}</div></div></section>`
    + contact() + footer();
}

const tbl = s => s && s.baris ? `<div class="tbl"><table><thead><tr>${s.kolom.map(k => `<th>${esc(k)}</th>`).join("")}</tr></thead><tbody>${s.baris.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
const gal = (a, d) => `<div class="gal">${a.map(f => `<figure><img loading="lazy" src="${img(d, f.src)}" alt="${esc(f.ket)}" data-zoom><figcaption>${esc(f.ket)}</figcaption></figure>`).join("")}</div>`;

function detail(d) {
  document.title = `${d.nama} – NS Property`;
  const msg = `Halo NS Property, saya tertarik dengan ${d.nama}. Mohon info lebih lanjut.`;
  const sec = (cond, html) => cond ? html : "";
  document.getElementById("app").innerHTML = header() + `
<div class="wrap crumb"><a href="index.html">← Semua perumahan</a></div>
<div class="wrap dh"><h1>${esc(d.nama)}</h1><div class="mut">${esc(d.lokasi)}${d.pengembang ? ` · Pengembang: ${esc(d.pengembang)}` : ""}</div>
${d.harga_mulai ? `<div class="price" style="margin:8px 0">Mulai ${esc(d.harga_mulai)}</div>` : ""}
<div class="row"><a class="btn wa" href="${wa(msg)}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div></div>
<div class="wrap"><img class="cover" src="${img(d, d.thumbnail)}" alt="${esc(d.nama)}"></div>
${sec(d.promo, `<section><div class="wrap"><div class="promo"><h3>Promo</h3><ul>${li(d.promo)}</ul>${d.syarat_utama ? `<div class="note">Syarat utama: ${esc(d.syarat_utama)}</div>` : ""}</div></div></section>`)}
${sec(d.ringkasan, `<section><div class="wrap"><h2>Ringkasan</h2><div class="chips">${d.ringkasan.map(([a, b]) => `<div class="chip"><b>${esc(a)}</b>${esc(b)}</div>`).join("")}</div></div></section>`)}
${sec(d.tipe, `<section><div class="wrap"><h2>Tipe & Harga</h2>${d.tipe.map(t => `<div class="tipe ${t.sold_out ? "so" : ""}"><div class="th"><h3>${esc(t.nama)} ${t.sold_out ? '<span class="tag red">SOLD OUT</span>' : ""}</h3><div class="price">${esc(t.harga)}</div></div>
${t.blok ? `<div class="mut">Blok: ${esc(t.blok)}</div>` : ""}${t.keterangan ? `<div class="mut">${esc(t.keterangan)}</div>` : ""}
${t.simulasi ? `<div style="margin-top:8px;font-weight:600">${esc(t.simulasi_judul || "Simulasi angsuran")}</div>${tbl(t.simulasi)}` : ""}</div>`).join("")}
${d.catatan_simulasi ? `<div class="note">${esc(d.catatan_simulasi)}</div>` : ""}</div></section>`)}
${sec(d.harga_termasuk || d.harga_belum_termasuk, `<section><div class="wrap two">
${d.harga_termasuk ? `<div class="box"><h3>Harga sudah termasuk</h3><ul>${li(d.harga_termasuk)}</ul></div>` : ""}
${d.harga_belum_termasuk ? `<div class="box"><h3>Harga belum termasuk</h3><ul>${li(d.harga_belum_termasuk)}</ul></div>` : ""}</div></section>`)}
${sec(d.galeri, `<section><div class="wrap"><h2>Foto</h2>${gal(d.galeri, d)}</div></section>`)}
${sec(d.video, `<section><div class="wrap"><h2>Video</h2><video controls preload="none" playsinline poster="${img(d, d.video?.poster || "")}" src="${img(d, d.video?.src || "")}"></video></div></section>`)}
${sec(d.dokumen, `<section><div class="wrap"><h2>Brosur, Denah & Flyer</h2>${gal(d.dokumen, d)}</div></section>`)}
${sec(d.dekat_dari || d.fasilitas, `<section><div class="wrap two">
${d.dekat_dari ? `<div class="box"><h3>Lokasi dekat dari</h3><ul>${li(d.dekat_dari)}</ul></div>` : ""}
${d.fasilitas ? `<div class="box"><h3>Fasilitas perumahan</h3><ul>${li(d.fasilitas)}</ul></div>` : ""}</div></section>`)}
${sec(d.cara_pembayaran || d.syarat_kpr, `<section><div class="wrap two">
${d.cara_pembayaran ? `<div class="box"><h3>Cara pembayaran</h3><ul>${li(d.cara_pembayaran)}</ul></div>` : ""}
${d.syarat_kpr ? `<div class="box"><h3>${esc(d.syarat_kpr_judul || "Syarat KPR")}</h3><ol>${li(d.syarat_kpr)}</ol></div>` : ""}</div></section>`)}
${sec(d.catatan, `<section><div class="wrap"><div class="box"><h3>Catatan</h3><ul>${li(d.catatan)}</ul></div></div></section>`)}
<section><div class="wrap"><div class="promo" style="text-align:center"><h3>Tertarik dengan ${esc(d.nama)}?</h3><a class="btn wa" href="${wa(msg)}" target="_blank" rel="noopener">Hubungi via WhatsApp</a></div></div></section>`
    + contact() + footer();
}

document.addEventListener("click", e => {
  const lb = document.getElementById("lb"); if (!lb) return;
  if (e.target.matches("[data-zoom]")) { lb.querySelector("img").src = e.target.src; lb.classList.add("on"); }
  else if (lb.classList.contains("on")) lb.classList.remove("on");
});

(async () => {
  if (document.body.dataset.page === "home") { await loadAll(NS.daftar); home(NS.daftar.map(s => NS.data[s]).filter(Boolean)); }
  else {
    const slug = new URLSearchParams(location.search).get("p");
    if (!NS.daftar.includes(slug)) { location.replace("index.html"); return; }
    await loadAll([slug]); NS.data[slug] ? detail(NS.data[slug]) : location.replace("index.html");
  }
})();
})();
