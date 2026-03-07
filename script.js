
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
            image: "images/mon-thangco.jpg",
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
            image: "images/mon-canuong.jpg",
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
            image: "images/mon-thangden.jpg",
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
            image: "images/mon-tamgiacmach.jpg",
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
            image: "images/mon-menmen.jpg",
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
            image: "images/mon-lapxuong.jpg",
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
            image: "images/mon-phochua.jpg",
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
            image: "images/mon-gaden.jpg",
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
            image: "images/mon-thitgacbep.jpg",
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
            image: "images/mon-ngonuong.jpg",
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
            image: "images/mon-banhngo.jpg",
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
            image: "images/mon-ngoluoc.jpg",
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
            image: "images/mon-lapxuong.jpg",
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
        name: "Lạp xưởng & Ngô nướng",
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
            image: "images/mon-thangden.jpg",
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
            image: "images/mon-thangco.jpg",
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
            { title: "Người Mông", content: "Người Mông là cộng đồng đông nhất tại Hà Giang, nổi bật với nhà trình tường bằng đất dày. Trang phục phụ nữ thêu và vẽ sáp ong tinh xảo. Họ nổi tiếng với tiếng khèn và lễ hội Gầu Tào cầu phúc đầu năm." },
            { title: "Người Tày", content: "Sinh sống ở thung lũng ven suối, người Tày ở nhà sàn gỗ, trồng lúa nước và nổi tiếng với hát then, đàn tính. Lễ hội Lồng Tồng đầu xuân cầu mùa màng bội thu." },
            { title: "Người Dao", content: "Nổi bật với trang phục đỏ thêu tay cầu kỳ. Có nghi lễ cấp sắc đánh dấu sự trưởng thành của nam giới và tri thức dân gian về các bài thuốc tắm lá rừng." },
            { title: "Người Lô Lô", content: "Sinh sống chủ yếu tại Lũng Cú, có trang phục ghép vải màu tinh xảo và gìn giữ văn hóa trống đồng cổ truyền được sử dụng trong các nghi lễ quan trọng." },
            { title: "Người Pà Thẻn", content: "Nổi tiếng với lễ hội Nhảy lửa độc đáo. Trang phục mang sắc đỏ chủ đạo, duy trì nhiều nghi lễ tâm linh gắn với tín ngưỡng đa thần." },
            { title: "Người La Chí", content: "Cư trú chủ yếu ở Hoàng Su Phì với ruộng bậc thang hùng vĩ. Họ tổ chức lễ hội Khu Cù Tê tạ ơn thần linh sau vụ thu hoạch." }
        ]
    },
    {
        id: 102,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa Chợ phiên vùng cao",
        image: "images/nen-phiencho.jpg",
        desc: "Chợ phiên là 'bảo tàng sống' lưu giữ đời sống tâm linh và văn hóa cộng đồng của các dân tộc Hà Giang.",
        sections: [
            { title: "Thời gian họp chợ đặc biệt", content: "Chợ họp theo phiên cố định hoặc 'chợ lùi' (mỗi tuần lùi 1 ngày). Chợ bắt đầu từ tảng sáng đến trưa. Các phiên nức tiếng: Đồng Văn, Mèo Vạc, Khâu Vai." },
            { title: "Không gian giao lưu cộng đồng", content: "Nơi thanh niên gặp gỡ giao duyên, người thân tìm lại nhau. Chợ tình Khâu Vai là nơi đôi lứa xưa gặp lại mỗi năm một lần." },
            { title: "Trang phục & Sắc màu", content: "Ngày chợ là ngày hội khoe sắc với váy thêu sáp ong người Mông, áo đỏ người Dao, tạo nên bức tranh thổ cẩm sống động." },
            { title: "Ẩm thực đặc trưng", content: "Thiên đường món ngon dân dã: Thắng cố nghi ngút khói, mèn mén thơm mùi ngô, cháo ấu tẩu và rượu ngô men lá nồng nàn." },
            { title: "Âm nhạc & Tiếng khèn", content: "Âm thanh dìu dặt của tiếng khèn Mông hòa cùng tiếng nói cười rộn ràng làm nên linh hồn của phiên chợ vùng cao." }
        ]
    },
    {
        id: 103,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Lễ hội truyền thống",
        image: "images/nen-lehoitruynthong.jpg",
        desc: "Những nghi lễ tâm linh và ngày hội sôi động thể hiện khát vọng về cuộc sống ấm no, hạnh phúc.",
        sections: [
            { title: "Lễ hội Gầu Tào (Mông)", content: "Cầu phúc, cầu con, cầu sức khỏe từ mùng 1 đến rằm tháng Giêng với múa khèn, hát giao duyên và ném pao." },
            { title: "Lễ hội Lồng Tồng (Tày)", content: "Lễ xuống đồng cúng thần nông cầu mùa bội thu với hát then, đàn tính và trò chơi tung còn." },
            { title: "Lễ hội Nhảy lửa (Pà Thẻn)", content: "Nghi lễ huyền bí nơi các chàng trai nhảy chân trần trên than hồng, thể hiện sức mạnh tinh thần và niềm tin tâm linh." },
            { title: "Lễ cấp sắc (Dao)", content: "Nghi lễ quan trọng đánh dấu sự trưởng thành của nam giới, xác nhận người đàn ông được thần linh công nhận." },
            { title: "Lễ hội hoa Tam giác mạch", content: "Tổ chức tháng 10-11 để tôn vinh loài hoa biểu tượng và quảng bá văn hoá, ẩm thực đặc sắc của địa phương." }
        ]
    },
    {
        id: 104,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Kiến trúc & Làng cổ",
        image: "images/nen-kientruc.jpg",
        desc: "Biểu tượng của lịch sử và sự thích nghi kỳ diệu của con người với thiên nhiên núi đá khắc nghiệt.",
        sections: [
            { title: "Nhà trình tường (Mông)", content: "Xây bằng đất nện dày 40-60cm, giữ ấm mùa đông, mát mùa hè. Tường vàng nổi bật giữa đá xám, mái lợp ngói âm dương." },
            { title: "Nhà sàn (Tày, Nùng)", content: "Dựng bằng gỗ quý chắc chắn ở vùng thung lũng ven suối để tránh ẩm thấp. Gian thờ tổ tiên nằm ở trung tâm ngôi nhà." },
            { title: "Làng cổ Lô Lô Chải", content: "Không gian yên bình dưới chân cột cờ Lũng Cú với những nếp nhà trình tường cổ và hàng rào đá xếp tay tỉ mỉ." },
            { title: "Dinh thự họ Vương", content: "Công trình hơn 100 năm tuổi giao thoa kiến trúc nhà Thanh (Trung Hoa), văn hóa Mông và phong cách Pháp." }
        ]
    },
    {
        id: 105,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa Lao động & Lịch sử",
        image: "images/nen-vanhoalichsu.jpg",
        desc: "Vẻ đẹp của ý chí kiên cường và tinh thần vượt khó của con người miền cực Bắc.",
        sections: [
            { title: "Canh tác trên đá", content: "Kỳ tích gieo ngô trong từng hốc đá nhỏ. Đất được gùi từ thung lũng lên kẽ đá, tạo nên những nương ngô xanh mướt giữa đá xám." },
            { title: "Ruộng bậc thang", content: "Tác phẩm nghệ thuật khổng lồ tại Hoàng Su Phì do bàn tay con người tạo dựng qua nhiều thế hệ để thích nghi địa hình dốc." },
            { title: "Đường Hạnh Phúc", content: "Biểu tượng ý chí của hàng vạn thanh niên xung phong mở đường qua những vách đá hiểm trở nhất." },
            { title: "Công viên địa chất", content: "Cao nguyên đá Đồng Văn được UNESCO công nhận là di sản toàn cầu, minh chứng cho lịch sử địa chất hàng triệu năm." }
        ]
    },
    {
        id: 106,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Ẩm thực truyền thống",
        image: "images/nen-amthuc.jpg",
        desc: "Kết tinh từ lao động, thiên nhiên và hơi thở nồng nàn của núi rừng Hà Giang.",
        sections: [
            { title: "Mèn mén", content: "Linh hồn ẩm thực người Mông từ ngô xay nhuyễn hấp dẻo. Giản dị nhưng giàu năng lượng, gắn liền với đời sống canh tác trên đá." },
            { title: "Thắng cố", content: "Món ăn truyền thống nức tiếng từ thịt ngựa/bò ninh cùng thảo quả, gia vị rừng, thường dùng kèm rượu ngô men lá." },
            { title: "Thịt gác bếp", content: "Thịt trâu/lợn ướp gừng, ớt, mắc khén treo gác bếp nhiều tháng, đậm đà vị khói củi đặc trưng." },
            { title: "Phở chua & Cháo ấu tẩu", content: "Những món ăn mang đậm dấu ấn giao thoa văn hóa vùng biên và bài thuốc giữ ấm cơ thể mùa đông giá lạnh." },
            { title: "Rượu ngô", content: "Nấu thủ công từ ngô bản địa và men lá rừng truyền thống, thể hiện lòng hiếu khách chân thành của người dân vùng cao." }
        ]
    }
];


