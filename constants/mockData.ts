import { Category, Product, Seller } from '../types';

export const mockSellers: Record<string, Seller> = {
  'seller_1': {
    id: 'seller_1',
    name: 'Supercom Net (A-Plus Retailer)',
    rating: 4.8,
    location: 'Mumbai, Maharashtra',
    joinedDate: 'Jan 2021',
    description: 'Leading distributor of consumer electronics and accessories in Western India.'
  },
  'seller_2': {
    id: 'seller_2',
    name: 'JSS Agro Industries',
    rating: 4.9,
    location: 'Pune, Maharashtra',
    joinedDate: 'Mar 2020',
    description: 'Premium organic seeds, farm equipment, and bio-fertilizers direct to farmers.'
  },
  'seller_3': {
    id: 'seller_3',
    name: 'Vedic Threads & Weaves',
    rating: 4.7,
    location: 'Surat, Gujarat',
    joinedDate: 'Nov 2019',
    description: 'Artisanal traditional wear and premium modern garments made from organic cotton.'
  },
  'seller_4': {
    id: 'seller_4',
    name: 'Royal Living Furniture Co.',
    rating: 4.6,
    location: 'Jodhpur, Rajasthan',
    joinedDate: 'Aug 2018',
    description: 'Handcrafted solid wood furniture and luxury home decor accents.'
  },
  'seller_5': {
    id: 'seller_5',
    name: 'Swarnim Jewellers Ltd.',
    rating: 4.9,
    location: 'Jaipur, Rajasthan',
    joinedDate: 'May 2021',
    description: 'Certified silver, gold, and diamond-studded high jewellery ornaments.'
  },
  'seller_6': {
    id: 'seller_6',
    name: 'HealthPlus Pharmacy',
    rating: 4.5,
    location: 'New Delhi, Delhi',
    joinedDate: 'Sep 2022',
    description: 'Authorized retailer of nutritional supplements, healthcare devices, and wellness items.'
  }
};

export const mockCategories: Category[] = [
  {
    id: 'fashion',
    name: 'cat.fashion',
    icon: 'Shirt',
    description: 'Discover the latest clothing, footwear, and accessories trends for men, women, and kids.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Men Wear', 'Women Wear', 'Kids Clothing', 'Footwear', 'Watches'],
    popularBrands: ['Zara', 'Levis', 'Nike', 'Adidas', 'Puma', 'Biba'],
    faqs: [
      { question: 'What is the return policy for fashion products?', answer: 'We offer a hassle-free 10-day return policy for unused products with original price tags intact.' },
      { question: 'Do you offer cash on delivery (COD)?', answer: 'Yes, cash on delivery is available on all fashion purchases across major pin codes.' }
    ]
  },
  {
    id: 'electronics',
    name: 'cat.electronics',
    icon: 'Laptop',
    description: 'Explore state-of-the-art smartphones, laptops, audio systems, smartwatches, and smart home appliances.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Smartphones', 'Laptops', 'Audio & Head-wear', 'Smartwatches', 'Cameras'],
    popularBrands: ['Apple', 'Samsung', 'Sony', 'Dell', 'OnePlus', 'Boat'],
    faqs: [
      { question: 'Do products carry manufacturer warranty?', answer: 'Yes, all electronic products are 100% original and carry standard manufacturer warranty (usually 1 year).' },
      { question: 'Can I choose open-box delivery?', answer: 'Open-box delivery is available for high-value smartphones and laptops in selected metropolitan areas.' }
    ]
  },
  {
    id: 'agriculture',
    name: 'cat.agriculture',
    icon: 'Sprout',
    description: 'High-quality seeds, organic fertilizers, crop protection tools, and smart gardening accessories.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Organic Seeds', 'Fertilizers', 'Pest Control', 'Gardening Tools', 'Drip Irrigation'],
    popularBrands: ['Mahyco', 'UPL', 'IFFCO', 'Falcon', 'JSS Agro', 'TATA Rallis'],
    faqs: [
      { question: 'Are these seeds suitable for terrace gardening?', answer: 'Yes, our gardening toolkits and organic seeds are perfect for both indoor terrace gardening and large-scale agricultural use.' },
      { question: 'Are the bio-fertilizers organic certified?', answer: 'Absolutely. All fertilizers in the agriculture segment are 100% natural and certified by national organic standard bodies.' }
    ]
  },
  {
    id: 'home_decor',
    name: 'cat.home_decor',
    icon: 'Lamp',
    description: 'Vases, decorative lights, wall clocks, cushions, curtains, and high-aesthetic accents for your space.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Wall Accents', 'Vases & Planters', 'Lighting', 'Curtains & Drapes', 'Scented Candles'],
    popularBrands: ['Home Centre', 'Chumbak', 'Nestasia', 'DDecor', 'Fabindia'],
    faqs: [
      { question: 'Are the decorative glass items packed securely?', answer: 'Yes, we use customized, high-density foam padding and multi-layered bubble packaging to ensure safe transit of delicate home decor products.' }
    ]
  },
  {
    id: 'furniture',
    name: 'cat.furniture',
    icon: 'Sofa',
    description: 'Solid wood beds, modular wardrobes, sofas, dining tables, study desks, and premium ergonomic chairs.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Living Room Sofas', 'Dining Tables', 'Beds & Wardrobes', 'Office Furniture', 'Coffee Tables'],
    popularBrands: ['Godrej Interio', 'Pepperfry', 'Urban Ladder', 'Royal Oak', 'Nilkamal'],
    faqs: [
      { question: 'Is professional installation provided?', answer: 'Free assembly and installation are provided at the time of delivery for all heavy furniture products.' }
    ]
  },
  {
    id: 'jewellery',
    name: 'cat.jewellery',
    icon: 'Gem',
    description: 'Elegant necklaces, sterling silver earrings, diamond nose pins, and traditional wedding jewellery sets.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Gold Ornaments', 'Silver Jewelry', 'Diamond Collections', 'Traditional Sets', 'Chains & Bracelets'],
    popularBrands: ['Tanishq', 'Kalyan Jewellers', 'Giva', 'Malabar Gold', 'PC Jeweller'],
    faqs: [
      { question: 'Are your gold and silver products hallmarked?', answer: 'Yes, all gold jewelry is BIS 916 Hallmarked, and silver is 925 Sterling certified with authenticity reports.' }
    ]
  },
  {
    id: 'books',
    name: 'cat.books',
    icon: 'BookOpen',
    description: 'Academic textbooks, competitive exam guides, fiction novels, business non-fiction, and kids storybooks.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Fiction', 'Academic & Competitive', 'Self-Help', 'Children Books', 'Biographies'],
    popularBrands: ['Penguin', 'HarperCollins', 'Rupa Publications', 'Arihant', 'OReilly', 'Wiley'],
    faqs: [
      { question: 'Do you sell bulk academic books for schools/institutes?', answer: 'Yes, for bulk orders, please use our become-seller or B2B inquiry form in the footer for special wholesale rates.' }
    ]
  },
  {
    id: 'health',
    name: 'cat.health',
    icon: 'Activity',
    description: 'Wellness supplements, whey protein, herbal juices, medical monitors, masks, and daily hygiene necessities.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Supplements', 'Health Monitors', 'Ayurvedic Wellness', 'Fitness Equipment', 'First Aid'],
    popularBrands: ['MuscleBlaze', 'Himalaya', 'Omron', 'Optimum Nutrition', 'Dabur'],
    faqs: [
      { question: 'Do I need a prescription to order products?', answer: 'Supplements, health monitors, and OTC ayurvedic products do not require any prescription.' }
    ]
  },
  {
    id: 'beauty',
    name: 'cat.beauty',
    icon: 'Sparkles',
    description: 'Face washes, skin serums, organic hair oil, luxury lipsticks, makeup kits, and spa creams.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Skincare', 'Haircare', 'Makeup Products', 'Fragrances', 'Grooming Tools'],
    popularBrands: ['Loreal', 'Lakme', 'Mamaearth', 'The Derma Co', 'Nivea', 'Maybelline'],
    faqs: [
      { question: 'Are these cosmetic items cruelty-free?', answer: 'Most of our beauty brands are PETA certified cruelty-free and dermatologically tested.' }
    ]
  },
  {
    id: 'automobile',
    name: 'cat.automobile',
    icon: 'Car',
    description: 'Car chargers, air purifiers, high-definition dash cameras, helmet headsets, and vehicle cleaning kits.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop',
    subcategories: ['Car Accessories', 'Bike Gears & Helmets', 'Cleaning Products', 'GPS & Dashcams', 'Car Electronics'],
    popularBrands: ['Qubo', 'JBL', '3M', 'Vega', 'Steelbird', 'PremiumAuto'],
    faqs: [
      { question: 'How do I check compatibility of accessories with my car model?', answer: 'Detailed dimensions and vehicle model compatibility matrices are listed under the product descriptions.' }
    ]
  }
];

