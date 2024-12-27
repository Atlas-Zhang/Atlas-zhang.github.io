<template>
    <div class="w-full h-min-screen flex items-center flex-col py-[20px] pb-[20px] md:pb-[200px]  bg-white font-mono  px-5 lg:px-40 sm:px-10 md:px-12  ">
        <div class="font-bold text-2xl my-3 md:my-0 ">
            关于我
        </div>
        <div class="py-2  mt-2 md:mt-0 font-bold text-lg text-[#8c4e35] w-full italic">个人介绍(Personal Intro)</div>
        <div class="mt-1  text-black">
             一位全栈软件开发工程师:前端(React,Vue)/后端(SpringBoot、Django)/运维(单实例、多实例集群)/深度算法(CV模型)均有涉猎
            <br/>
            <span class="my-3 lg:my-0"><strong >语言偏向：</strong>Python/Java/JS/HTML/CSS </span>
            <br/>
            <span class="my-3 lg:my-0"><strong> 数据库：</strong>MySQL/Redis/MongoDB</span>
        </div>
        <div class="py-2  mt-5 md:mt-0 font-bold text-lg text-[#8c4e35] w-full italic">个人标签(Personal Tag)</div>
        <div class="mt-1   w-full  ml-5 py-2  flex items-center gap-x-4 flex-wrap gap-y-2">
            <span class="p-1.5  py-1 pl-2 bg-[#f7f7f9] text-[#423c4a] border-2 border-[#E3E3EF] rounded-lg">
                Software Engineer
            </span>
            <span class="p-1.5 py-1 pl-2 ml-2 bg-[#f7f7f9] text-[#423c4a] border-2 border-[#E3E3EF] rounded-lg">
                English Learner
            </span>
            <span class="p-1.5 py-1 pl-2 ml-2 bg-[#f7f7f9] text-[#423c4a] border-2 border-[#E3E3EF] rounded-lg">
                Book Reader  
            </span>
        </div>
        <div class="py-2 mt-5 md:mt-0 font-bold text-lg text-[#8c4e35] w-full italic">个人项目(Personal Project)
            <span class="text-sm font-bold italic text-gray-400 ml-5">
               注：以下列出的仅为个人业余开发的项目，非工作中的
            </span>
        </div>
        <div class="my-2 text-lg w-full font-bold text-[#4B6CE9] italic">
            Project1 -> SD 绘画助手
        </div>
        <!-- SD 绘画助手 -->
        <div class=" py-2 lg:py-5 w-full  ">
            <div class="flex gap-x-8 md:gap-x-16 items-center ">
                <div class="font-semibold text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffe5e6] text-black rounded-[3px]   border-2 border-[#E3E3EF]">
                    小程序(Mini Programe)
                </div>
                <div class="font-semibold text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffffff] text-[#4B6CE9] rounded-[3px]   border-2 border-[#b3d0f7]">
                    壁纸、模型下载
                </div>
            </div>
            <div class="mt-5 my-3">
                <strong>介绍：</strong>用于展示 Stable Diffusion AI绘画作品壁纸上传、技术博客预览，SD模型上传，ComfyUI 工作流上传等功能
            </div>

            <div class="mb-3">
                <strong>技术栈：</strong>uni-app +  Vue3 +Tailwindcss  +  Spring Boot + MySQL + Redis  + Nginx + Ant-design-vue
            </div>
            <div class=" flex flex-col   md:flex-row gap-x-5 items-center">
                <div class="text-[#423c4a] font-bold ">
                    打开微信扫一扫二维码即可体验
                </div>
                <img class="w-48 p-3 my-3 ml-10 border-2 rounded-md " src="../../../public/sd_qr_code.jpg"/>
            </div>
            <div>
                <div class="text-[#423c4a] my-5 lg:my-1   font-bold">
                    项目部分截图，左右滑动(Some Screenshot Of Project，Swipe Left and Right)
                </div>
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
        <div class="my-2 text-lg w-full font-bold text-[#4B6CE9] italic">
            Project2 -> 智能图像工具箱
        </div>
        <div class=" py-2 lg:py-5 w-full">
            <div class="flex gap-x-8 md:gap-x-16 items-center ">
                <div class="font-medium text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffe5e6] text-black rounded-[3px]   border-2 border-[#E3E3EF]">
                    网站(Website)
                </div>
                <div class="font-semibold text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffffff] text-[#4B6CE9] rounded-[3px]   border-2 border-[#b3d0f7]">
                    AI + 图像处理
                </div>
            </div>
            <div class="mt-5 my-3">
                <strong>介绍：</strong>伴随大量优秀 CV/LLM 模型开源；将鲁棒性较强的CV模型全部集成在一个站点上，对图像做智能处理，实现功能如：AI换脸，扩图，抠图，更换背景，智能换装，
                补充图像缺失部分；站点分为若干个模块，其中将每个模块规划为每个功能，使用时通过API 方式与后端交互，后端划分为两块：接口基础逻辑和对应 CV 模型推理运算
            </div>
            <div class="mb-3">
                <strong>技术栈：</strong>React + Material Ui + Django + Redis + ComfyUi + MySQL +  其他第三方Python/js 库/框架
            </div>
            <div>
                <div class="text-[#423c4a] my-5 lg:my-1  font-bold">
                    项目部分截图，可左右滑动(Some Screenshot Of Project，Swipe Left and Right)
                </div>
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
        <div class="my-2 text-lg w-full font-bold text-[#4B6CE9] italic">
            Project3 -> 大文件传输工具
        </div>
        <div class=" py-2 lg:py-5 w-full">
            <div class="flex gap-x-8 md:gap-x-16 items-center ">
                <div class="font-medium text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffe5e6] text-black rounded-[3px]   border-2 border-[#E3E3EF]">
                    大文件
                </div>
                <div class="font-semibold text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffffff] text-[#4B6CE9] rounded-[3px]   border-2 border-[#b3d0f7]">
                    分片传输
                </div>
                <div class="font-medium text-xs md:text-lg  px-3 md:px-5 py-0.5 bg-[#ffe5e6] text-black rounded-[3px]   border-2 border-[#E3E3EF]">
                    断点续传
                </div>
            </div>
            <div class="mt-5 my-3">
                <strong>介绍：</strong> 面对 大文件批量上传/下载 场景，采用文件分 chunk 批量传输、服务端/客户端 buffer 非阻塞IO 、chunk内容 hash 校验完整性 等策略，提高传输速度，
                采用 异步 + 协程(coroutine) 提高线程利用率，NIO多路复用 让线程在多任务切换来减少阻塞，支持断点续传功能；并且，采用 webSocket 协议让 UI前端界面 可以实时更新 
                传输进度
            </div>
            <div class="mb-3">
                <strong>技术栈：</strong>React + asyncio/ aiohttp +  其他第三方Python/js 库/框架
            </div>
            <div>
                <div class="text-[#423c4a] my-5 lg:my-1  font-bold">
                    项目部分截图，可左右滑动(Some Screenshot Of Project，Swipe Left and Right)
                </div>
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
        
        <div class="italic text-sm md:text-lg text-gray-400 mt-5 w-full">
            个人微信：a460467324；更多内容，后面将不断补充...
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
onMounted(() => {
  console.log('sssssss222sssss')
//   console.log(AboutMe)
//   fileMd.value = AboutMe

})

</script>
<style scoped>

.swiper {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #423c4a;
  box-shadow: 1px 1px 1px 1px #423c4a;
padding-top: 30px;
padding-bottom: 30px;

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  column-gap: 70px;
  align-items: center;
}
.swiper-slide span {
    font-size: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.swiper-slide .main-class {
  display: block;
  width: auto;
  height: 500px;
  object-fit: contain;
  border: 2px solid black;
  border-radius: 5px;
  
}


@media screen and (max-width:700px) {
    .swiper-slide {
        flex-direction: column;
        row-gap: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .swiper-slide .class-arrow{
        display: none;
    }

    .swiper-slide .main-class{
        object-fit:contain;
        height: auto;
    }
    
}

</style>
