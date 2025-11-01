export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-3)
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'history' | 'economy' | 'culture' | 'society';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Thời kỳ bao cấp ở Việt Nam kéo dài từ năm nào đến năm nào?',
    options: ['1954 - 1975', '1975 - 1986', '1976 - 1990', '1980 - 1986'],
    correctAnswer: 1,
    explanation: 'Thời kỳ bao cấp chính thức là từ 1975 (sau thống nhất) đến 1986 (Đổi Mới).',
    difficulty: 'easy',
    category: 'history'
  },
  {
    id: 'q2',
    question: 'Đại hội nào của Đảng đánh dấu bước ngoặt Đổi Mới, kết thúc thời bao cấp?',
    options: ['Đại hội IV (1976)', 'Đại hội V (1982)', 'Đại hội VI (1986)', 'Đại hội VII (1991)'],
    correctAnswer: 2,
    explanation: 'Đại hội VI năm 1986 đã ra nghị quyết Đổi Mới, chấm dứt cơ chế bao cấp.',
    difficulty: 'easy',
    category: 'history'
  },
  {
    id: 'q3',
    question: 'Tem phiếu được sử dụng để làm gì trong thời bao cấp?',
    options: [
      'Đi xe buýt miễn phí',
      'Mua hàng hóa theo định mức',
      'Tham gia bầu cử',
      'Nhận lương hàng tháng'
    ],
    correctAnswer: 1,
    explanation: 'Tem phiếu là giấy chứng nhận để mua hàng hóa theo định mức do nhà nước cấp phát.',
    difficulty: 'easy',
    category: 'economy'
  },
  {
    id: 'q4',
    question: 'Chỉ thị 100 năm 1981 cho phép điều gì trong nông nghiệp?',
    options: [
      'Tư nhân hóa toàn bộ đất đai',
      'Khoán sản phẩm cho nông dân',
      'Hợp tác hóa bắt buộc',
      'Xuất khẩu gạo tự do'
    ],
    correctAnswer: 1,
    explanation: 'Chỉ thị 100 cho phép khoán sản phẩm - nông dân được giữ phần sản xuất vượt mức.',
    difficulty: 'medium',
    category: 'economy'
  },
  {
    id: 'q5',
    question: 'SEV là viết tắt của tổ chức nào mà Việt Nam tham gia năm 1978?',
    options: [
      'Liên minh Kinh tế Châu Á',
      'Hội đồng Tương trợ Kinh tế',
      'Tổ chức Thương mại Thế giới',
      'Liên hợp quốc'
    ],
    correctAnswer: 1,
    explanation: 'SEV (Hội đồng Tương trợ Kinh tế) là tổ chức kinh tế của các nước xã hội chủ nghĩa.',
    difficulty: 'medium',
    category: 'history'
  },
  {
    id: 'q6',
    question: 'Mỗi người dân được cấp bao nhiêu kg gạo mỗi tháng trong thời bao cấp?',
    options: ['5-8 kg', '13-16 kg', '20-25 kg', '30-35 kg'],
    correctAnswer: 1,
    explanation: 'Định mức gạo thông thường là 13-16kg/người/tháng, tùy độ tuổi và nghề nghiệp.',
    difficulty: 'hard',
    category: 'society'
  },
  {
    id: 'q7',
    question: 'Chiến tranh biên giới với nước nào năm 1979 ảnh hưởng lớn đến kinh tế VN?',
    options: ['Campuchia', 'Trung Quốc', 'Lào', 'Thái Lan'],
    correctAnswer: 1,
    explanation: 'Chiến tranh biên giới Việt-Trung 1979 làm gián đoạn nguồn viện trợ quan trọng.',
    difficulty: 'medium',
    category: 'history'
  },
  {
    id: 'q8',
    question: 'Lý do chính khiến Việt Nam áp dụng kinh tế kế hoạch hóa tập trung là gì?',
    options: [
      'Bắt chước các nước tư bản',
      'Theo hệ tư tưởng xã hội chủ nghĩa và mô hình Liên Xô',
      'Yêu cầu của Liên Hợp Quốc',
      'Để tăng xuất khẩu'
    ],
    correctAnswer: 1,
    explanation: 'Việt Nam theo hệ tư tưởng XHCN và học mô hình Liên Xô, đồng minh chính lúc bấy giờ.',
    difficulty: 'medium',
    category: 'economy'
  },
  {
    id: 'q9',
    question: 'Hàng hóa thời bao cấp được phân phối theo nguyên tắc nào?',
    options: [
      'Ai trả giá cao hơn',
      'Xếp hàng theo thứ tự',
      'Định mức theo hộ khẩu và nghề nghiệp',
      'Random ngẫu nhiên'
    ],
    correctAnswer: 2,
    explanation: 'Hàng hóa được phân phối theo định mức dựa trên hộ khẩu, tuổi tác, nghề nghiệp.',
    difficulty: 'easy',
    category: 'society'
  },
  {
    id: 'q10',
    question: 'Hậu quả lớn nhất của cơ chế bao cấp là gì?',
    options: [
      'Lạm phát cao',
      'Thiếu động lực sản xuất, năng suất thấp',
      'Xuất khẩu quá nhiều',
      'Dân số tăng quá nhanh'
    ],
    correctAnswer: 1,
    explanation: 'Cơ chế bao cấp làm mất động lực sản xuất, dẫn đến năng suất thấp và thiếu hàng hóa.',
    difficulty: 'medium',
    category: 'economy'
  },
];

