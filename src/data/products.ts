// Product data for Hemela Peptides
// Categories and products matching industry-standard peptide catalog

export interface Product {
  id: string;
  name: string;
  category: string;
  cas: string;
  molecularFormula: string;
  molecularWeight: string;
  purity: string;
  appearance: string;
  description: string;
  descriptionZh: string;
  applications: string[];
  applicationsZh: string[];
  image: string;
  featured: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
}

export const categories: ProductCategory[] = [
  {
    id: 'glp-1',
    name: 'GLP-1 Peptides',
    nameZh: 'GLP-1 系列',
    description: 'GLP-1 receptor agonists for metabolic research and therapeutic applications.',
    descriptionZh: 'GLP-1受体激动剂，用于代谢研究和治疗应用。',
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Peptides',
    nameZh: '美容肽',
    description: 'Bioactive peptides for skincare, anti-aging and cosmetic formulations.',
    descriptionZh: '用于护肤、抗衰老和化妆品配方的生物活性肽。',
  },
  {
    id: 'repair',
    name: 'Repair & Recovery Peptides',
    nameZh: '修复与恢复肽',
    description: 'Peptides supporting tissue repair, muscle recovery and wound healing.',
    descriptionZh: '支持组织修复、肌肉恢复和伤口愈合的肽类。',
  },
  {
    id: 'metabolic',
    name: 'Metabolic Peptides',
    nameZh: '代谢类肽',
    description: 'Peptides involved in metabolism, fat loss and energy regulation.',
    descriptionZh: '参与新陈代谢、减脂和能量调节的肽类。',
  },
  {
    id: 'other',
    name: 'Other Research Peptides',
    nameZh: '其他研究肽',
    description: 'Specialized peptides for various research applications.',
    descriptionZh: '用于各种研究应用的专业肽类。',
  },
];

