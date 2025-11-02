export interface BaoCapReason {
    id: string;
    title: string;
    description: string;
    details: string[];
    icon: string;
    priority: number;
}

export const baoCapReasons: BaoCapReason[] = [
    {
        id: 'thong-nhat-dat-nuoc-sau-chien-tranh',
        title: 'Thống nhất đất nước sau chiến tranh',
        description: 'Cần một mô hình kinh tế thống nhất cho toàn quốc sau khi hai miền có hệ thống kinh tế khác nhau',
        details: [
            'Miền Bắc đã áp dụng kinh tế kế hoạch hóa từ 1954',
            'Miền Nam có nền kinh tế thị trường tư bản chủ nghĩa',
            'Cần thống nhất hệ thống quản lý và điều hành kinh tế quốc gia',
            'Đảm bảo công bằng xã hội giữa các vùng miền'
        ],
        icon: '🏛️',
        priority: 1
    },
    {
        id: 'he-tu-tuong-xa-hoi-chua-nghia',
        title: 'Hệ tư tưởng xã hội chủ nghĩa',
        description: 'Theo lý thuyết Marx-Lenin, kinh tế kế hoạch hóa tập trung là biểu hiện của chế độ xã hội chủ nghĩa',
        details: [
            'Kinh tế tập trung đảm bảo sở hữu công cộng về tư liệu sản xuất',
            'Loại bỏ bóc lột và phân hóa giàu nghèo',
            'Đảm bảo công bằng trong phân phối tài nguyên',
            'Phù hợp với đường lối chính trị của Đảng'
        ],
        icon: '📜',
        priority: 2
    },
    {
        id: 'tai-nguyen-va-cong-nghe-han-che',
        title: 'Tài nguyên và công nghệ hạn chế',
        description: 'Đất nước nghèo nàn, tài nguyên ít, thiếu vốn và công nghệ cần thiết để phát triển',
        details: [
            'Chiến tranh kéo dài tàn phá hạ tầng và kinh tế',
            'Thiếu vốn đầu tư từ nước ngoài',
            'Công nghệ lạc hậu so với thế giới',
            'Cần tập trung nguồn lực có hạn cho các mục tiêu ưu tiên'
        ],
        icon: '💰',
        priority: 3
    },
    {
        id: 'nhan-vien-tro-tu-cac-nuoc-xa-hoi-chua-nghia',
        title: 'Nhận viện trợ từ các nước xã hội chủ nghĩa',
        description: 'Phụ thuộc vào viện trợ từ Liên Xô, Trung Quốc và các nước anh em khác',
        details: [
            'Viện trợ không hoàn lại từ Liên Xô và Trung Quốc',
            'Các nước này cũng áp dụng mô hình kinh tế kế hoạch hóa',
            'Điều kiện nhận viện trợ thường gắn liền với việc áp dụng mô hình họ đề xuất',
            'Tham gia các tổ chức kinh tế của khối xã hội chủ nghĩa'
        ],
        icon: '🤝',
        priority: 4
    },
    {
        id: 'kiem-soat-xa-hoi-sau-chien-tranh',
        title: 'Kiểm soát xã hội sau chiến tranh',
        description: 'Cần một cơ chế quản lý chặt chẽ để ổn định xã hội, phân phối tài nguyên công bằng',
        details: [
            'Kiểm soát giá cả để tránh lạm phát',
            'Đảm bảo phân phối lương thực công bằng',
            'Ngăn chặn tư sản, con phe phát triển',
            'Ổn định chính trị và xã hội sau chiến tranh'
        ],
        icon: '⚖️',
        priority: 5
    },
    {
        id: 'mo-hinh-phat-trien-cua-lien-xo',
        title: 'Mô hình phát triển của Liên Xô',
        description: 'Liên Xô là hình mẫu về phát triển kinh tế xã hội chủ nghĩa thành công',
        details: [
            'Liên Xô trở thành cường quốc thứ hai thế giới',
            'Phát triển công nghiệp nặng nhanh chóng',
            'Trở thành đối trọng với các nước tư bản',
            'Nhiều nước đang phát triển học tập mô hình này'
        ],
        icon: '🏭',
        priority: 6
    },
    {
        id: 'bi-co-lap-quoc-te',
        title: 'Bị cô lập quốc tế',
        description: 'Việt Nam bị cô lập về ngoại giao và kinh tế sau chiến tranh',
        details: [
            'Hoa Kỳ và các nước phương Tây áp đặt cấm vận',
            'Không thể tiếp cận thị trường quốc tế',
            'Chỉ có thể giao thương với khối xã hội chủ nghĩa',
            'Thiếu nguồn vốn đầu tư từ bên ngoài'
        ],
        icon: '🚫',
        priority: 7
    },
    {
        id: 'hau-qua-cua-chien-tranh-keo-dai',
        title: 'Hậu quả của chiến tranh kéo dài',
        description: 'Chiến tranh 30 năm tàn phá hạ tầng và nền kinh tế',
        details: [
            'Hạ tầng giao thông, điện nước bị tàn phá nghiêm trọng',
            'Thiếu nhân lực lành nghề',
            'Nền kinh tế bị gián đoạn suốt nhiều thập kỷ',
            'Cần thời gian dài để khôi phục và xây dựng lại'
        ],
        icon: '💥',
        priority: 8
    },
    {
        id: 'dam-bao-cong-bang-xa-hoi',
        title: 'Đảm bảo công bằng xã hội',
        description: 'Cơ chế bao cấp đảm bảo mọi người đều có quyền tiếp cận hàng hóa cơ bản',
        details: [
            'Phân phối hàng hóa theo định mức cho mọi người',
            'Không có sự phân hóa giàu nghèo quá lớn',
            'Mọi người đều được đảm bảo mức sống tối thiểu',
            'Ưu tiên cho trẻ em, người già và người có công'
        ],
        icon: '⚖️',
        priority: 9
    }
];

export const getReasonById = (id: string): BaoCapReason | undefined => {
    return baoCapReasons.find(reason => reason.id === id);
};

export const getReasonsByPriority = (max: number): BaoCapReason[] => {
    return baoCapReasons
        .slice()
        .sort((a, b) => a.priority - b.priority)
        .slice(0, max);
};
