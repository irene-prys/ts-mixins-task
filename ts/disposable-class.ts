export class Disposable {
    isDisposed: boolean;

    dispose() {
        this.isDisposed = true;
    }
}