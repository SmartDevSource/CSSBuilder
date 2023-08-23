export class Widgets {

    constructor(){
        this.widget = {
            classname : ".myButton{",
            baseCode : {
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
                "font-weight":""
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

    updateHtml = () =>{
        let originalClassname = this.widget.classname.split('.{').join('');
        let simplifiedClassname = originalClassname.replace(/[.{]/g, '');
        this.widget.html = `<button class = "${simplifiedClassname}">${this.widget.textContent}</button>`;
    }
}