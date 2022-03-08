/**
 * The builder interface specifies methods for creating the different
 * parts of the Product objects
 */
export interface Builder{
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}
