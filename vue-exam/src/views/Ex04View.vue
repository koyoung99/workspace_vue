<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <div class="box" v-bind:class="{'box-red': isRed, 
                                    'box-blue': isBule, 
                                    'f-bold': isBold,
                                    'f-big': isSize
                                     }">
        {{ boxText }}
    </div>

    <button v-on:click="redBox" type="button">빨간박스</button>
    <button v-on:click="blueBox" type="button">파란박스</button>
    <button v-on:click="boldOnOff" type="button">볼드on/off</button>
    <button v-on:click="sizeOnOff">크기on/off</button>

    <br><br><br><br>
    <p style="color: #ff0000;">인라인스타일로 태그에 스타일 직접 추가</p>

    <p v-bind:style="typeA">인라인스타일로 태그에 스타일 직접 추가</p>
    <button v-on:click="changType" type="button">인라인스타일변경</button>

</template>
<script>

export default {
    name: "Ex04View",
    components: {},
    data() {
        return {
            title: "Vue공부",
            subTitle: "class속성 제어",
            boxText: "vue공부 재미있습니다.",
            isRed: false,
            isBule: false,
            isBold: false,
            isSize: false,
            typeA:""
        };
    },
    methods: {
        redBox(){
            this.isRed = true;
            this.isBule = false;
        },
        blueBox(){
            this.isRed = false;
            this.isBule = true;
        },
        boldOnOff(){
            if(this.isBold == true){
                this.isBold = false;
            }else {
                this.isBold = true;
            }
        },
        sizeOnOff(){
            this.isSize =  !this.isSize;
        },
        changType(){
            console.log("클릭");
            this.typeA="font-size: 40px; color: #ff0000;";
        }


    },
};
</script>
<style>
.box{
    width: 150px;
    border: 1px solid #000000;
}

.box-red{
    background-color: #ff0000;
}

.box-blue{
    background-color: #0000ff;
}

.f-bold{ font-weight: bold; }

.f-big{ font-size: 20px; }

.f-ita{ font-style: italic;}



</style>