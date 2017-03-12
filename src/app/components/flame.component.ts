import { Component } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

interface FlameObj {
    F: string,
    L: string,
    A: string,
    M: string,
    E: string
}

@Component({
    selector: 'flame',
    template: `
    <div class="container">
        <h4>Enter your name &amp; His/Her name below and click the 'Calculate FLAME' button.</h4>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="name">
        </div>
        <div class="form-group">
            <label for="secondName">Second Name</label>
            <input type="text" class="form-control" id="secondName" placeholder="name">
        </div>
        <button id="calculate" (click)="FlameButtonHandler()" type="buton" class="btn btn-default">Calculate FLAME</button>
        <div id="resultGroup" class="form-group text-center well">
            <label id="result"></label>
        </div>
    </div>
    `
})

export class FlameComponent {
    
    // Variable Declarations
    MAGICWORD: string;
    MAGICWORD_LENGTH: number;
    FLAME_OBJ: FlameObj;

    // Contructor for FlameComponent Class
    constructor() {
        this.MAGICWORD = 'FLAME';
        this.MAGICWORD_LENGTH = 5;
        this.FLAME_OBJ = {
            F: 'Friend',
            L: 'Love',
            A: 'Affair',
            M: 'Marriage',
            E: 'Enemy'
        };
    }

    // Takes input from user and combine the letters from both the name
    // After compilation
    stripCharacters(firstName: string, secondName: string) {
        firstName = firstName.toUpperCase();
        secondName = secondName.toUpperCase();
        let combinedName = firstName + secondName;
        let i = firstName.length;
        while (i--) {
            let charToReplace = firstName.charAt(i);
            if (secondName.indexOf(charToReplace) !== -1) {
                let replaceRegEx = new RegExp(charToReplace, 'g');
                combinedName = combinedName.replace(replaceRegEx, '');
            }
        }
        return combinedName;
    }


    calculateFLAME(count: number) {
        let magicWord = this.MAGICWORD;

        for (let i = 0; i < this.MAGICWORD.length - 1; i++) {

            let mod = count % magicWord.length;
            let charToRemove = "";

            if (mod) {
                charToRemove = magicWord.charAt(mod - 1);
            }
            else {
                // if modulus is 0 means take the last character out
                charToRemove = magicWord.charAt(magicWord.length - 1);
            }

            var magicWordArr = magicWord.split(charToRemove);
            magicWord = magicWordArr[1] + magicWordArr[0];
        }
        return magicWord;
    }

    FlameButtonHandler(event: MouseEvent) {
        let strippedName : string, FLAME_VALUE : string;
        let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
        let secondName = (<HTMLInputElement>document.getElementById('secondName')).value;
        let result = document.getElementById('result');
        let resultGroup = document.getElementById('resultGroup');

        if (firstName.trim() == "" || secondName.trim() == "") {
            alert('Please enter valid values in name textfields');
            return;
        }
        
        strippedName = this.stripCharacters(firstName, secondName);
        FLAME_VALUE = this.calculateFLAME(strippedName.length);

        resultGroup.style.display = 'block';
        result.innerHTML = this.FLAME_OBJ[FLAME_VALUE];
    }
}
