// EmailJS 测试脚本
// 在浏览器控制台中运行此脚本来测试 EmailJS 功能

console.log('🚀 开始 EmailJS 测试...');

// EmailJS 配置
const EMAILJS_CONFIG = {
    publicKey: 'pQawzAYPpaHYW27ZS',
    serviceId: 'service_y2ur8xo',
    templateId: 'template_cygz6pq',
    recipientEmail: 'liumengting711@gmail.com',
    recipientName: '刘梦婷'
};

// 测试数据
const testData = {
    // 收件人信息
    to_name: EMAILJS_CONFIG.recipientName,
    to_email: EMAILJS_CONFIG.recipientEmail,
    
    // 发件人信息
    from_name: '测试用户',
    from_email: 'test@example.com',
    reply_to: 'test@example.com',
    
    // 联系信息
    contact_name: '测试用户',
    contact_email: 'test@example.com',
    contact_phone: '+86 13800138000',
    message: '这是一条来自控制台的测试留言，用于验证 EmailJS 功能是否正常工作。如果您收到这封邮件，说明配置成功！',
    
    // 兼容性字段
    name: '测试用户',
    email: 'test@example.com',
    phone: '+86 13800138000',
    company_name: '网站留言测试',
    contact_person: '测试用户',
    additional_info: '这是一条来自控制台的测试留言，用于验证 EmailJS 功能是否正常工作。如果您收到这封邮件，说明配置成功！'
};

// 测试函数
async function testEmailJS() {
    try {
        console.log('📧 正在发送测试邮件...');
        console.log('📤 发送数据:', testData);
        
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId, 
            EMAILJS_CONFIG.templateId, 
            testData
        );
        
        console.log('✅ 邮件发送成功！');
        console.log('📨 响应信息:', response);
        console.log('📬 请检查邮箱:', EMAILJS_CONFIG.recipientEmail);
        
        return response;
    } catch (error) {
        console.error('❌ 邮件发送失败:');
        console.error('错误详情:', error);
        return null;
    }
}

// 检查 EmailJS 是否已初始化
function checkEmailJSStatus() {
    console.log('🔍 检查 EmailJS 状态...');
    console.log('配置信息:', EMAILJS_CONFIG);
    
    if (typeof emailjs !== 'undefined') {
        console.log('✅ EmailJS 已加载');
        console.log('版本:', emailjs.version || '未知');
        return true;
    } else {
        console.error('❌ EmailJS 未加载');
        return false;
    }
}

// 运行测试
console.log('='.repeat(50));
console.log('📧 EmailJS 功能测试');
console.log('='.repeat(50));

// 检查状态
if (checkEmailJSStatus()) {
    // 运行测试
    testEmailJS().then(result => {
        if (result) {
            console.log('🎉 测试完成！邮件应该已发送到:', EMAILJS_CONFIG.recipientEmail);
        } else {
            console.log('💥 测试失败，请检查配置');
        }
    });
} else {
    console.log('⚠️ 请确保 EmailJS 已正确加载');
}

console.log('='.repeat(50));
