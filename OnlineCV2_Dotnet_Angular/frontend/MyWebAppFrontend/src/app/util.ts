
/*this object consists of a parent (text field) which enables or disables a child by clicking on the icon
if the child is visible the icon stays, if the child is not visible the icon vanishes after 5 seconds */
class Icon_button{
    Icon : HTMLElement;
    inIcon : boolean;
    ParentOn : boolean;
    ChildOn : boolean;
    Parent : HTMLElement;
    ParentBottom : number;
    Child : HTMLElement;
    AppComponent : any;
    Document : any;
    Window : any;
    HoverColor : string;
    Color : string;


    constructor(parent : HTMLElement, child : HTMLElement,  AppComponent : any, document: any, window : any, HoverColor: string, Color : string){

        this.Parent = parent;
        this.Child = child;
        this.AppComponent = AppComponent;
        this.inIcon = false;
        this.ParentOn = false;
        this.ChildOn = false;
        this.HoverColor = HoverColor;
        this.Color  = Color;
        this.Window = window;
        this.Document = document;

        this.ParentBottom = 0;
        this.px_to_vp('bottom',this.Parent);


        // create the icon 
        this.Icon = this.AppComponent.renderer.createElement('icon');
        this.AppComponent.renderer.setProperty(this.Icon, 'innerHTML', '&#9776;');
        this.AppComponent.renderer.addClass(this.Icon, 'icon');
        this.AppComponent.renderer.appendChild(this.Document.body, this.Icon);
        this.AppComponent.renderer.setStyle(this.Icon, 'bottom', `${this.ParentBottom -15}vh`);

        // define behaviour 

        this.sizer(this.Icon, this.Child);

        window.addEventListener('load',() => this.sizer(this.Icon, this.Child));
        window.addEventListener('resize', () => this.sizer(this.Icon,this.Child));
        this.Icon.addEventListener('click',()=> this.toggleChild(this.Child,this.Icon));
        this.Parent.addEventListener('mouseover',()=> this.titleMouseOver(this.Parent,this.Icon));
        this.Icon.addEventListener('mouseover', () => (this.inIcon = true));
        this.Icon.addEventListener('mouseout', () => this.iconMouseOut(this.Icon));
        this.Parent.addEventListener('mouseout', () => this.titleMouseOut(this.Parent, this.Icon));


    }

    px_to_vp(dir:string, ob : HTMLElement):void{
        let style : CSSStyleDeclaration = window.getComputedStyle(ob);
        let bottomInPx: number = parseFloat(style.getPropertyValue(dir).replace('px', ''));

        // Convert to vw (if needed)
        let bottomInVw: number = (bottomInPx / window.innerWidth) * 100*2;

        this.ParentBottom = bottomInVw;

    }

    /*positons the Child correctly*/
    sizer(icon: HTMLElement, CV_body: HTMLElement) {
        // Convert to vw (if needed)
        this.px_to_vp('bottom',this.Parent);

        console.log(this.ParentBottom);

        this.AppComponent.renderer.setStyle(CV_body, 'bottom', `${this.ParentBottom -60}vh`);
    }

    titleMouseOver(title: any, icon: any) {
        this.AppComponent.renderer.setStyle(title, 'color', 'grey');
        this.AppComponent.renderer.setStyle(icon, 'opacity', '1');
        this.ParentOn = true;
    }

    // enabling or disabling the cv body CV_body by clicking
    toggleChild(child: HTMLElement, icon: HTMLElement) {
            if (!this.ChildOn) {
                this.AppComponent.renderer.setStyle(this.Child, 'display', 'block'); 
                this.ChildOn = true;
                this.Icon.style.transform = 'translateX(-50%) rotate(90deg)'; // Translate and rotate
            } else {
                this.AppComponent.renderer.setStyle(this.Child, 'display', 'none'); 
                this.ChildOn = false;
                this.Icon.style.transform = 'translateX(-50%) rotate(0deg)'; // Translate and rotate
            }
    } 
    iconMouseOut(icon: any) {
        this.inIcon = false;
        setTimeout(() => {
        if (!this.ChildOn && !this.ParentOn && !this.inIcon) {
            this.AppComponent.renderer.setStyle(icon, 'opacity', '0');
        }
        }, 2000);
    }

    titleMouseOut(title: any, icon: any) {
        this.AppComponent.renderer.setStyle(this.Parent, 'color', 'white');
        this.ParentOn = false;
        setTimeout(() => {
        if (!this.ChildOn && !this.ParentOn && !this.inIcon) {
            this.AppComponent.renderer.setStyle(icon, 'opacity', '0');
        }
        }, 2000);
    }

    



};



export {
    Icon_button
}