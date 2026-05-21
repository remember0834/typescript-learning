 {
   /**
    * Javascript
    * Primitive: number, string , boolean, bigint, symbol, null, undefined
    * Object: function, array... 
    * 
    */

    // number
    const num:number = -6;

    // string 
    const str:string = 'hello';

    // boolean
    const boal: boolean = false;

    //undefined
    let name: undefined
    let age: number | undefined; //undefined null보다 자주 이용 
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined
    }

    //null 
    let person: null;
    let person2: string | null;

    //unknown 잘 사용 안함 구체적 타입 지정하자 
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;


    //any 가능하면 쓰지 말자 다 담을 수 있다. 
    let anything: any =0;
    anything = 'hello';

    //void  void 생략  가능 
    function print(): void{
        console.log('hello');
        return;
    }

    let unusable: void = undefined; // 잘 사용 안한다. 

    //never
    function throwError(message: string): never {
        //message -> server (log)
        throw new Error(message);
        while(true) {

        }  
    }
    let nerverEnding: never; // 사용하면 안된다. 

    // object
    let obj: object; // 잘 사용하지 않는다. 
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'elle'});
    acceptSomeObject({animal: 'dog'});
 }
