import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'end'
})

export class EndPipe implements PipeTransform {
    transform(value: number): string {
        let part = "записей";
            let pos = value % 10;
            if(pos == 1)
            {
                if(!((value > 10)&&(value < 20)))
                    part = "запись";
            } else
                if((pos == 2)||(pos == 3)||(pos == 4)) {
                    if(!((value > 10)&&(value < 20)))
                        part = "записи";
                }
            let text = value + ' ' + part;
        return text;
    }
}

