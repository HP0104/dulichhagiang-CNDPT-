  
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
    {
    id: 101,
    isCultureTopic: true,
    category: "Văn hóa",
    name: "Văn hóa các dân tộc thiểu số",
    image: "images/nen-dantoc.jpg",
    desc: "Hà Giang là nơi sinh sống của 22 dân tộc anh em, mỗi cộng đồng mang một bản sắc riêng về trang phục, kiến trúc, lễ hội và tín ngưỡng, tạo nên bức tranh văn hóa đa dạng và đặc sắc nơi địa đầu Tổ quốc.",
    sections: [
        { 
            title: "Người Mông", 
            content: "Cộng đồng đông nhất tại Hà Giang, nổi bật với nhà trình tường đất dày, váy thêu sáp ong rực rỡ và tiếng khèn vang vọng trong lễ hội Gầu Tào. Người Mông canh tác ngô trên đá, thể hiện sự thích nghi bền bỉ với cao nguyên đá." 
        },
        { 
            title: "Người Tày", 
            content: "Sinh sống ở thung lũng và ven suối, người Tày ở nhà sàn gỗ, trồng lúa nước và nổi tiếng với hát then, đàn tính. Lễ hội Lồng Tồng đầu xuân thể hiện tín ngưỡng nông nghiệp lâu đời." 
        },
        { 
            title: "Người Dao", 
            content: "Trang phục đỏ thêu tay cầu kỳ là dấu ấn đặc trưng của người Dao. Lễ cấp sắc đánh dấu sự trưởng thành của nam giới, cùng với phong tục tắm lá thuốc truyền thống độc đáo." 
        },
        { 
            title: "Người Nùng", 
            content: "Người Nùng gắn bó với lúa nước và nghề rèn thủ công. Họ có làn điệu hát sli, lượn mượt mà và sinh hoạt cộng đồng đậm chất truyền thống miền núi." 
        },
        { 
            title: "Người Lô Lô", 
            content: "Sinh sống nhiều tại Lũng Cú, người Lô Lô nổi bật với trang phục ghép vải màu tinh xảo và văn hóa trống đồng cổ truyền được gìn giữ qua nhiều thế hệ." 
        },
        { 
            title: "Người Pà Thẻn", 
            content: "Nổi tiếng với lễ hội Nhảy lửa độc đáo, người Pà Thẻn mang sắc đỏ chủ đạo trong trang phục và duy trì nhiều nghi lễ tâm linh gắn với tín ngưỡng đa thần." 
        },
        { 
            title: "Người La Chí", 
            content: "Cư trú chủ yếu ở Hoàng Su Phì, người La Chí nổi tiếng với ruộng bậc thang và lễ hội Khu Cù Tê cầu mùa. Trang phục truyền thống mang sắc chàm giản dị." 
        },
        { 
            title: "Người Cờ Lao", 
            content: "Dân tộc ít người sinh sống tại vùng núi cao, người Cờ Lao duy trì tín ngưỡng thờ thần núi và các nghi lễ cộng đồng đặc trưng." 
        },
        { 
            title: "Người Pu Péo", 
            content: "Là một trong những dân tộc rất ít người, Pu Péo có tục thờ thần đá và đời sống gắn bó mật thiết với thiên nhiên vùng cao." 
        },
        { 
            title: "Người Bố Y", 
            content: "Sinh sống rải rác ở vùng cao, người Bố Y làm nông nghiệp và chăn nuôi nhỏ, duy trì các lễ hội cầu mùa và tín ngưỡng dân gian truyền thống." 
        },
        { 
            title: "Người Phù Lá", 
            content: "Cư trú tại các vùng núi phía bắc tỉnh, người Phù Lá canh tác nương rẫy và lúa nương, trang phục chủ yếu màu chàm truyền thống." 
        },
        { 
            title: "Người La Ha", 
            content: "Sống bằng nương rẫy và chăn nuôi, người La Ha duy trì nhiều nghi lễ nông nghiệp cổ truyền và phong tục đặc sắc." 
        },
        { 
            title: "Người Sán Chỉ", 
            content: "Nổi bật với làn điệu hát soóng cọ giao duyên, người Sán Chỉ sinh sống bằng nông nghiệp và ở nhà sàn đơn giản." 
        },
        { 
            title: "Người Cao Lan (Sán Chay)", 
            content: "Có văn hóa hát đối đáp trong lễ hội, người Cao Lan sinh sống bằng lúa nước và duy trì phong tục cưới hỏi truyền thống." 
        },
        { 
            title: "Người Hoa", 
            content: "Sinh sống chủ yếu tại thị trấn, người Hoa có truyền thống kinh doanh và góp phần tạo nên nét kiến trúc nhà phố cổ đặc trưng." 
        },
        { 
            title: "Người Kinh", 
            content: "Đóng vai trò quan trọng trong phát triển kinh tế – xã hội của tỉnh, văn hóa người Kinh giao thoa giữa đồng bằng và miền núi." 
        },
        { 
            title: "Người Thái", 
            content: "Có truyền thống nhà sàn và múa xòe trong sinh hoạt cộng đồng. Người Thái canh tác lúa nước và sở hữu nền ẩm thực đặc sắc." 
        },
        { 
            title: "Người Mường", 
            content: "Văn hóa lúa nước, nhà sàn và cồng chiêng là nét đặc trưng của người Mường, thể hiện đời sống cộng đồng gắn kết." 
        },
        { 
            title: "Người Giấy", 
            content: "Sinh sống ở vùng thung lũng, người Giấy trồng lúa nước và tổ chức lễ hội cầu mùa đầu năm với nhiều nghi thức truyền thống." 
        },
        { 
            title: "Người Ngái", 
            content: "Có nguồn gốc Hoa, người Ngái sinh sống bằng nông nghiệp và buôn bán nhỏ, văn hóa mang tính giao thoa đặc trưng." 
        },
        { 
            title: "Người Khơ Mú", 
            content: "Sinh sống rải rác tại vùng cao, người Khơ Mú làm nương rẫy và duy trì phong tục gắn với tín ngưỡng tự nhiên." 
        },
        { 
            title: "Người Hán", 
            content: "Một bộ phận nhỏ cư trú tại Hà Giang, người Hán mang theo văn hóa truyền thống phương Đông và duy trì phong tục thờ cúng tổ tiên." 
        }
    ]
},
   {
        id: 102,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa Chợ phiên vùng cao",
        image: "images/nen-chophien.jpg",
        desc: "Chợ phiên không chỉ là nơi mua bán mà còn là một 'bảo tàng sống' lưu giữ trọn vẹn đời sống tâm linh và văn hóa cộng đồng của các dân tộc Hà Giang.",
        sections: [
            { 
                title: " Thời gian họp chợ đặc biệt", 
                content: "Khác với đồng bằng, chợ vùng cao họp theo phiên cố định (mỗi tuần 1 lần) hoặc 'chợ lùi' (mỗi tuần lùi 1 ngày). Chợ thường bắt đầu từ tảng sáng đến giữa trưa. Các phiên chợ nức tiếng gồm: Đồng Văn, Mèo Vạc và Chợ tình Khâu Vai." 
            },
            { 
                title: " Không gian giao lưu cộng đồng", 
                content: "Đây là nơi thanh niên gặp gỡ giao duyên, người thân ở các bản xa xôi tìm lại nhau sau những ngày lao động. Đặc biệt, chợ tình Khâu Vai là nơi duy nhất để những đôi lứa xưa gặp lại mỗi năm một lần theo phong tục truyền thống." 
            },
            { 
                title: " Trang phục & Sắc màu văn hóa", 
                content: "Ngày chợ là ngày hội khoe sắc với váy thêu sáp ong của người Mông, áo đỏ thêu tay của người Dao và trang phục ghép vải cầu kỳ của người Lô Lô, tạo nên một bức tranh thổ cẩm sống động giữa núi đá xám." 
            },
            { 
                title: " Ẩm thực đặc trưng", 
                content: "Chợ phiên là thiên đường của những món ngon dân dã: bát Thắng cố nghi ngút khói, mèn mén thơm mùi ngô mới, cháo ấu tẩu vị đắng thanh và chén rượu ngô men lá nồng nàn, tạo không khí quây quần ấm áp." 
            },
            { 
                title: " Hàng hóa đậm bản sắc địa phương", 
                content: "Các gian hàng bày bán đủ loại từ nông sản (mật ong, rau rừng), gia súc (lợn cắp nách, bò) đến sản phẩm thủ công tinh xảo như vải thổ cẩm, dao rèn thủ công và các loại nhạc cụ dân tộc." 
            },
            { 
                title: " Âm nhạc & Tiếng khèn", 
                content: "Âm thanh dìu dặt của tiếng khèn Mông hòa cùng tiếng nói cười rộn ràng chính là bản hòa âm đặc trưng, làm nên linh hồn của phiên chợ vùng cao mà du khách nào cũng muốn một lần được đắm mình trải nghiệm." 
            },
            { 
                title: " Giá trị văn hóa cốt lõi", 
                content: "Chợ phiên đóng vai trò then chốt trong việc bảo tồn trang phục truyền thống, duy trì tiếng nói bản địa và thắt chặt sợi dây gắn kết cộng đồng giữa 22 dân tộc anh em trên cao nguyên đá." 
            }
        ]
    },
   {
        id: 103,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Lễ hội truyền thống",
        image: "images/nen-lehoi.jpg",
        desc: "Hà Giang là vùng đất của những lễ hội đậm chất nhân văn, nơi giao thoa giữa tín ngưỡng tâm linh và khát vọng về một cuộc sống ấm no, hạnh phúc.",
        sections: [
            { 
                title: " Lễ hội Gầu Tào (Người Mông)", 
                content: "Diễn ra từ mùng 1 đến rằm tháng Giêng, đây là lễ hội cầu phúc, cầu con, cầu sức khỏe và may mắn. Phần hội rộn ràng với tiếng múa khèn, hát giao duyên, thi ném pao, đánh quay, thể hiện niềm tin vào thần linh bảo hộ bản làng." 
            },
            { 
                title: " Lễ hội Lồng Tồng (Người Tày)", 
                content: "Nghĩa là 'xuống đồng', diễn ra vào đầu năm mới để cúng thần nông cầu mùa màng bội thu. Du khách sẽ được đắm mình trong làn điệu hát Then, tiếng đàn Tính, xem tung còn và kéo co mang đậm dấu ấn văn hóa lúa nước vùng thung lũng." 
            },
            { 
                title: " Lễ hội Nhảy lửa (Người Pà Thẻn)", 
                content: "Thường tổ chức vào cuối năm âm lịch. Sau nghi lễ cúng thần linh trang trọng, các chàng trai sẽ nhảy chân trần trên lớp than hồng rực rỡ, thể hiện sức mạnh tinh thần vượt bậc và niềm tin tâm linh mãnh liệt của người dân nơi đây." 
            },
            { 
                title: " Lễ cấp sắc (Người Dao)", 
                content: "Nghi lễ quan trọng nhất trong đời người đàn ông Dao, đánh dấu sự trưởng thành và được thần linh công nhận là thành viên chính thức của cộng đồng thông qua nhiều nghi thức cúng bái và hát lễ truyền thống nghiêm ngặt." 
            },
            { 
                title: " Chợ tình Khâu Vai", 
                content: "Diễn ra duy nhất vào ngày 27/3 âm lịch hàng năm. Đây không phải nơi buôn bán mà là nơi những đôi lứa từng yêu nhau nhưng không đến được với nhau gặp lại, tạo nên không khí vừa náo nhiệt vừa lãng mạn, đậm tính nhân văn sâu sắc." 
            },
            { 
                title: " Lễ hội Khu Cù Tê (Người La Chí)", 
                content: "Lễ hội cầu mùa và tạ ơn tổ tiên sau vụ thu hoạch. Đây là dịp sinh hoạt cộng đồng lớn nhất của người La Chí với các điệu múa hát dân gian và nghi lễ tâm linh gắn liền với lịch sử của tộc người." 
            },
            { 
                title: " Lễ hội hoa Tam giác mạch", 
                content: "Tổ chức vào tháng 10–11 hàng năm để tôn vinh loài hoa biểu tượng của đá xám. Lễ hội quảng bá văn hóa địa phương qua các màn biểu diễn nghệ thuật, thi trang phục dân tộc và giới thiệu ẩm thực đặc trưng đến du khách quốc tế." 
            },
            { 
                title: "Ý nghĩa văn hóa đặc sắc", 
                content: "Các lễ hội Hà Giang không chỉ gắn liền với tín ngưỡng nông nghiệp mà còn là sợi dây gắn kết cộng đồng, bảo tồn tiếng nói, trang phục và nhạc cụ truyền thống, tạo nên điểm nhấn du lịch tâm linh đặc sắc cho vùng cao nguyên đá." 
            }
        ]
    },
   {
        id: 104,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Kiến trúc & Làng cổ",
        image: "images/nen-kientruc.jpg",
        desc: "Giữa cao nguyên đá hùng vĩ, kiến trúc truyền thống của các dân tộc Hà Giang không chỉ là nơi ở, mà còn là biểu tượng của lịch sử, tín ngưỡng và sự thích nghi kỳ diệu với thiên nhiên khắc nghiệt.",
        sections: [
            { 
                title: " Nhà trình tường – Biểu tượng của người Mông", 
                content: "Được xây bằng đất nện dày 40–60cm, giữ ấm mùa đông và mát vào mùa hè. Tường đất vàng nổi bật giữa nền đá xám tạo nên khung cảnh đặc trưng. Mái lợp ngói âm dương, sân nhà thường có hàng rào đá bao quanh bảo vệ gia súc và tạo thế phong thủy. Những ngôi nhà cổ đẹp nhất tập trung tại Phố cổ Đồng Văn với tuổi đời hơn 100 năm." 
            },
            { 
                title: " Nhà sàn của người Tày, Nùng", 
                content: "Sống ở thung lũng ven suối, người Tày và Nùng dựng nhà sàn bằng gỗ nghiến, gỗ lim chắc chắn, cao ráo để tránh ẩm thấp. Không gian sinh hoạt chia rõ rệt: gian thờ tổ tiên ở trung tâm, bếp lửa phía sau. Du khách có thể khám phá những làng nhà sàn cổ tại Làng văn hóa du lịch cộng đồng thôn Tha." 
            },
            { 
                title: " Làng đá – Kiến trúc hòa vào thiên nhiên", 
                content: "Ở vùng Cao nguyên đá Đồng Văn, người Mông tận dụng đá để xây tường rào, chuồng trại và nền nhà. Những bức tường đá xếp thủ công không cần chất kết dính nhưng vẫn bền vững hàng trăm năm. Làng Lô Lô Chải là minh chứng tiêu biểu với không gian yên bình ngay dưới chân cột cờ Lũng Cú." 
            },
            { 
                title: " Dinh thự cổ – Dấu ấn giao thoa văn hóa", 
                content: "Tiêu biểu là Dinh thự họ Vương (Dinh Vua Mèo) hơn 100 năm tuổi. Công trình mang phong cách pha trộn tinh tế giữa kiến trúc nhà Thanh (Trung Hoa), văn hóa người Mông và ảnh hưởng từ Pháp. Tường đá xanh cùng những chạm khắc tinh xảo thể hiện quyền lực của dòng họ Vương xưa." 
            },
            { 
                title: " Làng cổ – Những bảo tàng sống", 
                content: "Mỗi làng cổ là một câu chuyện về sự gắn bó giữa con người và núi đá. Đặc trưng bởi những cổng làng bằng đá xám, sân phơi ngô vàng rực mỗi mùa thu và bếp lửa hồng giữa nhà – trung tâm đời sống tinh thần gắn liền với lễ hội và chợ phiên vùng cao." 
            },
            { 
                title: " Trải nghiệm không gian kiến trúc", 
                content: "Đến Hà Giang không chỉ để ngắm nhìn mà để cảm nhận nhịp sống chậm rãi qua việc trải nghiệm homestay nhà trình tường, tham gia nện tường đất cùng đồng bào hoặc thưởng thức ẩm thực truyền thống bên bếp lửa giữa không gian kiến trúc nguyên bản." 
            }
        ]
    },
   {
        id: 105,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Văn hóa Lao động & Lịch sử",
        image: "images/nen-lichsu.jpg",
        desc: "Văn hóa lao động và lịch sử Hà Giang là vẻ đẹp của ý chí, của bàn tay bền bỉ và của những lớp trầm tích thời gian còn in dấu sâu đậm giữa đại ngàn đá núi.",
        sections: [
            { 
                title: " Canh tác trên đá – Kỳ tích người Mông", 
                content: "Tại Cao nguyên đá Đồng Văn, người Mông tạo nên kỳ tích khi gieo ngô trong từng hốc đá nhỏ. Đất được gùi từ thung lũng lên, bỏ vào kẽ đá để trồng trọt. Những nương ngô vàng óng mỗi mùa thu là minh chứng đanh thép cho ý chí chinh phục thiên nhiên khắc nghiệt của cư dân nơi đây." 
            },
            { 
                title: " Ruộng bậc thang – Dấu ấn sáng tạo", 
                content: "Các thửa ruộng tại Hoàng Su Phì được tạo dựng qua nhiều thế hệ người Dao, Nùng, La Chí. Họ đã biến những sườn núi dốc đứng thành những tầng lúa uốn lượn mềm mại. Đây không chỉ là phương thức sản xuất mà còn là những tác phẩm nghệ thuật khổng lồ từ bàn tay lao động." 
            },
            { 
                title: " Nghề thủ công & Sinh kế bản địa", 
                content: "Hệ thống tri thức dân gian thể hiện qua nghề dệt lanh, thêu sáp ong, làm giấy dó hay rèn nông cụ thủ công. Bên cạnh đó, việc chăn nuôi bò, ngựa, dê núi không chỉ là nguồn thu nhập mà còn là tài sản quý giá, biểu tượng cho sức sống gắn liền với núi đá Hà Giang." 
            },
            { 
                title: " Lịch sử cư trú & Dinh thự họ Vương", 
                content: "Hà Giang là nơi định cư hàng trăm năm của 22 dân tộc với lịch sử mở đất biên cương kiên cường. Trong đó, Dinh thự họ Vương (Dinh Vua Mèo) tại Sà Phìn là chứng tích lịch sử tiêu biểu đầu thế kỷ 20, gắn liền với sức ảnh hưởng của dòng họ Vương trên vùng cao nguyên này." 
            },
            { 
                title: " Biên cương kiên cường & Cách mạng", 
                content: "Giữ vị trí chiến lược quan trọng, Hà Giang ghi dấu lịch sử qua những cuộc kháng chiến bảo vệ Tổ quốc. Mỗi địa danh biên giới, mỗi con đường như đường Hạnh Phúc đều thấm đẫm mồ hôi, máu và tinh thần hy sinh giữ đất của quân và dân miền cực Bắc." 
            },
            { 
                title: " Di sản Công viên địa chất toàn cầu", 
                content: "Năm 2010, Cao nguyên đá Đồng Văn được UNESCO công nhận là Công viên địa chất toàn cầu. Giá trị này không chỉ nằm ở địa chất hàng triệu năm mà còn là minh chứng sống động cho lịch sử cư trú và khả năng thích nghi kỳ diệu của con người trên miền đá." 
            },
            { 
                title: "Giá trị trải nghiệm lịch sử", 
                content: "Du khách đến đây để chiêm ngưỡng mùa vàng Hoàng Su Phì, tham quan di tích Dinh Vua Mèo và lắng nghe những câu chuyện bảo vệ biên cương, để cảm nhận một vẻ đẹp lặng lẽ, bền bỉ nhưng đầy kiêu hãnh của con người Hà Giang." 
            }
        ]
    },
   {
        id: 106,
        isCultureTopic: true,
        category: "Văn hóa",
        name: "Ẩm thực truyền thống",
        image: "images/nen-amthuc.jpg",
        desc: "Ẩm thực Hà Giang không chỉ là món ăn, mà là kết tinh từ lao động, thiên nhiên và hơi thở nồng nàn của men đá vùng cao.",
        sections: [
            { 
                title: " Mèn mén – Linh hồn ẩm thực người Mông", 
                content: "Được làm từ ngô xay nhuyễn, hấp nhiều lần cho tơi và dẻo. Đây là món ăn chính trong bữa cơm của người Mông, thường dùng cùng canh rau hoặc thịt. Giản dị nhưng giàu năng lượng, mèn mén thể hiện rõ đời sống canh tác bền bỉ trên cao nguyên đá." 
            },
            { 
                title: " Thắng cố – Hương vị của chợ phiên", 
                content: "Món ăn truyền thống nức tiếng tại các phiên chợ vùng cao. Nước dùng được ninh từ xương và thịt, nêm gia vị đặc trưng núi rừng như thảo quả, địa liền, quế. Thắng cố ngon nhất khi ăn nóng bên bếp lửa hồng và nhâm nhi chén rượu ngô cay nồng." 
            },
            { 
                title: " Thịt trâu gác bếp – Đậm đà khói núi", 
                content: "Thịt trâu được ướp muối, gừng, ớt, mắc khén rồi treo trên gác bếp nhiều tháng. Thịt khô bên ngoài nhưng mềm ngọt bên trong, mang vị thơm đặc trưng của khói củi. Đây là món ăn không thể thiếu dịp lễ Tết và là món quà quý cho du khách." 
            },
            { 
                title: " Phở chua Hà Giang", 
                content: "Khác với phở nước truyền thống, phở chua có vị thanh mát từ nước sốt pha giấm nhẹ, ăn kèm thịt xá xíu, lạc rang và rau thơm. Món ăn mang đậm dấu ấn giao thoa văn hóa ẩm thực vùng biên, tạo nên hương vị lạ miệng đầy sức hút." 
            },
            { 
                title: " Cháo ấu tẩu – Món ăn của mùa đông", 
                content: "Được nấu từ củ ấu tẩu, gạo nếp và thịt băm. Vị hơi đắng nhẹ ban đầu, sau đó ngọt dần và rất ấm bụng. Người dân thường ăn vào buổi tối để bồi bổ sức khỏe và giữ ấm cơ thể giữa khí hậu lạnh giá của vùng cao." 
            },
            { 
                title: " Rượu ngô – Hơi thở của men đá", 
                content: "Nấu thủ công từ ngô địa phương và men lá truyền thống. Vị cay nồng nhưng êm, rượu ngô thường xuất hiện trong các dịp lễ hội, cưới hỏi hay khi tiếp khách quý, thể hiện lòng hiếu khách chân thành của con người Hà Giang." 
            },
            { 
                title: " Rau rừng & Đặc sản theo mùa", 
                content: "Ẩm thực nơi đây thuận theo tự nhiên với cải mèo, măng rừng, nấm hương đá hay hạt tam giác mạch dùng làm bánh. Mỗi mùa một thức, mộc mạc nhưng đậm đà bản sắc, hoàn toàn không phụ thuộc vào công nghiệp chế biến." 
            }
        ]
    }
]; 


