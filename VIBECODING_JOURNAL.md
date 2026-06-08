# 📔 VIBECODING JOURNAL - Portfolio Website

**Nama:** Ubaidillah Syfa Ahmad  
**Kelas:** XI B  
**Sekolah:** SMA IT HSI IDN  
**Tanggal:** Juni 2024

---

## 🎯 Tentang Project Ini

Ini adalah project portfolio website pertama saya yang dibuat dengan ReactJS dan Vite. Website ini dibuat untuk menampilkan profil, skill, project-project yang sudah saya buat, dan juga informasi kontak saya. Semoga dengan adanya portfolio ini, saya bisa lebih mudah dalam menunjukkan karya-karya saya ke dunia luar!

---

## 🛠️ Stack Teknologi Yang Digunakan

### 1. **ReactJS**
**Apa itu?**  
React adalah library JavaScript untuk membuat user interface yang interaktif. React menggunakan konsep component, jadi kita bisa bikin bagian-bagian kecil yang bisa dipakai ulang.

**Kenapa pakai React?**
- **Component-based**: Bikin website jadi lebih terstruktur dan mudah di-maintain
- **Reusable**: Component bisa dipakai berkali-kali (contoh: ProjectCard bisa dipake untuk semua project)
- **Popular**: Banyak tutorial dan komunitas yang support
- **React Hooks**: useState, useEffect bikin coding jadi lebih simple dan modern

### 2. **Vite**
**Apa itu?**  
Vite adalah build tool yang super cepat. Dia kayak mesin yang bikin React app kita bisa jalan.

**Kenapa pakai Vite?**
- **Super fast**: Loading dan reload cepat banget pas lagi development
- **Modern**: Support fitur-fitur JavaScript terbaru
- **Simple**: Konfigurasinya mudah dipahami
- **Hot Module Replacement (HMR)**: Pas kita ubah code, langsung keliatan hasilnya tanpa reload penuh

### 3. **React Router DOM**
**Apa itu?**  
Library buat bikin routing di React. Jadi bisa pindah-pindah halaman tanpa reload browser.

**Kenapa pakai React Router?**
- **Single Page Application**: Website tetap di 1 halaman tapi kontennya berubah
- **Smooth Navigation**: Perpindahan halaman jadi mulus tanpa loading
- **Clean URLs**: Bisa bikin URL yang rapi (/, /about, /project, /contact)

### 4. **Vanilla CSS**
**Apa itu?**  
CSS biasa tanpa framework kayak Tailwind atau Bootstrap.

**Kenapa pakai Vanilla CSS?**
- **Full Control**: Kita bisa bikin style sesuka hati tanpa batasan framework
- **Learning**: Belajar fundamental CSS yang penting banget
- **Custom Design**: Bisa bikin design yang unique dan sesuai keinginan
- **Performance**: Lebih ringan karena gak ada CSS yang gak kepake

---

## 💡 Strategi Prompting Yang Digunakan

Waktu minta bantuan AI untuk bikin project ini, saya pakai strategi-strategi berikut:

### 1. **Prompt Yang Jelas dan Detail**
Saya jelasin dengan detail apa yang saya mau:
- Stack teknologi yang dipakai (React + Vite)
- Apa yang TIDAK BOLEH dipakai (Tailwind, Bootstrap, dll)
- Struktur folder yang diinginkan
- Fitur-fitur yang harus ada
- Data yang perlu ditampilkan

**Contoh:**
```
"Buatkan project Portfolio menggunakan ReactJS + Vite, 
TIDAK BOLEH pakai Tailwind/Bootstrap, gunakan Vanilla CSS, 
dengan routing Home/About/Project/Contact..."
```

### 2. **Memberikan Data Lengkap**
Saya kasih semua data yang diperluin dari awal:
- Identitas (nama, kelas, sekolah)
- List skills
- Data project dalam bentuk array of objects
- Kontak lengkap

