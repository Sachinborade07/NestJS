import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class JsonParsePipe implements PipeTransform {
    transform(value: string) {
        try {
            return JSON.parse(value);
        } catch {
            throw new BadRequestException("Invalid JSON");
        }
    }
}