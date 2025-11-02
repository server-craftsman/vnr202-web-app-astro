export interface Story {
    id: string;
    title: string;
    author: string;
    year: number;
    category: 'family' | 'work' | 'daily' | 'culture';
    excerpt: string;
    content: string;
    image?: string;
    keywords: string[];
}

export const stories: Story[] = [
    {
        id: 'xep-hang-mua-gao',
        title: 'Kỷ niệm xếp hàng mua gạo từ 4 giờ sáng',
        author: 'Bà Nguyễn Thị Lan (75 tuổi)',
        year: 1980,
        category: 'daily',
        excerpt: 'Tôi còn nhớ như in những buổi sáng phải dậy từ 4 giờ để xếp hàng mua gạo. Nếu đến muộn, có khi hết hàng...',
        content: `Thời bao cấp, việc mua gạo không đơn giản như bây giờ. Mỗi tháng, gia đình tôi được cấp phiếu mua 15kg gạo cho 5 người. Nhưng để mua được số gạo đó, tôi phải dậy từ 4 giờ sáng, mang theo phiếu và tiền, đến cửa hàng mậu dịch xếp hàng.

Hàng dài đến hàng trăm người. Mọi người đứng im lặng, lo lắng. Có những hôm cửa hàng hết gạo sớm, người đứng cuối hàng phải về tay trắng, chờ đợi đến tháng sau.

Tôi còn nhớ một lần, con trai tôi ốm nặng nhưng tôi vẫn phải đi xếp hàng vì không có gạo thì cả nhà không có cơm ăn. Hàng xóm giúp đỡ trông con, còn tôi đứng ngoài trời lạnh từ 4 giờ sáng đến 9 giờ mới được mua.

Những ngày đó khó khăn lắm, nhưng cũng dạy chúng tôi biết trân trọng từng hạt gạo, từng bữa cơm.`,
        image: '/assets/artifact/xep-hang.jpg',
        keywords: ['xếp hàng', 'gạo', 'khó khăn', 'gia đình']
    },
    {
        id: 'tem-phieu-quy-gia',
        title: 'Những tờ tem phiếu quý hơn vàng',
        author: 'Ông Trần Văn Hải (70 tuổi)',
        year: 1979,
        category: 'daily',
        excerpt: 'Mất tem phiếu đồng nghĩa với cả tháng không có thịt, không có đường. Chúng tôi phải cất giữ nó cẩn thận như giữ vàng...',
        content: `Tôi còn nhớ rõ cái ngày mẹ tôi khóc nức nở vì đánh mất cuốn sổ tem phiếu. Đó là tháng 3 năm 1979, cả nhà phải sống qua tháng đó bằng gạo nấu cháo loãng và rau luộc, không có một chút thịt hay đường.

Mỗi đầu tháng, cha tôi đi nhận tem phiếu về, cả nhà tập trung lại đếm từng tờ: tem gạo, tem thịt, tem đường, tem dầu, tem xà phòng... Mẹ tôi giữ chúng trong một chiếc hộp thiếc cũ, khóa kỹ, cất ở nơi an toàn nhất trong nhà.

Có người hàng xóm bị mất tem phiếu, phải đi vay mượn gạo từng bữa, sống qua ngày rất vất vả. Lúc đó, tem phiếu quý hơn cả tiền, vì có tiền mà không có tem phiếu thì cũng chẳng mua được gì.

Bây giờ nhìn lại, tôi mới thấy chúng ta may mắn biết bao khi không còn phải phụ thuộc vào những tờ giấy nhỏ đó nữa.`,
        image: '/assets/stories/tem-luong-thuc.jpg',
        keywords: ['tem phiếu', 'khó khăn', 'gia đình', 'ký ức']
    },
    {
        id: 'hop-tac-xa',
        title: 'Làm việc tại hợp tác xã nông nghiệp',
        author: 'Ông Phạm Văn Thành (68 tuổi)',
        year: 1978,
        category: 'work',
        excerpt: 'Tất cả ruộng đất được tập thể hóa. Chúng tôi làm chung, chia theo công điểm. Ai cũng cố làm nhưng thu nhập rất thấp...',
        content: `Năm 1978, ruộng đất của gia đình tôi được nhập vào hợp tác xã. Từ đó, chúng tôi không còn làm riêng nữa mà phải làm chung theo tổ sản xuất.

Mỗi ngày, hồi chuông tập trung vang lên lúc 5 giờ sáng. Cả tổ ra đồng, làm việc cho đến chiều tối. Cuối tháng, chúng tôi được tính công điểm. Người làm nhiều được nhiều công, người ít được ít. Nhưng kể cả làm nhiều, thu nhập cũng chỉ đủ sống qua ngày.

Điều khó khăn nhất là không ai có động lực làm hết sức vì dù làm nhiều hay ít, phần thưởng cũng không chênh lệch nhiều. Có người làm qua loa, có người cố gắng, nhưng cuối cùng thu hoạch chung của hợp tác xã vẫn rất thấp.

Đến năm 1981, khi có Chỉ thị 100 cho phép khoán sản phẩm, mọi thứ mới bắt đầu thay đổi. Người dân được giữ phần sản xuất vượt mức, và từ đó ai cũng chăm chỉ hơn, năng suất tăng lên rõ rệt.`,
        image: '/assets/artifact/hop-tac-nong-nghiep.jpg',
        keywords: ['hợp tác xã', 'nông nghiệp', 'lao động', 'cải cách']
    },
    {
        id: 'cua-hang-mau-dich',
        title: 'Ký ức về cửa hàng mậu dịch',
        author: 'Bà Lê Thị Hoa (72 tuổi)',
        year: 1982,
        category: 'daily',
        excerpt: 'Cửa hàng mậu dịch là nơi duy nhất có hàng hóa. Mỗi lần đi mua là cả một sự kiện của gia đình...',
        content: `Cửa hàng mậu dịch ở cuối phố nhà tôi là nơi cả khu phố hướng về. Nơi đó bán đủ thứ: gạo, thịt, đường, xà phòng, vải... nhưng tất cả đều phải có tem phiếu.

Mỗi sáng thứ 7, cửa hàng mở cửa, người ta xếp hàng dài. Tôi nhớ mãi hình ảnh các bà, các cô cầm theo sổ tem phiếu, túi vải to, chờ đợi đến lượt mình.

Khi vào đến trong cửa hàng, người bán hàng sẽ kiểm tra tem phiếu, cân đong từng ký gạo, từng lạng thịt theo đúng định mức. Không được mua thêm dù muốn trả tiền.

Có những tháng thiếu hàng, cửa hàng chỉ có gạo và muối. Thịt, đường thì khan hiếm. Những tháng đó, bữa cơm của gia đình chỉ có cơm trắng với muối vừng hoặc dưa muối.

Bây giờ đi siêu thị, thấy hàng hóa đầy ắp, tôi mới thấy biết ơn thời Đổi Mới biết bao.`,
        image: '/assets/stories/cua-hang-mau-dich.jpg',
        keywords: ['mậu dịch', 'mua sắm', 'thiếu thốn', 'ký ức']
    },
    {
        id: 'ti-vi-den-trang',
        title: 'Chiếc ti-vi đen trắng của cả khu phố',
        author: 'Ông Nguyễn Văn Minh (65 tuổi)',
        year: 1984,
        category: 'culture',
        excerpt: 'Cả khu phố chỉ có nhà chúng tôi có ti-vi. Mỗi tối, hàng chục người kéo đến xem...',
        content: `Năm 1984, gia đình tôi có được chiếc ti-vi đen trắng Sanyo - món đồ xa xỉ nhất thời đó. Nó to bằng cái thùng, màn hình nhỏ xíu, nhưng đó là niềm tự hào của cả nhà.

Mỗi tối có chương trình hay, cha tôi mở cửa, hàng xóm kéo đến. Người lớn ngồi ghế, trẻ con ngồi dưới đất, đông nghẹt cả phòng khách. Mọi người đều im lặng, chăm chú nhìn vào màn hình nhỏ đó.

Tôi nhớ nhất là các buổi xem phim Liên Xô. Dù là phim đen trắng, dù có nhiễu, nhưng tất cả đều hào hứng. Đôi khi điện mất giữa chừng, mọi người than thở rồi ngồi chờ đến khi có điện trở lại.

Chiếc ti-vi đó không chỉ là vật dụng, mà còn là điểm tụ họp của cả khu phố, nơi mọi người gặp gỡ, trò chuyện, chia sẻ. Bây giờ mỗi nhà đều có ti-vi riêng, mọi người ít gặp nhau hơn rồi.`,
        image: '/assets/stories/tivi.jpg',
        keywords: ['ti-vi', 'văn hóa', 'cộng đồng', 'giải trí']
    },
    {
        id: 'xe-dap-quy-gia',
        title: 'Chiếc xe đạp quý giá của cha tôi',
        author: 'Bà Trần Thị Mai (70 tuổi)',
        year: 1979,
        category: 'family',
        excerpt: 'Cha tôi tiết kiệm 3 năm mới mua được chiếc xe đạp. Nó là tài sản quý nhất của gia đình...',
        content: `Chiếc xe đạp của cha tôi là tài sản quý giá nhất nhà. Cha phải tiết kiệm từng đồng, nhịn ăn nhịn mặc suốt 3 năm mới đủ tiền mua. 

Mỗi khi đi đâu, cha đều lau chùi cẩn thận, giữ gìn như báu vật. Tôi nhớ có lần anh trai tôi mượn xe đi, làm xước sơn, cha tôi buồn mấy ngày không nói chuyện.

Xe đạp không chỉ là phương tiện, mà còn là biểu tượng của sự tiết kiệm, chăm chỉ. Nhiều người trong khu phố mơ ước có được một chiếc xe đạp như vậy nhưng không đủ tiền.

Bây giờ xe máy, ô tô đầy đường, nhưng tôi vẫn nhớ cảm giác hạnh phúc khi được cha chở đi trên chiếc xe đạp cũ đó.`,
        image: '/assets/stories/xe-dap.jpg',
        keywords: ['xe đạp', 'gia đình', 'tiết kiệm', 'tài sản']
    },
    {
        id: 'thieu-thit',
        title: 'Tháng không có thịt',
        author: 'Bà Phạm Thị Hồng (73 tuổi)',
        year: 1981,
        category: 'daily',
        excerpt: 'Có những tháng cả gia đình không có một miếng thịt. Bữa cơm chỉ có cơm trắng với muối...',
        content: `Thịt là thứ xa xỉ nhất thời bao cấp. Mỗi tháng, gia đình tôi được cấp phiếu mua 0.5kg thịt cho 5 người, nhưng nhiều tháng cửa hàng mậu dịch không có thịt để bán.

Tôi nhớ có một tháng, cả tháng trời không có một miếng thịt. Bữa cơm của gia đình chỉ có cơm trắng với muối vừng, hoặc rau luộc. Bọn trẻ con nhìn sang nhà hàng xóm có mùi thịt thơm, thèm thuồng.

Có lần, tôi phải đi chợ cóc, mua thịt với giá gấp đôi, gấp ba giá chính thức. Nhưng để có thịt cho bọn trẻ, tôi phải làm vậy.

Bây giờ thịt cá đầy chợ, nhưng tôi vẫn nhớ cái cảm giác hạnh phúc khi được ăn một miếng thịt nhỏ trong những ngày đó.`,
        image: '/assets/stories/thieu-thit.jpg',
        keywords: ['thịt', 'thiếu thốn', 'gia đình', 'khó khăn']
    },
    {
        id: 'chao-loang',
        title: 'Những bữa cháo loãng',
        author: 'Bà Nguyễn Thị Bình (71 tuổi)',
        year: 1980,
        category: 'family',
        excerpt: 'Khi hết gạo, gia đình phải nấu cháo loãng để kéo dài bữa ăn. Một bát cháo có thể chia cho cả nhà...',
        content: `Những năm 1980, có những tháng gia đình hết gạo sớm, chúng tôi phải nấu cháo loãng để kéo dài bữa ăn. Một nồi cháo to, đầy nước, chỉ có ít gạo, phải chia cho 5 người.

Bọn trẻ con đói, nhưng không dám nói. Tôi nhìn các con, lòng đau như cắt. Có những bữa, tôi nhịn ăn để dành phần cháo cho con.

Nhiều gia đình hàng xóm cũng trong tình cảnh tương tự. Chúng tôi giúp đỡ nhau, chia sẻ từng nắm gạo khi có thể.

Những ngày đó khó khăn lắm, nhưng cũng dạy chúng tôi biết đoàn kết, biết chia sẻ. Bây giờ có đủ ăn, nhưng tôi không bao giờ quên những bữa cháo loãng đó.`,
        image: '/assets/stories/chao-loang.jpg',
        keywords: ['cháo', 'đói', 'gia đình', 'khó khăn']
    },
    {
        id: 'di-dien',
        title: 'Những buổi tối mất điện',
        author: 'Bà Hoàng Thị Lan (66 tuổi)',
        year: 1982,
        category: 'daily',
        excerpt: 'Điện thường xuyên bị cắt. Cả gia đình ngồi trong bóng tối, kể chuyện cho nhau nghe...',
        content: `Thời bao cấp, điện thường xuyên bị cắt. Có những tuần, mỗi tối đều mất điện từ 7 giờ đến 9 giờ. Cả gia đình ngồi trong bóng tối, thắp nến hoặc đèn dầu.

Những buổi tối đó, thay vì xem ti-vi, chúng tôi ngồi quanh đèn, kể chuyện cho nhau nghe. Ông bà kể chuyện ngày xưa, cha mẹ kể chuyện công việc, con cái kể chuyện trường lớp.

Đôi khi không có gì để làm, chúng tôi ngồi im lặng, nghe tiếng gió thổi qua cửa sổ. Những khoảnh khắc đó thật yên bình, khác hẳn với cuộc sống bận rộn bây giờ.

Mất điện là điều bất tiện, nhưng cũng là cơ hội để gia đình gần gũi nhau hơn. Bây giờ có điện suốt ngày, nhưng mọi người ít ngồi với nhau hơn.`,
        image: '/assets/stories/mat-dien.jpg',
        keywords: ['điện', 'gia đình', 'kể chuyện', 'đời sống']
    }
];

export const getStoriesByCategory = (category: Story['category']): Story[] => {
    return stories.filter(s => s.category === category);
};

export const getStoriesByYear = (year: number): Story[] => {
    return stories.filter(s => s.year === year);
};

