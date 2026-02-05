/* =====================================================
   BirKen E-Commerce - JavaScript Application
   Kozmetik ve Sağlık Ürünleri
   ===================================================== */

// =====================================================
// Product Data - Loaded from products-data.js (100 Products)
// The 'products' variable is defined in products-data.js
// which must be loaded before this file
// =====================================================

// REMOVED: Old inline products array
// Products are now loaded from products-data.js

/* OLD PRODUCT DATA START (REMOVED) */
const OLD_PRODUCTS_REMOVED = [{
  /* This is just a marker - the actual old product data has been removed */
  /* See products-data.js for the new 100 products with real images */
    id: 1,
    title: "Ultra Koruyucu Güneş Kremi SPF 50+",
    brand: "Sunveil",
    category: "Güneş Koruyucular",
    price: 349.90,
    oldPrice: 449.90,
    rating: 4.8,
    reviewCount: 234,
    badges: ["%22"],
    attributes: {
      skinType: ["Normal", "Karma", "Hassas"],
      concern: ["Leke", "Kırışıklık"],
      spf: "50+",
      volume: "50 ml",
      form: "Krem"
    },
    stock: 45,
    description: "Güçlü UVA/UVB koruması sunan, su geçirmez formülüyle cildinizi güneşin zararlı etkilerinden korur. Yüz ve vücut için idealdir.",
    ingredients: "Aqua, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Butyl Methoxydibenzoylmethane, Glycerin, Niacinamide, Tocopherol",
    usage: "Güneşe çıkmadan 20 dakika önce yüz ve vücuda bol miktarda uygulayın. Her 2 saatte bir tekrarlayın."
  },
  {
    id: 2,
    title: "Niacinamide %10 + Çinko Serum",
    brand: "DermaNova",
    category: "Cilt Bakımı",
    price: 189.90,
    oldPrice: null,
    rating: 4.6,
    reviewCount: 567,
    badges: ["Çok Satan"],
    attributes: {
      skinType: ["Yağlı", "Karma"],
      concern: ["Akne", "Leke", "Gözenek"],
      spf: null,
      volume: "30 ml",
      form: "Serum"
    },
    stock: 128,
    description: "Gözenekleri sıkılaştıran, sebum dengesini düzenleyen ve leke görünümünü azaltan güçlü formül.",
    ingredients: "Aqua, Niacinamide (10%), Zinc PCA, Hyaluronic Acid, Aloe Vera Extract",
    usage: "Temiz cilde sabah ve akşam 3-4 damla uygulayın. Nemlendirici ile takip edin."
  },
  {
    id: 3,
    title: "Hyaluronik Asit Nemlendirici Serum",
    brand: "Skinorie",
    category: "Cilt Bakımı",
    price: 159.90,
    oldPrice: 199.90,
    rating: 4.9,
    reviewCount: 892,
    badges: ["%20", "Çok Satan"],
    attributes: {
      skinType: ["Kuru", "Normal", "Hassas"],
      concern: ["Nem", "Kırışıklık"],
      spf: null,
      volume: "30 ml",
      form: "Serum"
    },
    stock: 89,
    description: "Üç farklı molekül ağırlığında hyaluronik asit içeren, yoğun nem sağlayan ve ince çizgileri dolduran serum.",
    ingredients: "Aqua, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Panthenol, Allantoin",
    usage: "Tonik sonrası nemli cilde uygulayın. Nemlendirici ile sabitleyin."
  },
  {
    id: 4,
    title: "Retinol %0.5 Gece Kremi",
    brand: "DermaNova",
    category: "Cilt Bakımı",
    price: 279.90,
    oldPrice: 349.90,
    rating: 4.5,
    reviewCount: 345,
    badges: ["%20"],
    attributes: {
      skinType: ["Normal", "Karma"],
      concern: ["Kırışıklık", "Leke"],
      spf: null,
      volume: "50 ml",
      form: "Krem"
    },
    stock: 34,
    description: "Gece boyunca cildi yenileyen, ince çizgi ve kırışıklıkları görünür şekilde azaltan retinol formülü.",
    ingredients: "Aqua, Retinol (0.5%), Squalane, Ceramide NP, Vitamin E, Shea Butter",
    usage: "Akşam temiz cilde ince bir tabaka halinde uygulayın. Gündüz SPF kullanın."
  },
  {
    id: 5,
    title: "C Vitamini %15 Aydınlatıcı Serum",
    brand: "Skinorie",
    category: "Cilt Bakımı",
    price: 219.90,
    oldPrice: null,
    rating: 4.7,
    reviewCount: 456,
    badges: ["Yeni"],
    attributes: {
      skinType: ["Normal", "Karma", "Kuru"],
      concern: ["Leke", "Parlaklık"],
      spf: null,
      volume: "30 ml",
      form: "Serum"
    },
    stock: 67,
    description: "Stabil C vitamini formu ile cildi aydınlatan, ton eşitsizliklerini gideren ve antioksidan koruma sağlayan serum.",
    ingredients: "Aqua, Ascorbic Acid (15%), Ferulic Acid, Vitamin E, Hyaluronic Acid",
    usage: "Sabah temiz cilde uygulayın. SPF ile takip edin."
  },
  {
    id: 6,
    title: "Bebek Şampuanı - Göz Yakmayan",
    brand: "NeoBebe",
    category: "Anne & Bebek",
    price: 89.90,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 1234,
    badges: ["Çok Satan"],
    attributes: {
      skinType: ["Hassas"],
      concern: [],
      spf: null,
      volume: "300 ml",
      form: "Şampuan"
    },
    stock: 156,
    description: "Bebeklerin hassas saç derisi için özel formül. Göz yakmaz, parabensiz ve hipoalerjeniktir.",
    ingredients: "Aqua, Sodium Lauryl Glucose Carboxylate, Lauryl Glucoside, Glycerin, Chamomile Extract",
    usage: "Islak saça masaj yaparak uygulayın, durulayın."
  },
  {
    id: 7,
    title: "Probiyotik Takviye - 30 Kapsül",
    brand: "BioCore",
    category: "Vitamin & Takviye",
    price: 149.90,
    oldPrice: 179.90,
    rating: 4.6,
    reviewCount: 678,
    badges: ["%17"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "30 Kapsül",
      form: "Kapsül"
    },
    stock: 89,
    description: "10 milyar CFU içeren, bağırsak sağlığını destekleyen multi-strain probiyotik formül.",
    ingredients: "Lactobacillus acidophilus, Bifidobacterium lactis, Lactobacillus rhamnosus, Prebiotic Fiber",
    usage: "Günde 1 kapsül, yemekle birlikte alın."
  },
  {
    id: 8,
    title: "Magnezyum Bisglisinat 400mg",
    brand: "Vitanox",
    category: "Vitamin & Takviye",
    price: 129.90,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 890,
    badges: [],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "60 Tablet",
      form: "Tablet"
    },
    stock: 234,
    description: "Yüksek emilimli magnezyum formu. Kas ve sinir fonksiyonlarını destekler, uyku kalitesini artırır.",
    ingredients: "Magnesium Bisglycinate, Microcrystalline Cellulose, Silicon Dioxide",
    usage: "Günde 1-2 tablet, yatmadan önce alın."
  },
  {
    id: 9,
    title: "Antibakteriyel Ağız Gargarası",
    brand: "Oralyn",
    category: "Ağız & Diş",
    price: 59.90,
    oldPrice: 79.90,
    rating: 4.4,
    reviewCount: 234,
    badges: ["%25"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "500 ml",
      form: "Gargara"
    },
    stock: 167,
    description: "12 saat antibakteriyel koruma. Diş eti sağlığını destekler, ağız kokusunu önler.",
    ingredients: "Aqua, Cetylpyridinium Chloride, Xylitol, Menthol, Eucalyptus Extract",
    usage: "Günde 2 kez, 30 saniye gargara yapın."
  },
  {
    id: 10,
    title: "Dökülme Karşıtı Şampuan",
    brand: "Hairflux",
    category: "Saç Bakımı",
    price: 169.90,
    oldPrice: 199.90,
    rating: 4.3,
    reviewCount: 567,
    badges: ["%15"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "300 ml",
      form: "Şampuan"
    },
    stock: 78,
    description: "Kafein ve biyotin kompleksi ile saç dökülmesini azaltan, saç köklerini güçlendiren formül.",
    ingredients: "Aqua, Caffeine, Biotin, Saw Palmetto Extract, Keratin, Panthenol",
    usage: "Islak saça masaj yaparak uygulayın, 2-3 dakika bekletin, durulayın."
  },
  {
    id: 11,
    title: "Hassas Ciltler İçin Nemlendirici",
    brand: "CalmDerm",
    category: "Cilt Bakımı",
    price: 199.90,
    oldPrice: null,
    rating: 4.7,
    reviewCount: 789,
    badges: [],
    attributes: {
      skinType: ["Hassas", "Kuru"],
      concern: ["Nem", "Bariyer"],
      spf: null,
      volume: "50 ml",
      form: "Krem"
    },
    stock: 112,
    description: "Seramid kompleksi ile cilt bariyerini onaran, kızarıklık ve tahrişi yatıştıran nemlendirici.",
    ingredients: "Aqua, Ceramide NP, Ceramide AP, Ceramide EOP, Madecassoside, Panthenol",
    usage: "Sabah ve akşam temiz cilde uygulayın."
  },
  {
    id: 12,
    title: "Akne Leke Bakım Jeli",
    brand: "PureCera",
    category: "Cilt Bakımı",
    price: 119.90,
    oldPrice: 149.90,
    rating: 4.5,
    reviewCount: 345,
    badges: ["%20"],
    attributes: {
      skinType: ["Yağlı", "Karma"],
      concern: ["Akne", "Leke"],
      spf: null,
      volume: "15 ml",
      form: "Jel"
    },
    stock: 56,
    description: "Salisilik asit ve niacinamide ile akne lekelerini hedef alan, hızlı etki eden nokta bakım jeli.",
    ingredients: "Aqua, Salicylic Acid (2%), Niacinamide, Tea Tree Oil, Aloe Vera",
    usage: "Günde 1-2 kez, akne bölgelerine nokta uygulama yapın."
  },
  {
    id: 13,
    title: "Mineral Güneş Koruyucu SPF 50",
    brand: "Sunveil",
    category: "Güneş Koruyucular",
    price: 299.90,
    oldPrice: null,
    rating: 4.6,
    reviewCount: 456,
    badges: ["Yeni"],
    attributes: {
      skinType: ["Hassas", "Normal"],
      concern: ["Güneş Koruması"],
      spf: "50",
      volume: "50 ml",
      form: "Krem"
    },
    stock: 89,
    description: "Çinko oksit bazlı, fiziksel koruma sağlayan mineral formül. Hassas ciltler için idealdir.",
    ingredients: "Aqua, Zinc Oxide (20%), Titanium Dioxide, Squalane, Vitamin E",
    usage: "Güneşe çıkmadan 15 dakika önce uygulayın."
  },
  {
    id: 14,
    title: "Bebek Pişik Kremi",
    brand: "NeoBebe",
    category: "Anne & Bebek",
    price: 69.90,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 678,
    badges: [],
    attributes: {
      skinType: ["Hassas"],
      concern: [],
      spf: null,
      volume: "100 ml",
      form: "Krem"
    },
    stock: 145,
    description: "Çinko oksit ve panthenol ile pişik önleyen ve iyileştiren koruyucu krem.",
    ingredients: "Aqua, Zinc Oxide (15%), Panthenol, Shea Butter, Calendula Extract",
    usage: "Her bez değişiminde temiz cilde uygulayın."
  },
  {
    id: 15,
    title: "D3+K2 Vitamin Damla",
    brand: "Vitanox",
    category: "Vitamin & Takviye",
    price: 109.90,
    oldPrice: 139.90,
    rating: 4.7,
    reviewCount: 1123,
    badges: ["%21", "Çok Satan"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "20 ml",
      form: "Damla"
    },
    stock: 234,
    description: "1000 IU D3 vitamini ve 45 mcg K2 vitamini. Kemik sağlığı ve bağışıklık sistemi için.",
    ingredients: "MCT Oil, Vitamin D3, Vitamin K2 (MK-7)",
    usage: "Günde 5 damla, yemekle birlikte alın."
  },
  {
    id: 16,
    title: "Beyazlatıcı Diş Macunu",
    brand: "Oralyn",
    category: "Ağız & Diş",
    price: 49.90,
    oldPrice: null,
    rating: 4.5,
    reviewCount: 890,
    badges: [],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "75 ml",
      form: "Macun"
    },
    stock: 278,
    description: "Aktif kömür ve hidrojen peroksit ile nazik beyazlatma. Mine dostu formül.",
    ingredients: "Aqua, Hydrated Silica, Activated Charcoal, Hydrogen Peroxide, Sodium Fluoride",
    usage: "Günde 2 kez, 2 dakika fırçalayın."
  },
  {
    id: 17,
    title: "Onarıcı Saç Maskesi",
    brand: "Hairflux",
    category: "Saç Bakımı",
    price: 139.90,
    oldPrice: 169.90,
    rating: 4.6,
    reviewCount: 345,
    badges: ["%18"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "200 ml",
      form: "Maske"
    },
    stock: 67,
    description: "Keratin ve argan yağı ile yıpranmış saçları onaran, parlaklık veren yoğun bakım maskesi.",
    ingredients: "Aqua, Hydrolyzed Keratin, Argania Spinosa Kernel Oil, Shea Butter, Panthenol",
    usage: "Haftada 1-2 kez, nemli saça uygulayın, 5-10 dakika bekletin."
  },
  {
    id: 18,
    title: "AHA BHA Peeling Tonik",
    brand: "DermaNova",
    category: "Cilt Bakımı",
    price: 179.90,
    oldPrice: null,
    rating: 4.4,
    reviewCount: 567,
    badges: [],
    attributes: {
      skinType: ["Yağlı", "Karma", "Normal"],
      concern: ["Gözenek", "Leke", "Akne"],
      spf: null,
      volume: "200 ml",
      form: "Tonik"
    },
    stock: 89,
    description: "Glikolik asit ve salisilik asit kombinasyonu ile nazik eksfoliasyon sağlayan tonik.",
    ingredients: "Aqua, Glycolic Acid (5%), Salicylic Acid (1%), Niacinamide, Aloe Vera",
    usage: "Akşamları temizleme sonrası pamukla uygulayın. Haftada 2-3 kez kullanın."
  },
  {
    id: 19,
    title: "Güneş Sonrası Yatıştırıcı Jel",
    brand: "Sunveil",
    category: "Güneş Koruyucular",
    price: 129.90,
    oldPrice: null,
    rating: 4.7,
    reviewCount: 234,
    badges: [],
    attributes: {
      skinType: ["Normal", "Hassas"],
      concern: [],
      spf: null,
      volume: "200 ml",
      form: "Jel"
    },
    stock: 112,
    description: "Aloe vera ve panthenol ile güneş sonrası cildi yatıştıran, nemlendiren serinletici jel.",
    ingredients: "Aqua, Aloe Barbadensis Leaf Juice, Panthenol, Allantoin, Menthol",
    usage: "Güneş sonrası bol miktarda uygulayın."
  },
  {
    id: 20,
    title: "Omega 3 Balık Yağı",
    brand: "BioCore",
    category: "Vitamin & Takviye",
    price: 189.90,
    oldPrice: 229.90,
    rating: 4.5,
    reviewCount: 456,
    badges: ["%17"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "60 Kapsül",
      form: "Kapsül"
    },
    stock: 156,
    description: "Yüksek EPA ve DHA içeren, limon aromalı omega 3 takviyesi. Kalp ve beyin sağlığı için.",
    ingredients: "Fish Oil (EPA 600mg, DHA 400mg), Vitamin E, Lemon Oil",
    usage: "Günde 1-2 kapsül, yemekle birlikte alın."
  },
  {
    id: 21,
    title: "Medikal Yara Bandı - 100 Adet",
    brand: "CalmDerm",
    category: "Medikal",
    price: 39.90,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 1567,
    badges: ["Çok Satan"],
    attributes: {
      skinType: [],
      concern: [],
      spf: null,
      volume: "100 Adet",
      form: "Bant"
    },
    stock: 345,
    description: "Nefes alabilen, suya dayanıklı, hipoalerjenik yara bandı. Çeşitli boyutlarda.",
    ingredients: "Cotton, Latex-free Adhesive, Non-woven Fabric",
    usage: "Temiz ve kuru yaraya uygulayın."
  },
  {
    id: 22,
    title: "Renkli Güneş Koruyucu BB Krem SPF 50+",
    brand: "Sunveil",
    category: "Güneş Koruyucular",
    price: 249.90,
    oldPrice: 299.90,
    rating: 4.6,
    reviewCount: 678,
    badges: ["%17", "Yeni"],
    attributes: {
      skinType: ["Normal", "Karma", "Yağlı"],
      concern: ["Güneş Koruması", "Ton Eşitliği"],
      spf: "50+",
      volume: "50 ml",
      form: "BB Krem"
    },
    stock: 78,
    description: "Yüksek güneş koruması ve doğal kapsama gücü bir arada. Mat bitişli, hafif formül.",
    ingredients: "Aqua, Titanium Dioxide, Iron Oxides, Niacinamide, Hyaluronic Acid",
    usage: "Günlük bakımınızın son adımı olarak yüzünüze eşit miktarda uygulayın."
  },
  {
    id: 23,
    title: "Cica Onarıcı Krem",
    brand: "PureCera",
    category: "Cilt Bakımı",
    price: 169.90,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 890,
    badges: [],
    attributes: {
      skinType: ["Hassas", "Kuru", "Normal"],
      concern: ["Bariyer", "Kızarıklık"],
      spf: null,
      volume: "50 ml",
      form: "Krem"
    },
    stock: 134,
    description: "Centella asiatica ekstresi ile cilt bariyerini onaran, yatıştıran ve nemlendiren bakım kremi.",
    ingredients: "Aqua, Centella Asiatica Extract, Madecassoside, Ceramide NP, Panthenol, Shea Butter",
    usage: "Sabah ve akşam temiz cilde uygulayın. Tahriş olmuş bölgelere özellikle odaklanın."
  },
  {
    id: 24,
    title: "Mat Bitişli Güneş Jeli SPF 30",
    brand: "Skinorie",
    category: "Güneş Koruyucular",
    price: 189.90,
    oldPrice: null,
    rating: 4.5,
    reviewCount: 345,
    badges: [],
    attributes: {
      skinType: ["Yağlı", "Karma"],
      concern: ["Güneş Koruması"],
      spf: "30",
      volume: "50 ml",
      form: "Jel"
    },
    stock: 89,
    description: "Yağlı ciltler için özel formül. Parlamayı kontrol eden, mat bitişli hafif güneş jeli.",
}];
/* OLD PRODUCT DATA END (REMOVED) */

