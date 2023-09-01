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
                "outline":"",
                "accent-color":"",
                "resize": ""
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
                "outline":"",
                "accent-color":"",
                "resize": ""
            },
            textContent : "Bouton",
            placeHolder : "Saisissez votre texte ici...",
            inputType : "text",
            step : 1,
            min : 0,
            max : 10,
            value : 5,
            disabled : false,
            spellcheck : true
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
            break;
            case "input":{
                this.widget.placeHolder = textContent;
            }
            break;
            case "textarea":{
                this.widget.placeHolder = textContent;
            }
            break;
        }
    }

    updateHtml = (type, textHover = false, isChecked = false) =>{
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
            case "textarea":
                this.widget.html = `<textarea class = "${simplifiedClassname}" placeholder = "${this.widget.placeHolder}"${!this.widget.spellcheck ? ` spellcheck = "false"` : ""}${this.widget.disabled ? " disabled": ""}></textarea>`;
            break;
            case "range":
                this.widget.html = `<input type = "range" class = "${simplifiedClassname}" value = "${this.widget.value}" min = "${this.widget.min}" max = "${this.widget.max}" step = "${this.widget.step}"></input>`;
            break;
            case "checkbox":
                this.widget.html = `<input type = "checkbox" class = "${simplifiedClassname}"${isChecked ? " checked":""}></input>`;
            break;
            case "radio":
                this.widget.html = `<input type = "radio" class = "${simplifiedClassname}"${isChecked ? " checked":""}></input>`;
            break;
            case "link":
                (!textHover) ? this.widget.html = `<a href = "" class = "${simplifiedClassname}">${this.widget.textContent}</a>` :
                               this.widget.html = `<a href = "" class = "${simplifiedClassname}"><span>${this.widget.textContent}</span></a>`;
            break;
            case "label":
                (!textHover) ? this.widget.html = `<label class = "${simplifiedClassname}">${this.widget.textContent}</a>` :
                               this.widget.html = `<label class = "${simplifiedClassname}"><span>${this.widget.textContent}</span></label>`;
            break;
        }
    }
}