Dengan begini, AI gak perlu nebak-nebak dan langsung bisa bikin sesuai data saya.

### 3. **Spesifik Tentang Fitur**
Untuk setiap halaman, saya jelasin fitur yang harus ada:
- Home: Hero section dengan animasi
- About: Skill cards pakai .map()
- Project: Wajib pakai .map() untuk render cards
- Contact: Form dengan localStorage dan useState

### 4. **Request Output Yang Lengkap**
Saya minta AI kasih:
- Semua source code file
- CSS lengkap untuk setiap component
- Cara instalasi
- Cara running
- Cara deploy ke Vercel

---

## 🐛 Problem Solving & Bug Fixing

### Problem 1: React Router Tidak Berfungsi

**Masalah:**  
Pas pertama kali install React Router, website error dan muncul pesan "BrowserRouter is not defined" atau routing gak jalan.

**Penyebab:**
- Lupa install package `react-router-dom`
- Import statement salah
- Struktur routing belum benar

**Solusi:**
1. Pastikan install dulu: `npm install react-router-dom`
2. Import yang benar di App.jsx:
   ```jsx
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   ```
3. Wrap semua component dengan `<Router>`:
   ```jsx
   <Router>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       {/* routes lainnya */}
     </Routes>
   </Router>
   ```

**Pembelajaran:**  
Setiap kali pakai library external, harus dipastikan:
- Sudah di-install via npm
- Import statement-nya benar
- Cara pakainya sesuai dokumentasi

---

### Problem 2: localStorage Tidak Menyimpan Data

**Masalah:**  
Form di halaman Contact tidak menyimpan data ke localStorage, atau data hilang pas diketik.

**Penyebab:**
- Lupa pakai `useState` untuk manage form data
- `useEffect` tidak di-setup dengan benar
- Event handler `onChange` tidak terupdate state

**Solusi:**
1. Setup state untuk form data:
   ```jsx
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     message: ''
   });
   ```

2. Load data dari localStorage saat component mount:
   ```jsx
   useEffect(() => {
     const savedData = localStorage.getItem('contactFormData');
     if (savedData) {
       setFormData(JSON.parse(savedData));
     }
   }, []);
   ```

3. Simpan ke localStorage setiap kali state berubah:
   ```jsx
   useEffect(() => {
     localStorage.setItem('contactFormData', JSON.stringify(formData));
   }, [formData]);
   ```

4. Handle perubahan input:
   ```jsx
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData(prev => ({
       ...prev,
       [name]: value
     }));
   };
   ```

**Pembelajaran:**  
- `useState` untuk manage data yang bisa berubah
- `useEffect` dengan dependency array kosong `[]` = jalan sekali pas mount
- `useEffect` dengan `[formData]` = jalan setiap formData berubah
- localStorage hanya bisa simpan string, jadi harus pakai `JSON.stringify()` dan `JSON.parse()`

---

### Problem 3: CSS Tidak Muncul atau Berantakan

**Masalah:**  
Styling tidak muncul atau beberapa element berantakan.

**Penyebab:**
- CSS file tidak di-import
- Class name typo atau salah
- CSS specificity yang salah
- Lupa pakai `className` di JSX (bukan `class`)

**Solusi:**
1. Pastikan import CSS di setiap component:
   ```jsx
   import '../styles/home.css';
   ```

2. Pakai `className` bukan `class`:
   ```jsx
   <div className="hero"> {/* BENAR ✅ */}
   <div class="hero"> {/* SALAH ❌ */}
   ```

3. Check di browser DevTools (F12) apakah CSS sudah ke-load
4. Pastikan selector CSS match dengan className di JSX

**Pembelajaran:**  
- Di React, pakai `className` bukan `class`
- Setiap CSS file harus di-import di component yang pakai
- Browser DevTools adalah teman terbaik untuk debug CSS

---

### Problem 4: Array .map() Error

