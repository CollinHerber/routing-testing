import { valueConverter } from '@aurelia/runtime-html';

@valueConverter('capitalize')
export class CapitalizeText {
    public toView(value: string) {
        return value.toUpperCase();
    }
}
