const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.smkpnb.sch.id'; // Ganti dengan domain Anda

const staticRoutes = [
  '/',
  '/about',
  // Tambahkan rute statis lainnya di sini
];

async function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Tambahkan rute statis
  staticRoutes.forEach(route => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });

  // Tambahkan rute dinamis (contoh untuk berita dan galeri)
  // Anda perlu mengganti URL_API_BERITA_ANDA dan URL_API_GALERI_ANDA dengan API yang sebenarnya
  try {
    // Contoh untuk berita
    const newsResponse = await fetch('URL_API_BERITA_ANDA'); // Ganti dengan API berita Anda
    const newsData = await newsResponse.json();
    newsData.forEach(news => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}/news/${news.id}</loc>\n`;
      sitemap += `    <lastmod>${new Date(news.updatedAt || news.createdAt).toISOString().split('T')[0]}</lastmod>\n`;
      sitemap += `    <changefreq>weekly</changefreq>\n`;
      sitemap += `    <priority>0.7</priority>\n`;
      sitemap += `  </url>\n`;
    });
  } catch (error) {
    console.error('Gagal mengambil data berita untuk sitemap:', error);
  }

  try {
    // Contoh untuk galeri
    const galleryResponse = await fetch('URL_API_GALERI_ANDA'); // Ganti dengan API galeri Anda
    const galleryData = await galleryResponse.json();
    galleryData.forEach(item => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}/gallery/${item.id}</loc>\n`;
      sitemap += `    <lastmod>${new Date(item.updatedAt || item.createdAt).toISOString().split('T')[0]}</lastmod>\n`;
      sitemap += `    <changefreq>monthly</changefreq>\n`;
      sitemap += `    <priority>0.6</priority>\n`;
      sitemap += `  </url>\n`;
    });
  } catch (error) {
    console.error('Gagal mengambil data galeri untuk sitemap:', error);
  }

  sitemap += `</urlset>`;

  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap berhasil dibuat di ${sitemapPath}`);
}

generateSitemap();