<template>
    <div id="wrap">
        <AppHeader />

        <div id="container" class="clearfix">
            <div id="aside">
                <h2>갤러리</h2>
                <ul>
                    <li><a href="">일반갤러리</a></li>
                    <li><a href="">파일첨부연습</a></li>
                </ul>
            </div>
            <!-- //aside -->

            <div id="content">
                <div id="content-head">
                    <h3>일반갤러리</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>갤러리</li>
                            <li class="last">일반갤러리</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->


                <div id="gallery">
                    <div id="list">


                        <button id="btnImgUpload">이미지올리기</button>
                        <div class="clear"></div>


                        <ul id="viewArea">

                            <!-- 이미지반복영역 -->
                            <li>
                                <div class="view">
                                    <img class="imgItem" src="@/assets/image/profile.jpg">
                                    <div class="imgWriter">작성자: <strong>유재석</strong></div>
                                </div>
                            </li>

                            <!-- 이미지반복영역 -->


                        </ul>
                    </div>
                    <!-- //list -->
                </div>
                <!-- //	gallery -->

            </div>
            <!-- //content  -->

        </div>
        <!-- //container  -->


        <AppFooter />
    </div>
    <!-- //wrap -->

</template>


<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import "@/assets/css/gallery.css"
export default {
    name: "galleryView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {

        };
    },
    methods: {
        getList() {
            console.log("데이터가져오기");

        }
    },

created() {
        this.getList();
    }
};
</script>


<style></style>