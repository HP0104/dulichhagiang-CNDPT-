//  DỮ LIỆU CỦA KHU DU LỊCH  
const destinationsData = [
    {
        id: 1,
        name: "Đèo Mã Pí Lèng",
        category: "Cảnh quan",
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
        category: "Cảnh quan",
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
        details: "Cột cờ Lũng Cú là điểm cực Bắc thiêng liêng của Tổ quốc, nằm trên đỉnh núi Rồng thuộc xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang. Đây là nơi đánh dấu chủ quyền lãnh thổ Việt Nam, chỉ cách biên giới Việt – Trung khoảng 1–2 km.Cột cờ có chiều cao khoảng 33 mét, được xây dựng theo mô phỏng kiến trúc của Cột cờ Hà Nội, phần chân đế hình bát giác tượng trưng cho 8 mặt của đất nước. Trên đỉnh luôn tung bay lá cờ đỏ sao vàng rộng 54m² – biểu trưng cho 54 dân tộc anh em cùng sinh sống trên lãnh thổ Việt Nam.Để lên đến đỉnh cột cờ, du khách phải vượt qua hơn 800 bậc thang đá. Từ trên cao nhìn xuống, toàn cảnh cao nguyên đá Đồng Văn hiện ra hùng vĩ với những mái nhà trình tường của đồng bào Mông xen giữa núi đá tai mèo trùng điệp. Vào những ngày trời quang, bạn có thể phóng tầm mắt bao quát cả vùng biên viễn rộng lớn, cảm nhận rõ không khí thiêng liêng nơi địa đầu Tổ quốc.Ngày nay, Cột cờ Lũng Cú không chỉ là điểm tham quan nổi tiếng khi du lịch Hà Giang mà còn là biểu tượng của lòng tự hào dân tộc và tinh thần gìn giữ chủ quyền biên cương."
    },
    {
        id: 5,
        name: "Thung Lũng Sủng Là",
        category: "Cảnh quan",
        image: "images/nen-thunglungsungla.jpg",
        desc: "Nơi được chọn làm bối cảnh phim 'Chuyện của Pao', nổi tiếng với những cánh đồng hoa tam giác mạch tuyệt đẹp.",
        details: "Thung lũng Sủng Là được mệnh danh là “bông hoa giữa cao nguyên đá”, nằm trên Quốc lộ 4C thuộc huyện Đồng Văn, tỉnh Hà Giang. Đây là một trong những thung lũng đẹp và thơ mộng nhất của vùng Cao nguyên đá Đồng Văn.Khác với vẻ xám khô cằn của đá tai mèo bao quanh, Sủng Là nổi bật với những nếp nhà trình tường truyền thống của người Mông, Lô Lô, xen giữa vườn hoa tam giác mạch, cải vàng và đào mận mỗi độ xuân về. Vào mùa hoa (khoảng tháng 10–12), cả thung lũng như được phủ lên tấm thảm hồng tím dịu dàng, tạo nên khung cảnh vừa bình yên vừa lãng mạn.Nơi đây còn nổi tiếng với Nhà của Pao – bối cảnh chính trong bộ phim điện ảnh Chuyện của Pao, góp phần đưa hình ảnh Sủng Là đến gần hơn với du khách trong và ngoài nước.Đến Thung lũng Sủng Là, du khách không chỉ được chiêm ngưỡng cảnh sắc thiên nhiên mềm mại giữa núi đá hùng vĩ mà còn có cơ hội tìm hiểu văn hóa, phong tục và đời sống của đồng bào dân tộc vùng cao nguyên đá."
    },
    {
        id: 6,
        name: "Phố Cáo",
        category: "Văn hóa",
        image: "images/nen-phocao.jpg", 
        desc: "Nơi có những ngôi nhà trình tường cổ kính và những cánh đồng hoa tam giác mạch rực rỡ mỗi mùa lễ hội.",
        details: "Phố Cáo là một xã vùng cao thuộc huyện Đồng Văn, tỉnh Hà Giang, nằm trên cung đường từ Yên Minh đi Đồng Văn. Nơi đây nổi bật với vẻ đẹp mộc mạc, đậm chất văn hóa của đồng bào Mông giữa không gian cao nguyên đá hùng vĩ.Phố Cáo gây ấn tượng bởi những ngôi nhà trình tường bằng đất vàng đặc trưng, mái ngói âm dương phủ rêu phong và hàng rào đá xếp thủ công bao quanh. Mỗi độ xuân về, sắc hồng của hoa đào, sắc trắng của hoa mận nở rộ giữa nền đá xám tạo nên khung cảnh vừa rực rỡ vừa bình yên.Không sầm uất như thị trấn Đồng Văn, Phố Cáo giữ được nét nguyên sơ và chậm rãi. Đến đây, du khách có thể cảm nhận rõ đời sống sinh hoạt thường ngày của người dân vùng cao, từ những phiên chợ nhỏ đến hình ảnh trẻ em vui đùa bên bờ rào đá.Phố Cáo là điểm dừng chân lý tưởng cho những ai muốn khám phá vẻ đẹp chân thực và văn hóa truyền thống trên hành trình chinh phục cao nguyên đá Đồng Văn."
    },
    {
        id: 7,
        name: "Núi Đôi Quản Bạ",
        category: "Cảnh quan",
        image: "images/nen-nuidoiquanba.jpg",
        desc: "Tác phẩm nghệ thuật của thiên nhiên với hai ngọn núi tròn trịa, gắn liền với truyền tích về tình mẫu tử thiêng liêng.",
        details: "Núi Đôi Quản Bạ (còn gọi là Núi Cô Tiên) nằm tại thị trấn Tam Sơn, huyện Quản Bạ, tỉnh Hà Giang. Đây là một trong những biểu tượng du lịch nổi tiếng của vùng cửa ngõ cao nguyên đá Đồng Văn.Hai ngọn núi có hình dáng tròn đầy, cân đối nằm giữa thung lũng xanh mướt, nổi bật giữa khung cảnh núi đá tai mèo xung quanh. Nhìn từ xa, Núi Đôi mềm mại như hai quả đồi nhô lên giữa ruộng nương và làng bản, tạo nên vẻ đẹp vừa hùng vĩ vừa duyên dáng.Theo truyền thuyết dân gian, Núi Đôi gắn với câu chuyện tình giữa nàng tiên và chàng trai người H’Mông, vì thương con mà nàng để lại đôi bầu sữa nuôi con rồi bay về trời. Từ đó, hai ngọn núi được người dân gọi là Núi Cô Tiên.Thời điểm đẹp nhất để ngắm Núi Đôi là vào sáng sớm hoặc chiều muộn, khi ánh nắng nhẹ phủ lên thung lũng Tam Sơn, tạo nên bức tranh thiên nhiên yên bình và thơ mộng. Đây cũng là điểm dừng chân lý tưởng trên hành trình khám phá Hà Giang, trước khi tiếp tục đi sâu vào cao nguyên đá Đồng Văn."
    },
    {
        id: 8,
        name: "Làng Lô Lô Chải",
        category: "Văn hóa",
        image: "images/nen-langlolochai.jpg",
        desc: "Ngôi làng cổ nằm ngay dưới chân cột cờ Lũng Cú, nơi lưu giữ vẹn nguyên nét văn hóa của người Lô Lô đen.",
        details: "Làng Lô Lô Chải là ngôi làng nhỏ nằm ngay dưới chân Cột cờ Lũng Cú, thuộc xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang. Đây là nơi sinh sống lâu đời của đồng bào dân tộc Lô Lô, một trong những dân tộc thiểu số có dân số ít tại Việt Nam.Ngôi làng gây ấn tượng bởi những ngôi nhà trình tường bằng đất vàng, mái ngói âm dương cổ kính và những hàng rào đá xếp thủ công bao quanh từng sân nhà. Giữa không gian núi đá tai mèo trùng điệp, Lô Lô Chải hiện lên yên bình với sắc hoa tam giác mạch, hoa cải vàng nở rực theo mùa.Đến đây, du khách có thể trải nghiệm cuộc sống bản địa, tìm hiểu phong tục, trang phục truyền thống rực rỡ sắc màu của người Lô Lô và thưởng thức các món ăn đặc trưng vùng cao. Những năm gần đây, làng phát triển mô hình homestay nhưng vẫn giữ được nét mộc mạc, nguyên sơ.Lô Lô Chải không chỉ là điểm dừng chân đẹp trên hành trình khám phá cực Bắc, mà còn là nơi lưu giữ giá trị văn hóa đặc sắc giữa cao nguyên đá Đồng Văn hùng vĩ."
    },
    {
        id: 9,
        name: "Cao nguyên đá Đồng Văn",
        category: "Cảnh quan",
        image: "images/nen-caonguyendadongvan.jpg", 
        desc: "Miền đá xám kỳ vĩ giữa trời cực Bắc, nơi thiên nhiên hàng trăm triệu năm tuổi hòa cùng văn hóa bản địa đặc sắc",
        details: "Cao nguyên đá Đồng Văn là vùng núi đá vôi rộng lớn nằm ở cực Bắc tỉnh Hà Giang, trải dài qua bốn huyện Quản Bạ, Yên Minh, Đồng Văn và Mèo Vạc. Đây là một trong những khu vực địa chất đặc biệt nhất Việt Nam, được công nhận là Công viên Địa chất Toàn cầu UNESCO vào năm 2010.Cao nguyên đá có diện tích hơn 2.300 km², độ cao trung bình từ 1.000–1.600m so với mực nước biển. Nơi đây nổi bật với những dãy núi đá tai mèo sắc nhọn, thung lũng sâu, hẻm vực hiểm trở và hệ thống hang động hình thành cách đây hàng trăm triệu năm. Địa hình vừa hùng vĩ vừa khắc nghiệt đã tạo nên một cảnh quan độc đáo, khác biệt hoàn toàn so với các vùng núi khác ở Việt Nam.Không chỉ có giá trị địa chất, cao nguyên đá Đồng Văn còn là nơi sinh sống của nhiều dân tộc như Mông, Lô Lô, Dao, Tày… với bản sắc văn hóa phong phú. Những phiên chợ vùng cao, nhà trình tường đất vàng, hàng rào đá và lễ hội truyền thống đã góp phần tạo nên sức hút riêng cho vùng đất này.Một số điểm nổi bật thuộc cao nguyên đá gồm: Đèo Mã Pí Lèng, Sông Nho Quế, Dinh thự họ Vương và Cột cờ Lũng Cú.Ngày nay, Cao nguyên đá Đồng Văn không chỉ là điểm đến hấp dẫn của những người yêu thiên nhiên và khám phá mà còn là niềm tự hào về giá trị địa chất, lịch sử và văn hóa của vùng cực Bắc Việt Nam."
    },
    {
        id: 10,
        name: "Dốc Thẩm Mã",
        category: "Cảnh quan",
        image: "images/nen-docthamma.jpg", 
        desc: "Những khúc cua gắt liên tiếp thử thách tay lái, đưa du khách chạm đến vẻ đẹp hùng vĩ của vùng cao nguyên đá..",
        details: "Dốc Thẩm Mã là một trong những con dốc nổi tiếng và ấn tượng nhất trên cung đường Hà Giang – Đồng Văn, thuộc địa phận huyện Yên Minh, tỉnh Hà Giang.Con dốc có nhiều khúc cua tay áo uốn lượn liên tiếp giữa núi đá tai mèo, tạo nên hình ảnh ngoạn mục khi nhìn từ trên cao. Tên gọi “Thẩm Mã” bắt nguồn từ câu chuyện xưa: đây từng là nơi người dân dắt ngựa thồ hàng lên dốc để “thẩm” (kiểm tra) sức bền của ngựa; con nào vượt qua được mới đủ sức theo chủ đi tiếp những hành trình dài.Từ điểm cao của dốc, du khách có thể phóng tầm mắt ngắm toàn cảnh những cung đường quanh co như dải lụa giữa cao nguyên đá. Vào mùa hoa tam giác mạch hoặc mùa lúa chín, khung cảnh nơi đây càng thêm rực rỡ và sống động.Ngày nay, Dốc Thẩm Mã không chỉ là thử thách thú vị cho những ai chinh phục Hà Giang bằng xe máy, mà còn là điểm check-in nổi bật trên hành trình khám phá cao nguyên đá Đồng Văn."
    },
    {
        id: 11,
        name: "Phó Bảng",
        category: "Văn hóa",
        image: "images/nen-phobang.jpg", 
        desc: "Ẩn mình sau những dãy núi đá tai mèo, Phó Bảng mang vẻ đẹp yên bình với những ngôi nhà cổ phủ rêu phong, con đường nhỏ tĩnh lặng và nhịp sống chậm rãi của người dân vùng cao.",
        details: "Phó Bảng là một thị trấn nhỏ yên bình thuộc huyện Đồng Văn, tỉnh Hà Giang, nằm gần khu vực biên giới Việt – Trung. Nơi đây từng là trung tâm buôn bán sầm uất vào đầu thế kỷ XX, nhưng ngày nay lại mang vẻ trầm mặc và cổ kính hiếm có giữa cao nguyên đá.Phó Bảng gây ấn tượng với những ngôi nhà tường đất nhuốm màu thời gian, mái ngói âm dương phủ rêu phong và những khung cửa gỗ bạc màu. Kiến trúc nơi đây chịu ảnh hưởng của người Hoa và người Mông, tạo nên không gian vừa mộc mạc vừa hoài cổ.Khác với sự nhộn nhịp của thị trấn Đồng Văn, Phó Bảng gần như tách biệt, yên ả và chậm rãi. Những con đường nhỏ quanh co, hàng rào đá, giàn hoa giấy trước hiên nhà và khói bếp chiều tạo nên bức tranh bình dị giữa núi đá tai mèo hùng vĩ.Phó Bảng là điểm dừng chân lý tưởng cho những ai yêu thích vẻ đẹp trầm lắng, muốn tìm một góc nhỏ bình yên khi khám phá vùng cao nguyên đá Đồng Văn."
    },
    {
        id: 12,
        name: "Rừng thông Yên Minh",
        category: "Cảnh quan",
        image: "images/nen-rungthongyenminh.webp", 
        desc: "Những hàng thông cao vút trải dài theo triền núi, phủ sắc xanh dịu mát giữa đất trời Hà Giang, tạo nên khung cảnh yên bình và thơ mộng giữa hành trình chinh phục cao nguyên đá.",
        details: "Rừng thông Yên Minh nằm trên địa phận huyện Yên Minh, tỉnh Hà Giang, dọc theo Quốc lộ 4C trên hành trình từ Quản Bạ lên Đồng Văn. Đây được ví như “Đà Lạt thu nhỏ” giữa cao nguyên đá nhờ khí hậu mát mẻ và những triền thông xanh mướt trải dài.Khác với cảnh núi đá tai mèo đặc trưng của Hà Giang, rừng thông Yên Minh mang vẻ đẹp mềm mại và yên bình với những hàng thông cao vút, tán cây đung đưa trong gió. Con đường uốn lượn xuyên qua rừng tạo nên khung cảnh thơ mộng, đặc biệt vào buổi sáng sớm khi sương mù còn bao phủ.Vào những ngày nắng nhẹ, ánh sáng xuyên qua tán lá tạo nên bức tranh thiên nhiên trong trẻo và lãng mạn, rất thích hợp để dừng chân nghỉ ngơi, chụp ảnh hoặc tận hưởng không khí trong lành của vùng núi cao.Rừng thông Yên Minh không chỉ là điểm dừng chân lý tưởng trên cung đường khám phá cao nguyên đá Đồng Văn mà còn mang đến cảm giác thư thái, dịu dàng giữa hành trình chinh phục những cung đèo hùng vĩ của Hà Giang."
    },
    {
        id: 13,
        name: "Động Lùng Khúy",
        category: "Cảnh quan",
        image: "images/nen-donglungkhuy.jpg", 
        desc: "Ẩn mình giữa núi rừng Quản Bạ, Động Lùng Khúy mở ra không gian huyền bí với những khối nhũ đá muôn hình vạn trạng, lấp lánh dưới ánh đèn vàng, tạo nên khung cảnh vừa tráng lệ vừa mê hoặc..",
        details: "Động Lùng Khúy nằm tại xã Quản Bạ, huyện Quản Bạ, tỉnh Hà Giang. Đây được xem là một trong những hang động đẹp và tiêu biểu nhất của vùng Công viên Địa chất Cao nguyên đá Đồng Văn.Động được phát hiện và đưa vào khai thác du lịch từ năm 2015, nằm ở độ cao khoảng 1.000m so với mực nước biển. Để vào cửa hang, du khách phải đi bộ qua con đường nhỏ giữa rừng núi đá vôi, tạo cảm giác như bước vào một thế giới hoàn toàn khác biệt.Bên trong động là hệ thống thạch nhũ và măng đá được hình thành qua hàng triệu năm, với nhiều hình thù độc đáo như rèm đá, cột đá và khối nhũ lấp lánh. Ánh đèn chiếu sáng làm nổi bật vẻ đẹp huyền ảo, khiến không gian bên trong giống như một “cung điện dưới lòng đất”.Không chỉ có giá trị cảnh quan, Động Lùng Khúy còn mang ý nghĩa địa chất quan trọng, góp phần làm nên giá trị đặc biệt của cao nguyên đá Đồng Văn. Đây là điểm dừng chân hấp dẫn cho du khách yêu thích khám phá thiên nhiên khi đến Hà Giang."
    },
    {
        id: 14,
        name: "Cây cô đơn",
        category: "Cảnh quan",
        image: "images/nen-caycodon.jpg", 
        desc: "Một cây xanh lặng lẽ đứng giữa thung lũng rộng lớn, phía xa là núi đá trùng điệp, tạo nên khung cảnh vừa cô tịch vừa nên thơ – điểm dừng chân khiến ai đi qua cũng muốn chậm lại vài phút.",
        details: "Cây cô đơn Cây cô đơn Hà Giang là một điểm check-in nổi tiếng nằm trên cung đường từ Đồng Văn đi Mèo Vạc, gần khu vực Đèo Mã Pí Lèng, thuộc tỉnh Hà Giang. Giữa khung cảnh núi đá tai mèo trùng điệp và thung lũng rộng lớn, một cây xanh đứng đơn độc bên sườn núi đã tạo nên hình ảnh đặc biệt, vừa mạnh mẽ vừa lãng mạn. Chính sự tách biệt giữa không gian bao la khiến nơi đây được gọi là “Cây cô đơn”. Từ vị trí này, du khách có thể phóng tầm mắt ngắm nhìn những dãy núi nối tiếp nhau và con đường uốn lượn bên dưới. Vào sáng sớm hoặc chiều muộn, khi ánh nắng nhẹ phủ lên sườn núi, khung cảnh trở nên thơ mộng và rất thích hợp để chụp ảnh.Cây cô đơn không phải là một công trình nổi tiếng lâu đời, nhưng nhờ vẻ đẹp tự nhiên và vị trí ấn tượng giữa cao nguyên đá, nơi đây đã trở thành một biểu tượng nhỏ đầy cảm xúc trên hành trình khám phá Hà Giang."

    },
    {
        id: 15,
        name: "Vách Đá Thần",
        category: "Cảnh quan",
        image: "images/nen-vachdatuthan.jpeg", 
        desc: "Giữa mênh mang núi đá xám bạc, Vách Đá Thần sừng sững vươn cao như một bức tường thành tự nhiên, tạo nên khung cảnh kỳ vĩ và đầy cuốn hút giữa đất trời Hà Giang.",
        details: "Vách Đá Thần là một điểm check-in ấn tượng nằm trên cung đường từ Đồng Văn sang Mèo Vạc, thuộc tỉnh Hà Giang. Nơi đây nổi bật với vách núi đá vôi cao dựng đứng, sừng sững giữa khung cảnh cao nguyên đá hùng vĩ.Vách đá có bề mặt thẳng đứng, xám bạc theo thời gian, tạo cảm giác choáng ngợp khi đứng bên dưới. Nhìn từ xa, khối đá khổng lồ như một bức tường tự nhiên chắn ngang trời, thể hiện rõ nét đặc trưng địa chất hàng trăm triệu năm của vùng Cao nguyên đá Đồng Văn.Từ khu vực Vách Đá Thần, du khách có thể phóng tầm mắt ngắm những dãy núi trùng điệp và cung đường uốn lượn quanh sườn núi. Đây cũng là địa điểm được nhiều bạn trẻ yêu thích để chụp ảnh, đặc biệt vào những ngày trời trong xanh khi ánh nắng làm nổi bật màu đá xám đặc trưng.Vách Đá Thần không chỉ là điểm dừng chân trên hành trình khám phá Hà Giang mà còn là minh chứng sống động cho vẻ đẹp hoang sơ, mạnh mẽ của vùng cực Bắc Việt Nam."
    },
    {
        id: 16,
        name: "Hẻm Tu Sản",
        category: "Cảnh quan",
        image: "images/nen-hemtusan.jpg", 
        desc: "Giữa núi non trùng điệp của Hà Giang, Hẻm Tu Sản hiện lên kỳ vĩ với vách đá cao vút soi bóng xuống dòng sông xanh biếc, tạo nên khung cảnh vừa choáng ngợp vừa nên thơ.",
        details: "Hẻm Tu Sản là hẻm vực hùng vĩ nằm dưới chân Đèo Mã Pí Lèng, thuộc địa phận huyện Mèo Vạc, tỉnh Hà Giang. Đây được xem là hẻm vực sâu nhất Đông Nam Á và là một trong những cảnh quan ấn tượng nhất của Cao nguyên đá Đồng Văn.Hẻm Tu Sản được hình thành do quá trình kiến tạo địa chất và sự bào mòn của dòng Sông Nho Quế trong hàng triệu năm. Hai bên là vách đá dựng đứng cao tới 700–900m, kéo dài khoảng 1,7km, tạo nên khung cảnh vừa hùng vĩ vừa choáng ngợp. Từ trên đỉnh Mã Pí Lèng nhìn xuống, hẻm vực như một khe nứt khổng lồ giữa núi đá xám, bên dưới là dòng sông xanh ngọc uốn lượn mềm mại. Khi trải nghiệm đi thuyền trên sông Nho Quế, du khách có thể cảm nhận rõ sự kỳ vĩ của thiên nhiên khi đứng giữa những bức tường đá cao sừng sững bao quanh.Hẻm Tu Sản không chỉ mang giá trị địa chất đặc biệt mà còn là biểu tượng du lịch nổi bật của Hà Giang, thu hút những ai yêu thích khám phá và chinh phục vẻ đẹp hoang sơ nơi địa đầu Tổ quốc."
    },
    {
        id: 17,
        name: "Phố cổ Đồng Văn",
        category: "Văn hóa",
        image: "images/nen-phocodongvan.jpg", 
        desc: "Những mái ngói âm dương phủ rêu phong, bức tường vàng nhuốm màu thời gian và ánh đèn lồng lung linh khi đêm xuống tạo nên không gian vừa ấm áp vừa hoài niệm giữa thị trấn Đồng Văn..",
        details: "Phố cổ Đồng Văn Phố cổ Đồng Văn nằm ngay trung tâm thị trấn Đồng Văn, thuộc tỉnh Hà Giang. Đây là khu phố cổ có lịch sử hơn 100 năm, gắn liền với quá trình giao thương sầm uất của vùng cao nguyên đá đầu thế kỷ XX.Phố cổ hiện còn khoảng vài chục ngôi nhà mang kiến trúc truyền thống, chủ yếu được xây bằng đất trình tường, gỗ và mái ngói âm dương. Kiến trúc nơi đây là sự giao thoa giữa phong cách của người Mông, người Hoa và ảnh hưởng kiến trúc Pháp, tạo nên vẻ cổ kính, trầm mặc giữa núi đá xám. Khi đêm xuống, những chiếc đèn lồng đỏ được thắp sáng dọc theo dãy phố, khiến không gian trở nên ấm áp và hoài niệm. Đặc biệt, vào mỗi sáng Chủ nhật, chợ phiên Đồng Văn họp ngay gần khu phố cổ, mang đến không khí nhộn nhịp với sắc màu trang phục truyền thống của đồng bào vùng cao.Phố cổ Đồng Văn không chỉ là điểm tham quan nổi bật của cao nguyên đá mà còn là nơi lưu giữ dấu ấn lịch sử, văn hóa và nhịp sống đặc trưng của vùng cực Bắc Việt Nam."
    }

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
        btn.classList.replace('bg-emerald-600', 'bg-white');
        btn.classList.replace('text-white', 'text-gray-800');
    });
    if(event) {
        event.target.classList.add('bg-emerald-600', 'text-white');
    }

    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category === category);
    displayDestinations(filtered);
}

