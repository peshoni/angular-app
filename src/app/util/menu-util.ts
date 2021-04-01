import { MenuOptions } from "./menu-options";

export class MenuUtil {
    private menuOptions: MenuOptions[] = [];
    constructor() {

    }

    addMenu(menu: MenuOptions) {
        this.menuOptions.push(menu);
    }

    addSubmenu(key: number, subMenu: MenuOptions) {
        let index = this.menuOptions.findIndex(menu => menu.key === key);
        if (index > -1) {
            this.menuOptions[index].submenus.push(subMenu);
        } else {
            console.log('no such menu');
        }
    }

    buildMenu(): MenuOptions[] {
        if (this.menuOptions.length === 0) {
            throw new Error('The menu is empty');
        } else {
            return this.menuOptions;
        }

    }
}