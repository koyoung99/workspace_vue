<template>
    <h1>전화번호부</h1>

    <h2>리스트</h2>

    <p>등록된 전화번호 리스트입니다.</p>

    <table border="1">
        <colgroup>
            <col style="width: 100px;">
            <col style="width: 120px;">
            <col style="width: 120px;">
            <col style="width: 190px;">
        </colgroup>
        <thead>
            <tr>
                <th>이름(name)</th>
                <th>핸드폰(hp)</th>
                <th>회사(company)</th>
                <th>관리</th>
            </tr>
        </thead>
        <tbody v-bind:key="i" v-for="(personVo, i) in phonebookList">
            <tr>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
                <td>
                    <button v-on:click="deletebtn(personVo.personId)" type="button">삭제하기</button>&nbsp;&nbsp;
                    <router-link v-bind:to="`/modifyform/${personVo.personId}`">[수정폼이동]</router-link>
                </td>
            </tr>

        </tbody>
    </table>
    <br>

    <router-link to="/writeform">등록폼 이동</router-link>

</template>
<script>
import axios from 'axios';

export default {
    name: "listView",
    components: {},
    data() {
        return {
            phonebookList: []

        }
    },
    methods: {
        getList() {
            console.log("데이터 가져오기");

            axios({
                method: 'get',  //put,post,delete
                url: 'http://localhost:9001/api/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.phonebookList = response.data;

            }).catch(error => {
                console.log(error);
            });
        },
        deletebtn(personId) {
            console.log("삭제");
            console.log("personId = " + personId);

            axios({
                method: 'delete',  //put,post,delete
                url: 'http://localhost:9001/api/' + personId,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: personId, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {

                console.log(response.data); //수신데이터
                this.phonebookList = response.data;

                this.getList();

            }).catch(error => {
                console.log(error);
            });
        }

    },
    created() {
        this.getList();
    }
};
</script>
<style></style>
