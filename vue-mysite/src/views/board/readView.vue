<template>
    <div id="wrap">

        <AppHeader />

        <div id="container" class="clearfix">
            <div id="aside">
                <h2>게시판</h2>
                <ul>
                    <li><a href="">일반게시판</a></li>
                    <li><a href="">댓글게시판</a></li>
                </ul>
            </div>
            <!-- //aside -->

            <div id="content">

                <div id="content-head">
                    <h3>일반게시판</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>게시판</li>
                            <li class="last">일반게시판</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->

                <div id="board">
                    <div id="read">
                        <form action="#" method="get">
                            <!-- 작성자 -->
                            <div class="form-group">
                                <span class="form-text">작성자</span>
                                <span class="form-value">{{ boardVo.name }}</span>
                            </div>

                            <!-- 조회수 -->
                            <div class="form-group">
                                <span class="form-text">조회수</span>
                                <span class="form-value">{{ boardVo.hit }}</span>
                            </div>

                            <!-- 작성일 -->
                            <div class="form-group">
                                <span class="form-text">작성일</span>
                                <span class="form-value">{{ boardVo.regDate }}</span>
                            </div>

                            <!-- 제목 -->
                            <div class="form-group">
                                <span class="form-text">제 목</span>
                                <span class="form-value">{{ boardVo.title }}</span>
                            </div>

                            <!-- 내용 -->
                            <div id="txt-content">
                                <span class="form-value">
                                    {{ boardVo.content }}
                                </span>
                            </div>
                            <div v-if="this.$store.state.authUser != null && this.$store.state.authUser.no == boardVo.userNo">
                                <router-link id="btn_modify" v-bind:to="`/board/modifyform/${no}`">수정</router-link>
                            </div>
                            <router-link id="btn_modify" to="/board/list">목록</router-link>

                        </form>
                        <!-- //form -->
                    </div>
                    <!-- //read -->
                </div>
                <!-- //board -->
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
import axios from 'axios';

export default {
    name: "readView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            boardVo: {
                name: "",
                hit: "",
                regDate: "",
                title: "",
                content: ""
            },
            no: this.$route.params.no
        };
    },
    methods: {
        getRead() {

            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9000/api/board/read/' + this.no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: this.boardVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.boardVo = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });

        }

    },
    created() {
        this.getRead();
    }
};
</script>


<style></style>