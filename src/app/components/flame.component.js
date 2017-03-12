"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FlameComponent = (function () {
    // Contructor for FlameComponent Class
    function FlameComponent() {
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
    FlameComponent.prototype.stripCharacters = function (firstName, secondName) {
        firstName = firstName.toUpperCase();
        secondName = secondName.toUpperCase();
        var combinedName = firstName + secondName;
        var i = firstName.length;
        while (i--) {
            var charToReplace = firstName.charAt(i);
            if (secondName.indexOf(charToReplace) !== -1) {
                var replaceRegEx = new RegExp(charToReplace, 'g');
                combinedName = combinedName.replace(replaceRegEx, '');
            }
        }
        return combinedName;
    };
    FlameComponent.prototype.calculateFLAME = function (count) {
        var magicWord = this.MAGICWORD;
        for (var i = 0; i < this.MAGICWORD.length - 1; i++) {
            var mod = count % magicWord.length;
            var charToRemove = "";
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
    };
    FlameComponent.prototype.FlameButtonHandler = function (event) {
        var strippedName, FLAME_VALUE;
        var firstName = document.getElementById('firstName').value;
        var secondName = document.getElementById('secondName').value;
        var result = document.getElementById('result');
        var resultGroup = document.getElementById('resultGroup');
        if (firstName.trim() == "" || secondName.trim() == "") {
            alert('Please enter valid values in name textfields');
            return;
        }
        strippedName = this.stripCharacters(firstName, secondName);
        FLAME_VALUE = this.calculateFLAME(strippedName.length);
        resultGroup.style.display = 'block';
        result.innerHTML = this.FLAME_OBJ[FLAME_VALUE];
    };
    FlameComponent = __decorate([
        core_1.Component({
            selector: 'flame',
            template: "\n    <div class=\"container\">\n        <h4>Enter your name &amp; His/Her name below and click the 'Calculate FLAME' button.</h4>\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"secondName\">Second Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"secondName\" placeholder=\"name\">\n        </div>\n        \n        <button id=\"calculate\" (click)=\"FlameButtonHandler()\" type=\"buton\" class=\"btn btn-default\">Calculate FLAME</button>\n        \n        <div id=\"resultGroup\" class=\"form-group text-center well\">\n            <label id=\"result\"></label>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], FlameComponent);
    return FlameComponent;
}());
exports.FlameComponent = FlameComponent;
//# sourceMappingURL=flame.component.js.map