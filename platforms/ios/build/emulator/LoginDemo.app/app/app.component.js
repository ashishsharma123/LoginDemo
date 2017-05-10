"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout orientation=\"vertical\"  class=\"mainLayout\" backgroundImage = '~/images/bg.jpg'>\n        <StackLayout orientation=\"horizontal\" class=\"stackWidth\" alignSelf=\"auto\">\n            <Label text=\"UserName:\" textWrap=\"true\" class=\"lbl\"></Label>\n            <TextField hint=\"UserName\" text=\"\" class=\"txt\"></TextField>\n        </StackLayout>\n        <StackLayout orientation=\"horizontal\" class=\"stackWidth\">\n            <Label text=\"Password:\" textWrap=\"true\" class=\"lbl\"></Label>\n            <TextField hint=\"Password\" text=\"\" class=\"txt\"></TextField>\n        </StackLayout>\n        <Button text=\"SIGNIN\"  class=\"btn\"></Button>\n        \n    </StackLayout>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDLElBQWEsWUFBWTtJQUF6QjtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksWUFBWTtJQWpCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxtdEJBYVQ7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUV4QjtBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgIGNsYXNzPVwibWFpbkxheW91dFwiIGJhY2tncm91bmRJbWFnZSA9ICd+L2ltYWdlcy9iZy5qcGcnPlxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJzdGFja1dpZHRoXCIgYWxpZ25TZWxmPVwiYXV0b1wiPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJVc2VyTmFtZTpcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cImxibFwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJVc2VyTmFtZVwiIHRleHQ9XCJcIiBjbGFzcz1cInR4dFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJzdGFja1dpZHRoXCI+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBhc3N3b3JkOlwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwibGJsXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgdGV4dD1cIlwiIGNsYXNzPVwidHh0XCI+PC9UZXh0RmllbGQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIlNJR05JTlwiICBjbGFzcz1cImJ0blwiPjwvQnV0dG9uPlxuICAgICAgICBcbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbn1cbiJdfQ==