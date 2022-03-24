---
title: detect-adblock.js
permalink: /js-scripts/detect-adblock.md
---
Usage:
```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    <!-- Unobfuscated version below. Some adblocks may block because it contains the words "tracking" and "ads". Works best including at the top of the body. -->
    <script src="https://cdn.jsdelivr.net/gh/wackyblackie/js-scripts/detect-adblock.js" integrity="sha384-GTDaPqDSes1lxtnfEf+LcaYo8aFQtevEbriZjKBux1xU+sYLwgva2MOLaXMLEkjL"></script>
    <!-- Obfuscated version below. Hopefully this mitigates the problem described above. Works best including at the top of the body. -->
    <script src="https://cdn.jsdelivr.net/gh/wackyblackie/js-scripts/detect-adblock-obfuscated.js" integrity="ssha384-Vhp1IUrPK4MejWFT00fjJ61+RXHj+9KPxCVoobykaUvcZ+EWfTzj4zk5AQd0qsDQ"></script>
    ...
</body>
</html>
```

Production ready!