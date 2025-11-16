# 📍 Bible Atlas

> Explore the locations and history of biblical places with interactive maps and comprehensive data.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## ✨ Features

- 🗺️ **Interactive Biblical Maps** - Explore biblical locations with detailed geographical information
- 📖 **Scripture References** - View all Bible verses mentioning each location
- 🔍 **Advanced Search** - Search by region name, type, or biblical book
- 🌍 **Modern Context** - See where ancient biblical places are located today
- 📊 **Archaeological Data** - Probability information for candidate sites based on research
- 🌐 **Multilingual Support** - Full Korean and English language support
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface built with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bible-atlas-cs.git
   cd bible-atlas-cs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
bible-atlas-cs/
├── app/                    # Next.js App Router pages
│   ├── support/           # Support pages (FAQ, Contact, Guide)
│   ├── terms/             # Terms of service
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── LanguageToggle.tsx # Language switching component
├── contexts/             # React contexts
│   └── LanguageContext.tsx # Global language state
├── lib/                  # Utility functions and configurations
│   ├── i18n.ts          # Internationalization setup
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🌐 Internationalization

Bible Atlas supports both Korean and English languages:

- **Default Language**: English
- **Language Toggle**: Available on all pages via the language selector
- **Comprehensive Coverage**: All UI text, content, and terms are fully translated
- **Context-Aware**: Language preference is maintained across page navigation

### Adding New Languages

1. Add translations to `lib/i18n.ts`
2. Update the `Language` type
3. Add language option to `LanguageToggle` component

## 📊 Data Sources

This project utilizes several open data sources:

- **[OpenBible.info](https://www.openbible.info/)** - Biblical geographic data (CC BY 4.0)
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Modern geographic data (ODbL)
- **Archaeological Research** - Location probability data from biblical scholars

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📱 Pages

- **Home** (`/`) - Main landing page with app overview
- **Support** (`/support`) - Help center with navigation to resources
- **FAQ** (`/support/faq`) - Frequently asked questions
- **Contact** (`/support/contact`) - Contact information and inquiry form
- **User Guide** (`/support/guide`) - Comprehensive usage instructions
- **Terms** (`/terms`) - Terms of service and data licensing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenBible.info](https://www.openbible.info/) for providing comprehensive biblical location data
- [OpenStreetMap](https://www.openstreetmap.org/) contributors for geographic data
- Biblical scholars and archaeologists for location research
- The open-source community for the amazing tools and libraries

## 📞 Contact

For questions or support, please contact: [jessebae0123@gmail.com](mailto:jessebae0123@gmail.com)

---

**Built with ❤️ for Bible study and education**