export const products: Product[] = [
  // GLP-1 Peptides
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    category: 'glp-1',
    cas: '910463-68-2',
    molecularFormula: 'C₁₈₇H₂₉₁N₄₅O₅₉',
    molecularWeight: '4113.58 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'Semaglutide is a GLP-1 receptor agonist used in metabolic research. It demonstrates extended half-life due to albumin binding, making it a valuable tool for studying glucose metabolism and weight regulation pathways.',
    descriptionZh: 'Semaglutide是一种GLP-1受体激动剂，用于代谢研究。凭借白蛋白结合带来的延长半衰期，它是研究葡萄糖代谢和体重调节通路的重要工具。',
    applications: ['Metabolic research', 'Glucose metabolism studies', 'Weight regulation research'],
    applicationsZh: ['代谢研究', '葡萄糖代谢研究', '体重调节研究'],
    image: '/images/products/semaglutide.jpg',
    featured: true,
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    category: 'glp-1',
    cas: '2023788-19-2',
    molecularFormula: 'C₂₂₅H₃₄₈N₄₈O₆₈',
    molecularWeight: '4813.45 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'Tirzepatide is a dual GIP/GLP-1 receptor agonist offering unique metabolic research potential. As the first dual incretin agonist, it provides valuable insights into synergistic metabolic pathway modulation.',
    descriptionZh: 'Tirzepatide是一种双GIP/GLP-1受体激动剂，具有独特的代谢研究潜力。作为首个双肠促胰岛素激动剂，它为协同代谢通路调节提供了宝贵的见解。',
    applications: ['Dual receptor agonism studies', 'Metabolic pathway research', 'Incretin biology'],
    applicationsZh: ['双受体激动研究', '代谢通路研究', '肠促胰岛素生物学'],
    image: '/images/products/tirzepatide.jpg',
    featured: true,
  },
  {
    id: 'retatrutide',
    name: 'Reta Peptide (RT60)',
    category: 'glp-1',
    cas: '2381089-83-2',
    molecularFormula: 'C₂₂₁H₃₄₂N₄₆O₆₈',
    molecularWeight: '4728.33 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'Reta Peptide (RT60) is a triple agonist targeting GLP-1, GIP, and glucagon receptors. This innovative research peptide enables multi-pathway metabolic investigation with extended action profile.',
    descriptionZh: 'Reta Peptide (RT60)是一种靶向GLP-1、GIP和胰高血糖素受体的三受体激动剂。这一创新的研究肽能够实现具有延长作用曲线的多通路代谢研究。',
    applications: ['Triple receptor agonism', 'Advanced metabolic research', 'Energy expenditure studies'],
    applicationsZh: ['三受体激动研究', '高级代谢研究', '能量消耗研究'],
    image: '/images/products/rt60.jpg',
    featured: true,
  },
  {
    id: 'rt20',
    name: 'Reta Peptide (RT20)',
    category: 'glp-1',
    cas: '2381089-83-2',
    molecularFormula: 'C₂₂₁H₃₄₂N₄₆O₆₈',
    molecularWeight: '4728.33 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'Reta Peptide (RT20) is a research-grade triple agonist peptide for GLP-1/GIP/Glucagon receptor studies. Optimized for laboratory research applications requiring precise metabolic pathway investigation.',
    descriptionZh: 'Reta Peptide (RT20)是一种研究级三受体激动剂肽，用于GLP-1/GIP/胰高血糖素受体研究。优化用于需要精确代谢通路研究的实验室应用。',
    applications: ['Metabolic research', 'Receptor binding studies', 'Energy metabolism'],
    applicationsZh: ['代谢研究', '受体结合研究', '能量代谢'],
    image: '/images/products/rt20.jpg',
    featured: false,
  },

  // Cosmetic Peptides
  {
    id: 'ghk-cu',
    name: 'GHK-Cu (Copper Peptide)',
    category: 'cosmetic',
    cas: '49557-75-7',
    molecularFormula: 'C₁₄H₂₄CuN₆O₄',
    molecularWeight: '340.38 g/mol',
    purity: '≥98%',
    appearance: 'Blue crystalline powder',
    description: 'GHK-Cu is a naturally occurring copper complex renowned for skin regeneration and wound healing properties. It stimulates collagen synthesis, promotes angiogenesis, and exhibits potent antioxidant activity.',
    descriptionZh: 'GHK-Cu是一种天然存在的铜复合物，以皮肤再生和伤口愈合特性而闻名。它能刺激胶原蛋白合成，促进血管新生，并展现强大的抗氧化活性。',
    applications: ['Cosmetic formulations', 'Anti-aging research', 'Wound healing studies'],
    applicationsZh: ['化妆品配方', '抗衰老研究', '伤口愈合研究'],
    image: '/images/products/ghk-cu.jpg',
    featured: true,
  },
  {
    id: 'mt-2',
    name: 'Melanotan II (MT-2)',
    category: 'cosmetic',
    cas: '121062-08-6',
    molecularFormula: 'C₅₀H₆₉N₁₅O₉',
    molecularWeight: '1024.18 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'Melanotan II is an analog of alpha-melanocyte stimulating hormone (α-MSH). It is widely used in tanning research and melanocortin receptor studies.',
    descriptionZh: 'Melanotan II是α-黑色素细胞刺激激素（α-MSH）的类似物。广泛用于美黑研究和黑皮质素受体研究。',
    applications: ['Melanocortin research', 'Pigmentation studies', 'Skin biology'],
    applicationsZh: ['黑皮质素研究', '色素沉着研究', '皮肤生物学'],
    image: '/images/products/mt-2.jpg',
    featured: false,
  },
  {
    id: 'ip10',
    name: 'Induction Peptide (IP10)',
    category: 'cosmetic',
    cas: 'Custom',
    molecularFormula: 'Proprietary',
    molecularWeight: 'Proprietary',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'IP10 is a specialized cosmetic peptide designed for skin repair and rejuvenation research. It demonstrates significant potential in stimulating cellular renewal and improving skin texture.',
    descriptionZh: 'IP10是一种专为皮肤修复和焕肤研究设计的专业美容肽。在刺激细胞更新和改善皮肤质地方面展现出显著潜力。',
    applications: ['Skin rejuvenation', 'Cellular renewal research', 'Dermatology studies'],
    applicationsZh: ['皮肤焕新', '细胞更新研究', '皮肤科学研究'],
    image: '/images/products/ip10.jpg',
    featured: false,
  },

  // Repair & Recovery Peptides
  {
    id: 'bpc-157',
    name: 'BPC-157',
    category: 'repair',
    cas: '137525-51-0',
    molecularFormula: 'C₆₂H₉₈N₁₆O₂₂',
    molecularWeight: '1419.54 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'BPC-157 is a pentadecapeptide derived from human gastric juice protein. It exhibits remarkable healing properties, promoting tendon, ligament, and gastrointestinal tissue repair.',
    descriptionZh: 'BPC-157是一种源自人胃液蛋白的十五肽。具有出色的愈合特性，促进肌腱、韧带和胃肠组织修复。',
    applications: ['Tissue repair research', 'GI tract studies', 'Tendon/ligament healing'],
    applicationsZh: ['组织修复研究', '胃肠道研究', '肌腱/韧带愈合'],
    image: '/images/products/bpc-157.jpg',
    featured: true,
  },
  {
    id: 'tb-500',
    name: 'TB-500 (Thymosin Beta-4)',
    category: 'repair',
    cas: '77591-33-4',
    molecularFormula: 'C₂₁₂H₃₅₀N₅₆O₇₈S',
    molecularWeight: '4963.44 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'TB-500 is a synthetic peptide analog of Thymosin Beta-4, a naturally occurring protein. It promotes cell migration, angiogenesis, and tissue regeneration, making it valuable for wound healing research.',
    descriptionZh: 'TB-500是胸腺肽β-4（一种天然蛋白）的合成肽类似物。它促进细胞迁移、血管新生和组织再生，是伤口愈合研究的重要工具。',
    applications: ['Wound healing', 'Angiogenesis research', 'Muscle recovery studies'],
    applicationsZh: ['伤口愈合', '血管新生研究', '肌肉恢复研究'],
    image: '/images/products/tb-500.jpg',
    featured: true,
  },
  {
    id: 'ms40',
    name: 'MOTS-c (MS40)',
    category: 'repair',
    cas: '1627580-64-8',
    molecularFormula: 'C₁₀₁H₁₅₂N₂₈O₂₃S₂',
    molecularWeight: '2174.64 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'MOTS-c is a mitochondrial-derived peptide encoded by the 12S rRNA region of mtDNA. It regulates metabolic homeostasis and demonstrates potential in cellular energy metabolism research.',
    descriptionZh: 'MOTS-c是由线粒体DNA 12S rRNA区域编码的线粒体衍生肽。它调节代谢稳态，在细胞能量代谢研究中展现出潜力。',
    applications: ['Mitochondrial research', 'Metabolic regulation', 'Aging studies'],
    applicationsZh: ['线粒体研究', '代谢调节', '衰老研究'],
    image: '/images/products/ms40.jpg',
    featured: false,
  },

  // Metabolic Peptides
  {
    id: 'cp10',
    name: 'CJC-1295 (CP10)',
    category: 'metabolic',
    cas: '863288-34-0',
    molecularFormula: 'C₁₅₂H₂₅₂N₄₄O₄₂',
    molecularWeight: '3349.9 g/mol',
    purity: '≥99%',
    appearance: 'White to off-white powder',
    description: 'CJC-1295 (CP10) is a long-acting GHRH analog that increases growth hormone secretion. It features an extended half-life due to DAC conjugation, enabling sustained GH release research.',
    descriptionZh: 'CJC-1295 (CP10)是一种长效GHRH类似物，可增加生长激素分泌。由于DAC偶联，具有延长的半衰期，能够进行持续的GH释放研究。',
    applications: ['GH release studies', 'Endocrinology research', 'Growth factor biology'],
    applicationsZh: ['GH释放研究', '内分泌学研究', '生长因子生物学'],
    image: '/images/products/cp10.jpg',
    featured: false,
  },

  // Other
  {
    id: 'custom',
    name: 'Custom Peptide Synthesis',
    category: 'other',
    cas: 'Custom',
    molecularFormula: 'Custom',
    molecularWeight: 'Custom',
    purity: '≥95-99%',
    appearance: 'Per specification',
    description: 'Hemela Peptides offers professional custom peptide synthesis services. Our experienced team can synthesize peptides according to your exact specifications with rigorous quality control and HPLC/MS verification.',
    descriptionZh: 'Hemela Peptides提供专业的定制肽合成服务。我们经验丰富的团队可以根据您的确切规格合成多肽，并进行严格的质量控制和HPLC/MS验证。',
    applications: ['Custom research', 'API development', 'Novel peptide design'],
    applicationsZh: ['定制研究', 'API开发', '新肽设计'],
    image: '/images/products/custom.jpg',
    featured: false,
  },
];

