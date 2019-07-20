package com.falcons.FalconsTeam.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentResources {
	
	@RequestMapping(method = RequestMethod.POST)
	public String payment() {
		//Post Payment
		return "Payment";
	}

}
