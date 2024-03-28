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
                    <div id="modifyForm">
                        <form v-on:submit.prevent="boardModify" action="#" method="get">
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
                                <label class="form-text" for="txt-title">제목</label>
                                <input type="text" id="txt-title" name="title" v-model="boardVo.title">
                            </div>



                            <!-- 내용 -->
                            <div class="form-group">
                                <textarea id="txt-content" name="content" v-model="boardVo.content"></textarea>
                            </div>

                            <router-link id="btn_cancel" to="">취소</router-link>
                            <button id="btn_modify" type="submit">수정</button>

                        </form>
                        <!-- //form -->
                    </div>
                    <!-- //modifyForm -->
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
    name: "modifyFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            boardVo: {
                no:this.$route.params.no,
                title: "",
                content: "",
                hit:"",
                name:"",
                regDate:""

            }
        };
    },
    methods: {
        boardModifyForm() {
            console.log("데이터 가져오기");

            axios({
                method: 'get',  //put,post,delete
                url: 'http://localhost:9000/api/board/modify/' + this.boardVo.no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                this.boardVo = response.data.apiData;
                console.log(this.boardVo);

            }).catch(error => {
                console.log(error);
            });
        },
        boardModify() {
            console.log("수정");

            axios({
                method: 'put',  //put,post,delete
                url: 'http://localhost:9000/api/board/modify',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.boardVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.boardVo = response.data.apiData;

                this.$router.push("/board/list");

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.boardModifyForm();
    }
};
</script>


<style></style>