# Bảo Tàng Thời Bao Cấp - Trải nghiệm Tương tác

Dự án bảo tàng số về giai đoạn kinh tế bao cấp Việt Nam (1975-1986), cung cấp trải nghiệm tương tác về lịch sử thời kỳ này.

## 🏛️ Giới thiệu

Website bảo tàng số về thời bao cấp giúp người xem hiểu rõ:
- **Tại sao** Việt Nam áp dụng mô hình kinh tế kế hoạch hóa tập trung sau 1975
- **Dòng thời gian** các sự kiện quan trọng từ 1975-1986
- **Hiện vật** và tài liệu lịch sử thời bao cấp
- **Trải nghiệm tương tác** để khám phá lịch sử

## 🏗️ Kiến trúc dự án (Clean Architecture)

Dự án tuân theo nguyên tắc Clean Architecture với phân tách rõ ràng các layer:

```
src/
├── data/                  # Data Layer - Dữ liệu thuần túy
│   ├── timeline.ts        # Dữ liệu dòng thời gian 1975-1986
│   ├── reasons.ts         # Lý do áp dụng kinh tế bao cấp
│   └── artifacts.ts       # Hiện vật và kỷ vật
│
├── types/                 # Type Definitions
│   └── index.ts           # Types và interfaces chung
│
├── components/            # Presentation Layer - UI Components
│   ├── MuseumHero.astro   # Hero section với animation
│   ├── Timeline.astro     # Dòng thời gian tương tác
│   ├── ReasonsSection.astro # Phần lý do áp dụng bao cấp
│   ├── ArtifactGallery.astro # Gallery hiện vật với filter
│   └── InteractiveExperience.astro # Trải nghiệm tương tác
│
├── layouts/               # Layout Layer
│   └── Layout.astro       # Master layout
│
└── pages/                 # Pages Layer
    └── index.astro        # Trang chủ
```

### Các Layer chính:

#### 1. **Data Layer** (`src/data/`)
- Chứa dữ liệu thuần túy, độc lập với UI
- Exports TypeScript interfaces và data
- Hàm helper để filter và query

#### 2. **Types Layer** (`src/types/`)
- Định nghĩa types/interfaces dùng chung
- Đảm bảo type safety

#### 3. **Component Layer** (`src/components/`)
- Các component Astro độc lập
- Tái sử dụng
- Styled components
- Logic tương tác trong `<script>`

#### 4. **Layout Layer** (`src/layouts/`)
- Wrapper, meta, fonts

#### 5. **Pages Layer** (`src/pages/`)
- Compose component
- Routing

## 🎨 Tính năng UI/UX

### ✨ Animations & Effects
- **Particle animation** trong hero section
- **Parallax scrolling** cảnh
- **Intersection Observer** cho fade/slide khi scroll
- **Hover effects** trên cards (scale, shadow, border)
- **Smooth transitions** giữa các trang

### 🎭 Interactions
- **Timeline tương tác** với marker animations
- **Filter gallery** theo category
- **Modal** chi tiết hiện vật
- **Expandable cards** trong phần lý do
- **Smooth scrolling** đến section

### 📱 Responsive Design
- **Mobile-first**
- Breakpoints: mobile, tablet, desktop
- Ẩn/hiện theo viewport
- Touch-friendly

## 🚀 Cài đặt và Chạy

### Prerequisites
- Node.js 18+ hoặc Bun
- npm, yarn, hoặc bun

### Installation
```bash
# Sử dụng npm
npm install

# Hoặc sử dụng bun (recommended)
bun install
```

### Development
```bash
npm run dev
# hoặc
bun dev
```
Mở [http://localhost:4321](http://localhost:4321)

### Build
```bash
npm run build
# hoặc
bun build
```

### Preview
```bash
npm run preview
# hoặc
bun preview
```

## 📊 Cấu trúc dữ liệu

### Timeline Events
```typescript
interface TimelineEvent {
  year: number;
  month?: number;
  title: string;
  description: string;
  keywords: string[];
  category: 'economic' | 'social' | 'political' | 'culture';
  importance: 'high' | 'medium' | 'low';
}
```

### Bao Cap Reasons
```typescript
interface BaoCapReason {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  priority: number;
}
```

### Artifacts
```typescript
interface Artifact {
  id: string;
  title: string;
  description: string;
  year: number;
  category: 'document' | 'photo' | 'object' | 'newspaper';
  tags: string[];
  details?: string;
}
```

## 🎯 Technology Stack

- **[Astro](https://astro.build/)** - Web framework
- **TypeScript** - Type safety
- **Vanilla CSS** - Styling
- **Vanilla JavaScript** - Interactions
- **Responsive Design** - Mobile-first

## 📝 Nội dung lịch sử

### Giai đoạn 1975-1986
Website bao phủ:
1. Giải phóng miền Nam và thống nhất (1975)
2. Cải tạo kinh tế miền Nam (1976)
3. Hội nhập SEV (1978)
4. Chiến tranh biên giới Việt-Trung (1979)
5. Hạn hán và thiếu lương thực (1980)
6. Chỉ thị 100 - Khoán sản phẩm (1981)
7. Đại hội V - Thảo luận đổi mới (1982)
8. Đại hội VI - Đổi Mới (1986)

### Lý do áp dụng kinh tế bao cấp
1. Thống nhất đất nước sau chiến tranh
2. Hệ tư tưởng xã hội chủ nghĩa
3. Tài nguyên và công nghệ hạn chế
4. Nhận viện trợ từ các nước xã hội chủ nghĩa
5. Kiểm soát xã hội sau chiến tranh
6. Mô hình phát triển của Liên Xô

## 🛠️ Development Guidelines

### Clean Architecture Principles
1. **Separation of Concerns**: Data, logic, và presentation độc lập
2. **Single Responsibility**: Mỗi file một trách nhiệm
3. **Dependency Rule**: Phụ thuộc một chiều (Pages → Components → Data)
4. **Reusability**: Component tái sử dụng

### Code Style
- TypeScript với type safety
- Components độc lập
- CSS scoped
- JS/TS ở dạng module

### Adding New Content
1. Thêm dữ liệu vào `src/data/`
2. Định nghĩa type trong `src/types/`
3. Tạo component trong `src/components/`
4. Compose trong `src/pages/`

## 📄 License

MIT License - Feel free to use this project for educational purposes.

## 🙏 Credits

Dự án được xây dựng với mục đích giáo dục lịch sử Việt Nam hiện đại.

---

**Made with ❤️ using Astro**