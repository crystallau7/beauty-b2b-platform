// 品牌产品数据
const brandProducts = {
    // 美妆品牌
    'kiehls': [
        { 
            name: { zh: '高保湿面霜 50ML', en: 'ULTRA FACIAL CREAM 50ML', kr: '울트라 페이셜 크림 50ML' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: '金盏花爽肤水 250ML', en: 'CALENDULA TONER 250ML', kr: '캘렌듈라 토너 250ML' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '牛油果眼霜 14ML', en: 'EYE CREAM 14ML', kr: '아이 크림 14ML' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        },
        { 
            name: { zh: '氨基酸洗发水 250ML', en: 'AMINO ACID SHAMPOO 250ML', kr: '아미노산 샴푸 250ML' }, 
            discount: { zh: '45% 折扣', en: '45% SALE', kr: '45% 세일' }
        }
    ],
    'chanel': [
        { 
            name: { zh: '香奈儿5号香水 100ML', en: 'NO.5 PERFUME 100ML', kr: '샤넬 5번 향수 100ML' }, 
            discount: { zh: '65% 折扣', en: '65% SALE', kr: '65% 세일' }
        },
        { 
            name: { zh: '山茶花洁面乳 150ML', en: 'CAMELLIA CLEANSING FOAM 150ML', kr: '카멜리아 클렌징 폼 150ML' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: '奢华精萃面霜 50ML', en: 'LUXURY CREAM 50ML', kr: '럭셔리 크림 50ML' }, 
            discount: { zh: '70% 折扣', en: '70% SALE', kr: '70% 세일' }
        },
        { 
            name: { zh: '可可小姐唇膏 3.5G', en: 'COCO LIPSTICK 3.5G', kr: '코코 립스틱 3.5G' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        }
    ],
    'diptyque': [
        { 
            name: { zh: '无花果香薰蜡烛 190G', en: 'FIGUE CANDLE 190G', kr: '무화과 캔들 190G' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        },
        { 
            name: { zh: '浆果香薰蜡烛 190G', en: 'BAIES CANDLE 190G', kr: '베리 캔들 190G' }, 
            discount: { zh: '45% 折扣', en: '45% SALE', kr: '45% 세일' }
        },
        { 
            name: { zh: '玫瑰护手霜 45ML', en: 'ROSE HAND CREAM 45ML', kr: '로즈 핸드크림 45ML' }, 
            discount: { zh: '40% 折扣', en: '40% SALE', kr: '40% 세일' }
        },
        { 
            name: { zh: '晚香玉沐浴露 200ML', en: 'TUBEREUSE BODY WASH 200ML', kr: '튜베로즈 바디워시 200ML' }, 
            discount: { zh: '35% 折扣', en: '35% SALE', kr: '35% 세일' }
        }
    ],
    'helena-rubinstein': [
        { 
            name: { zh: '黑绷带面霜 50ML', en: 'BLACK BANDAGE CREAM 50ML', kr: '블랙 밴디지 크림 50ML' }, 
            discount: { zh: '75% 折扣', en: '75% SALE', kr: '75% 세일' }
        },
        { 
            name: { zh: '绿宝瓶精华 30ML', en: 'GREEN SERUM 30ML', kr: '그린 세럼 30ML' }, 
            discount: { zh: '70% 折扣', en: '70% SALE', kr: '70% 세일' }
        },
        { 
            name: { zh: '白绷带面霜 50ML', en: 'WHITE BANDAGE CREAM 50ML', kr: '화이트 밴디지 크림 50ML' }, 
            discount: { zh: '72% 折扣', en: '72% SALE', kr: '72% 세일' }
        },
        { 
            name: { zh: '睫毛膏 7ML', en: 'MASCARA 7ML', kr: '마스카라 7ML' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        }
    ],
    'givenchy': [
        { 
            name: { zh: '四宫格散粉 20G', en: 'PRISME LIBRE POWDER 20G', kr: '프리즘 리브르 파우더 20G' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '小羊皮口红 3.4G', en: 'LE ROUGE LIPSTICK 3.4G', kr: '르 루즈 립스틱 3.4G' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        },
        { 
            name: { zh: '禁忌香水 50ML', en: 'L\'INTERDIT PERFUME 50ML', kr: '린테르디 향수 50ML' }, 
            discount: { zh: '65% 折扣', en: '65% SALE', kr: '65% 세일' }
        },
        { 
            name: { zh: '粉底液 30ML', en: 'TEINT COUTURE FOUNDATION 30ML', kr: '텐 쿠튀르 파운데이션 30ML' }, 
            discount: { zh: '45% 折扣', en: '45% SALE', kr: '45% 세일' }
        }
    ],
    'aveda': [
        { 
            name: { zh: '迷迭香薄荷洗发水 250ML', en: 'ROSEMARY MINT SHAMPOO 250ML', kr: '로즈마리 민트 샴푸 250ML' }, 
            discount: { zh: '40% 折扣', en: '40% SALE', kr: '40% 세일' }
        },
        { 
            name: { zh: '护发精华 100ML', en: 'DAMAGE REMEDY SERUM 100ML', kr: '데미지 리메디 세럼 100ML' }, 
            discount: { zh: '45% 折扣', en: '45% SALE', kr: '45% 세일' }
        },
        { 
            name: { zh: '头皮护理精华 100ML', en: 'SCALP TREATMENT 100ML', kr: '두피 트리트먼트 100ML' }, 
            discount: { zh: '42% 折扣', en: '42% SALE', kr: '42% 세일' }
        },
        { 
            name: { zh: '身体乳 200ML', en: 'BODY LOTION 200ML', kr: '바디 로션 200ML' }, 
            discount: { zh: '38% 折扣', en: '38% SALE', kr: '38% 세일' }
        }
    ],
    'hourglass': [
        { 
            name: { zh: '高光棒 4.6G', en: 'VANISH HIGHLIGHTER 4.6G', kr: '배니시 하이라이터 4.6G' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: '粉底液 30ML', en: 'VANISH FOUNDATION 30ML', kr: '배니시 파운데이션 30ML' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '口红 0.9G', en: 'CONFESSION LIPSTICK 0.9G', kr: '컨페션 립스틱 0.9G' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        },
        { 
            name: { zh: '腮红 4.2G', en: 'AMBIENT BLUSH 4.2G', kr: '앰비언트 블러시 4.2G' }, 
            discount: { zh: '58% 折扣', en: '58% SALE', kr: '58% 세일' }
        }
    ],
    'pola': [
        { 
            name: { zh: '黑BA洁面乳 100G', en: 'B.A CLEANSING FOAM 100G', kr: 'B.A 클렌징 폼 100G' }, 
            discount: { zh: '70% 折扣', en: '70% SALE', kr: '70% 세일' }
        },
        { 
            name: { zh: '美白精华 25ML', en: 'WHITESHOT SERUM 25ML', kr: '화이트샷 세럼 25ML' }, 
            discount: { zh: '65% 折扣', en: '65% SALE', kr: '65% 세일' }
        },
        { 
            name: { zh: 'B.A面霜 30G', en: 'B.A CREAM 30G', kr: 'B.A 크림 30G' }, 
            discount: { zh: '68% 折扣', en: '68% SALE', kr: '68% 세일' }
        },
        { 
            name: { zh: '护手霜 100G', en: 'HAND CREAM 100G', kr: '핸드크림 100G' }, 
            discount: { zh: '45% 折扣', en: '45% SALE', kr: '45% 세일' }
        }
    ],
    
    // 潮牌
    'adidas': [
        { 
            name: { zh: 'ULTRABOOST 22 白色', en: 'ULTRABOOST 22 WHITE', kr: '울트라부스트 22 화이트' }, 
            discount: { zh: '65% 折扣', en: '65% SALE', kr: '65% 세일' }
        },
        { 
            name: { zh: 'STAN SMITH 经典款', en: 'STAN SMITH CLASSIC', kr: '스탠 스미스 클래식' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: 'NMD R1 黑色', en: 'NMD R1 CORE BLACK', kr: 'NMD R1 코어 블랙' }, 
            discount: { zh: '62% 折扣', en: '62% SALE', kr: '62% 세일' }
        },
        { 
            name: { zh: '运动套装 黑色', en: 'SPORTS SET BLACK', kr: '스포츠 세트 블랙' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        }
    ],
    'nike': [
        { 
            name: { zh: 'AIR FORCE 1 白色', en: 'AIR FORCE 1 WHITE', kr: '에어 포스 1 화이트' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: 'AIR MAX 270 黑色', en: 'AIR MAX 270 BLACK', kr: '에어 맥스 270 블랙' }, 
            discount: { zh: '65% 折扣', en: '65% SALE', kr: '65% 세일' }
        },
        { 
            name: { zh: 'DUNK LOW 白色', en: 'DUNK LOW WHITE', kr: '덩크 로우 화이트' }, 
            discount: { zh: '58% 折扣', en: '58% SALE', kr: '58% 세일' }
        },
        { 
            name: { zh: '运动裤 灰色', en: 'SPORTS PANTS GRAY', kr: '스포츠 팬츠 그레이' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        }
    ],
    'wass-up': [
        { 
            name: { zh: '连帽卫衣 黑色', en: 'HOODIE BLACK', kr: '후드티 블랙' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '运动裤 灰色', en: 'SPORTS PANTS GRAY', kr: '스포츠 팬츠 그레이' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        },
        { 
            name: { zh: '棒球帽 黑色', en: 'BASEBALL CAP BLACK', kr: '야구모자 블랙' }, 
            discount: { zh: '45% 折扣', en: '45% SALE', kr: '45% 세일' }
        },
        { 
            name: { zh: '帆布鞋 白色', en: 'CANVAS SHOES WHITE', kr: '캔버스 슈즈 화이트' }, 
            discount: { zh: '52% 折扣', en: '52% SALE', kr: '52% 세일' }
        }
    ],
    'puma': [
        { 
            name: { zh: 'SUEDE 经典黑色', en: 'SUEDE CLASSIC BLACK', kr: '스웨이드 클래식 블랙' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: 'RS-X 白色', en: 'RS-X WHITE', kr: 'RS-X 화이트' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '运动T恤 黑色', en: 'SPORTS TEE BLACK', kr: '스포츠 티 블랙' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        },
        { 
            name: { zh: '运动包 黑色', en: 'SPORTS BAG BLACK', kr: '스포츠 백 블랙' }, 
            discount: { zh: '47% 折扣', en: '47% SALE', kr: '47% 세일' }
        }
    ],
    'mlb': [
        { 
            name: { zh: '棒球帽 黑色', en: 'BASEBALL CAP BLACK', kr: '야구모자 블랙' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '连帽卫衣 白色', en: 'HOODIE WHITE', kr: '후드티 화이트' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: '运动鞋 黑色', en: 'SNEAKERS BLACK', kr: '스니커즈 블랙' }, 
            discount: { zh: '53% 折扣', en: '53% SALE', kr: '53% 세일' }
        },
        { 
            name: { zh: '双肩包 黑色', en: 'BACKPACK BLACK', kr: '백팩 블랙' }, 
            discount: { zh: '50% 折扣', en: '50% SALE', kr: '50% 세일' }
        }
    ],
    'off-white': [
        { 
            name: { zh: '箭头T恤 白色', en: 'ARROW TEE WHITE', kr: '애로우 티 화이트' }, 
            discount: { zh: '75% 折扣', en: '75% SALE', kr: '75% 세일' }
        },
        { 
            name: { zh: '工业腰带 黑色', en: 'INDUSTRIAL BELT BLACK', kr: '인더스트리얼 벨트 블랙' }, 
            discount: { zh: '70% 折扣', en: '70% SALE', kr: '70% 세일' }
        },
        { 
            name: { zh: '运动鞋 白色', en: 'SNEAKERS WHITE', kr: '스니커즈 화이트' }, 
            discount: { zh: '72% 折扣', en: '72% SALE', kr: '72% 세일' }
        },
        { 
            name: { zh: '斜挎包 黑色', en: 'CROSSBODY BAG BLACK', kr: '크로스바디 백 블랙' }, 
            discount: { zh: '68% 折扣', en: '68% SALE', kr: '68% 세일' }
        }
    ],
    'essentials': [
        { 
            name: { zh: '连帽卫衣 黑色', en: 'HOODIE BLACK', kr: '후드티 블랙' }, 
            discount: { zh: '65% 折扣', en: '65% SALE', kr: '65% 세일' }
        },
        { 
            name: { zh: '运动裤 灰色', en: 'SPORTS PANTS GRAY', kr: '스포츠 팬츠 그레이' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        },
        { 
            name: { zh: 'T恤 白色', en: 'TEE WHITE', kr: '티 화이트' }, 
            discount: { zh: '55% 折扣', en: '55% SALE', kr: '55% 세일' }
        },
        { 
            name: { zh: '运动鞋 黑色', en: 'SNEAKERS BLACK', kr: '스니커즈 블랙' }, 
            discount: { zh: '62% 折扣', en: '62% SALE', kr: '62% 세일' }
        }
    ],
    'supreme': [
        { 
            name: { zh: 'BOX LOGO T恤 白色', en: 'BOX LOGO TEE WHITE', kr: '박스 로고 티 화이트' }, 
            discount: { zh: '85% 折扣', en: '85% SALE', kr: '85% 세일' }
        },
        { 
            name: { zh: '滑板 红色', en: 'SKATEBOARD RED', kr: '스케이트보드 레드' }, 
            discount: { zh: '70% 折扣', en: '70% SALE', kr: '70% 세일' }
        },
        { 
            name: { zh: '连帽卫衣 黑色', en: 'HOODIE BLACK', kr: '후드티 블랙' }, 
            discount: { zh: '80% 折扣', en: '80% SALE', kr: '80% 세일' }
        },
        { 
            name: { zh: '配件套装', en: 'ACCESSORIES SET', kr: '액세서리 세트' }, 
            discount: { zh: '60% 折扣', en: '60% SALE', kr: '60% 세일' }
        }
    ]
};

// 获取品牌产品列表
function getBrandProducts(brandName) {
    return brandProducts[brandName] || [];
}
