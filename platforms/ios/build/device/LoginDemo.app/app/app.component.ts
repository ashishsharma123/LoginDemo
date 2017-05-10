import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout orientation="vertical"  class="mainLayout" backgroundImage = '~/images/bg.jpg'>
        <StackLayout orientation="horizontal" class="stackWidth" alignSelf="auto">
            <Label text="UserName:" textWrap="true" class="lbl"></Label>
            <TextField hint="UserName" text="" class="txt"></TextField>
        </StackLayout>
        <StackLayout orientation="horizontal" class="stackWidth">
            <Label text="Password:" textWrap="true" class="lbl"></Label>
            <TextField hint="Password" text="" class="txt"></TextField>
        </StackLayout>
        <Button text="SIGNIN"  class="btn"></Button>
        
    </StackLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
