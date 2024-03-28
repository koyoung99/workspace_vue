<template>
    <div>
        <table border="1">
            <thead>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
                <th>성별</th>
            </thead>

            <tbody v-bind:key="i" v-for="(sVo, i) in sList">
                <td>{{ sVo.no }}</td>
                <td>{{ sVo.name }}</td>
                <td>{{ sVo.hp }}</td>
                <td>{{ sVo.company }}</td>
                <td>{{ sVo.gender }}</td>
            </tbody>

        </table>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "ListView",
    components: {},
    data() {
        return {
            sList: []
        };
    },
    methods: {
        getList() {

            axios({
                method: 'get', // put, post, delete 
                url: 'https://raw.githubusercontent.com/clz2024-red/api/main/person.json',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response.data); //수신데이타
                this.sList = response.data;
                console.log(this.sList);

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


<style>
table{
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    
}
table>thead{
    background-color: #d6d6d6;
}
th:nth-child(1) {
    width: 40px;
}
th:nth-child(2) {
    width: 70px;
}
th:nth-child(3) {
    width: 150px;
}
th:nth-child(4) {
    width: 160px;
}
th:nth-child(5) {
    width: 40px;
}
</style>