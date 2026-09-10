# 🎮 Pixel Portfolio — React + Vite

**Interactive Game-Style Developer Portfolio**

This is my personal developer portfolio website, built in pixel-art style inspired by classic computer games.  
The site includes:

- 📌 **Main Screen** with a short introduction and pixel avatar
- 🎚️ **Skills Panel** with animated skill counters
- 📜 **Interactive Timeline** (Education → Work → Relocation → Courses)
- 🗂️ **Portfolio Page**
- 🧭 **Header** with navigation + “Download Resume” button
- 🔗 **Footer** with social links

---

## 🚀 Technologies & Tools

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![License MIT](https://img.shields.io/badge/License-MIT-green)

- Component-scoped CSS (one `.css` file per component)
- CSS custom properties for dark/light theming (`src/styles/colors.css`)
- Native `IntersectionObserver` for scroll-triggered animations (timeline reveal, skill bar counters) — no animation library required

---

## 📁 Project Structure

```
src/
  components/
    Header/
    Footer/
    ProfileSection/
    TimelineSection/
    PortfolioSection/
    PortfolioCard/
  data/
    experience.json
    portfolioItems.json
  styles/
  utils/
  App.jsx
  main.jsx
```

---

## 🔧 Installation

```bash
git clone https://github.com/AlexJYad/pixel-portfolio.git
cd pixel-portfolio
npm install
npm run dev
```

---

## 📌 Project Goals

- Showcase React skills
- Demonstrate Git and GitHub workflow
- Create a memorable game-style portfolio website

---

# 🎮 Портфолио Pixel — React + Vite

**Интерактивное портфолио разработчика в стиле компьютерной игры**

Мой персональный сайт-портфолио, выполненный в стиле пиксель-арта и интерфейсов классических игр.  
Сайт включает:

- 📌 **Главный экран** с кратким описанием и пиксель-аватаром
- 🎚️ **Панель навыков** с анимацией счётчиков
- 📜 **Интерактивный таймлайн** (Образование → Работа → Переезд → Курсы)
- 🗂️ **Страница портфолио**
- 🧭 **Хедер** с навигацией + кнопка «Скачать резюме»
- 🔗 **Футер** с ссылками на соцсети

---

## 🚀 Технологии & Инструменты

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![License MIT](https://img.shields.io/badge/License-MIT-green)

- Стили на уровне компонента (свой `.css`-файл на каждый компонент)
- CSS custom properties для тёмной/светлой темы (`src/styles/colors.css`)
- Нативный `IntersectionObserver` для анимаций при прокрутке (появление таймлайна, анимация скилл-баров) — без сторонних библиотек

---

## 📁 Структура проекта

```
src/
  components/
    Header/
    Footer/
    ProfileSection/
    TimelineSection/
    PortfolioSection/
    PortfolioCard/
  data/
    experience.json
    portfolioItems.json
  styles/
  utils/
  App.jsx
  main.jsx
```

---

## 🔧 Установка

```bash
git clone https://github.com/AlexJYad/pixel-portfolio.git
cd pixel-portfolio
npm install
npm run dev
```

---

## 📌 Цели проекта

- Показать навыки работы с React
- Продемонстрировать работу с Git и GitHub Flow
- Создать запоминающееся портфолио в игровом стиле

---

## 📈 Development Plan / План развития сайта

### Main Screen / Главный экран

- [x] Add pixel avatar / Добавить пиксель-аватар
- [x] Add short introduction / Добавить краткое описание
- [x] Animate skill counters / Анимировать счётчики навыков

### Timeline / Таймлайн

- [x] Create chronological component / Создать хронологический компонент
- [x] Add education/work/relocation/events / Добавить образование, работу, переезд, курсы
- [x] Add scroll-trigger animations / Добавить анимацию при прокрутке

### Header & Footer / Хедер и футер

- [x] Create header component with navigation / Создать компонент хедера с навигацией
- [x] Add “Download Resume” button / Добавить кнопку “Скачать резюме”
- [x] Create footer component with social links / Создать футер с ссылками на соцсети

### Portfolio Page / Страница портфолио

- [x] Add projects section / Добавить секцию проектов
- [ ] Add filters / Добавить фильтры проектов
- [x] Add project cards with animations / Добавить карточки проектов с анимацией

### Enhancements / Улучшения

- [x] Add dark/light mode / Добавить светлую/тёмную тему
- [ ] Multi-language support (currently nav only, page content not yet translated) / Поддержка нескольких языков (пока переведена только навигация, остальной контент — нет)
- [ ] Optimize for mobile / Оптимизация под мобильные устройства
