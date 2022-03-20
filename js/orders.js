$(document).ready(function () {
    $('.btn-order').click(function () {
        let pizzaSize = $(".size option:selected").val();
        let pizzaToppings = $(".toppings option:selected").val();
        let pizzaCrust = $(".crust option:selected").val();
        let total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust)
        let order = 1;
        let totalCost = 0;

        $("table").show();
        $(".btn-add").show();
        $(".check-out").show();

        // display orders on the table rows.
        $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
        $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
        $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
        $("#total").html(total);

        // contructor function
        function Pizza(size, toppings, crust, total, orderNumber) {
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.total = total;
            this.orderNumber = orderNumber;
        }
        $('.btn-add').click(function () {
            var pizzaSize = $(".size option:selected").val();
            var pizzaToppings = $(".toppings option:selected").val();
            var pizzaCrust = $(".crust option:selected").val();
            var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
            order = order + 1;
            totalCost = totalCost + total;

            var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

            var newRow = '<tr><th scope="row">' + newPizza.orderNumber + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

            $("#pizza").append(newRow);
        });
        $(".btn.check-out").click(function () {
            $(".btn-add").hide();
            $(".check-out").hide();
            $(".hidden-btns").show();
            $(".location").hide();
            totalCost = totalCost + total;
            // output
            $(".hidden-btns h3 span").html(totalCost);
        });
        $(".deliver").click(function () {
            $(".hidden-btns h5").hide();
            $(".btn.deliver").hide();
            $(".btn.no-deliver").hide();
            $(".hidden-btns.location").show();
            $(".hidden-btns h3 span").html(totalCost + 150);
            var location =prompt("Enter your location");
            window.alert(`Thank you for choosing pizza-cafe. Your order will be delivered to ${location}`);

        });
        // no delivery
        $(".no-deliver").click(function() {
            $(".hidden-btns h3 span").html(totalCost);
            $(".hidden-btns h5").hide();
            $(".btn.no-deliver").hide();
            $(".btn.deliver").hide();
            window.alert(`Thank you for choosing pizza-cafe.`);
          });
    });

});