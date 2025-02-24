---
title: 测试
charset: "utf-8"
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HSING</title>
    <link rel="stylesheet" href="/CSS/index.css">
    <link rel="icon" href="/RES/icon.ico" type="image/x-icon">
</head>

<div class="fixed-bar">
        <button onclick="location.href='/index.html'">HOME</button>
        <button onclick="window.scrollTo(0, 0)">TOP</button>
</div>

# 关于我

## 总而言之

没什么好说的，，，

### 目前在干什么

本科在读，写毕业论文，找工作，大概还有搞这个网站吧？以及混吃等死，，，

### 喜欢玩的游戏有

星露谷物语，Minecraft，植物大战僵尸，植物大战僵尸2，泰拉瑞亚，以撒的结合，Brotato，吸血鬼幸存者，，，

## 碎碎念

<div id="talk">电子人会梦见仿生羊吗？</div>

# 联系方式

[电子邮箱](mailto:hsingyu.yen@icloud.com)

<script>
    // 函数：从文件中读取随机行
    function getRandomLineFromFile(filePath, callback) {
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                const lines = text.split('\n');
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                callback(randomLine);
            })
            .catch(error => console.error("读取文件时出错:", error));
    }
    // 给点击元素添加事件监听
    document.getElementById("talk").addEventListener("click", function () {
        // 使用文件路径 test.txt 来读取随机一行
        getRandomLineFromFile('/POST/me/talk.txt', function (randomText) {
            document.getElementById("talk").textContent = randomText;
        });
    });
</script>
 