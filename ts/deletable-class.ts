export class Deletable {
    isDeleted: boolean;

    delete() {
        this.isDeleted = true;
    }
}