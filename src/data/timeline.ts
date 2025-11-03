export interface TimelineEvent {
    year: number;
    month?: number;
    title: string;
    description: string;
    image?: string;
    keywords: string[];
    category: 'economic' | 'social' | 'political' | 'culture';
    importance: 'high' | 'medium' | 'low';
    detailedDescription?: string;
    context?: string;
    impact?: string;
    statistics?: {
        label: string;
        value: string;
    }[];
    location?: string;
    keyPeople?: string[];
    consequences?: string[];
    relatedPolicies?: string[];
}

export const timelineData: TimelineEvent[] = [
    {
        year: 1975,
        month: 4,
        title: 'Giải phóng miền Nam, thống nhất đất nước',
        description: 'Ngày 30/4/1975, giải phóng hoàn toàn miền Nam, kết thúc chiến tranh chống Mỹ. Cả nước thống nhất dưới chế độ xã hội chủ nghĩa.',
        image: '/assets/timeline/giai-phong-mien-nam-1975.jpg',
        keywords: ['giải phóng', 'thống nhất', 'xã hội chủ nghĩa', 'chiến tranh'],
        category: 'political',
        importance: 'high',
        detailedDescription: 'Chiến dịch Hồ Chí Minh lịch sử đã kết thúc sau hơn 30 năm chiến tranh. Quân đội nhân dân Việt Nam tiến vào Dinh Độc Lập, buộc Tổng thống Dương Văn Minh đầu hàng vô điều kiện. Sự kiện này đánh dấu thời khắc lịch sử: Việt Nam hoàn toàn độc lập và thống nhất sau hơn 100 năm bị chia cắt.',
        context: 'Việt Nam vừa kết thúc cuộc chiến tranh kéo dài, hứng chịu thiệt hại nặng nề về người và của. Hạ tầng cơ sở bị tàn phá nghiêm trọng, kinh tế kiệt quệ. Miền Nam với nền kinh tế tư bản chủ nghĩa phải được chuyển đổi sang mô hình xã hội chủ nghĩa như miền Bắc.',
        impact: 'Sự kiện này mở ra thời kỳ mới nhưng cũng đặt ra thách thức lớn: làm thế nào để thống nhất hai nền kinh tế hoàn toàn khác biệt? Việc quyết định áp dụng mô hình bao cấp từ miền Bắc cho toàn quốc sẽ định hình cuộc sống của hàng triệu người dân trong 11 năm tiếp theo.',
        location: 'Sài Gòn (nay là Thành phố Hồ Chí Minh)',
        keyPeople: ['Lê Duẩn', 'Văn Tiến Dũng', 'Dương Văn Minh'],
        statistics: [
            { label: 'Thời gian chiến tranh', value: '30+ năm' },
            { label: 'Số quân tham gia', value: 'Hàng trăm ngàn' },
            { label: 'Ngày giải phóng', value: '30/4/1975' }
        ],
        consequences: [
            'Chấm dứt hoàn toàn sự chia cắt Bắc-Nam',
            'Bắt đầu quá trình thống nhất kinh tế và xã hội',
            'Thành lập nước Việt Nam thống nhất',
            'Bắt đầu chính sách cải tạo kinh tế miền Nam'
        ],
        relatedPolicies: ['Cải tạo công thương nghiệp', 'Hợp tác hóa nông nghiệp', 'Quốc hữu hóa']
    },
    {
        year: 1976,
        title: 'Đại hội IV Đảng Cộng sản Việt Nam',
        description: 'Đại hội quyết định xây dựng kinh tế theo mô hình kế hoạch hóa tập trung, áp dụng toàn bộ hệ thống bao cấp từ Liên Xô.',
        image: '/assets/timeline/dai-hoi-iv-1976.jpg',
        keywords: ['Đại hội IV', 'kế hoạch hóa', 'tập trung', 'bao cấp'],
        category: 'political',
        importance: 'high',
        detailedDescription: 'Đại hội IV diễn ra từ 14-20/12/1976 tại Hà Nội, quy tụ 1.008 đại biểu. Đây là đại hội đầu tiên sau khi thống nhất đất nước. Đại hội đã thông qua đường lối xây dựng chủ nghĩa xã hội trên toàn quốc, quyết định áp dụng mô hình kinh tế kế hoạch hóa tập trung, chấm dứt hoàn toàn cơ chế thị trường.',
        context: 'Sau khi thống nhất, Việt Nam đứng trước lựa chọn: tiếp tục nền kinh tế thị trường của miền Nam hay áp dụng mô hình tập trung của miền Bắc? Áp lực từ Liên Xô và nhu cầu thống nhất quốc gia đã dẫn đến quyết định chọn mô hình bao cấp.',
        impact: 'Quyết định này đã định hình toàn bộ nền kinh tế Việt Nam trong 10 năm tiếp theo. Mọi hoạt động sản xuất, phân phối đều do nhà nước kiểm soát thông qua hệ thống kế hoạch 5 năm. Hệ thống tem phiếu, định mức, xếp hàng trở thành nét đặc trưng của đời sống người dân.',
        location: 'Hà Nội',
        keyPeople: ['Lê Duẩn', 'Phạm Văn Đồng', 'Lê Đức Thọ'],
        statistics: [
            { label: 'Số đại biểu', value: '1.008 người' },
            { label: 'Kế hoạch 5 năm', value: '1976-1980' },
            { label: 'Mục tiêu tăng trưởng', value: '6-8%/năm' }
        ],
        consequences: [
            'Áp dụng toàn bộ hệ thống bao cấp trên cả nước',
            'Thành lập các cơ quan kế hoạch hóa',
            'Xóa bỏ cơ chế thị trường',
            'Bắt đầu chính sách tem phiếu trên toàn quốc'
        ],
        relatedPolicies: ['Kế hoạch hóa tập trung', 'Hệ thống bao cấp', 'Quốc hữu hóa toàn bộ']
    },
    {
        year: 1976,
        month: 7,
        title: 'Công cuộc cải tạo kinh tế miền Nam',
        description: 'Cải tạo toàn bộ nền kinh tế miền Nam theo mô hình miền Bắc. Quốc hữu hóa các xí nghiệp tư nhân, hợp tác hóa nông nghiệp.',
        image: '/assets/timeline/cai-tao-cong-thuong-1976.jpg',
        keywords: ['cải tạo', 'quốc hữu hóa', 'hợp tác hóa', 'xí nghiệp'],
        category: 'economic',
        importance: 'high',
        detailedDescription: 'Chỉ vài tháng sau thống nhất, chính phủ bắt đầu chương trình cải tạo kinh tế quy mô lớn. Hàng ngàn xí nghiệp tư nhân, cửa hàng, nhà máy bị quốc hữu hóa. Nông dân miền Nam bị ép buộc vào hợp tác xã, mất quyền sở hữu ruộng đất. Hàng chục ngàn người buôn bán, kinh doanh mất sinh kế.',
        context: 'Miền Nam có nền kinh tế thị trường phát triển với nhiều doanh nghiệp tư nhân, thương mại tự do. Để thống nhất đất nước, nhà nước quyết định phải xóa bỏ hoàn toàn cơ chế này và thay bằng kinh tế tập thể.',
        impact: 'Hàng trăm ngàn người mất việc làm, thị trường tự do biến mất. Sản xuất giảm mạnh vì thiếu động lực. Hệ thống phân phối tập trung không đáp ứng được nhu cầu thực tế, dẫn đến thiếu hụt hàng hóa trầm trọng. Đời sống người dân miền Nam thay đổi hoàn toàn.',
        location: 'Toàn miền Nam',
        keyPeople: ['Lê Thanh Nghị', 'Võ Nguyên Giáp'],
        statistics: [
            { label: 'Xí nghiệp quốc hữu hóa', value: '30.000+ cơ sở' },
            { label: 'Người mất việc', value: 'Hàng trăm ngàn' },
            { label: 'Đất hợp tác hóa', value: 'Hàng triệu ha' }
        ],
        consequences: [
            'Xóa bỏ hoàn toàn kinh tế tư nhân miền Nam',
            'Sản xuất công nghiệp sụt giảm nghiêm trọng',
            'Hàng hóa thiếu hụt, phải áp dụng tem phiếu',
            'Nhiều người di tản ra nước ngoài'
        ],
        relatedPolicies: ['Quốc hữu hóa công thương nghiệp', 'Hợp tác hóa nông nghiệp', 'Xóa bỏ thương nghiệp tư nhân']
    },
    {
        year: 1978,
        title: 'Tham gia SEV - Hội đồng Tương trợ Kinh tế',
        description: 'Việt Nam gia nhập tổ chức kinh tế của các nước xã hội chủ nghĩa. Nhận viện trợ từ Liên Xô, Trung Quốc và các nước anh em.',
        image: '/assets/timeline/sev-1978.jpg',
        keywords: ['SEV', 'viện trợ', 'Liên Xô', 'tương trợ'],
        category: 'economic',
        importance: 'high',
        detailedDescription: 'SEV (Hội đồng Tương trợ Kinh tế) là tổ chức kinh tế của các nước xã hội chủ nghĩa do Liên Xô đứng đầu. Việt Nam gia nhập để nhận viện trợ, kỹ thuật và trao đổi hàng hóa. Tuy nhiên, điều này cũng làm tăng sự phụ thuộc vào mô hình kinh tế Liên Xô.',
        context: 'Việt Nam sau chiến tranh cần khôi phục kinh tế nhưng thiếu vốn, kỹ thuật và thiết bị. Liên Xô và các nước xã hội chủ nghĩa là nguồn viện trợ chính. Gia nhập SEV giúp tiếp cận thị trường và nguồn lực của khối.',
        impact: 'Việt Nam nhận được lượng lớn viện trợ nhưng phải tuân theo các quy định trao đổi của SEV. Hệ thống thanh toán bằng đồng rúp chuyển đổi không linh hoạt. Khi các nước trong khối gặp khó khăn, viện trợ giảm mạnh, ảnh hưởng nghiêm trọng đến kinh tế Việt Nam.',
        location: 'Moscow (Liên Xô)',
        keyPeople: ['Lê Duẩn', 'Lê Thanh Nghị'],
        statistics: [
            { label: 'Năm gia nhập', value: '1978' },
            { label: 'Viện trợ trung bình/năm', value: '1-2 tỷ USD' },
            { label: 'Số nước thành viên', value: '10 nước' }
        ],
        consequences: [
            'Phụ thuộc vào viện trợ và thị trường SEV',
            'Nhập khẩu máy móc, thiết bị từ Liên Xô',
            'Xuất khẩu nông sản, khoáng sản',
            'Bị ảnh hưởng khi SEV tan rã'
        ],
        relatedPolicies: ['Trao đổi hàng hóa theo hiệp định', 'Sử dụng đồng rúp chuyển đổi', 'Nhập khẩu thiết bị công nghiệp']
    },
    {
        year: 1979,
        month: 2,
        title: 'Chiến tranh biên giới Việt - Trung',
        description: 'Xung đột biên giới với Trung Quốc làm gián đoạn nguồn viện trợ quan trọng, ảnh hưởng nghiêm trọng đến kinh tế bao cấp.',
        image: '/assets/timeline/chien-tranh-bien-gioi-viet-trung-1979.jpg',
        keywords: ['chiến tranh biên giới', 'Trung Quốc', 'viện trợ'],
        category: 'political',
        importance: 'high',
        detailedDescription: 'Trung Quốc phát động cuộc tấn công biên giới phía Bắc vào tháng 2/1979 để "dạy cho Việt Nam một bài học". Chiến sự kéo dài khoảng 1 tháng, gây thiệt hại lớn về người và của. Quan trọng hơn, Trung Quốc cắt hoàn toàn viện trợ cho Việt Nam.',
        context: 'Quan hệ Việt-Trung rạn nứt sau khi Việt Nam đưa quân vào Campuchia lật đổ chế độ Pol Pot (thân Trung Quốc). Trung Quốc coi đây là hành động thù địch và quyết định trừng phạt Việt Nam.',
        impact: 'Mất nguồn viện trợ từ Trung Quốc (ước tính hàng trăm triệu USD/năm) là đòn giáng mạnh vào nền kinh tế bao cấp đang phụ thuộc. Việt Nam buộc phải phụ thuộc hoàn toàn vào Liên Xô, làm tăng sự cô lập và khó khăn kinh tế. Nhiều hàng hóa thiết yếu từ Trung Quốc bị cắt, gây thiếu hụt trầm trọng.',
        location: 'Biên giới phía Bắc Việt Nam',
        keyPeople: ['Văn Tiến Dũng', 'Lê Duẩn'],
        statistics: [
            { label: 'Thời gian chiến sự', value: '17 ngày' },
            { label: 'Tổn thất', value: 'Hàng vạn người' },
            { label: 'Viện trợ bị cắt', value: 'Hàng trăm triệu USD/năm' }
        ],
        consequences: [
            'Cô lập quốc tế hơn nữa',
            'Phụ thuộc hoàn toàn vào Liên Xô',
            'Thiếu hụt hàng hóa từ Trung Quốc',
            'Kinh tế khó khăn trầm trọng hơn'
        ],
        relatedPolicies: ['Tăng cường hợp tác với Liên Xô', 'Tự lực tự cường', 'Chuyển hướng nhập khẩu']
    },
    {
        year: 1979,
        title: 'Tăng cường viện trợ từ Liên Xô',
        description: 'Việc Trung Quốc cắt viện trợ buộc Việt Nam phải phụ thuộc hoàn toàn vào Liên Xô, làm tăng sự phụ thuộc vào mô hình kinh tế tập trung.',
        image: '/assets/timeline/vien-tro-lien-xo-1979.jpg',
        keywords: ['Liên Xô', 'viện trợ', 'phụ thuộc'],
        category: 'economic',
        importance: 'medium',
        detailedDescription: 'Sau khi Trung Quốc cắt viện trợ, Liên Xô trở thành nguồn viện trợ duy nhất và chính yếu. Viện trợ từ Liên Xô tăng mạnh, bao gồm vũ khí, lương thực, máy móc, thiết bị công nghiệp và cả dầu mỏ. Tuy nhiên, điều này cũng làm Việt Nam phụ thuộc sâu sắc hơn vào mô hình kinh tế Liên Xô.',
        context: 'Việt Nam đang trong tình trạng khó khăn do cô lập quốc tế, mất viện trợ từ Trung Quốc, và kinh tế trong nước yếu kém. Liên Xô là đồng minh duy nhất còn lại, sẵn sàng viện trợ để duy trì ảnh hưởng trong khu vực.',
        impact: 'Viện trợ Liên Xô giúp duy trì nền kinh tế bao cấp nhưng cũng "nhốt" Việt Nam trong mô hình không phù hợp. Khi Liên Xô gặp khủng hoảng vào giữa thập niên 1980, viện trợ giảm mạnh, đẩy Việt Nam vào thế khó khăn và buộc phải đổi mới.',
        location: 'Toàn quốc',
        keyPeople: ['Lê Duẩn', 'Phạm Văn Đồng'],
        statistics: [
            { label: 'Viện trợ hàng năm', value: '1.5-2 tỷ USD' },
            { label: 'Dầu mỏ nhập khẩu', value: 'Hàng triệu tấn' },
            { label: 'Tỷ lệ phụ thuộc', value: '70-80% viện trợ' }
        ],
        consequences: [
            'Duy trì được hệ thống bao cấp',
            'Phụ thuộc quá mức vào Liên Xô',
            'Mô hình kinh tế không phù hợp được duy trì',
            'Khó khăn khi Liên Xô khủng hoảng'
        ],
        relatedPolicies: ['Hiệp định viện trợ dài hạn', 'Nhập khẩu thiết bị công nghiệp', 'Trao đổi hàng hóa theo kế hoạch']
    },
    {
        year: 1980,
        title: 'Hạn hán và thiếu lương thực nghiêm trọng',
        description: 'Thời tiết bất lợi cộng với chính sách hợp tác hóa kém hiệu quả dẫn đến thiếu lương thực nghiêm trọng. Người dân phải đối mặt với nạn đói.',
        image: '/assets/timeline/han-han.jpg',
        keywords: ['hạn hán', 'thiếu lương thực', 'đói', 'hợp tác hóa'],
        category: 'economic',
        importance: 'high',
        detailedDescription: 'Năm 1980 chứng kiến đợt hạn hán khốc liệt nhất trong nhiều thập kỷ. Lượng mưa giảm 40-50% so với bình thường, mùa màng thất bát. Kết hợp với chính sách hợp tác hóa nông nghiệp kém hiệu quả, sản lượng lương thực sụt giảm nghiêm trọng. Nhiều tỉnh phải đối mặt với nạn đói.',
        context: 'Hợp tác hóa nông nghiệp đã triệt tiêu động lực sản xuất của nông dân. Không có quyền sở hữu ruộng đất, họ làm việc vì công điểm chứ không phải vì lợi ích cá nhân. Hạn hán là "giọt nước tràn ly" cho một hệ thống đã yếu kém.',
        impact: 'Hàng triệu người thiếu ăn, đặc biệt ở nông thôn. Nhà nước phải nhập khẩu lương thực khẩn cấp từ Liên Xô và các nước khác, tốn kém ngoại tệ quý giá. Hệ thống tem phiếu không đáp ứng được nhu cầu thực tế. Nhiều người phải xếp hàng từ sáng sớm để mua gạo, thịt.',
        location: 'Toàn quốc, đặc biệt miền Bắc và miền Trung',
        keyPeople: ['Lê Thanh Nghị', 'Nguyễn Duy Trinh'],
        statistics: [
            { label: 'Sản lượng lúa giảm', value: '30-40%' },
            { label: 'Số tỉnh bị hạn hán', value: 'Hơn 30 tỉnh' },
            { label: 'Lương thực nhập khẩu', value: 'Hàng trăm ngàn tấn' }
        ],
        consequences: [
            'Thiếu lương thực trầm trọng trên toàn quốc',
            'Nạn đói ở nhiều vùng nông thôn',
            'Phải nhập khẩu khẩn cấp, tốn kém ngoại tệ',
            'Người dân xếp hàng từ sáng sớm để mua gạo',
            'Lộ rõ sự yếu kém của mô hình hợp tác hóa'
        ],
        relatedPolicies: ['Nhập khẩu lương thực khẩn cấp', 'Phân phối theo định mức', 'Kêu gọi tiết kiệm lương thực']
    },
    {
        year: 1981,
        title: 'Chỉ thị 100 - Khoán sản phẩm trong hợp tác xã',
        description: 'Bước đầu tiên cải cách - cho phép nông dân "khoán" ruộng, được giữ phần sản phẩm vượt hạn mức giao nộp, động viên sản xuất.',
        image: '/assets/timeline/chi-thi-100-1981.jpg',
        keywords: ['chỉ thị 100', 'khoán sản phẩm', 'cải cách', 'nông nghiệp'],
        category: 'economic',
        importance: 'high',
        detailedDescription: 'Ban Bí thư Trung ương Đảng ban hành Chỉ thị số 100/CT-TW về "Cải tiến công tác khoán, mở rộng khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp". Đây là bước đầu tiên trong quá trình cải cách, cho phép nông dân có động lực sản xuất.',
        context: 'Sau thảm họa hạn hán 1980 và nạn đói, các nhà lãnh đạo nhận ra mô hình hợp tác hóa thuần túy không hiệu quả. Nhiều địa phương đã tự phát "khoán chui" để tồn tại. Chỉ thị 100 chính thức hóa và mở rộng thực tiễn này.',
        impact: 'Sản lượng nông nghiệp tăng mạnh chỉ sau 1-2 năm. Nông dân có động lực để tăng năng suất vì được hưởng lợi từ phần vượt hạn mức. Đây là dấu hiệu đầu tiên cho thấy cơ chế thị trường, dù nhỏ, có thể kích thích sản xuất. Thành công của Chỉ thị 100 mở đường cho các cải cách lớn hơn sau này.',
        location: 'Toàn quốc, bắt đầu từ miền Bắc',
        keyPeople: ['Nguyễn Văn Linh', 'Kim Ngọc', 'Lê Thanh Nghị'],
        statistics: [
            { label: 'Sản lượng tăng', value: '20-30% trong 2 năm' },
            { label: 'Số hợp tác xã áp dụng', value: '70-80%' },
            { label: 'Phần khoán cho nông dân', value: '30-50% sản phẩm' }
        ],
        consequences: [
            'Sản lượng lương thực tăng mạnh',
            'Nông dân có động lực sản xuất',
            'Chứng minh hiệu quả của cơ chế "khoán"',
            'Mở đường cho các cải cách tiếp theo',
            'Giảm bớt thiếu lương thực'
        ],
        relatedPolicies: ['Khoán sản phẩm đến nhóm lao động', 'Tự do tiêu thụ phần vượt hạn mức', 'Khuyến khích sản xuất gia đình']
    },
    {
        year: 1982,
        title: 'Đại hội V Đảng - Thảo luận đổi mới',
        description: 'Bắt đầu xuất hiện ý kiến về cần thay đổi mô hình kinh tế. Thảo luận về việc áp dụng một số cơ chế thị trường giới hạn.',
        image: '/assets/timeline/dai-hoi-v-1982.jpg',
        keywords: ['Đại hội V', 'đổi mới', 'thị trường', 'cải cách'],
        category: 'political',
        importance: 'high',
        detailedDescription: 'Đại hội V diễn ra từ 27-31/3/1982 tại Hà Nội với 1.033 đại biểu. Lần đầu tiên, các vấn đề về sự yếu kém của mô hình kinh tế tập trung được thảo luận công khai. Nhiều đại biểu đề xuất cần "đổi mới tư duy kinh tế", "tận dụng cơ chế thị trường" dù vẫn trong khuôn khổ xã hội chủ nghĩa.',
        context: 'Thành công của Chỉ thị 100 đã chứng minh rằng cơ chế khoán, tức là cho phép người lao động hưởng lợi từ thành quả lao động, có hiệu quả. Nhiều nhà lãnh đạo nhận ra cần mở rộng cải cách sang các lĩnh vực khác. Áp lực từ thực tế kinh tế khó khăn cũng thúc đẩy đổi mới.',
        impact: 'Đại hội V tuy chưa đưa ra quyết định đổi mới triệt để nhưng đã tạo tiền đề tư tưởng. Các thảo luận về "đổi mới", "cải cách" trở nên chấp nhận được trong Đảng. Điều này mở đường cho các cải cách lớn hơn và dẫn đến Đại hội VI lịch sử.',
        location: 'Hà Nội',
        keyPeople: ['Lê Duẩn', 'Nguyễn Văn Linh', 'Võ Văn Kiệt'],
        statistics: [
            { label: 'Số đại biểu', value: '1.033 người' },
            { label: 'Số đề xuất đổi mới', value: 'Nhiều ý kiến' },
            { label: 'Kế hoạch 5 năm tiếp theo', value: '1981-1985' }
        ],
        consequences: [
            'Bắt đầu thảo luận công khai về đổi mới',
            'Tạo tiền đề tư tưởng cho Đại hội VI',
            'Nhiều đề xuất cải cách được đưa ra',
            'Chấp nhận cơ chế khoán và một số yếu tố thị trường'
        ],
        relatedPolicies: ['Đổi mới tư duy kinh tế', 'Mở rộng cơ chế khoán', 'Tận dụng yếu tố thị trường có điều tiết']
    },
    {
        year: 1986,
        month: 12,
        title: 'Đại hội VI Đảng - Đổi Mới',
        description: 'Đại hội lịch sử tuyên bố chính sách Đổi Mới, chấm dứt nền kinh tế bao cấp, chuyển sang "cơ chế thị trường theo định hướng xã hội chủ nghĩa".',
        image: '/assets/timeline/dai-hoi-vi-1986.jpg',
        keywords: ['Đại hội VI', 'Đổi Mới', 'bao cấp', 'thị trường', 'cải cách'],
        category: 'political',
        importance: 'high',
        detailedDescription: 'Đại hội VI diễn ra từ 15-18/12/1986 tại Hà Nội với 1.129 đại biểu, là bước ngoặt lịch sử. Đại hội thông qua Nghị quyết về "Đổi mới toàn diện", chính thức chấm dứt nền kinh tế bao cấp kéo dài 11 năm. Việt Nam chuyển sang "cơ chế thị trường có sự quản lý của nhà nước theo định hướng xã hội chủ nghĩa".',
        context: 'Nền kinh tế bao cấp đã thất bại hoàn toàn: sản xuất đình trệ, lạm phát phi mã (774% năm 1986), thiếu hụt hàng hóa trầm trọng, người dân đói khổ. Liên Xô đang khủng hoảng, không còn viện trợ. Việt Nam đứng trước nguy cơ sụp đổ kinh tế nếu không đổi mới.',
        impact: 'Đại hội VI đánh dấu sự kết thúc của thời kỳ bao cấp và bắt đầu thời kỳ Đổi Mới. Từ năm 1987, hàng loạt cải cách được triển khai: xóa bỏ tem phiếu, cho phép kinh tế tư nhân, tự do hóa giá cả, mở cửa thu hút đầu tư nước ngoài. Đời sống người dân cải thiện nhanh chóng. Việt Nam bước vào thời kỳ phát triển mới.',
        location: 'Hà Nội',
        keyPeople: ['Nguyễn Văn Linh', 'Võ Văn Kiệt', 'Đỗ Mười', 'Trường Chinh'],
        statistics: [
            { label: 'Số đại biểu', value: '1.129 người' },
            { label: 'Lạm phát năm 1986', value: '774%' },
            { label: 'Thời gian bao cấp', value: '11 năm (1975-1986)' },
            { label: 'Tăng trưởng sau đổi mới', value: '5-8%/năm' }
        ],
        consequences: [
            'Chấm dứt hoàn toàn nền kinh tế bao cấp',
            'Xóa bỏ hệ thống tem phiếu, định mức',
            'Cho phép kinh tế tư nhân phát triển',
            'Tự do hóa giá cả và thương mại',
            'Mở cửa thu hút đầu tư nước ngoài',
            'Kinh tế tăng trưởng nhanh, đời sống cải thiện'
        ],
        relatedPolicies: ['Nghị quyết Đổi mới', 'Luật Đầu tư nước ngoài', 'Xóa bỏ bao cấp', 'Tự do hóa thương mại', 'Cổ phần hóa doanh nghiệp nhà nước']
    }
];

export const getTimelineEventsByYear = (year: number): TimelineEvent[] => {
    return timelineData.filter(event => event.year === year);
};

export const getTimelineEventsByCategory = (category: TimelineEvent['category']): TimelineEvent[] => {
    return timelineData.filter(event => event.category === category);
};

export const getTimelineByImportance = (importance: TimelineEvent['importance']): TimelineEvent[] => {
    return timelineData.filter(event => event.importance === importance);
};
