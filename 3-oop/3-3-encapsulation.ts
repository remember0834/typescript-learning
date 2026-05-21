
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;

    };


    // public
    // private 
    // protected

    class CoffeMaker{
        
    private static BEANS_GRAM_PER_SHOT:number = 7 //class level 클래스와 함께 공유하는건 static으로 
    private coffeeBeans: number = 0; // instance (object) level
    
    private constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
        return new CoffeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans
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


    const maker = CoffeMaker.makeMachine(32);
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -34; // invalid 

    maker.fillCoffeeBeans(32);
    
    class User {
        get fullName(): string {
            return  `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0){

            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.age); 
    console.log(user.fullName);

    
}