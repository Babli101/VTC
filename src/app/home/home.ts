import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Inject,
  PLATFORM_ID,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements AfterViewInit {

  /* ---------------- COUNTER ---------------- */
  @ViewChildren('counter') counters!: QueryList<ElementRef<HTMLElement>>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = Number(el.getAttribute('data-target'));
          this.animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.6 });

    this.counters.forEach(c => observer.observe(c.nativeElement));
  }

  private animateCounter(el: HTMLElement, target: number) {
    const start = performance.now();
    const duration = 1200;

    const update = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      el.innerText = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  /* ---------------- HERO SLIDER ---------------- */
  /* ================= HERO SLIDER ================= */

  heroIndex = 0;

  heroSlides = [
    {
      bg: '/banner1.png',
      left: 'banner2.png',
      right: 'banner3.png',
      title: 'Advanced Moisture Protection'
    },
    {
      bg: 'banner2.png',
      left: 'banner3.png',
      right: 'banner1.png',
      title: 'Engineered for Global Shipping'
    },
    {
      bg: 'banner3.png',
      left: 'banner2.png',
      right: 'banner3.png',
      title: 'Complete Moisture Protection Solutions'
    }
  ];

  prevHero() {
    console.log('Prev hero clicked');
    this.heroIndex =
      this.heroIndex === 0 ? this.heroSlides.length - 1 : this.heroIndex - 1;
  }


  nextHero() {
    this.heroIndex =
      (this.heroIndex + 1) % this.heroSlides.length;
  }

  goToHero(index: number) {
    this.heroIndex = index;
  }


  /* ================= MOBILE CAROUSEL ================= */

  currentIndex = 0;

  slides = [
    { image: '/process1.png', caption: 'Production', description: 'Moisture protection starts at source.' },
    { image: '/process2.png', caption: 'Packaging', description: 'Humidity controlled inside packaging.' },
    { image: '/process3.png', caption: 'Shipping', description: 'Prevents container rain & sweat.' },
    { image: '/process4.png', caption: 'Retail', description: 'Dry & damage-free delivery.' }
  ];

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }


  /* ================= SAFETY ALIAS (IMPORTANT) ================= */
  /* Ye error ko permanently khatam karega,
     chahe HTML me kahin bhi purana code reh jaye */

  prev() {
    this.prevSlide();
  }

  next() {
    this.nextSlide();
  }

  goTo(index: number) {
    this.goToSlide(index);
  }
  /* ---------------- FAQ ---------------- */
  activeIndex: number | null = null;

  faqs = [
    {
      question: 'Advanced Moisture Control',
      answer: 'Actively removes moisture to protect goods from mold and corrosion.'
    },
    {
      question: 'High-Performance Desiccants',
      answer: 'Engineered to absorb multiple times their weight in moisture.'
    },
    {
      question: 'Comprehensive Protection Strategy',
      answer: 'Risk analysis, optimized placement, and ongoing support.'
    },
    {
      question: 'Trusted by Global Leaders',
      answer: 'Used worldwide across industries and supply chains.'
    },
    {
      question: 'Quality & Compliance',
      answer: 'Meets international safety and performance standards.'
    }
  ];

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
