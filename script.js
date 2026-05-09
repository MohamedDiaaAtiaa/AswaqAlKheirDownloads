document.addEventListener('DOMContentLoaded', () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const links = {
        customer: {
            pc: 'https://expo.dev/artifacts/eas/vCtK6YsvmGaXHccYTVxws8.apk',
            mobile: 'https://expo.dev/accounts/arandommelon/projects/aswaq-alkheir-new/builds/eff0e4e9-66c9-48be-bfb0-9411911168ab'
        },
        admin: {
            pc: 'https://expo.dev/artifacts/eas/wansi62MjsRzCgB5ksq1ZX.apk',
            mobile: 'https://expo.dev/accounts/arandommelon/projects/aswaq-alkheir-admin-new/builds/f4411328-0766-4a6d-afeb-492031dcfae1'
        }
    };

    const customerBtn = document.getElementById('customer-download');
    const adminBtn = document.getElementById('admin-download');

    if (isMobile) {
        customerBtn.href = links.customer.mobile;
        adminBtn.href = links.admin.mobile;
        console.log('Mobile device detected - serving build page links');
    } else {
        customerBtn.href = links.customer.pc;
        adminBtn.href = links.admin.pc;
        console.log('PC detected - serving direct APK artifact links');
    }
});
