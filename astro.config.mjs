// Astro yapılandırması — statik çıktı (varsayılan): `npm run build` → dist/
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://piramittek.com",
  // Dev sunucusu portu: PORT ortam değişkeni verilirse onu kullan (aynı anda
  // birden fazla oturum çalışabilsin diye), yoksa Astro varsayılanı 4321.
  server: { port: Number(process.env.PORT) || 4321 },
  // Lighthouse bulgusu (Gün 17): sayfa başına ~7 KB CSS için iki ayrı
  // render-bloklayan istek FCP'yi geciktiriyordu — CSS HTML'e gömülür.
  build: { inlineStylesheets: "always" },
});
