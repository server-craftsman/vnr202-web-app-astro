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
		description: 'Phiếu để mua gạo theo định mức hàng tháng	',
		year: 1978,
		category: 'document',
		image: '/assets/artifact/so-mua-gao.jpg',
		tags: ['gạo', 'phiếu', 'định mức'],
		details: 'Mỗi người được cấp khoảng 13-16kg gạo/tháng, phụ thuộc vào độ tuổi và nghề nghiệp'
	},
	{
		id: 'ket-doan-photo',
		title: 'Ảnh xếp hàng mua hàng',
		description: 'Người dân xếp hàng dài để mua thực phẩm theo phiếu',
		year: 1980,
		category: 'photo',
		image: '/assets/artifact/xep-hang-1.jpg',
		tags: ['xếp hàng', 'mua bán', 'đời sống'],
		details: 'Hình ảnh điển hình của thời bao cấp - người dân xếp hàng từ sáng sớm để mua hàng'
	},
	{
		id: 'newspaper-nhan-dan',
		title: 'Báo Nhân Dân thời bao cấp',
		description: 'Mẫu báo Nhân Dân với các tin tức về sản xuất và lao động',
		year: 1982,
		category: 'newspaper',
		image: '/assets/artifact/bao-nhan-dan.jpg',
		tags: ['báo', 'tin tức', 'sản xuất'],
		details: 'Báo chí thời bao cấp tập trung vào ca ngợi thành tựu và kỷ luật lao động'
	},
	{
		id: 'voucher-book',
		title: 'Phiếu vãi',
		description: 'Phiếu vãi được sử dụng để mua các mặt hàng theo định mức hàng tháng',
		year: 1981,
		category: 'document',
		image: '/assets/artifact/phieu-vai.jpg',
		tags: ['phiếu', 'vãi', 'định mức'],
		details: 'Phiếu vãi được sử dụng để mua các mặt hàng theo định mức hàng tháng'
	},
	{
		id: 'cooperative-photo',
		title: 'Hợp tác xã nông nghiệp',
		description: 'Ảnh làm việc tại hợp tác xã nông nghiệp',
		year: 1977,
		category: 'photo',
		image: '/assets/artifact/hop-tac-nong-nghiep.jpg',
		tags: ['hợp tác xã', 'nông nghiệp', 'lao động'],
		details: 'Toàn bộ đất đai được tập thể hóa, nông dân làm chung cùng nhau'
	},
	{
		id: 'children-ticket',
		title: 'Phiếu đường trẻ em',
		description: 'Phiếu cấp đường cho trẻ em theo định mức hàng tháng',
		year: 1980,
		category: 'document',
		image: '/assets/artifact/phieu-duong-tre-em.jpg',
		tags: ['phiếu', 'đường', 'trẻ em', 'định mức'],
		details: 'Trẻ em dưới 12 tuổi được cấp phiếu mua đường, sữa và các thực phẩm dinh dưỡng đặc biệt'
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
