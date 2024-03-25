<template>'
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
        <tbody>
            <div v-bind:key="i" v-for="(phonebookVo, i) in phonebookList">
                <tr>
                    <td>{{ phonebookVo.name }}</td>
                    <td>{{phonebookVo.hp}}</td>
                    <td>{{phonebookVo.company}}</td>
                    <td>
                        <button type="button">삭제하기</button>&nbsp;&nbsp;
                        <router-link v-bind:to="'/update/${phonebookVo.no}'">[수정폼이동]</router-link>
                    </td>
                </tr>
            </div>
        </tbody>
    </table>
    <br>

    <a href="">등록폼 이동</a>

</template>
<script></script>
<style></style>