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
                    <h3>첨부파일연습</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>갤러리</li>
                            <li class="last">첨부파일연습</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->

                <div id="file">
                    <form v-on:submit.prevent="uploadFile" action="" method="post" enctype="multipart/form-data">
                        <table>
                            <colgroup>
                                <col style="width: 600px;">
                                <col style="width: 220px;">
                            </colgroup>
                            <tr>
                                <td class="text-left">
                                    <labe>이름</labe>
                                    <input type="text" name="name" v-model="name">
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">
                                    <labe>성별</labe>
                                    <input type="text" name="gender" v-model="gender">
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left"><input v-on:change="selectFile" type="file" name="file"></td>
                                <td class="text-right"><button type="submit">파일업로드</button></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <!-- //file -->


            </div>
            <!-- //content  -->
        </div>
        <!-- //container  -->


        <AppFooter />
    </div>
    <!-- //wrap -->

</template>


<script>
import axios from 'axios';
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
    name: "AttachFormView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            file: "",
            name: "",
            gender: ""

        };
    },
    methods: {
        selectFile(event) {
            console.log("파일선택");
            this.file = event.target.files[0];

        }, uploadFile() {
            console.log("파일업로드");

            // 데이터 서버전송용 전용박스
            let forData = new FormData(); // FormData()는 객체임
            // ->data로 보낸다 (json방식이 아니지만 data로보냄)
            forData.append("file", this.file); //("담는그릇",실체)
            forData.append("name", this.name);
            forData.append("gender", this.gender);

            axios({
                method: 'post', // put, post, delete  || post는 데이터전송할때.
                url: 'http://localhost:9000/api/attach',
                headers: { "Content-Type": "multipart/form-data" }, //전송타입
                // params: guestbookVo, //get방식 '파라미터'로 값이 전달
                data: forData, //put, post, delete 방식 자동으로 'JSON'으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                let saveName = response.data.apiData;
                console.log(saveName);

                //result페이지로 넘기기(다음페이지로 넘기기)
                this.$router.push(
                    {
                        path: "/attach/result",
                        query: { saveName: saveName }
                    }); //데이터 가져갈때 path="주소", query={ : }
                


            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() { }
};
</script>


<style></style>