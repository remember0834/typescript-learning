
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;

    };

    class CoffeMaker{
        
    static BEANS_GRAM_PER_SHOT:number = 7 //class level 클래스와 함께 공유하는건 static으로 
    coffeeBeans: number = 0; // instance (object) level
    
    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
        return new CoffeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
        if(this.coffeeBeans < shots * CoffeMaker.BEANS_GRAM_PER_SHOT ) {
            throw new Error('Not enough coffee beans!.');
        }

        this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAM_PER_SHOT; 
        return {
            shots: shots,
            hasMilk: false,
            };
        }
    }

    const maker = new CoffeMaker(32);
    console.log(maker); 
    const maker2 = new CoffeMaker(14);
    console.log(maker2);    
    
    const maker3= CoffeMaker.makeMachine(3);
    
}