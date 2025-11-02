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
  {
    id: 'q11',
    question: 'Năm 1985, tỷ lệ lạm phát ở Việt Nam đạt mức nào?',
    options: [
      '50%',
      '100%',
      '300%',
      'Trên 400%'
    ],
    correctAnswer: 3,
    explanation: 'Năm 1985, lạm phát tăng vọt lên trên 400%, gây ra khủng hoảng kinh tế nghiêm trọng.',
    difficulty: 'hard',
    category: 'economy'
  },
  {
    id: 'q12',
    question: 'Hệ thống tem phiếu chính thức được áp dụng vào năm nào?',
    options: [
      '1976',
      '1978',
      '1980',
      '1982'
    ],
    correctAnswer: 2,
    explanation: 'Hệ thống tem phiếu chính thức được áp dụng trên toàn quốc vào năm 1980.',
    difficulty: 'medium',
    category: 'history'
  },
  {
    id: 'q13',
    question: 'Chợ cóc là hiện tượng gì trong thời bao cấp?',
    options: [
      'Chợ chính thức của nhà nước',
      'Nơi trao đổi hàng hóa ngoài hệ thống phân phối',
      'Chợ dành cho nông dân',
      'Chợ buôn bán hàng nhập khẩu'
    ],
    correctAnswer: 1,
    explanation: 'Chợ cóc là nơi người dân trao đổi hàng hóa với nhau ngoài hệ thống phân phối chính thức của nhà nước.',
    difficulty: 'easy',
    category: 'society'
  },
  {
    id: 'q14',
    question: 'Xí nghiệp quốc doanh là gì?',
    options: [
      'Xí nghiệp tư nhân',
      'Xí nghiệp do nhà nước sở hữu và quản lý',
      'Xí nghiệp hợp tác với nước ngoài',
      'Xí nghiệp do hợp tác xã quản lý'
    ],
    correctAnswer: 1,
    explanation: 'Xí nghiệp quốc doanh là các xí nghiệp do nhà nước sở hữu và quản lý hoàn toàn.',
    difficulty: 'easy',
    category: 'economy'
  },
  {
    id: 'q15',
    question: 'Công điểm trong hợp tác xã được dùng để làm gì?',
    options: [
      'Đổi lấy hàng hóa',
      'Tính thu nhập của mỗi người',
      'Tham gia bầu cử',
      'Đi xe buýt miễn phí'
    ],
    correctAnswer: 1,
    explanation: 'Công điểm quyết định thu nhập của mỗi người trong hợp tác xã - người làm nhiều được nhiều công điểm và nhận nhiều tiền hơn.',
    difficulty: 'medium',
    category: 'economy'
  },
  {
    id: 'q16',
    question: 'Thời bao cấp, người dân được cấp bao nhiêu kg thịt mỗi tháng?',
    options: [
      '2-3 kg',
      '0.5-1 kg',
      '3-5 kg',
      'Không được cấp thịt'
    ],
    correctAnswer: 1,
    explanation: 'Định mức thịt rất thấp, mỗi người chỉ được cấp khoảng 0.5-1kg thịt/tháng, và nhiều tháng không có thịt để bán.',
    difficulty: 'hard',
    category: 'society'
  },
  {
    id: 'q17',
    question: 'Đại hội V Đảng (1982) có nội dung gì đáng chú ý?',
    options: [
      'Bắt đầu thảo luận về đổi mới',
      'Quyết định áp dụng bao cấp',
      'Thông qua chính sách Đổi Mới',
      'Kết thúc thời bao cấp'
    ],
    correctAnswer: 0,
    explanation: 'Đại hội V bắt đầu xuất hiện ý kiến về cần thay đổi mô hình kinh tế, thảo luận về việc áp dụng một số cơ chế thị trường giới hạn.',
    difficulty: 'medium',
    category: 'history'
  },
  {
    id: 'q18',
    question: 'Khoán hộ là gì?',
    options: [
      'Cho phép nông dân tự chủ sản xuất trên phần ruộng được giao',
      'Bắt buộc nông dân hợp tác hóa',
      'Quốc hữu hóa đất đai',
      'Phân chia đất đai cho tư nhân'
    ],
    correctAnswer: 0,
    explanation: 'Khoán hộ cho phép nông dân tự chủ sản xuất trên phần ruộng được giao, giữ lại phần sản xuất vượt mức.',
    difficulty: 'medium',
    category: 'economy'
  },
  {
    id: 'q19',
    question: 'Năm 1983, tình hình kinh tế Việt Nam như thế nào?',
    options: [
      'Phát triển mạnh',
      'Nạn đói và khủng hoảng lương thực nghiêm trọng',
      'Xuất khẩu tăng trưởng',
      'Ổn định và phát triển'
    ],
    correctAnswer: 1,
    explanation: 'Năm 1983, Việt Nam đối mặt với nạn đói và khủng hoảng lương thực nghiêm trọng do hạn hán và chính sách hợp tác hóa kém hiệu quả.',
    difficulty: 'hard',
    category: 'history'
  },
  {
    id: 'q20',
    question: 'Con phe là thuật ngữ chỉ ai?',
    options: [
      'Người nông dân',
      'Người buôn bán ngoài luồng, không cần tem phiếu',
      'Công nhân xí nghiệp',
      'Người làm việc trong hợp tác xã'
    ],
    correctAnswer: 1,
    explanation: 'Con phe là những người buôn bán ngoài luồng, bán hàng với giá cao hơn nhưng không cần tem phiếu.',
    difficulty: 'easy',
    category: 'society'
  }
];

