export interface TimelineEvent {
    year: number;
    month?: number;
    title: string;
    description: string;
    image?: string;
    keywords: string[];
    category: 'economic' | 'social' | 'political' | 'culture';
    importance: 'high' | 'medium' | 'low';
}

export const timelineData: TimelineEvent[] = [
    {
        year: 1975,
        month: 4,
        title: 'Giải phóng miền Nam, thống nhất đất nước',
        description: 'Ngày 30/4/1975, giải phóng hoàn toàn miền Nam, kết thúc chiến tranh chống Mỹ. Cả nước thống nhất dưới chế độ xã hội chủ nghĩa.',
        keywords: ['giải phóng', 'thống nhất', 'xã hội chủ nghĩa', 'chiến tranh'],
        category: 'political',
        importance: 'high'
    },
    {
        year: 1976,
        title: 'Đại hội IV Đảng Cộng sản Việt Nam',
        description: 'Đại hội quyết định xây dựng kinh tế theo mô hình kế hoạch hóa tập trung, áp dụng toàn bộ hệ thống bao cấp từ Liên Xô.',
        keywords: ['Đại hội IV', 'kế hoạch hóa', 'tập trung', 'bao cấp'],
        category: 'political',
        importance: 'high'
    },
    {
        year: 1976,
        month: 7,
        title: 'Công cuộc cải tạo kinh tế miền Nam',
        description: 'Cải tạo toàn bộ nền kinh tế miền Nam theo mô hình miền Bắc. Quốc hữu hóa các xí nghiệp tư nhân, hợp tác hóa nông nghiệp.',
        keywords: ['cải tạo', 'quốc hữu hóa', 'hợp tác hóa', 'xí nghiệp'],
        category: 'economic',
        importance: 'high'
    },
    {
        year: 1978,
        title: 'Tham gia SEV - Hội đồng Tương trợ Kinh tế',
        description: 'Việt Nam gia nhập tổ chức kinh tế của các nước xã hội chủ nghĩa. Nhận viện trợ từ Liên Xô, Trung Quốc và các nước anh em.',
        keywords: ['SEV', 'viện trợ', 'Liên Xô', 'tương trợ'],
        category: 'economic',
        importance: 'high'
    },
    {
        year: 1979,
        month: 2,
        title: 'Chiến tranh biên giới Việt - Trung',
        description: 'Xung đột biên giới với Trung Quốc làm gián đoạn nguồn viện trợ quan trọng, ảnh hưởng nghiêm trọng đến kinh tế bao cấp.',
        keywords: ['chiến tranh biên giới', 'Trung Quốc', 'viện trợ'],
        category: 'political',
        importance: 'high'
    },
    {
        year: 1979,
        title: 'Tăng cường viện trợ từ Liên Xô',
        description: 'Việc Trung Quốc cắt viện trợ buộc Việt Nam phải phụ thuộc hoàn toàn vào Liên Xô, làm tăng sự phụ thuộc vào mô hình kinh tế tập trung.',
        keywords: ['Liên Xô', 'viện trợ', 'phụ thuộc'],
        category: 'economic',
        importance: 'medium'
    },
    {
        year: 1980,
        title: 'Hạn hán và thiếu lương thực nghiêm trọng',
        description: 'Thời tiết bất lợi cộng với chính sách hợp tác hóa kém hiệu quả dẫn đến thiếu lương thực nghiêm trọng. Người dân phải đối mặt với nạn đói.',
        keywords: ['hạn hán', 'thiếu lương thực', 'đói', 'hợp tác hóa'],
        category: 'economic',
        importance: 'high'
    },
    {
        year: 1981,
        title: 'Chỉ thị 100 - Khoán sản phẩm trong hợp tác xã',
        description: 'Bước đầu tiên cải cách - cho phép nông dân "khoán" ruộng, được giữ phần sản phẩm vượt hạn mức giao nộp, động viên sản xuất.',
        keywords: ['chỉ thị 100', 'khoán sản phẩm', 'cải cách', 'nông nghiệp'],
        category: 'economic',
        importance: 'high'
    },
    {
        year: 1982,
        title: 'Đại hội V Đảng - Thảo luận đổi mới',
        description: 'Bắt đầu xuất hiện ý kiến về cần thay đổi mô hình kinh tế. Thảo luận về việc áp dụng một số cơ chế thị trường giới hạn.',
        keywords: ['Đại hội V', 'đổi mới', 'thị trường', 'cải cách'],
        category: 'political',
        importance: 'high'
    },
    {
        year: 1986,
        month: 12,
        title: 'Đại hội VI Đảng - Đổi Mới',
        description: 'Đại hội lịch sử tuyên bố chính sách Đổi Mới, chấm dứt nền kinh tế bao cấp, chuyển sang "cơ chế thị trường theo định hướng xã hội chủ nghĩa".',
        keywords: ['Đại hội VI', 'Đổi Mới', 'bao cấp', 'thị trường', 'cải cách'],
        category: 'political',
        importance: 'high'
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
