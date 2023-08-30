import {DefaultCodes} from "./defaultcodes.js"

export class Widgets {

    constructor(){
        this.widget = {
            classname : "button",
            baseCode : {
                "width":"",
                "height":"",
                "cursor": "",
                "color" : "black;",
                "background-color":"white;",
                "font-size": "16px;",
                "margin": "10px;",
                "padding": "10px;",
                "border": "1px solid black;",
                "border-radius": "",
                "border-bottom-left-radius": "",
                "border-bottom-right-radius": "",
                "border-top-left-radius": "",
                "border-top-right-radius": "",
                "border-left": "",
                "border-top": "",
                "border-right": "",
                "border-bottom": "",
                "box-shadow": "",
                "letter-spacing": "",
                "-webkit-text-stroke":"",
                "text-decoration": "",
                "font-style":"",
                "font-weight":"",
                "background":"",
                "filter":"",
                "transition":"",
                "content": "",
                "outline":""
            },
            hoverCode : {
                "width":"",
                "height":"",
                "color" : "",
                "background-color":"",
                "font-size": "",
                "margin": "",
                "padding": "",
                "border": "",
                "border-radius": "",
                "border-bottom-left-radius": "",
                "border-bottom-right-radius": "",
                "border-top-left-radius": "",
                "border-top-right-radius": "",
                "border-left": "",
                "border-top": "",
                "border-right": "",
                "border-bottom": "",
                "box-shadow": "",
                "letter-spacing": "",
                "-webkit-text-stroke":"",
                "text-decoration": "",
                "font-style":"",
                "font-weight":"",
                "background":"",
                "filter":"",
                "transition":"",
                "content": "",
                "outline":""
            },
            textContent : "Bouton",
            placeHolder : "Saisissez votre texte ici...",
            inputType : "text"
        };

        this.updateHtml();

        const defaultCodes = DefaultCodes();
        this.defaultBaseCode = defaultCodes.base;
        this.defaultHoverCode = defaultCodes.hover;
    }

    updateTextContent = (type, textContent) =>{
        switch(type){
            case "button":{
                this.widget.textContent = textContent;
            }
            case "input":{
                this.widget.placeHolder = textContent;
            }
            break;
        }
    }

    updateHtml = (type, textHover = false) =>{
        let originalClassname = this.widget.classname.split('.{').join('');
        let simplifiedClassname = originalClassname.replace(/[.{]/g, '');
        
        switch(type){
            case "button":
                (!textHover) ? this.widget.html = `<button class = "${simplifiedClassname}">${this.widget.textContent}</button>` :
                               this.widget.html = `<button class = "${simplifiedClassname}"><span>${this.widget.textContent}</span></button>`;
            break;
            case "input":
                this.widget.html = `<input type = "${this.widget.inputType}" class = "${simplifiedClassname}" placeholder = "${this.widget.placeHolder}"></input>`;
            break;
            case "range":
                this.widget.html = `<input type = "range" class = "${simplifiedClassname}"></input>`;
            break;
            case "checkbox":
                this.widget.html = `<input type = "checkbox" class = "${simplifiedClassname}"></input>`;
            break;
            case "link":
                (!textHover) ? this.widget.html = `<a href = "" class = "${simplifiedClassname}">${this.widget.textContent}</a>` :
                               this.widget.html = `<a href = "" class = "${simplifiedClassname}"><span>${this.widget.textContent}</span></a>`;
            break;
        }
    }
}