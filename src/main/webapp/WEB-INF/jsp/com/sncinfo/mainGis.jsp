<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv=Content-Type content="text/html;charset=utf-8"/>
    <%@ include file="/WEB-INF/jsp/com/sncinfo/common/shareProperties.jsp" %>
    <title>동아대학교 교통정보</title>
    
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/gis.css'/>">
    <%--open layers 4 css--%>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/ol.css'/>">
    <%-- icon+font --%>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/pages-icons.css'/>">
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/font-awesome.css'/>">

    <script src="<c:url value='/js/jquery-3.3.1.min.js'/>"></script>
    <%--open layers 4 and proj4 js--%>
	<%-- <script src="<c:url value='/js/map/ol4/ol-debug.js'/>"></script> --%>
	<script src="<c:url value='/js/map/ol4/ol.js'/>"></script>
    <script src="<c:url value='/js/map/ol-layerswitcher.js'/>"></script>
    <script src="<c:url value='/js/map/proj/proj4.js'/>"></script>
    
    <script src="<c:url value='/js/sncinfo.map.handler.js'/>"></script>
    <script src="<c:url value='/js/sncinfo.utils.js'/>"></script>
    <script src="<c:url value='/js/map/mainPointStyle.js'/>"></script>

</head>
<body>
	<%--지도 원본 화면--%>
	<!-- <div id="map" style="width: 100%; float: left;"></div> -->
	<div id="map" style="width: 100%;"></div> 
</body>
</html>