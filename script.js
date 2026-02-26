//  DỮ LIỆU CỦA KHU DU LỊCH (có thể đổi nội dung ở đây)
const destinationsData = [
    {
        id: 1,
        name: "Đèo Mã Pí Lèng",
        category: "Cảnh quan",
        image: "images/nen-mapileng.jpg",
        desc: "Được mệnh danh là 'vua của những cung đèo' tại Việt Nam, Mã Pí Lèng nằm trên con đường Hạnh Phúc nối liền Đồng Văn và Mèo Vạc."
    },
    {
        id: 2,
        name: "Sông Nho Quế",
        category: "Cảnh quan",
        image: "images/nen-songnhoque.jpg",
        desc: "Dòng sông xanh biếc như dải lụa vắt ngang núi rừng, nơi du khách có thể đi thuyền xuyên qua hẻm vực Tu Sản hùng vĩ."
    },
    {
        id: 3,
        name: "Dinh Thự Họ Vương",
        category: "Văn hóa",
        image: "images/nen-dinhthuvuameo.jpg",
        desc: "Hay còn gọi là dinh Vua Mèo, một công trình kiến trúc cổ độc đáo kết hợp giữa văn hóa người Mông và kiến trúc Trung Hoa."
    },
    {
        id: 4,
        name: "Cột Cờ Lũng Cú",
        category: "Văn hóa",
        image: "images/nen-cotcolngcu.jpg",
        desc: "Điểm cực Bắc thiêng liêng nơi địa đầu Tổ quốc, biểu tượng của chủ quyền dân tộc Việt Nam trên cao nguyên đá."
    },
    {
        id: 5,
        name: "Thung Lũng Sủng Là",
        category: "Cảnh quan",
        image: "images/nen-thunglungsungla.jpg",
        desc: "Nơi được chọn làm bối cảnh phim 'Chuyện của Pao', nổi tiếng với những cánh đồng hoa tam giác mạch tuyệt đẹp."
    },
    {
        id: 6,
        name: "Phố Cáo",
        category: "Văn hóa",
        image: "images/nen-phocao.jpg", 
        desc: "Nơi có những ngôi nhà trình tường cổ kính và những cánh đồng hoa tam giác mạch rực rỡ mỗi mùa lễ hội."
    },
    {
        id: 7,
        name: "Núi Đôi Quản Bạ",
        category: "Cảnh quan",
        image: "images/nen-nuidoiquanba.jpg",
        desc: "Tác phẩm nghệ thuật của thiên nhiên với hai ngọn núi tròn trịa, gắn liền với truyền tích về tình mẫu tử thiêng liêng."
    },
    {
        id: 8,
        name: "Làng Lô Lô Chải",
        category: "Văn hóa",
        image: "images/nen-langlolochai.jpg",
        desc: "Ngôi làng cổ nằm ngay dưới chân cột cờ Lũng Cú, nơi lưu giữ vẹn nguyên nét văn hóa của người Lô Lô đen."
    },
    {
        id: 9,
        name: "Cao nguyên đá Đồng Văn",
        category: "Cảnh quan",
        image: "images/nen-caonguyendadongvan.jpg", 
        desc: "Miền đá xám kỳ vĩ giữa trời cực Bắc, nơi thiên nhiên hàng trăm triệu năm tuổi hòa cùng văn hóa bản địa đặc sắc"
    },
    {
        id: 10,
        name: "Dốc Thẩm Mã",
        category: "Cảnh quan",
        image: "images/nen-docthamma.jpg", 
        desc: "Những khúc cua gắt liên tiếp thử thách tay lái, đưa du khách chạm đến vẻ đẹp hùng vĩ của vùng cao nguyên đá.."
    },
    {
        id: 11,
        name: "Phó Bảng",
        category: "Cảnh quan",
        image: "images/nen-phobang.jpg", 
        desc: "Ẩn mình sau những dãy núi đá tai mèo, Phó Bảng mang vẻ đẹp yên bình với những ngôi nhà cổ phủ rêu phong, con đường nhỏ tĩnh lặng và nhịp sống chậm rãi của người dân vùng cao."
    },
    {
        id: 12,
        name: "Rừng thông Yên Minh",
        category: "Cảnh quan",
        image: "images/nen-rungthongyenminh.webp", 
        desc: "Những hàng thông cao vút trải dài theo triền núi, phủ sắc xanh dịu mát giữa đất trời Hà Giang, tạo nên khung cảnh yên bình và thơ mộng giữa hành trình chinh phục cao nguyên đá."
    },
    {
        id: 13,
        name: "Động Lùng Khúy",
        category: "Cảnh quan",
        image: "images/nen-donglungkhuy.jpg", 
        desc: "Ẩn mình giữa núi rừng Quản Bạ, Động Lùng Khúy mở ra không gian huyền bí với những khối nhũ đá muôn hình vạn trạng, lấp lánh dưới ánh đèn vàng, tạo nên khung cảnh vừa tráng lệ vừa mê hoặc.."
    },
    {
        id: 14,
        name: "Cây cô đơn",
        category: "Cảnh quan",
        image: "images/nen-caycodon.jpg", 
        desc: "Một cây xanh lặng lẽ đứng giữa thung lũng rộng lớn, phía xa là núi đá trùng điệp, tạo nên khung cảnh vừa cô tịch vừa nên thơ – điểm dừng chân khiến ai đi qua cũng muốn chậm lại vài phút."
    },
    {
        id: 15,
        name: "Vách Đá Thần",
        category: "Cảnh quan",
        image: "images/nen-vachdatuthan.jpeg", 
        desc: "Giữa mênh mang núi đá xám bạc, Vách Đá Thần sừng sững vươn cao như một bức tường thành tự nhiên, tạo nên khung cảnh kỳ vĩ và đầy cuốn hút giữa đất trời Hà Giang."
    },
    {
        id: 16,
        name: "Hẻm Tu Sản",
        category: "Cảnh quan",
        image: "images/nen-hemtusan.jpg", 
        desc: "Giữa núi non trùng điệp của Hà Giang, Hẻm Tu Sản hiện lên kỳ vĩ với vách đá cao vút soi bóng xuống dòng sông xanh biếc, tạo nên khung cảnh vừa choáng ngợp vừa nên thơ."
    },
    {
        id: 18,
        name: "Phố cổ Đồng Văn",
        category: "Văn hóa",
        image: "images/nen-phocodongvan.jpg", 
        desc: "Những mái ngói âm dương phủ rêu phong, bức tường vàng nhuốm màu thời gian và ánh đèn lồng lung linh khi đêm xuống tạo nên không gian vừa ấm áp vừa hoài niệm giữa thị trấn Đồng Văn.."
    }

];

