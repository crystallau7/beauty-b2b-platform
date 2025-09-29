// 品牌产品数据
const brandProducts = {
    // 美妆品牌
    'kiehls': [
        { name: 'ULTRA FACIAL CREAM 50ML', discount: '60% SALE' },
        { name: 'CALENDULA TONER 250ML', discount: '55% SALE' },
        { name: 'EYE CREAM 14ML', discount: '50% SALE' },
        { name: 'AMINO ACID SHAMPOO 250ML', discount: '45% SALE' }
    ],
    'chanel': [
        { name: 'NO.5 PERFUME 100ML', discount: '65% SALE' },
        { name: 'CAMELLIA CLEANSING FOAM 150ML', discount: '60% SALE' },
        { name: 'LUXURY CREAM 50ML', discount: '70% SALE' },
        { name: 'COCO LIPSTICK 3.5G', discount: '55% SALE' }
    ],
    'diptyque': [
        { name: 'FIGUE CANDLE 190G', discount: '50% SALE' },
        { name: 'BAIES CANDLE 190G', discount: '45% SALE' },
        { name: 'ROSE HAND CREAM 45ML', discount: '40% SALE' },
        { name: 'TUBEREUSE BODY WASH 200ML', discount: '35% SALE' }
    ],
    'helena-rubinstein': [
        { name: 'BLACK BANDAGE CREAM 50ML', discount: '75% SALE' },
        { name: 'GREEN SERUM 30ML', discount: '70% SALE' },
        { name: 'WHITE BANDAGE CREAM 50ML', discount: '72% SALE' },
        { name: 'MASCARA 7ML', discount: '60% SALE' }
    ],
    'givenchy': [
        { name: 'PRISME LIBRE POWDER 20G', discount: '55% SALE' },
        { name: 'LE ROUGE LIPSTICK 3.4G', discount: '50% SALE' },
        { name: 'L\'INTERDIT PERFUME 50ML', discount: '65% SALE' },
        { name: 'TEINT COUTURE FOUNDATION 30ML', discount: '45% SALE' }
    ],
    'aveda': [
        { name: 'ROSEMARY MINT SHAMPOO 250ML', discount: '40% SALE' },
        { name: 'DAMAGE REMEDY SERUM 100ML', discount: '45% SALE' },
        { name: 'SCALP TREATMENT 100ML', discount: '42% SALE' },
        { name: 'BODY LOTION 200ML', discount: '38% SALE' }
    ],
    'hourglass': [
        { name: 'VANISH HIGHLIGHTER 4.6G', discount: '60% SALE' },
        { name: 'VANISH FOUNDATION 30ML', discount: '55% SALE' },
        { name: 'CONFESSION LIPSTICK 0.9G', discount: '50% SALE' },
        { name: 'AMBIENT BLUSH 4.2G', discount: '58% SALE' }
    ],
    'pola': [
        { name: 'B.A CLEANSING FOAM 100G', discount: '70% SALE' },
        { name: 'WHITESHOT SERUM 25ML', discount: '65% SALE' },
        { name: 'B.A CREAM 30G', discount: '68% SALE' },
        { name: 'HAND CREAM 100G', discount: '45% SALE' }
    ],
    
    // 潮牌
    'adidas': [
        { name: 'ULTRABOOST 22 WHITE', discount: '65% SALE' },
        { name: 'STAN SMITH CLASSIC', discount: '60% SALE' },
        { name: 'NMD R1 CORE BLACK', discount: '62% SALE' },
        { name: 'SPORTS SET BLACK', discount: '55% SALE' }
    ],
    'nike': [
        { name: 'AIR FORCE 1 WHITE', discount: '60% SALE' },
        { name: 'AIR MAX 270 BLACK', discount: '65% SALE' },
        { name: 'DUNK LOW WHITE', discount: '58% SALE' },
        { name: 'SPORTS PANTS GRAY', discount: '50% SALE' }
    ],
    'wass-up': [
        { name: 'HOODIE BLACK', discount: '55% SALE' },
        { name: 'SPORTS PANTS GRAY', discount: '50% SALE' },
        { name: 'BASEBALL CAP BLACK', discount: '45% SALE' },
        { name: 'CANVAS SHOES WHITE', discount: '52% SALE' }
    ],
    'puma': [
        { name: 'SUEDE CLASSIC BLACK', discount: '60% SALE' },
        { name: 'RS-X WHITE', discount: '55% SALE' },
        { name: 'SPORTS TEE BLACK', discount: '50% SALE' },
        { name: 'SPORTS BAG BLACK', discount: '47% SALE' }
    ],
    'mlb': [
        { name: 'BASEBALL CAP BLACK', discount: '55% SALE' },
        { name: 'HOODIE WHITE', discount: '60% SALE' },
        { name: 'SNEAKERS BLACK', discount: '53% SALE' },
        { name: 'BACKPACK BLACK', discount: '50% SALE' }
    ],
    'off-white': [
        { name: 'ARROW TEE WHITE', discount: '75% SALE' },
        { name: 'INDUSTRIAL BELT BLACK', discount: '70% SALE' },
        { name: 'SNEAKERS WHITE', discount: '72% SALE' },
        { name: 'CROSSBODY BAG BLACK', discount: '68% SALE' }
    ],
    'essentials': [
        { name: 'HOODIE BLACK', discount: '65% SALE' },
        { name: 'SPORTS PANTS GRAY', discount: '60% SALE' },
        { name: 'TEE WHITE', discount: '55% SALE' },
        { name: 'SNEAKERS BLACK', discount: '62% SALE' }
    ],
    'supreme': [
        { name: 'BOX LOGO TEE WHITE', discount: '85% SALE' },
        { name: 'SKATEBOARD RED', discount: '70% SALE' },
        { name: 'HOODIE BLACK', discount: '80% SALE' },
        { name: 'ACCESSORIES SET', discount: '60% SALE' }
    ]
};

// 获取品牌产品列表
function getBrandProducts(brandName) {
    return brandProducts[brandName] || [];
}
