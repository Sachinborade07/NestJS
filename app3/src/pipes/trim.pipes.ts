import { Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class TrimPipe implements PipeTransform {
    transform(value: string) {
        return value.trim();
    }
}

export class ToUpperCasePipe implements PipeTransform {
    transform(value: string) {
        return value.toUpperCase();
    }
}