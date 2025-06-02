import { Tool, ToolCategory, ToolPricing } from '../types';

export const tools: Tool[] = [
  {
    id: '001',
    name: 'ChatGPT',
    description: 'توليد نصوص ذكي ومتعدد الاستخدامات من OpenAI.',
    longDescription: `ChatGPT هو نموذج ذكاء اصطناعي متقدم من OpenAI متخصص في فهم اللغة الطبيعية وتوليد النصوص بجودة عالية. يمكن استخدامه في كتابة المقالات، صياغة الرسائل، توليد الأفكار الإبداعية، والتحليل اللغوي. يوفر واجهة دردشة بسيطة وسهلة الاستخدام تدعم العديد من اللغات.`,
    category: 'Writing' as ToolCategory,
    tags: ['توليد النصوص', 'الدردشة', 'الإبداع'],
    url: 'https://chat.openai.com/',
    imageUrl: '/image/1.svg',
    pricing: 'Freemium' as ToolPricing,
    features: ['دعم متعدد اللغات', 'اقتراحات إبداعية', 'تحسين الأسلوب والقواعد', 'توليد مخططات ونقاط رئيسية'],
    rating: 4.8,
    reviewCount: 15234,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '002',
    name: 'Google Gemini',
    description: 'Gemini هي أداة ذكاء اصطناعي متعددة الاستخدامات من Google، تساعدك في الكتابة، البرمجة، البحث، وإنشاء المحتوى عبر واجهة سهلة ومتكاملة مع خدمات Google..',
    longDescription: `Gemini هي منصة ذكاء اصطناعي متقدمة من Google، مصممة لتقديم مساعد ذكي ومتعدد المهام. تمكِّن المستخدمين من توليد النصوص، تحليل البيانات، إنشاء الصور والفيديوهات، والمساعدة في البرمجة، وذلك من خلال تكاملها العميق مع تطبيقات Google مثل Gmail، Docs، Sheets، وChrome. بفضل نماذجها القوية مثل Gemini 2.5 Pro وFlash، توفر Gemini أداءً عاليًا في الفهم اللغوي، التفاعل الصوتي، ودعم المهام الإبداعية والمعرفية، مما يجعلها أداة مثالية للطلاب، المحترفين، والمبدعين.`,
    category: 'Other' as ToolCategory,
    tags: ['مساعد ذكي', 'تلخيص', 'ترجمة'],
    url: 'https://gemini.google.com/',
    imageUrl: '/image/2.png',
    pricing: 'Freemium' as ToolPricing,
    features: ['تكامل مع خدمات Google', 'تلخيص احترافي', 'إجابات دقيقة', 'دعْم متعدد اللغات'],
    rating: 4.7,
    reviewCount: 8321,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '003',
    name: 'Claude',
    description: 'Claude هو نموذج ذكاء اصطناعي متقدم من Anthropic، مصمم لتوليد نصوص دقيقة، مساعدتك في الكتابة، البرمجة، وتحليل البيانات بشكل آمن وموثوق.',
    longDescription: `Claude هو أداة ذكاء اصطناعي متطورة طورتها شركة Anthropic، تركز على تقديم تجربة تفاعلية آمنة وأخلاقية. يعتمد Claude على تقنيات متقدمة في معالجة اللغة الطبيعية لتوليد محتوى نصي عالي الجودة، مساعدة المستخدمين في كتابة المقالات، البرمجة، البحث، وتحليل النصوص. تميز Claude بأنه يولي اهتمامًا كبيرًا للسلامة، التقليل من التحيز، وحماية خصوصية المستخدمين، مما يجعله خيارًا مفضلاً للقطاعات التي تتطلب دقة وأمانًا عاليًا.`,
    category: 'Other' as ToolCategory,
    tags: ['السلامة', 'الدقة', 'الملخصات'],
    url: 'https://www.anthropic.com/claude',
    imageUrl: '/image/3.png',
    pricing: 'Paid' as ToolPricing,
    features: ['معايير أمان عالية', 'دقة في الإجابات', 'معالجة النصوص الطويلة', 'ملخصات موثوقة'],
    rating: 4.4,
    reviewCount: 4520,
    isNew: true,
    isFeatured: false,
    isPopular: false
  },
  {
    id: '004',
    name: 'DALL·E',
    description: 'توليد صور من نصوص بواسطة OpenAI.',
    longDescription: `DALL·E هو نموذج توليد صور متقدم من OpenAI يحول الأوصاف النصية إلى صور عالية الدقة. يمكنه إنشاء مشاهد فنية، تصاميم، ورسومات توضيحية اعتماداً على التفاصيل المقدمة من المستخدم.` ,
    category: 'Other' as ToolCategory,
    tags: ['توليد الصور', 'الرسم النصي', 'التصميم'],
    url: 'https://openai.com/dall-e-2/',
    imageUrl: '/image/4.png',
    pricing: 'Paid' as ToolPricing,
    features: ['تحكم في الأسلوب الفني', 'دقة عالية', 'توليد متعدد', 'تنقيح النتائج'],
    rating: 4.6,
    reviewCount: 7230,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '005',
    name: 'Midjourney',
    description: 'إنشاء صور فنية وإبداعية باستخدام الذكاء الاصطناعي.',
    longDescription: `Midjourney هي منصة متخصصة في توليد الصور الفنية والإبداعية بناءً على الأوصاف النصية. تتميز بأسلوبها الفني الفريد وقدرتها على إنتاج تصاميم جذابة ومتنوعة تناسب المشاريع الإبداعية.` ,
    category: 'Other' as ToolCategory,
    tags: ['فن رقمي', 'الإبداع', 'توليد الصورة'],
    url: 'https://midjourney.com/',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55bvDrwepdxIPIOM7EpQQO3wYWSaJJ1tBxw&s',
    pricing: 'Subscription' as ToolPricing,
    features: ['أساليب فنية متنوعة', 'واجهة تفاعلية', 'معاينة فورية', 'مشاركة المجتمع'],
    rating: 4.7,
    reviewCount: 6540,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '006',
    name: 'Runway ML',
    description: 'أدوات تحرير فيديو بالذكاء الاصطناعي.',
    longDescription: `Runway ML توفر مجموعة من الأدوات المدعومة بالذكاء الاصطناعي لتحرير الفيديو، بما في ذلك التتبع التلقائي، إزالة الخلفية، وتوليد التأثيرات البصرية. مناسبة للمحترفين والمبتدئين على حد سواء لإنشاء محتوى جذاب بسرعة.` ,
    category: 'Other' as ToolCategory,
    tags: ['تحرير الفيديو', 'التأثيرات البصرية', 'الذكاء الاصطناعي'],
    url: 'https://runwayml.com/',
    imageUrl: 'https://phill.ai/wp-content/uploads/2024/09/Untitled-1.jpg',
    pricing: 'Freemium' as ToolPricing,
    features: ['إزالة الخلفية', 'تتبع الكائنات', 'توليد التأثيرات', 'تحرير نصي'],
    rating: 0,
    reviewCount: 0,
    isNew: true,
    isFeatured: true,
    isPopular: false
  },
  {
    id: '007',
    name: 'Grammarly',
    description: 'تدقيق وتحسين القواعد والأسلوب اللغوي.',
    longDescription: `Grammarly هو مساعد الكتابة الذي يكتشف الأخطاء النحوية والإملائية ويقدم اقتراحات لتحسين الأسلوب والمفردات. يدعم العديد من المنصات بما في ذلك المتصفح وبرامج تحرير النصوص.` ,
    category: 'Writing' as ToolCategory,
    tags: ['قواعد', 'إملاء', 'أسلوب'],
    url: 'https://www.grammarly.com/',
    imageUrl: 'https://i.pcmag.com/imagery/reviews/05XydTaQtTpzJYn58NfuFyx-11.fit_lim.size_1200x630.v1594649446.png',
    pricing: 'Freemium' as ToolPricing,
    features: ['تدقيق نحوي وإملائي', 'اقتراحات الأسلوب', 'كشف الانتحال', 'إضافات للمتصفح'],
    rating: 0,
    reviewCount: 0,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '008',
    name: 'Notion AI',
    description: 'تنظيم الملاحظات وإدارة المشاريع باستخدام الذكاء الاصطناعي.',
    longDescription: `Notion AI مدمج داخل Notion لتسريع عملية الكتابة والتنظيم. يمكنه توليد ملخصات، اقتراح مهام، وتحليل البيانات المضافة داخل قواعد البيانات لجعل إدارة المشاريع أكثر كفاءة.` ,
    category: 'Productivity' as ToolCategory,
    tags: ['إنتاجية', 'تنظيم', 'كتابة الملاحظات'],
    url: 'https://www.notion.so/product/ai',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Notion-logo.svg',
    pricing: 'Subscription' as ToolPricing,
    features: ['توليد الملخصات', 'اقتراح المهام', 'تحليل البيانات', 'دعم قواعد البيانات'],
    rating: 4.6,
    reviewCount: 8320,
    isNew: true,
    isFeatured: false,
    isPopular: true
  },
  {
    id: '009',
    name: 'Jasper AI',
    description: 'إنشاء محتوى تسويقي وإعلاني.',
    longDescription: `Jasper AI هو أداة لإنشاء محتوى تسويقي وإعلاني بسرعة وكفاءة. يوفر قوالب جاهزة للشبكات الاجتماعية، المدونات، والبريد الإلكتروني مع إمكانية تخصيص الأسلوب والنبرة.` ,
    category: 'Writing' as ToolCategory,
    tags: ['التسويق', 'الإعلانات', 'المحتوى'],
    url: 'https://www.jasper.ai/',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGt9rE3Ip1xkosWQx2uMB9gDp8quhR_cjdyA&s',
    pricing: 'Subscription' as ToolPricing,
    features: ['قوالب تسويقية', 'ضبط النبرة', 'الكتابة التعاونية', 'تكامل مع CMS'],
    rating: 0,
    reviewCount: 0,
    isNew: false,
    isFeatured: false,
    isPopular: true
  },
  {
    id: '010',
    name: 'Synthesia',
    description: 'توليد فيديوهات بالذكاء الاصطناعي مع شخصيات افتراضية.',
    longDescription: `Synthesia يتيح إنشاء فيديوهات احترافية باستخدام شخصيات افتراضية تتحدث بلغات متعددة. مناسب لتوليد مقاطع تدريبية وتسويقية دون الحاجة لاستوديو تسجيل.` ,
    category: 'Other' as ToolCategory,
    tags: ['الفيديو', 'الشخصيات الافتراضية', 'التدريب'],
    url: 'https://www.synthesia.io/',
    imageUrl: 'https://i.ytimg.com/vi/l_tocfLOTLM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkSE6nBuYEhPRo9CWQdB9Sp4_4-A',
    pricing: 'Subscription' as ToolPricing,
    features: ['شخصيات متعددة', 'دعم لغات متعددة', 'نص إلى فيديو', 'تخصيص الخلفية'],
    rating: 0,
    reviewCount: 0,
    isNew: false,
    isFeatured: false,
    isPopular: false
  },
  {
    id: '011',
    name: 'Descript',
    description: 'تحرير صوت وفيديو مدعوم بالذكاء الاصطناعي.',
    longDescription: `Descript هو محرر وسائط يجمع بين تحرير الصوت والفيديو. يمكنه تفريغ الصوت للنص، إزالة الضوضاء، وتعديل مقاطع الفيديو عبر النص مباشرة.` ,
    category: 'Other' as ToolCategory,
    tags: ['تحرير صوتي', 'تحرير فيديو', 'تفريغ النص'],
    url: 'https://www.descript.com/',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrafvy2JUAx2P6rDNG_IM2iBT6OsIrGMDohQ&s',
    pricing: 'Freemium' as ToolPricing,
    features: ['تفريغ صوتي', 'إزالة الضوضاء', 'تحرير بالفيديو عبر النص', 'تصدير متعدد الصيغ'],
    rating: 4.5,
    reviewCount: 3420,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '012',
    name: 'Copy.ai',
    description: 'إنشاء نصوص تسويقية وإبداعية بسرعة.',
    longDescription: `Copy.ai يساعد على توليد نصوص تسويقية وإبداعية في ثوانٍ معدودة. يوفر قوالب متنوعة للمنشورات الاجتماعية، رسائل البريد الإلكتروني، والأفكار الإعلانية.` ,
    category: 'Writing' as ToolCategory,
    tags: ['التسويق', 'الإبداع', 'النصوص'],
    url: 'https://www.copy.ai/',
    imageUrl: 'https://cdn-public.softwarereviews.com/production/logos/offerings/11595/original/copy-ai_logo.png?1706562599',
    pricing: 'Subscription' as ToolPricing,
    features: ['قوالب متعددة', 'توليد سريع', 'ضبط النبرة', 'تكاملات'],
    rating: 4.4,
    reviewCount: 2890,
    isNew: false,
    isFeatured: false,
    isPopular: true
  }
];

export const categories: ToolCategory[] = [
  'Writing',
  'Research',
  'Math',
  'Science',
  'Language Learning',
  'Productivity',
  'Studying',
  'Test Prep',
  'Teaching',
  'Other'
];

export const pricingOptions: ToolPricing[] = [
  'Free',
  'Freemium',
  'Paid',
  'Subscription'
];

export const getFeaturedTools = (): Tool[] => {
  return tools.filter(tool => tool.isFeatured);
};

export const getPopularTools = (): Tool[] => {
  return tools.filter(tool => tool.isPopular);
};

export const getNewTools = (): Tool[] => {
  return tools.filter(tool => tool.isNew);
};

export const getToolById = (id: string): Tool | undefined => {
  const normalizedId = id.toString().padStart(3, '0');
  return tools.find(tool => tool.id === normalizedId);
};

export const getRelatedTools = (tool: Tool, limit: number = 3): Tool[] => {
  return tools
    .filter(t => 
      t.id !== tool.id && 
      (t.category === tool.category || 
       t.tags.some(tag => tool.tags.includes(tag)))
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getAllToolsByCategory = (category: ToolCategory): Tool[] => {
  return tools.filter(tool => tool.category === category);
};