// LOGIC MODAL (Xử lý 2 loại giao diện)



function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div onclick="openModal(${item.id})" class="cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div class="relative overflow-hidden h-60">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold shadow-xl tracking-widest">CHI TIẾT</div>
            </div>
            <div class="p-6">
                <span class="text-[10px] font-bold uppercase text-emerald-600 tracking-wider">${item.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3 text-emerald-900 uppercase">${item.name}</h3>
                <p class="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">${item.desc}</p>
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
    if(window.event && window.event.target && window.event.target.classList.contains('filter-btn')) {
        window.event.target.classList.add('bg-emerald-600', 'text-white');
    }

    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category.includes(category));
    displayDestinations(filtered);
}

const searchInput = document.getElementById('search-input');
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const kw = e.target.value.toLowerCase();
        const filtered = destinationsData.filter(d => d.name.toLowerCase().includes(kw) || d.desc.toLowerCase().includes(kw));
        displayDestinations(filtered);
    });
}

// . LOGIC MODAL


function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    if (item) {
        if (item.isCultureTopic) {
            // --- Giao diện Văn hóa (ID 101-106) ---
            content.innerHTML = `
                <div class="relative h-72 md:h-[450px]">
                    <img src="${item.image}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-6 text-white uppercase">
                        <div>
                             <span class="bg-orange-500 px-3 py-1 rounded text-xs font-bold mb-2 inline-block italic">Chuyên đề văn hóa</span>
                             <h2 class="text-4xl md:text-6xl font-bold tracking-tighter">${item.name}</h2>
                        </div>
                    </div>
                </div>
                <div class="p-8 md:p-16 space-y-12">
                    <div class="max-w-3xl mx-auto text-center"><p class="text-gray-600 text-xl italic">"${item.desc}"</p></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${item.sections.map(sec => `
                            <div class="bg-stone-50 p-8 rounded-3xl border-l-8 border-emerald-700 shadow-sm">
                                <h4 class="font-bold text-2xl text-emerald-900 mb-4 uppercase">${sec.title}</h4>
                                <p class="text-gray-600 leading-relaxed">${sec.content}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
        } else {
            // --- Giao diện Địa danh (ID 1-17) ---
            const food = item.food || {};
            const logistics = item.logistics || {};
            content.innerHTML = `
                <div class="relative h-72 md:h-[450px]">
                    <img src="${item.image}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 flex items-end p-6 md:p-12 text-white">
                        <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-tighter">${item.name}</h2>
                    </div>
                </div>
                <div class="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12 text-sm">
                    <div class="lg:col-span-2 space-y-10">
                        <section><h3 class="text-2xl font-bold border-l-8 border-orange-500 pl-4 mb-4 text-emerald-900 uppercase">Tổng quan</h3><p class="text-gray-700 leading-relaxed text-lg italic">"${item.experience || item.desc}"</p></section>
                        <section class="grid grid-cols-2 gap-4 bg-emerald-50 p-8 rounded-2xl font-bold uppercase text-emerald-800 text-xs">
                            <div><p>Giá vé: ${item.ticketPrice || 'Miễn phí'}</p><p>Thời gian: ${item.visitTime || 'Tự do'}</p></div>
                            <div><p>Mùa đẹp: ${item.bestSeason || 'Quanh năm'}</p><p>Di chuyển: ${item.transport || 'Xe máy'}</p></div>
                        </section>
                        <section><h3 class="text-2xl font-bold mb-4 text-emerald-900 uppercase">Vị trí địa lý</h3><iframe src="${item.locationMap}" class="w-full h-80 rounded-3xl border-0 shadow-lg" loading="lazy"></iframe></section>
                    </div>
                    <div class="lg:col-span-1 space-y-8">
                        <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-xl"><h3 class="text-xl font-bold mb-4 text-orange-400 uppercase font-bold">Lịch trình</h3><p>${logistics.itinerary2D || 'Đang cập nhật'}</p></div>
                        <div class="bg-orange-50 p-8 rounded-[40px] border border-orange-200"><h3 class="font-bold text-red-600 mb-2 italic underline italic">Lưu ý an toàn</h3><p class="text-xs text-gray-500">${logistics.safety || 'Đi chậm, quan sát đèo dốc.'}</p></div>
                    </div>
                </div>`;
        }
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if(modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

window.onclick = function(e) {
    if (e.target == document.getElementById('modal')) closeModal();
};

window.onload = () => {
    displayDestinations(destinationsData);
};




