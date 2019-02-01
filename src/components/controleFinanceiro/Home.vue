<template>
    <div class="home">
        Home

    </div>
</template>

<script>
import {baseApiUrl} from "@/global"
import axios from "axios"


export default {
    name: "Home",
    data() {
        return {
            loading: true,
            loadingImport: true
        }
    },
    methods: {
        
    }
}

</script>

<style>
.text-center {
	text-align: center;
}
</style>
