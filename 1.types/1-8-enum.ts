{
    /**
     *  Enum 
     */
    // JavaScript 
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const THURSDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
    const dayOfToday = DAYS_ENUM.MONDAY; 

    //TypeScript enum을 쓰는 경우는 모바일 애플리케이션에서 json으로 묶어서 다른클라이언트에게 넘겨야할때 사용
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday, // 0
        Tuesday, // 1  
        Wednesday, // 2 
        Thursday, // 3
        Friday, // 4 
        Satarday,
        Sunday,
    }
    console.log(Days.Monday);
    let day: Days = Days.Satarday;
    day = Days.Tuesday;
    //day = 10;
    console.log(day);

    let dayOfweek:  DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday'
 
}