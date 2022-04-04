function customEvent () {
		var custom_data = {
			"MadLibs": "I love MadLibs!",
		}

		branch.logEvent(
    		"I Love MadLibs",
    		custom_data,
    		function(err) { console.log(err); }
		);
	};

	function completedRegistration () {
		var event_and_custom_data = {
		   "transaction_id": "tras_Id_1234",
		   "description": "Preferred purchase",
		   "registration_id": "12345"
		};

		var customer_event_alias = "COMPLETE_REGISTRATION";

		branch.logEvent(
		   "COMPLETE_REGISTRATION",
		   event_and_custom_data,
		   customer_event_alias,
		   function(err) { console.log(err); }
		);
	};

	function addToCart () {
		var event_and_custom_data = {
		   "transaction_id": "tras_Id_1232343434",
		   "currency": "USD",
		   "revenue": 180.2,
		   "shipping": 10.5,
		   "tax": 13.5,
		   "coupon": "promo-1234",
		   "affiliation": "high_fi",
		   "description": "Preferred purchase",
		   "purchase_loc": "Palo Alto",
		   "store_pickup": "unavailable"
		};

		var content_items = {
		   "$content_schema": "COMMERCE_PRODUCT",
		   "$og_title": "MadLib Story",
		   "$og_description": "Start loving your stories",
		   "$canonical_identifier": "MadLib/1234",
		   "$publicly_indexable": false,
		   "$price": 101.2,
		   "$locally_indexable": true,
		   "$quantity": 1,
		   "$sku": "1101123445",
		   "$product_name": "MadLib Word",
		   "$product_brand": "MadLib",
		   "$product_category": "Story",
		   "$product_variant": "XL",
		   "$rating_average": 4.2,
		   "$rating_count": 5,
		   "$rating_max": 2.2,
		};

		var customer_event_alias = "Add to Cart: MadLib Story";

		branch.logEvent(
		   "ADD_TO_CART",
		   event_and_custom_data,
		   content_items,
		   customer_event_alias,
		   function(err) { console.log(err); }
		);
	};


	function purchaseComplete () {
		var event_and_custom_data = {
		   "transaction_id": "tras_Id_1232343434",
		   "currency": "USD",
		   "revenue": 180.2,
		   "shipping": 10.5,
		   "tax": 13.5,
		   "coupon": "promo-1234",
		   "affiliation": "high_fi",
		   "description": "Preferred purchase",
		   "purchase_loc": "Palo Alto",
		   "store_pickup": "unavailable"
		};

		var content_items = {
		   "$content_schema": "COMMERCE_PRODUCT",
		   "$og_title": "MadLib Story",
		   "$og_description": "Start loving your stories",
		   "$canonical_identifier": "MadLib/1234",
		   "$publicly_indexable": false,
		   "$price": 101.2,
		   "$locally_indexable": true,
		   "$quantity": 1,
		   "$sku": "1101123445",
		   "$product_name": "MadLib Word",
		   "$product_brand": "MadLib",
		   "$product_category": "Story",
		   "$product_variant": "XL",
		   "$rating_average": 4.2,
		   "$rating_count": 5,
		   "$rating_max": 2.2,
		};

		var customer_event_alias = "Complete Purchase: MadLib Story";

		branch.logEvent(
		   "PURCHASE",
		   event_and_custom_data,
		   content_items,
		   customer_event_alias,
		   function(err) { console.log(err); }
		);
	}

	function viewWords () {
		var event_and_custom_data = {
   			"noun": "Branch",
   			"verb": "Grow",
   			"adj": "Skyrocket",
   			"story": "0"
		};

		var content_items = {
		   "$content_schema": "COMMERCE_PRODUCT",
		   "$og_title": "MadLib Story",
		   "$og_description": "Start loving your stories",
		   "$canonical_identifier": "MadLib/1234",
		   "$publicly_indexable": false,
		   "$price": 101.2,
		   "$locally_indexable": true,
		   "$quantity": 1,
		   "$sku": "1101123445",
		   "$product_name": "MadLib Word",
		   "$product_brand": "MadLib",
		   "$product_category": "Story",
		   "$product_variant": "XL",
		   "$rating_average": 4.2,
		   "$rating_count": 5,
		   "$rating_max": 2.2,
		};

		var customer_event_alias = "Viewed Words of the Day";

		branch.logEvent(
		   "VIEW_ITEMS",
		   event_and_custom_data,
		   content_items,
		   customer_event_alias,
		   function(err) { console.log(err); }
		);
	}

	function openDeeplink () {
		
	}