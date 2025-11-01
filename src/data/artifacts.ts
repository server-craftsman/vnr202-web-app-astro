export interface Artifact {
	id: string;
	title: string;
	description: string;
	year: number;
	category: 'document' | 'photo' | 'object' | 'newspaper';
	image?: string;
	tags: string[];
	details?: string;
}

export const artifacts: Artifact[] = [
	{
		id: 'ticket-book',
		title: 'Sổ phiếu lương thực thực phẩm',
		description: 'Sổ phiếu được sử dụng để mua lương thực, thực phẩm theo định mức được cấp',
		year: 1979,
		category: 'document',
		image: '/assets/artifact/phieu-mua-luong-thuc.jpg',
		tags: ['phiếu', 'lương thực', 'bao cấp'],
		details: 'Mỗi gia đình nhận sổ phiếu định kỳ với các hạn mức cụ thể: gạo, thịt, đường, vải...'
	},
	{
		id: 'rice-ticket',
		title: 'Phiếu mua gạo',
		description: 'Phiếu để mua gạo theo định mức hàng tháng',
		year: 1978,
		category: 'document',
		image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600',
		tags: ['gạo', 'phiếu', 'định mức'],
		details: 'Mỗi người được cấp khoảng 13-16kg gạo/tháng, phụ thuộc vào độ tuổi và nghề nghiệp'
	},
	{
		id: 'ket-doan-photo',
		title: 'Ảnh xếp hàng mua hàng',
		description: 'Người dân xếp hàng dài để mua thực phẩm theo phiếu',
		year: 1980,
		category: 'photo',
		image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=600',
		tags: ['xếp hàng', 'mua bán', 'đời sống'],
		details: 'Hình ảnh điển hình của thời bao cấp - người dân xếp hàng từ sáng sớm để mua hàng'
	},
	{
		id: 'factory-document',
		title: 'Văn bản quốc hữu hóa xí nghiệp',
		description: 'Tài liệu về việc quốc hữu hóa các xí nghiệp tư nhân ở miền Nam',
		year: 1976,
		category: 'document',
		image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
		tags: ['quốc hữu hóa', 'xí nghiệp', 'cải tạo'],
		details: 'Tất cả xí nghiệp tư nhân được chuyển thành doanh nghiệp nhà nước'
	},
	{
		id: 'newspaper-nhan-dan',
		title: 'Báo Nhân Dân thời bao cấp',
		description: 'Mẫu báo Nhân Dân với các tin tức về sản xuất và lao động',
		year: 1982,
		category: 'newspaper',
		image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600',
		tags: ['báo', 'tin tức', 'sản xuất'],
		details: 'Báo chí thời bao cấp tập trung vào ca ngợi thành tựu và kỷ luật lao động'
	},
	{
		id: 'ration-book',
		title: 'Sổ mua hàng theo tháng',
		description: 'Sổ đăng ký mua các mặt hàng theo định mức hàng tháng',
		year: 1981,
		category: 'document',
		image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
		tags: ['định mức', 'mua hàng', 'phiếu'],
		details: 'Ghi chép chi tiết từng lần mua hàng: ngày, loại hàng, số lượng...'
	},
	{
		id: 'cooperative-photo',
		title: 'Hợp tác xã nông nghiệp',
		description: 'Ảnh làm việc tại hợp tác xã nông nghiệp',
		year: 1977,
		category: 'photo',
		image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600',
		tags: ['hợp tác xã', 'nông nghiệp', 'lao động'],
		details: 'Toàn bộ đất đai được tập thể hóa, nông dân làm chung cùng nhau'
	},
	{
		id: 'price-list',
		title: 'Bảng giá hàng hóa nhà nước',
		description: 'Danh sách giá các mặt hàng do nhà nước quy định',
		year: 1980,
		category: 'document',
		image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
		tags: ['giá', 'nhà nước', 'hàng hóa'],
		details: 'Giá cả được nhà nước ấn định, không theo cung cầu thị trường'
	}
];

export const getArtifactsByCategory = (category: Artifact['category']): Artifact[] => {
	return artifacts.filter(artifact => artifact.category === category);
};

export const getArtifactsByYear = (year: number): Artifact[] => {
	return artifacts.filter(artifact => artifact.year === year);
};

export const getArtifactById = (id: string): Artifact | undefined => {
	return artifacts.find(artifact => artifact.id === id);
};

export const artifactCategories: Artifact['category'][] = ['document', 'photo', 'object', 'newspaper'];
