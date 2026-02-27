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
        details:

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
    },

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



