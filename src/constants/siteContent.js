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
    contactWechat: 'a460467324',
    socialLinks: [
      {
        key: 'github',
        iconText: 'GH',
        label: 'GitHub',
        type: 'external',
        href: 'https://github.com/Atlas-Zhang',
        value: '@Atlas-Zhang'
      },
      {
        key: 'linkedin',
        iconText: 'in',
        label: 'LinkedIn',
        type: 'external',
        href: 'https://www.linkedin.com/in/atlas-zhang-b53b42308/',
        value: 'Atlas-Zhang'
      },
      {
        key: 'wechat',
        iconText: 'WX',
        label: 'WeChat',
        type: 'copy',
        value: 'a460467324'
      }
    ]
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
      zerAgent: '/zer-agent/',
      wrTool: '/wr-tool/',
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
      zerAgent: 'TypeScript · Node.js · LLM Agent · TUI · MCP · DeepSeek · OpenAI-compatible APIs',
      wrTool: 'Vue 3 · TypeScript · Vite · Markdown-it · DOMPurify · Supabase Auth · Supabase Storage',
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
      zerAgent: [
        { title: { en: 'Shell command shortcut inside the chat session', cn: '会话内直接运行 Shell 快捷命令' }, img: 'shell-command.jpg' },
        { title: { en: 'Slash commands, model, mode, session, and token status', cn: '斜杠命令、模型、模式、会话与 token 状态' }, img: 'commands.jpg' },
        { title: { en: 'Interrupted turn with saved context and resume flow', cn: '任务中断后保存上下文并继续执行' }, img: 'resume-interrupt.jpg' },
        { title: { en: 'Web-search assisted answer rendered in terminal', cn: '终端内渲染联网搜索辅助回答' }, img: 'web-search.jpg' },
        { title: { en: 'Agent-generated local report and CSV export', cn: 'Agent 生成本地报告与 CSV 导出' }, img: 'export-report.jpg' }
      ],
      wrTool: [
        { title: { en: 'Live Markdown editor with toolbar, counts, and autosave state', cn: '带工具栏、统计与自动保存状态的实时 Markdown 编辑器' }, img: 'editor-live-markdown.jpg' },
        { title: { en: 'Private draft list with quick article creation', cn: '私有草稿列表与快速新建文章' }, img: 'articles.jpg' },
        { title: { en: 'Theme settings with custom Markdown CSS editor', cn: '主题设置与自定义 Markdown CSS 编辑器' }, img: 'theme-css.jpg' },
        { title: { en: 'Markdown style templates, font upload, and live preview', cn: 'Markdown 样式模板、字体上传与实时预览' }, img: 'style-templates.jpg' },
        { title: { en: 'Writing statistics with yearly activity heatmap', cn: '带年度活动热力图的写作统计' }, img: 'stats.jpg' },
        { title: { en: 'Image gallery with uploads, camera capture, and month filtering', cn: '支持上传、拍照与月份筛选的图片库' }, img: 'gallery.jpg' },
        { title: { en: 'Supabase OAuth login with GitHub and Google', cn: '基于 Supabase 的 GitHub 与 Google OAuth 登录' }, img: 'login.jpg' }
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
      social: {
        title: 'Contact',
        copyLabel: 'Copy',
        copiedLabel: 'Copied',
        unavailableLabel: 'Coming soon'
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
          key: 'zerAgent',
          name: 'Zer-Agent',
          type: 'Terminal-first Coding Agent',
          description:
            'A local repository coding agent built as a TypeScript monorepo. It combines an LLM-driven agent loop, terminal UI, built-in file/search/shell/git/web/weather/news tools, permission controls, persistent sessions, MCP stdio integration, project commands, agent profiles, context compaction, and JSONL runtime logs.',
          badges: ['CLI Agent', 'TypeScript Monorepo', 'MCP', 'Persistent Sessions'],
          githubUrl: 'https://github.com/Atlas-Zhang/Zer-Agent'
        },
        {
          number: '05',
          key: 'wrTool',
          name: 'WrTool',
          type: 'Private Markdown Writing App',
          description:
            'A private writing app built with Vue 3, TypeScript, Markdown, and Supabase. It supports GitHub/Google OAuth, per-user drafts and archives, live Markdown editing, source mode, outline/focus/typewriter workflows, custom Markdown CSS, reusable style templates, font uploads, image storage/gallery reuse, autosave buffering, and writing statistics.',
          badges: ['Writing App', 'Markdown Editor', 'Supabase', 'Image Gallery'],
          githubUrl: 'https://github.com/Atlas-Zhang/WrTool'
        },
        {
          number: '06',
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
      social: {
        title: '社交联系',
        copyLabel: '复制',
        copiedLabel: '已复制',
        unavailableLabel: '待添加'
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
          key: 'zerAgent',
          name: 'Zer-Agent',
          type: '终端优先的代码 Agent',
          description:
            '一个面向本地代码仓库工作的 TypeScript Monorepo CLI Agent，集成 LLM 工具调用循环、终端交互 UI、文件/搜索/Shell/Git/网页搜索/天气/新闻工具、权限控制、持久化会话、MCP stdio 集成、项目命令、Agent Profile、上下文压缩与 JSONL 运行日志。',
          badges: ['CLI Agent', 'TypeScript Monorepo', 'MCP', '持久化会话'],
          githubUrl: 'https://github.com/Atlas-Zhang/Zer-Agent'
        },
        {
          number: '05',
          key: 'wrTool',
          name: 'WrTool',
          type: '私有 Markdown 写作应用',
          description:
            '一个基于 Vue 3、TypeScript、Markdown 与 Supabase 构建的私有写作工具，支持 GitHub/Google OAuth、用户私有草稿与归档、实时 Markdown 编辑、源码模式、大纲/专注/打字机模式、自定义 Markdown CSS、样式模板、字体上传、图片存储与图库复用、本地缓冲自动保存和写作统计。',
          badges: ['写作工具', 'Markdown 编辑器', 'Supabase', '图片库'],
          githubUrl: 'https://github.com/Atlas-Zhang/WrTool'
        },
        {
          number: '06',
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
