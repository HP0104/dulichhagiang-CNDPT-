//  DỮ LIỆU CỦA KHU DU LỊCH  
const destinationsData = [
    {
        id: 1,
        name: "Đèo Mã Pí Lèng",
        category: "Địa danh/Cảnh quan",
        image: "images/nen-maphileng.jpg",
        desc: "Đệ nhất hùng quan của vùng cao nguyên đá Hà Giang.",
        
        // Chi tiết
        visitTime: "Sáng sớm hoặc chiều tà để ngắm hoàng hôn.",
        ticketPrice: "Miễn phí",
        transport: "Xe máy phượt là trải nghiệm tốt nhất.",
        bestSeason: "Tháng 10 - Tháng 12 (Mùa tam giác mạch)",
        locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.5!2d105.418!3d23.245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3696a096!2zRMOInternalIE3DoyBQaSBMw6huZw!5e0!3m2!1svi!2s",
        experience: "Hãy dừng chân tại Panorama để ngắm trọn hẻm Tu Sản. Đường đèo rất dốc, cần tay lái vững.",

        // Văn hóa
        culture: {
            festival: "Lễ hội hoa Tam Giác Mạch đặc sắc.",
            costume: "Váy áo rực rỡ của người Mông trắng, người Mông đen.",
            customs: "Tục khèn Mông gọi bạn, giao lưu tại trạm dừng chân.",
            art: "Tiếng khèn Mông, múa khèn trên vách đá."
        },

        // Ẩm thực
        food: {
            name: "Thắng Cố & Rượu Ngô Men Lá",
            image: "images/mon-thangco.jpg",
            price: "100.000đ - 200.000đ",
            location: "Chợ phiên Đồng Văn (Sáng CN hàng tuần)"
        },

        // Logistics
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
        image: "images/nen-songnhoque.webp",
        desc: "Dòng sông xanh biếc uốn lượn dưới chân hẻm vực Tu Sản.",
        visitTime: "9h sáng đến 3h chiều để thấy màu nước đẹp nhất.",
        ticketPrice: "100.000đ (Vé thuyền) + 50.000đ (Xe ôm xuống bến)",
        transport: "Xe máy xuống bến, sau đó đi thuyền.",
        bestSeason: "Tháng 2 - Tháng 3 (Mùa hoa gạo)",
        locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.0!2d105.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3696a1!2zU8O0bmcgTmhvIFF14bq_!5e0!3m2!1svi!2s",
        experience: "Nên thuê Kayak để tự mình khám phá hẻm Tu Sản. Hãy chuẩn bị máy ảnh đầy pin!",
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
        estimatedCost: "1.500.000đ - 2.500.000đ/người (kết hợp tour Đồng Văn)"
    }
},
   {
    id: 5,
    name: "Thung Lũng Sủng Là",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-thunglungsungla.jpg",
    desc: "“Bông hoa giữa cao nguyên đá” – nổi tiếng với mùa hoa tam giác mạch và Nhà của Pao.",

    visitTime: "6h30 - 17h30 (đẹp nhất vào buổi sáng).",
    ticketPrice: "20.000đ - 30.000đ (tham quan vườn hoa, Nhà của Pao).",
    transport: "Nằm trên Quốc lộ 4C, cách Đồng Văn khoảng 20km, di chuyển bằng xe máy hoặc ô tô.",
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
        safety: "Không dẫm lên hoa khi chụp ảnh. Cẩn thận khi di chuyển vào mùa mưa.",
        estimatedCost: "2.000.000đ - 2.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
   {
    id: 6,
    name: "Phố Cáo",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-phocao.jpg",
    desc: "Ngôi làng vùng cao yên bình với nhà trình tường cổ kính giữa cao nguyên đá Đồng Văn.",

    visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc mùa xuân).",
    ticketPrice: "Miễn phí",
    transport: "Nằm trên Quốc lộ 4C, giữa Yên Minh và Đồng Văn, thuận tiện đi xe máy hoặc ô tô.",
    bestSeason: "Tháng 1 - Tháng 3 (Mùa hoa đào, hoa mận) hoặc tháng 10 - 12 (Mùa tam giác mạch).",
    locationMap: "https://www.google.com/maps?q=Pho+Cao+Dong+Van+Ha+Giang&output=embed",
    experience: "Dành thời gian đi bộ trong làng để chụp ảnh nhà trình tường, hàng rào đá và đời sống sinh hoạt của người Mông.",

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
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Phố Cáo - Sủng Là. Ngày 3: Mã Pí Lèng - Nho Quế.",
        safety: "Tôn trọng văn hóa địa phương, không tự ý vào nhà dân khi chưa xin phép.",
        estimatedCost: "2.000.000đ - 2.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
    {
    id: 7,
    name: "Núi Đôi Quản Bạ",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-nuidoiquanba.jpg",
    desc: "Biểu tượng cửa ngõ cao nguyên đá với hai ngọn núi tròn đầy giữa thung lũng Tam Sơn.",

    visitTime: "6h00 - 18h00 (đẹp nhất vào sáng sớm hoặc chiều muộn).",
    ticketPrice: "10.000đ/người (vé tham quan điểm ngắm cảnh).",
    transport: "Nằm tại thị trấn Tam Sơn, huyện Quản Bạ, cách TP Hà Giang khoảng 45km, đi xe máy hoặc ô tô thuận tiện.",
    bestSeason: "Tháng 9 - Tháng 12 (trời trong xanh) hoặc tháng 3 - 5 (mùa lúa xanh).",
    locationMap: "https://www.google.com/maps?q=Nui+Doi+Quan+Ba+Ha+Giang&output=embed",
    experience: "Dừng chân tại cổng trời Quản Bạ để ngắm trọn thung lũng Tam Sơn và chụp ảnh toàn cảnh Núi Đôi.",

    culture: {
        festival: "Lễ hội truyền thống của người Mông và Dao tại Quản Bạ.",
        costume: "Trang phục thổ cẩm đặc trưng của người Dao và Mông.",
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
        itinerary2D: "Ngày 1: Hà Giang - Quản Bạ - Yên Minh. Ngày 2: Đồng Văn - Mã Pí Lèng.",
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Đồng Văn. Ngày 3: Mã Pí Lèng - Nho Quế.",
        safety: "Quan sát kỹ khi qua đèo Quản Bạ vì nhiều khúc cua gấp và sương mù.",
        estimatedCost: "2.000.000đ - 2.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
   {
    id: 8,
    name: "Làng Lô Lô Chải",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-langlolochai.jpg",
    desc: "Ngôi làng cổ dưới chân cột cờ Lũng Cú, lưu giữ trọn vẹn bản sắc người Lô Lô đen.",

    visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc chiều muộn).",
    ticketPrice: "Miễn phí (chi phí homestay tính riêng).",
    transport: "Cách Cột cờ Lũng Cú khoảng 1km, có thể đi bộ hoặc xe máy từ trung tâm xã Lũng Cú.",
    bestSeason: "Tháng 10 - 12 (mùa tam giác mạch) hoặc tháng 3 - 4 (mùa hoa cải).",
    locationMap: "https://www.google.com/maps?q=Lang+Lo+Lo+Chai+Ha+Giang&output=embed",
    experience: "Nên ở homestay một đêm để trải nghiệm sinh hoạt, thưởng thức ẩm thực và ngắm bình minh giữa cao nguyên đá.",

    culture: {
        festival: "Lễ hội truyền thống và nghi lễ cầu mùa của người Lô Lô.",
        costume: "Trang phục Lô Lô đen với họa tiết thêu tay nhiều màu sắc.",
        customs: "Nhà trình tường, hàng rào đá và đời sống sinh hoạt cộng đồng đặc trưng.",
        art: "Kiến trúc nhà cổ và nghệ thuật thêu thổ cẩm tinh xảo."
    },

    food: {
        name: "Gà Đen & Rượu Ngô",
        image: "images/mon-gaden.jpg",
        price: "100.000đ - 300.000đ",
        location: "Các homestay và quán ăn trong làng"
    },

    logistics: {
        itinerary2D: "Ngày 1: Đồng Văn - Lũng Cú - Lô Lô Chải. Ngày 2: Mã Pí Lèng - Nho Quế.",
        itinerary3D: "Ngày 1: Quản Bạ - Yên Minh. Ngày 2: Lũng Cú - Lô Lô Chải - Phố cổ Đồng Văn. Ngày 3: Mã Pí Lèng - Sông Nho Quế.",
        safety: "Tôn trọng phong tục địa phương, giữ yên tĩnh vào buổi tối trong khu dân cư.",
        estimatedCost: "2.000.000đ - 3.000.000đ/người (bao gồm homestay 1 đêm)"
    }
},
   {
    id: 9,
    name: "Cao nguyên đá Đồng Văn",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-caonguyendadongvan.jpg",
    desc: "Công viên địa chất toàn cầu UNESCO – miền đá xám kỳ vĩ giữa trời cực Bắc Hà Giang.",

    visitTime: "Quanh năm (đẹp nhất từ tháng 9 - 12 và tháng 3 - 5).",
    ticketPrice: "Miễn phí (một số điểm tham quan tính vé riêng).",
    transport: "Di chuyển bằng xe máy hoặc ô tô theo Quốc lộ 4C từ TP Hà Giang.",
    bestSeason: "Tháng 10 - 12 (mùa hoa tam giác mạch) hoặc tháng 3 - 4 (mùa hoa cải, đào mận).",
    locationMap: "https://www.google.com/maps?q=Cao+nguyen+da+Dong+Van&output=embed",
    experience: "Nên dành ít nhất 3 ngày 2 đêm để khám phá trọn vẹn cảnh quan, văn hóa và các cung đường đèo hùng vĩ.",

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
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Lũng Cú - Đồng Văn. Ngày 3: Mã Pí Lèng - Nho Quế.",
        safety: "Kiểm tra phanh xe trước khi đi đèo. Hạn chế di chuyển ban đêm do sương mù dày.",
        estimatedCost: "2.500.000đ - 3.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
   {
    id: 10,
    name: "Dốc Thẩm Mã",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-docthamma.jpg",
    desc: "Con dốc với những khúc cua tay áo ngoạn mục trên hành trình khám phá cao nguyên đá Đồng Văn.",

    visitTime: "Cả ngày (đẹp nhất vào sáng sớm hoặc chiều muộn).",
    ticketPrice: "Miễn phí",
    transport: "Nằm trên cung đường Yên Minh - Đồng Văn, di chuyển bằng xe máy hoặc ô tô.",
    bestSeason: "Tháng 10 - 12 (mùa tam giác mạch) hoặc tháng 9 - 10 (trời trong, dễ săn ảnh).",
    locationMap: "https://www.google.com/maps?q=Doc+Tham+Ma+Ha+Giang&output=embed",
    experience: "Dừng xe tại điểm cao để chụp toàn cảnh các khúc cua tay áo. Nên đi số thấp khi đổ dốc để đảm bảo an toàn.",

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
        itinerary2D: "Ngày 1: Hà Giang - Quản Bạ - Yên Minh. Ngày 2: Dốc Thẩm Mã - Đồng Văn - Mã Pí Lèng.",
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Yên Minh - Dốc Thẩm Mã - Lũng Cú. Ngày 3: Mã Pí Lèng - Nho Quế.",
        safety: "Giữ tốc độ chậm, kiểm tra phanh trước khi đổ dốc. Cẩn thận khi trời mưa hoặc có sương mù.",
        estimatedCost: "2.000.000đ - 3.000.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
   {
    id: 11,
    name: "Phó Bảng",
    category: "Địa danh/Cảnh quan",
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
    name: "Địa danh/Cảnh quan",
    category: "Cảnh quan",
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
    name: "Vách Đá Thần",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-vachdatuthan.jpeg",
    desc: "Vách núi đá vôi cao dựng đứng giữa cao nguyên đá Đồng Văn, tạo nên khung cảnh hùng vĩ và đầy ấn tượng.",

    visitTime: "Cả ngày (đẹp nhất vào buổi sáng khi trời trong xanh).",
    ticketPrice: "Miễn phí",
    transport: "Nằm trên cung đường Đồng Văn - Mèo Vạc, gần đèo Mã Pí Lèng, có thể di chuyển bằng xe máy hoặc ô tô.",
    bestSeason: "Tháng 9 - Tháng 4 (thời tiết khô ráo, dễ di chuyển và chụp ảnh đẹp).",
    locationMap: "https://www.google.com/maps?q=Vach+Da+Than+Ha+Giang&output=embed",
    experience: "Nên chọn ngày trời nắng để thấy rõ màu đá xám đặc trưng. Khi chụp ảnh cần giữ khoảng cách an toàn và quan sát xe cộ trên đường đèo.",

    culture: {
        festival: "Gắn liền với hành trình khám phá cao nguyên đá Đồng Văn và đèo Mã Pí Lèng.",
        costume: "Du khách thường kết hợp trang phục dân tộc hoặc phong cách phượt để chụp ảnh.",
        customs: "Là điểm dừng chân tự phát của nhiều phượt thủ trên cung đường Hà Giang.",
        art: "Hình ảnh vách đá sừng sững giữa trời tạo cảm giác mạnh mẽ, biểu tượng cho vẻ đẹp hoang sơ vùng cực Bắc."
    },

    food: {
        name: "Thắng Cố & Cà Phê Núi",
        image: "images/mon-thangco.jpg",
        price: "30.000đ - 100.000đ",
        location: "Các quán ăn và quán cà phê dọc tuyến Đồng Văn - Mèo Vạc"
    },

    logistics: {
        itinerary2D: "Ngày 1: Đồng Văn - Mã Pí Lèng - Vách Đá Thần. Ngày 2: Sông Nho Quế - Mèo Vạc.",
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Đồng Văn - Lũng Cú. Ngày 3: Mã Pí Lèng - Vách Đá Thần - Nho Quế.",
        safety: "Cẩn thận khi dừng xe trên đường đèo, không đứng sát mép vực để chụp ảnh.",
        estimatedCost: "2.000.000đ - 3.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
   {
    id: 16,
    name: "Hẻm Tu Sản",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-hemtusan.jpg", 
    desc: "Hẻm vực sâu và hùng vĩ bậc nhất Đông Nam Á với vách đá dựng đứng soi bóng xuống dòng Nho Quế xanh ngọc.",

    visitTime: "Cả ngày (đẹp nhất từ 9h - 15h khi có nắng chiếu xuống lòng hẻm).",
    ticketPrice: "Khoảng 100.000đ - 150.000đ/người (bao gồm vé thuyền tham quan sông Nho Quế).",
    transport: "Di chuyển đến đèo Mã Pí Lèng (Đồng Văn - Mèo Vạc), sau đó xuống bến thuyền sông Nho Quế bằng xe máy hoặc xe trung chuyển.",
    bestSeason: "Tháng 9 - Tháng 4 (mùa khô, nước sông xanh và ít mưa).",
    locationMap: "https://www.google.com/maps?q=Hem+Tu+San+Ha+Giang&output=embed",
    experience: "Nên trải nghiệm đi thuyền trên sông Nho Quế để cảm nhận trọn vẹn độ cao của vách đá. Chuẩn bị mũ, kính râm vì khu vực lòng hẻm khá nắng.",

    culture: {
        festival: "Gắn liền với tuyến du lịch đèo Mã Pí Lèng và cao nguyên đá Đồng Văn.",
        costume: "Du khách thường mặc trang phục dân tộc hoặc đồ nổi bật để chụp ảnh giữa nền đá xám và nước xanh.",
        customs: "Tôn trọng cảnh quan thiên nhiên, không xả rác xuống sông.",
        art: "Vách đá cao 700–900m tạo nên hình ảnh biểu tượng hùng vĩ đặc trưng của Hà Giang."
    },

    food: {
        name: "Thắng Dền & Ngô Nướng",
        image: "images/mon-thangden.jpg",
        price: "15.000đ - 40.000đ",
        location: "Khu vực bến thuyền sông Nho Quế và thị trấn Mèo Vạc"
    },

    logistics: {
        itinerary2D: "Ngày 1: Đồng Văn - Mã Pí Lèng - Hẻm Tu Sản. Ngày 2: Mèo Vạc - Sông Nho Quế.",
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Đồng Văn - Lũng Cú. Ngày 3: Mã Pí Lèng - Hẻm Tu Sản - Nho Quế.",
        safety: "Mặc áo phao khi đi thuyền. Không đứng sát mép thuyền hoặc leo trèo vách đá.",
        estimatedCost: "2.500.000đ - 3.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
   {
    id: 17,
    name: "Phố cổ Đồng Văn",
    category: "Địa danh/Cảnh quan",
    image: "images/nen-phocodongvan.jpg", 
    desc: "Khu phố hơn 100 năm tuổi với mái ngói âm dương, tường vàng cổ kính và ánh đèn lồng ấm áp giữa lòng thị trấn Đồng Văn.",

    visitTime: "Cả ngày (đẹp nhất vào buổi tối khi lên đèn và sáng Chủ nhật khi có chợ phiên).",
    ticketPrice: "Miễn phí",
    transport: "Nằm ngay trung tâm thị trấn Đồng Văn, dễ dàng di chuyển bằng xe máy, ô tô hoặc đi bộ.",
    bestSeason: "Tháng 9 - Tháng 4 (thời tiết mát mẻ, ít mưa, thuận tiện tham quan và chụp ảnh).",
    locationMap: "https://www.google.com/maps?q=Pho+Co+Dong+Van+Ha+Giang&output=embed",
    experience: "Nên dạo phố vào buổi tối để ngắm đèn lồng và thưởng thức ẩm thực địa phương. Sáng Chủ nhật có thể kết hợp tham quan chợ phiên Đồng Văn.",

    culture: {
        festival: "Gắn liền với chợ phiên Đồng Văn và các lễ hội truyền thống của đồng bào vùng cao.",
        costume: "Du khách có thể thuê hoặc mặc trang phục dân tộc để chụp ảnh giữa không gian cổ kính.",
        customs: "Tôn trọng đời sống sinh hoạt của người dân địa phương khi tham quan và chụp ảnh.",
        art: "Kiến trúc nhà trình tường, mái ngói âm dương và đèn lồng đỏ tạo nên nét giao thoa văn hóa Mông, Hoa và ảnh hưởng Pháp."
    },

    food: {
        name: "Thắng Cố & Bánh Tam Giác Mạch",
        image: "images/mon-thangco.jpg",
        price: "20.000đ - 120.000đ",
        location: "Các quán ăn và hàng rong trong khu phố cổ Đồng Văn"
    },

    logistics: {
        itinerary2D: "Ngày 1: Quản Bạ - Yên Minh - Đồng Văn. Ngày 2: Phố cổ Đồng Văn - Lũng Cú - Mã Pí Lèng.",
        itinerary3D: "Ngày 1: Hà Giang - Quản Bạ. Ngày 2: Đồng Văn - Phố cổ - Lũng Cú. Ngày 3: Mã Pí Lèng - Mèo Vạc.",
        safety: "Giữ gìn tư trang cá nhân khi tham quan chợ phiên đông người.",
        estimatedCost: "2.000.000đ - 3.500.000đ/người (tour 3 ngày 2 đêm tự túc)"
    }
},
];

// ==========================================
// 2. LOGIC HIỂN THỊ VÀ TÌM KIẾM
// ==========================================


function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div onclick="openModal(${item.id})" class="cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div class="relative overflow-hidden h-60">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span class="bg-white text-emerald-700 px-6 py-2 rounded-full font-bold shadow-xl">CHI TIẾT</span>
                </div>
            </div>
            <div class="p-6">
                <span class="text-xs font-bold uppercase text-emerald-600 tracking-wider">${item.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3 text-emerald-900">${item.name}</h3>
                <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function filterDestinations(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-emerald-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-800');
    });
    if(event && event.target) {
        event.target.classList.add('bg-emerald-600', 'text-white');
    }

    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category === category);
    displayDestinations(filtered);
}

document.getElementById('search-input').addEventListener('input', (e) => {
    const kw = e.target.value.toLowerCase();
    const filtered = destinationsData.filter(d => 
        d.name.toLowerCase().includes(kw) || 
        d.desc.toLowerCase().includes(kw)
    );
    displayDestinations(filtered);
});

window.onload = () => displayDestinations(destinationsData);

// ==========================================
// 3. LOGIC MODAL CHI TIẾT (ĐÃ FIX LỖI THIẾU DỮ LIỆU)
// ==========================================

function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    if (item) {
        // Kiểm tra an toàn dữ liệu để tránh lỗi 404/undefined
        const culture = item.culture || { festival: "Đang cập nhật", costume: "Đang cập nhật", customs: "Đang cập nhật", art: "Đang cập nhật" };
        const food = item.food || { name: "Đặc sản địa phương", price: "Giá bình dân", location: "Các chợ phiên", image: "images/nen-ha-giang-default.jpg" };
        const logistics = item.logistics || { itinerary2D: "Đang cập nhật", itinerary3D: "Đang cập nhật", safety: "Chú ý tay lái khi đi đường đèo.", estimatedCost: "Tùy nhu cầu cá nhân" };

        content.innerHTML = `
            <div class="relative h-72 md:h-[450px]">
                <img src="${item.image}" class="w-full h-full object-cover" alt="${item.name}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 md:p-12">
                    <div>
                        <span class="bg-orange-500 text-white px-4 py-1 rounded-md text-sm font-bold mb-3 inline-block uppercase tracking-widest">${item.category}</span>
                        <h2 class="text-4xl md:text-6xl font-bold text-white uppercase">${item.name}</h2>
                    </div>
                </div>
            </div>

            <div class="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-12">
                    <section>
                        <h3 class="text-2xl font-bold text-emerald-900 border-l-8 border-orange-500 pl-4 mb-6 uppercase">Tổng quan & Kinh nghiệm</h3>
                        <p class="text-gray-700 text-lg leading-relaxed mb-8 italic">"${item.experience || item.details || item.desc}"</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-ticket-alt text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase font-bold">Giá vé</p>
                                <p class="font-bold text-sm">${item.ticketPrice || 'Miễn phí'}</p>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-clock text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase font-bold">Thời gian</p>
                                <p class="font-bold text-sm">${item.visitTime || '2-4 tiếng'}</p>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-sun text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase font-bold">Mùa đẹp nhất</p>
                                <p class="font-bold text-sm">${item.bestSeason || 'Quanh năm'}</p>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-motorcycle text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase font-bold">Di chuyển</p>
                                <p class="font-bold text-sm">${item.transport || 'Xe máy'}</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 class="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
                            <i class="fas fa-users-cog mr-3 text-orange-500"></i> Văn hóa & Phong tục
                        </h3>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-4 text-sm">
                                <p><b>Lễ hội:</b> ${culture.festival}</p>
                                <p><b>Trang phục:</b> ${culture.costume}</p>
                            </div>
                            <div class="space-y-4 text-sm">
                                <p><b>Phong tục:</b> ${culture.customs}</p>
                                <p><b>Nghệ thuật:</b> ${culture.art}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 class="text-2xl font-bold text-emerald-900 border-l-8 border-orange-500 pl-4 mb-6 uppercase">Ẩm thực đặc sắc</h3>
                        <div class="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <img src="${food.image}" class="w-full md:w-60 h-44 object-cover rounded-xl shadow-md" onerror="this.src='https://placehold.co/600x400?text=Food+Image'">
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold text-emerald-800 mb-2">${food.name}</h4>
                                <p class="text-orange-600 font-bold text-lg mb-2">${food.price}</p>
                                <p class="text-sm font-semibold text-gray-500 bg-slate-100 p-3 rounded-lg">Ăn tại: ${food.location}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 class="text-2xl font-bold text-emerald-900 mb-6 uppercase">Vị trí địa lý</h3>
                        <iframe src="${item.locationMap || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.75!2d104.98!3d22.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3690!2zSMOgIEdpYW5n!5e0!3m2!1svi!2s'}" class="w-full h-80 rounded-2xl shadow-inner border-0" loading="lazy"></iframe>
                    </section>
                </div>

                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
                        <h3 class="text-2xl font-bold mb-6 border-b border-emerald-700 pb-4 text-orange-400">Lịch trình</h3>
                        <div class="space-y-8 relative z-10 text-sm">
                            <div><span class="bg-orange-500 text-xs px-2 py-1 rounded font-bold mb-2 inline-block">2 NGÀY</span><p>${logistics.itinerary2D}</p></div>
                            <div><span class="bg-emerald-500 text-xs px-2 py-1 rounded font-bold mb-2 inline-block">3 NGÀY</span><p>${logistics.itinerary3D}</p></div>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-[40px] border-2 border-slate-100 shadow-sm text-sm">
                        <h3 class="font-bold text-red-600 mb-4 italic">Lưu ý an toàn</h3>
                        <p class="text-gray-600 mb-6">${logistics.safety}</p>
                        <div class="bg-orange-50 p-6 rounded-2xl">
                            <p class="text-xs text-orange-600 font-bold uppercase mb-1">Chi phí dự kiến</p>
                            <p class="text-2xl font-bold text-orange-700">${logistics.estimatedCost}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

window.onclick = function(e) {
    if (e.target == document.getElementById('modal')) closeModal();
}




