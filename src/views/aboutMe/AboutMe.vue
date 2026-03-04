<template>
    <div class="w-full min-h-screen flex flex-col py-10 pb-24 bg-white px-5 sm:px-10 md:px-16 lg:px-32 xl:px-48">
        <div class="font-bold text-3xl tracking-tight text-zinc-900 mb-6 w-full">关于我</div>
        <div class="section-label w-full">个人介绍</div>
        <div class="mt-2 text-sm text-[#1d1d1f] leading-relaxed">
            全栈软件开发工程师：前端(React, Vue) / 后端(SpringBoot, Django) / 运维 / CV 算法
            <br/>
            <span class="mt-1 block text-[#6e6e73]"><strong class="text-[#1d1d1f] font-medium">语言偏向：</strong>Python / Java / JS / HTML / CSS</span>
            <span class="block text-[#6e6e73]"><strong class="text-[#1d1d1f] font-medium">数据库：</strong>MySQL / Redis / MongoDB</span>
        </div>
        <div class="section-label w-full mt-6">个人标签</div>
        <div class="mt-2 w-full flex flex-wrap gap-2">
            <span class="tag-chip">Software Engineer</span>
            <span class="tag-chip">English Learner</span>
            <span class="tag-chip">Book Reader</span>
        </div>
        <div class="section-label w-full mt-6">
            个人项目
            <span class="text-xs font-normal text-[#86868b] ml-3">以下为业余开发项目</span>
        </div>
        <div class="project-title mt-6">Project 1 · SD 绘画助手</div>
        <div class="project-block w-full">
            <div class="flex gap-2 flex-wrap">
                <span class="badge-type">小程序</span>
                <span class="badge-feature">壁纸、模型下载</span>
            </div>
            <p class="project-desc mt-3">用于展示 Stable Diffusion AI 绘画作品壁纸上传、技术博客预览，SD 模型上传，ComfyUI 工作流上传等功能</p>
            <p class="project-stack">uni-app · Vue3 · Tailwindcss · Spring Boot · MySQL · Redis · Nginx · Ant-design-vue</p>
            <div class="flex flex-col md:flex-row gap-4 items-start mt-3">
                <span class="text-sm text-[#6e6e73]">微信扫码体验</span>
                <img class="w-36 p-2 border border-black/[0.08] rounded-xl bg-white" src="../../../public/sd_qr_code.jpg"/>
            </div>
            <div>
                <p class="text-xs text-[#86868b] mt-4 mb-2">项目截图（左右滑动）</p>
                <swiper
                    :scrollbar="true"
                    :pagination="{
                    dynamicBullets: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(item,index) in project1Data.pics" :key="index">
                            <div class="flex items-center gap-x-3">
                                <div class=" font-serif text-lg md:text-xl  font-bold">{{ item.title }} </div>
                                <img src="../../assets/icon/arrowhead-right.png"  class="w-10 class-arrow" loading="lazy"/>
                            </div>
                            <img class="main-class" :src="'/sd_mini/' + item.img" loading="lazy"/>                   
                    </swiper-slide>
                    
                </swiper>
            </div>
        </div>
        <div class="project-title mt-6">Project 2 · 智能图像工具箱</div>
        <div class="project-block w-full">
            <div class="flex gap-2 flex-wrap">
                <span class="badge-type">网站</span>
                <span class="badge-feature">AI + 图像处理</span>
            </div>
            <p class="project-desc mt-3">集成多个 CV 模型：AI 换脸、扩图、抠图、更换背景、智能换装等功能，通过 API 与后端 CV 模型推理交互</p>
            <p class="project-stack">React · Material UI · Django · Redis · ComfyUI · MySQL</p>
            <div>
                <p class="text-xs text-[#86868b] mt-4 mb-2">项目截图（左右滑动）</p>
                <swiper
                    :scrollbar="true"
                    :pagination="{
                    dynamicBullets: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(item,index) in project2Data.pics" :key="index">
                            <div class="flex items-center gap-x-3">
                                <div class=" font-serif text-lg md:text-xl font-bold ">{{ item.title }} </div>
                                <img src="../../assets/icon/arrowhead-right.png"  class="w-10 class-arrow" loading="lazy"/>
                                
                            </div>
                            <img class="main-class" :src="'/ai_tools/' + item.img" loading="lazy"/>                    
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="project-title mt-6">Project 3 · 大文件传输工具</div>
        <div class="project-block w-full">
            <div class="flex gap-2 flex-wrap">
                <span class="badge-type">大文件</span>
                <span class="badge-feature">分片传输</span>
                <span class="badge-type">断点续传</span>
            </div>
            <p class="project-desc mt-3">分 chunk 批量传输、非阻塞 IO、hash 完整性校验、异步协程提升线程利用率，WebSocket 实时传输进度，支持断点续传</p>
            <p class="project-stack">React · asyncio / aiohttp</p>
            <div>
                <p class="text-xs text-[#86868b] mt-4 mb-2">项目截图（左右滑动）</p>
                <swiper
                    :scrollbar="true"
                    :pagination="{
                    dynamicBullets: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(item,index) in project3Data.pics" :key="index">
                            <div class="flex items-center gap-x-3">
                                <div class=" font-serif text-lg md:text-xl font-bold ">{{ item.title }} </div>
                                <img src="../../assets/icon/arrowhead-right.png"  class="w-10 class-arrow" loading="lazy"/>
                                
                            </div>
                            <img class="main-class" :src="'/large_file/' + item.img" loading="lazy"/>                    
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        
        <div class="text-xs text-[#86868b] mt-8 w-full">
            个人微信：a460467324 · 更多内容持续补充...
        </div>
    </div>
