export enum ArtifactCategory {
	DOCUMENT = 'document',
	PHOTO = 'photo',
	OBJECT = 'object',
	NEWSPAPER = 'newspaper',
}

export interface Artifact {
	id: string;
	title: string;
	description: string;
	year: number;
	category: ArtifactCategory;
	image?: string;
	tags: string[];
	details?: string;
	video?: string;
}

export const artifacts: Artifact[] = [
	{
		id: 'so-phieu-luong-thuc-thuc-pham',
		title: 'Sổ phiếu lương thực thực phẩm',
		description: 'Sổ phiếu được sử dụng để mua lương thực, thực phẩm theo định mức được cấp',
		year: 1979,
		category: ArtifactCategory.DOCUMENT,
		image: '/assets/artifact/phieu-mua-luong-thuc.jpg',
		tags: ['phiếu', 'lương thực', 'bao cấp'],
		details: 'Mỗi gia đình nhận sổ phiếu định kỳ với các hạn mức cụ thể: gạo, thịt, đường, vải...'
	},
	{
		id: 'phieu-mua-gao',
		title: 'Phiếu mua gạo',
		description: 'Phiếu để mua gạo theo định mức hàng tháng',
		year: 1978,
		category: ArtifactCategory.DOCUMENT,
		image: '/assets/artifact/so-mua-gao.jpg',
		tags: ['gạo', 'phiếu', 'định mức'],
		details: 'Mỗi người được cấp khoảng 13-16kg gạo/tháng, phụ thuộc vào độ tuổi và nghề nghiệp'
	},
	{
		id: 'anh-xep-hang-mua-hang',
		title: 'Ảnh xếp hàng mua hàng',
		description: 'Người dân xếp hàng dài để mua thực phẩm theo phiếu',
		year: 1980,
		category: ArtifactCategory.PHOTO,
		image: '/assets/artifact/xep-hang-1.jpg',
		tags: ['xếp hàng', 'mua bán', 'đời sống'],
		details: 'Hình ảnh điển hình của thời bao cấp - người dân xếp hàng từ sáng sớm để mua hàng',
		video: 'https://youtu.be/ll3OABu4l9I?si=18lxdFZ9xJqRDFYs'
	},
	{
		id: 'bao-nhan-dan-thoi-bao-cap',
		title: 'Báo Nhân Dân thời bao cấp',
		description: 'Mẫu báo Nhân Dân với các tin tức về sản xuất và lao động',
		year: 1982,
		category: ArtifactCategory.NEWSPAPER,
		image: '/assets/artifact/bao-nhan-dan.jpg',
		tags: ['báo', 'tin tức', 'sản xuất'],
		details: 'Báo chí thời bao cấp tập trung vào ca ngợi thành tựu và kỷ luật lao động'
	},
	{
		id: 'phieu-vai',
		title: 'Phiếu vãi',
		description: 'Phiếu vãi được sử dụng để mua các mặt hàng theo định mức hàng tháng',
		year: 1981,
		category: ArtifactCategory.DOCUMENT,
		image: '/assets/artifact/phieu-vai.jpg',
		tags: ['phiếu', 'vãi', 'định mức'],
		details: 'Phiếu vãi được sử dụng để mua các mặt hàng theo định mức hàng tháng'
	},
	{
		id: 'phieu-duong-tre-em',
		title: 'Phiếu đường trẻ em',
		description: 'Phiếu cấp đường cho trẻ em theo định mức hàng tháng',
		year: 1980,
		category: ArtifactCategory.DOCUMENT,
		image: '/assets/artifact/phieu-duong-tre-em.jpg',
		tags: ['phiếu', 'đường', 'trẻ em', 'định mức'],
		details: 'Trẻ em dưới 12 tuổi được cấp phiếu mua đường, sữa và các thực phẩm dinh dưỡng đặc biệt'
	},
	{
		id: 'phieu-mua-thit',
		title: 'Phiếu mua thịt',
		description: 'Phiếu để mua thịt theo định mức hàng tháng - một loại hàng khan hiếm nhất',
		year: 1979,
		category: ArtifactCategory.DOCUMENT,
		image: '/assets/artifact/phieu-thit.jpg',
		tags: ['phiếu', 'thịt', 'định mức', 'khan hiếm'],
		details: 'Mỗi người được cấp khoảng 0.5-1kg thịt/tháng. Thịt là hàng hóa khan hiếm nhất, nhiều tháng không có thịt để bán'
	},
	{
		id: 'phieu-mua-chat-dot',
		title: 'Phiếu mua chất đốt',
		description: 'Phiếu để mua chất đốt - vật dụng thiết yếu',
		year: 1980,
		category: ArtifactCategory.DOCUMENT,
		image: '/assets/artifact/phieu-chat-dot.jpg',
		tags: ['phiếu', 'chất đốt', 'định mức'],
		details: 'Chất đốt được phân phối theo định mức. Mỗi người được cấp khoảng 10kg chất đốt/tháng'
	},
	{
		id: 'hop-hop-tac-xa',
		title: 'Họp hợp tác xã',
		description: 'Cuộc họp của hợp tác xã để phân chia công việc và tính công điểm',
		year: 1978,
		category: ArtifactCategory.PHOTO,
		image: '/assets/artifact/hop-tac-xa.jpg',
		tags: ['hợp tác xã', 'họp', 'công điểm', 'nông nghiệp'],
		details: 'Mỗi tuần hợp tác xã tổ chức họp để phân công công việc và tính công điểm. Công điểm quyết định thu nhập của mỗi gia đình',
		video: 'https://www.youtube.com/watch?v=-AwcAbeKe1Q'
	},
	{
		id: 'cho-coc-thoi-bao-cap',
		title: 'Chợ cóc thời bao cấp',
		description: 'Chợ cóc là nơi người dân trao đổi hàng hóa ngoài hệ thống mậu dịch',
		year: 1983,
		category: ArtifactCategory.PHOTO,
		image: '/assets/artifact/cho-coc.jpg',
		tags: ['chợ cóc', 'trao đổi', 'hàng hóa', 'đời sống'],
		details: 'Chợ cóc là hiện tượng phổ biến, nơi người dân trao đổi hàng hóa với nhau ngoài hệ thống phân phối chính thức',
		video: 'https://youtu.be/77QuZlOWfro?si=J8w--1dACCnaDeQ-	'
	},

	{
		id: 'radio-thoi-bao-cap',
		title: 'Radio thời bao cấp',
		description: 'Radio là phương tiện giải trí và cập nhật thông tin chính',
		year: 1977,
		category: ArtifactCategory.OBJECT,
		image: '/assets/artifact/radio.jpg',
		tags: ['radio', 'giải trí', 'thông tin', 'văn hóa'],
		video: 'https://youtu.be/379MOXXdjD4?si=hwhC0sQoPVfJkea7',
		details: 'Radio là thiết bị giải trí phổ biến nhất. Mọi người nghe đài để cập nhật tin tức, nghe nhạc và chương trình phát thanh'
	},
	// {
	// 	id: 'newspaper-tien-phong',
	// 	title: 'Báo Tiền Phong',
	// 	description: 'Báo Tiền Phong với các tin tức về thanh niên và lao động',
	// 	year: 1983,
	// 	category: 'newspaper',
	// 	image: '/assets/artifact/bao-nhan-dan.jpg',
	// 	tags: ['báo', 'thanh niên', 'lao động', 'tin tức'],
	// 	details: 'Báo Tiền Phong tập trung vào các vấn đề thanh niên, lao động và các phong trào thi đua sản xuất'
	// },
	// {
	// 	id: 'ration-card',
	// 	title: 'Thẻ khẩu phần',
	// 	description: 'Thẻ khẩu phần xác định định mức hàng hóa của mỗi gia đình',
	// 	year: 1979,
	// 	category: 'document',
	// 	image: '/assets/artifact/phieu-mua-luong-thuc.jpg',
	// 	tags: ['thẻ', 'khẩu phần', 'định mức', 'gia đình'],
	// 	details: 'Thẻ khẩu phần ghi rõ số người trong gia đình, nghề nghiệp, từ đó xác định định mức hàng hóa được nhận'
	// },
	// {
	// 	id: 'work-permit',
	// 	title: 'Giấy phép lao động',
	// 	description: 'Giấy phép lao động là bắt buộc để làm việc trong các xí nghiệp quốc doanh',
	// 	year: 1978,
	// 	category: 'document',
	// 	image: '/assets/artifact/phieu-vai.jpg',
	// 	tags: ['giấy phép', 'lao động', 'xí nghiệp', 'quốc doanh'],
	// 	details: 'Mọi người lao động phải có giấy phép lao động. Việc chuyển công việc cần phải được cơ quan quản lý lao động phê duyệt'
	// }
];

export const getArtifactsByCategory = (category: ArtifactCategory): Artifact[] => {
	return artifacts.filter(artifact => artifact.category === category);
};

export const getArtifactsByYear = (year: number): Artifact[] => {
	return artifacts.filter(artifact => artifact.year === year);
};

export const getArtifactById = (id: string): Artifact | undefined => {
	return artifacts.find(artifact => artifact.id === id);
};

export const artifactCategories: ArtifactCategory[] = [ArtifactCategory.DOCUMENT, ArtifactCategory.PHOTO, ArtifactCategory.OBJECT, ArtifactCategory.NEWSPAPER];

// Convert category enum to Vietnamese display name
export const getCategoryDisplayName = (category: ArtifactCategory): string => {
	const categoryMap: Record<ArtifactCategory, string> = {
		[ArtifactCategory.DOCUMENT]: 'Tài liệu',
		[ArtifactCategory.PHOTO]: 'Hình ảnh',
		[ArtifactCategory.OBJECT]: 'Hiện vật',
		[ArtifactCategory.NEWSPAPER]: 'Báo chí',
	};
	return categoryMap[category] || category;
};
