# 🚀 Hướng dẫn Triển khai

## 📋 Checklist trước khi deploy

- [x] Tailwind CSS đã cài đặt và cấu hình
- [x] Tất cả components đã convert sang Tailwind
- [x] Dynamic routes có `getStaticPaths()`
- [x] Images đã thêm vào data
- [x] Navigation hoạt động
- [x] Responsive design đã test
- [x] No linter errors

---

## 🛠️ Build & Preview Local

### 1. Development Mode
```bash
npm run dev
# hoặc
bun dev
```
Mở [http://localhost:4321](http://localhost:4321)

### 2. Build Production
```bash
npm run build
# hoặc
bun build
```
Output: `dist/` folder

### 3. Preview Production Build
```bash
npm run preview
# hoặc
bun preview
```

---

## 🌐 Deploy Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

**Hoặc:**
1. Push code lên GitHub
2. Import project vào Vercel
3. Auto-deploy mỗi lần push

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

**Hoặc:**
1. Kết nối GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 3: GitHub Pages
```bash
# Thêm vào astro.config.mjs:
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repo-name',
  // ...
});

# Build
npm run build

# Deploy script (thêm vào package.json):
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Option 4: Cloudflare Pages
1. Push code lên GitHub
2. Kết nối với Cloudflare Pages
3. Build command: `npm run build`
4. Output: `dist`

---

## ⚙️ Environment Variables

Nếu cần (hiện tại không dùng):
```bash
# .env
PUBLIC_API_URL=https://api.example.com
```

---

## 🖼️ Replace Placeholder Images

### Timeline Events
File: `src/data/timeline.ts`

Thay thế URLs với ảnh lịch sử thật:
```typescript
{
  year: 1975,
  title: 'Giải phóng miền Nam...',
  image: 'https://your-real-image-url.jpg', // ← Thay đổi
  // ...
}
```

### Artifacts
File: `src/data/artifacts.ts`

```typescript
{
  id: 'ticket-book',
  title: 'Sổ phiếu...',
  image: 'https://your-real-artifact-photo.jpg', // ← Thay đổi
  // ...
}
```

### Nguồn ảnh đề xuất:
- **Bảo tàng Lịch sử Quốc gia**: Xin phép sử dụng
- **Kho ảnh lưu trữ VN**: Archive.org
- **Báo chí**: kienthuc.net.vn, vtv.vn (xin phép)
- **Unsplash/Pexels**: Free (nhưng không specific VN history)

---

## 🎵 Add Audio (Optional)

### 1. Ambient Sound
Đặt file audio vào `public/assets/audio/`:
```
public/
  assets/
    audio/
      ambience-retro.mp3
```

Layout.astro đã có audio player ở bottom-left.

### 2. Event Audio
Thêm vào timeline data:
```typescript
{
  year: 1975,
  title: '...',
  audio: '/assets/audio/1975-liberation.mp3', // ← Thêm
  // ...
}
```

---

## 🔧 Performance Optimization

### 1. Image Optimization
```bash
# Install sharp (auto image optimization)
npm i sharp
# hoặc
bun add sharp
```

### 2. Compress Images
- Dùng TinyPNG, ImageOptim
- Convert to WebP format
- Lazy loading (đã có sẵn)

### 3. Minify
Astro tự động minify khi build.

---

## 📊 SEO & Meta

### Đã có sẵn:
- `<title>` tags cho mỗi page
- Meta description
- Open Graph tags (có thể thêm)

### Bổ sung (Optional):
```astro
<!-- Trong Layout.astro <head> -->
<meta property="og:title" content="Bảo Tàng Thời Bao Cấp" />
<meta property="og:description" content="Trải nghiệm lịch sử 1975-1986" />
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 🧪 Testing Checklist

- [ ] Homepage loads correctly
- [ ] All sections scroll smoothly
- [ ] Navigation menu works (desktop + mobile)
- [ ] Timeline event links → detail pages
- [ ] Artifact cards → detail pages
- [ ] Reason cards expand/collapse
- [ ] Reason title links → detail pages
- [ ] Mini-game link works
- [ ] All images load
- [ ] Responsive on mobile/tablet
- [ ] No console errors
- [ ] No 404s

---

## 🐛 Common Issues & Fixes

### Issue: "getStaticPaths required"
✅ **Fixed:** All dynamic routes now have `getStaticPaths()`

### Issue: Images not loading
- Check image URLs are valid
- Check `public/` folder structure
- Use CDN or Unsplash URLs

### Issue: Tailwind classes not working
- Ensure `@tailwindcss/vite` is in `astro.config.mjs`
- Import `tailwind.css` in Layout
- Restart dev server

### Issue: Navigation doesn't work
- Use hash anchors: `/#timeline` not `/timeline`
- Check IDs match: `id="timeline"` in component

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "astro": "^5.15.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.16",
    "tailwindcss": "^4.1.16"
  }
}
```

---

## 🎓 Educational Use

Dự án được tạo cho mục đích giáo dục lịch sử Việt Nam.

### License: MIT
- Free to use
- Modify as needed
- Credit appreciated

---

## 📞 Support

Nếu gặp vấn đề:
1. Check `PROJECT_SUMMARY.md`
2. Check `ARCHITECTURE.md`
3. Read Astro docs: https://docs.astro.build
4. Read Tailwind docs: https://tailwindcss.com

---

**🎉 Website hoàn chỉnh, sẵn sàng deploy!**

Chúc bạn triển khai thành công! 🚀

