# js时钟组件

![image](https://github.com/txn513/clock-component/img/1.png)

##如何使用

引入clock.js

```html
    <script src="clock.js" type="text/javascript"></script>
```

引入style.css

```html
    <link rel="stylesheet" type="text/css" href="style.css">
```

基本结构

```html
<!doctype html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="body" class="theme1">
        <ul id="list"></ul>
        <div id="hour" class="hour"></div>
        <div id="min" class="min"></div>
        <div id="sec" class="sec"></div>
        <div id="center"></div>
    </div>

    <script src="clock.js" type="text/javascript"></script>
    <script>
     $(function(){
        var clock = new Clock();
        clock.init({
            hourColor: 'pink',
            minColor: 'pink',
            secColor: 'blue',
            offset: '8'
        });
        clock.getZone();
      });
  </script>
</body>
```

##文档