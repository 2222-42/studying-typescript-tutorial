"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.send = function (email) {
        console.log("Sent email to " + email + ".");
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to " + email + ".");
        return true;
    };
    Mail.prototype.later = function (email, after) {
        console.log("Send email to " + email + " in " + after + " ms.");
        return true;
    };
    return Mail;
}());
// An interface also can extend a class. 
// If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.enable = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.enable = function () { };
    return TextBox;
}(Control));
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Label;
}(Control));
// - error TS2420: Class 'Chart' incorrectly implements interface 'StatefulControl'.
//   Property 'state' is missing in type 'Chart' but required in type 'StatefulControl'.
// class Chart implements StatefulControl {
//     enable() { }
// }