// ==========================================
// TÍNH NĂNG 1: HIỂN THỊ DANH SÁCH (GRID DISPLAY)
// ==========================================
const API_KEY = "gsk_7n4qkJ7k14Uwo84wp4dOWGdy" + "b3FYitMCVaxwPsZpr2aLNrZFLM3n";

// ==========================================
// 1. HÀM HỖ TRỢ THỜI TIẾT (OPEN-METEO API)
// ==========================================

// Chuyển mã số thời tiết từ vệ tinh sang Icon và Chữ tiếng Việt
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

// Gọi API lấy dữ liệu thời tiết thực tế
async function fetchWeather(lat, lng) {
    if (!lat || !lng) return null;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=weathercode,temperature_2m_max&timezone=Asia%2FBangkok`);
        if (!response.ok) return null;
        return await response.json();
    } catch (e) { 
        console.error("Weather API Error:", e);
        return null; 
    }
}

// ==========================================
// 2. HÀM MỞ MODAL CHI TIẾT (CÓ THỜI TIẾT)
// ==========================================

async function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    if (!item || !content) return;

    // Hiển thị modal ngay lập tức
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modal.scrollTo(0, 0);

    if (item.isCultureTopic) {
        // --- GIAO DIỆN CHUYÊN ĐỀ VĂN HÓA ---
        content.innerHTML = `
            <div class="relative h-72 md:h-[450px]">
                <img src="${item.image}" class="w-full h-full object-cover shadow-2xl">
                <div class="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-white uppercase text-4xl md:text-6xl font-bold text-center">${item.name}</div>
            </div>
            <div class="p-8 md:p-16 space-y-10 bg-white text-slate-800 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    ${(item.sections || []).map(sec => `
                        <div class="bg-stone-50 p-8 rounded-3xl border-l-8 border-emerald-700 shadow-sm transition hover:shadow-md hover:bg-white">
                            <h4 class="font-bold text-xl text-emerald-900 mb-2 uppercase">${sec.title}</h4>
                            <p class="text-gray-600 text-sm leading-relaxed">${sec.content}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="text-center pt-6">
                    <button onclick="closeModal()" class="bg-emerald-900 text-white px-10 py-3 rounded-full font-bold uppercase hover:bg-black transition shadow-lg">Quay lại</button>
                </div>
            </div>`;
    } else {
        // --- GIAO DIỆN ĐỊA DANH ---
        // Render khung sườn trước
        const linked = (item.relatedCultureIds || []).map(cId => destinationsData.find(d => d.id === cId)).filter(Boolean);
        
        content.innerHTML = `
            <div class="relative h-72 md:h-96">
                <img src="${item.image}" class="w-full h-full object-cover shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 flex items-end p-8 text-white uppercase text-4xl md:text-6xl font-bold">${item.name}</div>
            </div>
            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white text-slate-900 text-sm text-left">
                <div class="lg:col-span-2 space-y-10 text-left">
                    <section>
                        <h3 class="text-2xl font-bold border-l-8 border-orange-500 pl-4 mb-4 text-emerald-900 uppercase font-bold">Tổng quan</h3>
                        <p class="text-gray-700 leading-relaxed text-lg italic">"${item.experience || item.desc}"</p>
                    </section>
                    
                    <!-- VÙNG THỜI TIẾT (Sẽ cập nhật sau khi API chạy xong) -->
                    <div id="weather-box" class="min-h-[100px] flex items-center justify-center bg-slate-100 rounded-[35px] italic text-gray-400">
                        <i class="fas fa-circle-notch animate-spin mr-2"></i> Đang tải thời tiết...
                    </div>

                    <section class="bg-stone-900 text-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-white/10">
                        <h3 class="text-xl font-bold text-orange-400 mb-8 border-b border-white/10 pb-4 uppercase italic font-bold">Bản sắc văn hóa</h3>
                        <div class="space-y-8 mb-12">
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[11px] mb-1">Lễ hội:</p><p class="text-gray-300 text-sm leading-relaxed">${item.culture?.festival || 'Cập nhật sau'}</p></div>
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[11px] mb-1">Trang phục:</p><p class="text-gray-300 text-sm leading-relaxed">${item.culture?.costume || 'Cập nhật sau'}</p></div>
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[11px] mb-1">Phong tục:</p><p class="text-gray-300 text-sm leading-relaxed">${item.culture?.customs || 'Cập nhật sau'}</p></div>
                        </div>
                        <div class="mt-8 pt-8 border-t border-white/5 text-center bg-white/5 -mx-10 -mb-10 p-10 rounded-b-[40px]">
                            <p class="text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">Khám phá chi tiết chuyên đề:</p>
                            <div class="flex flex-wrap justify-center gap-3">
                                ${linked.map(c => `<button onclick="openModal(${c.id})" class="bg-emerald-600 hover:bg-orange-500 text-white px-5 py-2 rounded-xl font-bold text-[10px] transition shadow-lg transform hover:scale-105 italic font-bold uppercase"># ${c.name}</button>`).join('')}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 class="text-2xl font-bold border-l-8 border-orange-500 pl-4 mb-6 text-emerald-900 uppercase font-bold">Ẩm thực vùng cao</h3>
                        <div class="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-slate-800 text-left items-center">
                            <img src="${item.food?.image || 'images/default-food.jpg'}" class="w-full md:w-48 h-32 object-cover rounded-2xl shadow-md" onerror="this.src='https://placehold.co/400x300?text=Food'">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold text-emerald-900 mb-2 uppercase">${item.food?.name || 'Đặc sản địa phương'}</h4>
                                <p class="text-orange-600 font-bold mb-1">${item.food?.price || ''}</p>
                                <p class="text-gray-500 italic text-xs">Tại: ${item.food?.location || 'Chợ phiên'}</p>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <h3 class="text-2xl font-bold mb-6 text-emerald-900 uppercase text-center font-bold">Vị trí địa lý</h3>
                        <iframe src="${item.locationMap}" class="w-full h-80 rounded-3xl border-0 shadow-lg" loading="lazy"></iframe>
                    </section>
                </div>

                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-xl text-left">
                        <h3 class="text-xl font-bold mb-4 text-orange-400 uppercase tracking-tighter">Lịch trình gợi ý</h3>
                        <p class="leading-relaxed opacity-80 italic text-sm font-light">${item.logistics?.itinerary2D || 'Liên hệ sau'}</p>
                    </div>
                    <div class="bg-orange-50 p-8 rounded-[40px] border border-orange-200 text-center text-slate-800 shadow-sm">
                        <p class="text-[10px] text-orange-600 font-bold uppercase mb-1 underline italic">Chi phí dự kiến</p>
                        <p class="text-xl font-bold text-orange-700 italic font-bold">${item.logistics?.estimatedCost || 'Tùy nhu cầu'}</p>
                    </div>
                </div>
            </div>`;

        // Gọi API thời tiết chạy ngầm, khi nào có thì update vào weather-box
        updateWeatherUI(item.lat, item.lng);
    }
}

// Hàm hỗ trợ cập nhật thời tiết riêng biệt
async function updateWeatherUI(lat, lng) {
    const wData = await fetchWeather(lat, lng);
    const weatherBox = document.getElementById('weather-box');
    if (!weatherBox) return;

    if (wData && wData.current_weather) {
        const curr = interpretWeather(wData.current_weather.weathercode);
        weatherBox.className = "bg-slate-900 text-white p-6 rounded-[35px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 my-8 border border-white/5";
        weatherBox.innerHTML = `
            <div class="flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-10 text-left">
                <i class="fas ${curr.icon} text-4xl animate-pulse"></i>
                <div class="text-left">
                    <p class="text-3xl font-bold">${wData.current_weather.temperature}°C</p>
                    <p class="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">${curr.txt}</p>
                </div>
            </div>
            <div class="flex-1 grid grid-cols-3 gap-3 w-full">
                ${wData.daily.time.slice(1, 4).map((t, i) => {
                    const d = interpretWeather(wData.daily.weathercode[i+1]);
                    return `<div class="text-center bg-white/5 p-2 rounded-2xl">
                        <p class="text-[9px] opacity-40 uppercase">${new Date(t).toLocaleDateString('vi-VN', {weekday: 'short'})}</p>
                        <i class="fas ${d.icon} text-sm my-1"></i>
                        <p class="font-bold text-[10px]">${Math.round(wData.daily.temperature_2m_max[i+1])}°</p>
                    </div>`;
                }).join('')}
            </div>`;
    } else {
        weatherBox.innerHTML = `<p class="p-4 italic text-sm text-gray-500">Thông tin thời tiết hiện không khả dụng.</p>`;
    }
}0);
}
async function generateAITrip() {
    if (selectedTripIds.length === 0) {
        alert("Hãy chọn ít nhất một địa điểm!");
        return;
    }

    const selectedPoints = selectedTripIds.map(id => destinationsData.find(d => d.id === id)?.name).join(", ");
    
    // Mở modal để hiển thị kết quả AI
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    content.innerHTML = `<div class="p-20 text-center"><i class="fas fa-robot animate-bounce text-4xl text-emerald-600"></i><p class="mt-4 font-bold">AI đang tính toán lịch trình cho: ${selectedPoints}...</p></div>`;

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: "Bạn là hướng dẫn viên du lịch Hà Giang chuyên nghiệp." },
                    { role: "user", content: `Lập lịch trình 3 ngày đi các điểm: ${selectedPoints}. Tư vấn phương tiện và tổng chi phí.` }
                ]
            })
        });
        const data = await response.json();
        const text = data.choices[0].message.content.replace(/\n/g, "<br>");
        
        content.innerHTML = `
            <div class="p-10 bg-white">
                <h2 class="text-2xl font-bold text-emerald-900 mb-6 uppercase">Lịch trình AI của bạn</h2>
                <div class="text-gray-700 leading-relaxed text-sm">${text}</div>
                <div class="mt-10 text-center"><button onclick="closeModal()" class="bg-black text-white px-8 py-2 rounded-full font-bold">ĐÓNG</button></div>
            </div>`;
    } catch (e) {
        content.innerHTML = `<div class="p-20 text-center text-red-500">Lỗi khi gọi AI. Hãy thử lại!</div>`;
    }
}

// ==========================================
// 3. CÁC HÀM CƠ BẢN KHÁC (TÌM KIẾM, LỌC, ĐÓNG MODAL)
// ==========================================

function closeModal() {
    const modal = document.getElementById('modal');
    if(modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100 relative text-slate-800">
            ${!item.isCultureTopic ? `<button onclick="addToTrip(${item.id})" class="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur text-emerald-700 w-10 h-10 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all active:scale-90"><i class="fas fa-plus"></i></button>` : ''}
            <div onclick="openModal(${item.id})" class="cursor-pointer">
                <div class="relative h-60 overflow-hidden text-center text-white font-bold">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute bottom-3 left-3 flex flex-wrap gap-2 z-20 text-white font-bold">
                        ${(item.cultureKeywords || []).map(kw => `<span onclick="event.stopPropagation(); openModal(${kw.linkId})" class="bg-emerald-600/90 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded font-bold hover:bg-orange-500 transition shadow-lg uppercase tracking-widest font-bold"># ${kw.label}</span>`).join('')}
                    </div>
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center tracking-widest uppercase text-xs">Chi tiết</div>
                </div>
                <div class="p-6">
                    <span class="text-[10px] font-bold uppercase text-emerald-600 tracking-wider">${item.category}</span>
                    <h3 class="text-lg font-bold mt-2 mb-2 text-emerald-900 uppercase">${item.name}</h3>
                    <p class="text-gray-500 text-xs leading-relaxed line-clamp-2 italic">${item.desc}</p>
                </div>
            </div>
        </div>`).join('');
}

function filterDestinations(category) {
    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category.includes(category));
    displayDestinations(filtered);
}

document.getElementById('search-input')?.addEventListener('input', (e) => {
    const kw = e.target.value.toLowerCase();
    const filtered = destinationsData.filter(d => d.name.toLowerCase().includes(kw) || d.desc.toLowerCase().includes(kw));
    displayDestinations(filtered);
});


// ==========================================
// 4. CHATBOT AI & KHỞI CHẠY
// ==========================================

function toggleChat() { 
    document.getElementById('chat-window')?.classList.toggle('hidden'); 
    document.getElementById('chat-tooltip').style.display = 'none';
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    if (!input || !input.value.trim()) return;

    const msg = input.value.trim();
    input.value = "";
    content.innerHTML += `<div class="bg-blue-600 text-white p-3 rounded-2xl ml-auto max-w-[85%] text-xs mb-2 text-right">${msg}</div>`;
    
    // Hiển thị trạng thái "Đang trả lời..."
    const loadingId = "loading-" + Date.now();
    content.innerHTML += `<div id="${loadingId}" class="bg-gray-100 p-3 rounded-2xl self-start text-xs mb-2">Đang suy nghĩ...</div>`;
    content.scrollTo(0, content.scrollHeight);

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", 
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ 
                model: "llama-3.1-8b-instant", 
                messages: [{ role: "system", content: "Bạn là hướng dẫn viên du lịch Hà Giang." }, { role: "user", content: msg }] 
            })
        });
        const data = await res.json();
        document.getElementById(loadingId).remove(); // Xóa loading
        content.innerHTML += `<div class="bg-emerald-100 text-emerald-900 p-3 rounded-2xl self-start max-w-[85%] text-xs border border-emerald-200 mb-2">${data.choices[0].message.content}</div>`;
    } catch (e) { 
        document.getElementById(loadingId).innerText = "Lỗi kết nối. Vui lòng thử lại."; 
    }
    content.scrollTo(0, content.scrollHeight);
}
window.onload = () => {
    displayDestinations(destinationsData);
    setTimeout(() => { document.getElementById('chat-tooltip')?.classList.remove('hidden'); }, 3000);
};

window.onclick = (e) => { if (e.target == document.getElementById('modal')) closeModal(); };
document.getElementById('chat-input')?.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage(); });






