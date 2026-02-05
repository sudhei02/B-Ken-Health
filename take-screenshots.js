const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const pages = [
    { name: '01_anasayfa', url: 'index.html', title: 'Ana Sayfa' },
    { name: '02_hakkimizda', url: 'about.html', title: 'Hakkımızda' },
    { name: '03_kategori', url: 'category.html', title: 'Kategori' },
    { name: '04_urun', url: 'product.html', title: 'Ürün Detay' },
    { name: '05_sepet', url: 'cart.html', title: 'Sepet' },
    { name: '06_odeme', url: 'checkout.html', title: 'Ödeme' },
    { name: '07_hesap', url: 'account.html', title: 'Hesap' }
];

const baseUrl = 'http://127.0.0.1:8080/';
const screenshotsDir = path.join(__dirname, 'screenshots');

async function takeScreenshots() {
    // Screenshots klasörünü oluştur
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    console.log('🚀 Ekran görüntüsü alma işlemi başlıyor...\n');
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const results = [];

    for (const page of pages) {
        const browserPage = await browser.newPage();
        
        // Viewport ayarla (1920x1080 - Full HD)
        await browserPage.setViewport({ width: 1920, height: 1080 });
        
        try {
            console.log(`📸 ${page.title} sayfası yükleniyor...`);
            await browserPage.goto(baseUrl + page.url, { 
                waitUntil: 'networkidle2',
                timeout: 30000 
            });
            
            // Sayfanın tam yüklenmesi için bekle
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Full page screenshot al
            const screenshotPath = path.join(screenshotsDir, `${page.name}.png`);
            await browserPage.screenshot({ 
                path: screenshotPath, 
                fullPage: true 
            });
            
            console.log(`✅ ${page.title} - Ekran görüntüsü alındı: ${page.name}.png`);
            results.push({
                sayfa: page.title,
                dosya: `${page.name}.png`,
                durum: 'Başarılı'
            });
            
        } catch (error) {
            console.log(`❌ ${page.title} - Hata: ${error.message}`);
            results.push({
                sayfa: page.title,
                dosya: `${page.name}.png`,
                durum: `Hata: ${error.message}`
            });
        }
        
        await browserPage.close();
    }

    await browser.close();
    
    // Sonuç raporunu oluştur
    console.log('\n========================================');
    console.log('📋 EKRAN GÖRÜNTÜSÜ RAPORU');
    console.log('========================================\n');
    
    results.forEach((r, i) => {
        console.log(`${i + 1}. ${r.sayfa}`);
        console.log(`   Dosya: ${r.dosya}`);
        console.log(`   Durum: ${r.durum}\n`);
    });
    
    // JSON rapor dosyası oluştur
    const reportPath = path.join(screenshotsDir, 'screenshot-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        tarih: new Date().toISOString(),
        toplamSayfa: pages.length,
        basarili: results.filter(r => r.durum === 'Başarılı').length,
        sonuclar: results
    }, null, 2), 'utf8');
    
    console.log(`📄 Rapor dosyası oluşturuldu: screenshot-report.json`);
    console.log('\n✨ Tüm ekran görüntüleri alındı!\n');
}

takeScreenshots().catch(console.error);
