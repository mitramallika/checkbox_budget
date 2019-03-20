$(document).ready(function () { //need this because we have to make sure the page loads before we ask it to do anything//
	const total_budget = parseFloat($(".total_budget").find("span").text()); //grabs every element on page that has class total_budget, fetch span convert it to text and turning the whole thing into a number//

	$("body").on("change", "input[type='checkbox']", function (e) { //listen in body for when something changes (someone clicks the checkbox), then make the following happen //
		let remaining = total_budget; //the number that is changing will be total_budget//

		$("input[type='checkbox']:checked").each(function () {
			const $this_checkbox = $(this);
			const value = parseFloat($this_checkbox.val());

			remaining = remaining - value; //current value is remaining and value of element is deducted from it and becomes the new remaining//
		});

		console.log(remaining);
		$(".total_budget").find("span").text(remaining) //this made the 100% at the top change to the remaining number//

		if (remaining < 0) { //if remaining becomes less than zero
			$(".total_budget").addClass("over_budget");

		} else {
			$(".total_budget").removeClass("over_budget");


		}


	});
});