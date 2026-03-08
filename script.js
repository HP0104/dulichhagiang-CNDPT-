
const destinationsData = [
  {
        id: 1,
        name: "Đèo Mã Pí Lèng",
        category: "Địa danh/Cảnh quan",
        lat: 23.2329, lng: 105.2787,
        relatedCultureIds: [101, 105, 106],
        cultureKeywords: [{ label: "Chợ phiên", linkId: 102 }, { label: "Lao động", linkId: 105 }, { label: "Ẩm thực", linkId: 106 }],
        image: "images/nen-maphileng.jpg",
        desc: "Đệ nhất hùng quan của vùng cao nguyên đá Hà Giang.",
        visitTime: "Sáng sớm hoặc chiều tà để ngắm hoàng hôn.",
        ticketPrice: "Miễn phí",
        transport: "Xe máy phượt là trải nghiệm tốt nhất.",
        bestSeason: "Tháng 10 - Tháng 12 (Mùa tam giác mạch)",
        locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.5!2d105.41!3d23.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3696a096!2zRMOInternalIE3DoyBQaSBMw6huZw!5e0!3m2!1svi!2s",
        experience: "Hãy dừng chân tại Panorama để ngắm trọn hẻm Tu Sản. Đường đèo rất dốc, cần tay lái vững.",
        culture: {
            festival: "Lễ hội hoa Tam Giác Mạch đặc sắc.",
            costume: "Váy áo rực rỡ của người Mông trắng, người Mông đen.",
            customs: "Tục khèn Mông gọi bạn, giao lưu tại trạm dừng chân.",
            art: "Tiếng khèn Mông, múa khèn trên vách đá."
        },
        food: {
            name: "Thắng Cố & Rượu Ngô Men Lá",
            image: "images/food-thangcoruoungo.png",
            price: "100.000đ - 200.000đ",
            location: "Chợ phiên Đồng Văn (Sáng CN hàng tuần)"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Đồng Văn. Ngày 2: Mã Pí Lèng - Nho Quế - Về.",
            itinerary3D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Lũng Cú - Đồng Văn. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Kiểm tra phanh xe thường xuyên. Không đi khi trời tối sương mù.",
            estimatedCost: "2.500.000đ/người (Tự túc)"
        }
    },
    {
        id: 2,
        name: "Sông Nho Quế",
        category: "Địa danh/Cảnh quan",
        lat: 23.2305, lng: 105.2874,
        relatedCultureIds: [101, 105, 106],
        cultureKeywords: [{ label: "Văn hóa Lao động", linkId: 105 }, { label: "Ẩm thực", linkId: 106 }],
        image: "images/nen-songnhoque.webp",
        desc: "Dòng sông xanh biếc uốn lượn dưới chân hẻm vực Tu Sản.",
        visitTime: "9h sáng đến 3h chiều để thấy màu nước đẹp nhất.",
        ticketPrice: "100.000đ (Vé thuyền) + 50.000đ (Xe ôm xuống bến)",
        transport: "Xe máy xuống bến, sau đó đi thuyền.",
        bestSeason: "Tháng 2 - Tháng 3 (Mùa hoa gạo)",
        locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.0!2d105.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3696a1!2zU8O0bmcgTmhvIFF14bq_!5e0!3m2!1svi!2s",
        experience: "Nên thuê thuyền để tự mình khám phá hẻm Tu Sản. Hãy chuẩn bị máy ảnh đầy pin!",
        culture: {
            festival: "Các lễ hội của người dân tộc hai bên bờ sông.",
            costume: "Trang phục dân tộc Lô Lô, Mông rực rỡ.",
            customs: "Đánh bắt cá suối thủ công.",
            art: "Hát giao duyên trên bến thuyền."
        },
        food: {
            name: "Cá suối nướng",
            image: "images/food-casuoinuong.jpg",
            price: "80.000đ/đĩa",
            location: "Các quán ăn ngay bến thuyền"
        },
        logistics: {
            itinerary2D: "Kết hợp tham quan đèo Mã Pí Lèng.",
            itinerary3D: "Dành trọn nửa ngày trải nghiệm sông Nho Quế.",
            safety: "Luôn mặc áo phao. Đường xuống bến rất dốc và nhiều cua.",
            estimatedCost: "500.000đ (Chi phí riêng cho sông)"
        }
    },
    {
        id: 3,
        name: "Dinh Thự Họ Vương",
        category: "Địa danh/Cảnh quan",
        lat: 23.1526, lng: 105.2343,
        relatedCultureIds: [104, 105],
        cultureKeywords: [{ label: "Kiến trúc & Làng cổ", linkId: 104 }, { label: "Văn hóa Lao động", linkId: 105 }],
        image: "images/nen-dinhthuvuameo.jpg",
        desc: "Còn gọi là dinh Vua Mèo – công trình kiến trúc cổ độc đáo giữa thung lũng Sà Phìn.",
        visitTime: "8h00 - 17h00 hàng ngày.",
        ticketPrice: "30.000đ/người",
        transport: "Xe máy hoặc ô tô từ thị trấn Đồng Văn (khoảng 15km).",
        bestSeason: "Tháng 9 - Tháng 11 (Trời khô ráo, dễ tham quan).",
        locationMap: "https://www.google.com/maps?q=Dinh+thu+ho+Vuong+Ha+Giang&output=embed",
        experience: "Nên thuê hướng dẫn viên tại điểm để hiểu rõ hơn về lịch sử dòng họ Vương và kiến trúc đặc biệt hình chữ 'Vương'.",
        culture: {
            festival: "Các lễ hội truyền thống của người Mông tại Sà Phìn.",
            costume: "Trang phục người Mông với hoa văn thêu tay tinh xảo.",
            customs: "Phong tục sinh hoạt và tổ chức gia tộc của người Mông xưa.",
            art: "Kiến trúc giao thoa giữa nhà Thanh, văn hóa Mông và ảnh hưởng Pháp."
        },
        food: {
            name: "Thắng Dền & Rượu Ngô",
            image: "images/food-thangden.jpg",
            price: "20.000đ - 50.000đ",
            location: "Chợ Sà Phìn hoặc thị trấn Đồng Văn"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Dinh họ Vương - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Lũng Cú - Dinh họ Vương. Ngày 3: Mã Pí Lèng.",
            safety: "Giữ gìn trật tự, không chạm vào hiện vật cổ.",
            estimatedCost: "1.500.000đ - 2.000.000đ/người"
        }
    },
    {
        id: 4,
        name: "Cột Cờ Lũng Cú",
        category: "Địa danh/Cảnh quan",
        lat: 23.3784, lng: 105.3139,
        relatedCultureIds: [101, 105],
        cultureKeywords: [{ label: "Văn hóa dân tộc", linkId: 101 }, { label: "Lịch sử biên cương", linkId: 105 }],
        image: "images/nen-cotcolngcu.jpg",
        desc: "Điểm cực Bắc thiêng liêng – biểu tượng chủ quyền quốc gia trên cao nguyên đá Hà Giang.",
        visitTime: "7h00 - 17h30 hàng ngày.",
        ticketPrice: "25.000đ/người",
        transport: "Xe máy hoặc ô tô từ thị trấn Đồng Văn (khoảng 24km).",
        bestSeason: "Tháng 9 - Tháng 11 (Trời trong, tầm nhìn xa đẹp nhất).",
        locationMap: "https://www.google.com/maps?q=Cot+Co+Lung+Cu+Ha+Giang&output=embed",
        experience: "Chuẩn bị sức để leo hơn 800 bậc thang đá. Nên đi buổi sáng để tránh nắng và chụp ảnh toàn cảnh.",
        culture: {
            festival: "Lễ chào cờ và các hoạt động kỷ niệm ngày lễ lớn.",
            costume: "Trang phục truyền thống của người Mông và Lô Lô.",
            customs: "Phong tục sinh hoạt của đồng bào vùng biên giới.",
            art: "Kiến trúc mô phỏng Cột cờ Hà Nội với chân đế bát giác."
        },
        food: {
            name: "Bánh Tam Giác Mạch & Thịt Gác Bếp",
            image: "images/food-banhtgmvathitgacbep.png",
            price: "20.000đ - 150.000đ",
            location: "Các quán ăn gần trung tâm xã Lũng Cú"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn - Lũng Cú. Ngày 2: Mã Pí Lèng - Nho Quế.",
            itinerary3D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Lũng Cú - Đồng Văn. Ngày 3: Mã Pí Lèng.",
            safety: "Mang giày thể thao chống trượt. Cẩn thận khi leo bậc đá vào mùa mưa.",
            estimatedCost: "1.500.000đ - 2.500.000đ/người"
        }
    },
    {
        id: 5,
        name: "Thung Lũng Sủng Là",
        category: "Địa danh/Cảnh quan",
        lat: 23.1567, lng: 105.2148,
        relatedCultureIds: [101, 103, 104],
        cultureKeywords: [{ label: "Văn hóa dân tộc", linkId: 101 }, { label: "Lễ hội", linkId: 103 }, { label: "Kiến trúc", linkId: 104 }],
        image: "images/nen-thunglungsungla.jpg",
        desc: "“Bông hoa giữa cao nguyên đá” – nổi tiếng với mùa hoa tam giác mạch và Nhà của Pao.",
        visitTime: "6h30 - 17h30 (đẹp nhất vào buổi sáng).",
        ticketPrice: "20.000đ - 30.000đ",
        transport: "Nằm trên Quốc lộ 4C, di chuyển bằng xe máy hoặc ô tô.",
        bestSeason: "Tháng 10 - Tháng 12 (Mùa hoa tam giác mạch) hoặc tháng 1 - 3 (đào, mận).",
        locationMap: "https://www.google.com/maps?q=Thung+Lung+Sung+La+Ha+Giang&output=embed",
        experience: "Nên thuê trang phục dân tộc để chụp ảnh giữa vườn hoa. Ghé thăm Nhà của Pao.",
        culture: {
            festival: "Lễ hội hoa Tam Giác Mạch thường tổ chức vào cuối năm.",
            costume: "Trang phục truyền thống rực rỡ của người Mông và Lô Lô.",
            customs: "Nhà trình tường đất đặc trưng và đời sống sinh hoạt vùng cao.",
            art: "Kiến trúc nhà cổ trong phim 'Chuyện của Pao'."
        },
        food: {
            name: "Bánh Tam Giác Mạch & Mèn Mén",
            image: "images/food-memmen.jfif",
            price: "20.000đ - 80.000đ",
            location: "Sủng Là hoặc thị trấn Đồng Văn"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Sủng Là - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Sủng Là - Nhà của Pao. Ngày 3: Mã Pí Lèng.",
            safety: "Không dẫm lên hoa khi chụp ảnh.",
            estimatedCost: "2.000.000đ - 2.500.000đ/người"
        }
    },
    {
        id: 6,
        name: "Phố Cáo",
        category: "Địa danh/Cảnh quan",
        lat: 23.1495, lng: 105.2002,
        relatedCultureIds: [101, 104],
        cultureKeywords: [{ label: "Văn hóa dân tộc", linkId: 101 }, { label: "Kiến trúc", linkId: 104 }],
        image: "images/nen-phocao.jpg",
        desc: "Ngôi làng vùng cao yên bình với nhà trình tường cổ kính giữa cao nguyên đá.",
        visitTime: "Cả ngày (Đẹp nhất vào mùa xuân).",
        ticketPrice: "Miễn phí",
        transport: "Xe máy hoặc ô tô (Dọc Quốc lộ 4C).",
        bestSeason: "Tháng 1 - 3 (Mùa hoa đào, mận) hoặc tháng 10 - 12.",
        locationMap: "https://www.google.com/maps?q=Pho+Cao+Dong+Van+Ha+Giang&output=embed",
        experience: "Dành thời gian đi bộ sâu vào trong làng để thấy những hàng rào đá xếp thủ công tinh xảo.",
        culture: {
            festival: "Các lễ hội dân gian của người Mông dịp đầu năm.",
            costume: "Trang phục thêu tay rực rỡ của phụ nữ Mông.",
            customs: "Nhà trình tường đất, hàng rào đá đặc trưng.",
            art: "Nghệ thuật kiến trúc dân gian vùng cao."
        },
        food: {
            name: "Lạp Xưởng Gác Bếp & Thịt Trâu",
            image: "images/food-lapxuong.jfif",
            price: "150.000đ - 300.000đ",
            location: "Các quán ăn dọc đường qua xã Phố Cáo"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh - Phố Cáo - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Yên Minh. Ngày 2: Phố Cáo - Sủng Là - Lũng Cú.",
            safety: "Xin phép người dân trước khi chụp ảnh trong sân nhà họ.",
            estimatedCost: "2.000.000đ"
        }
    },
    {
        id: 7,
        name: "Núi Đôi Quản Bạ",
        category: "Địa danh/Cảnh quan",
        lat: 23.0547, lng: 104.9892,
        relatedCultureIds: [101],
        cultureKeywords: [{ label: "Truyền thuyết dân gian", linkId: 101 }],
        image: "images/nen-nuidoiquanba.jpg",
        desc: "Biểu tượng cửa ngõ cao nguyên đá với hai ngọn núi tròn đầy kỳ diệu.",
        visitTime: "6h00 - 18h00 (Đẹp nhất lúc sáng sớm có sương).",
        ticketPrice: "Miễn phí (Hoặc phí nhỏ tại trạm ngắm cảnh).",
        transport: "Xe máy hoặc ô tô (Cách TP Hà Giang 45km).",
        bestSeason: "Tháng 9 - Tháng 12 hoặc tháng 3 - 5.",
        locationMap: "https://www.google.com/maps?q=Nui+Doi+Quan+Ba+Ha+Giang&output=embed",
        experience: "Dừng chân tại Cổng trời Quản Bạ để có góc nhìn toàn cảnh đẹp nhất.",
        culture: {
            festival: "Lễ hội dân tộc người Mông, Dao tại địa phương.",
            costume: "Trang phục thổ cẩm người Dao Tiền.",
            customs: "Truyền thuyết Núi Cô Tiên gắn liền với tình mẫu tử.",
            art: "Vẻ đẹp tạo hình tự nhiên độc đáo bậc nhất Việt Nam."
        },
        food: {
            name: "Phở Chua & Lợn Cắp Nách",
            image: "images/food-phochua.jfif",
            price: "40.000đ - 150.000đ",
            location: "Thị trấn Tam Sơn, huyện Quản Bạ"
        },
        logistics: {
            itinerary2D: "Hà Giang - Quản Bạ - Yên Minh.",
            itinerary3D: "Ngày 1: TP Hà Giang - Quản Bạ (Nghỉ đêm Tam Sơn).",
            safety: "Đoạn đèo Quản Bạ thường có sương mù dày đặc.",
            estimatedCost: "1.500.000đ"
        }
    },
    {
        id: 8,
        name: "Làng Lô Lô Chải",
        category: "Địa danh/Cảnh quan",
        lat: 23.3731, lng: 105.3131,
        relatedCultureIds: [101, 104], 
        cultureKeywords: [{ label: "Văn hóa dân tộc", linkId: 101 }, { label: "Làng cổ", linkId: 104 }],
        image: "images/nen-langlolochai.jpg",
        desc: "Ngôi làng cổ dưới chân cột cờ Lũng Cú, lưu giữ bản sắc người Lô Lô đen.",
        visitTime: "Cả ngày (Nên ở lại qua đêm).",
        ticketPrice: "Miễn phí tham quan làng.",
        transport: "Xe máy hoặc ô tô (Cách Đồng Văn 24km).",
        bestSeason: "Tháng 10 - 12 (Mùa tam giác mạch, cải vàng).",
        locationMap: "https://www.google.com/maps?q=Lang+Lo+Lo+Chai+Ha+Giang&output=embed",
        experience: "Hãy thưởng thức cafe tại quán Cafe Cực Bắc ngay giữa làng.",
        culture: {
            festival: "Lễ hội cầu mùa và nghi lễ trống đồng.",
            costume: "Trang phục ghép vải màu rực rỡ, cầu kỳ.",
            customs: "Nhà trình tường cổ, hàng rào đá xếp tay.",
            art: "Nghệ thuật thêu và trống đồng cổ truyền."
        },
        food: {
            name: "Gà Đen & Lẩu Rau Cải",
            image: "images/food-lau-ga-den-ha-giang.jpeg",
            price: "200.000đ - 400.000đ",
            location: "Các Homestay tại làng Lô Lô Chải"
        },
        logistics: {
            itinerary2D: "Đồng Văn - Lũng Cú - Lô Lô Chải.",
            itinerary3D: "Nghỉ đêm Ngày 2 tại Homestay trong làng.",
            safety: "Giữ yên tĩnh và trật tự vào buổi tối.",
            estimatedCost: "2.500.000đ"
        }
    },
    {
        id: 9,
        name: "Cao nguyên đá Đồng Văn",
        category: "Địa danh/Cảnh quan",
        lat: 23.2710, lng: 105.2800,
        relatedCultureIds: [101, 105],
        cultureKeywords: [{ label: "Văn hóa dân tộc", linkId: 101 }, { label: "Lịch sử", linkId: 105 }],
        image: "images/nen-caonguyendadongvan.jpg",
        desc: "Công viên địa chất toàn cầu UNESCO với miền đá xám kỳ vĩ bậc nhất.",
        visitTime: "Quanh năm.",
        ticketPrice: "Miễn phí (Chỉ tính vé tại các điểm nhỏ).",
        transport: "Mọi phương tiện đường bộ.",
        bestSeason: "Tháng 9 - Tháng 5 hàng năm.",
        locationMap: "https://www.google.com/maps?q=Cao+nguyen+da+Dong+Van&output=embed",
        experience: "Hãy quan sát sự biến đổi của đá núi từ màu xám sang đen khi trời mưa.",
        culture: {
            festival: "Lễ hội hoa Tam Giác Mạch quy mô lớn.",
            costume: "Bản sắc đa dạng của Mông, Dao, Lô Lô.",
            customs: "Sức sống mãnh liệt của con người trên đá.",
            art: "Giá trị địa chất hàng trăm triệu năm tuổi."
        },
        food: {
            name: "Thịt Trâu Gác Bếp & Mèn Mén",
            image: "images/food-traugacbep.jfif",
            price: "từng phân  theo trải nghiệm",
            location: "Thị trấn Đồng Văn hoặc các chợ phiên"
        },
        logistics: {
            itinerary2D: "Đây là vùng không gian chính của toàn bộ hành trình.",
            itinerary3D: "Dành trọn vẹn thời gian để di chuyển qua các huyện.",
            safety: "Đường đèo liên tục, cần kiểm tra xe kỹ.",
            estimatedCost: "3.000.000đ"
        }
    },
    {
        id: 10,
        name: "Dốc Thẩm Mã",
        category: "Địa danh/Cảnh quan",
        lat: 23.1522, lng: 105.1906,
        relatedCultureIds: [105],
        cultureKeywords: [{ label: "Lịch sử giao thương", linkId: 105 }],
        image: "images/nen-docthamma.jpg",
        desc: "Con dốc 'thẩm định sức ngựa' với những khúc cua tay áo ngoạn mục.",
        visitTime: "Nên đến vào lúc chiều tà.",
        ticketPrice: "Miễn phí",
        transport: "Xe máy hoặc ô tô (Cung Yên Minh - Đồng Văn).",
        bestSeason: "Mùa lúa chín hoặc mùa hoa tam giác mạch.",
        locationMap: "https://www.google.com/maps?q=Doc+Tham+Ma+Ha+Giang&output=embed",
        experience: "Bạn sẽ gặp các em bé vùng cao đeo gùi hoa chụp ảnh rất đẹp tại đỉnh dốc.",
        culture: {
            festival: "Gắn liền với văn hóa ngựa thồ vùng cao.",
            costume: "Trang phục dân tộc của trẻ em bản địa.",
            customs: "Tục thẩm định sức bền vật nuôi xưa kia.",
            art: "Cung đường uốn lượn như một tác phẩm điêu khắc."
        },
        food: {
            name: "Ngô Nướng & Trứng Nướng",
            image: "images/food-trungngonuong.jfif",
            price: "10.000đ - 30.000đ",
            location: "Đỉnh dốc Thẩm Mã"
        },
        logistics: {
            itinerary2D: "Điểm dừng chân trên đường từ Yên Minh đi Đồng Văn.",
            itinerary3D: "Dừng 30-45 phút để chụp ảnh và nghỉ ngơi.",
            safety: "Dốc rất quanh co, hạn chế vượt xe tại các khúc cua.",
            estimatedCost: "50.000đ (Ăn vặt)"
        }
    },
    {
        id: 11,
        name: "Phó Bảng",
        category: "Địa danh/Cảnh quan",
        lat: 23.1375, lng: 105.1704,
        relatedCultureIds: [101, 104],
        cultureKeywords: [
            { label: "Văn hóa dân tộc", linkId: 101 },
            { label: "Kiến trúc cổ", linkId: 104 }
        ],
        image: "images/nen-phobang.jpg",
        desc: "Thị trấn cổ yên bình giữa cao nguyên đá với những ngôi nhà tường đất phủ rêu phong.",
        visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc chiều muộn).",
        ticketPrice: "Miễn phí",
        transport: "Cách thị trấn Đồng Văn khoảng 5km, di chuyển bằng xe máy hoặc ô tô.",
        bestSeason: "Tháng 10 - 12 (mùa hoa tam giác mạch) hoặc mùa xuân khi hoa đào, hoa mận nở.",
        locationMap: "https://www.google.com/maps?q=Pho+Bang+Dong+Van+Ha+Giang&output=embed",
        experience: "Dành thời gian đi bộ qua các con ngõ nhỏ, chụp ảnh nhà cổ và cảm nhận nhịp sống chậm rãi của người dân địa phương.",
        culture: {
            festival: "Các phiên chợ vùng cao và lễ hội truyền thống của người Mông, người Hoa.",
            costume: "Trang phục truyền thống của người Mông và Hoa sinh sống lâu đời tại đây.",
            customs: "Nhà tường đất, mái ngói âm dương và sinh hoạt cộng đồng đặc trưng.",
            art: "Kiến trúc cổ pha trộn giữa văn hóa Hoa và Mông, tạo nên vẻ đẹp hoài niệm."
        },
        food: {
            name: "Bánh Ngô & Thịt Gác Bếp",
            image: "images/food-banhngo.jfif",
            price: "20.000đ - 150.000đ",
            location: "Các quán nhỏ trong thị trấn Phó Bảng"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Quản Bạ - Yên Minh. Ngày 2: Phó Bảng - Đồng Văn - Mã Pí Lèng.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Phó Bảng - Lũng Cú. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Đường vào thị trấn khá hẹp và có nhiều khúc cua, cần lái xe cẩn thận.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người (tour 3 ngày 2 đêm tự túc)"
        }
    },
    {
        id: 12,
        name: "Rừng thông Yên Minh",
        category: "Địa danh/Cảnh quan",
        lat: 23.0359, lng: 105.0586,
        relatedCultureIds: [105],
        cultureKeywords: [
            { label: "Sinh thái", linkId: 105 }
        ],
        image: "images/nen-rungthongyenminh.webp",
        desc: "“Đà Lạt thu nhỏ” giữa Hà Giang với những triền thông xanh mướt dọc Quốc lộ 4C.",
        visitTime: "Cả ngày (đẹp nhất vào sáng sớm có sương hoặc chiều muộn).",
        ticketPrice: "Miễn phí",
        transport: "Nằm trên Quốc lộ 4C, giữa Quản Bạ và Yên Minh, thuận tiện đi xe máy hoặc ô tô.",
        bestSeason: "Tháng 9 - Tháng 4 (thời tiết mát mẻ, ít mưa).",
        locationMap: "https://www.google.com/maps?q=Rung+Thong+Yen+Minh+Ha+Giang&output=embed",
        experience: "Dừng chân bên đường để chụp ảnh con đường xuyên rừng thông. Buổi sáng sớm có sương tạo khung cảnh rất thơ mộng.",
        culture: {
            festival: "Gắn liền với các phiên chợ và lễ hội của người dân Yên Minh.",
            costume: "Hình ảnh người Mông, Dao trong trang phục truyền thống giữa rừng thông.",
            customs: "Điểm nghỉ chân quen thuộc của người dân và du khách trên hành trình lên cao nguyên đá.",
            art: "Cảnh quan rừng thông mềm mại, khác biệt với núi đá tai mèo đặc trưng Hà Giang."
        },
        food: {
            name: "Ngô Luộc & Trứng Nướng",
            image: "images/food-ngoluoc.jfif",
            price: "10.000đ - 40.000đ",
            location: "Các quán nhỏ ven Quốc lộ 4C"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Quản Bạ - Rừng thông Yên Minh. Ngày 2: Đồng Văn - Mã Pí Lèng.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Rừng thông - Lũng Cú. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Cẩn thận khi dừng xe ven đường đèo. Tránh đi quá sâu vào rừng khi trời tối.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người (tour 3 ngày 2 đêm tự túc)"
        }
    },
    {
        id: 13,
        name: "Động Lùng Khúy",
        category: "Địa danh/Cảnh quan",
        lat: 23.0333, lng: 104.9915,
        relatedCultureIds: [105],
        cultureKeywords: [
            { label: "Du lịch sinh thái", linkId: 105 }
        ],
        image: "images/nen-donglungkhuy.jpg",
        desc: "Hang động huyền ảo giữa núi rừng Quản Bạ với hệ thống nhũ đá lấp lánh như cung điện dưới lòng đất.",
        visitTime: "7h30 - 17h00 hàng ngày.",
        ticketPrice: "20.000đ/người",
        transport: "Cách trung tâm thị trấn Tam Sơn (Quản Bạ) khoảng 7km, đi xe máy hoặc ô tô rồi đi bộ lên cửa hang.",
        bestSeason: "Tháng 9 - Tháng 4 (thời tiết khô ráo, thuận tiện tham quan).",
        locationMap: "https://www.google.com/maps?q=Dong+Lung+Khuy+Ha+Giang&output=embed",
        experience: "Mang giày thể thao chống trượt vì lối đi trong hang có thể ẩm ướt. Nên đi theo nhóm để có trải nghiệm tốt hơn.",
        culture: {
            festival: "Gắn với đời sống và tín ngưỡng dân gian của người dân Quản Bạ.",
            costume: "Hình ảnh người Mông, Dao trong trang phục truyền thống khi tham quan hang động.",
            customs: "Người dân địa phương xem hang động như món quà của thiên nhiên ban tặng.",
            art: "Hệ thống thạch nhũ, măng đá hình thành hàng triệu năm với nhiều hình thù độc đáo."
        },
        food: {
            name: "Lạp Xưởng Gác Bếp & Rượu Ngô",
            image: "images/food-lapxuong.jfif",
            price: "50.000đ - 200.000đ",
            location: "Các quán ăn tại thị trấn Tam Sơn (Quản Bạ)"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Quản Bạ - Động Lùng Khúy. Ngày 2: Yên Minh - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Động Lùng Khúy - Yên Minh - Đồng Văn. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Không chạm tay vào nhũ đá để bảo tồn cảnh quan. Cẩn thận khi di chuyển trên bậc đá ẩm.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người (tour 3 ngày 2 đêm tự túc)"
        }
    },
    {
        id: 14,
        name: "Cây Cô Đơn Hà Giang",
        category: "Địa danh/Cảnh quan",
        lat: 23.2338, lng: 105.2685,
        relatedCultureIds: [105],
        cultureKeywords: [
            { label: "Check-in", linkId: 105 }
        ],
        image: "images/nen-caycodon.jpg",
        desc: "Điểm check-in nổi bật giữa cao nguyên đá với hình ảnh cây xanh đơn độc giữa thung lũng rộng lớn.",
        visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc hoàng hôn).",
        ticketPrice: "Miễn phí",
        transport: "Nằm trên cung đường Đồng Văn - Mèo Vạc, gần đèo Mã Pí Lèng, di chuyển bằng xe máy hoặc ô tô.",
        bestSeason: "Tháng 9 - Tháng 12 (trời trong, ánh sáng đẹp để chụp ảnh).",
        locationMap: "https://www.google.com/maps?q=Cay+Co+Don+Ha+Giang&output=embed",
        experience: "Nên dừng xe đúng vị trí an toàn ven đường để chụp ảnh. Buổi chiều muộn ánh nắng xiên tạo khung hình rất ấn tượng.",
        culture: {
            festival: "Gắn liền với hành trình khám phá đèo Mã Pí Lèng và cao nguyên đá.",
            costume: "Du khách thường thuê trang phục dân tộc để chụp ảnh tại đây.",
            customs: "Điểm dừng chân tự phát nhưng được nhiều phượt thủ yêu thích.",
            art: "Hình ảnh cây đơn độc giữa núi đá tạo nên biểu tượng cảm xúc đặc trưng của Hà Giang."
        },
        food: {
            name: "Ngô Nướng & Cà Phê Mang Đi",
            image: "images/mon-caphe.jpg",
            price: "15.000đ - 50.000đ",
            location: "Các quán nhỏ ven đường gần đèo Mã Pí Lèng"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn - Mã Pí Lèng - Cây Cô Đơn. Ngày 2: Sông Nho Quế - Mèo Vạc.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Đồng Văn - Lũng Cú. Ngày 3: Mã Pí Lèng - Cây Cô Đơn - Nho Quế.",
            safety: "Cẩn thận khi dừng xe trên đường đèo. Tránh đứng quá sát mép vực để chụp ảnh.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người (tour 3 ngày 2 đêm tự túc)"
        }
    },
    {
    id: 15,
    name: "Vách Đá Thần (Vách Đá Trắng)",
    category: "Địa danh/Cảnh quan",
    lat: 23.2367, lng: 105.2729,
    relatedCultureIds: [105],
    cultureKeywords: [{ label: "Cảnh quan đá vôi", linkId: 105 }],
    image: "images/nen-vachdatuthan.jpeg",
    desc: "Điểm đi bộ trekking ngắm toàn cảnh hẻm Tu Sản từ trên cao.",
    visitTime: "Cả ngày (Nên đi buổi sáng)",
    ticketPrice: "Miễn phí",
    transport: "Đi bộ từ trạm dừng nghỉ đèo Mã Pí Lèng.",
    bestSeason: "Tháng 9 - Tháng 4.",
    locationMap: "https://www.google.com/maps?q=Vach+Da+Than+Ha+Giang&output=embed",
    experience: "Cung đường đi bộ sát vách núi, cảm giác mạnh nhưng cảnh sắc vô cùng xứng đáng.",
    culture: {
        festival: "Nằm trong quần thể công viên địa chất toàn cầu.",
        costume: "Trang phục trekking gọn nhẹ.",
        customs: "Điểm thờ cúng tâm linh nhỏ của người dân địa phương trên vách đá.",
        art: "Vẻ đẹp kỳ vĩ của tạo hóa."
    },
    food: {
        name: "images/food-lapxuong.jfif",
        image: "images/mon-lapxuong.jpg",
        price: "20.000đ - 50.000đ",
        location: "Dọc đường đi bộ"
    },
    logistics: {
        itinerary2D: "Kết hợp trong ngày đi Mã Pí Lèng.",
        itinerary3D: "Dành 2 tiếng trekking tại đây.",
        safety: "Không dành cho người sợ độ cao, không đi khi trời mưa trơn trượt.",
        estimatedCost: "200.000đ (bao gồm ăn vặt & nước uống)"
    }
},
    {
        id: 16,
        name: "Hẻm Tu Sản",
        category: "Địa danh/Cảnh quan",
        lat: 23.2276, lng: 105.2871,
        relatedCultureIds: [105, 106],
        cultureKeywords: [{ label: "Công viên địa chất", linkId: 105 }],
        image: "images/nen-hemtusan.jpg", 
        desc: "Hẻm vực sâu và hùng vĩ bậc nhất Đông Nam Á với vách đá dựng đứng soi bóng xuống dòng Nho Quế xanh ngọc.",
        visitTime: "Cả ngày (đẹp nhất từ 9h - 15h khi có nắng chiếu xuống lòng hẻm).",
        ticketPrice: "100.000đ - 150.000đ (bao gồm vé thuyền tham quan sông Nho Quế).",
        transport: "Di chuyển đến đèo Mã Pí Lèng, sau đó xuống bến thuyền bằng xe máy hoặc xe trung chuyển.",
        bestSeason: "Tháng 9 - Tháng 4 (mùa khô, nước sông xanh và ít mưa).",
        locationMap: "https://www.google.com/maps?q=Hem+Tu+San+Ha+Giang&output=embed",
        experience: "Nên trải nghiệm đi thuyền trên sông Nho Quế để cảm nhận trọn vẹn độ cao của vách đá. Chuẩn bị mũ, kính râm vì khu vực lòng hẻm khá nắng.",
        culture: {
            festival: "Gắn liền với tuyến du lịch đèo Mã Pí Lèng và cao nguyên đá Đồng Văn.",
            costume: "Du khách thường mặc trang phục dân tộc hoặc đồ nổi bật để chụp ảnh giữa nền đá xám.",
            customs: "Tôn trọng cảnh quan thiên nhiên, không xả rác xuống sông.",
            art: "Vách đá cao 700–900m tạo nên hình ảnh biểu tượng hùng vĩ đặc trưng của Hà Giang."
        },
        food: {
            name: "Thắng Dền & Ngô Nướng",
            image: "images/food-thangden.jpg",
            price: "15.000đ - 40.000đ",
            location: "Khu vực bến thuyền sông Nho Quế"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn - Mã Pí Lèng - Hẻm Tu Sản. Ngày 2: Mèo Vạc - Sông Nho Quế.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Đồng Văn - Lũng Cú. Ngày 3: Mã Pí Lèng - Hẻm Tu Sản.",
            safety: "Mặc áo phao khi đi thuyền. Không đứng sát mép thuyền hoặc leo trèo vách đá.",
            estimatedCost: "2.500.000đ - 3.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
        }
    },
    {
        id: 17,
        name: "Phố cổ Đồng Văn",
        category: "Địa danh/Cảnh quan",
        lat: 23.2766, lng: 105.3625,
        relatedCultureIds: [101, 102, 104],
        cultureKeywords: [
            { label: "Chợ phiên", linkId: 102 },
            { label: "Kiến trúc cổ", linkId: 104 },
            { label: "Văn hóa dân tộc", linkId: 101 }
        ],
        image: "images/nen-phocodongvan.jpg", 
        desc: "Khu phố hơn 100 năm tuổi với mái ngói âm dương, tường vàng cổ kính và ánh đèn lồng ấm áp.",
        visitTime: "Cả ngày (đẹp nhất vào buổi tối khi lên đèn và sáng Chủ nhật khi có chợ phiên).",
        ticketPrice: "Miễn phí",
        transport: "Nằm ngay trung tâm thị trấn Đồng Văn, dễ dàng đi bộ.",
        bestSeason: "Tháng 9 - Tháng 4 (thời tiết mát mẻ, ít mưa).",
        locationMap: "https://www.google.com/maps?q=Pho+Co+Dong+Van+Ha+Giang&output=embed",
        experience: "Nên dạo phố vào buổi tối để ngắm đèn lồng và thưởng thức ẩm thực. Sáng Chủ nhật đi chợ phiên.",
        culture: {
            festival: "Gắn liền với chợ phiên và các lễ hội truyền thống của đồng bào vùng cao.",
            costume: "Du khách có thể thuê hoặc mặc trang phục dân tộc để chụp ảnh.",
            customs: "Tôn trọng đời sống sinh hoạt của người dân địa phương.",
            art: "Kiến trúc nhà trình tường, mái ngói âm dương và đèn lồng đỏ tạo nét giao thoa văn hóa."
        },
        food: {
            name: "Thắng Cố & Bánh Tam Giác Mạch",
            image: "images/food-thangcoruoungo.png",
            price: "20.000đ - 120.000đ",
            location: "Các quán ăn và hàng rong khu phố cổ"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Phố cổ Đồng Văn - Lũng Cú - Mã Pí Lèng.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Đồng Văn - Phố cổ. Ngày 3: Mã Pí Lèng - Mèo Vạc.",
            safety: "Giữ gìn tư trang cá nhân khi tham quan chợ phiên đông người.",
            estimatedCost: "2.000.000đ - 3.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
        }
    },
    // --- CÁC CHUYÊN ĐỀ VĂN HÓA (isCultureTopic: true) ---

 {
        id: 101,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa các dân tộc thiểu số",
        image: "images/nen-dantoc.jpg",
        desc: "Hà Giang là nơi sinh sống của 22 dân tộc anh em, mỗi cộng đồng mang một bản sắc riêng về trang phục, kiến trúc, lễ hội và tín ngưỡng.",
        sections: [
            {
                title: "Người Mông",
                content: "Người Mông là cộng đồng đông nhất tại Hà Giang, sinh sống chủ yếu ở các huyện vùng cao như Đồng Văn, Mèo Vạc, Yên Minh và Quản Bạ. Họ nổi bật với nhà trình tường bằng đất dày giúp giữ ấm vào mùa đông và mát vào mùa hè. Trang phục truyền thống của phụ nữ được làm từ vải lanh nhuộm chàm, trang trí bằng kỹ thuật thêu và vẽ sáp ong tinh xảo. Người Mông nổi tiếng với tiếng khèn trong các lễ hội và sinh hoạt cộng đồng, đặc biệt là lễ hội Gầu Tào – lễ cầu phúc, cầu con và cầu may mắn đầu năm. Cuộc sống của họ gắn liền với việc trồng ngô trên các triền đá của cao nguyên đá Đồng Văn, thể hiện sự thích nghi bền bỉ với điều kiện tự nhiên khắc nghiệt."
            },
            {
                title: "Người Tày",
                content: "Người Tày là một trong những dân tộc có dân số lớn ở vùng Đông Bắc Việt Nam và cũng sinh sống khá đông tại Hà Giang, đặc biệt ở các thung lũng và vùng ven suối. Họ thường ở nhà sàn gỗ truyền thống, sinh hoạt cộng đồng gắn bó với ruộng lúa nước. Văn hóa của người Tày nổi bật với hát then, đàn tính và nhiều làn điệu dân ca truyền thống. Lễ hội Lồng Tồng (xuống đồng) vào đầu xuân là nghi lễ quan trọng nhằm cầu mong mùa màng bội thu và cuộc sống ấm no. Người Tày còn có kho tàng truyện thơ, tục ngữ và phong tục truyền thống phong phú."
            },
            {
                title: "Người Dao",
                content: "Người Dao sinh sống ở nhiều vùng núi của Hà Giang và được chia thành nhiều nhóm như Dao đỏ, Dao tiền, Dao áo dài. Trang phục truyền thống của họ rất nổi bật với màu đỏ và các họa tiết thêu tay tinh xảo. Một nghi lễ quan trọng trong đời sống văn hóa của người Dao là lễ cấp sắc, đánh dấu sự trưởng thành của nam giới và công nhận họ là thành viên đầy đủ của cộng đồng. Người Dao còn nổi tiếng với tri thức dân gian về cây thuốc và phong tục tắm lá thuốc truyền thống, được cho là giúp thư giãn và phục hồi sức khỏe."
            },
            {
                title: "Người Nùng",
                content: "Người Nùng sinh sống chủ yếu ở các vùng thấp và trung du của Hà Giang. Họ có truyền thống canh tác lúa nước, trồng trọt và chăn nuôi. Nghề rèn thủ công và làm nông cụ của người Nùng khá phát triển. Văn hóa dân gian của họ phong phú với các làn điệu hát sli, hát lượn mượt mà, thường được hát trong các dịp lễ hội hoặc giao duyên. Các phiên chợ vùng cao cũng là nơi người Nùng giao lưu văn hóa và trao đổi hàng hóa."
            },
            {
                title: "Người Lô Lô",
                content: "Người Lô Lô là một dân tộc thiểu số có dân số ít, sinh sống chủ yếu tại khu vực Lũng Cú và Mèo Vạc. Trang phục truyền thống của họ rất đặc sắc với kỹ thuật ghép vải màu thành các họa tiết hình học tinh xảo. Người Lô Lô còn nổi tiếng với việc gìn giữ văn hóa trống đồng cổ truyền, được sử dụng trong các nghi lễ quan trọng của cộng đồng như lễ tang và lễ cầu mùa. Văn hóa của họ phản ánh sự gắn bó chặt chẽ với thiên nhiên và tổ tiên."
            },
            {
                title: "Người Pà Thẻn",
                content: "Người Pà Thẻn sống chủ yếu ở huyện Quang Bình và Bắc Quang của Hà Giang. Trang phục truyền thống của họ có màu đỏ nổi bật và được trang trí bằng nhiều họa tiết thêu tay. Lễ hội Nhảy lửa là nét văn hóa đặc trưng nhất của dân tộc Pà Thẻn. Trong nghi lễ này, các thanh niên sau khi thực hiện nghi thức tâm linh có thể nhảy chân trần vào đống than hồng mà không bị bỏng, thể hiện niềm tin vào sức mạnh thần linh và tinh thần cộng đồng."
            },
            {
                title: "Người La Chí",
                content: "Người La Chí sinh sống chủ yếu tại huyện Hoàng Su Phì, nơi nổi tiếng với những thửa ruộng bậc thang tuyệt đẹp. Họ có truyền thống canh tác lúa nước lâu đời và tổ chức nhiều nghi lễ liên quan đến nông nghiệp. Lễ hội Khu Cù Tê là một lễ hội lớn của người La Chí nhằm cầu mùa màng bội thu và tạ ơn thần linh. Trang phục truyền thống của họ thường mang màu chàm giản dị, thể hiện sự gần gũi với thiên nhiên."
            },
            {
                title: "Người Cờ Lao",
                content: "Người Cờ Lao là một trong những dân tộc rất ít người tại Hà Giang, sinh sống ở các vùng núi cao thuộc huyện Đồng Văn và Hoàng Su Phì. Họ duy trì nhiều tín ngưỡng cổ truyền, đặc biệt là tục thờ thần núi và thần đất. Cuộc sống của người Cờ Lao gắn liền với canh tác nương rẫy, trồng ngô và các loại cây lương thực trên sườn núi. Các nghi lễ cộng đồng và phong tục truyền thống vẫn được duy trì qua nhiều thế hệ."
            },
            {
                title: "Người Pu Péo",
                content: "Người Pu Péo là một trong những dân tộc ít người nhất ở Việt Nam và sinh sống chủ yếu ở vùng Đồng Văn của Hà Giang. Văn hóa của họ gắn liền với tín ngưỡng thờ thần đá và thờ tổ tiên. Người Pu Péo có nhiều nghi lễ truyền thống liên quan đến nông nghiệp và chu kỳ mùa vụ. Cuộc sống của họ gắn bó mật thiết với thiên nhiên vùng cao và các tập quán sinh hoạt cổ truyền vẫn được bảo tồn đến ngày nay."
            },
            {
                title: "Người Bố Y",
                content: "Người Bố Y là một dân tộc thiểu số sinh sống rải rác tại các huyện vùng cao của Hà Giang như Quản Bạ và Đồng Văn. Cuộc sống của họ chủ yếu dựa vào nông nghiệp, trồng lúa nương, ngô và chăn nuôi nhỏ. Người Bố Y thường ở nhà đất hoặc nhà sàn đơn giản, phù hợp với điều kiện vùng núi. Trang phục truyền thống mang sắc chàm với kiểu dáng giản dị. Trong đời sống văn hóa, họ duy trì nhiều lễ hội nông nghiệp như lễ cầu mùa, cầu mưa nhằm mong cho mùa màng tốt tươi. Tín ngưỡng của người Bố Y gắn với việc thờ cúng tổ tiên và các vị thần tự nhiên như thần núi, thần đất."
            },
            {
                title: "Người Phù Lá",
                content: "Người Phù Lá sinh sống tại một số vùng núi phía bắc Hà Giang, thường cư trú trên các triền núi và khu vực trung du. Họ chủ yếu canh tác nương rẫy, trồng lúa nương, ngô và các loại cây lương thực khác. Trang phục truyền thống của người Phù Lá thường có màu chàm, được may đơn giản nhưng mang nét đặc trưng riêng của từng nhóm địa phương. Trong sinh hoạt văn hóa, người Phù Lá duy trì nhiều phong tục cổ truyền, đặc biệt là các nghi lễ liên quan đến nông nghiệp, cầu mùa và tạ ơn thần linh. Các hoạt động cộng đồng, lễ hội và nghi lễ cúng tổ tiên đóng vai trò quan trọng trong đời sống tinh thần của họ."
            },
            {
                title: "Người La Ha",
                content: "Người La Ha là một dân tộc thiểu số sinh sống ở vùng núi phía Bắc Việt Nam, trong đó có một bộ phận cư trú tại Hà Giang. Họ sống chủ yếu bằng nương rẫy, trồng lúa nương, ngô và chăn nuôi gia súc. Nhà ở của người La Ha thường là nhà sàn gỗ hoặc nhà đất đơn giản phù hợp với địa hình miền núi. Văn hóa của họ gắn liền với nhiều nghi lễ nông nghiệp cổ truyền như lễ cầu mưa, cầu mùa và lễ tạ ơn sau thu hoạch. Người La Ha cũng có nhiều phong tục tập quán đặc sắc trong sinh hoạt cộng đồng, lễ cưới và lễ tang."
            },
            {
                title: "Người Sán Chỉ",
                content: "Người Sán Chỉ sinh sống tại một số vùng núi và trung du của Hà Giang. Họ chủ yếu làm nông nghiệp với các hoạt động trồng lúa nước, trồng ngô và chăn nuôi. Nhà ở truyền thống của người Sán Chỉ thường là nhà sàn hoặc nhà đất đơn giản. Nét văn hóa nổi bật của dân tộc này là làn điệu hát soóng cọ – hình thức hát giao duyên giữa nam và nữ trong các dịp lễ hội hoặc mùa xuân. Các lễ hội truyền thống không chỉ là dịp vui chơi mà còn là cơ hội để cộng đồng gắn kết và truyền lại các giá trị văn hóa cho thế hệ trẻ."
            },
            {
                title: "Người Cao Lan (Sán Chay)",
                content: "Người Cao Lan, thuộc nhóm dân tộc Sán Chay, sinh sống tại nhiều vùng trung du và miền núi phía Bắc, trong đó có Hà Giang. Họ có truyền thống canh tác lúa nước kết hợp trồng ngô và các loại cây hoa màu. Nhà ở thường là nhà sàn hoặc nhà đất đơn giản. Văn hóa của người Cao Lan nổi bật với các làn điệu hát đối đáp trong lễ hội và sinh hoạt cộng đồng. Ngoài ra, họ còn duy trì nhiều phong tục truyền thống trong cưới hỏi, lễ tết và thờ cúng tổ tiên, thể hiện sự gắn bó bền chặt của cộng đồng."
            },
            {
                title: "Người Hoa",
                content: "Người Hoa sinh sống chủ yếu tại các thị trấn và khu vực buôn bán của Hà Giang. Họ có truyền thống lâu đời trong các hoạt động thương mại, buôn bán và dịch vụ. Nhiều khu phố mang dấu ấn kiến trúc đặc trưng của người Hoa với các ngôi nhà mái ngói, mặt tiền buôn bán và các đền miếu thờ thần linh. Văn hóa của người Hoa còn thể hiện qua các lễ hội truyền thống như Tết Nguyên Đán, Tết Trung Thu và các hoạt động tín ngưỡng thờ cúng tổ tiên. Sự hiện diện của cộng đồng người Hoa góp phần tạo nên sự đa dạng văn hóa cho vùng đất Hà Giang."
            },
            {
                title: "Người Kinh",
                content: "Người Kinh là dân tộc chiếm đa số ở Việt Nam và cũng sinh sống tại nhiều khu vực của Hà Giang, đặc biệt ở các thị trấn, trung tâm hành chính và vùng thấp. Họ đóng vai trò quan trọng trong sự phát triển kinh tế – xã hội của tỉnh thông qua các hoạt động thương mại, giáo dục, dịch vụ và sản xuất nông nghiệp. Văn hóa người Kinh mang đặc trưng của nền văn minh lúa nước với các phong tục như thờ cúng tổ tiên, lễ Tết truyền thống và các hoạt động sinh hoạt cộng đồng. Tại Hà Giang, văn hóa người Kinh có sự giao thoa với văn hóa của các dân tộc vùng cao, tạo nên sự đa dạng và phong phú trong đời sống văn hóa địa phương."
            },
            {
                title: "Người Thái",
                content: "Người Thái sinh sống chủ yếu tại các vùng trung du và miền núi phía Bắc Việt Nam, trong đó có một bộ phận cư trú tại Hà Giang. Họ nổi tiếng với nhà sàn truyền thống được xây dựng bằng gỗ và tre, thích nghi với điều kiện khí hậu và địa hình vùng núi. Người Thái có nền văn hóa phong phú với các điệu múa xòe đặc trưng, thường được biểu diễn trong các dịp lễ hội và sinh hoạt cộng đồng. Cuộc sống của họ gắn liền với việc canh tác lúa nước, trồng trọt và chăn nuôi. Ẩm thực của người Thái cũng rất đặc sắc với nhiều món ăn truyền thống được chế biến từ gạo nếp, cá suối và các loại gia vị vùng núi."
            },
            {
                title: "Người Mường",
                content: "Người Mường là một trong những dân tộc có lịch sử lâu đời ở vùng núi phía Bắc Việt Nam. Tại Hà Giang, họ sinh sống rải rác ở một số khu vực và duy trì nhiều nét văn hóa truyền thống đặc sắc. Cuộc sống của người Mường gắn liền với nền văn hóa lúa nước và sinh hoạt cộng đồng trong các ngôi nhà sàn. Một nét văn hóa nổi bật của người Mường là nghệ thuật cồng chiêng, được sử dụng trong các nghi lễ, lễ hội và các dịp quan trọng của cộng đồng. Ngoài ra, họ còn có nhiều phong tục truyền thống trong cưới hỏi, tang lễ và thờ cúng tổ tiên."
            },
            {
                title: "Người Giấy",
                content: "Người Giấy sinh sống chủ yếu ở các vùng thung lũng và ven suối của Hà Giang, nơi có điều kiện thuận lợi cho việc trồng lúa nước. Họ thường ở nhà sàn truyền thống và có đời sống gắn bó với nông nghiệp. Trong văn hóa của người Giấy, lễ hội cầu mùa đầu năm là hoạt động quan trọng nhằm cầu mong mùa màng bội thu và cuộc sống bình an. Các nghi lễ trong lễ hội thường bao gồm cúng thần linh, tổ chức các trò chơi dân gian và các hoạt động sinh hoạt cộng đồng. Người Giấy cũng có nhiều phong tục truyền thống liên quan đến cưới hỏi và thờ cúng tổ tiên."
            },
            {
                title: "Người Ngái",
                content: "Người Ngái là một dân tộc thiểu số có nguồn gốc từ cộng đồng người Hoa di cư, sinh sống tại một số địa phương miền núi phía Bắc, trong đó có Hà Giang. Họ chủ yếu làm nông nghiệp, trồng lúa, trồng hoa màu và buôn bán nhỏ. Văn hóa của người Ngái mang sự giao thoa giữa văn hóa bản địa và văn hóa Hoa truyền thống. Trong đời sống cộng đồng, họ vẫn duy trì nhiều phong tục như thờ cúng tổ tiên, tổ chức lễ tết theo lịch âm và các nghi lễ truyền thống trong cưới hỏi và tang lễ."
            },
            {
                title: "Người Khơ Mú",
                content: "Người Khơ Mú là một dân tộc thiểu số sinh sống chủ yếu ở vùng núi phía Bắc và Tây Bắc Việt Nam, trong đó có một số nhóm cư trú tại Hà Giang. Họ thường sống ở các vùng núi cao và làm nương rẫy, trồng lúa nương, ngô và các loại cây lương thực khác. Nhà ở truyền thống của người Khơ Mú thường là nhà sàn hoặc nhà đất đơn giản. Trong đời sống văn hóa, họ duy trì nhiều phong tục gắn với tín ngưỡng tự nhiên như thờ thần núi, thần rừng và tổ tiên. Các nghi lễ cộng đồng và lễ hội truyền thống có vai trò quan trọng trong việc gắn kết cộng đồng."
            },
            {
                title: "Người Hán",
                content: "Một bộ phận nhỏ người Hán sinh sống tại Hà Giang, chủ yếu tại các khu vực thị trấn hoặc nơi có hoạt động giao thương. Họ mang theo nhiều nét văn hóa truyền thống của người Hán như phong tục thờ cúng tổ tiên, các lễ hội truyền thống và nghệ thuật ẩm thực đặc trưng. Trong quá trình sinh sống lâu dài, văn hóa của họ có sự giao thoa với các dân tộc địa phương, góp phần làm phong phú thêm bức tranh văn hóa đa dạng của tỉnh Hà Giang."
            }
        ]
    },
    {
    id: 102,
    isCultureTopic: true,
    category: "Văn hóa",
    name: "Văn hóa Chợ phiên vùng cao",
    image: "images/nen-phiencho.jpg",
    desc: "Chợ phiên vùng cao Hà Giang là nét văn hóa đặc sắc của các dân tộc miền núi, nơi diễn ra hoạt động mua bán, giao lưu văn hóa và gặp gỡ cộng đồng, phản ánh rõ đời sống sinh hoạt và bản sắc truyền thống của người dân địa phương.",
    sections: [
        { 
            title: "Thời gian họp chợ theo phiên truyền thống", 
            content: "Khác với chợ thường ngày ở đồng bằng, chợ vùng cao chỉ họp theo các ngày cố định trong tuần hoặc theo chu kỳ. Nhiều nơi còn có 'chợ lùi', nghĩa là mỗi tuần chợ sẽ lùi lại một ngày so với tuần trước. Người dân thường đi chợ từ rất sớm, khi trời còn mờ sương, và chợ thường tan vào khoảng giữa trưa." 
        },
        { 
            title: "Không gian giao lưu và gặp gỡ cộng đồng", 
            content: "Chợ phiên không chỉ là nơi trao đổi hàng hóa mà còn là nơi gặp gỡ, trò chuyện và kết nối cộng đồng của các dân tộc như Mông, Dao, Tày, Nùng… Nhiều người đi chợ không chỉ để mua bán mà còn để thăm hỏi bạn bè, người thân sau một tuần làm việc trên nương rẫy." 
        },
        { 
            title: "Trang phục truyền thống rực rỡ sắc màu", 
            content: "Ngày họp chợ cũng giống như ngày hội của người vùng cao. Phụ nữ và thanh niên thường mặc những bộ trang phục truyền thống đẹp nhất như váy thêu sáp ong của người Mông, áo đỏ thêu hoa văn của người Dao hay trang phục chàm của người Tày, tạo nên một bức tranh văn hóa đầy màu sắc." 
        },
        { 
            title: "Ẩm thực đặc trưng của chợ vùng cao", 
            content: "Các phiên chợ là nơi du khách có thể thưởng thức nhiều món ăn truyền thống như thắng cố nấu từ thịt và nội tạng ngựa, mèn mén làm từ ngô xay, cháo ấu tẩu đặc sản của Hà Giang hay rượu ngô men lá thơm nồng. Những món ăn này thể hiện rõ nét văn hóa ẩm thực của người dân miền núi." 
        },
        { 
            title: "Âm nhạc dân gian và tiếng khèn Mông", 
            content: "Trong không khí náo nhiệt của phiên chợ, du khách dễ dàng bắt gặp hình ảnh các chàng trai Mông thổi khèn hay những nhóm người tụ tập trò chuyện, hát giao duyên. Tiếng khèn Mông trầm bổng hòa cùng tiếng cười nói tạo nên âm thanh đặc trưng của chợ phiên vùng cao." 
        }
    ]
},
    {
    id: 103,
    isCultureTopic: true,
    category: "Văn hóa",
    name: "Lễ hội truyền thống",
    image: "images/nen-lehoitruynthong.jpg",
    desc: "Hà Giang có nhiều lễ hội truyền thống đặc sắc của các dân tộc như Mông, Tày, Dao, Pà Thẻn… Mỗi lễ hội gắn với tín ngưỡng, nông nghiệp và đời sống cộng đồng, thể hiện ước vọng về mùa màng bội thu, sức khỏe và hạnh phúc.",
    sections: [
        { 
            title: "Lễ hội Gầu Tào của người Mông", 
            content: "Đây là lễ hội lớn của người Mông thường diễn ra từ mùng 1 đến rằm tháng Giêng âm lịch. Lễ hội ban đầu được tổ chức để cầu phúc, cầu con và cầu sức khỏe cho gia đình. Trong ngày hội có nhiều hoạt động như múa khèn, hát giao duyên, ném pao, đánh quay và các trò chơi dân gian truyền thống." 
        },
        { 
            title: "Lễ hội Lồng Tồng (Lễ xuống đồng) của người Tày", 
            content: "Lễ hội diễn ra vào đầu năm mới sau Tết Nguyên Đán nhằm cầu cho mùa màng bội thu và cuộc sống ấm no. Người dân làm lễ cúng thần nông, sau đó tổ chức nhiều hoạt động văn hóa như hát then, đàn tính, tung còn, múa sạp và các trò chơi dân gian." 
        },
        { 
            title: "Lễ hội Nhảy lửa của người Pà Thẻn", 
            content: "Nghi lễ tâm linh độc đáo diễn ra vào dịp cuối năm hoặc đầu năm mới. Sau khi thầy cúng làm lễ, các chàng trai nhảy chân trần vào đống than hồng đang cháy. Nghi lễ thể hiện lòng dũng cảm, sức mạnh tinh thần và niềm tin vào sự bảo hộ của thần linh." 
        },
        { 
            title: "Lễ cấp sắc của người Dao", 
            content: "Đây là nghi lễ quan trọng đánh dấu sự trưởng thành của nam giới trong cộng đồng người Dao. Sau nghi lễ, người đàn ông mới được công nhận là thành viên đầy đủ của cộng đồng và có quyền tham gia các nghi lễ tâm linh." 
        },
        { 
            title: "Lễ hội hoa Tam giác mạch", 
            content: "Được tổ chức hằng năm vào khoảng tháng 10–11 khi hoa tam giác mạch nở rộ trên cao nguyên đá Hà Giang. Lễ hội có nhiều hoạt động như biểu diễn văn hóa dân tộc, hội chợ ẩm thực, trải nghiệm du lịch và quảng bá hình ảnh Hà Giang." 
        },
        { 
            title: "Chợ tình Khâu Vai", 
            content: "Diễn ra vào ngày 27 tháng 3 âm lịch tại huyện Mèo Vạc. Đây là phiên chợ đặc biệt nơi những đôi trai gái từng yêu nhau nhưng không đến được với nhau có dịp gặp lại, trò chuyện và tâm sự sau nhiều năm xa cách." 
        },
        { 
            title: "Tết nhảy của người Dao", 
            content: "Lễ hội truyền thống quan trọng của người Dao đỏ, thường diễn ra vào dịp Tết Nguyên Đán. Trong lễ có các điệu nhảy nghi lễ đặc trưng do các thầy cúng và nam giới thực hiện nhằm tưởng nhớ tổ tiên và cầu mong bình an cho gia đình." 
        },
        { 
            title: "Lễ cúng rừng của các dân tộc vùng cao", 
            content: "Đây là nghi lễ thể hiện tín ngưỡng tôn trọng thiên nhiên của nhiều dân tộc ở Hà Giang. Người dân tổ chức lễ cúng tại khu rừng thiêng của bản làng để cầu mong mùa màng tốt tươi, cuộc sống bình an và bảo vệ rừng." 
        }
    ]
},
   {
    id: 104,
    isCultureTopic: true,
    category: "Văn hóa",
    name: "Kiến trúc & Làng cổ",
    image: "images/nen-kientruc.jpg",
    desc: "Kiến trúc truyền thống ở Hà Giang phản ánh sự thích nghi của các dân tộc vùng cao với điều kiện tự nhiên khắc nghiệt của cao nguyên đá. Từ nhà trình tường của người Mông đến nhà sàn của người Tày, mỗi kiểu nhà đều mang nét văn hóa, tín ngưỡng và lối sống riêng.",
    sections: [
        { 
            title: "Nhà trình tường của người Mông", 
            content: "Nhà được xây bằng đất nện với tường dày khoảng 40–60cm, giúp giữ ấm vào mùa đông và mát mẻ vào mùa hè. Kiểu nhà này thường có tường màu vàng đất nổi bật giữa nền đá xám của cao nguyên. Mái nhà lợp ngói âm dương hoặc ngói máng, xung quanh có hàng rào đá xếp thủ công để bảo vệ gia súc và tạo ranh giới cho khu nhà." 
        },
        { 
            title: "Nhà sàn của người Tày và Nùng", 
            content: "Nhà sàn thường được dựng bằng gỗ chắc chắn, mái lợp lá cọ hoặc ngói. Nhà được nâng cao khỏi mặt đất để tránh ẩm thấp và thú rừng. Không gian bên trong được chia thành nhiều gian, trong đó gian giữa thường đặt bàn thờ tổ tiên – vị trí trang trọng nhất của ngôi nhà." 
        },
        { 
            title: "Làng cổ Lô Lô Chải", 
            content: "Nằm dưới chân cột cờ Lũng Cú, đây là một trong những ngôi làng cổ đẹp nhất Hà Giang. Làng nổi bật với những ngôi nhà trình tường truyền thống, hàng rào đá xếp thủ công và con đường nhỏ lát đá. Nơi đây vẫn giữ được nhiều nét sinh hoạt văn hóa của người Lô Lô." 
        },
        { 
            title: "Dinh thự họ Vương (Dinh Vua Mèo)", 
            content: "Công trình kiến trúc hơn 100 năm tuổi nằm tại thung lũng Sà Phìn. Dinh thự được xây dựng bằng đá, gỗ và ngói âm dương với kiến trúc pha trộn giữa phong cách nhà Thanh của Trung Hoa, nghệ thuật xây dựng của người Mông và ảnh hưởng kiến trúc Pháp." 
        },
        { 
            title: "Phố cổ Đồng Văn", 
            content: "Khu phố cổ có lịch sử hơn một thế kỷ với những ngôi nhà tường đá, mái ngói âm dương và ban công gỗ. Phố cổ mang đậm nét kiến trúc truyền thống vùng cao và là nơi sinh sống của nhiều dân tộc như Hoa, Tày và Mông." 
        },
        { 
            title: "Làng văn hóa du lịch cộng đồng", 
            content: "Nhiều bản làng ở Hà Giang như Nặm Đăm (Quản Bạ) hay Thôn Tha (Hà Giang) vẫn giữ được kiến trúc truyền thống của nhà sàn và nhà trình tường. Các làng này đang phát triển du lịch cộng đồng, giúp du khách trải nghiệm đời sống, ẩm thực và văn hóa bản địa." 
        },
        { 
            title: "Hàng rào đá của người vùng cao", 
            content: "Trên cao nguyên đá Đồng Văn, người dân thường dùng đá xếp thành hàng rào bao quanh nhà và nương rẫy. Những hàng rào đá này được xếp thủ công không cần vữa nhưng vẫn rất chắc chắn, trở thành nét kiến trúc đặc trưng của vùng cao Hà Giang." 
        }
    ]
},
    {
    id: 105,
    isCultureTopic: true,
    category: "Văn hóa",
    name: "Văn hóa Lao động & Lịch sử",
    image: "images/nen-vanhoalichsu.jpg",
    desc: "Văn hóa lao động và lịch sử của Hà Giang thể hiện rõ ý chí bền bỉ của con người vùng cực Bắc. Trên vùng núi đá khắc nghiệt, các dân tộc nơi đây đã sáng tạo nhiều phương thức canh tác độc đáo, đồng thời để lại những dấu ấn lịch sử quan trọng gắn liền với quá trình xây dựng và bảo vệ quê hương.",
    sections: [
        { 
            title: "Canh tác trên đá ở cao nguyên đá Đồng Văn", 
            content: "Do đất canh tác rất ít, người dân vùng cao phải tận dụng từng khe đá nhỏ để trồng ngô. Đất màu được gùi từ nơi khác về đổ vào các hốc đá rồi gieo hạt. Qua nhiều thế hệ, những nương ngô xanh đã hình thành giữa biển đá xám, trở thành hình ảnh đặc trưng của đời sống lao động trên cao nguyên đá." 
        },
        { 
            title: "Ruộng bậc thang Hoàng Su Phì", 
            content: "Những thửa ruộng bậc thang được tạo nên qua hàng trăm năm lao động của các dân tộc như Dao, Nùng và La Chí. Ruộng được xây theo sườn núi để giữ nước và đất, tạo nên những tầng ruộng uốn lượn đẹp mắt. Vào mùa lúa chín, cả vùng núi như được phủ một màu vàng rực rỡ." 
        },
        { 
            title: "Con đường Hạnh Phúc", 
            content: "Con đường dài hơn 180 km nối thành phố Hà Giang với Đồng Văn và Mèo Vạc. Công trình được xây dựng trong những năm 1960 bởi hàng vạn thanh niên xung phong. Nhiều đoạn đường phải khoan phá đá trên vách núi dựng đứng, thể hiện tinh thần kiên cường và ý chí vượt khó của con người." 
        },
        { 
            title: "Công viên địa chất toàn cầu Cao nguyên đá Đồng Văn", 
            content: "Khu vực cao nguyên đá Đồng Văn được UNESCO công nhận là Công viên địa chất toàn cầu vào năm 2010. Nơi đây lưu giữ nhiều dấu tích địa chất có tuổi đời hàng trăm triệu năm, đồng thời là nơi sinh sống của nhiều cộng đồng dân tộc với văn hóa đặc sắc." 
        },
        { 
            title: "Nghề dệt lanh và làm thổ cẩm", 
            content: "Người Mông ở Hà Giang nổi tiếng với nghề trồng lanh, se sợi và dệt vải truyền thống. Vải lanh sau khi dệt sẽ được nhuộm chàm và thêu hoa văn tinh xảo để tạo thành trang phục truyền thống. Nghề này không chỉ phục vụ đời sống mà còn là nét văn hóa lâu đời của cộng đồng." 
        },
        { 
            title: "Chăn nuôi trên vùng núi đá", 
            content: "Bên cạnh trồng trọt, người dân vùng cao còn phát triển chăn nuôi trâu, bò, dê và ngựa để phục vụ sản xuất và vận chuyển. Những đàn gia súc gặm cỏ trên sườn núi đá là hình ảnh quen thuộc trong đời sống lao động của người dân Hà Giang." 
        },
        { 
            title: "Truyền thống bảo vệ biên giới", 
            content: "Hà Giang là tỉnh biên giới phía Bắc nên từ lâu người dân nơi đây luôn gắn bó với nhiệm vụ bảo vệ biên cương. Các bản làng vùng biên vừa phát triển kinh tế vừa góp phần giữ gìn an ninh và chủ quyền lãnh thổ của đất nước." 
        }
    ]
},
   {
    id: 106,
    isCultureTopic: true,
    category: "Văn hóa",
    name: "Ẩm thực truyền thống",
    image: "images/nen-amthuc.jpg",
    desc: "Ẩm thực Hà Giang mang đậm hương vị núi rừng, được hình thành từ điều kiện tự nhiên khắc nghiệt và lối sống lao động của các dân tộc vùng cao. Những món ăn giản dị nhưng giàu dinh dưỡng, sử dụng nguyên liệu địa phương như ngô, thịt gia súc và các loại gia vị rừng.",
    sections: [
        { 
            title: "Mèn mén – món ăn từ ngô của người Mông", 
            content: "Mèn mén được làm từ ngô xay nhỏ, sau đó hấp nhiều lần để tạo độ tơi và dẻo. Đây là món ăn quen thuộc trong bữa cơm hằng ngày của người Mông, thường ăn kèm với canh rau hoặc thịt. Món ăn giản dị nhưng giàu năng lượng, phù hợp với cuộc sống lao động trên cao nguyên đá." 
        },
        { 
            title: "Thắng cố – món ăn truyền thống vùng cao", 
            content: "Thắng cố là món ăn nổi tiếng thường thấy trong các phiên chợ vùng cao. Món được nấu từ thịt và nội tạng ngựa hoặc bò, hầm trong chảo lớn cùng nhiều loại gia vị như thảo quả, gừng và các loại thảo mộc rừng. Thắng cố thường được ăn nóng và uống kèm rượu ngô." 
        },
        { 
            title: "Thịt gác bếp", 
            content: "Thịt trâu hoặc thịt lợn được tẩm ướp với muối, ớt, gừng và mắc khén rồi treo trên gác bếp để hun khói trong thời gian dài. Nhờ khói bếp và gia vị, thịt có hương vị đậm đà và có thể bảo quản được nhiều tháng." 
        },
        { 
            title: "Phở chua và cháo ấu tẩu", 
            content: "Phở chua là món ăn có nguồn gốc từ văn hóa vùng biên, với bánh phở trộn cùng thịt quay, lạc rang, rau thơm và nước sốt chua ngọt. Cháo ấu tẩu lại là món đặc trưng của Hà Giang, được nấu từ củ ấu tẩu cùng gạo nếp và thịt, thường ăn vào buổi tối để giữ ấm cơ thể." 
        },
        { 
            title: "Rượu ngô men lá", 
            content: "Rượu ngô được nấu thủ công từ ngô địa phương và men lá truyền thống. Sau khi ủ và chưng cất, rượu có hương thơm đặc trưng và vị nồng ấm. Đây là thức uống quen thuộc trong các dịp lễ hội, cưới hỏi và tiếp đãi khách." 
        },
        { 
            title: "Bánh tam giác mạch", 
            content: "Bánh được làm từ bột hạt tam giác mạch – loại cây đặc trưng của cao nguyên đá Hà Giang. Bánh có vị bùi nhẹ, thường được nướng trên bếp than và bán nhiều ở các chợ phiên hoặc lễ hội hoa tam giác mạch." 
        },
        { 
            title: "Lạp xưởng gác bếp", 
            content: "Lạp xưởng được làm từ thịt lợn tẩm ướp gia vị, nhồi vào ruột non rồi treo trên gác bếp để hun khói. Khi chế biến, lạp xưởng có mùi thơm đặc trưng của khói và gia vị núi rừng." 
        },
        { 
            title: "Bánh cuốn trứng Hà Giang", 
            content: "Khác với bánh cuốn ở nhiều nơi khác, bánh cuốn Hà Giang thường ăn cùng nước dùng ninh từ xương và có thêm trứng gà trong lớp bánh. Món ăn nóng hổi này rất phổ biến trong bữa sáng của người dân địa phương." 
        }
    ]
}
];