// Brand List (Real data from Trendyol)
const brands = [
  { id: "splat", name: "Splat", count: 31 },
  { id: "dalan", name: "Dalan", count: 9 },
  { id: "genel-markalar", name: "Genel Markalar", count: 8 },
  { id: "maxigal", name: "Maxigal", count: 8 },
  { id: "alldermo", name: "Alldermo", count: 6 },
  { id: "vitavolin", name: "vitavolin", count: 4 },
  { id: "lux", name: "LUX", count: 3 },
  { id: "lamos", name: "Lamos", count: 2 },
  { id: "dr-wagner", name: "Dr Wagner", count: 2 },
  { id: "compeed", name: "Compeed", count: 2 },
  { id: "gifrer", name: "Gifrer", count: 2 },
  { id: "redoxon", name: "Redoxon", count: 1 },
  { id: "otribebe", name: "Otribebe", count: 1 },
  { id: "pharmaton", name: "Pharmaton", count: 1 }
];

// Categories
const categories = [
  { id: "cilt-bakimi", name: "Cilt Bakımı", icon: "skin" },
  { id: "gunes-koruyucular", name: "Güneş Koruyucular", icon: "sun" },
  { id: "sac-bakimi", name: "Saç Bakımı", icon: "hair" },
  { id: "anne-bebek", name: "Anne & Bebek", icon: "baby" },
  { id: "vitamin-takviye", name: "Vitamin & Takviye", icon: "vitamin" },
  { id: "agiz-dis", name: "Ağız & Diş", icon: "tooth" },
  { id: "medikal", name: "Medikal", icon: "medical" },
  { id: "makyaj", name: "Makyaj", icon: "makeup" }
];