export const testimonials = [
  {
    name: 'Dr. James Mitchell',
    title: 'Research Director, BioLab Inc.',
    text: 'The quality of peptides from Hemela is exceptional. Our research team has been consistently satisfied with the purity and consistency of their products. The HPLC and MS reports provided with each batch give us complete confidence in our experimental results.',
    textZh: 'Hemela提供的肽质量卓越。我们的研究团队对产品的纯度和一致性一直非常满意。每批次附带的HPLC和MS报告让我们对实验结果充满信心。',
  },
  {
    name: 'Prof. Anna Kowalski',
    title: 'Lead Scientist, Peptide Therapeutics',
    text: 'We have been working with Hemela Peptides for over two years. Their custom synthesis service is reliable and precise. The communication is excellent, and they always deliver on time with proper documentation.',
    textZh: '我们与Hemela Peptides合作已有两年多。他们的定制合成服务可靠且精确。沟通非常好，始终按时交付并提供完善的文件。',
  },
  {
    name: 'Dr. Li Wei',
    title: 'Cosmetic Research Lab, Shanghai',
    text: 'The cosmetic peptide range from Hemela, particularly the GHK-Cu, has been instrumental in our anti-aging research. The purity levels consistently exceed 98%, which is critical for our formulation work.',
    textZh: 'Hemela的美容肽系列，尤其是GHK-Cu，在我们的抗衰老研究中发挥了重要作用。纯度始终超过98%，这对我们的配方工作至关重要。',
  },
  {
    name: 'Sarah Chen',
    title: 'Procurement Manager, GlobalBio',
    text: 'Hemela Peptides is our go-to supplier for research peptides. Their competitive pricing, combined with rigorous quality standards and excellent customer service, makes them a reliable partner for our international operations.',
    textZh: 'Hemela Peptides是我们研究肽的首选供应商。有竞争力的价格、严格的质量标准和卓越的客户服务，使他们成为我们国际业务的可靠合作伙伴。',
  },
  {
    name: 'Dr. Marcus Weber',
    title: 'Head of R&D, Peptide Innovations GmbH',
    text: 'The GLP-1 series from Hemela has been crucial for our metabolic research program. The detailed technical support and the consistent batch-to-batch quality have significantly accelerated our research timeline.',
    textZh: 'Hemela的GLP-1系列对我们的代谢研究项目至关重要。详细的技术支持和批次间一致的质量显著加快了我们的研究进度。',
  },
  {
    name: 'Yuki Tanaka',
    title: 'Product Developer, Osaka Cosmetics',
    text: 'We switched to Hemela for our peptide supply six months ago and could not be happier. The documentation, purity certificates, and responsive support team exceed industry standards.',
    textZh: '半年前我们转向Hemela供应肽类产品，非常满意。文件、纯度证书和响应迅速的支持团队都超越了行业标准。',
  },
];

