<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">ape-bridge后台管理系统</h3>
      <!-- <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item> -->
      <!-- <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item> -->
      <!-- <el-form-item prop="code" v-if="captchaEnabled">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img"/>
        </div>
      </el-form-item> -->
      <!-- <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox> -->
      <div style="margin:20px 0">
        <el-button
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handlesign"
        >
          <span >使用钱包签名</span>

        </el-button>

      </div>
      <el-form-item style="width:100%;" v-if="address&&signature&&randomNumber">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/jsencrypt'
// import { sign} from "../../assets/common/utils2";
import { sign,getUserAddress,getEthereum ,addNetwork,requestUserAddress} from "../assets/common/utils2";
export default {
  name: "Login",
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined,
      address:'',
      signature:'',
      randomNumber:'',
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    // this.getCode();
    // this.getCookie();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.loginForm.uuid = res.uuid;
        }
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          // if (this.loginForm.rememberMe) {
          //   Cookies.set("username", this.loginForm.username, { expires: 30 });
          //   Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
          //   Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          // } else {
          //   Cookies.remove("username");
          //   Cookies.remove("password");
          //   Cookies.remove('rememberMe');
          // }

          this.$store.dispatch("Login", {
            userAddr:this.address,
            signature:this.signature,
            signStr:this.randomNumber,
          }).then((res) => {
            console.log(res)
            this.$router.push({ path: this.redirect || "/" }).catch(()=>{});

          }).catch((err) => {
            console.log(err)
            this.loading = false;
            this.address = ''
            this.signature = ''
            this.randomNumber = ''
            // if (this.captchaEnabled) {
            //   this.getCode();
            // }
          });
        }
      });
    },
    handlesign(){
      let ethereum = getEthereum();
      if (ethereum) {
          addNetwork().then(r => {
            //连接账户
            requestUserAddress().then(userAddress => {
                //console.log(userAddress)
                if(userAddress.code == 4001){
                  this.$message({ message: userAddress.message, type: 'warning' })
                }else if(userAddress.code == -32002){
                  this.$message({ message: userAddress.message, type: 'warning' })
                }else{

                  this.getSign()

                }
            })
          })
          .catch(e => {
            this.$toast("请使用指定链");
          });
      } else {
        this.$toast("请下载钱包后再试");
      }

    },
    getSign(){
      if(getUserAddress() != '' && getUserAddress() != null){
        let num = this.$common.randomString(6)
        console.log('签名随机数',num)
        sign(num).then(res => {
            console.log(typeof(res))
            console.log('签名',res)
            if(typeof(res) == 'string'){
                this.address = getUserAddress()
                this.signature = res
                this.randomNumber = num
                this.handleLogin()
            }else{
              this.$message({ message: '签名失败', type: 'warning' })
              this.address = ''
                this.signature = ''
                this.randomNumber = ''
            }

        })
      }else{
        this.$message({ message: '请链接钱包后再试', type: 'warning' })
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  //background-image: url("../assets/images/login-background.jpg");
  background-color: #1c84c6;
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
</style>
