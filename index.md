<script>
    document.addEventListener('DOMContentLoaded', function() {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes('zh')) {
            window.location.href = '/zh';
        } else {
            window.location.href = '/en';
        }
    });
</script>