export const certificates = [
  { id: 1, name: 'ISO 9001:2015', nameZh: 'ISO 9001:2015质量管理体系', image: '/images/certificates/cert1.jpg' },
  { id: 2, name: 'GMP Certificate', nameZh: 'GMP认证', image: '/images/certificates/cert2.jpg' },
  { id: 3, name: 'HPLC Analysis Report', nameZh: 'HPLC分析报告', image: '/images/certificates/cert3.jpg' },
  { id: 4, name: 'MS Analysis Report', nameZh: 'MS分析报告', image: '/images/certificates/cert4.jpg' },
  { id: 5, name: 'COA Template', nameZh: 'COA模板', image: '/images/certificates/cert5.jpg' },
  { id: 6, name: 'Quality Control', nameZh: '质量控制', image: '/images/certificates/cert6.jpg' },
];

export const companyInfo = {
  name: 'Hemela Peptides',
  nameFull: 'Hong Kong Hemela Peptides Co., Ltd.',
  nameZh: '香港赫美拉肽业有限公司',
  tagline: 'Premium Peptide Solutions for Research & Development',
  taglineZh: '高端肽类研发解决方案',
  description: 'Hemela Peptides is a professional peptide manufacturer and supplier based in Hong Kong, specializing in high-purity research peptides, cosmetic peptides, and custom peptide synthesis. With years of expertise and state-of-the-art facilities, we serve research institutions, pharmaceutical companies, and cosmetic manufacturers worldwide.',
  descriptionZh: 'Hemela Peptides是一家位于香港的专业肽制造商和供应商，专业于高纯度研究肽、美容肽和定制肽合成。凭借多年的专业经验和先进设施，我们为全球研究机构、制药公司和化妆品制造商提供服务。',
  email: 'info@hkhemela.com',
  phone: '+852 XXXX XXXX',
  whatsapp: '+852 XXXX XXXX',
  address: 'Hong Kong',
  addressZh: '中国香港',
};
