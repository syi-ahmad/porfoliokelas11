# 🌟 Portfolio Website - Ubaidillah Syfa Ahmad

Website portfolio personal modern yang dibuat menggunakan ReactJS + Vite.

## 👨‍💻 About

**Nama:** Ubaidillah Syfa Ahmad  
**Kelas:** XI B  
**Sekolah:** SMA IT HSI IDN

Portfolio ini menampilkan profil, skills, projects, dan informasi kontak saya.

## 🛠️ Tech Stack

- **ReactJS** - UI Library
- **Vite** - Build Tool & Development Server
- **React Router DOM** - Client-side Routing
- **Vanilla CSS** - Styling (No Tailwind/Bootstrap)

## ✨ Features

- ✅ Single Page Application (SPA)
- ✅ Responsive Design
- ✅ Modern Glassmorphism UI
- ✅ Smooth Animations
- ✅ Form with localStorage
- ✅ Dynamic Project Cards
- ✅ SEO Friendly

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Project.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── project.css
│   │   └── contact.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Pastikan sudah install:
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository atau download project

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:5173
```

## 📦 Build for Production

Build project untuk production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🌐 Deploy ke Vercel

### Cara 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Untuk production deployment:
```bash
vercel --prod
```

### Cara 2: Deploy via Vercel Dashboard

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository dari GitHub
4. Klik "Deploy"
5. Done! 🎉

### Cara 3: Deploy via GitHub (Continuous Deployment)

1. Push code ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Login ke Vercel dan connect GitHub account
3. Import project dari GitHub
4. Vercel akan otomatis detect Vite configuration
5. Click "Deploy"
6. Setiap push ke GitHub akan otomatis deploy ulang! ✨

## 📄 Environment Variables

Project ini tidak memerlukan environment variables.

## 🎨 Customization

### Ganti Warna

Edit di `src/styles/global.css`:
```css
:root {
  --primary: #7C83FD;
  --secondary: #96BAFF;
  --dark: #1e293b;
  --light: #f8fafc;
}
```

### Tambah Project Baru

Edit file `src/data/projects.js`:
```javascript
const projects = [
  // ... existing projects
  {
    id: 5,
    title: "Project Baru",
    description: "Deskripsi project baru",
    link: "https://example.com"
  }
];
```

### Update Kontak

Edit di `src/pages/Contact.jsx` bagian contact info.

## 📱 Pages

- **Home** (`/`) - Hero section dengan intro
- **About** (`/about`) - Profil, pendidikan, dan skills
- **Projects** (`/project`) - Showcase semua projects
- **Contact** (`/contact`) - Form kontak dengan localStorage

## 🔑 Key Features Explained

### React Router DOM
Menggunakan client-side routing untuk navigasi smooth tanpa reload page.

### localStorage
Form di halaman Contact otomatis menyimpan input ke localStorage, jadi data tidak hilang meskipun browser di-refresh.

### Component Reusability
`ProjectCard` component digunakan berkali-kali untuk render semua project cards.

### Array Mapping
Data project di-render secara dinamis menggunakan `.map()` method.

## 🐛 Troubleshooting

### Port sudah digunakan
Jika port 5173 sudah dipakai, Vite akan otomatis pakai port lain atau edit `vite.config.js`:
```javascript
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Module not found
```bash
npm install
```

### Build error
Hapus folder `node_modules` dan `package-lock.json`, lalu install ulang:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

This project is open source and available for learning purposes.

## 📧 Contact

- **Email:** ubedahmmad@gmail.com
- **Phone:** 089649982681
- **GitHub:** [syi-ahmad](https://github.com/syi-ahmad)
- **LinkedIn:** [Ubaidillah Syfa Ahmad](https://www.linkedin.com/in/na-no-694004372/)
- **Instagram:** [@syi_ahmmad](https://www.instagram.com/syi_ahmmad/)

---

Made with ❤️ by Ubaidillah Syfa Ahmad
# porfoliokelas11
# porfoliokelas11
