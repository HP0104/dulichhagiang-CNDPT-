  
//  DỮ LIỆU KHU DU LỊCH  
const destinationsData = [
{
id: 1, name: "Đèo Mã Pí Lèng", category: "Địa danh/Cảnh quan", lat: 23.2329, lng: 105.2787,
relatedCultureIds: [101,105],
cultureKeywords: [{ label: "Chợ phiên", linkId: 102 }, { label: "Ẩm thực", linkId: 106 }],
image: "images/nen-maphileng.jpg",
desc: "Đệ nhất hùng quan của vùng cao nguyên đá Hà Giang.",
visitTime: "Sáng sớm hoặc chiều tà", ticketPrice: "Miễn phí", transport: "Xe máy phượt", bestSeason: "Tháng 10 - 12",
locationMap: "https://www.google.com/maps?q=Ma+Pi+Leng+Ha+Giang&output=embed",
experience: "Dừng chân tại Panorama để ngắm hẻm Tu Sản.",
culture: { festival: "Lễ hội hoa Tam Giác Mạch", costume: "Trang phục người Mông", art: "Khèn Mông và múa khèn" },
food: { name: "Thắng Cố & Rượu Ngô", image: "images/mon-thangco.jpg", price: "100k - 200k", location: "Chợ phiên Đồng Văn" },
logistics: { itinerary2D: "Hà Giang - Đồng Văn - Mã Pí Lèng", safety: "Đường đèo dốc, cần tay lái vững.", estimatedCost: "2.500.000đ" }
},

{
id: 2, name: "Sông Nho Quế", category: "Địa danh/Cảnh quan", lat: 23.2305, lng: 105.2874,
relatedCultureIds: [101,105],
cultureKeywords: [{ label: "Văn hóa lao động", linkId: 105 }],
image: "images/nen-songnhoque.webp",
desc: "Dòng sông xanh ngọc nằm dưới hẻm vực Tu Sản.",
visitTime: "9h - 15h", ticketPrice: "150.000đ", transport: "Xe máy + thuyền", bestSeason: "Tháng 2 - 3",
locationMap: "https://www.google.com/maps?q=Song+Nho+Que&output=embed",
experience: "Đi thuyền ngắm hẻm Tu Sản và chụp ảnh.",
culture: { festival: "Lễ hội dân tộc ven sông", costume: "Trang phục Mông và Lô Lô", art: "Hát giao duyên" },
food: { name: "Cá suối nướng", image: "images/mon-canuong.jpg", price: "80k", location: "Bến thuyền Nho Quế" },
logistics: { itinerary2D: "Mã Pí Lèng - Nho Quế", safety: "Luôn mặc áo phao.", estimatedCost: "500.000đ" }
},

{
id: 3, name: "Dinh Thự Họ Vương", category: "Địa danh/Cảnh quan", lat: 23.1526, lng: 105.2343,
relatedCultureIds: [104,105],
cultureKeywords: [{ label: "Kiến trúc cổ", linkId: 104 }],
image: "images/nen-dinhthuvuameo.jpg",
desc: "Dinh thự cổ của Vua Mèo tại thung lũng Sà Phìn.",
visitTime: "8h - 17h", ticketPrice: "30.000đ", transport: "Xe máy hoặc ô tô", bestSeason: "Tháng 9 - 11",
locationMap: "https://www.google.com/maps?q=Dinh+thu+ho+Vuong+Ha+Giang&output=embed",
experience: "Khám phá kiến trúc nhà cổ và lịch sử dòng họ Vương.",
culture: { festival: "Lễ hội người Mông", costume: "Trang phục Mông", art: "Kiến trúc giao thoa Á - Âu" },
food: { name: "Thắng Dền", image: "images/mon-thangden.jpg", price: "20k - 50k", location: "Chợ Sà Phìn" },
logistics: { itinerary2D: "Đồng Văn - Dinh họ Vương", safety: "Giữ gìn hiện vật cổ.", estimatedCost: "1.500.000đ" }
},

{
id: 4, name: "Cột Cờ Lũng Cú", category: "Địa danh/Cảnh quan", lat: 23.3784, lng: 105.3139,
relatedCultureIds: [101,105],
cultureKeywords: [{ label: "Lịch sử biên cương", linkId: 105 }],
image: "images/nen-cotcolngcu.jpg",
desc: "Điểm cực Bắc thiêng liêng của Việt Nam.",
visitTime: "7h - 17h", ticketPrice: "25.000đ", transport: "Xe máy hoặc ô tô", bestSeason: "Tháng 9 - 11",
locationMap: "https://www.google.com/maps?q=Cot+Co+Lung+Cu&output=embed",
experience: "Leo hơn 800 bậc thang để ngắm toàn cảnh cực Bắc.",
culture: { festival: "Lễ chào cờ", costume: "Trang phục Lô Lô và Mông", art: "Kiến trúc cột cờ bát giác" },
food: { name: "Thịt gác bếp", image: "images/mon-tamgiacmach.jpg", price: "50k - 150k", location: "Xã Lũng Cú" },
logistics: { itinerary2D: "Đồng Văn - Lũng Cú", safety: "Mang giày chống trượt.", estimatedCost: "1.500.000đ" }
},

{
id: 5, name: "Thung Lũng Sủng Là", category: "Địa danh/Cảnh quan", lat: 23.1567, lng: 105.2148,
relatedCultureIds: [101,103,104],
cultureKeywords: [{ label: "Lễ hội", linkId: 103 }],
image: "images/nen-thunglungsungla.jpg",
desc: "Thung lũng nổi tiếng với hoa tam giác mạch và Nhà của Pao.",
visitTime: "6h30 - 17h30", ticketPrice: "20k - 30k", transport: "Xe máy", bestSeason: "Tháng 10 - 12",
locationMap: "https://www.google.com/maps?q=Thung+Lung+Sung+La&output=embed",
experience: "Chụp ảnh vườn hoa và tham quan Nhà của Pao.",
culture: { festival: "Lễ hội Tam Giác Mạch", costume: "Trang phục Mông", art: "Kiến trúc nhà trình tường" },
food: { name: "Bánh Tam Giác Mạch", image: "images/mon-menmen.jpg", price: "20k - 80k", location: "Sủng Là" },
logistics: { itinerary2D: "Sủng Là - Lũng Cú", safety: "Không dẫm lên hoa.", estimatedCost: "2.000.000đ" }
},
  {
id: 6, name: "Phố Cáo", category: "Làng văn hóa", lat: 23.1495, lng: 105.2002,
relatedCultureIds: [101,104],
cultureKeywords: [{ label: "Nhà trình tường", linkId: 104 }],
image: "images/nen-phocao.jpg",
desc: "Ngôi làng cổ nổi bật với những ngôi nhà trình tường của người Mông.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy", bestSeason: "Tháng 9 - 12",
locationMap: "https://www.google.com/maps?q=Pho+Cao+Ha+Giang&output=embed",
experience: "Dạo quanh làng và khám phá kiến trúc nhà đất truyền thống.",
culture: { festival: "Chợ phiên vùng cao", costume: "Trang phục người Mông", art: "Nhà trình tường truyền thống" },
food: { name: "Mèn mén", image: "images/mon-menmen.jpg", price: "30k - 70k", location: "Chợ Phố Cáo" },
logistics: { itinerary2D: "Đồng Văn - Phố Cáo", safety: "Đường làng nhỏ, đi chậm.", estimatedCost: "1.500.000đ" }
},

{
id: 7, name: "Núi Đôi Quản Bạ", category: "Địa danh/Cảnh quan", lat: 23.0547, lng: 104.9892,
relatedCultureIds: [101],
cultureKeywords: [{ label: "Truyền thuyết địa phương", linkId: 101 }],
image: "images/nen-nuidoi.jpg",
desc: "Danh thắng nổi tiếng gắn với truyền thuyết Núi Đôi.",
visitTime: "6h - 18h", ticketPrice: "Miễn phí", transport: "Xe máy hoặc ô tô", bestSeason: "Tháng 9 - 11",
locationMap: "https://www.google.com/maps?q=Nui+Doi+Quan+Ba&output=embed",
experience: "Ngắm toàn cảnh thung lũng Tam Sơn từ cổng trời.",
culture: { festival: "Lễ hội địa phương", costume: "Trang phục Dao", art: "Truyền thuyết Núi Đôi" },
food: { name: "Phở Tráng Kìm", image: "images/mon-photrankim.jpg", price: "40k - 60k", location: "Quản Bạ" },
logistics: { itinerary2D: "Hà Giang - Quản Bạ", safety: "Đèo dốc nhiều khúc cua.", estimatedCost: "1.200.000đ" }
},

{
id: 8, name: "Làng Lô Lô Chải", category: "Làng văn hóa", lat: 23.3731, lng: 105.3131,
relatedCultureIds: [101,104,105],
cultureKeywords: [{ label: "Văn hóa Lô Lô", linkId: 101 }],
image: "images/nen-lolochai.jpg",
desc: "Ngôi làng cổ của dân tộc Lô Lô gần Cột Cờ Lũng Cú.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy", bestSeason: "Tháng 9 - 12",
locationMap: "https://www.google.com/maps?q=Lo+Lo+Chai+Ha+Giang&output=embed",
experience: "Ở homestay và trải nghiệm đời sống người Lô Lô.",
culture: { festival: "Lễ hội trống đồng Lô Lô", costume: "Trang phục Lô Lô rực rỡ", art: "Trống đồng Lô Lô" },
food: { name: "Thịt gác bếp", image: "images/mon-thitgacbep.jpg", price: "100k - 200k", location: "Homestay Lô Lô Chải" },
logistics: { itinerary2D: "Đồng Văn - Lũng Cú - Lô Lô Chải", safety: "Tôn trọng văn hóa bản địa.", estimatedCost: "2.000.000đ" }
},

{
id: 9, name: "Cao Nguyên Đá Đồng Văn", category: "Địa danh/Cảnh quan", lat: 23.2710, lng: 105.2800,
relatedCultureIds: [101,103,105],
cultureKeywords: [{ label: "Công viên địa chất", linkId: 105 }],
image: "images/nen-caonguyenda.jpg",
desc: "Công viên địa chất toàn cầu UNESCO nổi tiếng với cảnh quan đá vôi.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy hoặc ô tô", bestSeason: "Tháng 10 - 12",
locationMap: "https://www.google.com/maps?q=Cao+Nguyen+Da+Dong+Van&output=embed",
experience: "Khám phá những dãy núi đá tai mèo hùng vĩ.",
culture: { festival: "Lễ hội hoa Tam Giác Mạch", costume: "Trang phục dân tộc vùng cao", art: "Văn hóa cao nguyên đá" },
food: { name: "Cháo Ấu Tẩu", image: "images/mon-autau.jpg", price: "40k - 70k", location: "Thị trấn Đồng Văn" },
logistics: { itinerary2D: "Hà Giang - Đồng Văn - Mèo Vạc", safety: "Chuẩn bị áo ấm.", estimatedCost: "3.000.000đ" }
},

{
id: 10, name: "Dốc Thẩm Mã", category: "Địa danh/Cảnh quan", lat: 23.1522, lng: 105.1906,
relatedCultureIds: [101],
cultureKeywords: [{ label: "Con đường lịch sử", linkId: 101 }],
image: "images/nen-docthamma.jpg",
desc: "Con dốc nổi tiếng với những khúc cua tay áo đặc trưng.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy", bestSeason: "Tháng 9 - 11",
locationMap: "https://www.google.com/maps?q=Doc+Tham+Ma&output=embed",
experience: "Chụp ảnh cung đường uốn lượn từ trên cao.",
culture: { festival: "Chợ phiên vùng cao", costume: "Trang phục người Mông", art: "Văn hóa đường đèo" },
food: { name: "Bánh Tam Giác Mạch", image: "images/mon-banhtamgiacmach.jpg", price: "20k - 40k", location: "Ven đường" },
logistics: { itinerary2D: "Yên Minh - Đồng Văn", safety: "Đi chậm khi vào cua.", estimatedCost: "1.500.000đ" }
},

{
id: 11, name: "Phó Bảng", category: "Làng cổ", lat: 23.1375, lng: 105.1704,
relatedCultureIds: [101,104],
cultureKeywords: [{ label: "Làng cổ", linkId: 104 }],
image: "images/nen-phobang.jpg",
desc: "Thị trấn cổ yên bình với những ngôi nhà đất đặc trưng.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy", bestSeason: "Tháng 9 - 11",
locationMap: "https://www.google.com/maps?q=Pho+Bang+Ha+Giang&output=embed",
experience: "Khám phá thị trấn cổ và cuộc sống bình dị.",
culture: { festival: "Chợ phiên Phó Bảng", costume: "Trang phục Hoa và Mông", art: "Kiến trúc nhà cổ" },
food: { name: "Lạp xưởng gác bếp", image: "images/mon-lapxuong.jpg", price: "100k", location: "Chợ Phó Bảng" },
logistics: { itinerary2D: "Đồng Văn - Phó Bảng", safety: "Đường nhỏ quanh co.", estimatedCost: "1.800.000đ" }
},
   {
id: 12, name: "Chợ Phiên Đồng Văn", category: "Văn hóa", lat: 23.2793, lng: 105.3625,
relatedCultureIds: [102,106],
cultureKeywords: [{ label: "Chợ phiên", linkId: 102 }, { label: "Ẩm thực", linkId: 106 }],
image: "images/nen-chodongvan.jpg",
desc: "Phiên chợ vùng cao nổi tiếng nơi giao thương của nhiều dân tộc.",
visitTime: "Chủ nhật 5h - 12h", ticketPrice: "Miễn phí", transport: "Xe máy hoặc đi bộ", bestSeason: "Quanh năm",
locationMap: "https://www.google.com/maps?q=Cho+Dong+Van&output=embed",
experience: "Tham quan chợ, thưởng thức ẩm thực và mua đặc sản.",
culture: { festival: "Chợ phiên truyền thống", costume: "Trang phục Mông, Dao, Lô Lô", art: "Âm nhạc khèn Mông" },
food: { name: "Thắng Cố", image: "images/mon-thangco.jpg", price: "50k - 100k", location: "Chợ Đồng Văn" },
logistics: { itinerary2D: "Phố cổ Đồng Văn - Chợ Đồng Văn", safety: "Cẩn thận đông người.", estimatedCost: "500.000đ" }
},

{
id: 13, name: "Phố Cổ Đồng Văn", category: "Làng cổ", lat: 23.2798, lng: 105.3629,
relatedCultureIds: [104,106],
cultureKeywords: [{ label: "Kiến trúc cổ", linkId: 104 }],
image: "images/nen-phocodongvan.jpg",
desc: "Khu phố cổ hơn 100 năm tuổi với kiến trúc đặc trưng vùng cao.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Đi bộ", bestSeason: "Tháng 10 - 12",
locationMap: "https://www.google.com/maps?q=Pho+Co+Dong+Van&output=embed",
experience: "Uống cà phê phố cổ và chụp ảnh nhà cổ.",
culture: { festival: "Đêm phố cổ Đồng Văn", costume: "Trang phục truyền thống", art: "Nhà cổ mái ngói âm dương" },
food: { name: "Bánh cuốn Đồng Văn", image: "images/mon-banhcuon.jpg", price: "30k - 50k", location: "Phố cổ Đồng Văn" },
logistics: { itinerary2D: "Thị trấn Đồng Văn", safety: "Giữ gìn kiến trúc cổ.", estimatedCost: "1.200.000đ" }
},

{
id: 14, name: "Rừng Thông Yên Minh", category: "Địa danh/Cảnh quan", lat: 23.0977, lng: 105.1756,
relatedCultureIds: [101],
cultureKeywords: [{ label: "Thiên nhiên", linkId: 101 }],
image: "images/nen-rungthongyenminh.jpg",
desc: "Khu rừng thông được ví như 'Đà Lạt của Hà Giang'.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy", bestSeason: "Tháng 9 - 11",
locationMap: "https://www.google.com/maps?q=Rung+Thong+Yen+Minh&output=embed",
experience: "Check-in rừng thông và tận hưởng không khí mát mẻ.",
culture: { festival: "Lễ hội địa phương", costume: "Trang phục Dao", art: "Văn hóa vùng cao" },
food: { name: "Thịt nướng", image: "images/mon-thitnuong.jpg", price: "50k - 100k", location: "Yên Minh" },
logistics: { itinerary2D: "Quản Bạ - Yên Minh", safety: "Đường đèo nhiều sương.", estimatedCost: "1.500.000đ" }
},

{
id: 15, name: "Hang Lùng Khúy", category: "Địa danh/Cảnh quan", lat: 23.0528, lng: 104.9913,
relatedCultureIds: [101,105],
cultureKeywords: [{ label: "Danh thắng tự nhiên", linkId: 101 }],
image: "images/nen-hanglungkhuy.jpg",
desc: "Hang động nổi tiếng với hệ thống nhũ đá tuyệt đẹp.",
visitTime: "8h - 17h", ticketPrice: "50.000đ", transport: "Xe máy + đi bộ", bestSeason: "Quanh năm",
locationMap: "https://www.google.com/maps?q=Hang+Lung+Khuy&output=embed",
experience: "Khám phá hang động và chụp ảnh nhũ đá.",
culture: { festival: "Sinh hoạt văn hóa địa phương", costume: "Trang phục Dao", art: "Truyền thuyết hang động" },
food: { name: "Phở Tráng Kìm", image: "images/mon-photrankim.jpg", price: "40k", location: "Quản Bạ" },
logistics: { itinerary2D: "Quản Bạ - Lùng Khúy", safety: "Mang giày chống trượt.", estimatedCost: "1.200.000đ" }
},

{
id: 16, name: "Hoàng Su Phì", category: "Địa danh/Cảnh quan", lat: 22.7547, lng: 104.6753,
relatedCultureIds: [101,103,105],
cultureKeywords: [{ label: "Ruộng bậc thang", linkId: 101 }],
image: "images/nen-hoangsuphi.jpg",
desc: "Danh thắng nổi tiếng với ruộng bậc thang tuyệt đẹp.",
visitTime: "Cả ngày", ticketPrice: "Miễn phí", transport: "Xe máy hoặc ô tô", bestSeason: "Tháng 9 - 10",
locationMap: "https://www.google.com/maps?q=Hoang+Su+Phi&output=embed",
experience: "Ngắm mùa lúa chín trên ruộng bậc thang.",
culture: { festival: "Lễ hội lúa mới", costume: "Trang phục Dao và Nùng", art: "Canh tác ruộng bậc thang" },
food: { name: "Cơm lam", image: "images/mon-comlam.jpg", price: "30k - 60k", location: "Hoàng Su Phì" },
logistics: { itinerary2D: "Hà Giang - Hoàng Su Phì", safety: "Đường núi xa, chuẩn bị xăng.", estimatedCost: "3.000.000đ" }
},

{
id: 17, name: "Thác Tiên - Đèo Gió", category: "Địa danh/Cảnh quan", lat: 22.7579, lng: 104.6864,
relatedCultureIds: [101],
cultureKeywords: [{ label: "Danh thắng thiên nhiên", linkId: 101 }],
image: "images/nen-thactien.jpg",
desc: "Thác nước đẹp nằm gần Hoàng Su Phì.",
visitTime: "7h - 17h", ticketPrice: "30.000đ", transport: "Xe máy + đi bộ", bestSeason: "Tháng 5 - 10",
locationMap: "https://www.google.com/maps?q=Thac+Tien+Deo+Gio&output=embed",
experience: "Trekking và tắm suối dưới chân thác.",
culture: { festival: "Lễ hội dân tộc vùng cao", costume: "Trang phục Dao đỏ", art: "Văn hóa núi rừng" },
food: { name: "Gà nướng", image: "images/mon-ganuong.jpg", price: "150k", location: "Hoàng Su Phì" },
logistics: { itinerary2D: "Hoàng Su Phì - Thác Tiên", safety: "Đường trơn sau mưa.", estimatedCost: "2.000.000đ" }
},
  
 const cultureData = [
{
id: 101, isCultureTopic: true, category: "Văn hóa", name: "Văn hóa các dân tộc thiểu số", image: "images/nen-dantoc.jpg",
desc: "Hà Giang có 22 dân tộc với bản sắc văn hóa đa dạng về trang phục, lễ hội và kiến trúc.",
sections: [
{ title: "Người Mông", content: "Nhà trình tường đất, váy thêu sáp ong và tiếng khèn trong lễ hội Gầu Tào." },
{ title: "Người Tày", content: "Nhà sàn gỗ, trồng lúa nước và hát then với đàn tính." },
{ title: "Người Dao", content: "Trang phục đỏ thêu tay và nghi lễ cấp sắc đánh dấu trưởng thành." },
{ title: "Người Nùng", content: "Gắn với lúa nước, nghề rèn và làn điệu hát sli, lượn." },
{ title: "Người Lô Lô", content: "Trang phục ghép vải nhiều màu và văn hóa trống đồng cổ." },
{ title: "Người Pà Thẻn", content: "Nổi tiếng với lễ hội Nhảy lửa và trang phục màu đỏ." },
{ title: "Người La Chí", content: "Ruộng bậc thang Hoàng Su Phì và lễ hội Khu Cù Tê." },
{ title: "Người Cờ Lao", content: "Duy trì tín ngưỡng thờ thần núi và lễ nghi cộng đồng." },
{ title: "Người Pu Péo", content: "Tín ngưỡng thờ thần đá và đời sống gắn với thiên nhiên." },
{ title: "Người Bố Y", content: "Làm nông nghiệp và duy trì lễ hội cầu mùa." },
{ title: "Người Phù Lá", content: "Canh tác nương rẫy, trang phục chàm truyền thống." },
{ title: "Người La Ha", content: "Sinh sống bằng nương rẫy và nghi lễ nông nghiệp cổ." },
{ title: "Người Sán Chỉ", content: "Nổi bật với hát soóng cọ giao duyên." },
{ title: "Người Cao Lan", content: "Hát đối đáp trong lễ hội và văn hóa lúa nước." },
{ title: "Người Hoa", content: "Truyền thống kinh doanh và kiến trúc phố cổ." },
{ title: "Người Kinh", content: "Giao thoa văn hóa đồng bằng và miền núi." },
{ title: "Người Thái", content: "Nhà sàn, múa xòe và ẩm thực đặc sắc." },
{ title: "Người Mường", content: "Văn hóa cồng chiêng và đời sống nhà sàn." },
{ title: "Người Giấy", content: "Trồng lúa nước và lễ hội cầu mùa đầu năm." },
{ title: "Người Ngái", content: "Nguồn gốc Hoa và sinh kế buôn bán nhỏ." },
{ title: "Người Khơ Mú", content: "Làm nương rẫy và tín ngưỡng tự nhiên." },
{ title: "Người Hán", content: "Duy trì phong tục thờ cúng tổ tiên." }
]
},

{
id: 102, isCultureTopic: true, category: "Văn hóa", name: "Văn hóa Chợ phiên vùng cao", image: "images/nen-phiencho.jpg",
desc: "Chợ phiên là nơi mua bán và giao lưu văn hóa của các dân tộc Hà Giang.",
sections: [
{ title: "Thời gian họp chợ", content: "Chợ họp theo phiên hoặc chợ lùi mỗi tuần." },
{ title: "Không gian giao lưu", content: "Nơi gặp gỡ, giao duyên và kết nối cộng đồng." },
{ title: "Trang phục dân tộc", content: "Váy thêu Mông, áo đỏ Dao và trang phục Lô Lô." },
{ title: "Ẩm thực chợ phiên", content: "Thắng cố, mèn mén, cháo ấu tẩu và rượu ngô." },
{ title: "Hàng hóa địa phương", content: "Nông sản, gia súc và đồ thủ công thổ cẩm." },
{ title: "Âm nhạc truyền thống", content: "Tiếng khèn Mông và không khí chợ rộn ràng." },
{ title: "Giá trị văn hóa", content: "Góp phần bảo tồn bản sắc của 22 dân tộc." }
]
},

{
id: 103, isCultureTopic: true, category: "Văn hóa", name: "Lễ hội truyền thống", image: "images/nen-lehoitruynthong.jpg",
desc: "Những lễ hội đặc sắc phản ánh tín ngưỡng và đời sống tinh thần của người dân Hà Giang.",
sections: [
{ title: "Gầu Tào", content: "Lễ hội người Mông cầu phúc, sức khỏe và may mắn." },
{ title: "Lồng Tồng", content: "Lễ xuống đồng của người Tày cầu mùa bội thu." },
{ title: "Nhảy lửa", content: "Nghi lễ tâm linh đặc sắc của người Pà Thẻn." },
{ title: "Cấp sắc", content: "Nghi lễ trưởng thành của nam giới người Dao." },
{ title: "Chợ tình Khâu Vai", content: "Nơi gặp lại của những đôi lứa xưa." },
{ title: "Khu Cù Tê", content: "Lễ hội cầu mùa của người La Chí." },
{ title: "Hoa Tam giác mạch", content: "Lễ hội du lịch tôn vinh loài hoa đặc trưng." }
]
},

{
id: 104, isCultureTopic: true, category: "Văn hóa", name: "Kiến trúc & Làng cổ", image: "images/nen-kientruc.jpg",
desc: "Kiến trúc truyền thống phản ánh lịch sử và cách thích nghi với thiên nhiên.",
sections: [
{ title: "Nhà trình tường", content: "Nhà đất dày của người Mông giữ ấm và bền chắc." },
{ title: "Nhà sàn", content: "Kiến trúc gỗ của người Tày và Nùng ở vùng thung lũng." },
{ title: "Làng đá", content: "Những bức tường đá thủ công của cao nguyên đá." },
{ title: "Dinh thự họ Vương", content: "Công trình hơn 100 năm mang phong cách giao thoa." },
{ title: "Làng cổ", content: "Không gian sống gắn với sân phơi ngô và bếp lửa." },
{ title: "Trải nghiệm homestay", content: "Du khách sống cùng người dân trong nhà truyền thống." }
]
},

{
id: 105, isCultureTopic: true, category: "Văn hóa", name: "Văn hóa Lao động & Lịch sử", image: "images/nen-vanhoalichsu.jpg",
desc: "Thể hiện ý chí lao động bền bỉ và lịch sử cư trú của cư dân vùng cao.",
sections: [
{ title: "Canh tác trên đá", content: "Người Mông trồng ngô trong hốc đá cao nguyên." },
{ title: "Ruộng bậc thang", content: "Kiệt tác nông nghiệp ở Hoàng Su Phì." },
{ title: "Nghề thủ công", content: "Dệt lanh, thêu sáp ong và rèn nông cụ." },
{ title: "Dinh thự họ Vương", content: "Di tích lịch sử nổi tiếng đầu thế kỷ 20." },
{ title: "Biên cương kiên cường", content: "Lịch sử bảo vệ biên giới của người dân Hà Giang." },
{ title: "Công viên địa chất", content: "Cao nguyên đá Đồng Văn được UNESCO công nhận." }
]
},

{
id: 106, isCultureTopic: true, category: "Văn hóa", name: "Ẩm thực truyền thống", image: "images/nen-amthuc.jpg",
desc: "Ẩm thực Hà Giang mang hương vị núi rừng đặc trưng.",
sections: [
{ title: "Mèn mén", content: "Món ăn từ ngô đặc trưng của người Mông." },
{ title: "Thắng cố", content: "Món ăn nổi tiếng tại các phiên chợ vùng cao." },
{ title: "Thịt trâu gác bếp", content: "Thịt hun khói với gia vị mắc khén." },
{ title: "Phở chua", content: "Phở khô với nước sốt chua thanh." },
{ title: "Cháo ấu tẩu", content: "Món ăn bổ dưỡng thường dùng buổi tối." },
{ title: "Rượu ngô", content: "Rượu truyền thống nấu từ ngô và men lá." },
{ title: "Rau rừng", content: "Các loại rau và đặc sản theo mùa vùng núi." }
]
}
];; 
[
{ id: 102, isCultureTopic: true, category: "Văn hóa", name: "Văn hóa Chợ phiên vùng cao", image: "images/nen-chophien.jpg", desc: "Giao lưu, hò hẹn đặc trưng.", sections: [] },
    { id: 103, isCultureTopic: true, category: "Văn hóa", name: "Lễ hội truyền thống", image: "images/nen-lehoi.jpg", desc: "Nghi lễ tâm linh.", sections: [] },
    { id: 104, isCultureTopic: true, category: "Văn hóa", name: "Kiến trúc & Làng cổ", image: "images/nen-kientruc.jpg", desc: "Nhà trình tường, mái ngói âm dương.", sections: [] },
    { id: 105, isCultureTopic: true, category: "Văn hóa", name: "Văn hóa Lao động", image: "images/nen-lichsu.jpg", desc: "Canh tác trên đá.", sections: [] },
    { id: 106, isCultureTopic: true, category: "Văn hóa", name: "Ẩm thực truyền thống", image: "images/nen-amthuc.jpg", desc: "Thắng cố, mèn mén.", sections: [] }
];
const culturePillars = [
    { name: "Chợ phiên", icon: "fa-store", color: "bg-orange-100 text-orange-600" },
    { name: "Lễ hội", icon: "fa-fire", color: "bg-red-100 text-red-600" },
    { name: "Kiến trúc", icon: "fa-home", color: "bg-amber-100 text-amber-600" },
    { name: "Trang phục", icon: "fa-tshirt", color: "bg-pink-100 text-pink-600" },
    { name: "Nhạc cụ", icon: "fa-music", color: "bg-blue-100 text-blue-600" },
    { name: "Ẩm thực", icon: "fa-utensils", color: "bg-emerald-100 text-emerald-600" },
    { name: "Canh tác", icon: "fa-seedling", color: "bg-green-100 text-green-600" }
];


function displayDestinations(items) {
    const grid = document.getElementById('destination-grid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100 relative text-slate-800">
            ${!item.isCultureTopic ? `<button onclick="addToTrip(${item.id})" class="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur text-emerald-700 w-10 h-10 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"><i class="fas fa-plus"></i></button>` : ''}
            <div onclick="openModal(${item.id})" class="cursor-pointer">
                <div class="relative h-60 overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute bottom-3 left-3 flex flex-wrap gap-2 z-20">
                        ${(item.cultureKeywords || []).map(kw => `<span onclick="event.stopPropagation(); openModal(${kw.linkId})" class="bg-emerald-600/90 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded font-bold hover:bg-orange-500 transition shadow-lg"># ${kw.label}</span>`).join('')}
                    </div>
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold tracking-widest uppercase text-xs">Chi tiết</div>
                </div>
                <div class="p-6">
                    <span class="text-[10px] font-bold uppercase text-emerald-600 tracking-wider">${item.category}</span>
                    <h3 class="text-xl font-bold mt-2 mb-3 text-emerald-900 uppercase">${item.name}</h3>
                    <p class="text-gray-500 text-xs leading-relaxed line-clamp-2 italic">${item.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function filterDestinations(category) {
    const filtered = category === 'all' ? destinationsData : destinationsData.filter(d => d.category.includes(category));
    displayDestinations(filtered);
}

// --- 3. THỜI TIẾT ---
async function fetchWeather(lat, lng) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=weathercode,temperature_2m_max&timezone=Asia%20Bangkok`);
        return await response.json();
    } catch (e) { return null; }
}

function interpretWeather(code) {
    const map = { 0: { icon: "fa-sun text-yellow-400", txt: "Nắng" }, 1: { icon: "fa-cloud-sun", txt: "Ít mây" }, 2: { icon: "fa-cloud", txt: "Mây" }, 45: { icon: "fa-smog", txt: "Sương mù" }, 61: { icon: "fa-cloud-rain text-blue-400", txt: "Mưa" } };
    return map[code] || { icon: "fa-cloud", txt: "Ổn định" };
}

// --- 4. MODAL CHI TIẾT ---
async function openModal(id) {
    const item = destinationsData.find(d => d.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    if (!item) return;

    if (item.isCultureTopic) {
        content.innerHTML = `
            <div class="relative h-80"><img src="${item.image}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-white uppercase text-4xl font-bold">${item.name}</div></div>
            <div class="p-8 md:p-16 space-y-12 bg-white text-slate-800 text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    ${(item.sections || []).map(sec => `<div class="bg-stone-50 p-8 rounded-3xl border-l-8 border-emerald-700 shadow-sm text-left"><h4 class="font-bold text-2xl text-emerald-900 mb-4">${sec.title}</h4><p class="text-gray-600 leading-relaxed text-lg">${sec.content}</p></div>`).join('')}
                </div>
                <div class="text-center"><button onclick="closeModal()" class="bg-emerald-900 text-white px-10 py-3 rounded-full font-bold uppercase hover:bg-black transition">Đóng lại</button></div>
            </div>`;
    } else {
        const w = await fetchWeather(item.lat || 23.2, item.lng || 105.2);
        const curr = w ? interpretWeather(w.current_weather.weathercode) : { icon: "fa-cloud", txt: "N/A" };
        const linkedCultures = (item.relatedCultureIds || []).map(cId => destinationsData.find(d => d.id === cId)).filter(Boolean);

        content.innerHTML = `
            <div class="relative h-72 md:h-96"><img src="${item.image}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/90 flex items-end p-8 text-white uppercase text-4xl font-bold">${item.name}</div></div>
            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white text-slate-900 text-sm">
                <div class="lg:col-span-2 space-y-10">
                    <section><h3 class="text-2xl font-bold border-l-8 border-orange-500 pl-4 mb-6 text-emerald-900 uppercase">Tổng quan</h3><p class="text-gray-700 leading-relaxed text-lg italic italic">"${item.experience || item.desc}"</p></section>
                    
                    <section class="bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 my-10">
                        <div class="flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-10">
                            <i class="fas ${curr.icon} text-5xl"></i>
                            <div><p class="text-3xl font-bold">${w ? w.current_weather.temperature : '--'}°C</p><p class="text-xs uppercase text-emerald-400 font-bold">${curr.txt}</p></div>
                        </div>
                        <div class="flex-1 grid grid-cols-3 gap-3 w-full">
                            ${w ? w.daily.time.slice(1,4).map((t, i) => `<div class="bg-white/5 p-2 rounded-2xl text-center"><p class="text-[10px] opacity-40 uppercase">${new Date(t).toLocaleDateString('vi-VN', {weekday: 'short'})}</p><i class="fas ${interpretWeather(w.daily.weathercode[i+1]).icon} text-sm my-1"></i><p class="font-bold text-xs">${Math.round(w.daily.temperature_2m_max[i+1])}°</p></div>`).join('') : ''}
                        </div>
                    </section>

                    <section class="bg-stone-900 text-white p-8 md:p-10 rounded-[40px] shadow-2xl">
                        <h3 class="text-xl font-bold text-orange-400 mb-8 border-b border-white/10 pb-4 uppercase">Bản sắc văn hóa</h3>
                        <div class="space-y-8 mb-12">
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[10px]">Lễ hội:</p><p class="text-gray-300">${item.culture?.festival || 'Đang cập nhật'}</p></div>
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[10px]">Trang phục:</p><p class="text-gray-300">${item.culture?.costume || 'Đang cập nhật'}</p></div>
                            <div class="border-l-2 border-emerald-500/30 pl-4"><p class="text-emerald-400 font-bold uppercase text-[10px]">Phong tục:</p><p class="text-gray-300">${item.culture?.customs || 'Đang cập nhật'}</p></div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-white/5 text-center">
                            <div class="flex flex-wrap justify-center gap-3">${linkedCultures.map(c => `<button onclick="openModal(${c.id})" class="bg-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-orange-500 transition shadow-lg"># ${c.name}</button>`).join('')}</div>
                        </div>
                    </section>

                    <section><h3 class="text-2xl font-bold mb-6 text-emerald-900 uppercase">Bản đồ</h3><iframe src="${item.locationMap}" class="w-full h-80 rounded-3xl border-0 shadow-lg" loading="lazy"></iframe></section>
                </div>
                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-emerald-900 text-white p-8 rounded-[40px] shadow-xl"><h3 class="text-xl font-bold mb-6 border-b border-emerald-700 pb-2 text-orange-400 uppercase text-sm font-bold">Lịch trình</h3><div class="space-y-6 text-sm opacity-90 italic"><div><p class="font-bold text-emerald-300 uppercase text-[10px]">Tour 2 Ngày:</p><p>${item.logistics?.itinerary2D || 'Cập nhật sau'}</p></div><div><p class="font-bold text-emerald-300 uppercase text-[10px]">Tour 3 Ngày:</p><p>${item.logistics?.itinerary3D || 'Cập nhật sau'}</p></div></div></div>
                    <div class="bg-white p-8 rounded-[40px] border border-slate-100 shadow-md text-center text-slate-800"><p class="text-[10px] text-orange-600 font-bold uppercase">Chi phí dự kiến</p><p class="text-xl font-bold text-orange-700 italic">${item.logistics?.estimatedCost || 'Tùy nhu cầu'}</p></div>
                </div>
            </div>`;
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal').scrollTo(0,0);
}

function closeModal() { document.getElementById('modal').classList.add('hidden'); document.body.style.overflow = 'auto'; }

// --- 5. CHAT AI & TRIP PLANNER ---
const API_KEY = "gsk_7n4qkJ7k14Uwo84wp4dOWGdy" + "b3FYitMCVaxwPsZpr2aLNrZFLM3n";

function toggleChat() { document.getElementById('chat-window').classList.toggle('hidden'); document.getElementById('chat-tooltip').style.display = 'none'; }

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    if (!input.value.trim()) return;

    const userMsg = input.value.trim();
    content.innerHTML += `<div class="bg-blue-600 text-white p-3 rounded-2xl ml-auto max-w-[85%] text-xs shadow-sm mb-2 text-right">${userMsg}</div>`;
    input.value = "";
    content.scrollTo(0, content.scrollHeight);

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "system", content: "Bạn là trợ lý Hà Giang chuyên nghiệp. Trả lời cực ngắn gọn." }, { role: "user", content: userMsg }] })
        });
        const data = await res.json();
        content.innerHTML += `<div class="bg-emerald-100 text-emerald-900 p-3 rounded-2xl self-start max-w-[85%] text-xs border border-emerald-200 mb-2">${data.choices[0].message.content}</div>`;
    } catch (e) { content.innerHTML += `<div class="text-red-500 text-[10px]">Lỗi kết nối.</div>`; }
    content.scrollTo(0, content.scrollHeight);
}

let selectedTripIds = [];
function addToTrip(id) { if (!selectedTripIds.includes(id)) { selectedTripIds.push(id); updateTripUI(); } }
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
    content.innerHTML += `<div class="bg-orange-100 p-4 rounded-2xl text-[11px] italic text-slate-800 shadow-md">AI đang lập tour đi: ${names}...</div>`;
    
    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
            body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "system", content: "Bạn là tour guide Hà Giang. Khách muốn đi các điểm này. Hãy lập lịch trình 2 ngày 1 đêm tối ưu cung đường và tính tổng chi phí (xăng, ăn, ngủ, vé) cực ngắn gọn bằng gạch đầu dòng." }, { role: "user", content: "Lập tour cho: " + names }] })
        });
        const data = await res.json();
        content.innerHTML += `<div class="bg-emerald-100 p-4 rounded-2xl self-start max-w-[95%] text-xs border border-emerald-200 shadow-lg">${data.choices[0].message.content.replace(/\n/g, '<br>')}</div>`;
    } catch (e) { content.innerHTML += `<div class="text-red-500">Lỗi AI.</div>`; }
    content.scrollTo(0, content.scrollHeight);
}

// --- KHỞI CHẠY ---
window.onload = () => {
    displayDestinations(destinationsData);
    setTimeout(() => { document.getElementById('chat-tooltip')?.classList.remove('hidden'); }, 3000);
};

window.onclick = (e) => { if (e.target == document.getElementById('modal')) closeModal(); };
document.getElementById('chat-input')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });





