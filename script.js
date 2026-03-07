


// DỮ LIỆU TỔNG HỢP (17 ĐỊA DANH + 6 VĂN HÓA)

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
const API_KEY = "gsk_7n4qkJ7k14Uwo84wp4dOWGdy" + "b3FYitMCVaxwPsZpr2aLNrZFLM3n";

function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100 relative text-slate-800">
            ${!item.isCultureTopic ? `<button onclick="addToTrip(${item.id})" class="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur text-emerald-700 w-10 h-10 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"><i class="fas fa-plus"></i></button>` : ''}
            <div onclick="openModal(${item.id})" class="cursor-pointer">
                <div class="relative h-60 overflow-hidden text-center">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute bottom-3 left-3 flex flex-wrap gap-2 z-20">
                        ${(item.cultureKeywords || []).map(kw => `<span onclick="event.stopPropagation(); openModal(${kw.linkId})" class="bg-emerald-600/90 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded font-bold hover:bg-orange-500 transition shadow-lg uppercase"># ${kw.label}</span>`).join('')}
                    </div>
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold tracking-widest uppercase text-xs shadow-xl">Chi tiết</div>
                </div>
                <div class="p-6">
                    <span class="text-[10px] font-bold uppercase text-emerald-600 tracking-wider">${item.category}</span>
                    <h3 class="text-lg font-bold mt-2 mb-2 text-emerald-900 uppercase">${item.name}</h3>
                    <p class="text-gray-500 text-xs leading-relaxed line-clamp-2 italic">${item.desc}</p>
                </div>
            </div>
        </div>`).join('');
}

// 2. Bộ lọc danh mục
function filterDestinations(category) {
    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category.includes(category));
    displayDestinations(filtered);
}

// 3. Tìm kiếm
document.getElementById('search-input')?.addEventListener('input', (e) => {
    const kw = e.target.value.toLowerCase();
    const filtered = destinationsData.filter(d => d.name.toLowerCase().includes(kw) || d.desc.toLowerCase().includes(kw));
    displayDestinations(filtered);
});

// 4. Mở Modal chi tiết
function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    if (!item || !content) return;

    if (item.isCultureTopic) {
        // Giao diện Chuyên đề Văn hóa
        content.innerHTML = `
            <div class="relative h-72 md:h-[400px]"><img src="${item.image}" class="w-full h-full object-cover shadow-2xl"><div class="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-white uppercase text-4xl md:text-6xl font-bold font-bold text-center">${item.name}</div></div>
            <div class="p-8 md:p-16 space-y-10 bg-white text-slate-800 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    ${(item.sections || []).map(sec => `<div class="bg-stone-50 p-8 rounded-3xl border-l-8 border-emerald-700 shadow-sm transition hover:shadow-md hover:bg-white"><h4 class="font-bold text-xl text-emerald-900 mb-2 uppercase">${sec.title}</h4><p class="text-gray-600 text-sm leading-relaxed">${sec.content}</p></div>`).join('')}
                </div>
            </div>`;
    } else {
        // Giao diện Địa danh
        const culture = item.culture || {};
        const food = item.food || {};
        const logistics = item.logistics || {};
        const linkedCultures = (item.relatedCultureIds || []).map(cId => destinationsData.find(d => d.id === cId)).filter(Boolean);

        content.innerHTML = `
            <div class="relative h-72 md:h-96"><img src="${item.image}" class="w-full h-full object-cover shadow-2xl"><div class="absolute inset-0 bg-gradient-to-t from-black/90 flex items-end p-8 text-white uppercase text-4xl md:text-6xl font-bold">${item.name}</div></div>
            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white text-slate-900 text-sm text-left">
                <div class="lg:col-span-2 space-y-10">
                    <section><h3 class="text-2xl font-bold border-l-8 border-orange-500 pl-4 mb-4 text-emerald-900 uppercase font-bold">Tổng quan</h3><p class="text-gray-700 leading-relaxed text-lg italic italic">"${item.experience || item.desc}"</p></section>
                    
                    <section class="bg-stone-900 text-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-white/10">
                        <h3 class="text-xl font-bold text-orange-400 mb-8 border-b border-white/10 pb-4 uppercase italic font-bold">Bản sắc văn hóa</h3>
                        <div class="space-y-8 mb-12">
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[10px] mb-1">Lễ hội:</p><p class="text-gray-300 leading-relaxed text-base font-light">${culture.festival || 'Đang cập nhật'}</p></div>
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[11px] mb-1">Trang phục:</p><p class="text-gray-300 leading-relaxed text-base font-light">${culture.costume || 'Đang cập nhật'}</p></div>
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[11px] mb-1">Phong tục:</p><p class="text-gray-300 leading-relaxed text-base font-light">${culture.customs || 'Đang cập nhật'}</p></div>
                        </div>
                        <div class="mt-8 pt-8 border-t border-white/5 text-center bg-white/5 -mx-10 -mb-10 p-10 rounded-b-[40px]">
                            <p class="text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">Khám phá chi tiết chuyên đề:</p>
                            <div class="flex flex-wrap justify-center gap-3">${linkedCultures.map(c => `<button onclick="openModal(${c.id})" class="bg-emerald-600 hover:bg-orange-500 text-white px-5 py-2 rounded-xl font-bold text-[10px] transition shadow-lg transform hover:scale-105 uppercase tracking-widest italic font-bold"># ${c.name}</button>`).join('')}</div>
                        </div>
                    </section>

                    <section><h3 class="text-2xl font-bold border-l-8 border-orange-500 pl-4 mb-6 text-emerald-900 uppercase font-bold">Ẩm thực vùng cao</h3><div class="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-slate-800 text-left items-center"><img src="${item.food?.image || 'images/default-food.jpg'}" class="w-full md:w-52 h-40 object-cover rounded-2xl shadow-md"><div class="flex-1 flex flex-col justify-center text-sm"><h4 class="text-xl font-bold text-emerald-900 mb-2 uppercase">${item.food?.name || 'Đặc sản địa phương'}</h4><p class="text-orange-600 font-bold mb-1">${item.food?.price || ''}</p><p class="text-gray-500 italic text-xs">Tại: ${item.food?.location || 'Chợ phiên'}</p></div></div></section>
                    <section><h3 class="text-2xl font-bold mb-6 text-emerald-900 uppercase text-center font-bold">Vị trí địa lý</h3><iframe src="${item.locationMap}" class="w-full h-80 rounded-3xl border-0 shadow-lg" loading="lazy"></iframe></section>
                </div>
                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-xl text-left"><h3 class="text-xl font-bold mb-4 text-orange-400 uppercase tracking-tighter font-bold">Lịch trình</h3><p class="leading-relaxed opacity-80 italic text-sm font-light leading-relaxed">${item.logistics?.itinerary2D || 'Liên hệ sau'}</p></div>
                    <div class="bg-orange-50 p-8 rounded-[40px] border border-orange-200 text-center text-slate-800 shadow-sm"><p class="text-[10px] text-orange-600 font-bold uppercase mb-1 underline font-bold italic">Chi phí dự kiến</p><p class="text-xl font-bold text-orange-700 italic font-bold">${item.logistics?.estimatedCost || 'Tùy nhu cầu'}</p></div>
                </div>
            </div>`;
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal').scrollTo(0,0);
}

function closeModal() { document.getElementById('modal')?.classList.add('hidden'); document.body.style.overflow = 'auto'; }

// 5. Chat AI (Groq) & Trip Planner
function toggleChat() { document.getElementById('chat-window')?.classList.toggle('hidden'); document.getElementById('chat-tooltip').style.display = 'none'; }

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    if (!input.value.trim()) return;
    const msg = input.value.trim();
    content.innerHTML += `<div class="bg-blue-600 text-white p-3 rounded-2xl ml-auto max-w-[85%] shadow-sm mb-2 text-right">${msg}</div>`;
    input.value = "";
    content.scrollTo(0, content.scrollHeight);
    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "system", content: "Trợ lý Hà Giang chuyên nghiệp. Trả lời ngắn gọn." }, { role: "user", content: msg }] })
        });
        const data = await res.json();
        content.innerHTML += `<div class="bg-emerald-100 text-emerald-900 p-3 rounded-2xl self-start max-w-[85%] text-xs border border-emerald-200 mb-2">${data.choices[0].message.content}</div>`;
    } catch (e) { content.innerHTML += `<div class="text-red-500">Lỗi kết nối.</div>`; }
    content.scrollTo(0, content.scrollHeight);
}

let selectedTripIds = [];
function addToTrip(id) { if (!selectedTripIds.includes(id)) { selectedTripIds.push(id); updateTripUI(); } }
function clearTrip() { selectedTripIds = []; updateTripUI(); }
function updateTripUI() {
    const planner = document.getElementById('trip-planner');
    if (selectedTripIds.length > 0) {
        planner.classList.remove('hidden');
        document.getElementById('trip-count').innerText = selectedTripIds.length;
        document.getElementById('selected-list').innerHTML = selectedTripIds.map(id => `• ${destinationsData.find(d => d.id === id).name}`).join('<br>');
    } else { planner.classList.add('hidden'); }
}
async function generateAITrip() {
    const names = selectedTripIds.map(id => destinationsData.find(d => d.id === id).name).join(", ");
    document.getElementById('chat-window').classList.remove('hidden');
    document.getElementById('chat-content').innerHTML += `<div class="bg-orange-100 p-3 rounded-2xl text-[10px] italic text-slate-800 shadow-sm">AI đang lập tour đi: ${names}...</div>`;
}

// 6. KHỞI CHẠY
window.onload = () => {
    displayDestinations(destinationsData);
    setTimeout(() => { document.getElementById('chat-tooltip')?.classList.remove('hidden'); }, 3000);
};
window.onclick = (e) => { if (e.target == document.getElementById('modal')) closeModal(); };
document.getElementById('chat-input')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
