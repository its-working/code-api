<template>
    <div v-if="isApiInfoVisible && data != ''"
        class="modal top-0 left-0 bg-slate-800 z-30 bg-opacity-40 position fixed h-[calc(100vh-70px)] mt-[70px] w-screen max-w-screen  flex justify-center">
        <div
            class="apiInfo bg-slate-950 min-w-[400px] text-slate-200 max-w-[100vw-20px] p-3 my-3 max-h-full overflow-y-auto customized-scrollbar rounded-md text-center space-y-3">

            <div @click="ToggleApiInfo(false)" class="exit absolute text-4xl cursor-pointer">
                <ion-icon name="close-outline"></ion-icon>
            </div>

            <div class="item">
                <h5 class="font-bold border-b-2 w-fit mx-auto my-2">API Name</h5>
                <p class="text-sm magic font-bold">{{ data.apiName }}</p>
            </div>

            <div class="item">
                <h5 class="font-bold border-b-2 w-fit mx-auto my-2">About API</h5>
                <p class="text-sm">{{ data.Description }}</p>
            </div>

            <div class="item">
                <h5 class="font-bold border-b-2 w-fit mx-auto my-2">Language</h5>
                <p class="text-sm">{{ data.language }}</p>
            </div>

            <div class="item">
                <h5 class="font-bold border-b-2 w-fit mx-auto my-2">Parameters:</h5>
                <p class="text-sm">{{ data.apiParametersName }}</p>
            </div>

            <div class="item">
                <h5 class="font-bold border-b-2 w-fit mx-auto my-2">API URL:</h5>
                <div class="url bg-slate-800 p-2 overflow-y-auto rounded-lg my-3 max-w-[90%] mx-auto scrollbar-customized"
                    style="white-space: nowrap">
                    https://{{ domain() }}/apiResponse?id={{ this.data.user_id }}&name={{ data.apiName }}&{{ getUrlParm() }}
                </div>
            </div>
        </div>
    </div>
    <section class="container mx-auto pt-32">
        <h1 class="text-4xl font-bold text-center magic">My APIs</h1>

        <div v-if="isApiAdded" @click="hideSuccessAlert"
            class="alert bg-green-600 w-fit mx-auto my-5 p-3 px-5 text-xl rounded-md cursor-pointer">
            Api Successfully added!
        </div>

        <h5 v-if="apiData.length === 0" class="text-3xl font-bold text-center my-12 text-slate-300">No API Yet!</h5>

        <div v-else>
            <ApiView v-for="(api, index) in Array.from(apiData)" :key="index" :data="api"
                isApiInfoVisible="isApiInfoVisible" @ToggleApiInfo="ToggleApiInfo" />
        </div>
    </section>
</template>
  
<script>
import { account, databases } from "/src/appwrite/appwriteConfig.js";
import { Query } from "appwrite";
import ApiView from "/src/components/view/apiHub/apiView/apiView.vue";

export default {
    name: "MyApisView",
    data() {
        return {
            isApiAdded: false,
            apiData: [],
            isApiInfoVisible: false,
            apiUserName: '',
            data: ''
        }
    },
    components: {
        ApiView
    },
    methods: {
        domain() {
            return window.location.hostname;
        },
        getUrlParm() {
            return this.data.apiParametersName.map((name) => {
                return name + "=";
            })
                .join("&");
        },
        hideSuccessAlert() {
            this.isApiAdded = false;
        },
        async getCurrentUserData() {
            try {
                // Get the current user ID
                const user = await account.get();
                const userId = user.$id;
                // Fetch documents where user_id matches the current user ID
                const response = await databases.listDocuments(
                    process.env.VUE_APP_APPWRITE_DATABASE_ID,
                    process.env.VUE_APP_APICODE_COLLECTION_ID,
                    [
                        Query.equal("user_id", userId)
                    ]);

                this.apiData = response.documents;
            } catch (error) {
                console.log(error);
            }
        },
        ToggleApiInfo(event, currData) {
            this.isApiInfoVisible = event;
            this.data = currData;
        }
    },
    mounted() {
        this.getCurrentUserData();
        const successMessage = this.$route.query.success;
        this.apiUserName = localStorage.getItem('username');
        if (successMessage) {
            this.isApiAdded = true;
            // Clear the success query parameter
            this.$router.replace({ query: { ...this.$route.query, success: undefined } });
        }
    },

};

</script>