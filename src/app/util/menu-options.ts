export class MenuOptions {
    key: number
    label: string;
    route: string;
    matIcon: string;
    submenus: MenuOptions[] = [];
    expanded: boolean = false;
}