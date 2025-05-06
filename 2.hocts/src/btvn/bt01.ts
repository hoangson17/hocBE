import { LogTime } from "../inc/btDecorator";

// viết decorator @LogTime() để tự động log thời gian chạy của method(thực thi trong bao lâu)
class TaskService{
    @LogTime()
    doHaevy(){
        for(let i = 0;i<1e7;i++){}
    }
}

