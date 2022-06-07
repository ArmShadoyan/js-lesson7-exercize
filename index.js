"use strict"

const exercizes = {
	exercize1:{
		problem:[
			     "There are 30 students in the class, 40% of whom are boys",
				 "How many girls are in the class?"
				],
	
	solution1(){
		let all = 30
		let boysQuantity = (30 * 40) / 100
		let girlsQuantity = all - boysQuantity
		return girlsQuantity
	   }
	},
	exercize2:{
		problem:[
			     "John earns $ 50 in 8 hours how much will he earn in 40 hours?",
				 "how much will he earn in 40 hours?",
				 "if he was paid 2 times less"
				],
	
	solution2(){
		let earnedMoney = (40/8)*25
		return earnedMoney
	   }
	}
};
	//EXERCIZE 1 RESULTE
	const result1 = exercizes.exercize1.solution1()
	console.log (result1)
	//EXERCIZE 2 RESULTE
	const result2 = exercizes.exercize2.solution2()
	console.log (result2 + "$")