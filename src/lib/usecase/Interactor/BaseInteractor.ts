export class BaseInteractor<E> {
    private readonly entity: any;

    constructor(entity: E) {
        this.entity = entity;
    }

    setPropertyValue<T>(property: string, value: T): void {
        this.entity[property] = value;
    }

    setSubpropertyValue<T>(property: string, subproperty: string, value: T): void {
        this.entity[property][subproperty] = value;
    }
}
