{
    /**
     *  Type Assertions 별로 비추천
     */

    function jsStrFunc(): any{
        return 2;
    }

    const result = jsStrFunc();
    console.log((result as string ).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //주의 !! 

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); // 주의 !는 확신을 의미 

    const button = document.querySelector('class')!;
    // if(button) {
    //     button.nodeValue;
    // }


}
 