export default  {
    afterAnimation: function () {
        this.$router.load({url: '/signup_01_no_anim/'})
    },
    handlerFocus: function () {
        let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS)
            this.$data.$$('div.bottom').css('border-bottom', '40vh solid transparent');
    },
    handleBlur: function () {
        let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS)
            this.$data.$$('div.bottom').css('border-bottom', '0vh solid transparent');
    }
}