// =====================================================
// Cart Management
// =====================================================
const Cart = {
  items: [],
  
  init() {
    const saved = localStorage.getItem('birken_cart');
    if (saved) {
      this.items = JSON.parse(saved);
    }
    this.updateBadge();
  },
  
  save() {
    localStorage.setItem('birken_cart', JSON.stringify(this.items));
    this.updateBadge();
  },
  
  add(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existing = this.items.find(item => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: productId,
        title: product.title,
        brand: product.brand,
        price: product.price,
        oldPrice: product.oldPrice,
        quantity: quantity,
        volume: product.attributes?.volume || '',
        image: product.image || null
      });
    }
    
    this.save();
    Toast.show('Sepete Eklendi', `${product.title} sepetinize eklendi.`, 'success');
  },
  
  remove(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  },
  
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.remove(productId);
      } else {
        item.quantity = quantity;
        this.save();
      }
    }
  },
  
  clear() {
    this.items = [];
    this.save();
  },
  
  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },
  
  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  
  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getItemCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// =====================================================
// Toast Notifications
// =====================================================
const Toast = {
  container: null,
  
  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    this.container.setAttribute('aria-live', 'polite');
    document.body.appendChild(this.container);
  },
  
  show(title, message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon ${type}">
        ${type === 'success' ? this.getCheckIcon() : this.getErrorIcon()}
      </div>
      <div class="toast-content">
        <h4>${title}</h4>
        <p>${message}</p>
      </div>
      <button class="toast-close" aria-label="Kapat">
        ${this.getCloseIcon()}
      </button>
    `;
    
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => this.remove(toast));
    
    this.container.appendChild(toast);
    
    setTimeout(() => this.remove(toast), 4000);
  },
  
  remove(toast) {
    toast.style.animation = 'slideIn 0.25s ease reverse';
    setTimeout(() => toast.remove(), 250);
  },
  
  getCheckIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`;
  },
  
  getErrorIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>`;
  },
  
  getCloseIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
  }
};

// =====================================================
// Hero Slider
// =====================================================
const HeroSlider = {
  currentSlide: 0,
  totalSlides: 3,
  autoplayInterval: null,
  
  init() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;
    
    this.slides = slider.querySelector('.hero-slides');
    this.dots = slider.querySelectorAll('.hero-dot');
    this.prevBtn = slider.querySelector('.hero-arrow.prev');
    this.nextBtn = slider.querySelector('.hero-arrow.next');
    
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
    
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goTo(index));
    });
    
    this.startAutoplay();
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => this.stopAutoplay());
    slider.addEventListener('mouseleave', () => this.startAutoplay());
  },
  
  goTo(index) {
    this.currentSlide = index;
    if (this.slides) {
      this.slides.style.transform = `translateX(-${index * 100}%)`;
    }
    this.updateDots();
  },
  
  next() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.goTo(this.currentSlide);
  },
  
  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goTo(this.currentSlide);
  },
  
  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  },
  
  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.next(), 5000);
  },
  
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
};

// =====================================================
// Sticky Header
// =====================================================
const StickyHeader = {
  init() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
};

// =====================================================
// Product Filtering (Category Page)
// =====================================================
const ProductFilter = {
  filters: {
    brands: [],
    skinTypes: [],
    concerns: [],
    spf: [],
    priceMin: 0,
    priceMax: Infinity,
    inStock: false,
    search: '',
    category: ''
  },
  
  init() {
    this.container = document.querySelector('.products-grid');
    if (!this.container || !document.body.classList.contains('category-page')) return;
    
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    this.filters.category = params.get('cat') || '';
    this.filters.search = params.get('q') || '';
    
    // Update page title if category is set
    if (this.filters.category) {
      const categoryTitle = document.querySelector('.category-title');
      if (categoryTitle) {
        const catName = this.filters.category.replace(/-/g, ' ');
        categoryTitle.textContent = catName.charAt(0).toUpperCase() + catName.slice(1);
      }
    }
    
    this.bindEvents();
    this.applyFilters();
  },
  
  bindEvents() {
    // Brand filters
    document.querySelectorAll('.filter-brand').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.filters.brands.push(e.target.value);
        } else {
          this.filters.brands = this.filters.brands.filter(b => b !== e.target.value);
        }
        this.applyFilters();
        this.updateFilterChips();
      });
    });
    
    // Skin type filters
    document.querySelectorAll('.filter-skintype').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.filters.skinTypes.push(e.target.value);
        } else {
          this.filters.skinTypes = this.filters.skinTypes.filter(s => s !== e.target.value);
        }
        this.applyFilters();
        this.updateFilterChips();
      });
    });
    
    // Concern filters
    document.querySelectorAll('.filter-concern').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.filters.concerns.push(e.target.value);
        } else {
          this.filters.concerns = this.filters.concerns.filter(c => c !== e.target.value);
        }
        this.applyFilters();
        this.updateFilterChips();
      });
    });
    
    // SPF filters
    document.querySelectorAll('.filter-spf').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.filters.spf.push(e.target.value);
        } else {
          this.filters.spf = this.filters.spf.filter(s => s !== e.target.value);
        }
        this.applyFilters();
        this.updateFilterChips();
      });
    });
    
    // Price range
    const priceMin = document.querySelector('.price-min');
    const priceMax = document.querySelector('.price-max');
    
    if (priceMin) {
      priceMin.addEventListener('change', (e) => {
        this.filters.priceMin = parseFloat(e.target.value) || 0;
        this.applyFilters();
      });
    }
    
    if (priceMax) {
      priceMax.addEventListener('change', (e) => {
        this.filters.priceMax = parseFloat(e.target.value) || Infinity;
        this.applyFilters();
      });
    }
    
    // In stock toggle
    const inStockToggle = document.querySelector('.filter-instock');
    if (inStockToggle) {
      inStockToggle.addEventListener('change', (e) => {
        this.filters.inStock = e.target.checked;
        this.applyFilters();
      });
    }
    
    // Sort dropdown
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sort = e.target.value;
        this.applyFilters();
      });
    }
    
    // Clear all filters
    const clearBtn = document.querySelector('.clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearFilters());
    }
  },
  
  applyFilters() {
    let filtered = [...products];
    
    // Category filter
    if (this.filters.category) {
      const catName = this.filters.category.replace(/-/g, ' ').toLowerCase();
      filtered = filtered.filter(p => 
        p.category.toLowerCase().includes(catName)
      );
    }
    
    // Search filter
    if (this.filters.search) {
      const search = this.filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search)
      );
    }
    
    // Brand filter
    if (this.filters.brands.length > 0) {
      filtered = filtered.filter(p => 
        this.filters.brands.includes(p.brand.toLowerCase())
      );
    }
    
    // Skin type filter
    if (this.filters.skinTypes.length > 0) {
      filtered = filtered.filter(p => 
        p.attributes.skinType.some(st => 
          this.filters.skinTypes.includes(st.toLowerCase())
        )
      );
    }
    
    // Concern filter
    if (this.filters.concerns.length > 0) {
      filtered = filtered.filter(p => 
        p.attributes.concern.some(c => 
          this.filters.concerns.includes(c.toLowerCase())
        )
      );
    }
    
    // SPF filter
    if (this.filters.spf.length > 0) {
      filtered = filtered.filter(p => 
        p.attributes.spf && this.filters.spf.includes(p.attributes.spf)
      );
    }
    
    // Price filter
    filtered = filtered.filter(p => 
      p.price >= this.filters.priceMin && p.price <= this.filters.priceMax
    );
    
    // Stock filter
    if (this.filters.inStock) {
      filtered = filtered.filter(p => p.stock > 0);
    }
    
    // Sorting
    if (this.sort) {
      switch (this.sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'bestseller':
          filtered.sort((a, b) => b.reviewCount - a.reviewCount);
          break;
      }
    }
    
    this.renderProducts(filtered);
    this.updateCount(filtered.length);
  },
  
  renderProducts(productList) {
    if (!this.container) return;
    
    if (productList.length === 0) {
      this.container.innerHTML = `
        <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: var(--space-3xl);">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--muted); margin-bottom: var(--space-md);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="margin-bottom: var(--space-sm);">Ürün Bulunamadı</h3>
          <p style="color: var(--muted);">Filtrelerinizi değiştirmeyi deneyin</p>
        </div>
      `;
      return;
    }
    
    this.container.innerHTML = productList.map(product => this.createProductCard(product)).join('');
    
    // Bind add to cart buttons
    this.container.querySelectorAll('.product-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = parseInt(btn.dataset.productId);
        Cart.add(productId);
      });
    });
  },
  
  createProductCard(product) {
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const stars = this.createStars(product.rating);
    
    let badges = '';
    if (product.badges && product.badges.length > 0) {
      badges = product.badges.map(badge => {
        let badgeClass = 'discount';
        if (badge === 'Yeni') badgeClass = 'new';
        if (badge === 'Çok Satan') badgeClass = 'bestseller';
        if (badge === 'Popüler') badgeClass = 'popular';
        return `<span class="product-badge ${badgeClass}">${badge}</span>`;
      }).join('');
    }
    
    // Use actual product image if available, otherwise use placeholder
    const imageHtml = product.image 
      ? `<img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="product-image-placeholder" style="display:none;">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
             <circle cx="8.5" cy="8.5" r="1.5"></circle>
             <polyline points="21 15 16 10 5 21"></polyline>
           </svg>
         </div>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
           <circle cx="8.5" cy="8.5" r="1.5"></circle>
           <polyline points="21 15 16 10 5 21"></polyline>
         </svg>`;
    
    return `
      <article class="product-card">
        <div class="product-card-image">
          ${imageHtml}
          ${badges ? `<div class="product-badges">${badges}</div>` : ''}
          <button class="product-wishlist" aria-label="Favorilere ekle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="product-card-body">
          <span class="product-brand">${product.brand}</span>
          <h3 class="product-title">
            <a href="product.html?id=${product.id}">${product.title}</a>
          </h3>
          <div class="product-rating">
            <div class="product-stars">${stars}</div>
            <span class="product-review-count">(${product.reviewCount})</span>
          </div>
          <div class="product-price">
            <span class="current">₺${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="old">₺${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="product-add-btn" data-product-id="${product.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Sepete Ekle
          </button>
        </div>
      </article>
    `;
  },
  
  createStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars += `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`;
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars += `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" style="opacity: 0.5;">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`;
      } else {
        stars += `<svg class="empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`;
      }
    }
    return stars;
  },
  
  updateCount(count) {
    const countEl = document.querySelector('.category-count');
    if (countEl) {
      countEl.textContent = `${count} ürün`;
    }
  },
  
  updateFilterChips() {
    const chipsContainer = document.querySelector('.active-filters');
    if (!chipsContainer) return;
    
    let chips = '';
    
    this.filters.brands.forEach(brand => {
      chips += `<span class="filter-chip" data-type="brand" data-value="${brand}">
        ${brand}
        <button aria-label="Filtreyi kaldır">${this.getCloseIcon()}</button>
      </span>`;
    });
    
    this.filters.skinTypes.forEach(type => {
      chips += `<span class="filter-chip" data-type="skintype" data-value="${type}">
        ${type}
        <button aria-label="Filtreyi kaldır">${this.getCloseIcon()}</button>
      </span>`;
    });
    
    this.filters.concerns.forEach(concern => {
      chips += `<span class="filter-chip" data-type="concern" data-value="${concern}">
        ${concern}
        <button aria-label="Filtreyi kaldır">${this.getCloseIcon()}</button>
      </span>`;
    });
    
    this.filters.spf.forEach(spf => {
      chips += `<span class="filter-chip" data-type="spf" data-value="${spf}">
        SPF ${spf}
        <button aria-label="Filtreyi kaldır">${this.getCloseIcon()}</button>
      </span>`;
    });
    
    chipsContainer.innerHTML = chips;
    
    // Bind remove events
    chipsContainer.querySelectorAll('.filter-chip button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        const type = chip.dataset.type;
        const value = chip.dataset.value;
        
        switch (type) {
          case 'brand':
            this.filters.brands = this.filters.brands.filter(b => b !== value);
            document.querySelector(`.filter-brand[value="${value}"]`).checked = false;
            break;
          case 'skintype':
            this.filters.skinTypes = this.filters.skinTypes.filter(s => s !== value);
            document.querySelector(`.filter-skintype[value="${value}"]`).checked = false;
            break;
          case 'concern':
            this.filters.concerns = this.filters.concerns.filter(c => c !== value);
            document.querySelector(`.filter-concern[value="${value}"]`).checked = false;
            break;
          case 'spf':
            this.filters.spf = this.filters.spf.filter(s => s !== value);
            document.querySelector(`.filter-spf[value="${value}"]`).checked = false;
            break;
        }
        
        this.applyFilters();
        this.updateFilterChips();
      });
    });
  },
  
  clearFilters() {
    this.filters = {
      brands: [],
      skinTypes: [],
      concerns: [],
      spf: [],
      priceMin: 0,
      priceMax: Infinity,
      inStock: false,
      search: this.filters.search,
      category: this.filters.category
    };
    
    document.querySelectorAll('.filter-brand, .filter-skintype, .filter-concern, .filter-spf, .filter-instock').forEach(cb => {
      cb.checked = false;
    });
    
    const priceMin = document.querySelector('.price-min');
    const priceMax = document.querySelector('.price-max');
    if (priceMin) priceMin.value = '';
    if (priceMax) priceMax.value = '';
    
    this.applyFilters();
    this.updateFilterChips();
  },
  
  getCloseIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
  }
};