**Masalah:**  
Error "map is not a function" atau data tidak muncul.

**Penyebab:**
- Variable yang di-map bukan array
- Import data salah
- Data belum ready pas component render

**Solusi:**
1. Pastikan data yang di-import adalah array:
   ```jsx
   import projects from '../data/projects';
   ```

2. Export data dengan benar di file data:
   ```jsx
   const projects = [ /* data */ ];
   export default projects;
   ```

3. Gunakan key yang unique saat map:
   ```jsx
   {projects.map((project) => (
     <ProjectCard key={project.id} project={project} />
   ))}
   ```

**Pembelajaran:**  
- Setiap kali pakai `.map()` di React, wajib kasih `key` prop yang unique
- Key membantu React track perubahan element
- Cek dulu apakah data sudah di-import dengan benar

---

## 🎨 Design Decision

### Warna
Saya pilih warna-warna yang soft dan modern:
- **Primary (#7C83FD)**: Ungu kebiruan yang modern
- **Secondary (#96BAFF)**: Biru soft yang friendly
- **Dark (#1e293b)**: Untuk text yang readable
- **Light (#f8fafc)**: Background yang bersih

**Alasan:** Kombinasi warna ini kasih kesan modern, friendly, dan gak terlalu terang di mata.

### Typography
Pakai font **Poppins** dari Google Fonts.

**Alasan:** Poppins adalah font yang clean, modern, dan mudah dibaca. Perfect untuk website portfolio!

### Glassmorphism
Semua card pakai efek glassmorphism (kaca tembus pandang).

**Alasan:** Trend design yang lagi hits dan bikin website keliatan modern + elegant.

### Animasi
Pakai animasi-animasi subtle:
- Slide in untuk hero section
- Float untuk card di home
- Fade in up untuk cards
- Hover effects

**Alasan:** Animasi bikin website lebih hidup tapi gak berlebihan.

---

## 📚 Hal-Hal Yang Dipelajari

### 1. React Component Architecture
Belajar gimana caranya bikin component yang reusable dan terstruktur rapi.

### 2. React Hooks
- **useState**: Untuk manage state
- **useEffect**: Untuk side effects kayak localStorage

### 3. React Router
Cara bikin Single Page Application dengan routing yang smooth.

### 4. Array Methods
Pakai `.map()` untuk render list data secara dinamis.

### 5. localStorage API
Simpan dan ambil data dari browser storage.

### 6. CSS Modern
- Flexbox & Grid
- Animations & Transitions
- Glassmorphism effect
- Responsive design

### 7. Git & Deployment
Cara deploy website ke Vercel.

---

## 🚀 Next Steps

Ini adalah project pertama saya, dan masih banyak yang bisa ditingkatkan:

1. **Tambah Dark Mode**: Biar bisa switch antara light/dark theme
2. **Loading Animation**: Kasih loading saat pertama kali buka website
3. **Form Validation**: Validasi form yang lebih advance
4. **More Projects**: Nambah project-project baru yang saya bikin
5. **Blog Section**: Mungkin nanti bisa nambah section blog untuk sharing ilmu
6. **Optimization**: Bikin website lebih cepat dan optimal

---

## 🙏 Penutup

Bikin website portfolio ini adalah pengalaman yang sangat seru! Saya jadi lebih paham tentang React, cara kerja component, hooks, dan routing. Walaupun ada beberapa bug dan masalah, tapi dengan googling dan trial-error, akhirnya semua bisa solved.

Big thanks to:
- Guru-guru yang udah ngajarin fundamental programming
- Internet dan Stack Overflow yang selalu ada buat jawab pertanyaan
- AI Assistant yang bantuin explain konsep-konsep yang susah
- Temen-temen yang kasih masukan dan dukungan

**Keep learning, keep coding! 🚀**

---

*Dibuat dengan ❤️ oleh Ubaidillah Syfa Ahmad*  
*SMA IT HSI IDN - Kelas XI B*
