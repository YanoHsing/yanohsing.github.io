document.getElementById('myButton').addEventListener('click', function () {
    const email = 'hsingyu.yen@icloud.com';
    const subject = '这是主题';
    const body = '这是邮件正文内容。';

    // 使用 mailto 协议打开邮件客户端
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