// =====================================================
// Mobile Filter Drawer
// =====================================================
const FilterDrawer = {
  init() {
    this.drawer = document.querySelector('.filter-drawer');
    this.overlay = document.querySelector('.filter-drawer-overlay');
    this.toggleBtn = document.querySelector('.mobile-filter-toggle');
    this.closeBtn = document.querySelector('.filter-drawer-close');
    
    if (!this.drawer) return;
    
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.open());
    }
    
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  },
  
  open() {
    this.drawer.classList.add('active');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  
  close() {
    this.drawer.classList.remove('active');
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  },
  
  isOpen() {
    return this.drawer && this.drawer.classList.contains('active');
  }
};

// =====================================================
// Product Detail Page
// =====================================================
const ProductDetail = {
  init() {
    if (!document.body.classList.contains('product-page')) return;
    
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')) || 1;
    
    this.product = products.find(p => p.id === productId) || products[0];
    this.quantity = 1;
    
    this.render();
    this.bindEvents();
  },
  
  render() {
    // Update page title
    document.title = `${this.product.title} - BirKen`;
    
    // Update product main image
    const mainImageEl = document.querySelector('.product-image-main');
    if (mainImageEl && this.product.image) {
      // Keep badge if exists
      const badge = mainImageEl.querySelector('.product-badge');
      const badgeHTML = badge ? badge.outerHTML : '';
      
      mainImageEl.innerHTML = `
        <img src="${this.product.image}" alt="${this.product.title}" 
             onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
        <svg viewBox="0 0 400 400" aria-hidden="true" style="display:none;">
          <rect width="400" height="400" fill="#f3f4f6"/>
          <circle cx="200" cy="160" r="80" fill="#e5e7eb"/>
          <rect x="160" y="240" width="80" height="120" rx="8" fill="#e5e7eb"/>
          <text x="200" y="380" text-anchor="middle" fill="#9ca3af" font-size="14">Ürün Görseli</text>
        </svg>
        ${badgeHTML}
      `;
    }
    
    // Update thumbnail images (use same image for now since we only have one)
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    if (thumbnails.length > 0 && this.product.image) {
      thumbnails.forEach((thumb, idx) => {
        if (idx === 0) {
          thumb.innerHTML = `<img src="${this.product.image}" alt="Görsel ${idx + 1}">`;
        }
      });
    }
    
    // Update product info
    const brandEl = document.querySelector('.product-info-brand');
    const titleEl = document.querySelector('.product-info-title');
    const priceEl = document.querySelector('.product-info-price');
    const stockEl = document.querySelector('.product-info-stock');
    
    if (brandEl) brandEl.textContent = this.product.brand;
    if (titleEl) titleEl.textContent = this.product.title;
    
    if (priceEl) {
      let priceHTML = `<span class="current">₺${this.product.price.toFixed(2)}</span>`;
      if (this.product.oldPrice) {
        const discount = Math.round((1 - this.product.price / this.product.oldPrice) * 100);
        priceHTML += `<span class="old">₺${this.product.oldPrice.toFixed(2)}</span>`;
        priceHTML += `<span class="discount">%${discount} İndirim</span>`;
      }
      priceEl.innerHTML = priceHTML;
    }
    
    if (stockEl) {
      if (this.product.stock > 10) {
        stockEl.className = 'product-info-stock in-stock';
        stockEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Stokta
        `;
      } else if (this.product.stock > 0) {
        stockEl.className = 'product-info-stock low-stock';
        stockEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Son ${this.product.stock} ürün
        `;
      } else {
        stockEl.className = 'product-info-stock out-of-stock';
        stockEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          Stokta yok
        `;
      }
    }
    
    // Update rating
    const ratingEl = document.querySelector('.product-info-rating .stars');
    const reviewCountEl = document.querySelector('.product-info-rating span');
    
    if (ratingEl) {
      ratingEl.innerHTML = ProductFilter.createStars(this.product.rating);
    }
    
    if (reviewCountEl) {
      reviewCountEl.textContent = `${this.product.rating} (${this.product.reviewCount} değerlendirme)`;
    }
    
    // Update tabs content
    const descTab = document.querySelector('#tab-description');
    const ingredientsTab = document.querySelector('#tab-ingredients');
    const usageTab = document.querySelector('#tab-usage');
    
    if (descTab) descTab.innerHTML = `<p>${this.product.description}</p>`;
    if (ingredientsTab) ingredientsTab.innerHTML = `<p>${this.product.ingredients}</p>`;
    if (usageTab) usageTab.innerHTML = `<p>${this.product.usage}</p>`;
    
    // Render related products
    this.renderRelatedProducts();
  },
  
  bindEvents() {
    // Quantity stepper
    const minusBtn = document.querySelector('.quantity-stepper button:first-child');
    const plusBtn = document.querySelector('.quantity-stepper button:last-child');
    const qtyInput = document.querySelector('.quantity-stepper input');
    
    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        if (this.quantity > 1) {
          this.quantity--;
          qtyInput.value = this.quantity;
        }
      });
    }
    
    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        if (this.quantity < this.product.stock) {
          this.quantity++;
          qtyInput.value = this.quantity;
        }
      });
    }
    
    if (qtyInput) {
      qtyInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value) || 1;
        val = Math.max(1, Math.min(val, this.product.stock));
        this.quantity = val;
        qtyInput.value = val;
      });
    }
    
    // Add to cart
    const addBtn = document.querySelector('.add-to-cart-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        Cart.add(this.product.id, this.quantity);
      });
    }
    
    // Tabs
    const tabBtns = document.querySelectorAll('.product-tab-btn');
    const tabContents = document.querySelectorAll('.product-tab-content');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.querySelector(`#tab-${target}`).classList.add('active');
      });
    });
    
    // Gallery thumbnails
    const thumbs = document.querySelectorAll('.product-thumb');
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  },
  
  renderRelatedProducts() {
    const container = document.querySelector('.related-products .products-grid');
    if (!container) return;
    
    // Get products from same category
    const related = products
      .filter(p => p.category === this.product.category && p.id !== this.product.id)
      .slice(0, 4);
    
    if (related.length === 0) {
      container.innerHTML = '';
      return;
    }
    
    container.innerHTML = related.map(p => ProductFilter.createProductCard(p)).join('');
    
    // Bind add to cart
    container.querySelectorAll('.product-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        Cart.add(parseInt(btn.dataset.productId));
      });
    });
  }
};

