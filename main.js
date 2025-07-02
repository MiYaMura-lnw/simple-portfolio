document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const shopNowBtn = document.getElementById('shopNowBtn');

    // ตัวอย่างข้อมูลสินค้า (สามารถเพิ่มได้ตามต้องการ)
    const products = [
        {
            id: 1,
            name: 'Gaming PC PRO',
            price: '35,900 บาท',
            image: 'https://via.placeholder.com/300x200?text=Gaming+PC'
        },
        {
            id: 2,
            name: 'Laptop Ultra Slim',
            price: '28,500 บาท',
            image: 'https://via.placeholder.com/300x200?text=Laptop'
        },
        {
            id: 3,
            name: 'Workstation Extreme',
            price: '49,999 บาท',
            image: 'https://via.placeholder.com/300x200?text=Workstation'
        },
        {
            id: 4,
            name: 'Mini PC Home',
            price: '12,000 บาท',
            image: 'https://via.placeholder.com/300x200?text=Mini+PC'
        }
    ];

    // ฟังก์ชันสำหรับสร้างและแสดงสินค้า
    function displayProducts() {
        productGrid.innerHTML = ''; // เคลียร์ของเก่าออกก่อน
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button data-id="${product.id}">หยิบใส่ตะกร้า</button>
            `;
            productGrid.appendChild(productItem);
        });
    }

    // เมื่อหน้าเว็บโหลดเสร็จ ให้แสดงสินค้า
    displayProducts();

    // Event Listener สำหรับปุ่ม "เลือกซื้อเลย!"
    shopNowBtn.addEventListener('click', () => {
        // เลื่อนไปยังส่วนสินค้า
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    // Event Listener สำหรับปุ่ม "หยิบใส่ตะกร้า" (ตัวอย่าง)
    productGrid.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = event.target.dataset.id;
            const productName = event.target.closest('.product-item').querySelector('h3').textContent;
            alert(`คุณได้เพิ่ม "${productName}" (ID: ${productId}) ลงในตะกร้าสินค้าแล้ว! (ฟังก์ชันนี้ยังไม่ได้เขียนระบบตะกร้าจริงจัง)`);
            // ในโปรเจกต์จริง คุณจะต้องเพิ่มโค้ดสำหรับจัดการตะกร้าสินค้า
        }
    });
});