export const mockProducts: Product[] = [
  // FASHION (5 Products)
  {
    id: 'fash_1',
    name: 'Premium Slim Fit Cotton Linen Shirt',
    brand: 'Zara',
    seller: mockSellers['seller_3'],
    category: 'fashion',
    subcategory: 'Men Wear',
    originalPrice: 2499,
    offerPrice: 1299,
    discountPercent: 48,
    rating: 4.4,
    reviewsCount: 312,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
    description: 'Crafted from a breathable organic cotton-linen blend, this shirt features a clean slim-fit cut, classic button collar, and curved hem. Perfect for premium smart-casual aesthetics.',
    features: ['55% Linen, 45% Organic Cotton', 'Moisture-wicking, highly breathable fabric', 'Durable double-stitched seams', 'Pre-washed to prevent shrinkage'],
    reviews: [
      { id: 'r_1', userName: 'Amit Sharma', rating: 5, comment: 'Super comfortable shirt, fabric feels rich and ideal for summers.', date: '2026-06-10' },
      { id: 'r_2', userName: 'Rohit K.', rating: 4, comment: 'Good fit, color is exactly as shown. Highly recommended.', date: '2026-07-02' }
    ],
    tags: ['shirt', 'men fashion', 'linen', 'casual']
  },
  {
    id: 'fash_2',
    name: 'Elegant Anarkali Cotton Kurta Set',
    brand: 'Biba',
    seller: mockSellers['seller_3'],
    category: 'fashion',
    subcategory: 'Women Wear',
    originalPrice: 4999,
    offerPrice: 2499,
    discountPercent: 50,
    rating: 4.6,
    reviewsCount: 189,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    description: 'Stunning designer Anarkali suit set with gold print work, complete with matching churidar and a flowy printed organza dupatta. Ideal for weddings and festive wear.',
    features: ['100% Premium Cotton Kurti', 'Organza Dupatta with Gota Patti border', 'Comfortable regular fit with side zip', 'Dry clean only for print preservation'],
    reviews: [
      { id: 'r_3', userName: 'Priya Patel', rating: 5, comment: 'Lovely fit! Received so many compliments during Diwali.', date: '2026-05-15' }
    ],
    tags: ['ethnic', 'kurta', 'women fashion', 'festive']
  },
  {
    id: 'fash_3',
    name: 'Retro Classic Sports Sneakers',
    brand: 'Puma',
    seller: mockSellers['seller_1'],
    category: 'fashion',
    subcategory: 'Footwear',
    originalPrice: 5999,
    offerPrice: 2999,
    discountPercent: 50,
    rating: 4.3,
    reviewsCount: 542,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
    description: 'Vintage-inspired athletic sneakers featuring durable leather overlays, cushioned SoftFoam+ sockliner, and a high-traction rubber outsole.',
    features: ['Genuine synthetic leather upper', 'SoftFoam+ comfort insert', 'Grippy rubber vulcanized outsole', 'Modern aesthetic design'],
    reviews: [
      { id: 'r_4', userName: 'Vikram S.', rating: 4, comment: 'Very soft cushioning. Good for running and casual outings.', date: '2026-06-25' }
    ],
    tags: ['shoes', 'sneakers', 'sports', 'footwear']
  },
  {
    id: 'fash_4',
    name: 'Smart Unisex Chronograph Watch',
    brand: 'Zara',
    seller: mockSellers['seller_1'],
    category: 'fashion',
    subcategory: 'Watches',
    originalPrice: 3999,
    offerPrice: 1999,
    discountPercent: 50,
    rating: 4.1,
    reviewsCount: 98,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
    description: 'Sophisticated minimalist dial wristwatch with genuine leather straps, premium quartz movement, and multi-subdial chronograph capabilities.',
    features: ['Japanese Quartz Movement', 'Water resistant up to 30m (3 ATM)', 'Genuine Italian tan leather strap', 'Stainless steel casing'],
    reviews: [],
    tags: ['watch', 'accessory', 'premium']
  },
  {
    id: 'fash_5',
    name: 'Waterproof Active Travel Backpack',
    brand: 'Nike',
    seller: mockSellers['seller_3'],
    category: 'fashion',
    subcategory: 'Accessories',
    originalPrice: 2999,
    offerPrice: 1499,
    discountPercent: 50,
    rating: 4.5,
    reviewsCount: 220,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
    description: 'Highly rugged, water-resistant travel and utility backpack featuring a padded 15.6-inch laptop compartment, ergonomic mesh straps, and secret anti-theft pocket.',
    features: ['High-density 600D Polyester fabric', 'Dedicated padded laptop pocket', 'Hidden back security zipper', 'Side water bottle holders'],
    reviews: [],
    tags: ['bag', 'backpack', 'travel', 'utility']
  },

  // ELECTRONICS (5 Products)
  {
    id: 'elec_1',
    name: 'AcousticPro Hybrid Active Noise Cancelling Headphones',
    brand: 'Sony',
    seller: mockSellers['seller_1'],
    category: 'electronics',
    subcategory: 'Audio & Head-wear',
    originalPrice: 19999,
    offerPrice: 11999,
    discountPercent: 40,
    rating: 4.8,
    reviewsCount: 1205,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    description: 'Experience pure audio luxury. The AcousticPro features advanced 40mm dynamic drivers, hybrid ANC filters that block 98% of ambient noise, and a massive 50-hour battery life with fast charge.',
    features: ['Dual feedback hybrid active noise cancellation', 'LDAC High-Resolution audio support', 'Smart touch controls on earcups', '50 Hours battery with ANC off, 35 with ANC on', 'USB-C Quick charge: 10 mins gives 5 hours'],
    reviews: [
      { id: 'er_1', userName: 'Nikhil Deshmukh', rating: 5, comment: 'Phenomenal noise cancellation. Bass is punchy without muddiness.', date: '2026-07-01' },
      { id: 'er_2', userName: 'Ananya Roy', rating: 5, comment: 'Worth every rupee. Sound stage is super wide and batteries last forever.', date: '2026-07-08' }
    ],
    tags: ['headphones', 'audio', 'noise cancelling', 'sony', 'wireless']
  },
  {
    id: 'elec_2',
    name: 'AlphaBook Pro 14" M-Series Laptop',
    brand: 'Apple',
    seller: mockSellers['seller_1'],
    category: 'electronics',
    subcategory: 'Laptops',
    originalPrice: 129900,
    offerPrice: 109900,
    discountPercent: 15,
    rating: 4.9,
    reviewsCount: 384,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
    description: 'Next-generation computing powered by the supercharged M3 processor. Features a stunning 14.2-inch Liquid Retina XDR display, 16GB unified memory, and 512GB ultra-fast SSD.',
    features: ['Apple M3 Silicon Chip with 8-core CPU and 10-core GPU', 'Liquid Retina XDR display with 120Hz ProMotion', 'Up to 22 hours of continuous battery life', '1080p FaceTime HD camera with studio-grade mics'],
    reviews: [],
    tags: ['laptop', 'notebook', 'apple', 'developer', 'premium']
  },
  {
    id: 'elec_3',
    name: 'Smart Horizon 6.7" AMOLED Smartphone',
    brand: 'OnePlus',
    seller: mockSellers['seller_1'],
    category: 'electronics',
    subcategory: 'Smartphones',
    originalPrice: 49999,
    offerPrice: 39999,
    discountPercent: 20,
    rating: 4.5,
    reviewsCount: 880,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
    description: 'State of the art smartphone boasting a brilliant 120Hz AMOLED fluid screen, high-performance Snapdragon 8 Gen 2 chipset, and custom 50MP Hasselblad triple camera setup.',
    features: ['6.7" QHD+ LTPO Fluid AMOLED display', '50MP + 48MP + 32MP Hasselblad cameras', '100W SUPERVOOC charging (0-100% in 25 mins)', '5000 mAh dual-cell battery'],
    reviews: [],
    tags: ['phone', 'mobile', 'android', '5g']
  },
  {
    id: 'elec_4',
    name: 'PulseFit Pro Smartwatch with SpO2',
    brand: 'Boat',
    seller: mockSellers['seller_1'],
    category: 'electronics',
    subcategory: 'Smartwatches',
    originalPrice: 5999,
    offerPrice: 1999,
    discountPercent: 66,
    rating: 4.2,
    reviewsCount: 2240,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop',
    description: 'Stay connected and track your health metrics. The PulseFit Pro tracks blood oxygen (SpO2), heart rate, sleep quality, and features 100+ active sports modes with full IP68 water resistance.',
    features: ['1.85" HD Curved Touchscreen Display', 'Real-time Heart Rate & SpO2 blood tracking', 'Bluetooth calling via built-in speaker and mic', 'Up to 10 days standby battery'],
    reviews: [],
    tags: ['smartwatch', 'fitness', 'tracker', 'wearable']
  },
  {
    id: 'elec_5',
    name: 'CinemaSound Premium 120W Soundbar',
    brand: 'Boat',
    seller: mockSellers['seller_1'],
    category: 'electronics',
    subcategory: 'Audio & Head-wear',
    originalPrice: 12999,
    offerPrice: 6499,
    discountPercent: 50,
    rating: 4.4,
    reviewsCount: 456,
    stockStatus: 'out_of_stock',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
    description: 'Bring the theatre home. This 120W RMS soundbar features a wired subwoofer, Dolby Audio compatibility, and multiple input channels (HDMI ARC, Optical, Bluetooth 5.0, AUX).',
    features: ['120W RMS surround sound output', 'Powerful 2.1 channel with dedicated sub-woofer', 'Dolby Digital surround sound tuning', 'Wireless BT 5.0 connection'],
    reviews: [],
    tags: ['soundbar', 'speaker', 'home theatre', 'audio']
  },

  // AGRICULTURE (4 Products)
  {
    id: 'agro_1',
    name: 'High-Yield Hybrid Organic Cotton Seeds (Pack of 5)',
    brand: 'Mahyco',
    seller: mockSellers['seller_2'],
    category: 'agriculture',
    subcategory: 'Organic Seeds',
    originalPrice: 1200,
    offerPrice: 799,
    discountPercent: 33,
    rating: 4.7,
    reviewsCount: 94,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop',
    description: 'Genetically superior hybrid cotton seeds optimized for high boll retention, pest resistance (especially bollworm), and drought tolerance. Yields long-staple premium cotton fiber.',
    features: ['Certified F1 Hybrid organic seeds', 'High resistance to sucking pests & drought', 'Boll weight averages 5.5 - 6.0 grams', 'Germination rate: >85%'],
    reviews: [
      { id: 'ar_1', userName: 'Baldev Singh', rating: 5, comment: 'Very high germination. The crop yield was excellent this season.', date: '2026-06-12' }
    ],
    tags: ['seeds', 'cotton', 'farming', 'organic']
  },
  {
    id: 'agro_2',
    name: 'Bio-Grow Vermicompost Premium Organic Manure',
    brand: 'JSS Agro',
    seller: mockSellers['seller_2'],
    category: 'agriculture',
    subcategory: 'Fertilizers',
    originalPrice: 599,
    offerPrice: 299,
    discountPercent: 50,
    rating: 4.8,
    reviewsCount: 512,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=600&auto=format&fit=crop',
    description: '100% pure earthworm castings compost rich in nitrogen, phosphorus, potash (NPK), and micronutrients. Improves soil aeration, water retention, and microbial activity.',
    features: ['100% Organic certified vermicompost', 'Contains native soil-friendly microbes', 'Odourless, non-toxic, and chemical-free', 'Perfect for crops, vegetables, and potted plants'],
    reviews: [
      { id: 'ar_2', userName: 'Sunita Patil', rating: 5, comment: 'My kitchen garden tomatoes are flourishing! Excellent manure.', date: '2026-07-05' }
    ],
    tags: ['fertilizer', 'manure', 'compost', 'plants', 'gardening']
  },
  {
    id: 'agro_3',
    name: 'Heavy Duty 5-in-1 Farming & Gardening Toolset',
    brand: 'Falcon',
    seller: mockSellers['seller_2'],
    category: 'agriculture',
    subcategory: 'Gardening Tools',
    originalPrice: 2499,
    offerPrice: 1499,
    discountPercent: 40,
    rating: 4.5,
    reviewsCount: 167,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop',
    description: 'Professional grade farming and landscaping toolkit including a weed cutter, high-tensile steel trowel, soil rake, hand cultivator, and heavy-duty pruning shears.',
    features: ['Forged carbon steel tool heads', 'Ergonomic non-slip rubber handles', 'Rust-resistant protective coating', 'Includes heavy-duty carrying bag'],
    reviews: [],
    tags: ['tools', 'gardening', 'farming', 'shears', 'rake']
  },
  {
    id: 'agro_4',
    name: 'Automatic Smart Drip Irrigation Kit',
    brand: 'JSS Agro',
    seller: mockSellers['seller_2'],
    category: 'agriculture',
    subcategory: 'Drip Irrigation',
    originalPrice: 3999,
    offerPrice: 2199,
    discountPercent: 45,
    rating: 4.3,
    reviewsCount: 82,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=600&auto=format&fit=crop',
    description: 'Complete DIY micro-drip irrigation kit for watering up to 100 plants automatically. Saves up to 70% water compared to manual watering. Ideal for crops and row planting.',
    features: ['Includes 30M main pipe and 20 adjustable drippers', 'Automatic tap timer with scheduling', 'Supports pressure-compensating emitters', 'Easy to assemble without specialized tools'],
    reviews: [],
    tags: ['irrigation', 'water', 'drip kit', 'smart farming']
  },

  // HOME DECOR (4 Products)
  {
    id: 'dec_1',
    name: 'Handcrafted Ceramic Floral Vase Set',
    brand: 'Nestasia',
    seller: mockSellers['seller_4'],
    category: 'home_decor',
    subcategory: 'Vases & Planters',
    originalPrice: 1999,
    offerPrice: 999,
    discountPercent: 50,
    rating: 4.6,
    reviewsCount: 120,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=600&auto=format&fit=crop',
    description: 'Set of 3 minimalist glazed white ceramic vases. Handcrafted by local artisans, featuring ribbed textures and sleek neck profiles to elevate modern home aesthetics.',
    features: ['100% Natural terracotta ceramic material', 'Durable glossy scratch-resistant glaze', 'Ideal for fresh, dried, or artificial flowers', 'Dimensions: Small (6"), Medium (8"), Large (10")'],
    reviews: [
      { id: 'dr_1', userName: 'Meera Nair', rating: 5, comment: 'Absolutely beautiful. Glazing is top notch and looks premium.', date: '2026-06-20' }
    ],
    tags: ['vase', 'ceramic', 'decor', 'handcrafted']
  },
  {
    id: 'dec_2',
    name: 'Nordic Gold Ring Metal Desk Lamp',
    brand: 'Home Centre',
    seller: mockSellers['seller_4'],
    category: 'home_decor',
    subcategory: 'Lighting',
    originalPrice: 3499,
    offerPrice: 1699,
    discountPercent: 51,
    rating: 4.4,
    reviewsCount: 78,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop',
    description: 'Stunning minimalist circular desk light with premium brushed brass finishing and integrated warm LED strip. Adds a sophisticated warm glow to study tables and bedside stands.',
    features: ['Brushed brass rust-proof steel frame', 'Integrated 3000K warm white LED light', 'Touch control with 3 dimming levels', 'Includes 1.5m braided power cord'],
    reviews: [],
    tags: ['lamp', 'lighting', 'table light', 'brass']
  },
  {
    id: 'dec_3',
    name: 'Luxury Velvet Scented Candle Pack (Set of 4)',
    brand: 'Nestasia',
    seller: mockSellers['seller_4'],
    category: 'home_decor',
    subcategory: 'Scented Candles',
    originalPrice: 1499,
    offerPrice: 699,
    discountPercent: 53,
    rating: 4.7,
    reviewsCount: 310,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop',
    description: 'Premium soy-wax candles in frosted glass jars. Infused with pure essential oils: Lavender fields, French Vanilla, Cinnamon Rose, and Sandalwood-Jasmine.',
    features: ['100% natural biodegradable Soy Wax', 'Zero toxic paraffin wax used', 'Extended burn time: 30 hours per candle', 'Double cotton wicks for clean burning'],
    reviews: [],
    tags: ['candle', 'fragrance', 'aromatherapy', 'gift set']
  },
  {
    id: 'dec_4',
    name: 'Mandala Art Handwoven Cotton Tapestry',
    brand: 'Fabindia',
    seller: mockSellers['seller_4'],
    category: 'home_decor',
    subcategory: 'Wall Accents',
    originalPrice: 2499,
    offerPrice: 1199,
    discountPercent: 52,
    rating: 4.5,
    reviewsCount: 45,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop',
    description: 'Large, intricate hand-printed mandala wall tapestry made of pure heavy organic cotton. Adds a beautiful boho-chic focal point to living rooms or bedrooms.',
    features: ['100% organic cotton fabric', 'Non-toxic vegetable-based dyes', 'Dimensions: 84" x 90" (Queen Size)', 'Easy to hang with loop mounts'],
    reviews: [],
    tags: ['wall art', 'tapestry', 'cotton', 'bohemian']
  },

  // FURNITURE (4 Products)
  {
    id: 'furn_1',
    name: 'ErgoPro High-Back Mesh Ergonomic Office Chair',
    brand: 'Urban Ladder',
    seller: mockSellers['seller_4'],
    category: 'furniture',
    subcategory: 'Office Furniture',
    originalPrice: 14999,
    offerPrice: 7999,
    discountPercent: 46,
    rating: 4.6,
    reviewsCount: 418,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?q=80&w=600&auto=format&fit=crop',
    description: 'Experience strain-free work sessions. Featuring a high-breathability mesh backrest, adjustable 3D armrests, heavy-duty gas lift, and dynamic lumbar support that matches spine curvature.',
    features: ['High-tensile Korean mesh backrest', '3D adjustable armrests and neck support', 'Synchro-tilt mechanism with multi-lock positions', 'Class 4 gas lift cylinder (supports up to 140kg)'],
    reviews: [
      { id: 'fr_1', userName: 'Devendra K.', rating: 5, comment: 'My back pain is completely gone. Amazing build and features.', date: '2026-06-30' }
    ],
    tags: ['chair', 'office', 'ergonomic', 'workspace']
  },
  {
    id: 'furn_2',
    name: 'Classic Solid Sheesham Wood Coffee Table',
    brand: 'Pepperfry',
    seller: mockSellers['seller_4'],
    category: 'furniture',
    subcategory: 'Coffee Tables',
    originalPrice: 11999,
    offerPrice: 5999,
    discountPercent: 50,
    rating: 4.7,
    reviewsCount: 145,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop',
    description: 'Timeless coffee table handcrafted from premium Indian Rosewood (Sheesham). Features natural rich grain textures, a spacious lower shelf, and protective melamine finish.',
    features: ['100% Solid Indian Sheesham Wood', 'Warm teak wood finish with high sealant', 'Spacious open bottom shelf for magazines/remotes', 'Termite-resistant and kiln-dried wood'],
    reviews: [],
    tags: ['table', 'coffee table', 'wood', 'sheesham']
  },
  {
    id: 'furn_3',
    name: 'Velour Comfort 3-Seater Minimalist Sofa',
    brand: 'Royal Oak',
    seller: mockSellers['seller_4'],
    category: 'furniture',
    subcategory: 'Living Room Sofas',
    originalPrice: 34999,
    offerPrice: 19999,
    discountPercent: 42,
    rating: 4.4,
    reviewsCount: 52,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
    description: 'Chic, modern 3-seater sofa upholstered in ultra-soft, stain-resistant velvet fabric. Constructed on a solid pine wood frame with pocketed spring seat cushions for ultimate comfort.',
    features: ['Stain-resistant premium velvet upholstery', 'Solid pinewood inner frame construction', 'High density 32-gauge foam comfort filling', 'Tapered oakwood legs'],
    reviews: [],
    tags: ['sofa', 'couch', 'living room', 'velvet']
  },
  {
    id: 'furn_4',
    name: 'Solid Teak Wood Queen Bed Frame',
    brand: 'Pepperfry',
    seller: mockSellers['seller_4'],
    category: 'furniture',
    subcategory: 'Beds & Wardrobes',
    originalPrice: 49999,
    offerPrice: 28999,
    discountPercent: 42,
    rating: 4.8,
    reviewsCount: 30,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
    description: 'Sturdy, handcrafted queen size bed frame made of solid teak wood. Includes under-bed storage drawers and features a beautifully carved headboard.',
    features: ['Teak wood with honey oak finish', 'Four spacious rolling storage drawers', 'Reinforced metal slat structure', '5 years structural warranty'],
    reviews: [],
    tags: ['bed', 'furniture', 'teak wood', 'bedroom']
  },

  // JEWELLERY (4 Products)
  {
    id: 'jewel_1',
    name: '925 Sterling Silver Royal Queen Necklace',
    brand: 'Giva',
    seller: mockSellers['seller_5'],
    category: 'jewellery',
    subcategory: 'Silver Jewelry',
    originalPrice: 4999,
    offerPrice: 2199,
    discountPercent: 56,
    rating: 4.8,
    reviewsCount: 650,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
    description: 'A masterpiece of elegance. Crafted in pure 925 sterling silver, this necklace features a brilliant central AAA+ Cubic Zirconia drop surrounded by halo micro-paves.',
    features: ['925 Sterling Silver with Rhodium plating (prevents tarnishing)', 'AAA+ Grade Cubic Zirconia crystals', 'Adjustable link chain length (16" + 2" extension)', 'Comes with silver certificate & jewelry box'],
    reviews: [
      { id: 'jr_1', userName: 'Kriti Sen', rating: 5, comment: 'Stunning polish, looks exactly like real diamonds! The packaging was lovely.', date: '2026-07-04' }
    ],
    tags: ['silver', 'necklace', 'giva', 'pendant', 'gift']
  },
  {
    id: 'jewel_2',
    name: '22K Gold Traditional Bridal Jhumka Earrings',
    brand: 'Tanishq',
    seller: mockSellers['seller_5'],
    category: 'jewellery',
    subcategory: 'Gold Ornaments',
    originalPrice: 45000,
    offerPrice: 39500,
    discountPercent: 12,
    rating: 4.9,
    reviewsCount: 112,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    description: 'Exquisite traditional gold jhumkas featuring delicate filigree design, ruby bead drops, and fine floral engravings. Perfect pairing for bridal attire.',
    features: ['22 Karat Yellow Gold (91.6% purity)', 'BIS Hallmarked certification', 'Weight: 14.5 grams', 'Friction post with heavy safety screw back'],
    reviews: [],
    tags: ['gold', 'earrings', 'jhumka', 'traditional', 'bridal']
  },
  {
    id: 'jewel_3',
    name: 'Classic Solitaire Diamond Ring in Platinum',
    brand: 'Tanishq',
    seller: mockSellers['seller_5'],
    category: 'jewellery',
    subcategory: 'Diamond Collections',
    originalPrice: 85000,
    offerPrice: 75000,
    discountPercent: 11,
    rating: 4.9,
    reviewsCount: 42,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
    description: 'Timeless solitaire diamond engagement ring. Features a certified 0.50-carat round brilliant cut VVS1-E diamond set in a classic 6-prong platinum band.',
    features: ['0.50 Carat Round Brilliant Diamond', 'VVS1 Clarity, E Color rating (Colorless)', '950 Platinum band casing', 'IGI Diamond Certificate included'],
    reviews: [],
    tags: ['ring', 'diamond', 'solitaire', 'platinum', 'wedding']
  },
  {
    id: 'jewel_4',
    name: 'Elegant Pearl Drop Silver Bracelet',
    brand: 'Giva',
    seller: mockSellers['seller_5'],
    category: 'jewellery',
    subcategory: 'Chains & Bracelets',
    originalPrice: 2999,
    offerPrice: 1399,
    discountPercent: 53,
    rating: 4.6,
    reviewsCount: 95,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    description: 'Delicate sterling silver chain bracelet adorned with high-luster freshwater cultured pearls and sparkling micro-cz spacers.',
    features: ['925 Sterling Silver base with rhodium polish', '6mm natural freshwater cultured pearls', 'Lobster claw clasp with safety chain', 'Hypoallergenic, nickel-free'],
    reviews: [],
    tags: ['bracelet', 'pearl', 'silver', 'girls accessory']
  },

  // BOOKS (4 Products)
  {
    id: 'book_1',
    name: 'Designing Data-Intensive Applications',
    brand: 'OReilly',
    seller: mockSellers['seller_1'],
    category: 'books',
    subcategory: 'Academic & Competitive',
    originalPrice: 1499,
    offerPrice: 1099,
    discountPercent: 26,
    rating: 4.9,
    reviewsCount: 3450,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop',
    description: 'The definitive guide to understanding system design, data architectures, replication, partitioning, transactions, and distributed consensus. A must-read for software engineers.',
    features: ['Author: Martin Kleppmann', '560 pages of deep technical concepts', 'Highly detailed system architecture diagrams', 'Latest softcover print edition'],
    reviews: [
      { id: 'br_1', userName: 'Sanjay Gupta', rating: 5, comment: 'Bible for system design. If you are preparing for system design interviews, read this.', date: '2026-06-15' }
    ],
    tags: ['coding', 'system design', 'database', 'education']
  },
  {
    id: 'book_2',
    name: 'Atomic Habits: An Easy & Proven Way',
    brand: 'Penguin',
    seller: mockSellers['seller_1'],
    category: 'books',
    subcategory: 'Self-Help',
    originalPrice: 799,
    offerPrice: 449,
    discountPercent: 43,
    rating: 4.8,
    reviewsCount: 15400,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    description: 'James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    features: ['Author: James Clear', 'Worldwide Bestseller (Over 10M copies sold)', 'Practical worksheets and habit tracking tools', 'Premium paperback print quality'],
    reviews: [],
    tags: ['self-help', 'habits', 'psychology', 'bestseller']
  },
  {
    id: 'book_3',
    name: 'The Alchemist (Special Illustrated Edition)',
    brand: 'HarperCollins',
    seller: mockSellers['seller_1'],
    category: 'books',
    subcategory: 'Fiction',
    originalPrice: 499,
    offerPrice: 299,
    discountPercent: 40,
    rating: 4.7,
    reviewsCount: 6730,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop',
    description: 'Paulo Coelho\'s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.',
    features: ['Author: Paulo Coelho', 'Stunning illustrated pages', 'Inspirational allegorical novel', 'Pocket-friendly paperback format'],
    reviews: [],
    tags: ['fiction', 'novel', 'classic', 'inspiration']
  },
  {
    id: 'book_4',
    name: 'Objective General English for Competitive Exams',
    brand: 'Arihant',
    seller: mockSellers['seller_1'],
    category: 'books',
    subcategory: 'Academic & Competitive',
    originalPrice: 399,
    offerPrice: 249,
    discountPercent: 37,
    rating: 4.4,
    reviewsCount: 1220,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop',
    description: 'Comprehensive practice book for grammar, vocabulary, sentence correction, and comprehension for bank PO, SSC, UPSC, and state competitive examinations.',
    features: ['Author: S.P. Bakshi', 'Includes 10,000+ practice questions', 'Previous years solved papers and mock tests', 'Easy to follow grammar rules explanation'],
    reviews: [],
    tags: ['study', 'exams', 'english', 'ssc']
  },

  // HEALTH (4 Products)
  {
    id: 'heal_1',
    name: 'Premium Whey Protein Gold Standard (2kg)',
    brand: 'Optimum Nutrition',
    seller: mockSellers['seller_6'],
    category: 'health',
    subcategory: 'Supplements',
    originalPrice: 7999,
    offerPrice: 6299,
    discountPercent: 21,
    rating: 4.7,
    reviewsCount: 5400,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=600&auto=format&fit=crop',
    description: 'The world\'s best-selling whey protein powder. Delivers 24g of high-quality whey protein isolates per serving to support muscle building and post-workout recovery.',
    features: ['24g Whey Protein per serving (mainly Isolate)', '5.5g of naturally occurring BCAAs', 'Gluten-free and banned substance tested', 'Delicious double rich chocolate flavor'],
    reviews: [
      { id: 'hr_1', userName: 'Karan Mehra', rating: 5, comment: 'Original product, verified authenticity on the app. Mixes perfectly.', date: '2026-07-02' }
    ],
    tags: ['protein', 'supplements', 'fitness', 'workout', 'on']
  },
  {
    id: 'heal_2',
    name: 'Omron Hem-7120 Fully Automatic Blood Pressure Monitor',
    brand: 'Omron',
    seller: mockSellers['seller_6'],
    category: 'health',
    subcategory: 'Health Monitors',
    originalPrice: 2999,
    offerPrice: 1999,
    discountPercent: 33,
    rating: 4.6,
    reviewsCount: 2890,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=600&auto=format&fit=crop',
    description: 'Simple, accurate one-touch BP monitor with Intellisense technology. Displays systolic, diastolic, and pulse rate with body movement detection.',
    features: ['Intellisense technology for personalized inflation', 'Cuff wrapping guide indicator', 'Hypertension indicator alert', 'Fits arm circumference: 22 - 32 cm'],
    reviews: [],
    tags: ['bp monitor', 'medical', 'bp tracker', 'omron']
  },
  {
    id: 'heal_3',
    name: 'Pure Cold Pressed Organic Amla Juice (1L)',
    brand: 'Himalaya',
    seller: mockSellers['seller_6'],
    category: 'health',
    subcategory: 'Ayurvedic Wellness',
    originalPrice: 499,
    offerPrice: 249,
    discountPercent: 50,
    rating: 4.5,
    reviewsCount: 810,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    description: '100% natural, cold-pressed Indian Gooseberry (Amla) juice. Rich in Vitamin C, boosts immunity, improves digestion, and promotes healthy skin and hair.',
    features: ['No added artificial sugars or water', 'Cold-pressed under hygienic conditions', 'USDA Organic certified juice', 'Daily health shot format'],
    reviews: [],
    tags: ['amla', 'juice', 'ayurveda', 'immunity']
  },
  {
    id: 'heal_4',
    name: 'TPE Eco-Friendly Thick Fitness Yoga Mat',
    brand: 'Dabur',
    seller: mockSellers['seller_6'],
    category: 'health',
    subcategory: 'Fitness Equipment',
    originalPrice: 1999,
    offerPrice: 999,
    discountPercent: 50,
    rating: 4.3,
    reviewsCount: 312,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=600&auto=format&fit=crop',
    description: 'Extra thick, dual-textured slip-resistant workout mat made of eco-friendly TPE material. Provides superior joint cushioning for yoga, pilates, and home workouts.',
    features: ['6mm extra cushioning TPE foam', 'Double-sided non-slip grip texture', 'Tear-resistant and waterproof', 'Includes free carrying strap'],
    reviews: [],
    tags: ['yoga mat', 'exercise', 'gym mat', 'fitness']
  },

  // BEAUTY (5 Products)
  {
    id: 'beau_1',
    name: 'Mamaearth Vitamin C Daily Skin Illuminate Face Serum',
    brand: 'Mamaearth',
    seller: mockSellers['seller_6'],
    category: 'beauty',
    subcategory: 'Skincare',
    originalPrice: 699,
    offerPrice: 499,
    discountPercent: 29,
    rating: 4.4,
    reviewsCount: 4520,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    description: 'Achieve radiant, glowing skin. Infused with highly potent Vitamin C, Turmeric, and Niacinamide to reduce dark spots, combat hyperpigmentation, and firm aging skin.',
    features: ['Formulated with 15% Vitamin C', 'Turmeric reduces inflammation & adds glow', 'Lightweight, fast-absorbing oil-free formula', 'Free of silicones, parabens, and sulfates'],
    reviews: [
      { id: 'bur_1', userName: 'Ritu V.', rating: 4, comment: 'Actually worked on my dark spots. Took 3 weeks but visible results.', date: '2026-06-28' }
    ],
    tags: ['serum', 'skincare', 'vitamin c', 'glowing skin']
  },
  {
    id: 'beau_2',
    name: 'Loreal Professionnel Absolut Repair Hair Mask',
    brand: 'Loreal',
    seller: mockSellers['seller_6'],
    category: 'beauty',
    subcategory: 'Haircare',
    originalPrice: 949,
    offerPrice: 849,
    discountPercent: 11,
    rating: 4.6,
    reviewsCount: 1920,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop',
    description: 'Professional-grade hair mask enriched with Gold Quinoa and Wheat Protein. Instantly repairs damaged hair fibers, leaving hair 77% less damaged and shiny.',
    features: ['Infused with Gold Quinoa Protein extract', 'Deep nourishing cream texture', 'Ideal for dry, frizzy, and chemically treated hair', 'Reduces split ends & locks in moisture'],
    reviews: [],
    tags: ['hair mask', 'hair repair', 'loreal', 'salon']
  },
  {
    id: 'beau_3',
    name: 'Matte Liquid Lipstick Longwear Set (Pack of 3)',
    brand: 'Lakme',
    seller: mockSellers['seller_6'],
    category: 'beauty',
    subcategory: 'Makeup Products',
    originalPrice: 1299,
    offerPrice: 799,
    discountPercent: 38,
    rating: 4.3,
    reviewsCount: 1450,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop',
    description: 'Set of three ultra-pigmented liquid lipsticks that dry down to a velvety matte finish. Transfer-proof, lightweight, and lasts up to 16 hours.',
    features: ['16 Hour transfer-proof matte finish', 'Includes Nude Pink, Deep Red, and Coral shades', 'Enriched with Vitamin E for non-drying wear', 'Precision wand applicator'],
    reviews: [],
    tags: ['makeup', 'lipstick', 'matte', 'lip gloss']
  },
  {
    id: 'beau_4',
    name: 'Premium Eau De Parfum French Lavender (50ml)',
    brand: 'Loreal',
    seller: mockSellers['seller_6'],
    category: 'beauty',
    subcategory: 'Fragrances',
    originalPrice: 2499,
    offerPrice: 1499,
    discountPercent: 40,
    rating: 4.5,
    reviewsCount: 230,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop',
    description: 'Luxury fragrance crafted from hand-picked French lavender blossoms, hints of vanilla pods, and base notes of warm cedarwood. Rich, long-lasting scent trail.',
    features: ['Concentrated Eau de Parfum (15% oil)', 'Lasts up to 8 hours on fabric', 'Premium heavy glass atomizer bottle', 'Ideal for evening wear'],
    reviews: [],
    tags: ['perfume', 'scent', 'fragrance', 'lavender']
  },
  {
    id: 'beau_5',
    name: 'Mamaearth Tea Tree Face Wash for Acne Control',
    brand: 'Mamaearth',
    seller: mockSellers['seller_6'],
    category: 'beauty',
    subcategory: 'Skincare',
    originalPrice: 349,
    offerPrice: 299,
    discountPercent: 14,
    rating: 4.2,
    reviewsCount: 6810,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
    description: 'Dermatologically tested facial wash containing Tea Tree oil and Neem extract. Combats acne-causing bacteria, balances sebum output, and deep-cleans pores.',
    features: ['Contains natural antibacterial Neem & Tea Tree', 'Sulfate and paraben free formula', 'Safe for sensitive and acne-prone skin types', 'Ph-balanced moisturizing foam'],
    reviews: [],
    tags: ['face wash', 'tea tree', 'acne', 'skincare']
  },

  // AUTOMOBILE (4 Products)
  {
    id: 'auto_1',
    name: '4K Ultra-HD Wi-Fi Smart Car Dash Camera',
    brand: 'Qubo',
    seller: mockSellers['seller_1'],
    category: 'automobile',
    subcategory: 'GPS & Dashcams',
    originalPrice: 9999,
    offerPrice: 4999,
    discountPercent: 50,
    rating: 4.6,
    reviewsCount: 840,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=600&auto=format&fit=crop',
    description: 'Drive with total peace of mind. The Qubo Smart Dashcam records crystal clear 4K footage, features G-sensor incident detection, built-in GPS mapping, and full night-vision recording.',
    features: ['Real 4K Ultra-HD Sony IMX335 Sensor recording', 'Built-in GPS logging & Route Tracking via App', 'Built-in Wi-Fi connects directly to your phone', '24H Parking monitoring with G-Sensor auto lock'],
    reviews: [
      { id: 'aur_1', userName: 'Rohan Joshi', rating: 5, comment: 'Extremely clear night video. App connectivity is quick and reliable.', date: '2026-06-18' }
    ],
    tags: ['dashcam', 'car camera', 'safety', 'gps', 'qubo']
  },
  {
    id: 'auto_2',
    name: 'Premium Car Wax & Dashboard Cleaner Kit',
    brand: '3M',
    seller: mockSellers['seller_1'],
    category: 'automobile',
    subcategory: 'Cleaning Products',
    originalPrice: 1299,
    offerPrice: 799,
    discountPercent: 38,
    rating: 4.5,
    reviewsCount: 1670,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop',
    description: 'Complete car detailing kit. Contains Premium liquid wax for paint gloss protection, dashboard cleaner spray, glass cleaner, and 2 premium microfiber towels.',
    features: ['Includes Carnauba Liquid Wax (250ml)', 'Dashboard & Plastic Restorer (250ml)', '2x High gsm lint-free Microfiber towels', 'Protects paint from UV rays & water spots'],
    reviews: [],
    tags: ['car wash', 'wax', 'cleaning', 'detailer', '3m']
  },
  {
    id: 'auto_3',
    name: 'Automatic Clamping Smart Car Mount with Qi wireless charging',
    brand: 'Qubo',
    seller: mockSellers['seller_1'],
    category: 'automobile',
    subcategory: 'Car Accessories',
    originalPrice: 2999,
    offerPrice: 1499,
    discountPercent: 50,
    rating: 4.2,
    reviewsCount: 315,
    stockStatus: 'in_stock',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=600&auto=format&fit=crop',
    description: 'Sleek air-vent phone holder featuring an infrared motion sensor that automatically clamps your phone, plus an integrated 15W Qi-certified fast wireless charger.',
    features: ['Infrared automatic open/clamp sensor', '15W Qi Fast Wireless Charging support', 'Sturdy anti-slip silicone padded vent clip', 'One-touch quick release button on back'],
    reviews: [],
    tags: ['car charger', 'phone holder', 'qi charger', 'wireless']
  },
  {
    id: 'auto_4',
    name: 'Vega Bolt Off-Road Full Face Helmet (Dot Certified)',
    brand: 'Vega',
    seller: mockSellers['seller_1'],
    category: 'automobile',
    subcategory: 'Bike Gears & Helmets',
    originalPrice: 2999,
    offerPrice: 1999,
    discountPercent: 33,
    rating: 4.6,
    reviewsCount: 1240,
    stockStatus: 'low_stock',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop',
    description: 'High impact ABS shell full face helmet. Features a clear scratch-resistant visor, multiple air ventilation ports, removable washable liners, and ISI/DOT dual safety certification.',
    features: ['DOT & ISI certified high safety shell', 'Optically correct scratch-resistant clear visor', 'Quick release metallic buckle lock', 'Detachable hypoallergenic sweat liner'],
    reviews: [],
    tags: ['helmet', 'bike', 'vega', 'safety gear']
  }
];