// =====================================================
// Cart Page
// =====================================================
const CartPage = {
  init() {
    if (!document.body.classList.contains('cart-page')) return;
    
    this.render();
  },
  
  render() {
    const itemsContainer = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.cart-summary');
    
    if (!itemsContainer) return;
    
    if (Cart.items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <h2>Sepetiniz Boş</h2>
          <p>Sepetinizde henüz ürün bulunmuyor.</p>
          <a href="category.html" class="btn btn-primary">Alışverişe Başla</a>
        </div>
      `;
      if (summaryContainer) summaryContainer.style.display = 'none';
      return;
    }
    
    let itemsHTML = `
      <div class="cart-header">
        <span>Ürün</span>
        <span>Fiyat</span>
        <span>Adet</span>
        <span>Toplam</span>
        <span></span>
      </div>
    `;
    
    Cart.items.forEach(item => {
      const imageHtml = item.image 
        ? `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="display:none;">
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
             <circle cx="8.5" cy="8.5" r="1.5"></circle>
             <polyline points="21 15 16 10 5 21"></polyline>
           </svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
             <circle cx="8.5" cy="8.5" r="1.5"></circle>
             <polyline points="21 15 16 10 5 21"></polyline>
           </svg>`;
      
      itemsHTML += `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-info">
            <div class="cart-item-image">
              ${imageHtml}
            </div>
            <div class="cart-item-details">
              <h4><a href="product.html?id=${item.id}">${item.title}</a></h4>
              <span class="brand">${item.brand}</span>
              <span class="variant">${item.volume || ''}</span>
            </div>
          </div>
          <div class="cart-item-price">₺${item.price.toFixed(2)}</div>
          <div class="cart-item-qty">
            <div class="cart-qty-stepper">
              <button class="qty-minus" aria-label="Azalt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <input type="number" value="${item.quantity}" min="1" aria-label="Adet">
              <button class="qty-plus" aria-label="Artır">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
          <div class="cart-item-total">₺${(item.price * item.quantity).toFixed(2)}</div>
          <button class="cart-item-remove" aria-label="Kaldır">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
    });
    
    itemsContainer.innerHTML = itemsHTML;
    
    // Bind events
    itemsContainer.querySelectorAll('.cart-item').forEach(itemEl => {
      const id = parseInt(itemEl.dataset.id);
      
      itemEl.querySelector('.qty-minus').addEventListener('click', () => {
        const input = itemEl.querySelector('input');
        const newQty = parseInt(input.value) - 1;
        Cart.updateQuantity(id, newQty);
        this.render();
      });
      
      itemEl.querySelector('.qty-plus').addEventListener('click', () => {
        const input = itemEl.querySelector('input');
        const newQty = parseInt(input.value) + 1;
        Cart.updateQuantity(id, newQty);
        this.render();
      });
      
      itemEl.querySelector('input').addEventListener('change', (e) => {
        Cart.updateQuantity(id, parseInt(e.target.value) || 1);
        this.render();
      });
      
      itemEl.querySelector('.cart-item-remove').addEventListener('click', () => {
        Cart.remove(id);
        this.render();
      });
    });
    
    // Update summary
    this.updateSummary();
  },
  
  updateSummary() {
    const subtotal = Cart.getTotal();
    const shipping = subtotal >= 500 ? 0 : 29.90;
    const total = subtotal + shipping;
    
    const subtotalEl = document.querySelector('.summary-subtotal');
    const shippingEl = document.querySelector('.summary-shipping');
    const totalEl = document.querySelector('.summary-total');
    const noticeEl = document.querySelector('.shipping-notice');
    
    if (subtotalEl) subtotalEl.textContent = `₺${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Ücretsiz' : `₺${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₺${total.toFixed(2)}`;
    
    if (noticeEl) {
      if (subtotal >= 500) {
        noticeEl.className = 'shipping-notice';
        noticeEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Ücretsiz kargo hakkı kazandınız!
        `;
      } else {
        const remaining = 500 - subtotal;
        noticeEl.className = 'shipping-notice warning';
        noticeEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"></path>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          Ücretsiz kargo için ₺${remaining.toFixed(2)} daha ekleyin
        `;
      }
    }
  }
};

// =====================================================
// Checkout Page
// =====================================================
const CheckoutPage = {
  init() {
    if (!document.body.classList.contains('checkout-page')) return;
    
    this.renderOrderSummary();
    this.bindEvents();
  },
  
  renderOrderSummary() {
    const container = document.querySelector('.order-items');
    if (!container) return;
    
    container.innerHTML = Cart.items.map(item => `
      <div class="order-item">
        <div class="order-item-image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
          <span class="order-item-qty">${item.quantity}</span>
        </div>
        <div class="order-item-details">
          <h4>${item.title}</h4>
          <p>${item.brand}</p>
        </div>
        <div class="order-item-price">₺${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `).join('');
    
    // Update totals
    const subtotal = Cart.getTotal();
    const shipping = subtotal >= 500 ? 0 : 29.90;
    const total = subtotal + shipping;
    
    const subtotalEl = document.querySelector('.summary-subtotal');
    const shippingEl = document.querySelector('.summary-shipping');
    const totalEl = document.querySelector('.summary-total');
    
    if (subtotalEl) subtotalEl.textContent = `₺${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Ücretsiz' : `₺${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₺${total.toFixed(2)}`;
  },
  
  bindEvents() {
    // Radio options
    document.querySelectorAll('.radio-option').forEach(option => {
      option.addEventListener('click', () => {
        const group = option.closest('.radio-options');
        group.querySelectorAll('.radio-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        option.querySelector('input').checked = true;
      });
    });
    
    // Place order button
    const placeOrderBtn = document.querySelector('.place-order-btn');
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Toast.show('Sipariş Alındı', 'Siparişiniz başarıyla oluşturuldu!', 'success');
        Cart.clear();
        setTimeout(() => {
          window.location.href = 'account.html';
        }, 2000);
      });
    }
  }
};

