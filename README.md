# murselsen.com

## Proje Özeti

`murselsen.com`, React ve Vite kullanılarak geliştirilmiş hızlı, tek sayfa (SPA) uygulamasıdır. Amaç; portfolyo,
projeler ve iletişim bilgilerini sergileyen, erişilebilir ve performans odaklı bir kişisel web sitesidir.

## Öne Çıkan Özellikler

- React + Vite ile hızlı geliştirme ve küçük üretim paketleri.
- ESLint ile kod kalitesi kontrolü.
- GitHub API'den repo listeleme ve `updated_at` alanına göre sıralama.
- Basit, erişilebilir ve responsive bileşenler.
- Kolay dağıtım (Vercel, Netlify, Cloudflare Pages uyumlu).

## Teknolojiler

- React
- Vite
- JavaScript (ES2020+)
- ESLint
- Axios (API istekleri için)
- CSS modülleri ve basit, bileşen bazlı stiller

## Hızlı Başlangıç

Aşağıdaki adımlar proje kökünde (bu README dosyasının bulunduğu yerde) çalıştırılmalıdır:

```bash
npm install
npm run dev
```

Üretim için:

```bash
npm run build
npm run preview
```

> Not: Ortamınız Windows ise varsayılan kabuk `cmd.exe` olduğundan komutlar aynen yukarıdaki gibidir.

## Dizin Yapısı (Özet)

- `src/` — Uygulama kaynak kodu
    - `components/` — Tekrar kullanılabilir bileşenler
    - `pages/` — Sayfalar
    - `redux/` — Basit store ve async işlemler
    - `assets/` — Görseller
- `public/` — Statik varlıklar
- `vite.config.js`, `package.json`, vs. — Yapı ve bağımlılık dosyaları

(Not: Proje yapısı zaten repository'de bulunuyor; yukarıda yalnızca özet verildi.)

## GitHub Reposunu `updated_at` alanına göre sıralama (örnek)

Aşağıdaki örnek, GitHub API'den çekilen repoları `updated_at` alanına göre en güncelden en eskiye doğru sıralar. Projede
benzer bir fonksiyon `redux/thunk.js` veya ilgili servis dosyasında olabilir; burayı inceleyip aynısını uygulamak
yeterlidir.

```javascript
import axios from 'axios';

export async function fetchRepos(username, token) {
    const headers = token
        ? {Authorization: `token ${token}`}
        : undefined;

    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {headers});

    // updated_at alanına göre azalan sırada (en güncel ilk)
    return response.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}
```

Kullanım notları:

- GitHub API çağrıları rate limit'e tabidir. Yoğun isteklerde `GITHUB_TOKEN`/`VITE_GITHUB_TOKEN` kullanmanız önerilir.
- `updated_at` alanı ISO 8601 formatındadır; `new Date(...)` ile güvenli karşılaştırma yapılır.

## Ortam Değişkenleri

Projede kullanılabilecek örnek `.env` değişkenleri (Vite ile kullanırken `VITE_` öneki gereklidir):

- `VITE_GITHUB_TOKEN` — (opsiyonel) GitHub kişisel erişim token'ı
- `VITE_API_BASE_URL` — (opsiyonel) özel backend varsa temel URL

## Testler ve Lint

Projede test veya lint komutları `package.json` içinde tanımlıysa aşağıdaki komutlar kullanılabilir:

```bash
npm run test
npm run lint
npm run lint:fix
```

Eğer proje test altyapısı yoksa, küçük birim testleri eklemek için Vitest veya Jest + React Testing Library önerilir.

## Kodlama Kuralları ve İpuçları

- Bileşenleri küçük, tek sorumluluklu tutun.
- Global state gerekiyorsa Redux veya Context tercih edin; basit durumlar için local state yeterlidir.
- API çağrılarında hata durumlarını (network hatası, 4xx/5xx) yakalayın ve kullanıcıya anlamlı mesaj verin.

Örnek hata yakalama:

```javascript
try {
    const repos = await fetchRepos('murselsen', process.env.VITE_GITHUB_TOKEN);
    // işle
} catch (err) {
    console.error('Repo çekme hatası', err);
}
```

## Deployment

- Vercel, Netlify veya Cloudflare Pages ile kolayca deploy edilebilir.
- Build komutu: `npm run build`
- Output klasörü: Vite varsayılanı `dist/`

## Katkıda Bulunma

- Issue açabilir veya pull request gönderebilirsiniz.
- Kod eklerken ESLint kurallarına ve mevcut stil rehberine uymanızı rica ederiz.
- Yeni özellik veya düzeltme eklerken ilgili testleri ekleyin.

## Lisans

MIT

## İletişim

- Repo: https://github.com/murselsen/murselsen.com
- Geliştirici: murselsen (GitHub üzerinden iletişim kurabilirsiniz)
