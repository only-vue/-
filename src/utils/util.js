/**
 * 全局引用
 * @returns {*}
 */


/**
 * 输出方法
 */
export default {
  install: function(Vue, options) {
    /**
     * Toast 弹出
     */
    Vue.prototype.Toast = function(title) {
      if (!title) {
        title = '当前显示异常,请稍后再试';
      }
      Toast({
        mask: false, //是否显示蒙版
        message: title
      });
    };
    /**
     * Dialog 弹出
     * @param {*} title
     * @param {*} message
     * @param {*} etc
     */
    Vue.prototype.Dialog = function(title, message, callback) {
      Dialog.confirm({
        title: title,
        message: message,
        showCancelButton: false //取消按钮
      })
        .then(() => {
          // on close
        })
        .catch(() => {
          // on cancel
        });
    };
    /**
     * loading 显示
     * @param {*} title
     */
    Vue.prototype.showLoad = function(title) {
      if (title == null || title == '' || title == undefined) {
        title = '加载中';
      }
      Toast.loading({
        mask: true,
        message: title,
        duration: 2000, //当前显示时间
        forbidClick: true //禁止点击背景
      });
    };

    /**
     * loading 隐藏
     */
    Vue.prototype.hideLoad = function(title) {
      Toast.clear();
    };
    /**
     * 验证传入data是否为空
     */
    Vue.prototype.callData = function(obj) {
      if (obj == '' || obj == null || obj == undefined) {
        return (obj = {});
      }
    };

    /**
     * 倒计时
     */
    Vue.prototype.bindCode = function(number, show, count, timer) {
      if (!this.timer) {
        this.count = number;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= number) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
		};
		
		
    /**
     * 获取当前时间戳
     */
    Vue.prototype.Timestamp = function(obj, type) {
			var timestamp = (new Date()).valueOf();
			return timestamp;
		};
		
		 /**
     * 生成随机数
     */
    Vue.prototype.randomNum = function(start, end) {
			let temp=[]
			for(var i=start;i<end;i++){
				temp.push(i);
			}
			return temp;
    };

    /**
     * 时间戳转成时间格式
     */
    Vue.prototype.FmtDate = function(obj, type) {
      if (obj) {
        var date = new Date(obj);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? '0' + d : d;
        var h = date.getHours();
        h = h < 10 ? '0' + h : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        if (type == 'year') {
          return y;
        } else if (type == 'month') {
          return y + '-' + m;
        } else if (type == 'date') {
          return y + '-' + m + '-' + d;
        }
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      }
    };
    /**
     * 手机号码校验
     * @param phone
     * @returns {*}
     */
    Vue.prototype.isPhone = function(value) {
      if (!isSetString(value)) {
        Toast('请输入手机号码');
        return 0;
      }
      var patterns = /^1[3,5,8,7,4]\d{9}$/;
      if (!patterns.test(value)) {
        Toast('手机号码格式不正确');
        return 0;
      }
      return value;
    };

    /**
     * 4位验证码校验
     * @param Code
     * @returns {*}
     */
    Vue.prototype.isCode = function(value) {
      if (!isSetString(value)) {
        Toast('请输入验证码');
        return 0;
      }
      var reg = /^[0-9A-Za-z]{4}$/;
      if (!reg.test(value)) {
        Toast('手机验证码错误');
        return 0;
      } else {
        return value;
      }
    };
  }
};
