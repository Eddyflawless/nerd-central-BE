declare const name = "docktor";
interface IMask {
    name: string;
    dosage: number;
}
declare function medicine(prescription: IMask): Promise<unknown>;