document.getElementById('search-input').addEventListener('input', (e) => {
    const kw = e.target.value.toLowerCase();
    const filtered = destinationsData.filter(d => d.name.toLowerCase().includes(kw) || d.desc.toLowerCase().includes(kw));
    displayDestinations(filtered);
});

window.onload = () => displayDestinations(destinationsData);

// ==========================================
// 3. LOGIC MODAL CHI TIẾT (YÊU CẦU CỦA BẠN)
// ==========================================

function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    if (item) {
        content.innerHTML = `
            <!-- Banner -->
            <div class="relative h-72 md:h-[450px]">
                <img src="${item.image}" class="w-full h-full object-cover" alt="${item.name}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 md:p-12">
                    <div>
                        <span class="bg-orange-500 text-white px-4 py-1 rounded-md text-sm font-bold mb-3 inline-block uppercase tracking-widest">${item.category}</span>
                        <h2 class="text-4xl md:text-6xl font-bold text-white uppercase">${item.name}</h2>
                    </div>
                </div>
            </div>

            <!-- Content Grid -->
            <div class="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Cột Trái (2/3) -->
                <div class="lg:col-span-2 space-y-12">
                    <!-- Kinh nghiệm & Thông tin chung -->
                    <section>
                        <h3 class="text-2xl font-bold text-emerald-900 border-l-8 border-orange-500 pl-4 mb-6 uppercase">Tổng quan & Kinh nghiệm</h3>
                        <p class="text-gray-700 text-lg leading-relaxed mb-8 italic">"${item.experience}"</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-ticket-alt text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase">Giá vé</p>
                                <p class="font-bold text-sm">${item.ticketPrice}</p>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-clock text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase">Thời gian</p>
                                <p class="font-bold text-sm">${item.visitTime}</p>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-sun text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase">Mùa đẹp nhất</p>
                                <p class="font-bold text-sm">${item.bestSeason}</p>
                            </div>
                            <div class="bg-emerald-50 p-4 rounded-xl text-center">
                                <i class="fas fa-motorcycle text-emerald-600 mb-2"></i>
                                <p class="text-xs text-gray-500 uppercase">Di chuyển</p>
                                <p class="font-bold text-sm">${item.transport}</p>
                            </div>
                        </div>
                    </section>

                    <!-- Văn hóa bản địa -->
                    <section class="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 class="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
                            <i class="fas fa-users-cog mr-3 text-orange-500"></i> Văn hóa & Phong tục
                        </h3>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-4 text-sm">
                                <p><b><i class="fas fa-calendar-check mr-2 text-emerald-600"></i>Lễ hội:</b> ${item.culture.festival}</p>
                                <p><b><i class="fas fa-tshirt mr-2 text-emerald-600"></i>Trang phục:</b> ${item.culture.costume}</p>
                            </div>
                            <div class="space-y-4 text-sm">
                                <p><b><i class="fas fa-hand-holding-heart mr-2 text-emerald-600"></i>Phong tục:</b> ${item.culture.customs}</p>
                                <p><b><i class="fas fa-music mr-2 text-emerald-600"></i>Nghệ thuật:</b> ${item.culture.art}</p>
                            </div>
                        </div>
                    </section>

                    <!-- Ẩm thực -->
                    <section>
                        <h3 class="text-2xl font-bold text-emerald-900 border-l-8 border-orange-500 pl-4 mb-6 uppercase">Ẩm thực đặc sắc</h3>
                        <div class="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <img src="${item.food.image}" class="w-full md:w-60 h-44 object-cover rounded-xl shadow-md">
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold text-emerald-800 mb-2">${item.food.name}</h4>
                                <p class="text-orange-600 font-bold text-lg mb-2"><i class="fas fa-tag mr-2"></i>${item.food.price}</p>
                                <p class="text-gray-600 leading-relaxed mb-4">Món ăn mang hương vị đặc trưng của núi rừng, là sự kết hợp tinh tế giữa nguyên liệu địa phương và gia vị bí truyền.</p>
                                <p class="text-sm font-semibold text-gray-500 bg-slate-100 p-3 rounded-lg"><i class="fas fa-map-marker-alt mr-2"></i>Ăn tại: ${item.food.location}</p>
                            </div>
                        </div>
                    </section>

                    <!-- Maps -->
                    <section>
                        <h3 class="text-2xl font-bold text-emerald-900 mb-6 uppercase">Vị trí địa lý</h3>
                        <iframe src="${item.locationMap}" class="w-full h-80 rounded-2xl shadow-inner border-0" loading="lazy"></iframe>
                    </section>
                </div>

                <!-- Cột Phải (1/3) -->
                <div class="lg:col-span-1 space-y-8">
                    <!-- Lịch trình -->
                    <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
                        <i class="fas fa-route absolute -bottom-10 -right-10 text-9xl opacity-10"></i>
                        <h3 class="text-2xl font-bold mb-6 border-b border-emerald-700 pb-4 text-orange-400">Gợi ý lịch trình</h3>
                        <div class="space-y-8 relative z-10">
                            <div>
                                <span class="bg-orange-500 text-xs px-2 py-1 rounded font-bold mb-2 inline-block">2 NGÀY / 3 ĐÊM</span>
                                <p class="text-sm leading-relaxed opacity-90">${item.logistics.itinerary2D}</p>
                            </div>
                            <div>
                                <span class="bg-emerald-500 text-xs px-2 py-1 rounded font-bold mb-2 inline-block">3 NGÀY / 4 ĐÊM</span>
                                <p class="text-sm leading-relaxed opacity-90">${item.logistics.itinerary3D}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Safety & Cost -->
                    <div class="bg-white p-8 rounded-[40px] border-2 border-slate-100 shadow-sm">
                        <h3 class="text-xl font-bold text-red-600 mb-4 flex items-center italic">
                            <i class="fas fa-biohazard mr-2"></i> Lưu ý an toàn
                        </h3>
                        <p class="text-sm text-gray-600 leading-loose mb-6">${item.logistics.safety}</p>
                        <div class="bg-orange-50 p-6 rounded-2xl">
                            <p class="text-xs text-orange-600 font-bold uppercase mb-1">Chi phí dự kiến</p>
                            <p class="text-2xl font-bold text-orange-700">${item.logistics.estimatedCost}</p>
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



