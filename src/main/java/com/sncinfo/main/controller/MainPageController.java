package com.sncinfo.main.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainPageController 
{
	@RequestMapping(value = "/mainPage.do")
	public String mainPage(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception 
	{
		System.out.println("gis main view");
		return "mainGis";
	}
}