// =====================================================
// Account Page
// =====================================================
const AccountPage = {
  init() {
    if (!document.body.classList.contains('account-page')) return;
    
    this.bindEvents();
  },
  
  bindEvents() {
    // Auth tabs
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        forms.forEach(f => f.classList.remove('active'));
        
        tab.classList.add('active');
        document.querySelector(`#${target}-form`).classList.add('active');
      });
    });
    
    // Login form
    const loginForm = document.querySelector('#login-form form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('birken_user', 'true');
        window.location.reload();
      });
    }
    
    // Register form
    const registerForm = document.querySelector('#register-form form');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('birken_user', 'true');
        window.location.reload();
      });
    }
    
    // Logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('birken_user');
        window.location.reload();
      });
    }
  }
};

// =====================================================
// FAQ Accordion
// =====================================================
const FAQAccordion = {
  init() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked if wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
};

// =====================================================
// Search Functionality
// =====================================================
const Search = {
  init() {
    const searchForms = document.querySelectorAll('.search-bar form');
    
    searchForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const query = input.value.trim();
        
        if (query) {
          window.location.href = `category.html?q=${encodeURIComponent(query)}`;
        }
      });
    });
  }
};

// =====================================================
// Filter Collapse Toggle
// =====================================================
const FilterCollapse = {
  init() {
    const filterHeaders = document.querySelectorAll('.filter-header');
    
    filterHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.filter-card');
        card.classList.toggle('collapsed');
      });
    });
  }
};

