// ./app/data/productData.js

export const carProducts = {
  Offers: [
    {
      id: 1,
      name: 'عرض خاص على زيت المحرك',
      price: 99.99,
      originalPrice: 149.99,
      image: '/images/products/oil.jpg',
      category: 'زيوت',
      discount: 33,
    },
    {
      id: 2,
      name: 'عرض على فلاتر الهواء',
      price: 49.99,
      originalPrice: 79.99,
      image: '/images/products/air-filter.jpg',
      category: 'فلاتر',
      discount: 37,
    },
  ],
  SpareParts: [
    {
      id: 3,
      name: 'فرامل أمامية',
      price: 299.99,
      image: '/images/products/brakes.jpg',
      category: 'فرامل',
    },
    {
      id: 4,
      name: 'فلتر زيت',
      price: 29.99,
      image: '/images/products/oil-filter.jpg',
      category: 'فلاتر',
    },
  ],
  Accessories: [
    {
      id: 5,
      name: 'غطاء مقعد سيارة',
      price: 149.99,
      image: '/images/products/seat-cover.jpg',
      category: 'اكسسوارات',
    },
    {
      id: 6,
      name: 'حامل هاتف',
      price: 39.99,
      image: '/images/products/phone-holder.jpg',
      category: 'اكسسوارات',
    },
  ],
};

export const electronicsProducts = {
  Electronics: {
    title: "الإلكترونيات",
    services: [
      {
        id: "electronics-1",
        title: "سماعات بلوتوث لاسلكية",
        description: "سماعات بلوتوث مع إلغاء الضوضاء وبطارية طويلة الأمد",
        image: "/images/wireless-earbuds.jpg",
        rating: 4.7,
        reviewCount: 214,
        discountPrice: 180,
        originalPrice: 250,
        discountPercentage: 28,
        badge: "الأكثر مبيعاً",
        badgeColor: "#FF6B6B",
        freeShipping: true,
        shippingText: "شحن مجاني"
      },
      {
        id: "electronics-2",
        title: "شاحن لاسلكي سريع",
        description: "شاحن لاسلكي سريع متوافق مع جميع الهواتف الذكية",
        image: "/images/wireless-charger.jpg",
        rating: 4.5,
        reviewCount: 168,
        discountPrice: 90,
        originalPrice: 120,
        discountPercentage: 25,
        freeShipping: true,
        shippingText: "شحن مجاني"
      },
      {
        id: "electronics-3",
        title: "كاميرا مراقبة ذكية",
        description: "كاميرا مراقبة منزلية ذكية مع رؤية ليلية واتصال واي فاي",
        image: "/images/smart-camera.jpg",
        rating: 4.6,
        reviewCount: 132,
        discountPrice: 220,
        originalPrice: 280,
        discountPercentage: 21,
        freeShipping: false
      },
      {
        id: "electronics-4",
        title: "ساعة ذكية متعددة الوظائف",
        description: "ساعة ذكية لتتبع النشاط البدني والإشعارات",
        image: "/images/smart-watch.jpg",
        rating: 4.4,
        reviewCount: 187,
        discountPrice: 150,
        originalPrice: 199,
        discountPercentage: 25,
        badge: "عرض محدود",
        badgeColor: "#5CB85C",
        freeShipping: true,
        shippingText: "شحن مجاني"
      },
      {
        id: "electronics-5",
        title: "مكبر صوت بلوتوث محمول",
        description: "مكبر صوت بلوتوث محمول مقاوم للماء مع صوت قوي",
        image: "/images/bluetooth-speaker.jpg",
        rating: 4.8,
        reviewCount: 203,
        discountPrice: 130,
        originalPrice: 180,
        discountPercentage: 28,
        freeShipping: false
      }
    ]
  }
};

export const homeProducts = {
  Home: {
    title: "منتجات المنزل",
    services: [
      {
        id: "home-1",
        title: "خلاط كهربائي متعدد الوظائف",
        description: "خلاط كهربائي قوي لتحضير العصائر والمشروبات",
        image: "/images/blender.jpg",
        rating: 4.5,
        reviewCount: 156,
        discountPrice: 220,
        originalPrice: 300,
        discountPercentage: 27,
        badge: "توصية الخبراء",
        badgeColor: "#428BCA",
        freeShipping: true,
        shippingText: "شحن مجاني"
      },
      {
        id: "home-2",
        title: "مكنسة كهربائية لاسلكية",
        description: "مكنسة كهربائية لاسلكية خفيفة الوزن وقوية",
        image: "/images/vacuum-cleaner.jpg",
        rating: 4.7,
        reviewCount: 198,
        discountPrice: 350,
        originalPrice: 450,
        discountPercentage: 22,
        freeShipping: true,
        shippingText: "شحن مجاني"
      },
      {
        id: "home-3",
        title: "غلاية ماء كهربائية",
        description: "غلاية ماء كهربائية من الستانلس ستيل مع إيقاف تلقائي",
        image: "/images/electric-kettle.jpg",
        rating: 4.4,
        reviewCount: 142,
        discountPrice: 85,
        originalPrice: 120,
        discountPercentage: 29,
        freeShipping: false
      },
      {
        id: "home-4",
        title: "طقم أواني طهي نون ستيك",
        description: "طقم أواني طهي مكون من 10 قطع مع طلاء نون ستيك",
        image: "/images/cookware-set.jpg",
        rating: 4.8,
        reviewCount: 215,
        discountPrice: 420,
        originalPrice: 550,
        discountPercentage: 24,
        badge: "الأكثر مبيعاً",
        badgeColor: "#FF6B6B",
        freeShipping: true,
        shippingText: "شحن مجاني"
      },
      {
        id: "home-5",
        title: "مصباح طاولة ذكي",
        description: "مصباح طاولة ذكي مع تحكم باللون والسطوع",
        image: "/images/smart-lamp.jpg",
        rating: 4.3,
        reviewCount: 87,
        discountPrice: 110,
        originalPrice: 150,
        discountPercentage: 27,
        freeShipping: false
      }
    ]
  }
};