//  HÀM HIỂN THỊ DỮ LIỆU LÊN GIAO DIỆN
function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    
    // Nếu không có kết quả
    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-20">Không tìm thấy địa danh nào phù hợp.</p>`;
        return;
    }

    // Đổ dữ liệu vào HTML
    grid.innerHTML = items.map(item => `
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
            <img src="${item.image}" alt="${item.name}" class="w-full h-56 object-cover">
            <div class="p-6">
                <span class="text-xs font-bold uppercase text-emerald-600">${item.category}</span>
                <h3 class="text-xl font-bold mt-1 mb-3">${item.name}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

//  TÍNH NĂNG LỌC THEO DANH MỤC
function filterDestinations(category) {
    // Đổi màu nút đang chọn
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-emerald-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-900');
    });
    event.target.classList.add('bg-emerald-600', 'text-white');

    // Lọc dữ liệu
    if (category === 'all') {
        displayDestinations(destinationsData);
    } else {
        const filtered = destinationsData.filter(item => item.category === category);
        displayDestinations(filtered);
    }
}

//  TÍNH NĂNG TÌM KIẾM (Search)
document.getElementById('search-input').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = destinationsData.filter(item => 
        item.name.toLowerCase().includes(keyword) || 
        item.desc.toLowerCase().includes(keyword)
    );
    displayDestinations(filtered);
});

// 5. KHỞI TẠO KHI TRANG WEB TẢI XONG
window.onload = () => {
    displayDestinations(destinationsData);
};

