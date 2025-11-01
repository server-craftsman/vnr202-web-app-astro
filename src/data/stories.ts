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
        image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800',
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
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800',
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
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
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
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
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
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800',
        keywords: ['ti-vi', 'văn hóa', 'cộng đồng', 'giải trí']
    }
];

export const getStoriesByCategory = (category: Story['category']): Story[] => {
    return stories.filter(s => s.category === category);
};

export const getStoriesByYear = (year: number): Story[] => {
    return stories.filter(s => s.year === year);
};

