// ==========================================
// 1. CẤU HÌNH API KEY (PHƯƠNG PHÁP GHÉP CHUỖI)
// ==========================================
const part1 = "gsk_7n4qkJ7k14Uwo84wp4dOWGdy"; 
const part2 = "b3FYitMCVaxwPsZpr2aLNrZFLM3n";
const API_KEY = part1 + part2;

// ==========================================
// 2. DỮ LIỆU TỔNG HỢP (17 ĐỊA DANH + 6 VĂN HÓA)
// ==========================================
const destinationsData = [
    {
        id: 1,
        name: "Đèo Mã Pí Lèng",
        category: "Địa danh/Cảnh quan",
        lat: 23.2329, lng: 105.2787,
        relatedCultureIds: [101, 105],
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
        relatedCultureIds: [101, 105],
        cultureKeywords: [{ label: "Văn hóa Lao động", linkId: 105 }],
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
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Dinh thự họ Vương - Phố cổ Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Lũng Cú - Dinh họ Vương. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Giữ gìn trật tự, không chạm vào hiện vật cổ.",
            estimatedCost: "1.500.000đ - 2.000.000đ/người (kết hợp tour Đồng Văn)"
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
        experience: "Chuẩn bị sức để leo hơn 800 bậc thang đá. Nên đi buổi sáng để tránh nắng và chụp ảnh toàn cảnh cao nguyên đá.",
        culture: {
            festival: "Lễ chào cờ và các hoạt động kỷ niệm ngày lễ lớn của địa phương.",
            costume: "Trang phục truyền thống của người Mông và Lô Lô sinh sống quanh khu vực.",
            customs: "Phong tục sinh hoạt của đồng bào vùng biên giới.",
            art: "Kiến trúc mô phỏng Cột cờ Hà Nội với chân đế bát giác tượng trưng cho 8 hướng đất nước."
        },
        food: {
            name: "Bánh Tam Giác Mạch & Thịt Gác Bếp",
            image: "images/mon-tamgiacmach.jpg",
            price: "20.000đ - 150.000đ",
            location: "Các quán ăn gần trung tâm xã Lũng Cú"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn - Lũng Cú - Dinh thự họ Vương. Ngày 2: Mã Pí Lèng - Nho Quế.",
            itinerary3D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Lũng Cú - Phố cổ Đồng Văn. Ngày 3: Mã Pí Lèng - Sông Nho Quế.",
            safety: "Mang giày thể thao chống trượt. Cẩn thận khi leo bậc đá vào mùa mưa.",
            estimatedCost: "1.500.000đ - 2.000.000đ/người (kết hợp tour Đồng Văn)"
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
        bestSeason: "Tháng 10 - Tháng 12 (Mùa hoa tam giác mạch) hoặc tháng 1 - 3 (mùa đào, mận).",
        locationMap: "https://www.google.com/maps?q=Thung+Lung+Sung+La+Ha+Giang&output=embed",
        experience: "Nên thuê trang phục dân tộc để chụp ảnh giữa vườn hoa. Ghé thăm Nhà của Pao để hiểu thêm về văn hóa người Mông.",
        culture: {
            festival: "Lễ hội hoa Tam Giác Mạch thường tổ chức vào cuối năm.",
            costume: "Trang phục truyền thống rực rỡ của người Mông và Lô Lô.",
            customs: "Nhà trình tường đất đặc trưng và đời sống sinh hoạt vùng cao.",
            art: "Kiến trúc nhà cổ và không gian văn hóa trong phim 'Chuyện của Pao'."
        },
        food: {
            name: "Bánh Tam Giác Mạch & Mèn Mén",
            image: "images/mon-menmen.jpg",
            price: "20.000đ - 80.000đ",
            location: "Các quán ăn gia đình tại Sủng Là hoặc thị trấn Đồng Văn"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Sủng Là - Lũng Cú - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Sủng Là - Nhà của Pao - Lũng Cú. Ngày 3: Mã Pí Lèng - Nho Quế.",
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
        desc: "Ngôi làng vùng cao yên bình với nhà trình tường cổ kính giữa cao nguyên đá Đồng Văn.",
        visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc mùa xuân).",
        ticketPrice: "Miễn phí",
        transport: "Nằm trên Quốc lộ 4C, giữa Yên Minh và Đồng Văn.",
        bestSeason: "Tháng 1 - Tháng 3 (Mùa hoa đào, hoa mận) hoặc tháng 10 - 12 (Mùa tam giác mạch).",
        locationMap: "https://www.google.com/maps?q=Pho+Cao+Dong+Van+Ha+Giang&output=embed",
        experience: "Dành thời gian đi bộ trong làng để chụp ảnh nhà trình tường, hàng rào đá.",
        culture: {
            festival: "Các lễ hội truyền thống của người Mông vào dịp đầu xuân.",
            costume: "Trang phục thêu tay sặc sỡ của phụ nữ Mông.",
            customs: "Nhà trình tường đất, hàng rào đá xếp thủ công và sinh hoạt chợ phiên nhỏ.",
            art: "Kiến trúc dân gian đặc trưng vùng cao nguyên đá."
        },
        food: {
            name: "Mèn Mén & Thịt Gác Bếp",
            image: "images/mon-thitgacbep.jpg",
            price: "50.000đ - 150.000đ",
            location: "Các quán ăn gia đình dọc đường Quốc lộ 4C"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Phố Cáo - Sủng Là - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Phố Cáo. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Tôn trọng văn hóa địa phương, không tự ý vào nhà dân khi chưa xin phép.",
            estimatedCost: "2.000.000đ - 2.500.000đ/người"
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
        desc: "Biểu tượng cửa ngõ cao nguyên đá với hai ngọn núi tròn đầy giữa thung lũng Tam Sơn.",
        visitTime: "6h00 - 18h00 (đẹp nhất vào sáng sớm hoặc chiều muộn).",
        ticketPrice: "10.000đ/người (vé tham quan điểm ngắm cảnh).",
        transport: "Cách TP Hà Giang khoảng 45km, đi xe máy hoặc ô tô thuận tiện.",
        bestSeason: "Tháng 9 - Tháng 12 (trời trong xanh) hoặc tháng 3 - 5 (mùa lúa xanh).",
        locationMap: "https://www.google.com/maps?q=Nui+Doi+Quan+Ba+Ha+Giang&output=embed",
        experience: "Dừng chân tại cổng trời Quản Bạ để ngắm trọn thung lũng Tam Sơn và chụp ảnh toàn cảnh Núi Đôi.",
        culture: {
            festival: "Lễ hội truyền thống của người Mông và Dao tại Quản Bạ.",
            costume: "Trang phục thổ cẩm đặc trưng của người Dao and Mông.",
            customs: "Truyền thuyết Núi Cô Tiên gắn với tình mẫu tử thiêng liêng.",
            art: "Cảnh quan thiên nhiên độc đáo được ví như tác phẩm điêu khắc của tạo hóa."
        },
        food: {
            name: "Phở Chua & Lợn Cắp Nách",
            image: "images/mon-loncapnach.jpg",
            price: "50.000đ - 200.000đ",
            location: "Các quán ăn tại thị trấn Tam Sơn"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Đồng Văn - Mã Pí Lèng.",
            itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Đồng Văn. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Quan sát kỹ khi qua đèo Quản Bạ vì nhiều khúc cua gấp và sương mù.",
            estimatedCost: "2.000.000đ - 2.500.000đ/người"
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
        desc: "Ngôi làng cổ dưới chân cột cờ Lũng Cú, lưu giữ trọn vẹn bản sắc người Lô Lô đen.",
        visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc chiều muộn).",
        ticketPrice: "Miễn phí (chi phí homestay tính riêng).",
        transport: "Cách Cột cờ Lũng Cú khoảng 1km.",
        bestSeason: "Tháng 10 - 12 (mùa tam giác mạch) hoặc tháng 3 - 4 (mùa hoa cải).",
        locationMap: "https://www.google.com/maps?q=Lang+Lo+Lo+Chai+Ha+Giang&output=embed",
        experience: "Nên ở homestay một đêm để trải nghiệm sinh hoạt, thưởng thức ẩm thực và ngắm bình minh giữa cao nguyên đá.",
        culture: {
            festival: "Lễ hội truyền thống và nghi lễ cầu mùa của người Lô Lô.",
            costume: "Trang phục Lô Lô đen với họa tiết thêu tay nhiều màu sắc.",
            customs: "Nhà trình tường, hàng rào đá và đời sống sinh hoạt cộng đồng đặc trưng.",
            art: "Kiến trúc nhà cổ và nghệ thuật thêu thổ cẩm tinh xảo.",
        },
        food: {
            name: "Gà Đen & Rượu Ngô",
            image: "images/mon-gaden.jpg",
            price: "100.000đ - 300.000đ",
            location: "Các homestay và quán ăn trong làng"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn - Lũng Cú. Ngày 2: Mã Pí Lèng - Nho Quế.",
            itinerary3D: "Ngày 1: Quản Bạ. Ngày 2: Lũng Cú - Lô Lô Chải. Ngày 3: Mã Pí Lèng - Sông Nho Quế.",
            safety: "Tôn trọng phong tục địa phương, giữ yên tĩnh vào buổi tối.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người"
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
        desc: "Công viên địa chất toàn cầu UNESCO – miền đá xám kỳ vĩ giữa trời cực Bắc Hà Giang.",
        visitTime: "Quanh năm (đẹp nhất từ tháng 9 - 12).",
        ticketPrice: "Miễn phí",
        transport: "Xe máy hoặc ô tô theo Quốc lộ 4C từ TP Hà Giang.",
        bestSeason: "Tháng 10 - 12 (mùa hoa tam giác mạch).",
        locationMap: "https://www.google.com/maps?q=Cao+nguyen+da+Dong+Van&output=embed",
        experience: "Nên dành ít nhất 3 ngày 2 đêm để khám phá trọn vẹn cảnh quan, văn hóa và các cung đường đèo.",
        culture: {
            festival: "Lễ hội hoa Tam Giác Mạch và các phiên chợ vùng cao.",
            costume: "Trang phục truyền thống của người Mông, Lô Lô, Dao, Tày.",
            customs: "Nhà trình tường, hàng rào đá và tập quán sinh hoạt vùng cao nguyên đá.",
            art: "Giá trị địa chất hàng trăm triệu năm và kiến trúc dân gian đặc sắc."
        },
        food: {
            name: "Thắng Cố, Mèn Mén & Thịt Gác Bếp",
            image: "images/mon-thangco.jpg",
            price: "50.000đ - 300.000đ",
            location: "Các chợ phiên và thị trấn Đồng Văn, Mèo Vạc"
        },
        logistics: {
            itinerary2D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Đồng Văn - Mã Pí Lèng.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Lũng Cú. Ngày 3: Mã Pí Lèng - Nho Quế.",
            safety: "Kiểm tra phanh xe trước khi đi đèo.",
            estimatedCost: "2.500.000đ - 3.500.000đ/người"
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
        desc: "Con dốc với những khúc cua tay áo ngoạn mục trên hành trình khám phá cao nguyên đá Đồng Văn.",
        visitTime: "Cả ngày.",
        ticketPrice: "Miễn phí",
        transport: "Nằm trên cung đường Yên Minh - Đồng Văn.",
        bestSeason: "Tháng 10 - 12 hoặc tháng 9 - 10.",
        locationMap: "https://www.google.com/maps?q=Doc+Tham+Ma+Ha+Giang&output=embed",
        experience: "Dừng xe tại điểm cao để chụp toàn cảnh các khúc cua tay áo. Nên đi số thấp khi đổ dốc.",
        culture: {
            festival: "Gắn liền với các phiên chợ vùng cao trên tuyến đường Đồng Văn.",
            costume: "Hình ảnh người Mông dắt ngựa thồ hàng qua dốc.",
            customs: "Truyền tích về việc 'thẩm' sức ngựa trước hành trình dài.",
            art: "Cung đường uốn lượn giữa núi đá tai mèo tạo nên cảnh quan ấn tượng."
        },
        food: {
            name: "Ngô Nướng & Thịt Xiên Nướng",
            image: "images/mon-ngonuong.jpg",
            price: "10.000đ - 50.000đ",
            location: "Các quán nhỏ ven đường trên cung Yên Minh - Đồng Văn"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Yên Minh. Ngày 2: Dốc Thẩm Mã - Đồng Văn.",
            itinerary3D: "Ngày 1: Quản Bạ. Ngày 2: Yên Minh - Dốc Thẩm Mã - Lũng Cú. Ngày 3: Mã Pí Lèng.",
            safety: "Giữ tốc độ chậm, kiểm tra phanh trước khi đổ dốc.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người"
        }
    },
    {
        id: 11,
        name: "Phó Bảng",
        category: "Địa danh/Cảnh quan",
        lat: 23.1375, lng: 105.1704,
        relatedCultureIds: [101, 104],
        cultureKeywords: [{ label: "Văn hóa dân tộc", linkId: 101 }, { label: "Kiến trúc cổ", linkId: 104 }],
        image: "images/nen-phobang.jpg",
        desc: "Thị trấn cổ yên bình giữa cao nguyên đá với những ngôi nhà tường đất phủ rêu phong.",
        visitTime: "Cả ngày.",
        ticketPrice: "Miễn phí",
        transport: "Cách thị trấn Đồng Văn khoảng 5km.",
        bestSeason: "Tháng 10 - 12 hoặc mùa xuân.",
        locationMap: "https://www.google.com/maps?q=Pho+Bang+Dong+Van+Ha+Giang&output=embed",
        experience: "Dành thời gian đi bộ qua các con ngõ nhỏ, chụp ảnh nhà cổ và cảm nhận nhịp sống chậm rãi.",
        culture: {
            festival: "Các phiên chợ vùng cao và lễ hội truyền thống của người Mông, người Hoa.",
            costume: "Trang phục truyền thống của người Mông và Hoa sinh sống lâu đời.",
            customs: "Nhà tường đất, mái ngói âm dương và sinh hoạt cộng đồng đặc trưng.",
            art: "Kiến trúc cổ pha trộn giữa văn hóa Hoa và Mông."
        },
        food: {
            name: "Bánh Ngô & Thịt Gác Bếp",
            image: "images/mon-banhngo.jpg",
            price: "20.000đ - 150.000đ",
            location: "Các quán nhỏ trong thị trấn Phó Bảng"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Yên Minh. Ngày 2: Phó Bảng - Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Yên Minh - Phó Bảng - Lũng Cú. Ngày 3: Mã Pí Lèng.",
            safety: "Đường vào thị trấn khá hẹp và có nhiều khúc cua.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người"
        }
    },
    {
        id: 12,
        name: "Rừng thông Yên Minh",
        category: "Địa danh/Cảnh quan",
        lat: 23.0359, lng: 105.0586,
        relatedCultureIds: [105],
        cultureKeywords: [{ label: "Sinh thái", linkId: 105 }],
        image: "images/nen-rungthongyenminh.webp",
        desc: "“Đà Lạt thu nhỏ” giữa Hà Giang với những triền thông xanh mướt dọc Quốc lộ 4C.",
        visitTime: "Cả ngày.",
        ticketPrice: "Miễn phí",
        transport: "Nằm trên Quốc lộ 4C, giữa Quản Bạ và Yên Minh.",
        bestSeason: "Tháng 9 - Tháng 4.",
        locationMap: "https://www.google.com/maps?q=Rung+Thong+Yen+Minh+Ha+Giang&output=embed",
        experience: "Dừng chân bên đường để chụp ảnh con đường xuyên rừng thông. Buổi sáng sớm có sương thơ mộng.",
        culture: {
            festival: "Gắn liền với các phiên chợ và lễ hội của người dân Yên Minh.",
            costume: "Hình ảnh người Mông, Dao trong trang phục truyền thống giữa rừng thông.",
            customs: "Điểm nghỉ chân quen thuộc trên hành trình lên cao nguyên đá.",
            art: "Cảnh quan rừng thông mềm mại, khác biệt với núi đá Hà Giang."
        },
        food: {
            name: "Ngô Luộc & Trứng Nướng",
            image: "images/mon-ngoluoc.jpg",
            price: "10.000đ - 40.000đ",
            location: "Các quán nhỏ ven Quốc lộ 4C"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Quản Bạ - Yên Minh. Ngày 2: Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Rừng thông - Lũng Cú. Ngày 3: Mã Pí Lèng.",
            safety: "Cẩn thận khi dừng xe ven đường đèo.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người"
        }
    },
    {
        id: 13,
        name: "Động Lùng Khúy",
        category: "Địa danh/Cảnh quan",
        lat: 23.0333, lng: 104.9915,
        relatedCultureIds: [105],
        cultureKeywords: [{ label: "Du lịch sinh thái", linkId: 105 }],
        image: "images/nen-donglungkhuy.jpg",
        desc: "Hang động huyền ảo giữa núi rừng Quản Bạ với hệ thống nhũ đá lấp lánh.",
        visitTime: "7h30 - 17h00 hàng ngày.",
        ticketPrice: "20.000đ/người",
        transport: "Cách trung tâm thị trấn Tam Sơn khoảng 7km.",
        bestSeason: "Tháng 9 - Tháng 4.",
        locationMap: "https://www.google.com/maps?q=Dong+Lung+Khuy+Ha+Giang&output=embed",
        experience: "Mang giày thể thao chống trượt vì lối đi trong hang có thể ẩm ướt.",
        culture: {
            festival: "Gắn với đời sống và tín ngưỡng dân gian của người dân Quản Bạ.",
            costume: "Hình ảnh người Mông, Dao trong trang phục truyền thống.",
            customs: "Người dân địa phương xem hang động như món quà thiên nhiên.",
            art: "Hệ thống thạch nhũ hình thành hàng triệu năm."
        },
        food: {
            name: "Lạp Xưởng Gác Bếp & Rượu Ngô",
            image: "images/mon-lapxuong.jpg",
            price: "50.000đ - 200.000đ",
            location: "Các quán ăn tại thị trấn Tam Sơn"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Động Lùng Khúy. Ngày 2: Đồng Văn.",
            itinerary3D: "Ngày 1: Hà Giang - Động Lùng Khúy. Ngày 2: Lũng Cú. Ngày 3: Mã Pí Lèng.",
            safety: "Không chạm tay vào nhũ đá để bảo tồn.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người"
        }
    },
    {
        id: 14,
        name: "Cây Cô Đơn Hà Giang",
        category: "Địa danh/Cảnh quan",
        lat: 23.2338, lng: 105.2685,
        relatedCultureIds: [105],
        cultureKeywords: [{ label: "Check-in", linkId: 105 }],
        image: "images/nen-caycodon.jpg",
        desc: "Điểm check-in nổi bật giữa cao nguyên đá với hình ảnh cây xanh đơn độc.",
        visitTime: "Cả ngày.",
        ticketPrice: "Miễn phí",
        transport: "Gần đèo Mã Pí Lèng, di chuyển bằng xe máy hoặc ô tô.",
        bestSeason: "Tháng 9 - Tháng 12.",
        locationMap: "https://www.google.com/maps?q=Cay+Co+Don+Ha+Giang&output=embed",
        experience: "Nên dừng xe đúng vị trí an toàn ven đường để chụp ảnh.",
        culture: {
            festival: "Gắn liền với hành trình khám phá đèo Mã Pí Lèng.",
            costume: "Du khách thường thuê trang phục dân tộc chụp ảnh.",
            customs: "Điểm dừng chân tự phát của phượt thủ.",
            art: "Biểu tượng cảm xúc đặc trưng của Hà Giang."
        },
        food: {
            name: "Ngô Nướng & Cà Phê Mang Đi",
            image: "images/mon-caphe.jpg",
            price: "15.000đ - 50.000đ",
            location: "Các quán nhỏ ven đường"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn - Cây Cô Đơn. Ngày 2: Nho Quế.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Lũng Cú. Ngày 3: Cây Cô Đơn - Nho Quế.",
            safety: "Tránh đứng quá sát mép vực.",
            estimatedCost: "2.000.000đ - 3.000.000đ/người"
        }
    },
    {
        id: 15,
        name: "Vách đá Thần",
        category: "Địa danh/Cảnh quan",
        lat: 23.2367, lng: 105.2729,
        relatedCultureIds: [105],
        cultureKeywords: [{ label: "Cảnh quan đá vôi", linkId: 105 }],
        image: "images/nen-vachdatuthan.jpeg",
        desc: "Vách núi đá vôi cao dựng đứng hùng vĩ.",
        visitTime: "Cả ngày.",
        ticketPrice: "Miễn phí",
        transport: "Gần đèo Mã Pí Lèng.",
        bestSeason: "Tháng 9 - Tháng 4.",
        locationMap: "https://www.google.com/maps?q=Vach+Da+Than+Ha+Giang&output=embed",
        experience: "Nên chọn ngày trời nắng để thấy rõ màu đá xám đặc trưng.",
        culture: {
            festival: "Hành trình khám phá đèo Mã Pí Lèng.",
            costume: "Phong cách phượt hoặc trang phục dân tộc.",
            customs: "Điểm dừng chân tự phát.",
            art: "Biểu tượng cho vẻ đẹp hoang sơ cực Bắc."
        },
        food: {
            name: "Thắng Cố & Cà Phê Núi",
            image: "images/mon-thangco.jpg",
            price: "30.000đ - 100.000đ",
            location: "Các quán ăn dọc tuyến Đồng Văn - Mèo Vạc"
        },
        logistics: {
            itinerary2D: "Ngày 1: Đồng Văn. Ngày 2: Vách đá Thần - Mèo Vạc.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Lũng Cú. Ngày 3: Vách đá Thần - Nho Quế.",
            safety: "Không đứng sát mép vực chụp ảnh.",
            estimatedCost: "2.000.000đ - 3.500.000đ/người"
        }
    },
    {
        id: 16,
        name: "Hẻm Tu Sản",
        category: "Địa danh/Cảnh quan",
        lat: 23.2276, lng: 105.2871,
        relatedCultureIds: [105],
        cultureKeywords: [{ label: "Công viên địa chất", linkId: 105 }],
        image: "images/nen-hemtusan.jpg", 
        desc: "Hẻm vực sâu và hùng vĩ bậc nhất Đông Nam Á.",
        visitTime: "9h - 15h.",
        ticketPrice: "100.000đ - 150.000đ (bao gồm vé thuyền).",
        transport: "Xuống bến thuyền sông Nho Quế bằng xe máy hoặc xe trung chuyển.",
        bestSeason: "Tháng 9 - Tháng 4.",
        locationMap: "https://www.google.com/maps?q=Hem+Tu+San+Ha+Giang&output=embed",
        experience: "Nên trải nghiệm đi thuyền để cảm nhận trọn vẹn độ cao vách đá.",
        culture: {
            festival: "Gắn liền với cao nguyên đá Đồng Văn.",
            costume: "Đồ nổi bật để chụp ảnh giữa nền đá xám.",
            customs: "Tôn trọng cảnh quan, không xả rác.",
            art: "Biểu tượng hùng vĩ đặc trưng Hà Giang."
        },
        food: {
            name: "Thắng Dền & Ngô Nướng",
            image: "images/mon-thangden.jpg",
            price: "15.000đ - 40.000đ",
            location: "Khu vực bến thuyền sông Nho Quế"
        },
        logistics: {
            itinerary2D: "Ngày 1: Mã Pí Lèng. Ngày 2: Hẻm Tu Sản - Nho Quế.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Lũng Cú. Ngày 3: Hẻm Tu Sản - Mèo Vạc.",
            safety: "Mặc áo phao khi đi thuyền.",
            estimatedCost: "2.500.000đ - 3.500.000đ/người"
        }
    },
    {
        id: 17,
        name: "Phố cổ Đồng Văn",
        category: "Địa danh/Cảnh quan",
        lat: 23.2766, lng: 105.3625,
        relatedCultureIds: [101, 102, 104],
        cultureKeywords: [{ label: "Chợ phiên", linkId: 102 }, { label: "Kiến trúc cổ", linkId: 104 }, { label: "Văn hóa dân tộc", linkId: 101 }],
        image: "images/nen-phocodongvan.jpg", 
        desc: "Khu phố hơn 100 năm tuổi với mái ngói âm dương.",
        visitTime: "Tối (lên đèn) và sáng Chủ nhật (chợ phiên).",
        ticketPrice: "Miễn phí",
        transport: "Trung tâm thị trấn, đi bộ dễ dàng.",
        bestSeason: "Tháng 9 - Tháng 4.",
        locationMap: "https://www.google.com/maps?q=Pho+Co+Dong+Van+Ha+Giang&output=embed",
        experience: "Dạo phố vào buổi tối ngắm đèn lồng và ăn vặt.",
        culture: {
            festival: "Chợ phiên và lễ hội đồng bào vùng cao.",
            costume: "Thuê trang phục dân tộc chụp ảnh.",
            customs: "Tôn trọng đời sống sinh hoạt người dân.",
            art: "Kiến trúc Mông, Hoa và ảnh hưởng Pháp."
        },
        food: {
            name: "Thắng Cố & Bánh Tam Giác Mạch",
            image: "images/mon-thangco.jpg",
            price: "20.000đ - 120.000đ",
            location: "Các hàng rong khu phố cổ"
        },
        logistics: {
            itinerary2D: "Ngày 1: Hà Giang - Đồng Văn. Ngày 2: Phố cổ - Mã Pí Lèng.",
            itinerary3D: "Ngày 1: Hà Giang. Ngày 2: Đồng Văn - Phố cổ - Lũng Cú. Ngày 3: Mã Pí Lèng.",
            safety: "Giữ gìn tư trang nơi đông người.",
            estimatedCost: "2.000.000đ - 3.500.000đ/người"
        }
    },

    // CHUYÊN ĐỀ VĂN HÓA (101-106)
    {
        id: 101,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa các dân tộc thiểu số",
        image: "images/nen-dantoc.jpg",
        desc: "Hà Giang là nơi sinh sống của 22 dân tộc anh em, mỗi cộng đồng mang một bản sắc riêng tạo nên bức tranh văn hóa đa dạng.",
        sections: [
            { title: "Người Mông", content: "Cộng đồng đông nhất, nổi bật với nhà trình tường đất, váy thêu sáp ong, khèn Mông, canh tác ngô trên đá." },
            { title: "Người Tày", content: "Sinh sống ven suối, ở nhà sàn gỗ, nổi tiếng với hát then, đàn tính và lễ hội Lồng Tồng." },
            { title: "Người Dao", content: "Trang phục đỏ thêu tay cầu kỳ, lễ cấp sắc đánh dấu sự trưởng thành của nam giới." },
            { title: "Người Lô Lô", content: "Sinh sống nhiều tại Lũng Cú, nổi bật với trang phục ghép vải màu và văn hóa trống đồng cổ truyền." },
            { title: "Người Pà Thẻn", content: "Nổi tiếng với lễ hội Nhảy lửa độc đáo và trang phục mang sắc đỏ chủ đạo." }
        ]
    },
    {
        id: 102,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa Chợ phiên vùng cao",
        image: "images/nen-phiencho.jpg",
        desc: "Chợ phiên không chỉ là nơi mua bán mà còn là một 'bảo tàng sống' lưu giữ đời sống văn hóa cộng đồng.",
        sections: [
            { title: "Thời gian đặc biệt", content: "Họp theo phiên cố định hoặc 'chợ lùi'. Chợ nức tiếng: Đồng Văn, Mèo Vạc, Khâu Vai." },
            { title: "Không gian giao lưu", content: "Nơi thanh niên gặp gỡ giao duyên, người thân tìm lại nhau sau những ngày lao động." },
            { title: "Trang phục ngày chợ", content: "Đồng bào diện váy áo đẹp nhất, tạo nên bức tranh thổ cẩm sống động giữa núi đá." },
            { title: "Ẩm thực chợ phiên", content: "Thắng cố nghi ngút khói, mèn mén thơm mùi ngô, rượu ngô men lá nồng nàn." },
            { title: "Âm nhạc & Tiếng khèn", content: "Dìu dặt tiếng khèn Mông hòa cùng tiếng nói cười rộn ràng làm nên linh hồn phiên chợ." }
        ]
    },
    {
        id: 103,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Lễ hội truyền thống",
        image: "images/nen-lehoitruynthong.jpg",
        desc: "Hà Giang là vùng đất của những lễ hội đậm chất nhân văn và tín ngưỡng tâm linh.",
        sections: [
            { title: "Lễ hội Gầu Tào (Mông)", content: "Diễn ra từ mùng 1 đến rằm tháng Giêng để cầu phúc, cầu con, may mắn." },
            { title: "Lễ hội Lồng Tồng (Tày)", content: "Nghi lễ 'xuống đồng' cầu mùa màng bội thu với hát then, đàn tính." },
            { title: "Lễ hội Nhảy lửa (Pà Thẻn)", content: "Chàng trai nhảy chân trần trên than hồng, thể hiện sức mạnh tinh thần và niềm tin tâm linh." },
            { title: "Chợ tình Khâu Vai", content: "Ngày 27/3 âm lịch hàng năm, nơi đôi lứa xưa gặp lại nhau, đậm tính nhân văn." },
            { title: "Lễ hội hoa Tam giác mạch", content: "Tổ chức tháng 10-11 để tôn vinh loài hoa biểu tượng của vùng đá xám." }
        ]
    },
    {
        id: 104,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Kiến trúc & Làng cổ",
        image: "images/nen-kientruc.jpg",
        desc: "Kiến trúc phản ánh sự thích nghi kỳ diệu với thiên nhiên núi đá khắc nghiệt.",
        sections: [
            { title: "Nhà trình tường", content: "Tường đất nện dày 40-60cm giữ ấm mùa đông, mát mùa hè. Mái ngói âm dương trầm mặc." },
            { title: "Nhà sàn", content: "Kiến trúc của người Tày, Nùng ở vùng thấp, ven suối, bằng gỗ nghiến chắc chắn." },
            { title: "Làng cổ Lô Lô Chải", content: "Dưới chân cột cờ Lũng Cú với cổng làng đá và không gian văn hóa nguyên bản." },
            { title: "Dinh thự họ Vương", content: "Giao thoa kiến trúc nhà Thanh, văn hóa Mông và phong cách Pháp." }
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
            { title: "Canh tác trên đá", content: "Kỳ tích gieo ngô trong từng hốc đá nhỏ của người Mông trên cao nguyên đá." },
            { title: "Ruộng bậc thang", content: "Tác phẩm nghệ thuật khổng lồ tại Hoàng Su Phì do bàn tay con người tạo nên qua nhiều thế hệ." },
            { title: "Đường Hạnh Phúc", content: "Biểu tượng ý chí mở đường huyền thoại của hàng vạn thanh niên xung phong." },
            { title: "Biên cương kiên cường", content: "Dấu ấn lịch sử hàng trăm năm giữ đất và bảo vệ chủ quyền Tổ quốc." }
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
            { title: "Mèn mén", content: "Linh hồn ẩm thực người Mông từ ngô xay nhuyễn hấp dẻo, giàu năng lượng." },
            { title: "Thắng cố", content: "Hương vị nồng nàn chợ phiên từ thịt ngựa/bò ninh cùng thảo quả, gia vị rừng." },
            { title: "Thịt gác bếp", content: "Thịt trâu/lợn ướp mắc khén treo gác bếp nhiều tháng, đậm đà vị khói củi." },
            { title: "Phở chua & Cháo ấu tẩu", content: "Những thức quà mang đậm dấu ấn giao thoa văn hóa và y học dân gian vùng cao." },
            { title: "Rượu ngô men lá", content: "Thức uống nồng nàn say lòng người, thể hiện sự hiếu khách của người bản địa." }
        ]
    }
];



// ==========================================
// TÍNH NĂNG 1: HIỂN THỊ DANH SÁCH (GRID DISPLAY)
// ==========================================
function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100 relative text-slate-800">
            ${!item.isCultureTopic ? `<button onclick="addToTrip(${item.id})" class="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur text-emerald-700 w-10 h-10 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"><i class="fas fa-plus"></i></button>` : ''}
            <div onclick="openModal(${item.id})" class="cursor-pointer text-slate-800">
                <div class="relative h-60 overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold uppercase text-xs">Chi tiết</div>
                </div>
                <div class="p-6">
                    <span class="text-[10px] font-bold uppercase text-emerald-600 tracking-wider">${item.category}</span>
                    <h3 class="text-lg font-bold mt-1 text-emerald-900 uppercase">${item.name}</h3>
                    <p class="text-gray-500 text-[11px] line-clamp-2">${item.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
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
// 3. THỜI TIẾT & POPUP (MODAL)
// ==========================================

async function fetchWeather(lat, lng) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=weathercode,temperature_2m_max&timezone=Asia%20Bangkok`).then(r => r.json());
        return res;
    } catch (e) { return null; }
}

function interpretWeather(code) {
    const map = { 0: { icon: "fa-sun", txt: "Nắng" }, 1: { icon: "fa-cloud-sun", txt: "Ít mây" }, 2: { icon: "fa-cloud", txt: "Mây" }, 45: { icon: "fa-smog", txt: "Sương mù" }, 61: { icon: "fa-cloud-rain", txt: "Mưa" } };
    return map[code] || { icon: "fa-cloud", txt: "N/A" };
}

async function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    if (!item) return;

    if (item.isCultureTopic) {
        content.innerHTML = `
            <div class="relative h-72"><img src="${item.image}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-white uppercase text-4xl font-bold">${item.name}</div></div>
            <div class="p-8 space-y-8 bg-white text-slate-800 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    ${(item.sections || []).map(sec => `<div class="bg-stone-50 p-6 rounded-3xl border-l-4 border-emerald-700 shadow-sm"><h4 class="font-bold text-xl text-emerald-900 mb-2 uppercase">${sec.title}</h4><p class="text-gray-600 text-sm">${sec.content}</p></div>`).join('')}
                </div>
            </div>`;
    } else {
        const w = await fetchWeather(item.lat || 23.2, item.lng || 105.2);
        const curr = interpretWeather(w?.current_weather?.weathercode || 0);

        content.innerHTML = `
            <div class="relative h-72 md:h-96"><img src="${item.image}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/90 flex items-end p-8 text-white uppercase text-4xl font-bold">${item.name}</div></div>
            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white text-slate-900 text-sm">
                <div class="lg:col-span-2 space-y-10 text-left">
                    <section><h3 class="text-xl font-bold border-l-4 border-orange-500 pl-3 mb-4 text-emerald-900 uppercase">Tổng quan</h3><p class="text-gray-700 italic">"${item.experience || item.desc}"</p></section>
                    <section class="bg-slate-900 text-white p-6 rounded-[30px] shadow-xl flex items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <i class="fas ${curr.icon} text-3xl text-yellow-400"></i>
                            <div><p class="text-2xl font-bold">${w ? w.current_weather.temperature : '--'}°C</p><p class="text-[10px] uppercase text-emerald-400">${curr.txt}</p></div>
                        </div>
                        <div class="flex gap-2">
                            ${w ? w.daily.time.slice(1,4).map((t, i) => `<div class="text-center bg-white/5 p-2 rounded-xl"><p class="text-[8px] opacity-40 uppercase">${new Date(t).toLocaleDateString('vi-VN', {weekday: 'short'})}</p><i class="fas ${interpretWeather(w.daily.weathercode[i+1]).icon} text-[10px] my-1"></i><p class="font-bold text-[10px]">${Math.round(w.daily.temperature_2m_max[i+1])}°</p></div>`).join('') : ''}
                        </div>
                    </section>
                    <section><h3 class="text-xl font-bold border-l-4 border-orange-500 pl-3 mb-4 text-emerald-900 uppercase font-bold">Ẩm thực</h3><div class="flex gap-4 bg-slate-50 p-4 rounded-2xl"><img src="${item.food?.image}" class="w-24 h-20 object-cover rounded-xl shadow-md"><div class="flex-1"><h4 class="font-bold text-emerald-900">${item.food?.name || 'N/A'}</h4><p class="text-orange-600 font-bold">${item.food?.price || ''}</p></div></div></section>
                    <section><h3 class="text-xl font-bold border-l-4 border-orange-500 pl-3 mb-4 text-emerald-900 uppercase font-bold">Bản đồ</h3><iframe src="${item.locationMap}" class="w-full h-80 rounded-3xl border-0 shadow-lg" loading="lazy"></iframe></section>
                </div>
                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-xl"><h3 class="text-lg font-bold mb-4 text-orange-400 border-b border-emerald-700 pb-2 uppercase">Lịch trình</h3><p class="text-xs opacity-80 leading-loose italic">${item.logistics?.itinerary2D || 'Cập nhật sau'}</p></div>
                    <div class="bg-orange-50 p-6 rounded-[30px] text-center border border-orange-100 text-slate-800"><p class="text-[10px] text-orange-600 font-bold uppercase underline">Chi phí dự kiến</p><p class="text-xl font-bold text-orange-700 italic">${item.logistics?.estimatedCost || 'Tùy nhu cầu'}</p></div>
                </div>
            </div>`;
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() { document.getElementById('modal').classList.add('hidden'); document.body.style.overflow = 'auto'; }

// ==========================================
// 4. CHAT AI & TRIP PLANNER
// ==========================================

function toggleChat() { 
    document.getElementById('chat-window').classList.toggle('hidden'); 
    document.getElementById('chat-tooltip').style.display = 'none';
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    if (!input.value.trim()) return;

    const msg = input.value.trim();
    content.innerHTML += `<div class="bg-blue-600 text-white p-3 rounded-2xl ml-auto max-w-[85%] text-xs shadow-sm mb-2">${msg}</div>`;
    input.value = "";
    content.scrollTo(0, content.scrollHeight);

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "system", content: "Bạn là trợ lý Hà Giang chuyên nghiệp. Trả lời cực ngắn gọn bằng tiếng Việt." }, { role: "user", content: msg }] })
        });
        const data = await res.json();
        content.innerHTML += `<div class="bg-emerald-100 text-emerald-900 p-3 rounded-2xl self-start max-w-[85%] text-xs border border-emerald-200 mb-2 shadow-sm">${data.choices[0].message.content}</div>`;
    } catch (e) { content.innerHTML += `<div class="text-red-500">Lỗi kết nối.</div>`; }
    content.scrollTo(0, content.scrollHeight);
}

let selectedTripIds = [];
function addToTrip(id) { 
    if (!selectedTripIds.includes(id)) { selectedTripIds.push(id); updateTripUI(); } 
}
function clearTrip() { selectedTripIds = []; updateTripUI(); }
function updateTripUI() {
    const planner = document.getElementById('trip-planner');
    document.getElementById('trip-count').innerText = selectedTripIds.length;
    if (selectedTripIds.length > 0) {
        planner.classList.remove('hidden');
        document.getElementById('selected-list').innerHTML = selectedTripIds.map(id => `• ${destinationsData.find(d => d.id === id).name}`).join('<br>');
    } else { planner.classList.add('hidden'); }
}

async function generateAITrip() {
    const names = selectedTripIds.map(id => destinationsData.find(d => d.id === id).name).join(", ");
    document.getElementById('chat-window').classList.remove('hidden');
    const content = document.getElementById('chat-content');
    content.innerHTML += `<div class="bg-orange-100 p-3 rounded-2xl text-[10px] italic shadow-sm mb-2 border border-orange-200">AI đang lập tour đi: ${names}...</div>`;
    
    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "system", content: "Bạn là tour guide Hà Giang. Lập lịch trình ngắn gọn bằng gạch đầu dòng và tính chi phí (Xăng, ăn, ngủ, vé) cho danh sách điểm khách chọn." }, { role: "user", content: "Lập tour đi qua: " + names }] })
        });
        const data = await res.json();
        content.innerHTML += `<div class="bg-emerald-50 p-4 rounded-2xl self-start max-w-[95%] text-xs border border-emerald-200 shadow-lg">${data.choices[0].message.content.replace(/\n/g, '<br>')}</div>`;
    } catch (e) { content.innerHTML += `<div class="text-red-500">Lỗi AI.</div>`; }
    content.scrollTo(0, content.scrollHeight);
}

// KHỞI CHẠY
window.onload = () => {
    displayDestinations(destinationsData);
    setTimeout(() => { document.getElementById('chat-tooltip').classList.remove('hidden'); }, 3000);
};
window.onclick = (e) => { if (e.target == document.getElementById('modal')) closeModal(); };
document.getElementById('chat-input')?.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage(); });