// =====================================================
// Product Carousel
// =====================================================
const ProductCarousel = {
  init() {
    document.querySelectorAll('.product-carousel').forEach(carousel => {
      const track = carousel.querySelector('.product-carousel-track');
      const prevBtn = carousel.querySelector('.carousel-arrow.prev');
      const nextBtn = carousel.querySelector('.carousel-arrow.next');
      
      if (!track) return;
      
      let position = 0;
      const cardWidth = 280 + 24; // card width + gap
      const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
      const totalCards = track.children.length;
      const maxPosition = Math.max(0, (totalCards - visibleCards) * cardWidth);
      
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          position = Math.max(0, position - cardWidth);
          track.style.transform = `translateX(-${position}px)`;
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          position = Math.min(maxPosition, position + cardWidth);
          track.style.transform = `translateX(-${position}px)`;
        });
      }
    });
  }
};

// =====================================================
// Home Page Product Rendering
// =====================================================
const HomePage = {
  init() {
    if (!document.body.classList.contains('home-page')) return;
    
    this.renderDeals();
    this.renderBestsellers();
    this.bindAddToCart();
  },
  
  renderDeals() {
    const container = document.querySelector('.deals-carousel .product-carousel-track');
    if (!container) return;
    
    // Get products with discounts
    const deals = products.filter(p => p.oldPrice).slice(0, 8);
    container.innerHTML = deals.map(p => ProductFilter.createProductCard(p)).join('');
  },
  
  renderBestsellers() {
    const container = document.querySelector('.bestsellers-grid');
    if (!container) return;
    
    // Get bestsellers
    const bestsellers = products
      .filter(p => p.badges && p.badges.includes('Çok Satan'))
      .slice(0, 8);
    
    if (bestsellers.length < 8) {
      const more = products
        .filter(p => !bestsellers.includes(p))
        .sort((a, b) => b.reviewCount - a.reviewCount)
        .slice(0, 8 - bestsellers.length);
      bestsellers.push(...more);
    }
    
    container.innerHTML = bestsellers.map(p => ProductFilter.createProductCard(p)).join('');
  },
  
  bindAddToCart() {
    document.querySelectorAll('.product-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        Cart.add(parseInt(btn.dataset.productId));
      });
    });
  }
};

// =====================================================
// Initialize Application
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  // Core modules
  Cart.init();
  Toast.init();
  StickyHeader.init();
  Search.init();
  
  // Page-specific modules
  HeroSlider.init();
  ProductFilter.init();
  FilterDrawer.init();
  FilterCollapse.init();
  ProductDetail.init();
  CartPage.init();
  CheckoutPage.init();
  AccountPage.init();
  FAQAccordion.init();
  ProductCarousel.init();
  HomePage.init();
});

// Export for use in HTML
window.Cart = Cart;
window.products = products;
window.brands = brands;
window.categories = categories;
