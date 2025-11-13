'use client';

import React, { useEffect, useRef } from 'react';
import {
  Box,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
  Divider,
} from '@mui/material';
import { CheckCircle, AccessTime } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    oldPrice: '49,999',
    price: '39,999',
    description:
      'Perfect for individuals, portfolios, and startups who need a clean, modern website presence.',
    features: [
      'Responsive 5-page design (Home, About, Services, Contact, Blog)',
      'Built using Next.js + Tailwind CSS',
      'Custom domain configuration assistance',
      'Contact form with email notifications',
      '1-month technical support & maintenance',
      'Basic analytics integration (Google Analytics)',
      'Image optimization & lazy loading',
      'Social media integration (Instagram, LinkedIn, etc.)',
    ],
    totalDays: 10,
  },
  {
    name: 'Growth',
    oldPrice: '79,999',
    price: '69,999',
    description:
      'Ideal for small and medium businesses looking for powerful branding and smooth user experience.',
    popular: true,
    color: '#a3e635',
    features: [
      'Everything in Starter pack +',
      'Dynamic CMS integration (Contentful / Sanity)',
      'Blog system with markdown or WYSIWYG editor',
      'Custom animations using GSAP / Framer Motion',
      'Enhanced SEO (structured data, keyword optimization)',
      'Mobile-first performance optimization',
      '6 months of priority support and maintenance',
      'Integrated review/testimonial section',
      'Lead capture forms with validation & spam protection',
      'Dark mode toggle + light/dark adaptive theme',
    ],
    totalDays: 28,
  },
  {
    name: 'Enterprise',
    oldPrice: '1,19,999',
    price: '99,999',
    description:
      'Sell products online with a fully integrated, scalable e-commerce platform with payment systems.',
    color: '#38bdf8',
    features: [
      'Everything in Growth +',
      'Next.js + Stripe / Razorpay payment integration',
      'Product management dashboard (add/edit/remove)',
      'Customer authentication (JWT / Clerk / Auth.js)',
      'Cart, checkout, and order tracking system',
      'Inventory tracking and low-stock alerts',
      'Dynamic product filtering & search (TanStack Table)',
      'Email order confirmation system',
      'Automated invoice generation (PDF)',
      'Performance-optimized for 100+ products',
      'Customizable landing pages for promotions',
    ],
    totalDays: 42,
  },
];

export default function PricingPlans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const discountRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureRefs = useRef<HTMLSpanElement[]>([]);
  const timelineRefs = useRef<HTMLSpanElement[]>([]);
  const termsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow
      gsap.fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 0.2, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 90%' } }
      );

      // Sales hook
      gsap.fromTo(
        hookRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: hookRef.current, start: 'top 85%' } }
      );

      // Title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 80%' } }
      );

      // Cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 80, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'back.out(1.5)',
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );

      // Discount tags (same stagger as cards)
      gsap.fromTo(
        discountRefs.current,
        { opacity: 0, scale: 0.8, rotate: -30 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );

      // Features per card
      cardsRef.current.forEach((card) => {
        const features = card.querySelectorAll('.feature-item');
        gsap.fromTo(
          features,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      });

      // Timeline numbers
      timelineRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.6)',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      });

      // Footer
      gsap.fromTo(
        termsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: termsRef.current, start: 'top 90%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#000',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      {/* Glow background */}
      <Box
        ref={glowRef}
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 15% 85%, #a3e635 0%, transparent 50%), radial-gradient(circle at 85% 15%, #38bdf8 0%, transparent 50%)',
          animation: 'pulseGlow 12s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Hook */}
        <Typography
          ref={hookRef}
          variant="h5"
          sx={{
            textAlign: 'center',
            color: '#a3e635',
            mb: 2,
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          Ready to skyrocket your brand? Choose your perfect plan.
        </Typography>

        {/* Title */}
        <Typography
          ref={titleRef}
          variant="h2"
          sx={{
            fontSize: { xs: '2.8rem', md: '4.5rem' },
            fontWeight: 900,
            textAlign: 'center',
            mb: 10,
            background: 'linear-gradient(90deg, #a3e635 0%, #fff 48%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
          }}
        >
          Launch Fast. Scale Faster.
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '7fr', sm: 'repeat(5, 7fr)', lg: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 5 },
            justifyItems: 'left',
          }}
        >
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 420,
                borderRadius: 4,
                overflow: 'hidden',
                bgcolor: '#111',
                border: `2px solid ${plan.color || '#333'}`,
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-16px) scale(1.03)',
                  boxShadow: `0 25px 70px ${plan.color || '#a3e635'}40`,
                  borderColor: plan.color || '#a3e635',
                  '& .plan-price': { transform: 'scale(1.08)' },
                },
              }}
            >
              {/* 20% OFF TAG */}
              <Box
  ref={(el) => {
    if (el) discountRefs.current[index] = el as HTMLDivElement;
  }}
  sx={{
    position: 'absolute',
    top: 26,
    right: -12,
    bgcolor: '#ff3b5c',
    color: '#fff',
    fontWeight: 900,
    fontSize: '0.85rem',
    py: 1,
    px: 3,
    borderRadius: '20px 5px 20px 5px', // ⬅️ fixed and smoothed
    boxShadow: '0 4px 12px rgba(255,59,92,0.4)',
    zIndex: 10,
    transform: 'rotate(12deg)',
    letterSpacing: '0.5px',
  }}
