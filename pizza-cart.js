module.exports = function PizzaCart() {
    var large = 0;
    var medium = 0;
    var small = 0;
    var totals = 0;
   


    function pizzaChoice(option){
        if(option == 'large'){
            large += 90.00;
            totals += 90.00;
           
        }
        else if (option == 'medium'){
         medium += 55.00;
         totals += 55.00;
        }
        else if (option == 'small'){
            small += 35.00;
            totals += 35.00;
        }

    }

    function largeTotal(){
        return 'R' + large;

    }

    function mediumTotal(){
        return 'R' + medium;
    }

    function smallTotal(){
        return 'R' + small;
    }

    function cartTotal(){
        return 'R' + totals;
    }

    
    return { 
       
        pizzaChoice,  
        largeTotal,
        mediumTotal,
        smallTotal,
        cartTotal,
    
    }
}