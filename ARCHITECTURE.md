# Kiến trúc Dự án - Clean Architecture

## 📐 Tổng quan

Dự án tuân theo **Clean Architecture** với phân tách rõ ràng các layer, đảm bảo:
- **Maintainability**: Dễ bảo trì và mở rộng
- **Testability**: Logic tách khỏi UI, dễ test
- **Reusability**: Component và data tái sử dụng
- **Separation of Concerns**: Tách bạch trách nhiệm

## 🏗️ Cấu trúc Layer

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│  (pages/, components/) - Astro Components & Pages          │
│  - UI rendering                                              │
│  - User interactions                                         │
│  - Animations & effects                                      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic Layer                     │
│  (components/ script tags) - Client-side logic              │
│  - Event handling                                            │
│  - State management                                          │
│  - Filter & search logic                                     │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                             │
│  (data/) - Pure data structures                             │
│  - Data models                                               │
│  - Helper functions                                          │
│  - Queries & filters                                         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      Type Layer                             │
│  (types/) - TypeScript definitions                          │
│  - Interfaces                                                │
│  - Type safety                                               │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Chi tiết từng Layer

### 1. Data Layer (`src/data/`)

**Trách nhiệm**: Quản lý dữ liệu thuần túy

#### Files:
- `timeline.ts` - Dữ liệu dòng thời gian 1975-1986
- `reasons.ts` - Lý do áp dụng kinh tế bao cấp
- `artifacts.ts` - Hiện vật và kỷ vật

#### Principles:
- ✅ Không có logic UI
- ✅ Pure TypeScript
- ✅ Export data và helper functions
- ✅ Type-safe

#### Example:
```typescript
// src/data/timeline.ts
export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: 'economic' | 'social' | 'political' | 'culture';
  importance: 'high' | 'medium' | 'low';
}

export const timelineData: TimelineEvent[] = [...];

export const getTimelineEventsByYear = (year: number): TimelineEvent[] => {
  return timelineData.filter(event => event.year === year);
};
```

### 2. Types Layer (`src/types/`)

**Trách nhiệm**: Định nghĩa types và interfaces

#### Files:
- `index.ts` - Common types

#### Principles:
- ✅ Centralized type definitions
- ✅ Reusable across layers
- ✅ Documented interfaces

#### Example:
```typescript
// src/types/index.ts
export type ContentSection = {
  id: string;
  title: string;
  slug: string;
};

export interface MuseumConfig {
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
}
```

### 3. Component Layer (`src/components/`)

**Trách nhiệm**: UI rendering và interactions

#### Files:
- `MuseumHero.astro` - Hero section với particle animation
- `Timeline.astro` - Interactive timeline
- `ReasonsSection.astro` - Bao Cap reasons with expandable cards
- `ArtifactGallery.astro` - Gallery với filter và modal
- `InteractiveExperience.astro` - Experience cards

#### Principles:
- ✅ **Astro Islands**: Static HTML with interactive islands
- ✅ **Scoped CSS**: Style isolation
- ✅ **Reusability**: Independent components
- ✅ **Declarative**: Props-based composition

#### Component Structure:
```astro
---
// 1. Frontmatter - Imports & props
import { timelineData } from '../data/timeline';
---

<!-- 2. Template - HTML structure -->
<section class="timeline-section">
  {timelineData.map(event => (
    <div class="timeline-item">
      <h3>{event.title}</h3>
    </div>
  ))}
</section>

<!-- 3. Styles - Scoped CSS -->
<style>
  .timeline-section {
    /* styles */
  }
</style>

<!-- 4. Scripts - Client-side logic -->
<script>
  // Interactions
  document.querySelectorAll('.timeline-item').forEach(item => {
    // animations, event listeners
  });
</script>
```

### 4. Layout Layer (`src/layouts/`)

**Trách nhiệm**: Wrapper và meta configuration

#### Files:
- `Layout.astro` - Master layout với:
  - HTML structure
  - Meta tags
  - Font loading
  - Global styles

#### Principles:
- ✅ Reusable wrapper
- ✅ SEO optimization
- ✅ Performance optimization

### 5. Pages Layer (`src/pages/`)

**Trách nhiệm**: Page composition và routing

#### Files:
- `index.astro` - Home page composition

#### Principles:
- ✅ Route-based composition
- ✅ Layout integration
- ✅ Component orchestration

#### Example:
```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/MuseumHero.astro';
import Timeline from '../components/Timeline.astro';
---

<Layout title="Home">
  <Hero />
  <Timeline />
</Layout>
```

## 🔄 Data Flow

```
User Action → Component Event → Business Logic → Data Update → Re-render
     ↓              ↓                ↓              ↓           ↓
   Click       EventListener    Filter/Query   getTimeline  DOM Update
```

### Example Flow: Timeline Animation

1. **User**: Scrolls to timeline section
2. **Intersection Observer**: Detects element visibility
3. **Component**: Triggers fade-in animation
4. **Visual Feedback**: Timeline items animate in sequence

## 🎨 Styling Architecture

### Approach:
- **Scoped CSS**: Component-specific styles
- **Global Styles**: In Layout.astro
- **CSS Variables**: Theme colors
- **Responsive**: Mobile-first breakpoints

### Pattern:
```css
/* Global variables */
:root {
  --primary-color: #d4af37;
  --bg-dark: #1a1a1a;
}

/* Component styles */
.timeline-section {
  padding: 8rem 2rem;
  background: var(--bg-dark);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-section {
    padding: 4rem 1rem;
  }
}
```

## 🚀 Performance Optimizations

### Astro Features:
1. **Static Generation**: Pre-rendered HTML
2. **Minimal JavaScript**: Only interactive parts hydrated
3. **Code Splitting**: Automatic by Astro
4. **Asset Optimization**: Automatic images

### Best Practices:
- ✅ Lazy loading images
- ✅ Intersection Observer for animations
- ✅ Debounced scroll events
- ✅ CSS animations over JavaScript
- ✅ Minimal third-party libraries

## 🔐 Type Safety

### Strategy:
1. **TypeScript** for data and logic
2. **Astro Props** for component interfaces
3. **Runtime Validation** for user inputs

### Example:
```typescript
// Data layer
export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

// Component props
interface Props {
  events: TimelineEvent[];
  maxItems?: number;
}
```

## 📦 Dependency Management

### Clean Dependencies:

```
Presentation Layer
    ↓ depends on
Component Layer
    ↓ depends on
Data Layer ← No dependencies
Types Layer ← No dependencies
```

### Rules:
- ✅ Data layer has **zero dependencies**
- ✅ Components can depend on Data layer
- ✅ Pages compose Components
- ❌ Data layer can't depend on UI layer
- ❌ No circular dependencies

## 🧪 Testing Strategy

### Unit Tests:
- Data layer functions
- Type utilities
- Business logic

### Integration Tests:
- Component rendering
- Data fetching
- User interactions

### E2E Tests:
- Navigation flow
- Form submissions
- Interactive features

## 🔄 Future Enhancements

### Potential Additions:
1. **State Management**: For complex interactions
2. **API Layer**: For dynamic content
3. **CMS Integration**: For content management
4. **Analytics**: For user tracking
5. **A11y Improvements**: Enhanced accessibility

## 📚 References

- [Astro Documentation](https://docs.astro.build)
- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Architecture maintained by VNR202 Team**