>
  20% OFF
</Box>


              {/* Popular badge */}
              {plan.popular && (
                <Chip
                  label="MOST POPULAR"
                  sx={{
                    position: 'absolute',
                    top: -4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: plan.color,
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    py: 2,
                    px: 3,
                    borderRadius: '0 0 24px 24px',
                    zIndex: 10,
                    letterSpacing: '1.2px',
                  }}
                />
              )}

              <Box sx={{ p: { xs: 4, md: 5 }, pt: plan.popular ? 8 : 5 }}>
                <Typography variant="h4" fontWeight={800} gutterBottom color="#fff">
                  {plan.name}
                </Typography>

                <Box sx={{ my: 3 }}>
                  <Stack direction="row" alignItems="baseline" spacing={1.5}>
                    <Typography
                      sx={{
                        textDecoration: 'line-through',
                        color: '#999',
                        fontSize: '1.1rem',
                      }}
                    >
                      ₹{plan.oldPrice}
                    </Typography>
                    <Typography
                      className="plan-price"
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        color: plan.color || '#a3e635',
                        fontSize: { xs: '2.6rem', md: '3.2rem' },
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      ₹{plan.price}
                    </Typography>
                  </Stack>
                  <Typography color="#a3e635" fontSize="0.95rem" fontWeight={500}>
                    One-time payment
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ opacity: 0.9, mb: 4, minHeight: 60, fontSize: '0.95rem', color: '#ddd' }}
                >
                  {plan.description}
                </Typography>

                {/* Features */}
                <Stack spacing={2} mb={4}>
                  {plan.features.map((feature, i) => (
                    <Stack
                      key={i}
                      className="feature-item"
                      direction="row"
                      alignItems="flex-start"
                      spacing={1.5}
                      ref={(el) => {
                        if (el) featureRefs.current.push(el);
                      }}
                    >
                      <CheckCircle
                        sx={{ color: plan.color || '#a3e635', fontSize: 20, mt: 0.3 }}
                      />
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        sx={{ fontSize: '0.9rem', color: '#eee' }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Divider sx={{ borderColor: '#333', mb: 3 }} />

                {/* Timeline */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #1a1a1a, #222)',
                    borderRadius: 3,
                    p: 3,
                    border: `1px solid ${plan.color || '#555'}30`,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color={plan.color || '#a3e635'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    mb={1}
                  >
                    <AccessTime sx={{ fontSize: 22 }} />
                    Project Timeline
                  </Typography>
                  <Typography
                    ref={(el) => {
                      if (el) timelineRefs.current[index] = el;
                    }}
                    variant="h4"
                    fontWeight={900}
                    sx={{
                      background: plan.popular
                        ? 'linear-gradient(90deg, #a3e635, #84cc16)'
                        : plan.color
                        ? `linear-gradient(90deg, ${plan.color}, ${plan.color}dd)`
                        : 'linear-gradient(90deg, #a3e635, #22d3ee)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '2rem', md: '2.4rem' },
                    }}
                  >
                    {plan.totalDays} Days
                  </Typography>
                  <Typography variant="body2" color="#bbb" mt={0.5}>
                    Business working days
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Terms */}
        <Box ref={termsRef} sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="body2" color="#aaa" fontSize="0.85rem" maxWidth="sm" mx="auto">
            * Prices are exclusive of taxes. Maintenance beyond included duration will incur
            additional charges. Hosting & domain costs not included unless specified.
          </Typography>
        </Box>
      </Container>

      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .MuiCard-root { will-change: transform; }
      `}</style>
    </Box>
  );
}