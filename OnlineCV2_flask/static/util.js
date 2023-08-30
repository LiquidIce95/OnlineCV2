class Icon_button extends HTMLElement {
    constructor(parent, child, document, window, HoverColor, Color) {
        super();
        this.inIcon = false;
        this.ParentOn = false;
        this.ChildOn = false;
        this.Parent = parent;
        this.Child = child;
        this.HoverColor = HoverColor;
        this.Color = Color;
        this.Window = window;
        this.Document = document;
        this.ParentBottom = this.px_to_vp('bottom', this.Parent);
        // create the icon 
        this.Icon = document.createElement('span'); // changed 'icon' to 'span', adjust if needed
        this.Icon.innerHTML = '&#9776;';
        this.Icon.classList.add('icon');
        document.body.appendChild(this.Icon);
        this.Icon.style.bottom = `${this.ParentBottom - 15}vh`;
        // define behaviour
        this.sizer(this.Icon, this.Child);
        window.addEventListener('load', () => this.sizer(this.Icon, this.Child));
        window.addEventListener('resize', () => this.sizer(this.Icon, this.Child));
        this.Icon.addEventListener('click', () => this.toggleChild(this.Child, this.Icon));
        this.Parent.addEventListener('mouseover', () => this.titleMouseOver(this.Parent, this.Icon));
        this.Icon.addEventListener('mouseover', () => (this.inIcon = true));
        this.Icon.addEventListener('mouseout', () => this.iconMouseOut(this.Icon));
        this.Parent.addEventListener('mouseout', () => this.titleMouseOut(this.Parent, this.Icon));
    }
    px_to_vp(dir, ob) {
        let style = window.getComputedStyle(ob);
        let bottomInPx = parseFloat(style.getPropertyValue(dir).replace('px', ''));
        // Convert to vw
        let bottomInVw = (bottomInPx / window.innerWidth) * 100 * 2;
        return bottomInVw;
    }
    // positions the Child correctly
    sizer(icon, CV_body) {
        this.ParentBottom = this.px_to_vp('bottom', this.Parent);
        CV_body.style.bottom = `${this.ParentBottom - 60}vh`;
    }
    titleMouseOver(title, icon) {
        title.style.color = this.HoverColor;
        icon.style.opacity = '1';
        this.ParentOn = true;
    }
    // enabling or disabling the CV_body by clicking
    toggleChild(child, icon) {
        if (!this.ChildOn) {
            child.style.display = 'block';
            this.ChildOn = true;
            icon.style.transform = 'translateX(-50%) rotate(90deg)'; // Translate and rotate
        }
        else {
            child.style.display = 'none';
            this.ChildOn = false;
            icon.style.transform = 'translateX(-50%) rotate(0deg)'; // Translate and rotate
        }
    }
    iconMouseOut(icon) {
        this.inIcon = false;
        setTimeout(() => {
            if (!this.ChildOn && !this.ParentOn && !this.inIcon) {
                icon.style.opacity = '0';
            }
        }, 2000);
    }
    titleMouseOut(title, icon) {
        title.style.color = this.Color;
        this.ParentOn = false;
        setTimeout(() => {
            if (!this.ChildOn && !this.ParentOn && !this.inIcon) {
                icon.style.opacity = '0';
            }
        }, 2000);
    }
}
customElements.define('icon-button', Icon_button); // Registers the custom element with the browser
export { Icon_button };
