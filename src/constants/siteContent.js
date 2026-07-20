export const siteContent = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'cn'],
  htmlLanguages: {
    en: 'en',
    cn: 'zh-CN'
  },
  languageLabels: {
    en: 'EN',
    cn: '中文'
  },
  ipLanguage: {
    endpoint: 'https://ipapi.co/json/',
    chinaCountryCode: 'CN'
  },
  profile: {
    name: 'Atlas Zhang',
    githubUrl: 'https://github.com/Atlas-Zhang',
    contactWechat: 'a460467324'
  },
  assets: {
    sdQrCode: '/sd_qr_code.jpg',
    icons: {
      githubPath:
        'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z'
    },
    projects: {
      sdMini: '/sd_mini/',
      resumeWeb: '/resume_web/',
      liveSwap: '/live-swap/',
      aiTools: '/ai_tools/'
    }
  },
  shared: {
    heroSkills: [
      'LangChain',
      'LangGraph',
      'Milvus',
      'Python',
      'Java',
      'JavaScript',
      'React',
      'Vue',
      'Spring Boot',
      'Django',
      'MySQL'
    ],
    identityTags: ['Software Engineer', 'English Learner', 'Book Reader'],
    stacks: {
      sdMini: 'uni-app · Vue3 · Tailwind CSS · Spring Boot · MySQL · Redis · Nginx · Ant Design Vue',
      resumeWeb: 'Vue3 · Vite · Tailwind CSS',
      liveSwap: 'Python · PyQt6 · InsightFace · SegFormer · YOLOv8 · ONNX Runtime · OpenCV · Pedalboard',
      aiTools: 'React · Material UI · Django · Redis · ComfyUI · MySQL'
    },
    galleries: {
      sdMini: [
        { title: { en: 'Lora model preview and download', cn: 'Lora 模型预览下载' }, img: '1.jpg' },
        { title: { en: 'ComfyUI workflow preview and download', cn: 'ComfyUI 工作流预览下载' }, img: '2.jpg' },
        { title: { en: 'Personal center', cn: '个人中心' }, img: '3.jpg' },
        { title: { en: 'Mini program home page', cn: '小程序首页' }, img: '4.jpg' },
        { title: { en: 'Model and workflow list', cn: '模型 / 工作流列表' }, img: '5.jpg' },
        { title: { en: 'AI artwork detail', cn: 'AI 作品详情' }, img: '6.jpg' }
      ],
      resumeWeb: [
        { title: { en: 'Resume page one', cn: '页面一' }, img: '1.jpg' },
        { title: { en: 'Resume page two', cn: '页面二' }, img: '2.jpg' },
        { title: { en: 'Resume page three', cn: '页面三' }, img: '3.jpg' },
        { title: { en: 'Resume page four', cn: '页面四' }, img: '4.jpg' },
        { title: { en: 'Resume page five', cn: '页面五' }, img: '5.jpg' },
        { title: { en: 'Resume page six', cn: '页面六' }, img: '6.jpg' },
        { title: { en: 'Resume page seven', cn: '页面七' }, img: '7.jpg' }
      ],
      liveSwap: [
        { title: { en: 'Original camera with effects disabled', cn: '原始摄像头（全效果关闭）' }, img: '3.jpg' },
        { title: { en: 'Face swapping enabled', cn: '人脸交换已开启' }, img: '1.jpg' },
        { title: { en: 'Face swap, hair swap, and voice changer enabled', cn: '换脸 + 换发 + 变声全开' }, img: '2.jpg' },
        { title: { en: 'Switch between source faces', cn: '切换不同源人脸' }, img: '4.jpg' }
      ],
      aiTools: [
        { title: { en: 'Home page one', cn: '首页一' }, img: '1.jpg' },
        { title: { en: 'Home page two', cn: '首页二' }, img: '2.jpg' },
        { title: { en: 'AI image expansion processing', cn: 'AI 扩图（处理中）' }, img: '3.jpg' },
        { title: { en: 'AI image expansion completed', cn: 'AI 扩图（已完成）' }, img: '4.jpg' },
        { title: { en: 'Portrait segmentation with custom background processing', cn: 'AI 分割人像，可指定背景（处理中）' }, img: '6.jpg' },
        { title: { en: 'Portrait segmentation with custom background completed', cn: 'AI 分割人像，可指定背景（已完成）' }, img: '7.jpg' },
        { title: { en: 'Multi-image poster stitching', cn: '多图拼接海报' }, img: '5.jpg' }
      ]
    }
  },
  copy: {
    en: {
      hero: {
        eyebrow: 'About Me',
        subtitle: 'Full Stack · AI Engineer · DevOps · CV Algorithm',
        githubLabel: 'GitHub'
      },
      aria: {
        languageSwitch: 'Language switch',
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        goToSlide: 'Go to slide'
      },
      sections: {
        techStack: 'Tech Stack',
        identity: 'Identity',
        projects: 'Personal Projects',
        projectNote: 'side projects'
      },
      bio: [
        {
          key: 'Focus',
          value: 'Frontend React / Vue · Backend Spring Boot / Django · DevOps · CV Algorithm'
        },
        {
          key: 'Languages',
          value: 'Python · Java · JavaScript · HTML · CSS'
        },
        {
          key: 'Databases',
          value: 'MySQL · Redis · MongoDB'
        }
      ],
      qrLabel: 'Scan with WeChat',
      githubProjectLabel: 'View on GitHub',
      footerContactLabel: 'WeChat',
      footerNote: 'More content is still being added.',
      projects: [
        {
          number: '01',
          key: 'sdMini',
          name: 'SD Painting Assistant',
          type: 'WeChat Mini Program',
          description:
            'A mini program for Stable Diffusion artwork galleries, wallpaper uploads, technical blog previews, SD model uploads, ComfyUI workflow uploads, and related AI creation workflows.',
          badges: ['Mini Program', 'Wallpapers · Model Downloads'],
          showQrCode: true
        },
        {
          number: '02',
          key: 'resumeWeb',
          name: 'Online Resume Website',
          type: 'Personal Resume · Website',
          description:
            'A modern online resume platform with project showcases, skill summaries, work experience modules, and responsive layouts for multiple device sizes.',
          badges: ['Website', 'Responsive']
        },
        {
          number: '03',
          key: 'liveSwap',
          name: 'Live Swap',
          type: 'Windows Desktop App · Real-time Face Swap / Outfit Swap',
          description:
            'An offline real-time face swapping, hair replacement, outfit overlay, and voice changing tool. It processes camera frames through a four-stage local pipeline for hairstyle replacement, face swapping, clothing overlay, and frame smoothing.',
          badges: ['Windows', 'Local Inference', 'Real-time Face Swap', 'Voice Changer'],
          githubUrl: 'https://github.com/Atlas-Zhang/FaceSwap'
        },
        {
          number: '04',
          key: 'aiTools',
          name: 'Intelligent Image Toolbox',
          type: 'AI Image Processing Website',
          description:
            'A web toolbox integrating multiple CV models for AI face swapping, image outpainting, image enhancement, background replacement, intelligent outfit changing, and API-based model inference workflows.',
          badges: ['Website', 'AI + Image Processing']
        }
      ]
    },
    cn: {
      hero: {
        eyebrow: '关于我',
        subtitle: '全栈 · AI 工程师 · DevOps · CV 算法',
        githubLabel: 'GitHub'
      },
      aria: {
        languageSwitch: '语言切换',
        previousSlide: '上一张',
        nextSlide: '下一张',
        goToSlide: '跳转到第'
      },
      sections: {
        techStack: '技术栈',
        identity: '个人标签',
        projects: '个人项目',
        projectNote: '业余开发'
      },
      bio: [
        {
          key: '专业方向',
          value: '前端 React / Vue · 后端 Spring Boot / Django · 运维 · CV 算法'
        },
        {
          key: '编程语言',
          value: 'Python · Java · JavaScript · HTML · CSS'
        },
        {
          key: '数据库',
          value: 'MySQL · Redis · MongoDB'
        }
      ],
      qrLabel: '微信扫码体验',
      githubProjectLabel: 'View on GitHub',
      footerContactLabel: '个人微信',
      footerNote: '更多内容持续补充中...',
      projects: [
        {
          number: '01',
          key: 'sdMini',
          name: 'SD 绘画助手',
          type: '微信小程序',
          description:
            '用于展示 Stable Diffusion AI 绘画作品、壁纸上传、技术博客预览、SD 模型上传、ComfyUI 工作流上传等功能。',
          badges: ['小程序', '壁纸 · 模型下载'],
          showQrCode: true
        },
        {
          number: '02',
          key: 'resumeWeb',
          name: '在线简历网站',
          type: '个人简历 · 网站',
          description:
            '基于现代前端技术栈构建的在线简历展示平台，支持项目展示、技能介绍、工作经历等模块，响应式布局适配多端访问。',
          badges: ['网站', '响应式']
        },
        {
          number: '03',
          key: 'liveSwap',
          name: 'Live Swap',
          type: 'Windows 桌面应用 · 实时换脸 / 换装',
          description:
            '本地实时换脸、换发、换装与变声工具，通过摄像头对画面进行四阶段流水线处理：发型替换、人脸交换、服装叠加、帧平滑，全程离线运行无需联网。',
          badges: ['Windows', '本地推理', '实时换脸', '变声器'],
          githubUrl: 'https://github.com/Atlas-Zhang/FaceSwap'
        },
        {
          number: '04',
          key: 'aiTools',
          name: '智能图像工具箱',
          type: 'AI 图像处理网站',
          description:
            '集成多个 CV 模型：AI 换脸、扩图、加图、更换背景、智能换装等功能，通过 API 与后端 CV 模型推理交互。',
          badges: ['网站', 'AI + 图像处理']
        }
      ]
    }
  }
}