const API_KEY = "gsk_7n4qkJ7k14Uwo84wp4dOWGdy" + "b3FYitMCVaxwPsZpr2aLNrZFLM3n";
let selectedTripIds = []; 



//  TIỆN ÍCH (THỜI TIẾT)
function interpretWeather(code) {
    const map = { 
        0: { icon: "fa-sun text-yellow-400", txt: "Nắng rực rỡ" }, 
        1: { icon: "fa-cloud-sun text-orange-300", txt: "Ít mây" }, 
        2: { icon: "fa-cloud text-gray-400", txt: "Nhiều mây" }, 
        3: { icon: "fa-cloud text-gray-500", txt: "U ám" }, 
        45: { icon: "fa-smog text-slate-300", txt: "Sương mù" }, 
        61: { icon: "fa-cloud-rain text-blue-400", txt: "Mưa nhỏ" }, 
        95: { icon: "fa-bolt text-purple-500", txt: "Dông bão" } 
    };
    return map[code] || { icon: "fa-cloud", txt: "Ổn định" };
}

async function fetchWeather(lat, lng) {
    if (!lat || !lng) return null;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=weathercode,temperature_2m_max&timezone=Asia%2FBangkok`);
        return await response.json();
    } catch (e) { return null; }
}

async function updateWeatherUI(lat, lng, locationName) { 
    const wData = await fetchWeather(lat, lng);
    const weatherBox = document.getElementById('weather-box');
    if (!weatherBox) return;

    if (wData && wData.current_weather) {
        const curr = interpretWeather(wData.current_weather.weathercode);
        
        weatherBox.className = "bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl flex flex-col items-start my-8 border border-white/5";
        
        weatherBox.innerHTML = `
            <!-- Dòng chữ mới thêm vào -->
            <div class="w-full mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
                <i class="fas fa-map-marker-alt text-emerald-500 text-xs"></i>
                <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Thời tiết hiện tại tại</span>
                <span class="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-black">${locationName}</span>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between w-full gap-10">
                <!-- Phần bên trái: Icon to và Nhiệt độ chính -->
                <div class="flex items-center gap-8 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-12">
                    <i class="fas ${curr.icon} text-7xl md:text-8xl animate-pulse filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"></i>
                    <div class="text-left">
                        <p class="text-6xl font-black tracking-tighter">${wData.current_weather.temperature}°C</p>
                        <p class="text-xs uppercase tracking-widest text-emerald-400 font-bold mt-1">${curr.txt}</p>
                    </div>
                </div>

                <!-- Phần bên phải: Dự báo 3 ngày tới -->
                <div class="flex-1 grid grid-cols-3 gap-4 w-full">
                    ${wData.daily.time.slice(1, 4).map((t, i) => {
                        const d = interpretWeather(wData.daily.weathercode[i+1]);
                        return `
                        <div class="text-center bg-white/5 p-4 rounded-3xl border border-white/5">
                            <p class="text-[10px] opacity-40 uppercase font-bold mb-2">${new Date(t).toLocaleDateString('vi-VN', {weekday: 'short'})}</p>
                            <i class="fas ${d.icon} text-2xl mb-2 block"></i>
                            <p class="font-black text-sm">${Math.round(wData.daily.temperature_2m_max[i+1])}°</p>
                        </div>`;
                    }).join('')}
                </div>
            </div>`;
    }
}

//  CORE UI (MODAL & GRID)

window.openModal = async function(id) {
    const item = destinationsData.find(d => d.id === id);
    if (!item) return;

    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modal.scrollTo(0, 0);

    if (item.isCultureTopic) {
        content.innerHTML = `
            <div class="relative h-72 md:h-[450px]"><img src="${item.image}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-white uppercase text-4xl font-bold text-center">${item.name}</div></div>
            <div class="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white text-slate-800">
                ${(item.sections || []).map(sec => `<div class="bg-stone-50 p-8 rounded-3xl border-l-8 border-emerald-700 shadow-sm"><h4 class="font-bold text-xl text-emerald-900 mb-2 uppercase">${sec.title}</h4><p class="text-gray-600 text-sm leading-relaxed">${sec.content}</p></div>`).join('')}
                <div class="col-span-full text-center"><button onclick="closeModal()" class="bg-emerald-900 text-white px-10 py-3 rounded-full font-bold uppercase shadow-lg">Quay lại</button></div>
            </div>`;
    } else {
        const linked = (item.relatedCultureIds || []).map(cId => destinationsData.find(d => d.id === cId)).filter(Boolean);
        content.innerHTML = `
            <div class="relative h-72 md:h-96"><img src="${item.image}" class="w-full h-full object-cover shadow-2xl"><div class="absolute inset-0 bg-gradient-to-t from-black/90 flex items-end p-8 text-white uppercase text-4xl md:text-6xl font-bold">${item.name}</div></div>
            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-[#1a1a1a] text-white text-sm text-left">
                <div class="lg:col-span-2 space-y-8">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                        <div class="border-r border-white/10 pr-2"><p class="text-[10px] uppercase text-orange-400 font-bold mb-1">Mùa đẹp</p><p class="text-xs font-medium">${item.bestSeason || 'Quanh năm'}</p></div>
                        <div class="border-r border-white/10 pr-2"><p class="text-[10px] uppercase text-orange-400 font-bold mb-1">Thời điểm</p><p class="text-xs font-medium">${item.visitTime || 'Cả ngày'}</p></div>
                        <div class="border-r border-white/10 pr-2"><p class="text-[10px] uppercase text-orange-400 font-bold mb-1">Giá vé</p><p class="text-xs font-medium">${item.ticketPrice || 'Miễn phí'}</p></div>
                        <div><p class="text-[10px] uppercase text-orange-400 font-bold mb-1">Di chuyển</p><p class="text-xs font-medium">${item.transport || 'Tự túc'}</p></div>
                    </div>
                    <section><h3 class="text-xl font-bold border-l-4 border-orange-500 pl-4 mb-4 uppercase">Kinh Nghiệm</h3><p class="text-gray-300 italic text-lg">"${item.experience || item.desc}"</p></section>
                    <div id="weather-box" class="min-h-[100px] flex items-center justify-center bg-white/5 rounded-3xl italic text-gray-400"><i class="fas fa-circle-notch animate-spin mr-2"></i> Đang tải thời tiết...</div>
                    <section class="bg-zinc-900 p-8 rounded-[40px] border border-white/5">
                        <h3 class="text-xl font-bold text-orange-400 mb-6 uppercase">Bản sắc văn hóa</h3>
                        <div class="space-y-4">
                            <p><span class="text-orange-500 font-bold uppercase text-[10px]">Lễ hội:</span> ${item.culture?.festival || 'Đang cập nhật'}</p>
                            <p><span class="text-orange-500 font-bold uppercase text-[10px]">Trang phục:</span> ${item.culture?.costume || 'Đang cập nhật'}</p>
                            <p><span class="text-orange-500 font-bold uppercase text-[10px]">Phong tục:</span> ${item.culture?.customs || 'Đang cập nhật'}</p>
                        </div>
                        <div class="mt-6 flex flex-wrap justify-center gap-3">
                            ${linked.map(c => `<button onclick="openModal(${c.id})" class="bg-emerald-700/50 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-[9px] uppercase border border-white/10"># ${c.name}</button>`).join('')}
                        </div>
                    </section>
                    <section><h3 class="text-xl font-bold border-l-4 border-orange-500 pl-4 mb-6 uppercase">Vị trí</h3><iframe src="${item.locationMap}" class="w-full h-72 rounded-3xl border-0 opacity-80 shadow-lg"></iframe></section>
                </div>
                <div class="lg:col-span-1 space-y-6">
                    <div class="bg-emerald-900/40 p-8 rounded-[40px] border border-emerald-500/20 text-left"><h3 class="text-lg font-bold mb-4 text-emerald-400 uppercase tracking-widest">Lịch trình gợi ý</h3><p class="text-gray-200 italic text-sm">${item.logistics?.itinerary2D || 'Liên hệ sau'}</p></div>
                    <div class="bg-orange-950/30 p-8 rounded-[40px] border border-orange-500/20 text-center"><p class="text-[10px] text-orange-400 font-bold uppercase mb-2">Chi phí ước tính</p><p class="text-2xl font-bold text-orange-500">${item.logistics?.estimatedCost || 'Liên hệ sau'}</p></div>
                    <div class="bg-zinc-800 p-6 rounded-[35px] border border-white/5"><h4 class="text-sm font-bold text-emerald-400 mb-4 uppercase">Đặc sản</h4><img src="${item.food?.image}" class="w-full h-32 object-cover rounded-2xl mb-4 border border-white/10" onerror="this.src='https://placehold.co/300x200?text=Food'"><p class="font-bold text-sm uppercase">${item.food?.name}</p><p class="text-orange-400 text-xs">${item.food?.price}</p></div>
                </div>
            </div>`;
        updateWeatherUI(item.lat, item.lng, item.name);
    }
};

window.closeModal = function() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
};


//  FEATURE LOGIC (CHATBOT & TRIP)

window.toggleChat = function() { 
    const chat = document.getElementById('chat-window');
    const tip = document.getElementById('chat-tooltip');
    if (chat) chat.classList.toggle('hidden'); 
    if (tip) tip.style.display = 'none';
};

window.sendMessage = async function() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    if (!input || !input.value.trim()) return;

    const msg = input.value.trim();
    input.value = "";
    content.innerHTML += `<div class="bg-emerald-700 text-white p-3 rounded-2xl ml-auto max-w-[85%] text-xs mb-2 text-right">${msg}</div>`;
    content.scrollTo(0, content.scrollHeight);

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ 
                model: "llama-3.1-8b-instant", 
                messages: [{ role: "system", content: "Bạn là hướng dẫn viên bản địa Hà Giang tên Phúc. Tư vấn nhiệt tình, sử dụng từ 'dạ', 'mình'." }, { role: "user", content: msg }] 
            })
        });
        const data = await res.json();
        content.innerHTML += `<div class="bg-zinc-800 text-gray-200 p-3 rounded-2xl self-start max-w-[85%] text-xs mb-2 border border-white/5">${data.choices[0].message.content}</div>`;
    } catch (e) { content.innerHTML += `<div class="text-red-400 text-xs">Lỗi kết nối.</div>`; }
    content.scrollTo(0, content.scrollHeight);
};

window.addToTrip = function(id) {
    if (!selectedTripIds.includes(id)) {
        selectedTripIds.push(id);
        const robot = document.querySelector('.fa-robot')?.parentElement;
        robot?.classList.add('animate-bounce');
        setTimeout(() => robot?.classList.remove('animate-bounce'), 1000);
        updateTripUI();
    }
};

window.clearTrip = function() { selectedTripIds = []; updateTripUI(); };

window.updateTripUI = function() {
    const planner = document.getElementById('trip-planner');
    const list = document.getElementById('selected-list');
    const count = document.getElementById('trip-count');
    if (selectedTripIds.length > 0) {
        planner.classList.remove('hidden');
        count.innerText = selectedTripIds.length;
        list.innerHTML = selectedTripIds.map(id => {
            const place = destinationsData.find(d => d.id === id);
            return `<div class="flex items-center gap-2 text-white text-[10px] mb-1"><i class="fas fa-check-circle text-emerald-500"></i><span>${place.name}</span></div>`;
        }).join('');
    } else { planner.classList.add('hidden'); }
};

window.generateAITrip = async function() {
    if (selectedTripIds.length === 0) {
        alert("Vui lòng chọn ít nhất một địa danh vào giỏ hành trình để Phúc lập tour nhé!");
        return;
    }

    const names = selectedTripIds.map(id => destinationsData.find(d => d.id === id).name).join(', ');

    //  Lấy thông tin thời tiết thực tế từ điểm đầu tiên trong giỏ hàng để AI có căn cứ tư vấn
    const firstPoint = destinationsData.find(d => d.id === selectedTripIds[0]);
    let weatherInfo = "Không có dữ liệu thời tiết thực tế hiện tại.";
    if (firstPoint && firstPoint.lat) {
        const w = await fetchWeather(firstPoint.lat, firstPoint.lng);
        if (w) {
            weatherInfo = `Nhiệt độ hiện tại khoảng ${w.current_weather.temperature}°C. Mã thời tiết: ${w.current_weather.weathercode}.`;
        }
    }

    //  Hiển thị trạng thái loading chuyên nghiệp
    openModal(1); // Mượn modal để hiện loading
    document.getElementById('modal-content').innerHTML = `
        <div class="p-20 text-center bg-[#1a1a1a] text-white">
            <i class="fas fa-robot animate-spin text-5xl text-emerald-500 mb-6"></i>
            <h2 class="text-2xl font-bold uppercase tracking-widest">Phúc Hà Giang đang lập tour tối ưu...</h2>
            <p class="text-gray-400 mt-4 italic">Đang tính toán theo cung đường, thời tiết và văn hóa bản địa...</p>
        </div>`;

    //  ĐỊNH NGHĨA PROMPT HỆ THỐNG (SYSTEM PROMPT) ĐẦY ĐỦ Ý TƯỞNG
    const systemPrompt = `Bạn là "chatbot tư ván" - Chuyên gia điều hành tour và hướng dẫn viên bản địa có 15 năm kinh nghiệm.
    Nhiệm vụ: Thiết kế hành trình du lịch Hà Giang tối ưu dựa trên danh sách địa danh khách chọn.

    YÊU CẦU CHUYÊN MÔN:
    1. Logic Di Chuyển: Sắp xếp các điểm theo cung đường "Ha Giang Loop" (vòng cung) để không đi ngược đường. Phải tính toán thứ tự huyện hợp lý (Quản Bạ -> Yên Minh -> Đồng Văn -> Mèo Vạc).
    2. Tư vấn Thời tiết: Dựa trên dữ liệu thời tiết được cung cấp, nếu trời xấu/mưa/sương mù, hãy đưa ra cảnh báo an toàn khi đổ đèo và gợi ý các điểm tham quan trong nhà hoặc linh hoạt thay đổi lịch trình.
    3. Phương tiện & Chi phí: Tư vấn ưu/nhược điểm giữa xe máy (phượt thủ) và ô tô kèm tài xế (gia đình). Dự toán chi tiết chi phí VNĐ (xăng, xe, ăn 150k/bữa, ngủ 200k-500k) , tính tổng tiền dự kiến.
    4. Văn hóa & Đạo đức: Luôn nhắc khách KHÔNG cho tiền trẻ em ven đường (chỉ cho bánh kẹo/đồ dùng học tập), giữ vệ sinh môi trường và tôn trọng phong tục 22 dân tộc.
    5. Góc Bật Mí: Gợi ý ít nhất 1 quán ăn chuẩn vị hoặc 1 góc check-in bí mật ít người biết gần khu vực khách đi.

    ĐỊNH DẠNG TRÌNH BÀY:
    - Sử dụng thẻ HTML: <h3> cho tiêu đề ngày, <b> cho điểm nhấn quan trọng, <ul><li> cho danh sách chi phí/lưu ý.
    - Ngôn ngữ: Tiếng Việt, nhiệt tình, chân thành. Xưng "Phúc" và gọi khách là "Anh/Chị".`;

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ 
                model: "llama-3.1-8b-instant", 
                messages: [
                    { role: "system", content: systemPrompt }, 
                    { role: "user", content: `Thông tin thời tiết: ${weatherInfo}. Các địa danh tôi đã chọn: ${names}. Hãy lập lịch trình chi tiết và tư vấn giúp tôi.` }
                ] 
            })
        });
        
        const data = await res.json();
        const aiResponse = data.choices[0].message.content.replace(/\n/g, '<br>');

        // 4. Hiển thị kết quả ra Modal
        document.getElementById('modal-content').innerHTML = `
            <div class="p-8 md:p-12 bg-[#1a1a1a] text-white min-h-screen">
                <div class="max-w-4xl mx-auto">
                    <div class="flex items-center gap-4 mb-8 border-b border-emerald-500/20 pb-4">
                        <i class="fas fa-map-marked-alt text-4xl text-emerald-400"></i>
                        <h2 class="text-3xl font-bold uppercase tracking-widest text-emerald-400">Lịch trình đề xuất từ Phúc Hà Giang</h2>
                    </div>
                    
                    <div class="text-gray-300 leading-relaxed text-sm bg-white/5 p-6 rounded-3xl border border-white/10 shadow-2xl">
                        ${aiResponse}
                    </div>

                    <div class="mt-12 text-center">
                        <button onclick="closeModal()" class="bg-emerald-600 hover:bg-orange-600 text-white px-10 py-3 rounded-full font-bold uppercase transition shadow-xl transform hover:scale-105">
                            Cảm ơn Phúc, đóng lịch trình!
                        </button>
                    </div>
                </div>
            </div>`;
    } catch (e) {
        document.getElementById('modal-content').innerHTML = `
            <div class="p-20 text-center bg-[#1a1a1a] text-white">
                <i class="fas fa-wifi text-red-500 text-5xl mb-4"></i>
                <p class="text-lg">Dạ, mạng vùng cao hơi kém nên Phúc chưa gửi lịch trình được. Anh/Chị nhấn lại giúp Phúc nhé!</p>
                <button onclick="closeModal()" class="mt-6 bg-white/10 px-8 py-2 rounded-full text-xs">Đóng lại</button>
            </div>`;
    }
};


//  HIỂN THỊ & LỌC

window.displayDestinations = function(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div class="bg-[#1a1a1a] rounded-2xl shadow-sm overflow-hidden group border border-white/5 relative text-white">
            ${!item.isCultureTopic ? `<button onclick="addToTrip(${item.id})" class="absolute top-4 right-4 z-30 bg-white/90 text-emerald-700 w-10 h-10 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"><i class="fas fa-plus"></i></button>` : ''}
            <div onclick="openModal(${item.id})" class="cursor-pointer">
                <div class="relative h-60 overflow-hidden"><img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700"></div>
                <div class="p-6 text-left">
                    <span class="text-[10px] font-bold uppercase text-emerald-600">${item.category}</span>
                    <h3 class="text-lg font-bold mt-2 mb-2 text-white uppercase">${item.name}</h3>
                    <p class="text-gray-400 text-xs line-clamp-2 italic">${item.desc || ""}</p>
                </div>
            </div>
        </div>`).join('');
};

window.filterDestinations = function(category) {
    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category.includes(category));
    displayDestinations(filtered);
};


//  KHỞI CHẠY (ONLOAD)

window.onload = () => {
    displayDestinations(destinationsData);
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        const kw = e.target.value.toLowerCase();
        const filtered = destinationsData.filter(d => d.name.toLowerCase().includes(kw) || d.desc?.toLowerCase().includes(kw));
        displayDestinations(filtered);
    });
    setTimeout(() => { document.getElementById('chat-tooltip')?.classList.remove('hidden'); }, 3000);
};

window.onclick = (e) => { if (e.target == document.getElementById('modal')) closeModal(); };














