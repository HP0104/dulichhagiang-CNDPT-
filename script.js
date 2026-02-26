//  DỮ LIỆU CỦA KHU DU LỊCH 
const destinationsData = [
    {
        id: 1,
        name: "Đèo Mã Pí Lèng",
        category: "Cảnh quan",
        image: "images/nen-maphileng.jpg",
        desc: "Được mệnh danh là 'vua của những cung đèo' tại Việt Nam, Mã Pí Lèng nằm trên con đường Hạnh Phúc nối liền Đồng Văn và Mèo Vạc.",
        details: "Mã Pí Lèng là cung đường đèo hiểm trở dài khoảng 20km, nằm trên con đường Hạnh Phúc nối liền thành phố Hà Giang, Đồng Văn và thị trấn Mèo Vạc. Từ đỉnh đèo, bạn có thể ngắm nhìn toàn cảnh hẻm vực Tu Sản sâu nhất Đông Nam Á và dòng sông Nho Quế xanh ngắt như dải lụa."
    },
    {
        id: 2,
        name: "Sông Nho Quế",
        category: "Cảnh quan",
        image: "images/nen-songnhoque.webp",
        desc: "Dòng sông xanh biếc như dải lụa vắt ngang núi rừng, nơi du khách có thể đi thuyền xuyên qua hẻm vực Tu Sản hùng vĩ.",
        details: "Sông Nho Quế là dòng sông xanh biếc chảy giữa cao nguyên đá hùng vĩ của Hà Giang, bắt nguồn từ tỉnh Vân Nam (Trung Quốc) rồi uốn lượn qua huyện Đồng Văn và Mèo Vạc trước khi hòa vào hệ thống sông Gâm. Đoạn đẹp nhất của sông nằm dưới chân Đèo Mã Pí Lèng, nơi dòng nước len lỏi giữa những vách đá dựng đứng của Hẻm Tu Sản – hẻm vực được xem là sâu và hùng vĩ bậc nhất Đông Nam Á . Nhìn từ trên cao, sông Nho Quế hiện lên như một dải lụa xanh ngọc mềm mại giữa màu xám của núi đá tai mèo, tạo nên khung cảnh vừa thơ mộng vừa choáng ngợp. Khi xuống thuyền xuôi dòng, du khách có thể cảm nhận rõ sự tĩnh lặng, mát lành của mặt nước phẳng lặng, hai bên là vách núi cao hàng trăm mét sừng sững. Không chỉ mang giá trị cảnh quan, sông Nho Quế còn là nguồn nước quan trọng đối với đời sống và sản xuất của người dân vùng cao nguyên đá Đồng Văn."
    },
    {
        id: 3,
        name: "Dinh Thự Họ Vương",
        category: "Văn hóa",
        image: "images/nen-dinhthuvuameo.jpg",
        desc: "Hay còn gọi là dinh Vua Mèo, một công trình kiến trúc cổ độc đáo kết hợp giữa văn hóa người Mông và kiến trúc Trung Hoa.",
        details: "Dinh thự họ Vương là công trình kiến trúc cổ nổi tiếng nằm tại thung lũng Sà Phìn, thuộc huyện Đồng Văn, tỉnh Hà Giang. Đây từng là nơi ở của dòng họ Vương – gia tộc quyền lực bậc nhất vùng cao nguyên đá đầu thế kỷ XX, đứng đầu là “Vua Mèo” Vương Chính Đức.Dinh thự được khởi công xây dựng năm 1898 và hoàn thành vào khoảng năm 1907, với kinh phí lớn thời bấy giờ. Công trình mang đậm kiến trúc giao thoa giữa phong cách nhà Thanh (Trung Quốc), nét truyền thống của người Mông và ảnh hưởng kiến trúc Pháp. Toàn bộ dinh được xây bằng đá xanh, gỗ sa mộc quý và ngói âm dương, gồm 3 khu chính với 64 phòng, bố trí theo hình chữ “Vương” (王).Nằm giữa thung lũng được bao quanh bởi núi đá tai mèo, dinh thự có vị trí kín đáo, vừa thuận lợi phòng thủ vừa thể hiện uy quyền của gia tộc họ Vương. Trải qua hơn 100 năm, công trình vẫn giữ được vẻ cổ kính, trầm mặc và đã được công nhận là Di tích kiến trúc nghệ thuật cấp quốc gia.Ngày nay, Dinh thự họ Vương là điểm tham quan hấp dẫn khi du lịch Đồng Văn – Mèo Vạc, nơi du khách có thể tìm hiểu về lịch sử vùng cao nguyên đá và cuộc sống của một dòng họ từng nắm quyền lực lớn ở miền cực Bắc Việt Nam."
    },
    {
        id: 4,
        name: "Cột Cờ Lũng Cú",
        category: "Văn hóa",
        image: "images/nen-cotcolngcu.jpg",
        desc: "Điểm cực Bắc thiêng liêng nơi địa đầu Tổ quốc, biểu tượng của chủ quyền dân tộc Việt Nam trên cao nguyên đá.",
        // details:
    },
    {
        id: 5,
        name: "Thung Lũng Sủng Là",
        category: "Cảnh quan",
        image: "images/nen-thunglungsungla.jpg",
        desc: "Nơi được chọn làm bối cảnh phim 'Chuyện của Pao', nổi tiếng với những cánh đồng hoa tam giác mạch tuyệt đẹp.",
        // details:
    },
    {
        id: 6,
        name: "Phố Cáo",
        category: "Văn hóa",
        image: "images/nen-phocao.jpg", 
        desc: "Nơi có những ngôi nhà trình tường cổ kính và những cánh đồng hoa tam giác mạch rực rỡ mỗi mùa lễ hội.",
        // details:
    },
    {
        id: 7,
        name: "Núi Đôi Quản Bạ",
        category: "Cảnh quan",
        image: "images/nen-nuidoiquanba.jpg",
        desc: "Tác phẩm nghệ thuật của thiên nhiên với hai ngọn núi tròn trịa, gắn liền với truyền tích về tình mẫu tử thiêng liêng.",
        // details:
    },
    {
        id: 8,
        name: "Làng Lô Lô Chải",
        category: "Văn hóa",
        image: "images/nen-langlolochai.jpg",
        desc: "Ngôi làng cổ nằm ngay dưới chân cột cờ Lũng Cú, nơi lưu giữ vẹn nguyên nét văn hóa của người Lô Lô đen.",
        // details:
    },
    {
        id: 9,
        name: "Cao nguyên đá Đồng Văn",
        category: "Cảnh quan",
        image: "images/nen-caonguyendadongvan.jpg", 
        desc: "Miền đá xám kỳ vĩ giữa trời cực Bắc, nơi thiên nhiên hàng trăm triệu năm tuổi hòa cùng văn hóa bản địa đặc sắc",
        // details:
    },
    {
        id: 10,
        name: "Dốc Thẩm Mã",
        category: "Cảnh quan",
        image: "images/nen-docthamma.jpg", 
        desc: "Những khúc cua gắt liên tiếp thử thách tay lái, đưa du khách chạm đến vẻ đẹp hùng vĩ của vùng cao nguyên đá..",
        // details:
    },
    {
        id: 11,
        name: "Phó Bảng",
        category: "Văn hóa",
        image: "images/nen-phobang.jpg", 
        desc: "Ẩn mình sau những dãy núi đá tai mèo, Phó Bảng mang vẻ đẹp yên bình với những ngôi nhà cổ phủ rêu phong, con đường nhỏ tĩnh lặng và nhịp sống chậm rãi của người dân vùng cao.",
        // details:
    },
    {
        id: 12,
        name: "Rừng thông Yên Minh",
        category: "Cảnh quan",
        image: "images/nen-rungthongyenminh.webp", 
        desc: "Những hàng thông cao vút trải dài theo triền núi, phủ sắc xanh dịu mát giữa đất trời Hà Giang, tạo nên khung cảnh yên bình và thơ mộng giữa hành trình chinh phục cao nguyên đá.",
        // details:
    },
    {
        id: 13,
        name: "Động Lùng Khúy",
        category: "Cảnh quan",
        image: "images/nen-donglungkhuy.jpg", 
        desc: "Ẩn mình giữa núi rừng Quản Bạ, Động Lùng Khúy mở ra không gian huyền bí với những khối nhũ đá muôn hình vạn trạng, lấp lánh dưới ánh đèn vàng, tạo nên khung cảnh vừa tráng lệ vừa mê hoặc..",
        // details:
    },
    {
        id: 14,
        name: "Cây cô đơn",
        category: "Cảnh quan",
        image: "images/nen-caycodon.jpg", 
        desc: "Một cây xanh lặng lẽ đứng giữa thung lũng rộng lớn, phía xa là núi đá trùng điệp, tạo nên khung cảnh vừa cô tịch vừa nên thơ – điểm dừng chân khiến ai đi qua cũng muốn chậm lại vài phút.",
        // details:

    },
    {
        id: 15,
        name: "Vách Đá Thần",
        category: "Cảnh quan",
        image: "images/nen-vachdatuthan.jpeg", 
        desc: "Giữa mênh mang núi đá xám bạc, Vách Đá Thần sừng sững vươn cao như một bức tường thành tự nhiên, tạo nên khung cảnh kỳ vĩ và đầy cuốn hút giữa đất trời Hà Giang.",
        // details:
    },
    {
        id: 16,
        name: "Hẻm Tu Sản",
        category: "Cảnh quan",
        image: "images/nen-hemtusan.jpg", 
        desc: "Giữa núi non trùng điệp của Hà Giang, Hẻm Tu Sản hiện lên kỳ vĩ với vách đá cao vút soi bóng xuống dòng sông xanh biếc, tạo nên khung cảnh vừa choáng ngợp vừa nên thơ.",
        // details:
    },
    {
        id: 17,
        name: "Phố cổ Đồng Văn",
        category: "Văn hóa",
        image: "images/nen-phocodongvan.jpg", 
        desc: "Những mái ngói âm dương phủ rêu phong, bức tường vàng nhuốm màu thời gian và ánh đèn lồng lung linh khi đêm xuống tạo nên không gian vừa ấm áp vừa hoài niệm giữa thị trấn Đồng Văn..",
        // details:
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
    <div onclick="openModal(${item.id})" class="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <div class="relative overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-56 object-cover group-hover:scale-110 transition duration-500">
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span class="bg-white text-emerald-700 px-4 py-2 rounded-full font-bold text-sm shadow-lg">Xem chi tiết</span>
            </div>
        </div>
        <div class="p-6">
            <span class="text-xs font-bold uppercase text-emerald-600">${item.category}</span>
            <h3 class="text-xl font-bold mt-1 mb-3">${item.name}</h3>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">${item.desc}</p>
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
// Hàm mở Modal
function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    if (item) {
        content.innerHTML = `
            <img src="${item.image}" class="w-full h-72 object-cover" alt="${item.name}">
            <div class="p-8">
                <span class="text-emerald-600 font-bold uppercase text-sm tracking-widest">${item.category}</span>
                <h2 class="text-3xl font-bold text-emerald-900 mt-2 mb-4">${item.name}</h2>
                <div class="w-16 h-1 bg-orange-500 mb-6"></div>
                <p class="text-gray-700 leading-loose text-lg">${item.details || item.desc}</p>
                <div class="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <span class="text-gray-400 text-sm italic italic">#HaGiangExplore #CNDPT</span>
                    <button onclick="closeModal()" class="bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition">Đã hiểu</button>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Ngăn cuộn trang web khi đang mở modal
    }
}

// Hàm đóng Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Cho phép cuộn trang lại bình thường
}

// Đóng modal khi click ra ngoài vùng trắng
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

