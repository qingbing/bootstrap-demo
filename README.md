# bootstrap-demo
bootstrap 学习记录，制作最简单的demo
# 1、NOTE：
## 1.1 、bootstrap 必须是html5类型的文档
```
<!doctype html>
```

## 1.2 确保适当的绘制和触屏缩放，需要在 <head> 之中添加 viewport 元数据标签
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## 1.3 移动设备浏览器上,禁用其缩放（zooming）功能
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```


# 2、布局容器
页面内容和栅格系统包裹一个
```
div.container : 固定宽度并支持响应式布局
div.container-fluid : 100% 宽度，占据全部视口
```

### 关闭按钮
```
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
```


