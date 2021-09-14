module.exports = function PizzaCart() {
    var large =  "R" + 90.00;
    var medium =  "R" + 55.00;
    var small = "R" + 35.00;
    var totals = 0;
   


    function pizzaChoice(option){
        if(option == 'large'){
            large += Number(option.large);
            totals += large;
           
        }
        else if (option == 'medium'){
         medium += Number(option.medium);
         totals += medium;
        }
        else if (option == 'small'){
            small += Number(option.small);
            totals += small;
        }

    }

    function getChoice() {
        return {
            large,
            medium,
            small
        }

    }

    function cartTotal(){
        return 'R' + totals;
    }

    
    return { 
       
        pizzaChoice,  
        getChoice,
        cartTotal,
    
    }
}