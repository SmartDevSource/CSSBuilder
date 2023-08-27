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
                "content": ""
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
                "opacity": "1"
            },
            textContent : "Bouton"
        };
        this.updateHtml();
    }

    updateTextContent = (type, textContent) =>{
        switch(type){
            case "button":{
                this.widget.textContent = textContent;
            }
            break;
        }
    }

    updateHtml = (textHover = false) =>{
        let originalClassname = this.widget.classname.split('.{').join('');
        let simplifiedClassname = originalClassname.replace(/[.{]/g, '');

        (!textHover) ? this.widget.html = `<button class = "${simplifiedClassname}">${this.widget.textContent}</button>` :
                       this.widget.html = `<button class = "${simplifiedClassname}"><span>${this.widget.textContent}</span></button>`;

    }
}