</template>
<script setup>
// import Showdown from 'showdown';
import { onMounted,ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const project1Data = ref({
    pics: [
        {
            title: "Lora 模型预览下载",
            img: "1.jpg"
        },
        {
            title: "ComfyUi 工作流预览下载",
            img: "2.jpg"
        },
        {
            title: "个人中心",
            img: "3.jpg"
        },
        {
            title: "Mini Programe 首页",
            img: "4.jpg"
        },
        {
            title: "模型/工作流 列表",
            img: "5.jpg"
        },
        {
            title: "AI作品详情",
            img: "6.jpg"
        }
    ]
})


const project2Data = ref({
    pics: [
        {
            title: "首页一",
            img: "1.jpg"
        },
        {
            title: "首页二",
            img: "2.jpg"
        },
        {
            title: "AI扩图(处理中)",
            img: "3.jpg"
        },
        {
            title: "AI扩图(已完成)",
            img: "4.jpg"
        },
        {
            title: "AI分割人像，可指定背景(处理中)",
            img: "6.jpg"
        },
        {
            title: "AI分割人像，可指定背景(已完成)",
            img: "7.jpg"
        },
        {
            title: "多图拼接海报",
            img: "5.jpg"
        }
    ]
})


const project3Data = ref({
    pics: [
        {
            title: "上传前",
            img: "A.PNG"
        },
       
        {
            title: "上传中",
            img: "b.png"
        },
        {
            title: "上传完成",
            img: "c.png"
        }
    ]
})


const modules = ref([Pagination])
onMounted(() => {})

</script>
<style scoped>
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #a1a1aa;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e4e7;
  margin-bottom: 2px;
}

.project-title {
  font-size: 1rem;
  font-weight: 700;
  color: #09090b;
  letter-spacing: -0.01em;
}

.project-block {
  padding: 18px 0;
  border-bottom: 1px solid #f4f4f5;
}

.project-desc {
  font-size: 0.875rem;
  color: #3f3f46;
  line-height: 1.65;
}

.project-stack {
  font-size: 0.75rem;
  color: #71717a;
  margin-top: 6px;
}

.badge-type {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 3px 10px;
  background: #fef2f2;
  color: #52525b;
  border: 1px solid #fecaca;
  border-radius: 6px;
}

.badge-feature {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 3px 10px;
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
}

.tag-chip {
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 5px 14px;
  background: #f4f4f5;
  color: #3f3f46;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
}

.swiper {
  width: 100%;
  border-radius: 14px;
  border: 1px solid #e4e4e7;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding-top: 24px;
  padding-bottom: 24px;
  background: #fafafa;
}

.swiper-slide {
  text-align: center;
  font-size: 14px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  column-gap: 40px;
  align-items: center;
}

.swiper-slide .main-class {
  display: block;
  width: auto;
  height: 480px;
  object-fit: contain;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  background: #fff;
}

@media screen and (max-width: 700px) {
  .swiper-slide {
    flex-direction: column;
    row-gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .swiper-slide .class-arrow {
    display: none;
  }

  .swiper-slide .main-class {
    object-fit: contain;
    height: auto;
  }
}
</style>