export const mockTestimonials = [
  {
    id: 't_1',
    userName: 'Rajesh Deshpande',
    role: 'Progressive Farmer, Baramati',
    comment: 'The organic seeds and automatic drip irrigation kit from JSS Agriculture solved my irrigation issues. The Hindi support and fast delivery are exemplary!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't_2',
    userName: 'Meenakshi Iyer',
    role: 'Interior Designer, Bangalore',
    comment: 'I use the furniture and decor collection for client assignments. The ceramic vases and Sheesham coffee table are extremely premium. The customer support is fantastic.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't_3',
    userName: 'Aniket Kulkarni',
    role: 'Software Architect, Pune',
    comment: 'Buying high-value tech gear online is always stressful, but the open-box option and original Apple warranty from Supercom Net made buying my MacBook a breeze.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  }
];

export const mockFaqs = [
  {
    question: 'How do I track my order delivery?',
    answer: 'Once your order is shipped, we will send you a tracking link via SMS, email, and inside your Notifications tab with detailed courier details and ETA.'
  },
  {
    question: 'What payment modes are supported?',
    answer: 'We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit cards (Visa, MasterCard, RuPay), Net Banking, and Cash on Delivery (COD).'
  },
  {
    question: 'How can I register as a seller?',
    answer: 'Click the "Become a Seller" button in the header, input your GSTIN, active bank details, and start listing your products on the JSS Solutions Marketplace in 10 minutes.'
  },
  {
    question: 'Are there any shipping charges?',
    answer: 'We offer free delivery on all orders above ₹499. For orders below ₹499, a nominal delivery charge of ₹40 is applicable.'
  }
];
