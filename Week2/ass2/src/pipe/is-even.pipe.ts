import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class IsEvenPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const num = parseInt(value, 10);

        if (isNaN(num)) {
            throw new BadRequestException('Value must be number');
        }

        if (num % 2 !== 0) {
            throw new BadRequestException('Number must be even ');
        }

        return num;
    }
}