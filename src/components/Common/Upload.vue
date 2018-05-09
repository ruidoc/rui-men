<template>
    <div class="upload">
        <rum-button icon="ios-cloud-upload">
            ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠢᠶᠠᠨ ᠰᠣᠩᠭᠣᠬᠣ
            <input @change="fileChange" type="file" multiple class="input"/>
        </rum-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            
        }
    },
    props: {
        uploadToken: {
            type: String,
            default: ''
        },
        uploadUrl: {
            type: String,
            default: ''
        }
    },
    methods: {
        fileChange(e) {
            let length = e.target.files.length
            for (let i = 0; i < length; i++) {
                this.upload(e.target.files[i])
            }
        },
        upload(file) {
            let formData = new FormData();
            formData.append('file', file, file.name);
            axios.post(this.uploadUrl,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer '+this.uploadToken
                }
            }).then(res=> {
                if(res.data.code==200) {
                    this.$RumMessage('上传成功','success')
                    this.$emit('on-ok',res.data)
                    // console.log('success',res.data);
                } else if(res.data.code==403) {
                    this.$RumMessage('token失效','warn')
                    this.$emit('on-error',res.data)
                    // console.log('fail',res.data);
                } else {
                    this.$RumMessage('上传失败','error')
                    this.$emit('on-error',res.data)
                }
            }).catch(err=> {
                // console.log('err',err)
                this.$emit('on-error',res)
            })
        }
    }
};
</script>

<style lang="less" scoped>
    .input {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        cursor: pointer;
    }
</style>

