{
    //Array
    //const scores: number[] = [1, 3, 4];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {}

    //Tuple => interface, type alias, class  동적으로 사용할때 이용 기본적으로 잘 사용 하지 않음 
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123 
    const [name, age] = student;

}
