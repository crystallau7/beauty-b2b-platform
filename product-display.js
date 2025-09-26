// 产品展示功能
class ProductDisplay {
    constructor() {
        this.products = null;
        this.init();
    }

    async init() {
        try {
            await this.loadProducts();
            this.renderProducts();
        } catch (error) {
            console.error('产品数据加载失败:', error);
        }
    }

    async loadProducts() {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('无法加载产品数据');
        }
        this.products = await response.json();
    }

    getProductsByBrand(brandKey) {
        if (!this.products || !this.products.products[brandKey]) {
            return [];
        }
        return this.products.products[brandKey];
    }

    renderProducts() {
        // 获取当前页面的品牌信息
        const currentBrand = this.getCurrentBrand();
        if (!currentBrand) return;

        const products = this.getProductsByBrand(currentBrand);
        if (products.length === 0) return;

        // 更新页面标题
        this.updatePageTitle(currentBrand, products[0]);

        // 渲染产品列表
        this.renderProductList(products);
    }

    getCurrentBrand() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        const brandKey = filename.replace('.html', '').replace('-', '-');
        
        // 品牌映射
        const brandMap = {
            'helena-rubinstein': 'helena-rubinstein',
            'chanel': 'chanel',
            'kiehls': 'kiehls',
            'diptyque': 'diptyque',
            'givenchy': 'givenchy',
            'aveda': 'aveda',
            'hourglass': 'hourglass',
            'pola': 'pola',
            'adidas': 'adidas',
            'nike': 'nike',
            'wass-up': 'wass-up',
            'puma': 'puma',
            'mlb': 'mlb',
            'off-white': 'off-white',
            'essentials': 'essentials',
            'supreme': 'supreme'
        };

        return brandMap[brandKey] || null;
    }

    updatePageTitle(brandKey, firstProduct) {
        const brandNames = {
            'helena-rubinstein': 'Helena Rubinstein',
            'chanel': 'Chanel',
            'kiehls': 'Kiehl\'s',
            'diptyque': 'Diptyque',
            'givenchy': 'Givenchy',
            'aveda': 'Aveda',
            'hourglass': 'Hourglass',
            'pola': 'Pola'
        };

        const brandName = brandNames[brandKey] || brandKey;
        document.title = `${brandName} 产品目录`;
        
        const header = document.querySelector('header h1');
        if (header) {
            header.textContent = `${brandName} 产品目录`;
        }

        const subtitle = document.querySelector('header p');
        if (subtitle) {
            const categories = [...new Set(this.getProductsByBrand(brandKey).map(p => p.category))];
            subtitle.textContent = categories.join(' · ') + ' 等更多产品';
        }
    }

    renderProductList(products) {
        const main = document.querySelector('main.product-list');
        if (!main) return;

        main.innerHTML = '';

        products.forEach(product => {
            const productCard = this.createProductCard(product);
            main.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300/f0f0f0/666666?text=Product+Image'">
                ${product.discount ? `<div class="discount-badge">${product.discount}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-name-en">${product.nameEn}</p>
                <div class="product-spec">规格: ${product.specification}</div>
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-stock">库存: ${product.stock}</div>
                <div class="product-moq">起订量: ${product.moq}件</div>
                <button class="btn-inquiry" onclick="showProductDetails('${product.id}')">查看详情</button>
            </div>
        `;

        return card;
    }
}

// 产品详情弹窗
function showProductDetails(productId) {
    // 这里可以实现产品详情弹窗
    alert(`查看产品详情: ${productId}`);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    new ProductDisplay();
});
