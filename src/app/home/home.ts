import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Inject,
  PLATFORM_ID,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from "@angular/router";
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements AfterViewInit, OnInit, OnDestroy {

  /* ================= COUNTER ================= */
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

  /* ================= HERO SLIDER ================= */
  heroIndex = 0;

  heroSlides = [
    { bg: '/banner1.png', left: 'banner2.png', right: 'banner3.png', title: 'Advanced Moisture Protection' },
    { bg: 'banner2.png', left: 'banner3.png', right: 'banner1.png', title: 'Engineered for Global Shipping' },
    { bg: 'banner3.png', left: 'banner2.png', right: 'banner3.png', title: 'Complete Moisture Protection Solutions' }
  ];

  prevHero() {
    this.heroIndex =
      this.heroIndex === 0 ? this.heroSlides.length - 1 : this.heroIndex - 1;
  }

  nextHero() {
    this.heroIndex = (this.heroIndex + 1) % this.heroSlides.length;
  }

  goToHero(index: number) {
    this.heroIndex = index;
  }

  /* ================= MOBILE PROCESS SLIDER ================= */
  mobileIndex = 0;

  slides = [
    { image: '/process1.png', caption: 'Production', description: 'Moisture protection starts at source.' },
    { image: '/process2.png', caption: 'Packaging', description: 'Humidity controlled inside packaging.' },
    { image: '/process3.png', caption: 'Shipping', description: 'Prevents container rain & sweat.' },
    { image: '/process4.png', caption: 'Retail', description: 'Dry & damage-free delivery.' }
  ];

  prevMobile() {
    this.mobileIndex =
      this.mobileIndex === 0 ? this.slides.length - 1 : this.mobileIndex - 1;
  }

  nextMobile() {
    this.mobileIndex = (this.mobileIndex + 1) % this.slides.length;
  }

  goToMobile(index: number) {
    this.mobileIndex = index;
  }

  /* ================= SOLUTION TOGGLE ================= */
  activeSolution: 'box' | 'container' = 'box';


  /* ================= TESTIMONIALS ================= */
  testimonials = [
    {
      question: 'Advanced Moisture Control',
      answer: 'Provides active moisture removal to safeguard goods against mold, corrosion, and damage throughout the supply chain.'
    },
    {
      question: 'High-Performance Desiccants',
      answer: 'Manufactured using advanced technology to achieve high moisture absorption capacity while maintaining safety and performance standards.'
    },
    {
      question: 'Comprehensive Protection Strategy',
      answer: 'We provide detailed risk analysis, strategically optimized placement solutions, and ongoing technical support to ensure effective moisture protection.'
    },
    {
      question: 'Trusted by Global Leaders',
      answer: 'Adopted across industries worldwide, our solutions support dependable performance throughout complex global supply chains.'
    },
    {
      question: 'Quality & Compliance',
      answer: 'Meets internationally recognized safety, quality, and performance benchmarks to ensure reliable protection across global supply chains.'
    }
  ];

  testimonialIndex = 0;
  visibleCards = 3;
  cardWidth = 320;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.updateVisibleCards();
    window.addEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.updateVisibleCards();
  };

 updateVisibleCards() {
  if (!isPlatformBrowser(this.platformId)) return;

  const w = window.innerWidth;

  if (w < 640) {
    // Mobile
    this.visibleCards = 1;
    this.cardWidth = 320;
  } else if (w < 1024) {
    // Tablet
    this.visibleCards = 2;
    this.cardWidth = 320;
  } else {
    // Desktop
    this.visibleCards = 3;
    this.cardWidth = 360;
  }
}


  nextTestimonial() {
    if (this.testimonialIndex < this.testimonials.length - 1) {
      this.testimonialIndex++;
    }
  }

  prevTestimonial() {
    if (this.testimonialIndex > 0) {
      this.testimonialIndex--;
    }
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.removeEventListener('resize', this.onResize);
  }
}
