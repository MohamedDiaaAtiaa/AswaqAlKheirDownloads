document.addEventListener('DOMContentLoaded', () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const links = {
        customer: {
            pc: 'https://expo.dev/artifacts/eas/vCtK6YsvmGaXHccYTVxws8.apk',
            mobile: 'https://expo.dev/accounts/arandommelon/projects/aswaq-alkheir-new/builds/8ef2b635-39f8-4c6e-b6e2-4cdb764f4353'
        },
        admin: {
            pc: 'https://expo.dev/artifacts/eas/wansi62MjsRzCgB5ksq1ZX.apk',
            mobile: 'https://expo.dev/accounts/arandommelon/projects/aswaq-alkheir-admin-new/builds/ab83899f-c188-48e3-98ee-706334b53a8d'
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
