import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
//for errors
interface HashTable<T> {
    [key: string]: string;
}
//js for vat check
//declare const checkVATNumber: any; 

/**
 * Class for data validation.
 * autor: Petar Ivanov
 */

@Injectable()
export class Valido {


    private errorMessages: HashTable<string> = {};
    private forbiddenWords = ["select", "insert", "update", "delete", "drop", "fuck"];
    //Patterns
    private domain: string = '(([www.]*([a-z]*\\-)?([a-z]{1,}\\.)){1,2}[a-z]+)|(?:\\d{1,3}\.){3}\\d{1,3}';

    private phonePattern: string = '\\+?\\d{9,15}';
    private carYearPattern: string = '[12]\\d{3}';//dummy car year validator
    private regNumberPattern: string = '[ABEKMHOPCTYX]{1,2}\\ ?[0-9]{4}\\ ?[ABEKMHOPCTYX]{1,2}';

    //private checkVat = checkVATNumber;

    constructor() {
        try {
            this.loadErrorMessages();
        } catch (error) {
        }
    }
    loadErrorMessages() {
        this.errorMessages['required'] = 'app.required_field';
        this.errorMessages['password'] = 'app.error_password';
        this.errorMessages['username'] = 'app.error_username';
        this.errorMessages['name'] = 'app.invalid_device_pattern';
        this.errorMessages['domain'] = 'app.invalid_domain_pattern';
        this.errorMessages['ip'] = 'app.invalid_ip_pattern';

        //baseform component
        this.errorMessages['email'] = 'app.error_email';
        this.errorMessages['password'] = 'app.error_password';
        this.errorMessages['username'] = 'app.error_username';
        this.errorMessages['firstName'] = 'app.error_firstName';
        this.errorMessages['middleName'] = 'app.error_middleName';
        this.errorMessages['lastName'] = 'app.error_lastName';
        this.errorMessages['birthDate'] = 'app.error_birthDate';
        this.errorMessages['address'] = 'app.error_address';
        this.errorMessages['roleId'] = 'app.error_roleId';
        this.errorMessages['positionId'] = 'app.positionId';
        this.errorMessages['phoneNumberPrivate'] = 'app.error_phoneNumberPrivate';
        this.errorMessages['bulstat'] = "app.bulstat_invalid";
        this.errorMessages['db_names'] = "app.db_names_invalid";
        this.errorMessages['invalid_reg_num_pattern'] = "app.invalid_reg_num_pattern";

    }

    getErrorMessage(field: string): string {

        let displayError: string = this.errorMessages[field];
        if (displayError) {
            return displayError;
        }
        return this.errorMessages['required'];
    }

    // validateVatNumber(vatnum: string): any {
    //     return this.checkVat(vatnum);
    // }
    /**
     * Returns array with valido rules.
     * @param required 
     */
    validateDomainOrIp(required: boolean) {
        return required ?
            [Validators.required,
            Validators.pattern(this.domain)
            ] : [Validators.pattern(this.domain)]
    }


    validateDeviceNumber() {
        return [
            Validators.required,
            Validators.pattern('[0-5][0-9A-Z]{3}')
        ];
    }

    validateSimNumber(required: boolean) {
        return required ? [
            Validators.required,
            Validators.pattern("\\d{20}")
        ] :
            [
                Validators.pattern("\\d{20}")
            ];
    }

    validateBgGsmNumber(required: boolean) {
        return required ? [
            Validators.required,
            Validators.pattern("\\+?359\\d{9}")
        ] : [
            Validators.pattern("\\+?359\\d{9}")
        ];
    }

    validatePhone(req: boolean) {
        if (req) {
            return [Validators.required, Validators.pattern(this.phonePattern)];
        } else {
            return [Validators.pattern(this.phonePattern)];
        }
    }

    validateCarYear(required: boolean) {
        if (required) {
            return [Validators.required, Validators.pattern(this.carYearPattern)];
        } else {
            return [Validators.pattern(this.carYearPattern)];
        }
    }
    /**
     * Checks user input string with every word in collection with forbidden words.
     * @param userInput the user input
     */
    isThereForbiddenWords(userInput: string): boolean {
        for (let index = 0; index < this.forbiddenWords.length; index++) {
            const element = this.forbiddenWords[index];
            if (userInput.toLowerCase().includes(element)) {
                return true;
            }
        }
        return false;
    }
    ////////////////////////////////
    //      OLD
    ////////////////////////////////
    validateDbNames(min: number, max: number) {
        return [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern("[\\w\\_]+")
        ];
    }

    validateText(min: number, max: number) {
        return [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max)
        ];
    }

    validateName(min: number, max: number) {
        return [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern("([а-яА-Я]{2,})|([a-zA-Z]{2,})")
        ];
    }

    validateMinMax(min: number, max: number) {
        return [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern('[0-9]+')  // validates input is digit
        ];
    }

    validateCarRegNumber(required: boolean) {
        return required ?

            [
                Validators.required,
                Validators.pattern(this.regNumberPattern)
            ] : [

                Validators.pattern(this.regNumberPattern)
            ];
    }


    //   validateName(min: number, max: number) {
    //     return ['', [
    //       Validators.required,
    //       Validators.minLength(min),
    //       Validators.maxLength(max),
    //       Validators.pattern("([а-яА-Я]{2,})|([a-zA-Z]{2,})") 
    //     ]];
    //   }


    //   validateMinMax(min: number, max: number) {
    //     return ['', [
    //       Validators.required,
    //       Validators.minLength(min),
    //       Validators.maxLength(max),
    //       Validators.pattern('[0-9]+')  // validates input is digit
    //     ]]
    //   }
    /**
     * Minimum min characters, at least one uppercase letter, one lowercase letter, one number and one special character:
     */
    validatePassword(min: number, max: number) {
        return [
            Validators.required,
            Validators.minLength(min),
            Validators.maxLength(max),
            Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-])[\\da-zA-Z\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-]{' + min + ',' + max + '}')  // validates input is digit
        ];
    }

    validateAllFormFields(formGroup: FormGroup) {         //{1}
        Object.keys(formGroup.controls).forEach(field => {  //{2}
            const control = formGroup.get(field);             //{3}
            if (control instanceof FormControl) {

                if (!control.valid) {
                    console.log('brada');
                    console.log(field);
                }//{4}
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {        //{5}
                this.validateAllFormFields(control);            //{6}
            }
        });
    }
}