<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel React JS SPA</title>
    <link rel="stylesheet" href="{{asset('site')}}/css/main.min.css">
    <link rel="stylesheet" href="{{asset('site')}}/css/style.css">
    <link rel="stylesheet" href="{{asset('site')}}/css/color.css">
    <link rel="stylesheet" href="{{asset('site')}}/css/responsive.css">
</head>

<body>
    <div id="root">
        <App></App>
    </div>
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
	<script src="{{asset('site')}}/js/script.js"></script>
    <script src="{{asset('site')}}/js/main.min.js"></script>
	<script src="{{asset('site')}}/js/map-init.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8c55_YHLvDHGACkQscgbGLtLRdxBDCfI"></script>
    <script src="/js/app.js"></script>
</body>

</html>